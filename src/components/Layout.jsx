import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Spacer to offset the fixed header height */}
      {/* Match Header heights: h-20 (80px) on small, lg:h-28 (112px) on lg+ */}
      <div aria-hidden className="h-20 lg:h-28" />

      {/* Scrollable content area with explicit height */}
      {/* Height = 100vh - header - footer */}
      <main className="overflow-y-auto 
                       h-[calc(100vh-80px-64px)] 
                       lg:h-[calc(100vh-112px-64px)]">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* Spacer to offset the fixed footer height */}
      <div aria-hidden className="h-16" />

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer />
      </div>
    </div>
  );
}
