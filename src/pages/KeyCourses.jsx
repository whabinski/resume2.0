import books from "../assets/books.jpeg";
import CourseAccordion from "../components/CourseAccordion";

export default function KeyCourses() {
  return (
    <div className="relative">
      {/* Full-bleed background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${books})` }}
      />

        <section className="mx-auto max-w-6xl px-4 pt-4 pb-8 space-y-4">
        {/* Legend */}
        <div className="mx-auto w-fit bg-black/60 text-white rounded-md px-4 py-2">
          <ul className="flex gap-2 sm:gap-6 text-[clamp(0.1rem,3vw,0.8rem)] sm:text-[clamp(1rem,1vw,1rem)]">
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded bg-[#7077A1] border border-black/40" />
              Computer Science
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded bg-[#F6B17A] border border-black/40" />
              Business
            </li>
            <li className="flex items-center gap-2">
              <span className="h-4 w-4 rounded bg-[#75b365] border border-black/40" />
              Math
            </li>
          </ul>
        </div>

        {/* Computer Science (blue) */}
        <CourseAccordion category="cs" title="Applications of Machine Learning">
          <p>
            Overview of data engineering; human-computation architectures; supervised approaches (neural networks);
            unsupervised approaches (clustering/topic modelling); human-in-the-loop approaches (reinforcement learning).
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Data Mining">
          <p>
            Core techniques in big data analytics (knowledge discovery, data mining). Basic concepts of frequent patterns, 
            algorithms for mining frequent patterns from large scale transactional databases. Clustering and classification: 
            k-means, hierarchical k-means, DB-Scan, Gaussian mixture models, decision trees, Bayesian methods, linear 
            classification methods, support vector machines. Practice of big data analytics in business intelligence: 
            data warehousing, data lakes.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Software Development">
          <p>
            Classes and inheritance; class invariants; interface specifications; object-oriented design patterns; exception
            handling; tools for interface documentation, testing, program analysis; requirements documentation; quality attributes;
            development models.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Software Testing">
          <p>
            Measurement fundamentals; software measures and metrics; cost/effort estimation; testing strategy,plans and documentation;
            slicing and debugging; test coverage; functional and system testing techniques; automated testing; maintenance
            fundamentals; regression testing.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Human Computer Interface Design">
          <p>
            Design of user interfaces; principles of good interface design; task-oriented and UX design; inclusive design;
            communicating with graphics; modes and mode awareness; human cognition (memory, perception, motor systems);
            help systems; interface design tools.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Computer Networks and Security">
          <p>
            Physical networks; TCP/IP protocols; switching methods; network layering and components; network services.
            Information security: computer and network threats, defense mechanisms, encryption.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Databases">
          <p>
            Data modelling; integrity constraints; relational design; relational algebra; SQL; query processing; transactions;
            concurrency control; recovery; security; data storage.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Information Security">
          <p>
            Basic principles of information security; threats and defenses; cryptography; network security and security
            management.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Algorithms and Complexity">
          <p>
            Computability models; Church–Turing thesis; complexity classes; P vs NP; NP-completeness and reduction techniques;
            algorithmic strategies; flows; distributed algorithms; advanced techniques such as randomization.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Data-Driven Algorithms for Sequential Decision Making">
          <p>
            Problems and algorithmic solutions in sequential decision making based on data, as appear in many applications including 
            online ad-placement, A/B testing for software services, financial portfolio management, medical trials, and more. 
            Topics include best-arm identification, multi-armed bandit problems and solutions, online learning, 
            prediction with expert advice, and optimal stopping problems.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Operating Systems">
          <p>
            Processes and threads; synchronization and communication; scheduling; memory management; file systems; resource
            protection; OS structure.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Algorithms and Software Design">
          <p>
            Implementation of computational solutions that combine algorithmic design/analysis with software design principles
            in experiential, workplace-style projects. Communication skills: technical documentation and presentation.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Data Structures and Algorithms">
          <p>
            Stacks, queues, hash tables, binary trees; searching and sorting; graph representations and algorithms including minimum spanning trees,
            traversals, shortest paths; algorithmic design strategies; correctness and performance analysis.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Software Design and Web Programming">
          <p>
            Translating user needs/goals into software; structuring/communicating software to improve reliability, readability,
            adaptability. Topics include web languages and protocols, types and design patterns.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Computer Architecture">
          <p>
            Logic gates; computer arithmetic; instruction-set architecture; assembly programming; translation of high-level
            languages. Computer system organization: datapath and control, pipelining, memory hierarchies, I/O systems; performance measures.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Principles Of Programming Languages">
          <p>
            Principles for defining and reasoning about programming and domain-specific languages; use of semantics for
            interpretation and for program analyses (correctness, security, efficiency).
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Programming">
          <p>
            Fundamental programming concepts: values and types; expressions and evaluation; control flow and exceptions;
            recursion; I/O and file processing.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Automata and Computability">
          <p>
            Finite state machines; regular languages and expressions; applications of regular languages; grammars; context-free
            languages; models of computation; computability and decidability.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Development Basics">
          <p>
            Practical exposure to professional development: UNIX-like systems; C programming; documentation, testing,
            benchmarking, profiling, debugging; shell usage and scripting; pipes and filters; version control.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Syntax Based-Tools and Compilers">
          <p>
            Lexical and syntax analysis; type checking; syntax-directed translation and attribute grammars; compiler structure;
            architectural implications; mapping language concepts; code generation and optimization.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Computational Thinking">
          <p>
            Computing-inspired thinking across major areas: data types, logic, OS, networking, web computing, security, digital
            media, software development, problem-solving techniques; fundamentals of functional programming.
          </p>
        </CourseAccordion>

        <CourseAccordion category="cs" title="Concurrent Systems">
          <p>
            Models of concurrency (process algebras, Petri nets, temporal logics, model checking); concurrency as a structuring
            principle (processes, threads, synchronization, resource sharing); deadlock, safety, liveness; design, verification,
            and testing of concurrent systems.
          </p>
        </CourseAccordion>


        {/* Business (orange) */}
        <CourseAccordion category="business" title="Decision Making with Analytics">
          <p>
            Five quantitative management science tools (problem modelling, linear programming, decision analysis, simulation,
            waiting lines) for analytics under certainty/uncertainty, implemented in Excel.
          </p>
        </CourseAccordion>

        <CourseAccordion category="business" title="Operations Management">
          <p>
            Manufacturing and service operations at strategic, tactical, and operational levels: capacity planning, facility
            layout, forecasting, aggregate planning, scheduling, inventory control, purchasing, supply chains, quality control,
            process improvement, project management; globalization and sustainability issues.
          </p>
        </CourseAccordion>

        <CourseAccordion category="business" title="Business Data Analytics">
          <p>
            Statistical data analysis applications in business: visualization, probabilities, confidence intervals, hypothesis
            testing, simple/multiple regressions, etc. Practice of techniques with software on business problems.
          </p>
        </CourseAccordion>

        <CourseAccordion category="business" title="Managerial Finance">
          <p>
            Financial management of the firm: financing sources/methods, capital structure, dividend policy, leasing, M&amp;A,
            working capital, taxation effects, and international finance aspects.
          </p>
        </CourseAccordion>

        <CourseAccordion category="business" title="Marketing">
          <p>
            Foundation course covering principles and frameworks of marketing with emphasis on customer focus.
          </p>
        </CourseAccordion>

        <CourseAccordion category="business" title="Financial Accounting">
          <p>
            Principles and practices of financial accounting; income measurement; asset/liability valuation; understanding
            financial accounting information and ethics of financial reporting.
          </p>
        </CourseAccordion>

        <CourseAccordion category="business" title="Microeconomics">
          <p>
            Methods and theory of microeconomics with applications to contemporary economic problems.
          </p>
        </CourseAccordion>

        <CourseAccordion category="business" title="Finance">
          <p>
            Instruments and institutions in the Canadian financial system; core concepts of modern finance with problem solving:
            time value of money, capital budgeting, risk-return trade-off, security valuation.
          </p>
        </CourseAccordion>


        {/* Math (green) */}
        <CourseAccordion category="math" title="Linear Algebra">
          <p>
            Vector spaces from linear systems; linear independence; dimension; determinants; eigenvalues, eigenvectors,
            diagonalization; complex numbers.
          </p>
        </CourseAccordion>

        <CourseAccordion category="math" title="Engineering Mathematics I (Calculus)">
          <p>
            Functions, limits, continuity; derivatives, optimization, curve sketching; antiderivatives, definite integrals,
            techniques of integration with applications.
          </p>
        </CourseAccordion>

        <CourseAccordion category="math" title="Engineering Mathematics II (Calculus)">
          <p>
            Techniques of integration; applications of definite integrals; differential equations; polar coordinates; parametrized
            curves; sequences; infinite and power series; partial derivatives.
          </p>
        </CourseAccordion>

        <CourseAccordion category="math" title="Discrete Mathematics">
          <p>
            Sets, functions, relations, trees, graphs; counting principles; modular arithmetic; discrete probabilities; induction
            and recursion; recurrence relations.
          </p>
        </CourseAccordion>

        <CourseAccordion category="math" title="Logical Reasoning">
          <p>
            Logic and proof techniques for practical reasoning: propositional logic, predicate logic, structural induction;
            rigorous proofs in discrete mathematics and programming.
          </p>
        </CourseAccordion>

        <CourseAccordion category="math" title="Probability">
          <p>
            Combinatorics; independence and conditioning; Poisson process; discrete/continuous distributions; expectation,
            transformations, moment-generating functions; joint/marginal/conditional distributions; covariance/correlation;
            central limit theorem.
          </p>
        </CourseAccordion>

      </section>
    </div>
  );
}
