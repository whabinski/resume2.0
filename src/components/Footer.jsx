import { FaLinkedin, FaGithub } from "react-icons/fa";
import resumePDF from "../assets/Resume.pdf";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2E3047] text-white">
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        <div
          className="
            flex flex-nowrap items-center justify-center
            min-w-0
            gap-[0.75em] sm:gap-[2em]
            py-[0.6em]
            text-[clamp(0.55rem,1.8vw,0.95rem)]
            leading-none
          "
        >
          {/* Copyright (allow shrinking; keep on one line) */}
          <p className="text-[#E6B676] whitespace-nowrap">
            © {year} Wyatt Habinski
          </p>

          {/* Icons – size in em so they follow container font-size */}
          <a
            href="https://linkedin.com/in/wyatt-habinski"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#E6B676] hover:text-white transition"
          >
            <FaLinkedin className="align-middle text-[2em]" />
          </a>

          <a
            href="https://github.com/whabinski"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#E6B676] hover:text-white transition"
          >
            <FaGithub className="align-middle text-[2em]" />
          </a>

          {/* Button – padding in em so it scales with text */}
          <a
            href={resumePDF}
            download
            className="
              inline-flex items-center justify-center
              rounded border border-[#E6B676]
              px-[1.1em] py-[0.55em]
              font-semibold text-[#E6B676]
              hover:bg-[#E6B676] hover:text-[#2E3047]
              transition
              whitespace-nowrap
            "
          >
            Download My Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
