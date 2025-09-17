export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name
      </div>
    </footer>
  );
}
