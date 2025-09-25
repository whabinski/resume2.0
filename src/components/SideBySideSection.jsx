// src/components/SideBySideSection.jsx
function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

/**
 * SideBySideSection
 * Props:
 *  - imgSrc, imgAlt
 *  - reverse (boolean): puts image on the right
 *  - imgW, imgH: numbers (px) for the image box (defaults 280x280)
 *  - matchHeights (boolean): makes the text card at least as tall as the image card
 *  - className, imgClassName, contentClassName: style overrides
 *  - children: content inside the text card
 */
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
  // If we’re matching heights, account for the image card padding (p-2 = 16px total vertical)
  const minTextHeight = matchHeights ? imgH + 16 : undefined;

  return (
    <div
      className={cx(
        "grid grid-cols-1 items-center gap-6 md:gap-5",
        reverse ? "md:grid-cols-[minmax(0,1fr)_auto]" : "md:grid-cols-[auto_minmax(0,1fr)]",
        className
      )}
    >
      {/* IMAGE */}
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

      {/* TEXT */}
      <div
        className={cx(
          "bg-[#424769] text-gray-100 p-6 ring-2 ring-black shadow-2xl",
          "[&_*]:text-[clamp(0.7rem,0.7vw,0.8rem)] sm:[&_*]:text-[clamp(0.8rem,0.8vw,0.9rem)]",
          contentClassName
        )}
        style={minTextHeight ? { minHeight: minTextHeight } : undefined}
      >
        {children}
      </div>


    </div>
  );
}
