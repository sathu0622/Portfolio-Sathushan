// src/data/portfolio.js — All CV data centralized

export const personal = {
  name: "Sathushan Thiyagalingam",
  title: "Full Stack Developer",
  /** Put your photo in public/profile.jpg or set a URL here */
  photo: "/images/sathushan.jpeg",
  tagline: "MERN Stack · React · Next.js · Node.js",
  email: "sathushan622@gmail.com",
  phone: "076 8454 554",
  location: "87 1/1, Fussels Lane, Colombo 06, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/sathushan-thiyagalingam-0672b02b9/",
  github: "https://github.com/sathu0622",
  facebook: "https://web.facebook.com/sathushanthiyagu/",
  instagram: "https://www.instagram.com/sathushan_ts/",
  summary:
    "Full-stack developer with 1+ year of professional experience delivering production-grade web applications. Skilled in MERN stack, Java, and Spring Boot building RESTful APIs, enterprise systems, and responsive UIs for real clients in agile teams.",
};

export const stats = [
  { value: "1+", label: "Years Of Exp." },
  { value: "2k+", label: "Work Hours" },
  { value: "15+", label: "Projects Done" },
  // { value: "5+", label: "Happy Clients" },
];

/** Edit this object to add or remove technologies shown on the site */
export const skills = {
  Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  "State & Data": ["React Hooks", "Context API", "React Query", "Redux", "Axios", "REST APIs", "JWT Auth"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "Python"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL"],
  "DevOps & Tools": ["Git", "GitHub", "Docker", "Kubernetes", "Postman", "VS Code", "Agile", "CI/CD"],
  Integrations: ["Stripe", "Zoom API", "Google Drive API", "Nodemailer", "OAuth"],
};

export const skillLevels = [
  { name: "React.js / Next.js", level: 90 },
  { name: "Node.js / Express", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "MongoDB / PostgreSQL", level: 78 },
  { name: "Docker / DevOps", level: 65 },
  { name: "Python / FastAPI", level: 60 },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Vinasai Inc",
    location: "Toronto, Canada (Remote)",
    period: "Aug 2025 – Dec 2025",
    bullets: [
      "Built dynamic React dashboards with real-time statistics on attendance, services, and client interactions for an Accounting CRM, reducing manual reporting time by ~40%.",
      "Developed reusable React component library for leave management, QR-based attendance, and client portal modules across 2 enterprise products.",
      "Implemented role-based UI rendering in Next.js for Admin, Employee, and Client users with JWT-secured API routes across 3 user tiers.",
      "Built responsive Speedex Garage CRM frontend with work order management, multimedia upload, and automated email notifications, cutting manual follow-ups by ~50%.",
      "Engineered Node.js/Express REST APIs with PostgreSQL and MongoDB consumed by React frontend, with auth middleware across 5+ modules.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Vinasai Inc",
    location: "Toronto, Canada (Remote)",
    period: "Feb 2025 – Jul 2025",
    bullets: [
      "Developed a Static Airline CMS admin dashboard in React with dynamic banner, deal, and destination management.",
      "Built LMS frontend integrated with Zoom API (class scheduling), Stripe (checkout flow), and Nodemailer notifications, reducing scheduling effort by ~60%.",
      "Owned 5+ frontend modules from wireframe through component development, API integration, and production deployment in an agile team.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Developed 4 web applications, including e-commerce, management systems, and informational sites using Node.js, React, MongoDB.",
      "Enhanced SEO, image performance, query efficiency, and leveraged secure payment gateways to boost site load times and user experience",
      "•	Deployed applications with CI/CD pipelines, ensuring efficient updates and stable production environments.",
    ],
  },
];


export const projects = [
    {
    slug: "visionassist",
    title: "VisionAssist",
    subtitle: "AI Document Intelligence for Accessibility",
    description:
      "Intelligent accessibility platform for visually impaired learners that classifies uploaded documents (Book, Magazine, Newspaper) using a fine-tuned MobileNetV2 model (96.57% validation accuracy), then applies adaptive extraction Tesseract OCR with heuristic structural reconstruction for books, and Microsoft Azure Document Intelligence for multi-column magazines and newspapers. Summarizes content using FLAN-T5 fine-tuned with LoRA (only 2.67% of parameters trained) with document-type adaptive prompts, and enables interactive Q&A via DistilBERT fine-tuned on SQuAD. Deployed as a modular FastAPI backend with an accessible web frontend.",
    tech: ["React.js", "FastAPI", "MobileNetV2", "FLAN-T5", "LoRA", "DistilBERT", "Azure Document Intelligence", "Tesseract OCR"],
    category: "AI/ML",
    color: "#ff6b6b",
    icon: "🤖",
    liveUrl: null,
    githubUrl: "https://github.com/sathu0622/25-26J-438-AI-Powered-LMS-for-Visually-Impaired-Students/tree/AI-Powered-System-for-Voice-Based-Resource-Type-Summarization-of-Historical-Content-for-VIS",
  },
  {
    slug: "ecommerce-microservices",
    title: "E-Commerce Microservices Platform",
    subtitle: "Cloud-Native Distributed Backend",
    description:
      "Four independently deployed microservices User, Product, Order, and Payment each with its own MongoDB database and RESTful API. Features JWT authentication, role-based access control, idempotent order creation, payment retry logic, and webhook handling. Containerized with Docker, deployed on Azure Container Apps via GitHub Actions CI/CD pipeline with Snyk SAST security scanning integrated at every build.",
    tech: ["Node.js", "MongoDB", "Docker", "Azure Container Apps", "GitHub Actions", "Snyk", "JWT"],
    category: "Backend",
    color: "#a78bfa",
    icon: "⚙️",
    liveUrl: null,
    githubUrl: "https://github.com/sathu0622/CSTE_P1",
  },
  {
  slug: "delivery-microservices",
  title: "Delivery Management Microservices",
  subtitle: "Distributed Backend Architecture",
  description:
    "Engineered a scalable microservices architecture for a delivery management platform consisting of User, Order, Delivery, and Item services. Built independent REST APIs and data models for each service, implemented JWT authentication and role-based authorization, and developed complete CRUD functionality. Leveraged Docker for containerization and Kubernetes for orchestration, service discovery, and workload management, demonstrating modern cloud-native application design principles in a distributed environment.",
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "JWT",
    "Microservices",
    "REST API"
  ],
  category: "Backend",
  color: "#a78bfa",
  icon: "⚙️",
  liveUrl: null,
  githubUrl: "https://github.com/sathu0622/DS_A",
},
{
  slug: "communication-cms",
  title: "Communication & Stationery CMS",
  subtitle: "Enterprise MERN Management System",
  description:
    "Built a secure full-stack MERN management platform featuring JWT-based authentication with Access & Refresh Tokens, Role-Based Access Control (RBAC), protected routes, and dynamic role-specific dashboards. Developed customer and employee management modules with profile handling, activity tracking, and complete CRUD functionality while designing scalable MongoDB schemas and RESTful APIs.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "RBAC",
    "REST API"
  ],
  category: "Full Stack",
  color: "#fb923c",
  icon: "📋",
  liveUrl: null,
  githubUrl: "https://github.com/TechDilshan/Book_shop",
},
  {
    slug: "multi-agent-support",
    title: "Multi-Agent Customer Support System",
    subtitle: "LangGraph AI Automation Pipeline",
    description:
      "LangGraph-orchestrated multi-agent pipeline that automates e-commerce customer support. Four specialized agents Triage (intent classification + Order ID extraction), Order Intelligence (SQLite lookup), Policy (business rule enforcement), and Action/Response (safe customer reply generation) communicate via a shared MASState object. Uses a locally hosted Ollama qwen2.5:3b LLM with five deterministic Python tools to eliminate hallucinations. Validated with a three-tier test suite: unit, graph integration, and LLM-as-a-Judge evaluation across relevance, accuracy, safety, and tone dimensions.",
    tech: ["Python", "LangGraph", "Ollama", "SQLite", "pytest"],
    category: "AI/ML",
    color: "#38bdf8",
    icon: "🧠",
    liveUrl: null,
    githubUrl: "https://github.com/sathu0622/CTSE_P2",
  },
  {
    title: "Fashion-MNIST Classification",
    subtitle: "Supervised Deep Learning Comparison",
    description:
      "Comparative study of four supervised learning models on the Fashion-MNIST dataset (60,000 training images, 10 clothing classes). Implemented and evaluated ANN (87.8%), CNN (90.4%), CNN with Data Augmentation using ImageDataGenerator (88.4%), and Transfer Learning with MobileNetV2 fine-tuned on ImageNet (90.9%). MobileNetV2 used GlobalAveragePooling, BatchNormalization, Dropout, and was trained with random flip, rotation, and zoom augmentation on images resized to 96×96 RGB.",
    tech: ["Python", "TensorFlow", "Keras", "MobileNetV2", "CNN", "NumPy"],
    category: "AI/ML",
    color: "#c084fc",
    icon: "👗",
    liveUrl: null,
    githubUrl: "https://github.com/sathu0622/DL_Assigment",
  },

