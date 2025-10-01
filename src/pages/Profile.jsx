import city from "../assets/city.jpeg";
import profilePic from "../assets/profilePicOrigional.jpeg";
import ringo from "../assets/ringo.jpeg";
import SideBySideSection from "../components/SideBySideSection";

export default function Profile() {
  return (
    <div className="relative">
      {/* Full background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${city})` }}
      />

      {/* Content container */}
      <section
        className="
          mx-auto max-w-6xl px-4
          md:min-h-[calc(100svh-18rem)] md:flex md:flex-col md:justify-center
          py-8 md:py-0 space-y-4
        "
      >
        {/* Headshot + About */}
        <SideBySideSection imgSrc={profilePic} imgAlt="Wyatt Habinski">
          <p className="text-sm leading-6">
            Over 6 years of experience designing, developing, and deploying scalable applications. 
            Proficient in working with diverse programming languages across various paradigms. 
            Skilled in collaborating within dynamic teams to deliver innovative 
            solutions and committed to driving measurable business impact.
          </p>
          <p className="mt-4 text-sm leading-6">
            My approach to challenges is fueled by strong ambition, which is a constant motivator 
            to deliver high-quality work, and seek opportunities for personal and professional growth.
          </p>
        </SideBySideSection>

        {/* Contact + Dog (reverse order) */}
        <SideBySideSection imgSrc={ringo} imgAlt="Sunset with dog" reverse imgW={420} imgH={280}>
          <h2 className="text-2xl font-bold">Contact Me!</h2>
          <div className="mt-4 space-y-2 text-sm text-gray-200">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:whabinski@hotmail.com"
                className="decoration-[#E6B676] hover:text-[#E6B676]"
              >
                whabinski@hotmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> 289-696-8507
            </p>
          </div>
        </SideBySideSection>
      </section>
    </div>
  );
}
