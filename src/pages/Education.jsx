// Education.jsx
// --------------
// Education page that highlights Edcucation.
// Uses a SideBySideSection component to show image alongside academic details 

import mcmaster from "../assets/mcmaster.jpeg";
import texas from "../assets/texas.jpeg";
import university from "../assets/university.jpeg";
import SideBySideSection from "../components/SideBySideSection"; // SideBySide layout component

export default function Education() {
  return (
    <div className="relative">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${university})` }}
      />

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-10">
        <SideBySideSection
          imgSrc={texas}
          imgAlt="University of Texas at Austin"
          reverse
          contentClassName=""
        >
          <h2 className="text-xl font-bold text-[#F6B17A] mb-2">
            M.S. Artificial Intelligence
          </h2>
          <p className="text-sm leading-6 text-gray-200">
            <span className="font-semibold">University:</span> University of Texas at Austin, Austin, TX <br />
            <span className="font-semibold">Expected:</span> 2027
          </p>
        </SideBySideSection>

        <SideBySideSection
          imgSrc={mcmaster}
          imgAlt="McMaster University"
          contentClassName=""
        >
          <h2 className="text-xl font-bold text-[#F6B17A] mb-2">
            B.A.Sc Honours Computer Science
          </h2>
          <p className="text-sm leading-6 text-gray-200">
            <span className="font-semibold">Minor:</span> Business <br />
            <span className="font-semibold">GPA:</span> 3.9 <br />
            <span className="font-semibold">Acolades:</span> Dean's Honours List, Graduated With Distinction <br />
            <span className="font-semibold">University:</span> McMaster University, Hamilton, ON <br />
            <span className="font-semibold">Graduated:</span> 2025
          </p>
        </SideBySideSection>
      </section>
    </div>
  );
}
