// JobAccordion.jsx
// ----------------
// Expandable job card used on the Experience page. Shows company, role, and
// tech stack, with details that can be toggled open or closed.

import { useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import Badge from "./Badge"; // Badge component for tech stack items

export default function JobAccordion({
  company,
  role,
  roleNote,
  defaultOpen = true,
  tech = [],
  children,
}) {
  // Track whether this job’s details are currently expanded or collapsed
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-[#7077A1] border-2 border-black p-4 sm:p-6 shadow-md text-white">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)_auto] items-center gap-2">
        {/* Company */}
        <div className="text-[clamp(0.8rem,1.4vw,1rem)] font-extrabold text-[#F6B17A]">
          {company}
        </div>

        {/* Role and Location */}
        <div className="min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <span className="text-[clamp(0.8rem,1.6vw,1.1rem)] font-semibold text-white">
              {role}
            </span>
            {roleNote && (
              <span className="text-[clamp(0.6rem,1.4vw,1rem)] text-gray-300">
                {roleNote}
              </span>
            )}
          </div>
        </div>


        {/* Toggle button to expand/collapse accordion */}
        <div className="justify-self-start md:justify-self-end">
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 text-[clamp(0.75rem,1.2vw,0.9rem)] text-[#F6B17A] hover:text-white transition"
          >
            <span className="hidden md:inline">
              {open ? "Click to Minimize" : "Click to Expand"}
            </span>
            <span className="md:hidden">{open ? "Hide" : "Show"}</span>
            {open ? <HiChevronUp /> : <HiChevronDown />}
          </button>
        </div>
      </div>

      {/* Body */}
      {open && (
        <div className="mt-4">
          <div className="[&_*]:text-[clamp(0.7rem,0.7vw,0.8rem)] sm:[&_*]:text-[clamp(0.8rem,0.8vw,0.9rem)]">
            {children}
          </div>

          {tech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          )}

        </div>
      )}
    </div>
  );
}
