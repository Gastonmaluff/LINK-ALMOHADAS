import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { getPublicCatalogUrl } from '../utils/formatters';
import { useToast } from '../context/ToastContext';

export default function PrivateLayout() {
  const { profile, logout } = useAuth();
  const { showToast } = useToast();

  const copyCatalogLink = async () => {
    try {
      await navigator.clipboard.writeText(getPublicCatalogUrl());
      showToast({
        title: 'Link copiado',
        description: 'El catalogo publico ya esta listo para compartir.',
        tone: 'success',
      });
    } catch (error) {
      showToast({
        title: 'No se pudo copiar',
        description: 'Copialo manualmente desde la barra del navegador.',
        tone: 'danger',
      });
    }
  };

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="sidebar-card">
          <span className="eyebrow">Portal interno</span>
          <h1>Link Almohadas</h1>
          <p>{profile?.nombre}</p>
          <span className="role-pill">{profile?.role === 'superadmin' ? 'Super admin' : 'Vendedora'}</span>
        </div>

        <div className="sidebar-actions">
          <button type="button" className="ghost-button" onClick={copyCatalogLink}>
            Copiar link publico
          </button>
          <button type="button" className="ghost-button" onClick={logout}>
            Cerrar sesion
          </button>
        </div>
      </aside>

      <div className="dashboard-main">
        <Outlet />
      </div>
    </div>
  );
}
