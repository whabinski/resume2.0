// Profile.jsx
// -----------
// Landing/profile page of the site
// Includes about section with headshot, and a contact section, all using the
// shared SideBySideSection layout component for consistent image/text pairing.

import city from "../assets/city.jpeg";
import moshers from "../assets/moshers.jpeg";
import profilePic from "../assets/profilePic.jpeg";
import ringo from "../assets/ringo_dock.jpeg";
import SideBySideSection from "../components/SideBySideSection";  //SidebySide layout component

export default function Profile() {
  return (
    <div className="relative">
      {/* Background image*/}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${moshers})` }}
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
            Experienced software developer seeking full time opportunities in software and AI development,
            currently advancing my academic foundation through a M.S. in Artificial Intelligence at the University
            of Texas at Austin. Skilled in designing, developing, and deploying scalable applications with
            hands on exposure to AI and automation tools.

          </p>
          <p className="mt-4 text-sm leading-6">
            I approach challenges with a strong desire to deliver high quality work, and
            am continuously motivated to seek opportunities for personal and professional growth.
          </p>
        </SideBySideSection>

        {/* Contact + Photo */}
        <SideBySideSection imgSrc={ringo} imgAlt="Sunset with dog" reverse imgW={275} imgH={200}>
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
