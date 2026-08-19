/**
 * Centralized Portfolio Data Configuration
 * Populated with Rahullah Hussain Mir's exact academic profile, AI & ML focus, and skills.
 */

export const personalInfo = {
  name: "Rahullah Hussain Mir",
  title: "B.Tech CSE (AI & ML) Student",
  roles: [
    "B.Tech CSE (AI & ML) Student",
    "Aspiring AI & ML Engineer",
    "Python & C++ Programmer",
    "Software & Web Developer"
  ],
  college: "Swami Vivekanand Institute of Engineering & Technology (SVIET), Banur",
  affiliation: "Affiliated with IKG Punjab Technical University (IKGPTU)",
  location: "Kashmir, J&K, India",
  currentLocation: "Punjab, India",
  batch: "2025 — 2029",
  email: "rohullahmir313@gmail.com",
  github: "https://github.com/rohullahmir313-jpg",
  linkedin: "https://www.linkedin.com/in/rahullah-hussain-mir",
  resumeUrl: "#resume",
  bioHeadline: "Aspiring AI & ML engineer passionate about programming, artificial intelligence, machine learning, and software development.",
  status: "B.Tech CSE (AI & ML) • 2025–2029 Batch",
  stats: [
    { label: "Academic Batch", value: "2025-29" },
    { label: "Core Languages", value: "C/C++/Py" },
    { label: "10th Academic Score", value: "92%" },
    { label: "12th PCM Score", value: "75%" }
  ]
};

