export default function Loader({ label = 'Cargando...', fullScreen = false }) {
  return (
    <div className={fullScreen ? 'loader-shell loader-shell--fullscreen' : 'loader-shell'}>
      <div className="loader" />
      <span>{label}</span>
    </div>
  );
}
