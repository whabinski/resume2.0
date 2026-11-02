// Layout.jsx
// ----------
// Shared page shell for the app. Renders a stationary background, header and
// footer, and a scrollable main area in between where nested routes are displayed.
// The main area is the only part of the site that scrolls.

import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import moshers from "../assets/moshers.jpeg";
import desk from "../assets/desk.jpeg";
import projectBackground from "../assets/project.jpeg";
import university from "../assets/university.jpeg";
import books from "../assets/books.jpeg";
import puzzle from "../assets/puzzle.jpeg";

// Background image for each route
const BACKGROUNDS = {
  "/": moshers,
  "/experience": desk,
  "/projects": projectBackground,
  "/education": university,
  "/courses": books,
  "/skills": puzzle,
};

export default function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  // Start each page at the top instead of keeping the previous page's scroll position
  useLayoutEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex h-dvh flex-col bg-transparent">
      {/* Background, sized to the largest viewport so it doesn't resize with the mobile address bar */}
      <div
        className="fixed inset-x-0 top-0 -z-10 h-lvh bg-cover bg-center"
        style={{ backgroundImage: `url(${BACKGROUNDS[pathname]})` }}
      />

      {/* Stationary Header */}
      <div className="relative z-50 shrink-0">
        <Header />
      </div>

      {/* Scrollable content area, fills the space between the header and footer */}
      <main ref={mainRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* Stationary Footer */}
      <div className="relative z-50 shrink-0">
        <Footer />
      </div>
    </div>
  );
}
