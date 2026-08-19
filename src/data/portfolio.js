/**
 * Centralized Portfolio Data Configuration
 * Edit this file to customize all personal info, skills, projects, education, and achievements.
 */

export const personalInfo = {
  name: "Rohullah Mir",
  title: "Frontend & Full Stack Developer",
  roles: [
    "Frontend Developer",
    "React Specialist",
    "Full Stack Enthusiast",
    "UI/UX Craftsman"
  ],
  college: "National Institute of Technology",
  location: "Jammu & Kashmir, India",
  email: "rohullahmir313@gmail.com",
  github: "https://github.com/rohullahmir313",
  linkedin: "https://linkedin.com/in/rohullahmir",
  resumeUrl: "#resume",
  bioHeadline: "Crafting modern, accessible, and high-performance web experiences with React & modern web technologies.",
  status: "Available for internships & full-time roles",
  stats: [
    { label: "Years Coding", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "DSA Problems Solved", value: "350+" },
    { label: "Tech Stack Tools", value: "12+" }
  ]
};

export const aboutMe = {
  intro: "Hello! I am a passionate Computer Science student and software developer focused on building clean, intuitive, and high-performance user interfaces.",
  study: "Currently pursuing my degree in Computer Science & Engineering, deepening my understanding of software engineering principles, distributed systems, and modern web architectures.",
  interests: "My primary technical interests lie in React ecosystem engineering, component design systems, responsive web performance, frontend state management, and modern developer tooling.",
  learning: "Currently exploring TypeScript advanced types, Next.js App Router architecture, and building accessible UI primitives with Tailwind CSS.",
  projectPhilosophy: "I enjoy building end-to-end web applications that solve real-world problems, prioritizing clean code, exceptional UX, and bulletproof responsiveness across all viewports.",
  careerGoal: "Seeking an opportunity to contribute as a Frontend or Full Stack Developer in an innovative, high-growth engineering team where I can create impactful products.",
  highlights: [
    {
      title: "Clean Architecture",
      description: "Writing modular, maintainable, and well-documented component code."
    },
    {
      title: "Pixel-Perfect UI/UX",
      description: "Transforming design concepts into fluid, responsive, and accessible interfaces."
    },
    {
      title: "Performance First",
      description: "Optimizing bundle size, rendering performance, and web vitals for speed."
    },
    {
      title: "Problem Solving",
      description: "Strong foundation in data structures, algorithms, and logical problem solving."
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
        { name: "JavaScript (ES6+)", level: "Advanced", levelPercent: 92, tag: "Primary" },
        { name: "Python", level: "Intermediate", levelPercent: 78, tag: "Core" },
        { name: "Java", level: "Intermediate", levelPercent: 75, tag: "OOP" },
        { name: "C++", level: "Intermediate", levelPercent: 72, tag: "DSA" },
        { name: "TypeScript", level: "Intermediate", levelPercent: 75, tag: "Modern" },
        { name: "HTML5 / Semantic", level: "Expert", levelPercent: 95, tag: "Web" },
        { name: "CSS3 / Modern", level: "Expert", levelPercent: 95, tag: "Web" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: "Layout",
      skills: [
        { name: "React.js", level: "Advanced", levelPercent: 90, tag: "Primary" },
        { name: "Tailwind CSS", level: "Advanced", levelPercent: 94, tag: "Styling" },
        { name: "Redux / Context API", level: "Advanced", levelPercent: 85, tag: "State" },
        { name: "Next.js", level: "Intermediate", levelPercent: 78, tag: "Framework" },
        { name: "Vite", level: "Advanced", levelPercent: 88, tag: "Build Tool" },
        { name: "Responsive Web Design", level: "Expert", levelPercent: 95, tag: "Mobile-First" },
        { name: "RESTful API Integration", level: "Advanced", levelPercent: 88, tag: "Async" }
      ]
    },
    {
      id: "tools",
      title: "Tools & DevOps",
      icon: "Wrench",
      skills: [
        { name: "Git", level: "Advanced", levelPercent: 88, tag: "VCS" },
        { name: "GitHub", level: "Advanced", levelPercent: 90, tag: "Collaboration" },
        { name: "VS Code", level: "Advanced", levelPercent: 95, tag: "IDE" },
        { name: "Figma", level: "Intermediate", levelPercent: 80, tag: "UI/UX" },
        { name: "Postman", level: "Intermediate", levelPercent: 82, tag: "API Testing" },
        { name: "Chrome DevTools", level: "Advanced", levelPercent: 90, tag: "Debugging" },
        { name: "npm / pnpm", level: "Advanced", levelPercent: 88, tag: "Package Mgmt" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "devflow-workspace",
    title: "DevFlow - Productivity & Task Workspace",
    subtitle: "Modern Kanban & Agile developer dashboard",
    category: "Frontend",
    description: "A feature-rich productivity suite designed for developer workflows. Features interactive drag-and-drop task boards, priority tagging, productivity analytics, custom workspaces, and dark/light mode with full client-side persistence.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Lucide Icons", "LocalStorage API"],
    githubUrl: "https://github.com/rohullahmir313/devflow-workspace",
    liveUrl: "https://devflow-demo.vercel.app",
    featured: true,
    highlights: [
      "Dynamic Kanban board with customizable columns & priority badges",
      "Interactive analytics charts showing task completion velocity",
      "Instant offline persistence via custom LocalStorage hooks",
      "Smooth micro-interactions and keyboard accessibility shortcuts"
    ],
    gradient: "from-indigo-600 to-cyan-500",
    badge: "Featured Project"
  },
  {
    id: "cryptopulse-dashboard",
    title: "CryptoPulse - Market Analytics Terminal",
    subtitle: "Real-time crypto asset explorer & portfolio tracker",
    category: "Full Stack",
    description: "An intuitive financial analytics platform that provides real-time market trends, detailed price variation metrics, interactive currency conversion calculator, and a personalized watchlist with responsive charting.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Async API", "Chart UI"],
    githubUrl: "https://github.com/rohullahmir313/cryptopulse-dashboard",
    liveUrl: "https://cryptopulse-demo.vercel.app",
    featured: true,
    highlights: [
      "Live search and multi-criteria filtering for 100+ cryptocurrencies",
      "Interactive sparkline graphs and percentage gain/loss visualizers",
      "Instant multi-currency exchange rate calculator",
      "Local watchlist management with real-time state synchronization"
    ],
    gradient: "from-teal-500 to-emerald-600",
    badge: "Analytics"
  },
  {
    id: "shopsphere-storefront",
    title: "ShopSphere - Modern E-Commerce Catalog",
    subtitle: "High-performance shopping experience with instant cart",
    category: "Frontend",
    description: "A sleek, modern e-commerce application featuring instant product filtering by category and price range, an animated slide-over shopping cart, coupon validation, and an interactive simulated checkout flow.",
    tech: ["React.js", "Tailwind CSS", "Context API", "JavaScript", "UI Animations"],
    githubUrl: "https://github.com/rohullahmir313/shopsphere-storefront",
    liveUrl: "https://shopsphere-demo.vercel.app",
    featured: true,
    highlights: [
      "Global cart state management powered by React Context and custom reducers",
      "Dynamic search with debounce and multi-attribute facet filtering",
      "Slide-over mini cart drawer with quantity adjustments and coupon codes",
      "Fully responsive grid optimized for mobile touch gestures"
    ],
    gradient: "from-violet-600 to-purple-500",
    badge: "E-Commerce"
  },
  {
    id: "nexus-component-kit",
    title: "Nexus UI - Minimalist Component System",
    subtitle: "Copy-paste React & Tailwind accessible UI library",
    category: "Tools",
    description: "A curated collection of accessible, copy-paste ready UI components built with React and Tailwind CSS. Includes live interactive preview sandboxes, code snippet view with one-click copy, and theme customizers.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    githubUrl: "https://github.com/rohullahmir313/nexus-ui-system",
    liveUrl: "https://nexus-ui-demo.vercel.app",
    featured: false,
    highlights: [
      "Interactive playground to customize padding, radius, and color tokens",
      "One-click raw JSX/CSS clipboard copying with instant toast feedback",
      "Fully accessible keyboard navigable components adhering to WAI-ARIA",
      "Zero runtime dependencies beyond React and Tailwind CSS"
    ],
    gradient: "from-amber-500 to-rose-500",
    badge: "Design System"
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "National Institute of Technology",
    location: "India",
    duration: "2022 — 2026 (Expected)",
    grade: "Cumulative GPA: 8.7 / 10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Web Technologies & Frameworks",
      "Operating Systems"
    ],
    achievements: [
      "Dean's Honor List for Academic Excellence",
      "Active Member & Technical Mentor at Developer Student Club",
      "Organized university-wide Web Development bootcamps for 200+ students"
    ]
  },
  {
    degree: "Higher Secondary Education (Physics, Chemistry, Mathematics)",
    institution: "Higher Secondary School",
    location: "India",
    duration: "2020 — 2022",
    grade: "Grade: 92.4%",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    achievements: [
      "School Topper in Computer Science & Mathematics",
      "First Prize in Regional Science & Technology Exhibition"
    ]
  }
];

export const achievementsData = [
  {
    title: "Meta Frontend Developer Specialization",
    issuer: "Meta / Coursera",
    date: "2024",
    description: "Comprehensive 9-course program covering React, JavaScript, Responsive Design, Version Control, and UX/UI principles.",
    tag: "Certification",
    link: "https://coursera.org"
  },
  {
    title: "1st Place Winner - University Hackathon",
    issuer: "TechFest Hackathon",
    date: "2024",
    description: "Led a 4-person team to build an AI-powered student collaboration tool within 36 hours, taking 1st place among 45+ teams.",
    tag: "Hackathon",
    link: "#"
  },
  {
    title: "350+ DSA Problems Solved",
    issuer: "LeetCode & GeeksforGeeks",
    date: "2023 - Present",
    description: "Consistently practicing algorithmic problem solving with a focus on Arrays, Trees, Graphs, Dynamic Programming, and System Logic.",
    tag: "Competitive",
    link: "https://leetcode.com"
  },
  {
    title: "Open Source Contributor",
    issuer: "GitHub Community",
    date: "2024",
    description: "Contributed bug fixes, accessibility patches, and documentation improvements to popular React and Tailwind open-source repositories.",
    tag: "Open Source",
    link: "https://github.com"
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
