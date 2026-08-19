# Personal Developer Portfolio Website

A modern, responsive, high-performance personal portfolio website built with **React.js**, **Tailwind CSS**, and **Lucide React / React Icons**.

## 🚀 Key Features

- **🎨 Modern Dark & Sleek UI**: Ambient radial glows, glassmorphism cards, and curated typography (`Inter` & `JetBrains Mono`).
- **⚡ 100% Frontend-Only**: Zero backend, zero database, zero external dependencies required.
- **📁 Single Source of Truth**: All personal details, bio, skills, projects, education, and achievements are organized in `src/data/portfolio.js`.
- **✨ Interactive Components**:
  - **Dynamic Hero**: Cycling role rotator, status pill, quick contact & resume CTAs, social links, and key stats counters.
  - **Categorized Skills**: Filterable tabs (Languages, Frontend, Tools & DevOps), progress indicators, and instant search.
  - **Featured Projects Grid**: Category filter tabs, project cards with preview windows, GitHub/Live Demo links, and an in-depth Case Study modal.
  - **Education & Milestones**: Clean timeline design with degree, college, coursework, and honors.
  - **Achievements & Certifications**: Grid of hackathon wins, competitive coding milestones, and credentials.
  - **Interactive Contact Form**: Client-side validated form with celebratory confetti animation and instant toast notifications, plus one-click email copy.
  - **Resume Viewer & Export**: Printable formatted resume modal with one-click Markdown download.
  - **Responsive Mobile Navigation**: Glassmorphic fixed navbar with mobile drawer menu and active scroll detection.

---

## 🛠️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Header with navigation & mobile drawer
│   ├── Hero.jsx            # Dynamic hero section with action CTAs & stats
│   ├── About.jsx           # Bio, background, and development philosophy
│   ├── Skills.jsx          # Categorized skills grid with search and tabs
│   ├── Projects.jsx        # Project showcase cards with category filtering
│   ├── ProjectModal.jsx    # Interactive case-study / detail modal
│   ├── Education.jsx       # Academic timeline & coursework
│   ├── Achievements.jsx    # Certifications & hackathon honors
│   ├── Contact.jsx         # Frontend contact form with validation & confetti
│   ├── ResumeModal.jsx     # Printable resume modal & markdown export
│   ├── Toast.jsx           # Toast notification system
│   ├── Footer.jsx          # Footer with social links & back-to-top button
│   └── Icons.jsx           # Clean React Icons & brand SVG components
│
├── data/
│   └── portfolio.js        # Centralized data file (Edit your info here!)
│
├── styles/
│   └── index.css           # Tailwind directives, animations & glassmorphism
│
├── App.jsx                 # Main layout & state provider
└── main.jsx                # React root entry
```

---

## ✏️ How to Customize with Your Information

Simply open `src/data/portfolio.js` and update:
1. `personalInfo`: Name, role title, college, location, email, GitHub URL, LinkedIn URL.
2. `aboutMe`: Background, current studies, technical interests, learning focus.
3. `skillsData`: Add or remove skills across Languages, Frontend, Tools.
4. `projectsData`: Add your projects, screenshots/gradients, tech stacks, GitHub repos, and live demo links.
5. `educationData`: Your college/university, degrees, GPA, and coursework.
6. `achievementsData`: Hackathons, certifications, and coding rankings.

---

## 💻 Development Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
