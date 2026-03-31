import { useMemo, useState } from 'react';
import useAuth from '../hooks/useAuth';
import useProductsRealtime from '../hooks/useProductsRealtime';
import { useToast } from '../context/ToastContext';
import { deleteProductById, updateExistingProduct } from '../services/productService';
import { formatDateTime, getPublicCatalogUrl } from '../utils/formatters';
import BulkUploader from '../components/admin/BulkUploader';
import ProductTable from '../components/admin/ProductTable';
import ProductEditorModal from '../components/admin/ProductEditorModal';
import UserManagementCard from '../components/admin/UserManagementCard';
import StatCard from '../components/admin/StatCard';
import EmptyState from '../components/common/EmptyState';

export default function AdminDashboardPage() {
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
    const confirmed = window.confirm(`Se eliminara ${product.codigo} y su imagen. Esta accion no se puede deshacer.`);

    if (!confirmed) {
      return;
    }

    try {
      await deleteProductById(product);
      showToast({
        title: `${product.codigo} eliminado`,
        description: 'El producto desaparecio del catalogo publico y del panel.',
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
        description: 'Los cambios ya estan sincronizados con el catalogo.',
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

  const totalPairs = products.reduce((accumulator, product) => accumulator + Number(product.stockPares || 0), 0);

  return (
    <section className="dashboard-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Super admin</span>
          <h1>Control total del catalogo</h1>
          <p>{formatDateTime(new Date())}</p>
        </div>
        <a href={getPublicCatalogUrl()} className="ghost-button" target="_blank" rel="noreferrer">
          Abrir catalogo publico
        </a>
      </div>

      <div className="stat-grid">
        <StatCard label="Disenos activos" value={products.length} />
        <StatCard label="Pares disponibles" value={totalPairs} />
        <StatCard label="Resultados filtrados" value={filteredProducts.length} />
      </div>

      <div className="dashboard-grid">
        <BulkUploader actor={profile} />
        <UserManagementCard actor={profile} />
      </div>

      <section className="panel-card">
        <div className="section-header">
          <div>
            <span className="eyebrow">Inventario</span>
            <h2>Listado completo</h2>
          </div>
          <label className="field field--compact">
            <span>Buscar por codigo</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="ALM-0001"
            />
          </label>
        </div>

        {error ? <EmptyState title="No se pudo leer el inventario" description={error} /> : null}
        {!error ? (
          <ProductTable
            products={filteredProducts}
            loading={loading}
            onEdit={setEditingProduct}
            onDelete={handleDelete}
            emptyTitle="Todavia no hay productos cargados"
            emptyDescription="Usa la carga masiva para crear diseños automaticamente desde varias fotos."
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
