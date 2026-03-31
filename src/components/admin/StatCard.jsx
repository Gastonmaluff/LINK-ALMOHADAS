export default function StatCard({ label, value }) {
  return (
    <article className="stat-card stat-card--dashboard">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}
