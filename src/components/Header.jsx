import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const link = ({ isActive }) =>
  "font-semibold transition-colors whitespace-nowrap " +
  (isActive ? "text-white" : "text-[#F6B17A] hover:text-[#f3c88f]");

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#2D3250] text-white border-b-4 border-[#7077A1]">
      <div className="mx-auto max-w-6xl px-4 sm:px-10">
        {/* Mobile layout (<640px) */}
        <div className="sm:hidden py-6">
          <div className="flex items-center justify-between">
            {/* Left: name + subtitle */}
            <div className="text-left">
              <h1 className="font-extrabold text-[#F6B17A] leading-tight text-[clamp(1.2rem,2vw,1.6rem)]">
                Wyatt Habinski
              </h1>
              <p className="text-gray-300 leading-snug text-[clamp(0.75rem,2.5vw,1rem)]">
                Computer Scientist / Software Developer
              </p>
            </div>

            {/* Right: hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="w-10 h-10 grid place-items-center text-[#F6B17A]"
            >
              {open ? <HiX className="text-2xl" /> : <HiOutlineMenu className="text-2xl" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <nav
              className="mt-4 bg-[#2D3250] border-t border-[#7077A1] shadow-sm
                         flex flex-col items-center gap-2
                         text-[clamp(0.7rem,2vw,0.9rem)] py-2"
            >
              <NavLink to="/" className={link} onClick={() => setOpen(false)}>Profile</NavLink>
              <NavLink to="/experience" className={link} onClick={() => setOpen(false)}>Experience</NavLink>
              <NavLink to="/education" className={link} onClick={() => setOpen(false)}>Education</NavLink>
              <NavLink to="/courses" className={link} onClick={() => setOpen(false)}>Key Courses</NavLink>
              <NavLink to="/skills" className={link} onClick={() => setOpen(false)}>Relevant Skills</NavLink>
            </nav>
          )}
        </div>

        {/* Desktop layout (≥640px) */}
        <div className="hidden sm:grid grid-cols-2 h-20 lg:h-28">
          {/* Left: name + subtitle */}
          <div className="justify-self-start h-full flex flex-col justify-center">
            <h1 className="font-extrabold text-[#F6B17A] leading-none text-[clamp(1.1rem,2.5vw,2rem)] mb-2">
              Wyatt Habinski
            </h1>
            <p className="text-gray-300 leading-tight text-[clamp(0.7rem,1.2vw,1.1rem)]">
              Computer Scientist / Software Developer
            </p>
          </div>

          {/* Right: nav */}
          <nav
            className="justify-self-end h-full flex items-center
                       gap-[clamp(0.5rem,1vw,1rem)]
                       text-[clamp(0.6rem,1.1vw,1.1rem)]"
          >
            <NavLink to="/" className={link}>Profile</NavLink>
            <NavLink to="/experience" className={link}>Experience</NavLink>
            <NavLink to="/education" className={link}>Education</NavLink>
            <NavLink to="/courses" className={link}>Key Courses</NavLink>
            <NavLink to="/skills" className={link}>Relevant Skills</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
