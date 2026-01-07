// Experience.jsx
// ---------------
// Experience page that shows professional roles inside JobAccordion components.
// Three separate accordions to describe work at HomeEquity Bank, 
// Building Science Investigations, and Data Annotation.
// Including tech stacks and detailed bullet points for each position.

import desk from "../assets/desk.jpeg";
import timeTrackingImg from "../assets/timetracking.jpeg";
import JobAccordion from "../components/JobAccordion"; // JobAccordion component for collapsible job descriptions

export default function Experience() {
  return (
    <div className="relative">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${desk})` }}
      />

      {/* Page content */}
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-0 min-h-0 md:min-h-[calc(100svh-18rem)] flex flex-col gap-6 md:justify-center">
        {/* ===== Job 1 ===== */}
        <JobAccordion
          company="HomeEquity Bank"
          role="Programming Analyst Intern"
          roleNote="Toronto, ON"
          defaultOpen={false}
          tech={[
            "Salesforce", "SaaS", "Cloud Computing",
            ".NET", "C#", "Apex", "Entity Framework",
            "SQL Server", "Vue.js", "Telerik UI",
            "Swagger", "Azure DevOps" 
          ]}
        >
          {/* General summary */}
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              Collaborated within an Agile sprint development environment, ensuring efficient and
              seamless integration of new features.
            </li>
            <li>
              Worked in a versatile team environment across sub-teams and cross-functional groups throughout the business.
            </li>
          </ul>

          {/* 2022 */}
          <div className="mt-3 rounded-md bg-black/20 p-3 ring-1 ring-black/50">
            <h3 className="font-semibold mb-2">
            Salesforce Development (SaaS)
            </h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Built an algorithm to redact personal identification information for inactive clients and a batch process to auto-identify
                and redact qualifying accounts in Salesforce.
              </li>
              <li>Contributed to sprint delivery via debugging, fixes, and refactors.</li>
            </ul>
          </div>

          {/* 2023 */}
          <div className="mt-3 rounded-md bg-black/20 p-3 ring-1 ring-black/50">
            <h3 className="font-semibold mb-2">
             Time-Tracking Web App
            </h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Led a 4-month project to build a time-tracking web app, transforming an existing DB
                into a full app.
              </li>
              <li>
                Stack: VS 2022, SQL Server, Swagger, Entity Framework, Vue.js, Telerik UI.
              </li>
              <li>
                Ensured testing across environments and deployed via Azure DevOps; managed change requests.
              </li>
            </ul>
            { <img src={timeTrackingImg} alt="Time tracking UI" className="mt-3 rounded ring-1 ring-black/40" /> }
          </div>

          {/* 2024 */}
          <div className="mt-3 rounded-md bg-black/20 p-3 ring-1 ring-black/50">
            <h3 className="font-semibold mb-2">
              .NET Developer
            </h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Maintained and improved .NET apps, boosting performance and UX.</li>
              <li>Used Azure DevOps for work management, CI/CD and deployments.</li>
              <li>Designed, implemented and tested features with cross-functional teams.</li>
              <li>Independently debugged and optimized code following best practices for software development and version control.</li>
            </ul>
          </div>
        </JobAccordion>

        {/* ===== Job 2 ===== */}
        <JobAccordion
          company="Building Science Investigations"
          role="Contract Automation Developer"
          roleNote=" Niagara, ON"
          defaultOpen={false}
          tech={["Python", "Pandas", "Openpyxl", "python-docx", "PyQt5"]}
        >
          <div className="mt-3 rounded-md bg-black/20 p-3 ring-1 ring-black/50">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Designed and implemented an automated reporting tool to process Excel input data and
                generate professional deliverables, including:
                <ul className="list-[circle] pl-6 mt-1 space-y-1">
                  <li>1 Excel summary report</li>
                  <li>2 Word documents with customized layouts and branding</li>
                </ul>
              </li>

              <li>
                Utilized <span className="italic">pandas</span>,{" "}
                <span className="italic">openpyxl</span>, and{" "}
                <span className="italic">python-docx</span> to streamline data extraction,
                transformation, and formatting.
              </li>

              <li>
                Developed a user-friendly GUI with <span className="italic">PyQt5</span>,
                enabling file uploads and customizable reports.
              </li>

              <li>
                Automated repetitive tasks, cutting manual reporting time and improving accuracy
                and consistency.
              </li>
            </ul>
          </div>
        </JobAccordion>

        {/* ===== Job 3 ===== */}
        <JobAccordion
          company="Data Annotation"
          role="Freelance Software Developer - AI Model Trainer"
          roleNote="Remote"
          defaultOpen={false}
          tech={[
            "Python", "JavaScript", "C++", "C#", "SQL", "JSON", "Prompt Engineering", "AI Evaluation"
          ]}
        >
          <div className="mt-3 rounded-md bg-black/20 p-3 ring-1 ring-black/50">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Independently completed AI training tasks focused on improving
                large language models through code generation, correction, and evaluation.
              </li>

              <li>
                Created detailed programming prompts and corresponding correct solutions to teach models
                proper syntax, logic, and implementation techniques across multiple programming languages.
              </li>

              <li>
                Compared multiple AI-generated code outputs to determine which solution best met the
                specified requirements for correctness, efficiency, and clarity.
              </li>

              <li>
                Debugged and corrected partially functional model-generated code to ensure
                it compiled and executed as intended.
              </li>

              <li>
                Analyzed model reasoning to identify where its logic diverged from the
                intended problem-solving path (“wrong turns”) and documented those cases
                for refinement and retraining.
              </li>

              <li>
                Tasks spanned several programming languages including{" "}
                <span className="italic">Python</span>,{" "}
                <span className="italic">JavaScript</span>,{" "}
                <span className="italic">C++</span>,{" "}
                and <span className="italic">C#</span>.
              </li>
            </ul>
          </div>
        </JobAccordion>
      </div>
    </div>
  );
}
