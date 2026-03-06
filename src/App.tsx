import React, { useState } from 'react';
import { 
  Terminal, ClipboardCheck, Globe, Database, BarChart3, Coffee, 
  Binary, Wrench, ChevronRight, Award, RotateCcw, 
  CheckCircle2, PieChart, Target
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('landing');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const [subjects] = useState([
    {
      id: 1, code: "CS-361", title: "Operating Systems - II",
      icon: <Terminal className="w-8 h-8" />, color: "bg-indigo-600",
      description: "Distributed Systems, Deadlocks, Disk Scheduling & Mobile OS Architecture.",
      questions: [
        { question: "Which disk scheduling algorithm minimizes seek time by moving the head to the closest request?", options: ["FCFS", "SSTF", "SCAN", "C-LOOK"], correct: 1 },
        { question: "What does 'Rotational Latency' refer to?", options: ["Time to move arm", "Time for sector to rotate under head", "Data transfer rate", "Total I/O time"], correct: 1 },
        { question: "Which cloud model combines public and private infrastructure?", options: ["Hybrid Cloud", "Community Cloud", "Personal Cloud", "Internal Cloud"], correct: 0 },
        { question: "A system safe state exists if:", options: ["Deadlock is occurring", "A safe sequence can be found", "All processes are blocked", "Resources are unused"], correct: 1 },
        { question: "Mobile OS architecture like Android typically uses:", options: ["x86 Architecture", "ARM Architecture", "MIPS Architecture", "PowerPC"], correct: 1 },
        { question: "The Banker's Algorithm is primarily for:", options: ["Prevention", "Avoidance", "Recovery", "Scheduling"], correct: 1 },
        { question: "Distributed systems 'Size Scalability' means:", options: ["Adding nodes without performance loss", "Physical size", "Geographical spread", "Storage per node"], correct: 0 },
        { question: "A 'Claim Edge' in a Resource Allocation Graph signifies:", options: ["Immediate request", "Allocated resource", "Future potential request", "Released resource"], correct: 2 },
        { question: "Full stroke time in disk management refers to:", options: ["Adjacent tracks", "Inner to outer track time", "Rotation speed", "Read one sector"], correct: 1 },
        { question: "Necessary deadlock conditions include Mutual Exclusion, No Preemption, Circular Wait and:", options: ["Safe State", "Hold and Wait", "Resource Order", "Starvation"], correct: 1 },
        { question: "Android OS is based on which kernel?", options: ["Windows NT", "Linux", "Darwin", "Microkernel"], correct: 1 },
        { question: "Disk Bandwidth is defined as:", options: ["Total bytes / Total time", "Seek time + Latency", "Rotational speed", "Buffer size"], correct: 0 },
        { question: "Absolute path name starts from:", options: ["Current folder", "Root directory", "User home", "System folder"], correct: 1 },
        { question: "Sequential Access is standard for:", options: ["Hard Drives", "Magnetic Tapes", "SSDs", "Flash Drives"], correct: 1 },
        { question: "Kernel is defined as:", options: ["UI", "Core of OS", "Compiler", "Driver"], correct: 1 },
        { question: "Access Transparency means:", options: ["See physical locations", "Access local/remote same way", "See source code", "Open source"], correct: 1 },
        { question: "Grid computing is:", options: ["Single server", "Resources from multiple locations", "LAN", "Mainframe"], correct: 1 },
        { question: "File operation removing data but keeping entry:", options: ["Delete", "Truncate", "Close", "Open"], correct: 1 },
        { question: "P2P Architecture stands for:", options: ["Private to Public", "Peer to Peer", "Process to Port", "Point to Point"], correct: 1 },
        { question: "Deadlock Recovery method:", options: ["Preemption", "Reboot", "Ignore", "More RAM"], correct: 0 },
        { question: "Which scheduling is called Elevator Algorithm?", options: ["FCFS", "SSTF", "SCAN", "LOOK"], correct: 2 },
        { question: "iOS is developed by:", options: ["Google", "Apple", "Microsoft", "Samsung"], correct: 1 },
        { question: "Wait-for-graph is used for:", options: ["Avoidance", "Detection", "Prevention", "Recovery"], correct: 1 },
        { question: "Mobile OS managing touch input is a:", options: ["Service", "Responsibility", "Constraint", "Hardware"], correct: 1 },
        { question: "Distributed transaction property:", options: ["Speed", "ACID", "UI", "Storage"], correct: 1 }
      ]
    },
    {
      id: 2, code: "CS-362", title: "Software Testing",
      icon: <ClipboardCheck className="w-8 h-8" />, color: "bg-rose-600",
      description: "Methodologies, V-Model, White/Black Box & Quality Assurance.",
      questions: [
        { question: "Which testing is also known as Glass Box testing?", options: ["Black Box", "White Box", "Acceptance", "Smoke"], correct: 1 },
        { question: "Cyclomatic Complexity measures:", options: ["Lines of code", "Independent paths", "Execution time", "Variables"], correct: 1 },
        { question: "Testing at developer's site by internal team:", options: ["Alpha", "Beta", "Gamma", "Unit"], correct: 0 },
        { question: "In V-Model, Acceptance Testing corresponds to:", options: ["Unit Design", "System Design", "Requirement Analysis", "Coding"], correct: 2 },
        { question: "Regression Testing ensures:", options: ["New features", "Old features didn't break", "Speed", "UI"], correct: 1 },
        { question: "A 'Stub' is used in:", options: ["Bottom-up", "Top-down", "Big Bang", "Regression"], correct: 1 },
        { question: "Which is a dimension of Software Quality?", options: ["Color", "Reliability", "Cost", "Size"], correct: 1 },
        { question: "Verification answers:", options: ["Right product?", "Product right?", "Client happy?", "Sales high?"], correct: 1 },
        { question: "Validation answers:", options: ["Right product?", "Product right?", "Code error-free?", "Database ready?"], correct: 0 },
        { question: "Equivalence Partitioning is:", options: ["White Box", "Black Box", "Grey Box", "Unit"], correct: 1 },
        { question: "The Agile Manifesto emphasizes:", options: ["Tools", "Individuals/Interactions", "Documentation", "Contracts"], correct: 1 },
        { question: "Static testing involves:", options: ["Running code", "Walkthroughs/Inspections", "Stress tests", "Scans"], correct: 1 },
        { question: "Boundary Value Analysis tests:", options: ["Middle", "Edges", "Random", "Negative"], correct: 1 },
        { question: "Integration testing level is:", options: ["Unit and System", "System and Acceptance", "Coding and Unit", "Design"], correct: 0 },
        { question: "Smoke testing is also called:", options: ["Sanity", "Build Verification", "Dry run", "User"], correct: 1 },
        { question: "Fault vs Error: Fault is:", options: ["Human mistake", "Condition causing failure", "Crash", "Semicolon"], correct: 1 },
        { question: "Accessibility testing checks:", options: ["Speed", "Disability usability", "Encryption", "API"], correct: 1 },
        { question: "Navigation testing checks:", options: ["Color", "Hyperlink paths", "CPU", "Database"], correct: 1 },
        { question: "A 'Driver' module is used in:", options: ["Top-down", "Bottom-up", "Unit", "Manual"], correct: 1 },
        { question: "Testing under extreme load:", options: ["Load", "Stress", "Functional", "Unit"], correct: 1 },
        { question: "Test Plan includes:", options: ["Source code", "Scope/Approach", "Salaries", "Logos"], correct: 1 },
        { question: "White box focuses on:", options: ["Functional", "Internal logic", "End user", "Schema"], correct: 1 },
        { question: "Internationalization testing:", options: ["Speed", "Language adaptability", "Satellite", "Rules"], correct: 1 },
        { question: "Debugging occurs:", options: ["Before testing", "After bug identified", "Instead of test", "During requirements"], correct: 1 },
        { question: "Software testing objective:", options: ["Zero bugs", "Find defects", "Speed", "Design"], correct: 1 }
      ]
    },
    {
      id: 3, code: "CS-363", title: "Web Technologies - II",
      icon: <Globe className="w-8 h-8" />, color: "bg-emerald-600",
      description: "AJAX, jQuery, PHP Sessions, XML, and MVC Frameworks.",
      questions: [
        { question: "AJAX stands for:", options: ["Advanced JS", "Asynchronous JS and XML", "Automated JSON", "Array JS"], correct: 1 },
        { question: "Which pattern does modern PHP frameworks follow?", options: ["MVP", "MVVM", "MVC", "Singleton"], correct: 2 },
        { question: "Object used for AJAX background data exchange:", options: ["HttpRequest", "XMLHttpRequest", "ServerRequest", "Response"], correct: 1 },
        { question: "jQuery shortcut symbol:", options: ["&", "#", "$", "@"], correct: 2 },
        { question: "PHP superglobal for file uploads:", options: ["$_POST", "$_GET", "$_FILES", "$_ENV"], correct: 2 },
        { question: "Function to start PHP session:", options: ["session_init()", "session_start()", "start_session()", "session_begin()"], correct: 1 },
        { question: "XML tags are:", options: ["Case-insensitive", "Case-sensitive", "Predefined", "Limited"], correct: 1 },
        { question: "DOM stands for:", options: ["Data", "Document Object Model", "Direct", "Digital"], correct: 1 },
        { question: "XMLHttpRequest readyState 4 means:", options: ["Started", "Loading", "Finished and Ready", "Error"], correct: 2 },
        { question: "jQuery selectors are used to:", options: ["Math", "Select/Manipulate HTML", "Connect DB", "Vars"], correct: 1 },
        { question: "PHP function for cookies:", options: ["create", "setcookie()", "make", "save"], correct: 1 },
        { question: "XML Namespace prevents:", options: ["Syntax errors", "Name conflicts", "Slow loading", "Large size"], correct: 1 },
        { question: "Sticky Form means:", options: ["Cloud form", "Retains input after error", "Unclickable", "Mobile"], correct: 1 },
        { question: "Window object represents:", options: ["HTML", "Browser window", "Monitor", "Port"], correct: 1 },
        { question: "XML document 'Well-formed' means:", options: ["Has CSS", "Syntax rules followed", "Valid against DTD", "Has images"], correct: 1 },
        { question: "SimpleXML parsing function:", options: ["parse()", "simplexml_load_file()", "read()", "xml_to_obj()"], correct: 1 },
        { question: "JSON vs XML: JSON is:", options: ["Heavier", "Text-based but more compact", "Not for web", "Only for Java"], correct: 1 },
        { question: "PHP session variable storage:", options: ["$_GET", "$_SESSION", "$_ENV", "$_COOKIE"], correct: 1 },
        { question: "Framework library loading syntax:", options: ["$this->load->library()", "import()", "require()", "use()"], correct: 0 },
        { question: "AJAX polling is:", options: ["Single request", "Periodic client requests", "Server push", "Database scan"], correct: 1 },
        { question: "jQuery event method:", options: ["click()", "tap()", "hit()", "press()"], correct: 0 },
        { question: "PHP header() function used for:", options: ["Styling", "Redirection/Headers", "DB query", "HTML body"], correct: 1 },
        { question: "XML attribute syntax:", options: ["name=value", "name:'value'", "name='value'", "name:value"], correct: 2 },
        { question: "JS function isNaN() checks for:", options: ["Negative", "Zero", "Not a Number", "Infinity"], correct: 2 },
        { question: "Modern framework view file extension:", options: [".html", ".php", ".ci", ".view"], correct: 1 }
      ]
    },
    {
      id: 4, code: "CS-364", title: "Data Analytics",
      icon: <BarChart3 className="w-8 h-8" />, color: "bg-amber-600",
      description: "Machine Learning, NLP, Association Rules, and Predictive Modeling.",
      questions: [
        { question: "Apriori property:", options: ["Subsets frequent", "Supersets frequent", "Root frequent", "Unique"], correct: 0 },
        { question: "Lemmatization differs by:", options: ["Speed", "Context/Morphology", "Vowels", "Simplicity"], correct: 1 },
        { question: "ML technique using Confusion Matrix:", options: ["Regression", "Classification", "Clustering", "Rules"], correct: 1 },
        { question: "Overfitting:", options: ["Learns noise", "Too simple", "No data", "Under-trained"], correct: 0 },
        { question: "Sentiment Analysis:", options: ["Trends", "Opinions/Emotions", "Spelling", "Logic"], correct: 1 },
        { question: "K-Means is:", options: ["Supervised", "Unsupervised", "Reinforcement", "Deep"], correct: 1 },
        { question: "Accuracy ratio:", options: ["TP to FN", "Correct to Total", "Precision/Recall", "TN only"], correct: 1 },
        { question: "Tokenization breaks into:", options: ["Binary", "Words/Phrases", "Sentences only", "Blocks"], correct: 1 },
        { question: "KDD stands for:", options: ["Knowledge Discovery in Databases", "Key", "Delivery", "Kernel"], correct: 0 },
        { question: "Recall is:", options: ["TP/(TP+FP)", "TP/(TP+FN)", "TN/(TN+FP)", "Total"], correct: 1 },
        { question: "Stemming for 'running':", options: ["Run", "Running", "Runner", "Runn"], correct: 3 },
        { question: "Outlier in data:", options: ["Frequent", "Deviates from general behavior", "Average", "Missing"], correct: 1 },
        { question: "Web Scraping extracts from:", options: ["Design", "Websites", "Host", "Network"], correct: 1 },
        { question: "F1 Score is mean of:", options: ["Support/Confidence", "Precision/Recall", "TP/TN", "Input/Output"], correct: 1 },
        { question: "Deep Learning is a subset of:", options: ["Cloud", "Machine Learning", "Networking", "Database"], correct: 1 },
        { question: "Precision is:", options: ["TP/(TP+FP)", "TP/(TP+FN)", "TN/Total", "FN/Total"], correct: 0 },
        { question: "Diagnostic Analytics answers:", options: ["What?", "Why?", "Future?", "How?"], correct: 1 },
        { question: "Supervised Learning requires:", options: ["Unlabeled", "Labeled", "No data", "Random"], correct: 1 },
        { question: "Market Basket Analysis metric:", options: ["Recall", "Support/Confidence", "Deviation", "Entropy"], correct: 1 },
        { question: "Bag of Words ignores:", options: ["Vocabulary", "Grammar/Order", "Keywords", "Context"], correct: 1 },
        { question: "NLP phase for sentence structure:", options: ["Lexical", "Syntactic", "Semantic", "Pragmatic"], correct: 1 },
        { question: "Social Media Analytics layer:", options: ["Physical", "Network/Text/Action", "Logic", "Database"], correct: 1 },
        { question: "Random Forest is an:", options: ["Individual", "Ensemble Method", "Unsupervised", "Association"], correct: 1 },
        { question: "Support in mining:", options: ["Popularity", "Accuracy", "Error rate", "Complexity"], correct: 0 },
        { question: "Predictive Analytics uses:", options: ["Historical data", "Random data", "Future data", "None"], correct: 0 }
      ]
    },
    {
      id: 5, code: "CS-365", title: "Java Programming",
      icon: <Coffee className="w-8 h-8" />, color: "bg-blue-600",
      description: "Collections, JDBC, Multithreading, Servlets, JSP and Spring.",
      questions: [
        { question: "HashSet implements:", options: ["List", "Queue", "Set", "Map"], correct: 2 },
        { question: "Wait for thread to die:", options: ["wait()", "sleep()", "join()", "yield()"], correct: 2 },
        { question: "JDBC interface for param queries:", options: ["Statement", "PreparedStatement", "Callable", "Result"], correct: 1 },
        { question: "JSP implicit object for output:", options: ["request", "response", "out", "session"], correct: 2 },
        { question: "Servlet method for POST:", options: ["doGet()", "doPost()", "service()", "init()"], correct: 1 },
        { question: "Map stores:", options: ["List", "Set", "Key-Value", "Stack"], correct: 2 },
        { question: "Class.forName() is for:", options: ["Object", "Loading class", "Naming", "Deleting"], correct: 1 },
        { question: "Spring framework type:", options: ["Database", "Application", "Frontend", "Compiler"], correct: 1 },
        { question: "Servlet lifecycle:", options: ["init, service, destroy", "start, run, stop", "main", "load"], correct: 0 },
        { question: "Synchronization prevents:", options: ["Speed", "Race conditions", "Errors", "Size"], correct: 1 },
        { question: "JSP tag for scriptlets:", options: ["<%= %>", "<%! %>", "<% %>", "<%-- %>"], correct: 2 },
        { question: "Vector is:", options: ["Fast", "Synchronized", "Unordered", "Obsolete"], correct: 1 },
        { question: "JDBC driver for MySQL prefix:", options: ["jdbc:mysql://", "mysql:jdbc://", "db", "connect"], correct: 0 },
        { question: "JSP include directive:", options: ["<%@ include ... %>", "<jsp:include />", "<% include %>", "include"], correct: 0 },
        { question: "Wake waiting thread:", options: ["wait", "notify()", "start", "run"], correct: 1 },
        { question: "ResultSet method to move:", options: ["move", "next()", "goTo", "step"], correct: 1 },
        { question: "ServletConfig is for:", options: ["Global", "Initialization params", "DB", "Session"], correct: 1 },
        { question: "Default thread priority:", options: ["1", "5", "10", "0"], correct: 1 },
        { question: "JSP expression syntax:", options: ["<%= expr %>", "<% expr %>", "<%! expr %>", "${ expr }"], correct: 0 },
        { question: "Iterator method to check:", options: ["next", "hasNext()", "check", "valid"], correct: 1 },
        { question: "Spring Core handles:", options: ["Dependency Injection", "JDBC", "Sockets", "OS"], correct: 0 },
        { question: "ArrayList vs LinkedList: Array is:", options: ["Linked", "Index-based", "Slowest", "Stack"], correct: 1 },
        { question: "Generic class syntax:", options: ["Class<T>", "Class(T)", "Class[T]", "Class{T}"], correct: 0 },
        { question: "Method to pause thread:", options: ["wait", "sleep(ms)", "stop", "pause"], correct: 1 },
        { question: "CallableStatement is for:", options: ["Select", "Stored Procedures", "Update", "Table"], correct: 1 }
      ]
    },
    {
      id: 6, code: "CS-366", title: "Compiler Construction",
      icon: <Binary className="w-8 h-8" />, color: "bg-violet-600",
      description: "Parsing, Lexical Analysis (LEX), SDD, and Code Optimization.",
      questions: [
        { question: "Sentinel in Lex marks:", options: ["End of input", "Start", "Errors", "Comments"], correct: 0 },
        { question: "Bootstrapping is:", options: ["Restart", "Write compiler in its own language", "Error", "Load"], correct: 1 },
        { question: "DAG identifies:", options: ["Errors", "Common sub-expressions", "Vars", "Flow"], correct: 1 },
        { question: "Dead code elimination is:", options: ["Parsing", "Optimization", "Lexical", "Linking"], correct: 1 },
        { question: "Cross Compiler runs on A and:", options: ["Produces A", "Produces B", "Debugs", "Compiles 2"], correct: 1 },
        { question: "Most powerful bottom-up parser:", options: ["SLR", "LALR", "LL(1)", "Recursive"], correct: 1 },
        { question: "YACC stands for:", options: ["Compiler-Compiler", "Yet Another", "Yielding", "Cool"], correct: 1 },
        { question: "Handle pruning used in:", options: ["Top-down", "Bottom-up", "Semantic", "Lexing"], correct: 1 },
        { question: "Basic block has:", options: ["Multiple entries", "Single entry/exit", "Loops", "If"], correct: 1 },
        { question: "LEX scan function:", options: ["yylex()", "yyparse()", "yywrap()", "yymain"], correct: 0 },
        { question: "Lexical Analyzer output:", options: ["Parse tree", "Tokens", "Assembly", "Object"], correct: 1 },
        { question: "Inherited attributes come from:", options: ["Children", "Parent/Siblings", "Global", "Constants"], correct: 1 },
        { question: "Synthesized attributes depend on:", options: ["Parent", "Children", "Sibling", "Constants"], correct: 1 },
        { question: "LL(1) parser scanning:", options: ["Right-to-left", "Left-to-right", "Link", "Logical"], correct: 1 },
        { question: "Left recursion elimination for:", options: ["Bottom-up", "Top-down", "Generation", "Semantic"], correct: 1 },
        { question: "Parser input is:", options: ["Source", "Tokens", "Table", "Assembly"], correct: 1 },
        { question: "Symbol table stores:", options: ["Text", "Identifier info", "Registers", "Tags"], correct: 1 },
        { question: "Intermediate code benefits:", options: ["Fast parsing", "Portability", "UI", "Size"], correct: 1 },
        { question: "Code generation occurs in:", options: ["Frontend", "Backend", "Lexing", "Reqs"], correct: 1 },
        { question: "Ambiguous grammar produces:", options: ["Error", "Multiple parse trees", "Loops", "Better code"], correct: 1 },
        { question: "Parsing technique using Lookahead:", options: ["Recursive", "Predictive / LL(1)", "Big Bang", "Linear"], correct: 1 },
        { question: "L-attributed attributes flow:", options: ["Right to left", "Left to right", "Bottom", "Root"], correct: 1 },
        { question: "Three-address code is:", options: ["Lexical", "Intermediate", "Object", "Source"], correct: 1 },
        { question: "Augmented grammar for:", options: ["Speed", "Start production in LR", "Recursion", "Opt"], correct: 1 },
        { question: "Lexical analyzer first step:", options: ["Parsing", "Grouping chars into lexemes", "Linking", "Opt"], correct: 1 }
      ]
    },
    {
      id: 7, code: "CS-3610", title: "Software Testing Tools",
      icon: <Wrench className="w-8 h-8" />, color: "bg-cyan-600",
      description: "Selenium, Bug Tracking (Bugzilla/JIRA), and Coverage Analysis.",
      questions: [
        { question: "Open-source web automation tool:", options: ["WinRunner", "Bugzilla", "Selenium", "Sikuli"], correct: 2 },
        { question: "Initial state of a new defect:", options: ["New / Start", "Closed", "Verified", "Assigned"], correct: 0 },
        { question: "Metric for independent paths:", options: ["Statement", "Cyclomatic Complexity", "Branch", "Boundary"], correct: 1 },
        { question: "Bugzilla is used for:", options: ["Performance", "Bug tracking", "Coding", "UI"], correct: 1 },
        { question: "Code Coverage measures:", options: ["Team", "Code executed by tests", "Latency", "Memory"], correct: 1 },
        { question: "JIRA is for:", options: ["Unit", "Project/Issue tracking", "Compiling", "Database"], correct: 1 },
        { question: "Manual vs Automation: Automation is:", options: ["Cheaper", "Faster for regression", "Accurate UI", "Alpha"], correct: 1 },
        { question: "Defect Life Cycle: 'Fixed' follows:", options: ["Closed", "Open/Assigned", "Verified", "Resolved"], correct: 1 },
        { question: "Selenium IDE is a:", options: ["Server", "Record/playback tool", "Language", "Database"], correct: 1 },
        { question: "Test Incident Report includes:", options: ["Budget", "Defect summary", "Source", "Resume"], correct: 1 },
        { question: "Decision coverage tests:", options: ["Lines", "True and False outcomes", "Users", "Speed"], correct: 1 },
        { question: "Regression test suite should be:", options: ["Small", "Automated for efficiency", "Random", "Deleted"], correct: 1 },
        { question: "Test Automation Framework types:", options: ["Linear/Hybrid", "Fast", "Windows", "None"], correct: 0 },
        { question: "Entry Criteria defines:", options: ["Stop", "Safe to start", "Cost", "Team"], correct: 1 },
        { question: "Branch vs Statement coverage:", options: ["Branch weaker", "Branch stronger", "Same", "Statement stronger"], correct: 1 },
        { question: "Manual testing best for:", options: ["Regression", "Exploratory/Usability", "Performance", "Repetitive"], correct: 1 },
        { question: "Unstructured loop has:", options: ["Simple", "Nested", "Multiple entries/exits", "No code"], correct: 2 },
        { question: "Bug report 'Priority' means:", options: ["Business impact", "Complexity", "Time", "Color"], correct: 0 },
        { question: "Automation tool classification parameter:", options: ["Cost", "Functionality", "Developer", "Size"], correct: 1 },
        { question: "Code Coverage formula:", options: ["Executed/Total*100", "Bugs/Lines", "Time", "Tests"], correct: 0 },
        { question: "Sikuli uses:", options: ["Source", "Images/Screenshots", "SQL", "API"], correct: 1 },
        { question: "Redmine tool is:", options: ["Closed", "Open source project mgmt", "Java only", "Mac"], correct: 1 },
        { question: "Verification method:", options: ["Unit", "Review/Walkthrough", "Stress", "Beta"], correct: 1 },
        { question: "Static analysis tool checks:", options: ["Runtime", "Code without execution", "Load", "Speed"], correct: 1 },
        { question: "Defect Life Cycle states:", options: ["Open, Fixed, Closed", "Start, end", "Input", "Low"], correct: 0 }
      ]
    }
  ]);

  const startQuiz = (subject) => {
    setSelectedSubject(subject);
    setAnswers({});
    setScore(0);
    setView('quiz');
    window.scrollTo(0, 0);
  };

  const handleAnswer = (qIdx, oIdx) => {
    setAnswers({ ...answers, [qIdx]: oIdx });
  };

  const calculateResults = () => {
    let finalScore = 0;
    selectedSubject.questions.forEach((q, idx) => {
      if (answers[idx] === q.correct) finalScore++;
    });
    setScore(finalScore);
    setView('results');
    window.scrollTo(0, 0);
  };

  // --- Views ---

  const LandingView = () => (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full text-center mb-16 animate-in fade-in duration-700">
        <h1 className="text-7xl font-black text-slate-900 mb-4 tracking-tighter">
          Online Quiz System
        </h1>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <div 
            key={subject.id}
            className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
            onClick={() => startQuiz(subject)}
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`w-14 h-14 ${subject.color} rounded-[1rem] flex items-center justify-center text-white shadow-xl shadow-current/20 transition-transform group-hover:scale-110 duration-500`}>
                {subject.icon}
              </div>
              <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                {subject.code}
              </span>
            </div>
            
            <h2 className="text-xl font-black text-slate-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors">
              {subject.title}
            </h2>
            <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6 flex-grow">
              {subject.description}
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <PieChart className="w-3 h-3" /> {subject.questions.length} Questions
              </div>
              <div className="bg-slate-900 text-white p-2.5 rounded-full transition-all group-hover:translate-x-1">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <footer className="mt-24 text-slate-300 font-black uppercase tracking-[0.4em] text-[10px]">
        Standard Production Release
      </footer>
    </div>
  );

  const QuizView = () => {
    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / selectedSubject.questions.length) * 100;

    return (
      <div className="min-h-screen bg-white flex flex-col">
        <header className="border-b px-10 py-6 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-md z-30">
          <div className="flex items-center gap-5">
            <div className={`${selectedSubject.color} p-2.5 rounded-xl text-white shadow-xl`}>
              {selectedSubject.icon}
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">{selectedSubject.title}</h2>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Active Assessment</p>
            </div>
          </div>
          <button onClick={() => setView('landing')} className="text-slate-400 font-black uppercase text-[10px] px-5 py-2 bg-slate-50 rounded-full border">
            Quit
          </button>
        </header>

        <div className="fixed top-[88px] left-0 right-0 h-1 bg-slate-50 z-30">
          <div className={`h-full transition-all duration-500 ${selectedSubject.color}`} style={{ width: `${progress}%` }}></div>
        </div>

        <main className="max-w-3xl mx-auto w-full p-10 py-20 space-y-24">
          {selectedSubject.questions.map((q, qIdx) => (
            <div key={qIdx} className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="flex items-center gap-4">
                <span className="bg-slate-900 text-white font-black px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em]">Q{qIdx + 1}</span>
                {answers[qIdx] !== undefined && <CheckCircle2 className="w-6 h-6 text-green-500 animate-in zoom-in" />}
              </div>
              <h3 className="text-4xl font-black text-slate-900 leading-[1.1] tracking-tighter">{q.question}</h3>
              <div className="grid grid-cols-1 gap-4">
                {q.options.map((option, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleAnswer(qIdx, oIdx)}
                    className={`w-full text-left p-6 rounded-[2.2rem] border-2 transition-all flex items-center gap-6 group
                      ${answers[qIdx] === oIdx 
                        ? 'border-slate-900 bg-slate-900 text-white ring-[10px] ring-slate-100 shadow-xl' 
                        : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'}`}
                  >
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg transition-colors
                      ${answers[qIdx] === oIdx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="font-bold text-xl tracking-tight">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-20 pb-48 flex justify-center">
            <button 
              onClick={calculateResults}
              disabled={Object.keys(answers).length < selectedSubject.questions.length}
              className={`px-24 py-10 rounded-[3rem] font-black text-3xl transition-all shadow-2xl
                ${Object.keys(answers).length === selectedSubject.questions.length 
                  ? 'bg-slate-900 text-white hover:scale-105 active:scale-95' 
                  : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`}
            >
              Complete Evaluation
            </button>
          </div>
        </main>
      </div>
    );
  };

  const ResultsView = () => {
    const total = selectedSubject.questions.length;
    const percentage = Math.round((score / total) * 100);
    const isSuccess = percentage >= 40;

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-[4rem] p-20 w-full max-w-2xl text-center shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className={`mx-auto w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 rotate-12 shadow-inner ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-rose-100 text-rose-600'}`}>
            {isSuccess ? <Award className="w-14 h-14" /> : <Target className="w-14 h-14" />}
          </div>
          
          <h2 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">{isSuccess ? "Grade: Pass" : "Needs Review"}</h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-16">{selectedSubject.title}</p>
          
          <div className="bg-slate-50 rounded-[4rem] p-16 mb-16 border border-slate-100 shadow-inner">
            <div className="text-[10rem] font-black text-slate-900 mb-6 leading-none tracking-tighter">{percentage}%</div>
            <div className="flex justify-center gap-10 text-slate-500 font-black uppercase tracking-widest text-sm">
              <span className="text-green-600">{score} Hits</span>
              <span className="text-slate-200">|</span>
              <span className="text-slate-400">{total} Questions</span>
            </div>
          </div>

          <button onClick={() => { setView('landing'); window.scrollTo(0, 0); }} className="flex items-center justify-center gap-5 w-full bg-slate-900 text-white py-8 rounded-[2.5rem] font-black text-2xl hover:bg-slate-800 shadow-xl transition-all">
            <RotateCcw className="w-8 h-8" /> Dashboard
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-slate-900 selection:text-white">
      {view === 'landing' && <LandingView />}
      {view === 'quiz' && <QuizView />}
      {view === 'results' && <ResultsView />}
    </div>
  );
};

export default App;