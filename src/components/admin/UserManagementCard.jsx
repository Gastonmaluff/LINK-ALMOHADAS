import { useEffect, useState } from 'react';
import { createSellerAccount } from '../../services/authService';
import { listenToSellerUsers } from '../../services/userService';
import { useToast } from '../../context/ToastContext';

export default function UserManagementCard({ actor }) {
  const { showToast } = useToast();
  const [form, setForm] = useState({ nombre: '', email: '', password: '' });
  const [creating, setCreating] = useState(false);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToSellerUsers(setSellers, (error) => {
      console.error(error);
    });

    return unsubscribe;
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCreating(true);

    try {
      await createSellerAccount(form, actor);
      setForm({ nombre: '', email: '', password: '' });
      showToast({
        title: 'Vendedora creada',
        description: 'La nueva usuaria ya puede iniciar sesion en el panel.',
        tone: 'success',
      });
    } catch (error) {
      showToast({
        title: 'No se pudo crear la usuaria',
        description: error.message,
        tone: 'danger',
      });
    } finally {
      setCreating(false);
    }
  };

  return (
    <section className="panel-card">
      <div className="section-header">
        <div>
          <span className="eyebrow">Usuarios</span>
          <h2>Gestion de vendedoras</h2>
        </div>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <label className="field">
          <span>Nombre</span>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre de la operadora"
            required
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="vendedora@dominio.com"
            required
          />
        </label>

        <label className="field">
          <span>Contrasena inicial</span>
          <input
            type="password"
            name="password"
            minLength="6"
            value={form.password}
            onChange={handleChange}
            placeholder="Minimo 6 caracteres"
            required
          />
        </label>

        <button type="submit" className="primary-button" disabled={creating}>
          {creating ? 'Creando...' : 'Crear vendedora'}
        </button>
      </form>

      <div className="user-list">
        {sellers.map((seller) => (
          <article key={seller.uid} className="user-row">
            <div>
              <strong>{seller.nombre}</strong>
              <p>{seller.email}</p>
            </div>
            <span className="role-pill">seller</span>
          </article>
        ))}
        {sellers.length === 0 ? <p className="muted-copy">Todavia no hay vendedoras registradas.</p> : null}
      </div>
    </section>
  );
}
