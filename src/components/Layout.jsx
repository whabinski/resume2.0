import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header (fixed in layout) */}
      <div className="flex-none shadow-sm">
        <Header />
      </div>

      {/* Only this region scrolls */}
      <main className="flex-auto overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer (fixed in layout) */}
      <div className="flex-none border-t">
        <Footer />
      </div>
    </div>
  );
}
