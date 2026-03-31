import { useEffect, useMemo, useState } from 'react';

export default function ProductEditorModal({ product, onClose, onSubmit, submitting }) {
  const [stockPares, setStockPares] = useState(product.stockPares);
  const [notasInternas, setNotasInternas] = useState(product.notasInternas || '');
  const [replacementFile, setReplacementFile] = useState(null);

  const previewUrl = useMemo(() => {
    if (!replacementFile) {
      return product.imageUrl;
    }

    return URL.createObjectURL(replacementFile);
  }, [product.imageUrl, replacementFile]);

  useEffect(() => {
    return () => {
      if (replacementFile) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl, replacementFile]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await onSubmit({
      stockPares: Number(stockPares),
      notasInternas: notasInternas.trim(),
      replacementFile,
    });
  };

  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="editor-title">
        <div className="section-header">
          <div>
            <span className="eyebrow">Editar producto</span>
            <h2 id="editor-title">{product.codigo}</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar">
            ×
          </button>
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="editor-preview">
            <img src={previewUrl} alt={product.codigo} className="editor-image" />
          </div>

          <label className="field">
            <span>Stock en pares</span>
            <input
              type="number"
              min="1"
              step="1"
              value={stockPares}
              onChange={(event) => setStockPares(event.target.value)}
              required
            />
          </label>

          <label className="field">
            <span>Notas internas</span>
            <textarea
              rows="4"
              value={notasInternas}
              onChange={(event) => setNotasInternas(event.target.value)}
              placeholder="Referencia rapida para el equipo"
            />
          </label>

          <label className="field">
            <span>Reemplazar imagen</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setReplacementFile(event.target.files?.[0] || null)}
            />
          </label>

          <div className="button-row">
            <button type="button" className="ghost-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="primary-button" disabled={submitting}>
              {submitting ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
