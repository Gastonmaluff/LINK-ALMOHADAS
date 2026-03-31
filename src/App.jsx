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
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const SellerDashboardPage = lazy(() => import('./pages/SellerDashboardPage'));

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
                path="/panel"
                element={
                  <ProtectedRoute>
                    <PrivateLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<PanelRedirectPage />} />
                <Route
                  path="admin"
                  element={
                    <ProtectedRoute allowedRoles={['superadmin']}>
                      <AdminDashboardPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="operaciones"
                  element={
                    <ProtectedRoute allowedRoles={['superadmin', 'seller']}>
                      <SellerDashboardPage />
                    </ProtectedRoute>
                  }
                />
              </Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
