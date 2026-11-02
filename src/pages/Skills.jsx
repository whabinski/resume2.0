// Skills.jsx
// ----------
// Skills page displaying technical skills as
// a responsive collection of SkillBox components

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
      <section className="mx-auto max-w-6xl px-4 md:min-h-[calc(100svh-18rem)] md:flex md:flex-col md:justify-center py-8 md:py-0">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          <SkillBox title="Front End Development" subtitle="HTML, CSS, JS, TypeScript, Vue, React, Telerik, Sass, Tailwind CSS, Webpack, Vite" />
          <SkillBox title="Back End Development" subtitle="ASP.NET MVC Framework, Node.js, Python, C, C++, C#, Java, Haskell, Elm, Prolog" />
          <SkillBox title="Databases" subtitle="SQL, SSMS, PostgreSQL, MongoDB, Firebase" />
          <SkillBox title="Mobile Development" subtitle="Swift, Kotlin, Unity" />
          <SkillBox title="RESTful APIs" subtitle="Entity Framework, Swagger / OpenAPI, Postman, GraphQL" />
          <SkillBox title="Testing" subtitle="Jest, Cypress, Playwright, JUnit, pytest, xUnit" />
          <SkillBox title="Tools & Methodologies" subtitle="Azure DevOps, GitHub Actions, CI/CD, Docker, Kubernetes, Visual Studio, Agile, Scrum, Waterfall" />
          <SkillBox title="Cloud Computing" subtitle="Microsoft Azure, AWS (EC2, S3, Lambda), Firebase, Salesforce Development, Apex" />
          <SkillBox title="Data Analysis" subtitle="Power BI, Excel" />
          <SkillBox title="Machine Learning" subtitle="TensorFlow, PyTorch, scikit-learn, Keras, OpenCV, Hugging Face, LangChain, Jupyter, MLflow" />
          <SkillBox title="Data Science Tools" subtitle="Pandas, NumPy, openpyxl, Matplotlib" />
          <SkillBox title="Networking" subtitle="TCP/IP, HTTP, Wireshark" />
          <SkillBox title="Cybersecurity" subtitle="Network Security, Cryptography, Threat Analysis & Defense" />
          <SkillBox title="Version Control" subtitle="Git, GitHub" />
          <SkillBox title="Automation Tools" subtitle="n8n, Selenium, PyQt5" />
          <SkillBox title="Project Management & Collaboration" subtitle="Jira, Confluence, Trello, Slack" />
        </div>
      </section>
    </div>
  );
}
