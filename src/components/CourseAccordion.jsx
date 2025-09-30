import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

/**
 * CourseAccordion
 * Props:
 *  - title: string
 *  - category: 'cs' | 'business' | 'math'
 *  - defaultOpen?: boolean
 *  - children?: ReactNode (course description / bullets)
 */
const styles = {
  cs: {
    bar: "bg-[#7077A1]",            // blue
    text: "text-white",
    panel: "bg-[#7077A1]",
  },
  business: {
    bar: "bg-[#F6B17A]",            // orange
    text: "text-white",             
    panel: "bg-[#F6B17A]",
  },
  math: {
    bar: "bg-[#75b365]",            // green
    text: "text-white",
    panel: "bg-[#75b365]",
  },
};

export default function CourseAccordion({
  title,
  category = "cs",
  defaultOpen = false,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const s = styles[category] ?? styles.cs;

  return (
    <div className="border-2 border-black shadow-lg">
      {/* Header bar */}
      <div
        className={`grid grid-cols-[minmax(0,1fr)_auto] items-center ${s.bar} ${s.text} px-4 py-2 select-none`}
      >
        <div className="truncate text-[clamp(0.1rem,3vw,0.8rem)] sm:text-[clamp(1rem,1vw,1rem)]">
          {title}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center gap-2 text-[clamp(0.75rem,1vw,0.9rem)] ${s.text} opacity-90 hover:opacity-100`}
          aria-expanded={open}
        >
          {/* Desktop text */}
          <span className="hidden sm:inline text-[clamp(0.8rem,0.8vw,0.8rem)]">
            {open ? "Click to Minimize" : "Click to Expand"}
          </span>
          {/* Mobile text */}
          <span className="sm:hidden text-[clamp(0.5rem,3vw,0.8rem)]">
            {open ? "Hide" : "Show"}
          </span>

          {open ? <HiChevronUp /> : <HiChevronDown />}
        </button>
      </div>

      {/* Body panel */}
      {open && (
        <div className={`${s.panel} text-white/95 px-4 py-3 [&_*]:text-[clamp(0.1rem,3vw,0.8rem)] sm:[&_*]:text-[clamp(1rem,1vw,1rem)]`}>
          <div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
