import city from "../assets/city.jpeg";
import profilePic from "../assets/profilePic.jpeg";
import ringo from "../assets/ringo.jpeg";



export default function Profile() {
  return (
    <div className="relative">
      {/* Hero background */}
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${city})` }}
      />

      {/* Overlapping content */}
      <section className="mx-auto max-w-6xl px-4">
        {/* top row: headshot card + about card */}
        <div className="-mt-40 grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] gap-6 items-start">
          {/* headshot */}
          <div className="justify-self-center md:justify-self-start">
            <div className="rounded-lg bg-[#393C57] p-3 shadow-xl ring-1 ring-black/50">
              <img
                src={profilePic}
                alt="Wyatt Habinski"
                className="h-[280px] w-[280px] rounded-md object-cover"
              />
            </div>
          </div>

          {/* about box */}
          <div className="rounded-lg bg-[#2E3047] text-gray-200 p-6 shadow-xl ring-1 ring-black/60">
            <p className="text-sm leading-6">
              Over 6 years of experience designing, developing, and deploying scalable
              applications. Proficient in diverse programming languages and paradigms. Skilled at
              collaborating within dynamic teams to deliver innovative solutions and measurable impact.
            </p>
            <p className="mt-4 text-sm leading-6">
              Ambitious and outcome-driven; committed to high-quality work and ongoing growth.
            </p>
          </div>
        </div>

        {/* bottom row: contact card + image card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_420px] gap-6 items-start">
          {/* contact */}
          <div className="rounded-lg bg-[#2E3047] text-white p-6 shadow-xl ring-1 ring-black/60">
            <h2 className="text-2xl font-bold text-white">Contact Me!</h2>
            <div className="mt-4 space-y-2 text-sm text-gray-200">
              <p><span className="font-semibold">Email:</span> whabinski@hotmail.com</p>
              <p><span className="font-semibold">Phone:</span> 289-696-8507</p>
            </div>
          </div>

          {/* dog image */}
          <div className="justify-self-center md:justify-self-end">
            <div className="rounded-lg bg-[#393C57] p-3 shadow-xl ring-1 ring-black/50">
              <img
                src={ringo}
                alt="Sunset"
                className="h-[260px] w-[420px] rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* spacer to clear hero edge */}
        <div className="h-10" />
      </section>
    </div>
  );
}
