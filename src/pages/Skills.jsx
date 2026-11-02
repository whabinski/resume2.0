// Skills.jsx
// ----------
// Skills page displaying technical skills as
// a jigsaw style mosaic of SkillBox components

import puzzle from "../assets/puzzle.jpeg";
import SkillBox from "../components/SkillBox"; // SkillBox component for individual skill display

export default function Skills() {
  return (
    <div className="relative">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${puzzle})` }}
      />

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 md:min-h-[calc(100svh-18rem)] md:flex md:flex-col md:justify-center py-8 md:py-4">
        {/* Each piece is placed by hand so the mosaic has no holes: 6 columns on small screens, 12 on large.
            Grid areas are row start / column start / row end / column end. Touching pieces need different tones. */}
        <div className="grid grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(3rem,auto)] lg:auto-rows-[minmax(5.5rem,auto)] overflow-hidden rounded-lg border-2 border-black shadow-xl">
          <SkillBox title="Front End Development" subtitle="HTML, CSS, JS, TypeScript, Vue, React, Telerik, Sass, Tailwind CSS, Webpack, Vite" tone="slate" tabs={["right", "bottom"]} className="[grid-area:1/1/3/5] lg:[grid-area:1/1/3/5]" />
          <SkillBox title="Databases" subtitle="SQL, SSMS, PostgreSQL, MongoDB, Firebase" tone="periwinkle" tabs={["bottom"]} className="[grid-area:1/5/3/7] lg:[grid-area:1/5/2/8]" />
          <SkillBox title="Back End Development" subtitle="ASP.NET MVC Framework, Node.js, Python, C, C++, C#, Java, Haskell, Elm, Prolog" tone="orange" tabs={["bottom"]} className="[grid-area:3/3/5/7] lg:[grid-area:1/8/3/13]" />
          <SkillBox title="Mobile Development" subtitle="Swift, Kotlin, Unity" tone="navy" tabs={["right"]} className="[grid-area:3/1/5/3] lg:[grid-area:2/5/3/8]" />
          <SkillBox title="RESTful APIs" subtitle="Entity Framework, Swagger / OpenAPI, Postman, GraphQL" tone="navy" tabs={["right", "bottom"]} className="[grid-area:5/4/7/7] lg:[grid-area:3/1/5/4]" />
          <SkillBox title="Tools & Methodologies" subtitle="Azure DevOps, GitHub Actions, CI/CD, Docker, Kubernetes, Visual Studio, Agile, Scrum, Waterfall" tone="periwinkle" tabs={["right", "bottom"]} className="[grid-area:7/1/9/5] lg:[grid-area:3/4/5/9]" />
          <SkillBox title="Testing" subtitle="Jest, Cypress, Playwright, JUnit, pytest, xUnit" tone="slate" tabs={["bottom"]} className="[grid-area:5/1/7/4] lg:[grid-area:3/9/4/13]" />
          <SkillBox title="Version Control" subtitle="Git, GitHub" tone="orange" tabs={["right", "bottom"]} className="[grid-area:7/5/8/7] lg:[grid-area:4/9/5/11]" />
          <SkillBox title="Data Analysis" subtitle="Power BI, Excel" tone="navy" tabs={["bottom"]} className="[grid-area:8/5/9/7] lg:[grid-area:4/11/5/13]" />
          <SkillBox title="Cloud Computing" subtitle="Microsoft Azure, AWS (EC2, S3, Lambda), Firebase, Salesforce Development, Apex" tone="periwinkle" tabs={["right", "bottom"]} className="[grid-area:11/1/13/5] lg:[grid-area:5/1/7/4]" />
          <SkillBox title="Project Management & Collaboration" subtitle="Jira, Confluence, Trello, Slack" tone="orange" tabs={["bottom"]} className="[grid-area:13/4/14/7] lg:[grid-area:5/4/6/8]" />
          <SkillBox title="Machine Learning" subtitle="TensorFlow, PyTorch, scikit-learn, Keras, OpenCV, Hugging Face, LangChain, Jupyter, MLflow" tone="slate" tabs={["bottom"]} className="[grid-area:9/3/11/7] lg:[grid-area:5/8/7/13]" />
          <SkillBox title="Data Science Tools" subtitle="Pandas, NumPy, openpyxl, Matplotlib" tone="navy" tabs={["right", "bottom"]} className="[grid-area:9/1/11/3] lg:[grid-area:6/4/7/8]" />
          <SkillBox title="Networking" subtitle="TCP/IP, HTTP, Wireshark" tone="navy" tabs={["right"]} className="[grid-area:11/5/13/7] lg:[grid-area:7/1/8/4]" />
          <SkillBox title="Cybersecurity" subtitle="Network Security, Cryptography, Threat Analysis & Defense" tone="periwinkle" tabs={["right"]} className="[grid-area:14/1/15/7] lg:[grid-area:7/4/8/9]" />
          <SkillBox title="Automation Tools" subtitle="n8n, Selenium, PyQt5" tone="navy" className="[grid-area:13/1/14/4] lg:[grid-area:7/9/8/13]" />
        </div>
      </section>
    </div>
  );
}
