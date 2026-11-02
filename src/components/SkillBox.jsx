// SkillBox.jsx
// -------------
// Small reusable card component for displaying a single skill.
// Renders as a jigsaw style piece, with tabs that poke into neighbouring pieces.

// Tailwind class presets for each piece colour
const tones = {
  navy: { bg: "bg-[#2D3250]", text: "text-white" },
  slate: { bg: "bg-[#424769]", text: "text-white" },
  periwinkle: { bg: "bg-[#7077A1]", text: "text-white" },
  orange: { bg: "bg-[#F6B17A]", text: "text-[#2D3250]" },
};

// Positions for the tab on each side of a piece
const tabSides = {
  right: "top-1/2 -translate-y-1/2 -right-2 sm:-right-3",
  bottom: "left-1/2 -translate-x-1/2 -bottom-2 sm:-bottom-3",
};

export default function SkillBox({ title, subtitle, tone = "slate", tabs = [], className = "" }) {
  const t = tones[tone] ?? tones.slate;

  return (
    <div
      className={[
        "relative flex flex-col justify-center px-4 py-3 sm:px-5 sm:py-4",
        "ring-1 ring-inset ring-black/40",
        t.bg,
        t.text,
        className,
      ].join(" ")}
    >
      {/* Jigsaw tabs */}
      {tabs.map((side) => (
        <span
          key={side}
          aria-hidden="true"
          className={`absolute z-10 h-4 w-4 sm:h-6 sm:w-6 rounded-full ${t.bg} ${tabSides[side]}`}
        />
      ))}

      <div className="font-semibold leading-tight text-[clamp(0.1rem,3vw,0.8rem)] sm:text-[clamp(1rem,1vw,1rem)]">
        {title}
      </div>
      {subtitle && (
        <div className="mt-1 opacity-90 text-[clamp(0.1rem,3vw,0.8rem)] sm:text-[clamp(0.9rem,0.9vw,0.9rem)]">
          {subtitle}
        </div>
      )}
    </div>
  );
}
