export default function ProductCard({ product, stockLabel, whatsappLink }) {
  return (
    <article className="product-card">
      <div className="product-image-frame">
        <img src={product.imageUrl} alt={`Diseño ${product.codigo}`} className="product-image" loading="lazy" />
      </div>
      <div className="product-card-body">
        <div className="product-meta">
          <span className="code-badge">{product.codigo}</span>
          <span className="stock-copy">{stockLabel}</span>
        </div>
        {whatsappLink ? (
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="ghost-button">
            Consultar por WhatsApp
          </a>
        ) : null}
      </div>
    </article>
  );
}
