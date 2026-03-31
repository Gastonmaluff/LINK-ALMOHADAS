import { Suspense, lazy } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicLayout from './layouts/PublicLayout';
import PublicCatalogPage from './pages/PublicCatalogPage';
import PanelRedirectPage from './pages/PanelRedirectPage';
import Loader from './components/common/Loader';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const PrivateLayout = lazy(() => import('./layouts/PrivateLayout'));

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <HashRouter>
          <Suspense fallback={<Loader fullScreen label="Cargando interfaz..." />}>
            <Routes>
              <Route element={<PublicLayout />}>
                <Route index element={<PublicCatalogPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Route>

              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={['superadmin', 'seller']}>
                    <PrivateLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<PanelRedirectPage />} />
              </Route>

              <Route path="/panel/*" element={<Navigate to="/admin" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
