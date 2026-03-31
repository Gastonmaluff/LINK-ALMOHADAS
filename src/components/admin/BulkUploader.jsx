import { useEffect, useMemo, useRef, useState } from 'react';
import { compressImageFile } from '../../utils/imageCompression';
import { createProductsBatch } from '../../services/productService';
import { useToast } from '../../context/ToastContext';
import { formatBytes } from '../../utils/formatters';

let uploadItemId = 0;

function createDraftItem(file, stockPares) {
  uploadItemId += 1;

  return {
    id: `draft-${uploadItemId}`,
    originalName: file.name,
    status: 'compressing',
    stockPares,
    file: null,
    previewUrl: '',
    error: '',
    progress: 0,
    originalSize: file.size,
    compressedSize: 0,
  };
}

export default function BulkUploader({ actor }) {
  const { showToast } = useToast();
  const inputRef = useRef(null);
  const [batchStock, setBatchStock] = useState(1);
  const [items, setItems] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ completed: 0, total: 0, percent: 0 });

  const readyItems = useMemo(() => items.filter((item) => item.status === 'ready'), [items]);

  useEffect(() => {
    return () => {
      items.forEach((item) => {
        if (item.previewUrl) {
          URL.revokeObjectURL(item.previewUrl);
        }
      });
    };
  }, [items]);

  const replaceItem = (itemId, nextValues) => {
    setItems((current) =>
      current.map((item) => (item.id === itemId ? { ...item, ...nextValues } : item)),
    );
  };

  const handleFiles = async (fileList) => {
    const incomingFiles = Array.from(fileList || []);
    const validFiles = incomingFiles.filter((file) => file.type.startsWith('image/'));

    if (validFiles.length === 0) {
      showToast({
        title: 'Selecciona imagenes validas',
        description: 'El lote ignora archivos que no sean imagen.',
        tone: 'danger',
      });
      return;
    }

    const draftItems = validFiles.map((file) => createDraftItem(file, Number(batchStock)));
    setItems((current) => [...draftItems, ...current]);
    setProcessing(true);

    for (let index = 0; index < validFiles.length; index += 1) {
      const sourceFile = validFiles[index];
      const targetItem = draftItems[index];

      try {
        const compressedFile = await compressImageFile(sourceFile, (progress) => {
          replaceItem(targetItem.id, { progress });
        });

        const previewUrl = URL.createObjectURL(compressedFile);

        replaceItem(targetItem.id, {
          status: 'ready',
          progress: 100,
          file: compressedFile,
          previewUrl,
          compressedSize: compressedFile.size,
        });
      } catch (error) {
        replaceItem(targetItem.id, {
          status: 'error',
          error: error.message || 'No se pudo optimizar esta imagen.',
        });
      }
    }

    setProcessing(false);
  };

  const handleInputChange = async (event) => {
    await handleFiles(event.target.files);
    event.target.value = '';
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    await handleFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const clearBatch = () => {
    items.forEach((item) => {
      if (item.previewUrl) {
        URL.revokeObjectURL(item.previewUrl);
      }
    });
    setItems([]);
    setUploadProgress({ completed: 0, total: 0, percent: 0 });
  };

  const applyBatchStock = () => {
    setItems((current) => current.map((item) => ({ ...item, stockPares: Number(batchStock) })));
  };

  const removeItem = (itemId) => {
    setItems((current) => {
      const target = current.find((item) => item.id === itemId);
      if (target?.previewUrl) {
        URL.revokeObjectURL(target.previewUrl);
      }
      return current.filter((item) => item.id !== itemId);
    });
  };

  const handleUpload = async () => {
    if (readyItems.length === 0) {
      return;
    }

    setUploading(true);

    try {
      const result = await createProductsBatch(readyItems, actor, ({ completed, total, percent }) => {
        setUploadProgress({ completed, total, percent });
      });

      const successCount = result.successes.length;
      const failCount = result.failures.length;

      if (successCount > 0) {
        showToast({
          title: `${successCount} diseños creados`,
          description:
            failCount > 0
              ? `${failCount} imagenes fallaron y quedaron marcadas en el lote.`
              : 'Todos los productos ya estan visibles en el catalogo.',
          tone: 'success',
        });
      }

      if (failCount > 0) {
        setItems((current) =>
          current
            .map((item) => {
              const failed = result.failures.find((failure) => failure.itemId === item.id);

              if (!failed) {
                if (item.previewUrl) {
                  URL.revokeObjectURL(item.previewUrl);
                }
                return null;
              }

              return { ...item, status: 'error', error: failed.message };
            })
            .filter(Boolean),
        );
      } else {
        clearBatch();
      }
    } catch (error) {
      showToast({
        title: 'La subida del lote fallo',
        description: error.message,
        tone: 'danger',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="panel-card">
      <div className="section-header">
        <div>
          <span className="eyebrow">Carga masiva</span>
          <h2>Subir muchas fotos en una sola accion</h2>
        </div>
        <button type="button" className="ghost-button" onClick={() => inputRef.current?.click()}>
          Seleccionar imagenes
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={handleInputChange}
      />

      <div className="upload-dropzone" onDrop={handleDrop} onDragOver={handleDragOver}>
        <strong>Arrastra imagenes aca o selecciona multiples archivos</strong>
        <p>Cada imagen se comprime en el navegador antes de subirse a Firebase Storage.</p>
      </div>

      <div className="batch-toolbar">
        <label className="field field--compact">
          <span>Stock inicial del lote</span>
          <input
            type="number"
            min="1"
            step="1"
            value={batchStock}
            onChange={(event) => setBatchStock(event.target.value)}
          />
        </label>

        <button type="button" className="ghost-button" onClick={applyBatchStock} disabled={items.length === 0}>
          Aplicar a todas
        </button>
        <button type="button" className="ghost-button" onClick={clearBatch} disabled={items.length === 0}>
          Limpiar lote
        </button>
        <button
          type="button"
          className="primary-button"
          onClick={handleUpload}
          disabled={readyItems.length === 0 || uploading || processing}
        >
          {uploading ? 'Subiendo lote...' : `Subir ${readyItems.length || 0} diseños`}
        </button>
      </div>

      {(processing || uploading) ? (
        <div className="progress-card">
          <strong>{processing ? 'Optimizando imagenes...' : 'Subiendo productos...'}</strong>
          <div className="progress-bar">
            <span style={{ width: `${uploading ? uploadProgress.percent : 100}%` }} />
          </div>
          {uploading ? (
            <p>
              {uploadProgress.completed} de {uploadProgress.total} completados
            </p>
          ) : (
            <p>Preparando previews y archivos comprimidos.</p>
          )}
        </div>
      ) : null}

      <div className="upload-grid">
        {items.map((item) => (
          <article key={item.id} className={`upload-card upload-card--${item.status}`}>
            <div className="upload-preview">
              {item.previewUrl ? <img src={item.previewUrl} alt={item.originalName} className="upload-image" /> : null}
              {!item.previewUrl ? <span>{item.status === 'compressing' ? 'Procesando...' : 'Sin preview'}</span> : null}
            </div>

            <div className="upload-card-body">
              <strong>{item.originalName}</strong>
              <p>
                {item.compressedSize > 0
                  ? `${formatBytes(item.originalSize)} -> ${formatBytes(item.compressedSize)}`
                  : formatBytes(item.originalSize)}
              </p>

              <label className="field field--compact">
                <span>Stock</span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={item.stockPares}
                  onChange={(event) =>
                    replaceItem(item.id, {
                      stockPares: Number(event.target.value),
                    })
                  }
                  disabled={item.status !== 'ready'}
                />
              </label>

              {item.status === 'compressing' ? <small>Optimizando {item.progress}%</small> : null}
              {item.status === 'error' ? <small className="error-copy">{item.error}</small> : null}
            </div>

            <button type="button" className="icon-button" onClick={() => removeItem(item.id)} aria-label="Quitar imagen">
              ×
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