{
  slug: "bridal-vision",
  title: "Bridal Vision Studio",
  subtitle: "Full-Stack E-Commerce Platform",
  description:
    "Built a modern bridal fashion e-commerce platform featuring role-based admin and customer portals, secure product management, image uploading with Multer, and cloud image storage via Google Drive API. Developed scalable REST APIs, MongoDB data models, and responsive React interfaces while implementing complete CRUD functionality for products, categories, orders, and customer interactions.",
  tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Multer",
    "Google Drive API",
    "Tailwind CSS"
  ],
  category: "Full Stack",
  color: "#f59e0b",
  icon: "💍",
  liveUrl: null,
  githubUrl: "https://github.com/sathu0622/Bridal_Vision_Studio",
},

{
slug: "stock-management",
title: "Online Stock Management",
subtitle: "Java Web Application",
description:
"Developed a full-stack Java web application for inventory and order management using Servlets, JSP, and XML configuration. Built responsive frontend interfaces with HTML, CSS, and JavaScript, while implementing user management, authentication, shopping cart functionality, and complete CRUD operations for products, inventory, and orders. Designed and managed relational databases using MySQL and JDBC to ensure efficient data processing and reliable stock tracking.",
tech: [
"Java",
"Servlets",
"JSP",
"XML",
"MySQL",
"JDBC",
"JavaScript",
"HTML",
"CSS"
],
category: "Full Stack",
color: "#4ade80",
icon: "📦",
liveUrl: null,
githubUrl: "https://github.com/dilina-jayalath/StockManagment-WebApplication",
}
];
export const education = [
  {
    degree: "BSc (Hons) in Information Technology",
    specialization: "Specialized in Software Engineering",
    institution: "SLIIT – Sri Lankan Institute of Information Technology",
    period: "2022 – 2026",
    status: "Current",
  },
  {
    degree: "G.C.E Advanced Level",
    specialization: "Physical Science Stream - B, 2C's",
    institution: "Hindu College",
    period: "2021",
    status: "Completed",
  },
  {
    degree: "G.C.E Ordinary Level",
    specialization: "8A's & B",
    institution: "Hindu College",
    period: "2017",
    status: "Completed",
  },
];
