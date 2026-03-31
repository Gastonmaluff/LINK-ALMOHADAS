export default function ProductCard({ product, onOpen }) {
  return (
    <button
      type="button"
      className="product-card"
      onClick={onOpen}
      aria-label={`Abrir diseno ${product.codigo}`}
    >
      <div className="product-image-frame">
        <img src={product.imageUrl} alt={`Diseno ${product.codigo}`} className="product-image" loading="lazy" />
        <span className="product-code-chip">{product.codigo}</span>
      </div>
    </button>
  );
}
