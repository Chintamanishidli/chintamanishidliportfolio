export default function SectionHeading({ title, count }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {count && <span className="section-count mono">{count}</span>}
    </div>
  );
}
