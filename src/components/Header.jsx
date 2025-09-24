import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const link = ({ isActive }) =>
  "font-semibold transition-colors whitespace-nowrap " +
  (isActive ? "text-white" : "text-[#E6B676] hover:text-[#f3c88f]");

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#2E3047] text-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Mobile layout (<640px) */}
        <div className="flex flex-col items-center justify-center sm:hidden py-3 relative">
          {/* Hamburger top-right */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#E6B676]"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX className="text-xl" /> : <HiOutlineMenu className="text-xl" />}
          </button>

          {/* Centered name + subtitle */}
          <h1 className="font-extrabold text-[#E6B676] leading-tight text-[clamp(1rem,2vw,1.6rem)] text-center">
            Wyatt Habinski
          </h1>
          <p className="text-gray-300 leading-snug text-[clamp(0.6rem,1vw,0.85rem)] text-center">
            Computer Scientist / Software Developer
          </p>
        </div>

        {/* Desktop layout (≥640px) */}
        <div className="hidden sm:grid grid-cols-2 h-16 lg:h-20">
          {/* Left: name + subtitle */}
          <div className="justify-self-start h-full flex flex-col justify-center">
            <h1 className="font-extrabold text-[#E6B676] leading-none text-[clamp(1.1rem,2vw,1.6rem)]">
              Wyatt Habinski
            </h1>
            <p className="text-gray-300 leading-tight text-[clamp(0.7rem,1vw,0.9rem)]">
              Computer Scientist / Software Developer
            </p>
          </div>

          {/* Right: nav */}
          <nav className="justify-self-end h-full flex items-center
                          gap-[clamp(0.5rem,1vw,1rem)]
                          text-[clamp(0.7rem,1vw,0.9rem)]">
            <NavLink to="/" className={link}>Profile</NavLink>
            <NavLink to="/experience" className={link}>Experience</NavLink>
            <NavLink to="/education" className={link}>Education</NavLink>
            <NavLink to="/courses" className={link}>Key Courses</NavLink>
            <NavLink to="/skills" className={link}>Relevant Skills</NavLink>
          </nav>
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <div className="sm:hidden border-t border-white/10 py-2">
            <nav className="flex flex-col items-center gap-2 text-[clamp(0.5rem,3vw,0.65rem)]">
              <NavLink to="/" className={link} onClick={() => setOpen(false)}>Profile</NavLink>
              <NavLink to="/experience" className={link} onClick={() => setOpen(false)}>Experience</NavLink>
              <NavLink to="/education" className={link} onClick={() => setOpen(false)}>Education</NavLink>
              <NavLink to="/courses" className={link} onClick={() => setOpen(false)}>Key Courses</NavLink>
              <NavLink to="/skills" className={link} onClick={() => setOpen(false)}>Relevant Skills</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
