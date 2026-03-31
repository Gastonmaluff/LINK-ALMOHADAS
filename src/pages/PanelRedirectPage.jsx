import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PanelRedirectPage() {
  const { role } = useAuth();

  if (role === 'superadmin') {
    return <Navigate to="/panel/admin" replace />;
  }

  return <Navigate to="/panel/operaciones" replace />;
}
