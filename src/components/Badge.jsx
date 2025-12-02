// Badge.jsx
// ---------
// Small pill style label used to display tech stacks, tools, and skills.

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={[
        "inline-block whitespace-nowrap rounded-full border border-white/30 bg-white/5 leading-none",
        "text-[clamp(0.6rem,1.2vw,0.9rem)]",
        "px-[clamp(0.4rem,1vw,0.75rem)] py-[clamp(0.15rem,0.6vw,0.35rem)]",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
