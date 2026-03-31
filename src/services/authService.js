import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { deleteApp, initializeApp } from 'firebase/app';
import { auth, firebaseConfig } from '../firebase/config';
import { createSellerProfile } from './userService';

export async function signInUser(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function signOutUser() {
  await signOut(auth);
}

export async function createSellerAccount(form, actor) {
  if (actor?.role !== 'superadmin') {
    throw new Error('Solo el super admin puede crear usuarias vendedoras.');
  }

  const secondaryApp = initializeApp(firebaseConfig, `seller-creator-${Date.now()}`);
  const secondaryAuth = getAuth(secondaryApp);

  try {
    const credential = await createUserWithEmailAndPassword(
      secondaryAuth,
      form.email.trim(),
      form.password,
    );

    await updateProfile(credential.user, {
      displayName: form.nombre.trim(),
    });

    await createSellerProfile({
      uid: credential.user.uid,
      nombre: form.nombre.trim(),
      email: form.email.trim(),
      createdBy: actor.uid,
    });

    return credential.user;
  } catch (error) {
    throw new Error(mapFirebaseAuthError(error));
  } finally {
    await signOut(secondaryAuth).catch(() => null);
    await deleteApp(secondaryApp).catch(() => null);
  }
}

function mapFirebaseAuthError(error) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Ese email ya esta registrado.';
    case 'auth/invalid-email':
      return 'El email no es valido.';
    case 'auth/weak-password':
      return 'La contrasena es demasiado debil.';
    case 'auth/invalid-credential':
      return 'Las credenciales no son validas.';
    default:
      return error.message || 'Ocurrio un error con Firebase Authentication.';
  }
}
