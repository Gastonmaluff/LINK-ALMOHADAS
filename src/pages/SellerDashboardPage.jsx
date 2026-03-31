import { useMemo, useState } from 'react';
import useAuth from '../hooks/useAuth';
import useProductsRealtime from '../hooks/useProductsRealtime';
import { useToast } from '../context/ToastContext';
import { deleteProductById, updateExistingProduct } from '../services/productService';
import ProductEditorModal from '../components/admin/ProductEditorModal';
import ProductTable from '../components/admin/ProductTable';
import StatCard from '../components/admin/StatCard';
import EmptyState from '../components/common/EmptyState';
import { getPublicCatalogUrl } from '../utils/formatters';

export default function SellerDashboardPage() {
  const { profile } = useAuth();
  const { showToast } = useToast();
  const { products, loading, error } = useProductsRealtime();
  const [search, setSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [submittingEdit, setSubmittingEdit] = useState(false);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return products;
    }

    return products.filter((product) => product.codigo.toLowerCase().includes(normalizedSearch));
  }, [products, search]);

  const handleDelete = async (product) => {
    const confirmed = window.confirm(`Se eliminara ${product.codigo} del sistema y del catalogo publico.`);

    if (!confirmed) {
      return;
    }

    try {
      await deleteProductById(product);
      showToast({
        title: `${product.codigo} dado de baja`,
        description: 'El diseño ya no aparece en el link compartido.',
        tone: 'success',
      });
    } catch (error) {
      showToast({
        title: 'No se pudo eliminar',
        description: error.message,
        tone: 'danger',
      });
    }
  };

  const handleSave = async (payload) => {
    if (!editingProduct) {
      return;
    }

    setSubmittingEdit(true);

    try {
      await updateExistingProduct(editingProduct, payload, profile);
      showToast({
        title: `${editingProduct.codigo} actualizado`,
        description: 'La disponibilidad nueva ya quedo reflejada.',
        tone: 'success',
      });
      setEditingProduct(null);
    } catch (error) {
      showToast({
        title: 'No se pudo guardar',
        description: error.message,
        tone: 'danger',
      });
    } finally {
      setSubmittingEdit(false);
    }
  };

  return (
    <section className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Operaciones</span>
          <h1>Panel rapido para venta diaria</h1>
          <p>Busca por codigo, corrige stock si hace falta y elimina los productos vendidos.</p>
        </div>
        <a href={getPublicCatalogUrl()} className="ghost-button" target="_blank" rel="noreferrer">
          Abrir catalogo publico
        </a>
      </div>

      <div className="stat-grid">
        <StatCard label="Disenos visibles" value={products.length} />
        <StatCard label="Resultados" value={filteredProducts.length} />
      </div>

      <section className="panel-card">
        <div className="section-header">
          <div>
            <span className="eyebrow">Operacion diaria</span>
            <h2>Buscar por codigo</h2>
          </div>
          <label className="field field--compact">
            <span>Codigo</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="ALM-0001"
            />
          </label>
        </div>

        {error ? <EmptyState title="No se pudo cargar el inventario" description={error} /> : null}
        {!error ? (
          <ProductTable
            products={filteredProducts}
            loading={loading}
            onEdit={setEditingProduct}
            onDelete={handleDelete}
            emptyTitle="No hay productos para mostrar"
            emptyDescription="Cuando el super admin cargue nuevos diseños, apareceran aca automaticamente."
          />
        ) : null}
      </section>

      {editingProduct ? (
        <ProductEditorModal
          product={editingProduct}
          submitting={submittingEdit}
          onClose={() => setEditingProduct(null)}
          onSubmit={handleSave}
        />
      ) : null}
    </section>
  );
}
