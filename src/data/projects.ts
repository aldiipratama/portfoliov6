import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    title: "Boarding school website Al-Ashr Al-Madani",
    description: "Official information system and profile for PPTQ Al-Mawaddah, providing enrollment information, news, and activity gallery.",
    technologies: ["PHP", "MySQL", "TailwindCSS", "Javascript"],
    liveLink: "https://pptqam.ponpes.id/",
    longDescription: "This website is designed as a digital information center for Pondok Pesantren Tahfidzul Qur'an Al-Mawaddah. The aim is to facilitate prospective students and guardians in accessing registration information, viewing the latest activities through galleries and news, and getting to know more about the cottage profile. Built using PHP for easy content management by the boarding school.",
    features: [
      "Online Santri Registration",
      "News and Article Management",
      "Photo and Video Gallery",
      "Responsive Design",
      "Profile and Contact Information",
    ],
    category: "Web Company",
  },
  {
    title: "Heart App - Consultant App",
    description: "A mobile application that connects users with experts for online consultation sessions.",
    githubLink: "https://github.com/aldiipratama/Heart",
    technologies: ["Flutter", "Dart"],
    longDescription: "Heart App is a cross-platform mobile application built to facilitate consultation services. Users can search for experts by category, schedule sessions, and conduct live consultations through the chat or video call features within the app.",
    features: [
      "Expert Search and Filter",
      "Scheduling of Consultation Sessions",
      "Real-time Chat Feature",
      "Reminder Notification",
    ],
    category: "Mobile App",
  },
  {
    title: "Invitation Digital",
    description: "A modern and interactive digital wedding invitation website for the Trah family.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    liveLink: "https://undangan-trah.netlify.app/",
    longDescription: "This project is the implementation of a wedding invitation in a digital format that can be shared easily via a link. Designed to be attractive and informative, it features event details, a pre-wedding gallery and greetings from guests. Hosted on Netlify to ensure availability and speed of access.",
    features: [
      "Countdown Timer Event",
      "Interactive Photo Gallery",
      "Digital Guest Book",
      "Event Location Map",
      "Responsif Design",
    ],
    category: "Web Invitation",
  },
  {
    title: "First Portfolio Version",
    description: "My first portfolio built to showcase my early projects and journey as a developer.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/aldiipratama",
    longDescription: "This was my first step in creating an online identity as a developer. This portfolio was built entirely with basic web technologies (HTML, CSS, JS) to showcase my early projects and the skills I had at the time. This project became an important foundation in my learning journey.",
    features: [
      "Project List",
      "About Me Page",
      "Contact and Social Media Links",
    ],
    category: "Portfolio",
  },
  {
    title: "Second Portfolio Version",
    description: "Redevelopment of my portfolio with a more modern design and more advanced technology.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://aldipratama-portfoliov2.vercel.app/",
    longDescription: "This second version of Portfolio is a significant upgrade from the previous version. It is built with Next.js for better server-side rendering and SEO performance, and styled using Tailwind CSS for a fast and consistent design process. This portfolio reflects my growing expertise in the React ecosystem.",
    features: [
      "Smooth Animation",
      "Light & Dark Mode",
      "Fully Responsive Design",
      "Performance Optimization with Next.js",
    ],
    category: "Portfolio",
  },
  {
    title: "Third Portfolio Version",
    description: "The third iteration of my personal portfolio website, focusing on minimalism and user experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveLink: "https://aldipratama-portfoliov3.vercel.app/",
    longDescription: "In this third version, I introduced TypeScript to improve code quality and scalability. The design was made more minimalist and clean to highlight the project content. The goal is to provide a better user experience and demonstrate my ability to use modern technology effectively.",
    features: [
      "Type-safe with TypeScript",
      "Minimalist Design",
      "Improved Accessibility (a11y)",
      "Neat Code Structure",
    ],
    category: "Portfolio",
  },
  {
    title: "Fourth Portfolio Version",
    description: "Portfolio with a clean and minimalist one-page design, focusing on delivering concise information.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveLink: "https://aldipratama-portfoliov4.vercel.app/",
    longDescription: "This fourth version adopts a 'less is more' approach with an elegant single-page layout. The aim is to provide quick and direct navigation to the main points, displaying projects and expertise efficiently without requiring multiple clicks.",
    features: ["Single-Page Design", "Minimalist Layout", "Quick Navigation", "Content-Focused"],
    category: "Portfolio",
  },
  {
    title: "Portfolio Fifth Version",
    description: "The fifth iteration of the portfolio, featuring interactive 3D designs and unique and experimental layouts.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "Vercel"],
    liveLink: "https://aldipratama-portfoliov5.vercel.app/",
    longDescription: "Explore modern web design by integrating 3D elements with Three.js and complex animations with Framer Motion. This version highlights the technical capabilities in creating immersive and unconventional user experiences, moving away from standard portfolio layouts.",
    features: ["Interactive 3D Elements", "Advanced Animation with Framer Motion", "Experimental Design", "Immersive User Experience"],
    category: "Portfolio",
  },
  {
    title: "Portfolio Sixth Version (Current)",
    description: "The latest version of my portfolio, featuring current projects with a more mature and professional design.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Vercel", "Framer Motion"],
    liveLink: "https://aldipratama.vercel.app/",
    longDescription: "This portfolio is the most advanced version that represents my current capabilities. It adopts Shadcn/UI for beautiful and accessible UI components, and is built on a solid foundation of Next.js and TypeScript. This project is the ultimate showcase of my frontend development skills with a focus on clarity and professionalism.",
    features: [
      "UI Components with Shadcn/UI",
      "Professional Layout",
      "Detailed Project Description",
      "Focus on Readability and UX",
    ],
    category: "Portfolio",
  },
  {
    title: "AI-Dyy Chatbot",
    description: "A simple AI chatbot application capable of responding to user queries interactively.",
    technologies: ["HTML", "CSS", "JavaScript", "GROQ API", "Netlify"],
    liveLink: "https://ai-dyy.netlify.app/",
    longDescription: "This experimental project aims to integrate the API of the language model (AI) into a simple web interface. Users can type in questions and get answers generated by AI in real-time. This is my exploration of harnessing the power of AI in web applications.",
    features: [
      "Interactive Chat Interface",
      "Integration with GROQ API",
      "Real-time Respons",
      "Simple and Lightweight Design",
    ],
    category: "Web App",
  },
  {
    title: "Ruang Rasa - Emotion Journal",
    description: "Web app for mood and emotion journaling. Created as an entry for the PekanIT competition.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Supabase"],
    githubLink: "https://github.com/aldiipratama/ruang-rasa",
    liveLink: "https://ruang-rasa-journal.vercel.app/",
    longDescription: "Ruang Rasa is a journaling platform that helps users to recognize and track their emotions from day to day. The app is built with a modern technology stack to provide a fast, responsive and intuitive user experience. This project is part of the PekanIT competition.",
    features: [
      "User Authentication",
      "Daily Journal Writing",
      "Mood and Emotion Tracking",
      "Emotion Data Visualization",
    ],
    category: "Competition",
  },
  {
    title: "Ruang Rasa API",
    description: "RESTful API that backends the Ruang Rasa application, handling data and authentication.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    githubLink: "https://github.com/aldiipratama/ruang-rasa-api",
    longDescription: "This API is responsible for all server-side logic for the Flavor Room application, including user management (registration, login), CRUD operations for journal entries, and security using JSON Web Tokens (JWT).",
    features: [
      "User Authentication Endpoint",
      "CRUD for Journal Data",
      "Data Validation",
      "Security Middleware",
    ],
    category: "API",
  },
  {
    title: "Web Blogging (LVC Assignment)",
    description: "Blog application with a focus on security as a Major Project for the Software Security course.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/aldiipratama/Web-blogging-KPL",
    longDescription: "This academic project aims to apply fundamental web security concepts in a functional blog application. The main focus is on preventing common vulnerabilities such as SQL Injection and Cross-Site Scripting (XSS).",
    features: [
      "Secure Login System",
      "Protection from SQL Injection",
      "XSS Prevention",
      "Post Management",
    ],
    category: "Academic",
  },
  {
    title: "Sunda Language TSD",
    description: "TypeScript Definition project for Sundanese Language.",
    technologies: ["TypeScript", "Node.js"],
    githubLink: "https://github.com/aldiipratama/sunda-language",
    longDescription: "An open-source initiative to provide data types and definitions for Sundanese elements in the TypeScript ecosystem, making it easier for other developers to build Sundanese-related applications with type-safety.",
    features: [
      "Type Definitions for Vocabulary",
      "Language Data Structures",
      "Supports IntelliSense",
    ],
    category: "Library",
  },
  {
    title: "VSCode Sunda Language Highlighting",
    description: "Ekstensi Visual Studio Code untuk memberikan syntax highlighting pada file Bahasa Sunda.",
    technologies: ["JSON", "JavaScript", "VSCode API"],
    githubLink: "https://github.com/aldiipratama/vscode-sunda-language-highlighting",
    longDescription: "Ekstensi ini meningkatkan pengalaman coding bagi para developer yang bekerja dengan file atau skrip dalam Bahasa Sunda di dalam VSCode. Dengan pewarnaan sintaks yang tepat, kode menjadi lebih mudah dibaca dan dipahami.",
    features: [
      "Pewarnaan Sintaks",
      "Meningkatkan Keterbacaan Kode",
      "Ringan dan Cepat",
    ],
    category: "Ekstensi VSCode",
  },
  {
    title: "ShareFly",
    description: "A web application for file sharing, as a Major Project for the Web Practicum course.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    githubLink: "https://github.com/aldiipratama/ShareFly",
    longDescription: "ShareFly is a simple web application that allows users to upload files and share them easily through a link. This project was created to fulfill the final project of the Web Practicum course.",
    features: [
      "File Upload",
      "Share Link Creation",
      "Easy to Use Interface",
    ],
    category: "Academic",
  },
  {
    title: "E-commerce Website (Web Practicum Assignment)",
    description: "Prototype of e-commerce website as a personalized Major Project for Web Practicum course.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/aldiipratama/pw2023_223040166/tree/main/Tubes/0_Minimum",
    longDescription: "This project is a basic implementation of an online store, covering essential functionality such as displaying products, adding them to cart, and admin pages for management.",
    features: [
      "Product Gallery",
      "Shopping Cart System",
      "Simple Admin Panel",
    ],
    category: "Academic",
  },
  {
    title: "RNV Cleaner",
    description: "CLI script to clean directories such as node_modules, vendors, and .git in a project.",
    technologies: ["Shell Script"],
    githubLink: "https://github.com/aldiipratama/rnv-cleaner",
    longDescription: "A command line tool (CLI) created to automate the process of cleaning up often space-consuming directories such as `node_modules` and `vendor`, as well as the `.git` directory for archival purposes. Helps developers keep projects clean and save storage space.",
    features: [
      "Automatic Cleaning",
      "Easy to Use",
      "Improves Developer Workflow",
    ],
    category: "Tools",
  },
]