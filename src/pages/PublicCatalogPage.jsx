import useProductsRealtime from '../hooks/useProductsRealtime';
import Loader from '../components/common/Loader';
import EmptyState from '../components/common/EmptyState';
import ProductCard from '../components/catalog/ProductCard';
import { formatStockLabel, getWhatsappLink } from '../utils/formatters';

export default function PublicCatalogPage() {
  const { products, loading, error } = useProductsRealtime();
  const totalPairs = products.reduce((accumulator, product) => accumulator + Number(product.stockPares || 0), 0);

  return (
    <section className="catalog-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Disponibles para entrega</span>
          <h1>Almohadas decorativas listas para consultar por codigo</h1>
          <p>El cliente abre el link, mira fotos reales y luego le escribe a tu vendedora por WhatsApp.</p>
        </div>

        <div className="hero-stats">
          <article className="stat-card">
            <strong>{products.length}</strong>
            <span>disenos visibles</span>
          </article>
          <article className="stat-card">
            <strong>{totalPairs}</strong>
            <span>pares disponibles</span>
          </article>
          <article className="stat-card">
            <strong>Venta</strong>
            <span>solo por pares</span>
          </article>
        </div>
      </div>

      {loading ? <Loader label="Cargando catalogo..." /> : null}
      {!loading && error ? <EmptyState title="No se pudo cargar el catalogo" description={error} /> : null}
      {!loading && !error && products.length === 0 ? (
        <EmptyState
          title="No hay almohadas disponibles"
          description="Cuando cargues nuevos diseños desde el panel, apareceran automaticamente aca."
        />
      ) : null}

      {!loading && !error && products.length > 0 ? (
        <div className="catalog-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              stockLabel={formatStockLabel(product.stockPares)}
              whatsappLink={getWhatsappLink(product.codigo)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
