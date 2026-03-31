import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <div className="app-shell app-shell--public">
      <main className="public-main">
        <Outlet />
      </main>
    </div>
  );
}
