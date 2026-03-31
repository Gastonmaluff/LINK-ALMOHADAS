import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const usersCollection = collection(db, 'users');

export async function getUserProfile(uid) {
  const snapshot = await getDoc(doc(db, 'users', uid));
  return snapshot.exists() ? snapshot.data() : null;
}

export async function createSellerProfile({ uid, nombre, email, createdBy }) {
  await setDoc(doc(db, 'users', uid), {
    uid,
    nombre,
    email,
    role: 'seller',
    createdBy,
    createdAt: serverTimestamp(),
  });
}

export function listenToSellerUsers(onData, onError) {
  const sellersQuery = query(usersCollection, where('role', '==', 'seller'), orderBy('createdAt', 'desc'));

  return onSnapshot(
    sellersQuery,
    (snapshot) => {
      onData(snapshot.docs.map((document) => document.data()));
    },
    onError,
  );
}
