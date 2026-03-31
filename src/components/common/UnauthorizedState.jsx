import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function UnauthorizedState() {
  const { logout } = useAuth();

  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <span className="eyebrow">Sin permisos</span>
        <h1>Esta cuenta no tiene acceso al panel</h1>
        <p>Si deberia entrar, asignale un rol valido desde el super admin o revisa el email propietario configurado.</p>
        <div className="button-row">
          <Link to="/" className="ghost-button">
            Volver al catalogo
          </Link>
          <button type="button" className="primary-button" onClick={logout}>
            Cerrar sesion
          </button>
        </div>
      </div>
    </section>
  );
}
