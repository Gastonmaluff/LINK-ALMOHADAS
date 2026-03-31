import { useEffect, useRef, useState } from 'react';
import useProductsRealtime from '../hooks/useProductsRealtime';
import Loader from '../components/common/Loader';
import EmptyState from '../components/common/EmptyState';
import ProductCard from '../components/catalog/ProductCard';
import { formatStockLabel } from '../utils/formatters';

export default function PublicCatalogPage() {
  const { products, loading, error } = useProductsRealtime();
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartRef = useRef(null);

  const activeProduct = activeIndex === null ? null : products[activeIndex];

  const closeLightbox = () => {
    setActiveIndex(null);
    touchStartRef.current = null;
  };

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null || products.length === 0) {
        return current;
      }

      return current === 0 ? products.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null || products.length === 0) {
        return current;
      }

      return current === products.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeIndex !== null && activeIndex > products.length - 1) {
      setActiveIndex(products.length ? products.length - 1 : null);
    }
  }, [activeIndex, products.length]);

  useEffect(() => {
    if (!activeProduct) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProduct]);

  useEffect(() => {
    if (!activeProduct) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProduct, products.length]);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event) => {
    if (!touchStartRef.current) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    touchStartRef.current = null;

    if (Math.abs(deltaX) < 36 || Math.abs(deltaY) > 64) {
      return;
    }

    if (deltaX < 0) {
      showNext();
      return;
    }

    showPrevious();
  };

  return (
    <section className="catalog-page">
      {loading ? <Loader label="Cargando catalogo..." /> : null}
      {!loading && error ? <EmptyState title="No se pudo cargar el catalogo" description={error} /> : null}
      {!loading && !error && products.length === 0 ? (
        <EmptyState
          title="No hay almohadas disponibles"
          description="Cuando cargues nuevos disenos desde el panel, apareceran automaticamente aca."
        />
      ) : null}

      {!loading && !error && products.length > 0 ? (
        <div className="catalog-grid" aria-label="Catalogo publico de almohadas">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} onOpen={() => setActiveIndex(index)} />
          ))}
        </div>
      ) : null}

      {activeProduct ? (
        <div
          className="catalog-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada del diseno ${activeProduct.codigo}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="catalog-lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar visor"
          >
            Cerrar
          </button>

          {products.length > 1 ? (
            <>
              <button
                type="button"
                className="catalog-lightbox-nav catalog-lightbox-nav--prev"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Foto anterior"
              >
                &#8249;
              </button>

              <button
                type="button"
                className="catalog-lightbox-nav catalog-lightbox-nav--next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Foto siguiente"
              >
                &#8250;
              </button>
            </>
          ) : null}

          <div
            className="catalog-lightbox-dialog"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="catalog-lightbox-media">
              <img
                src={activeProduct.imageUrl}
                alt={`Diseno ${activeProduct.codigo}`}
                className="catalog-lightbox-image"
              />
            </div>

            <div className="catalog-lightbox-footer">
              <span className="catalog-lightbox-code">{activeProduct.codigo}</span>
              <span className="catalog-lightbox-stock">{formatStockLabel(activeProduct.stockPares)}</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
