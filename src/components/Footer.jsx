// Footer.jsx
// -----------
// Fixed footer showing copyright, social links, and a resume download button.

import { FaLinkedin, FaGithub } from "react-icons/fa";
import resumePDF from "../assets/Wyatt_Habinski_Resume.pdf";

export default function Footer() {
  // Current year for copyright
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2D3250] text-white border-t-4 border-[#7077A1] -mt-px">
      <div className="mx-auto max-w-6xl px-2 sm:px-6">
        <div
          className="
            flex flex-wrap sm:flex-nowrap items-center justify-center
            min-w-0
            gap-2 sm:gap-[4em]
            py-[0.8em]
            text-[clamp(0.5rem,3.2vw,0.9rem)]
            leading-none
          "
        >
          {/* Left: copyright text */}
          <p className="text-[#F6B17A] whitespace-nowrap shrink-0">
            © {year} Wyatt Habinski
          </p>

          {/* LinkedIn icon/link */}
          <a
            href="https://linkedin.com/in/wyatt-habinski"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#F6B17A] hover:text-white transition shrink-0"
          >
            <FaLinkedin className="align-middle text-[1.6em] sm:text-[2.5em]" />
          </a>

          {/* GitHub icon/link */}
          <a
            href="https://github.com/whabinski"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#F6B17A] hover:text-white transition shrink-0"
          >
            <FaGithub className="align-middle text-[1.6em] sm:text-[2.5em]" />
          </a>

           {/* Resume download button */}
          <a
            href={resumePDF}
            download="Wyatt Habinski - Resume.pdf"
            className="
              inline-flex items-center justify-center
              rounded border border-[#F6B17A]
              px-[0.7em] sm:px-[1.1em] py-[0.55em]
              font-semibold text-[#F6B17A]
              hover:bg-[#F6B17A] hover:text-[#2E3047]
              transition
              min-w-0 truncate
            "
            title="Download My Resume"
          >
            {/* Short label on small screens, full label on larger screens */}
            <span className="sm:hidden">Resume</span>
            <span className="hidden sm:inline">Download My Resume</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
