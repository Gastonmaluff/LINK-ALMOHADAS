import { useEffect, useState } from 'react';
import { listenToProducts } from '../services/productReadService';

export default function useProductsRealtime() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = listenToProducts(
      (nextProducts) => {
        setProducts(nextProducts);
        setLoading(false);
      },
      (snapshotError) => {
        setError(snapshotError.message || 'No se pudieron cargar los productos.');
        setLoading(false);
      },
    );

    return unsubscribe;
  }, []);

  return {
    products,
    loading,
    error,
  };
}
