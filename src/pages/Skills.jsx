// src/pages/Skills.jsx
import puzzle from "../assets/puzzle.jpeg";
import SkillBox from "../components/SkillBox";

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
        {/* WRAP instead of GRID */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          <SkillBox title="Front End Development" subtitle="HTML, CSS, JS, Vue, React, Telerik" type="technical" />
          <SkillBox title="Back end development" subtitle="ASP.NET Framework, Python, C, C++, C#, Java, Haskell, Elm, Prolog" type="technical" />
          <SkillBox title="Relational Databases" subtitle="SSMS, SQL, Firebase" type="technical" />
          <SkillBox title="Mobile Development" subtitle="Swift, Kotlin, Unity" type="technical" />
          <SkillBox title="RESTful APIs" subtitle="Swagger, Entity Frameworks" type="technical" />
          <SkillBox title="Tools & Methodologies" subtitle="Azure DevOps, CI/CD, Visual Studio, Agile, Scrum, Waterfall" type="technical" />
          <SkillBox title="Cloud Computing" subtitle="SaaS, Salesforce Development, Apex" type="technical" />
          <SkillBox title="Data Analysis" subtitle="Power BI, Excel" type="technical" />
          <SkillBox title="Machine Learning" subtitle="TensorFlow, PyTorch, scikit-learn" type="technical" />
          <SkillBox title="Data Science Tools" subtitle="Pandas, NumPy, openpyxl" type="technical" />
          <SkillBox title="Networking" subtitle="TCP/IP, HTTP, Wireshark" type="technical" />
          <SkillBox title="Version Control" subtitle="Git, GitHub" type="technical" />

          <SkillBox title="Problem Solving & Debugging" type="soft" />
          <SkillBox title="Analytical Thinking" type="soft" />
          <SkillBox title="Creativity & Innovation" type="soft" />
          <SkillBox title="Organizational Skills" type="soft" />
          <SkillBox title="Collaboration & Teamwork" type="soft" />
          <SkillBox title="Time Management" type="soft" />
          <SkillBox title="Adaptability" type="soft" />
          <SkillBox title="Research & Inquiry" type="soft" />
          <SkillBox title="Continuous Learning" type="soft" />
          <SkillBox title="Learning Ability" type="soft" />

        </div>
      </section>
    </div>
  );
}
