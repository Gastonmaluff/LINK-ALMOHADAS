import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useToast } from '../context/ToastContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await login(form.email.trim(), form.password);
      navigate('/admin', { replace: true });
    } catch (error) {
      showToast({
        title: 'No se pudo iniciar sesion',
        description: error.message || 'Revisa email y contrasena.',
        tone: 'danger',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card">
        <div>
          <span className="eyebrow">Acceso interno</span>
          <h1>Ingresar al portal</h1>
          <p>Super admin y vendedora entran desde esta ruta privada. El catalogo publico sigue separado.</p>
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="usuario@dominio.com"
              required
            />
          </label>

          <label className="field">
            <span>Contrasena</span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              required
            />
          </label>

          <button type="submit" className="primary-button" disabled={submitting}>
            {submitting ? 'Ingresando...' : 'Entrar al portal'}
          </button>
        </form>
      </div>
    </section>
  );
}
