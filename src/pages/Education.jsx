import mcmaster from "../assets/mcmaster.jpeg";
import university from "../assets/university.jpeg";
import SideBySideSection from "../components/SideBySideSection";

export default function Education() {
  return (
    <div className="relative">
      {/* Full background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${university})` }}
      />

      {/* Wrapper that vertically centers content */}
      <section className="mx-auto max-w-6xl px-4 min-h-[calc(100vh-16rem)] flex items-center justify-center">
        <SideBySideSection
          imgSrc={mcmaster}
          imgAlt="McMaster University"
          contentClassName="w-[clamp(18rem,40vw,36rem)]"
        >
        <h2 className="text-xl font-bold text-[#F6B17A] mb-2">
          B.A.Sc Honours Computer Science
        </h2>
        <p className="text-sm leading-6 text-gray-200">
          <span className="font-semibold">Minor:</span> Business <br />
          <span className="font-semibold">GPA:</span> 3.9 <br />
          <span className="font-semibold">University:</span> McMaster University, Hamilton, ON <br />
          <span className="font-semibold">Graduated:</span> 2025
        </p>
        </SideBySideSection>
      </section>
    </div>
  );
}
