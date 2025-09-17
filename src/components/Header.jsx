import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  "px-3 py-2 text-sm" + (isActive ? " underline" : "");

export default function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex gap-4">
        <NavLink to="/" className={linkClass}>Profile</NavLink>
        <NavLink to="/experience" className={linkClass}>Experience</NavLink>
        <NavLink to="/education" className={linkClass}>Education</NavLink>
        <NavLink to="/courses" className={linkClass}>Key Courses</NavLink>
        <NavLink to="/skills" className={linkClass}>Skills</NavLink>
      </nav>
    </header>
  );
}
