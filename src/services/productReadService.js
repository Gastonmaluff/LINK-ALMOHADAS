import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';

const productsCollection = collection(db, 'products');

function mapProductDocument(document) {
  return {
    id: document.id,
    ...document.data(),
  };
}

export function listenToProducts(onData, onError) {
  const productsQuery = query(productsCollection, orderBy('createdAt', 'desc'));

  return onSnapshot(
    productsQuery,
    (snapshot) => {
      onData(snapshot.docs.map(mapProductDocument));
    },
    onError,
  );
}
