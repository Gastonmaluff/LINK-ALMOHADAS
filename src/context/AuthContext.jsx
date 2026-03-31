import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { signInUser, signOutUser } from '../services/authService';
import { getUserProfile } from '../services/userService';

const AuthContext = createContext(null);
const superAdminEmail = (import.meta.env.VITE_SUPERADMIN_EMAIL || '').trim().toLowerCase();

function buildProfile(user, storedProfile) {
  if (!user) {
    return null;
  }

  if (superAdminEmail && user.email?.toLowerCase() === superAdminEmail) {
    return {
      uid: user.uid,
      email: user.email,
      nombre: user.displayName || storedProfile?.nombre || 'Super admin',
      role: 'superadmin',
    };
  }

  if (!storedProfile) {
    return {
      uid: user.uid,
      email: user.email,
      nombre: user.displayName || 'Usuario sin permisos',
      role: 'unauthorized',
    };
  }

  return {
    uid: user.uid,
    email: storedProfile.email || user.email,
    nombre: storedProfile.nombre || user.displayName || 'Operadora',
    role: storedProfile.role,
  };
}

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);

      if (!user) {
        setAuthUser(null);
        setProfile(null);
        setLoading(false);
        return;
      }

      let storedProfile = null;

      try {
        storedProfile = await getUserProfile(user.uid);
      } catch (error) {
        console.error('No se pudo cargar el perfil.', error);
      }

      setAuthUser(user);
      setProfile(buildProfile(user, storedProfile));
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      authUser,
      profile,
      loading,
      role: profile?.role || null,
      isAuthenticated: Boolean(authUser),
      isSuperAdmin: profile?.role === 'superadmin',
      isSeller: profile?.role === 'seller',
      login: signInUser,
      logout: signOutUser,
    }),
    [authUser, loading, profile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
