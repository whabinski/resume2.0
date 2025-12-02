// SkillBox.jsx
// -------------
// Small reusable card component for displaying a single skill.
// Supports two visual styles: "technical" and "soft" skills.

export default function SkillBox({ title, subtitle, type = "technical" }) {
  // Decide if this box is a soft skill (changes layout and styling)
  const isSoft = type === "soft"; 

   // Pick background and text colours based on skill type
  const palette = isSoft
    ? "bg-[#7077A1] text-white border-black" 
    : "bg-[#424769] text-white border-black"; 
  return (
    <div
      className={[
        "rounded-md border px-4 py-3",
        "shadow-md hover:shadow-lg",
        "transition-transform duration-200 ease-out hover:scale-[1.03]",
        "max-w-full",
        palette,

        isSoft
          ? "flex items-center justify-center text-center" 
          : "inline-flex flex-col text-left",       
      ].join(" ")}
    >
      <div className="font-semibold leading-tight text-[clamp(0.1rem,3vw,0.8rem)] sm:text-[clamp(1rem,1vw,1rem)]">
        {title}
      </div>
      {!isSoft && subtitle && ( 
        <div className="mt-1 opacity-90 text-[clamp(0.1rem,3vw,0.8rem)] sm:text-[clamp(0.9rem,0.9vw,0.9rem)]">
          {subtitle}
        </div>
      )}
    </div>
  );
}
