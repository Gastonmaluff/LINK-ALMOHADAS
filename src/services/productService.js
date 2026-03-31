import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { formatProductCode } from '../utils/codeGenerator';
import { compressImageFile } from '../utils/imageCompression';
import { deleteStoredImage, uploadProductImage } from './uploadService';

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

export async function reserveProductCodes(count) {
  const counterRef = doc(db, 'metadata', 'counters');

  return runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(counterRef);
    const currentValue = snapshot.exists() ? Number(snapshot.data().productCodeSeq || 0) : 0;
    const nextValue = currentValue + count;

    transaction.set(
      counterRef,
      {
        productCodeSeq: nextValue,
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );

    return Array.from({ length: count }, (_, index) => {
      const sequence = currentValue + index + 1;
      return {
        sequence,
        code: formatProductCode(sequence),
      };
    });
  });
}

export async function createProductsBatch(items, actor, onProgress) {
  const codes = await reserveProductCodes(items.length);
  const successes = [];
  const failures = [];

  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    const codeInfo = codes[index];

    try {
      const upload = await uploadProductImage(item.file, codeInfo.code);
      const productRef = doc(productsCollection);

      await setDoc(productRef, {
        id: productRef.id,
        codigo: codeInfo.code,
        codigoSecuencia: codeInfo.sequence,
        stockPares: Number(item.stockPares),
        imageUrl: upload.imageUrl,
        imagePath: upload.imagePath,
        notasInternas: '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        createdBy: actor.uid,
        updatedBy: actor.uid,
      });

      successes.push({
        id: productRef.id,
        codigo: codeInfo.code,
      });
    } catch (error) {
      failures.push({
        itemId: item.id,
        message: error.message || `No se pudo crear ${codeInfo.code}.`,
      });
    }

    if (onProgress) {
      const completed = index + 1;
      const total = items.length;
      onProgress({
        completed,
        total,
        percent: Math.round((completed / total) * 100),
      });
    }
  }

  return { successes, failures };
}

export async function updateExistingProduct(product, payload, actor) {
  const nextStock = Number(payload.stockPares);

  if (!Number.isInteger(nextStock) || nextStock < 1) {
    throw new Error('El stock debe ser un numero entero mayor o igual a 1.');
  }

  const updatePayload = {
    stockPares: nextStock,
    notasInternas: payload.notasInternas || '',
    updatedAt: serverTimestamp(),
    updatedBy: actor.uid,
  };

  if (payload.replacementFile) {
    const compressedFile = await compressImageFile(payload.replacementFile);
    const upload = await uploadProductImage(compressedFile, product.codigo);
    updatePayload.imageUrl = upload.imageUrl;
    updatePayload.imagePath = upload.imagePath;
    await deleteStoredImage(product.imagePath);
  }

  await updateDoc(doc(db, 'products', product.id), updatePayload);
}

export async function deleteProductById(product) {
  await deleteStoredImage(product.imagePath);
  await deleteDoc(doc(db, 'products', product.id));
}
