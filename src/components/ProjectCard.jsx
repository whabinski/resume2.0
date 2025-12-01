// src/components/ProjectCard.jsx
import Badge from "./Badge";

export default function ProjectCard({
  title,
  context,               // e.g. "Personal Project · 2025"
  imageSrc,              // screenshot / thumbnail
  imageAlt = "",
  videoSrc,              // mp4 demo
  description,
  bullets = [],
  tech = [],
  liveLink,
  liveLabel = "Live Site",   // 🔹 NEW: customizable label
  repoLink,
}) {
  const hasImage = Boolean(imageSrc);
  const hasVideo = Boolean(videoSrc);
  const hasMedia = hasImage || hasVideo;

  const techList = Array.isArray(tech) ? tech : tech ? [tech] : [];

  return (
    <div className="bg-[#7077A1] border-2 border-black p-4 sm:p-6 shadow-md text-white">
      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)_auto] items-center gap-2">
        {/* Title */}
        <div className="text-[clamp(0.8rem,1.6vw,1.2rem)] font-extrabold text-[#F6B17A]">
          {title}
        </div>

        {/* Context */}
        {context && (
          <div className="text-[clamp(0.7rem,1.3vw,0.95rem)] text-gray-200 md:text-right">
            {context}
          </div>
        )}

        {/* Links */}
        <div className="justify-self-start md:justify-self-end flex flex-wrap gap-2 text-[clamp(0.7rem,1.1vw,0.9rem)]">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 border border-[#F6B17A] text-[#F6B17A] rounded-md hover:bg-[#F6B17A] hover:text-[#2D3250] transition"
            >
              {liveLabel}
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 border border-white/70 text-white rounded-md hover:bg-white hover:text-[#2D3250] transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

            {/* BODY */}
      <div
        className={
          hasMedia
            ? "mt-3 grid gap-3 md:grid-cols-[minmax(0,1.8fr)_minmax(0,3.2fr)]"
            : "mt-3"
        }
      >
        {/* Media column: each piece in its own box */}
        {hasMedia && (
          <div className="flex flex-col gap-3">
            {hasImage && (
              <div className="rounded-md bg-black/25 p-2 ring-1 ring-black/60 flex justify-center">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="max-h-64 max-w-full w-auto object-contain rounded"
                />
              </div>
            )}

            {hasVideo && (
              <div className="rounded-md bg-black/25 p-2 ring-1 ring-black/60 flex justify-center">
                <video
                  src={videoSrc}
                  controls
                  className="max-h-64 max-w-full w-auto object-contain rounded"
                />
              </div>
            )}
          </div>
        )}

        {/* Text panel – same style as Experience inner blocks */}
        <div className="rounded-md bg-black/20 p-3 ring-1 ring-black/50 [&_*]:text-[clamp(0.75rem,0.9vw,0.9rem)]">
          {description && (
            <p className="mb-2 text-gray-100">
              {description}
            </p>
          )}

          {Array.isArray(bullets) && bullets.length > 0 && (
            <ul className="list-disc pl-5 space-y-1.5 text-gray-100">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>


      {/* Tech badges */}
      {techList.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {techList.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      )}
    </div>
  );
}