export const aboutMe = {
  intro: "I am a B.Tech Computer Science & Engineering (AI & ML) student at Swami Vivekanand Institute of Engineering & Technology (SVIET), Banur, affiliated with IKG Punjab Technical University (IKGPTU).",
  study: "Currently enrolled in the 2025–2029 batch, pursuing rigorous foundational and applied coursework in Artificial Intelligence, Machine Learning, and Computer Science engineering.",
  interests: "Passionate about Artificial Intelligence, Machine Learning, Programming, Web Development, Software Development, and Problem Solving.",
  learning: "Continuously building hands-on skills in AI & Machine Learning algorithms, Data Structures & Algorithms, and modern software development tools.",
  projectPhilosophy: "Focused on developing practical software and machine learning models that apply computer science fundamentals to solve real-world problems.",
  careerGoal: "Aspiring AI & ML engineer with a strong drive to build intelligent systems, software applications, and innovative technology solutions through continuous learning, certifications, and project development.",
  highlights: [
    {
      title: "B.Tech CSE (AI & ML) Student",
      description: "Dedicated undergraduate journey in Artificial Intelligence & Machine Learning engineering."
    },
    {
      title: "Programming in C, C++ & Python",
      description: "Solid coding foundation across systems and high-level scripting languages."
    },
    {
      title: "AI & ML Explorer",
      description: "Active study and implementation of intelligent algorithms and data models."
    },
    {
      title: "Problem Solving & DSA",
      description: "Building strong analytical problem-solving skills using basic data structures."
    }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      icon: "Code",
      skills: [
        { name: "C", level: "Core", levelPercent: 85, tag: "Procedural" },
        { name: "C++", level: "Proficient", levelPercent: 82, tag: "OOP / DSA" },
        { name: "Python", level: "Proficient", levelPercent: 85, tag: "AI / ML" },
        { name: "HTML", level: "Skilled", levelPercent: 90, tag: "Web" },
        { name: "CSS", level: "Skilled", levelPercent: 88, tag: "Styling" }
      ]
    },
    {
      id: "aiml",
      title: "AI & Machine Learning",
      icon: "Brain",
      skills: [
        { name: "AI & Machine Learning", level: "Active Learner", levelPercent: 78, tag: "Core Track" },
        { name: "Basic DSA", level: "Foundation", levelPercent: 75, tag: "Algorithms" },
        { name: "Problem Solving", level: "Applied", levelPercent: 80, tag: "Logic" },
        { name: "Web Development", level: "Foundation", levelPercent: 80, tag: "Frontend" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Environments",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: "Proficient", levelPercent: 84, tag: "VCS" },
        { name: "VS Code", level: "Advanced", levelPercent: 90, tag: "IDE" },
        { name: "Jupyter Notebook", level: "Proficient", levelPercent: 85, tag: "Data / ML" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "ai-ml-models-repository",
    title: "AI & ML Algorithms & Explorations",
    subtitle: "Python machine learning models & data analysis",
    category: "AI & ML",
    description: "Hands-on implementations of core machine learning concepts, data preprocessing pipelines, and exploratory data analysis using Python and Jupyter Notebooks.",
    tech: ["Python", "Jupyter Notebook", "Machine Learning", "Git & GitHub"],
    githubUrl: "https://github.com/rohullahmir313-jpg/My-portfolio",
    liveUrl: "https://github.com/rohullahmir313-jpg",
    featured: true,
    highlights: [
      "Data preprocessing, visualization, and exploratory analysis in Jupyter",
      "Implementation of foundational ML algorithms and regression/classification models",
      "Clean modular code structure documented with reproducible experiments"
    ],
    gradient: "from-indigo-600 to-cyan-500",
    badge: "AI & ML"
  },
  {
    id: "cpp-dsa-toolkit",
    title: "C & C++ Problem Solving Toolkit",
    subtitle: "Algorithmic implementations and data structure modules",
    category: "Programming",
    description: "A structured repository of foundational Data Structures & Algorithms implemented in C and C++, covering arrays, linked lists, sorting, searching, and recursion.",
    tech: ["C++", "C", "Data Structures", "Algorithms", "VS Code"],
    githubUrl: "https://github.com/rohullahmir313-jpg/My-portfolio",
    liveUrl: "https://github.com/rohullahmir313-jpg",
    featured: true,
    highlights: [
      "Efficient C/C++ implementations of core data structures",
      "Algorithmic problem-solving with time and space complexity analysis",
      "Object-oriented programming paradigms in C++"
    ],
    gradient: "from-teal-500 to-emerald-600",
    badge: "DSA & Systems"
  },
  {
    id: "responsive-web-portfolio",
    title: "Interactive Web & UI Showcase",
    subtitle: "Modern responsive web development projects",
    category: "Web Dev",
    description: "Responsive web development projects built with HTML, CSS, and modern web technologies, focusing on clean layout, accessibility, and mobile-first design.",
    tech: ["HTML", "CSS", "Web Development", "Git", "VS Code"],
    githubUrl: "https://github.com/rohullahmir313-jpg/My-portfolio",
    liveUrl: "https://github.com/rohullahmir313-jpg/My-portfolio",
    featured: true,
    highlights: [
      "Semantic HTML5 architecture and responsive CSS styling",
      "Interactive UI components and dynamic cross-browser styling",
      "Version controlled with Git and hosted on GitHub"
    ],
    gradient: "from-violet-600 to-purple-500",
    badge: "Web Development"
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Swami Vivekanand Institute of Engineering & Technology (SVIET), Banur",
    affiliation: "Affiliated with IKG Punjab Technical University (IKGPTU)",
    location: "Punjab, India",
    duration: "2025 — 2029 (Batch)",
    grade: "Pursuing Undergrad",
    coursework: [
      "Artificial Intelligence & Machine Learning",
      "Programming in C & C++",
      "Python Programming",
      "Basic Data Structures & Algorithms",
      "Web Technologies (HTML & CSS)",
      "Computer Science Fundamentals"
    ],
    achievements: [
      "Specialized in Artificial Intelligence & Machine Learning branch",
      "Active participation in campus technical workshops and coding labs"
    ]
  },
  {
    degree: "12th Standard (Higher Secondary) — PCM",
    institution: "Higher Secondary Education",
    location: "Kashmir, J&K, India",
    duration: "Completed",
    grade: "Score: 75%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    achievements: [
      "Strong foundation in Physics, Chemistry, and Mathematics (PCM)",
      "Qualified for B.Tech CSE (AI & ML) program"
    ]
  },
  {
    degree: "10th Standard (Secondary School Examination)",
    institution: "Secondary School Education",
    location: "Kashmir, J&K, India",
    duration: "Completed",
    grade: "Score: 92%",
    coursework: ["Mathematics", "Science", "Social Science", "English", "Languages"],
    achievements: [
      "Outstanding academic distinction with 92% overall score"
    ]
  }
];

export const achievementsData = [
  {
    title: "B.Tech CSE (AI & ML) Scholar",
    issuer: "SVIET / IKGPTU",
    date: "2025 - 2029",
    description: "Enrolled in the specialized B.Tech Computer Science & Engineering (AI & ML) degree program.",
    tag: "Academic",
    link: "https://github.com/rohullahmir313-jpg"
  },
  {
    title: "10th Standard Academic Distinction (92%)",
    issuer: "Board of School Education",
    date: "Academic Milestone",
    description: "Achieved an exceptional 92% score in 10th standard board examinations with distinction in Mathematics and Science.",
    tag: "Merit",
    link: "#"
  },
  {
    title: "12th Standard PCM (75%)",
    issuer: "Higher Secondary Board",
    date: "Academic Milestone",
    description: "Completed 12th standard with Physics, Chemistry, and Mathematics (PCM) at 75%.",
    tag: "Merit",
    link: "#"
  },
  {
    title: "Continuous Technical & AI/ML Learning",
    issuer: "GitHub & Practical Learning",
    date: "Ongoing",
    description: "Building hands-on projects in C, C++, Python, and AI/ML while participating in technical opportunities.",
    tag: "Technical",
    link: "https://github.com/rohullahmir313-jpg"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
