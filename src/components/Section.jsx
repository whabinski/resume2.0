export default function Section({ title, children }) {
  return (
    <section className="space-y-4">
      {title && <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h1>}
      {children}
    </section>
  );
}
