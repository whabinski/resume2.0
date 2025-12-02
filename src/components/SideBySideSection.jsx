// SideBySideSection.jsx
// ---------------------
// Reusable layout component for sections that show an image beside text content.

export default function SideBySideSection({
  imgSrc,
  imgAlt = "",
  reverse = false,
  imgW = 280,
  imgH = 280,
  matchHeights = false,
  className = "",
  imgClassName = "",
  contentClassName = "",
  children,
}) {

  const cx = (...parts) => parts.filter(Boolean).join(" ");   // Utility to join className pieces, ignoring any falsey values
  const minTextHeight = matchHeights ? imgH + 16 : undefined;  // Optional min-height so the text block roughly matches the image card height

  return (
    <div
      className={cx(
        "grid grid-cols-1 items-center gap-6 md:gap-6",
        reverse ? "md:grid-cols-[minmax(0,1fr)_auto]" : "md:grid-cols-[auto_minmax(0,1fr)]",
        className
      )}
    >
      {/* Image container */}
      <div
        className={cx(
          "justify-self-center md:justify-self-start",
          reverse && "md:order-2 md:justify-self-end"
        )}
      >
        <div
          className={cx(
            "bg-[#424769]/95 p-1 ring-1 ring-black shadow-2xl",
            imgClassName
          )}
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            width={imgW}
            height={imgH}
            className="block rounded-md object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text container */}
      <div
        className={cx(
          "bg-[#424769] text-gray-100 p-6 border-2 border-black shadow-2xl",
          "[&_*]:text-[clamp(0.8rem,0.8vw,0.8rem)] sm:[&_*]:text-[clamp(0.8rem,0.8vw,0.9em)]",
          contentClassName
        )}
        style={minTextHeight ? { minHeight: minTextHeight } : undefined}
      >
        {children}
      </div>


    </div>
  );
}
