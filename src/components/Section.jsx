export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`scroll-section ${className}`.trim()}>
      {children}
    </section>
  );
}
