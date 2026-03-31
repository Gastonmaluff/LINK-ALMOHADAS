import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../components/common/Loader';
import UnauthorizedState from '../components/common/UnauthorizedState';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { isAuthenticated, loading, role } = useAuth();

  if (loading) {
    return <Loader fullScreen label="Validando acceso..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (role === 'unauthorized') {
    return <UnauthorizedState />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/panel" replace />;
  }

  return children;
}
