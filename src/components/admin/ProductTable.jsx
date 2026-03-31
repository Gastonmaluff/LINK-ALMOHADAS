import Loader from '../common/Loader';
import EmptyState from '../common/EmptyState';
import { formatDateTime, formatStockLabel } from '../../utils/formatters';

export default function ProductTable({
  products,
  loading,
  onEdit,
  onDelete,
  emptyTitle,
  emptyDescription,
}) {
  if (loading) {
    return <Loader label="Cargando productos..." />;
  }

  if (products.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="table-shell">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Codigo</th>
            <th>Disponibilidad</th>
            <th>Actualizado</th>
            <th>Notas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td data-label="Foto">
                <img src={product.imageUrl} alt={product.codigo} className="table-thumb" loading="lazy" />
              </td>
              <td data-label="Codigo">
                <strong>{product.codigo}</strong>
              </td>
              <td data-label="Disponibilidad">{formatStockLabel(product.stockPares)}</td>
              <td data-label="Actualizado">{formatDateTime(product.updatedAt || product.createdAt)}</td>
              <td data-label="Notas">{product.notasInternas || 'Sin notas'}</td>
              <td data-label="Acciones">
                <div className="button-row button-row--tight">
                  <button type="button" className="ghost-button" onClick={() => onEdit(product)}>
                    Editar
                  </button>
                  <button type="button" className="danger-button" onClick={() => onDelete(product)}>
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
