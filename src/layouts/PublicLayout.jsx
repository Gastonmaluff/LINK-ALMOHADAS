import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PublicLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="app-shell">
      <header className="public-header">
        <div>
          <span className="eyebrow">Catalogo disponible</span>
          <Link to="/" className="brand-link">
            Link Almohadas
          </Link>
        </div>
        <nav className="header-actions">
          <Link to="/" className="ghost-button">
            Ver catalogo
          </Link>
          <Link to={isAuthenticated ? '/panel' : '/login'} className="primary-button">
            {isAuthenticated ? 'Ir al panel' : 'Acceder'}
          </Link>
        </nav>
      </header>
      <main className="public-main">
        <Outlet />
      </main>
    </div>
  );
}
