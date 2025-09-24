import Section from "../components/Section";
import Card from "../components/Card";
import Badge from "../components/Badge";

const jobs = [
  {
    role: "Frontend Developer",
    company: "Company A",
    location: "Remote",
    dates: "2023 – Present",
    bullets: [
      "Built a reusable React/Tailwind component library.",
      "Improved Lighthouse performance 68 → 95.",
      "Collaborated with design to meet WCAG AA."
    ],
    tech: ["React", "Vite", "Tailwind", "TypeScript"]
  },
  {
    role: "Software Developer Intern",
    company: "Company B",
    location: "Toronto, ON",
    dates: "2022 – 2023",
    bullets: [
      "Implemented auth flows and protected routes.",
      "Reduced regressions with integration tests."
    ],
    tech: ["React", "Node", "Jest"]
  }
];

export default function Experience() {
  return (
    <Section title="Experience">
      <div className="space-y-4">
        {jobs.map((j, idx) => (
          <Card key={idx}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h2 className="text-lg font-semibold">{j.role} · {j.company}</h2>
                <p className="text-sm text-gray-600">{j.location}</p>
              </div>
              <div className="text-sm text-gray-500">{j.dates}</div>
            </div>

            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
              {j.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>

            <div className="mt-3 flex flex-wrap gap-2">
              {j.tech.map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
