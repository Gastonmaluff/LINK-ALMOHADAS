import useAuth from '../hooks/useAuth';
import AdminDashboardPage from './AdminDashboardPage';
import SellerDashboardPage from './SellerDashboardPage';

export default function PanelRedirectPage() {
  const { role } = useAuth();

  if (role === 'superadmin') {
    return <AdminDashboardPage />;
  }

  return <SellerDashboardPage />;
}
