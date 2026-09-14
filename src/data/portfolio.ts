export interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  role: string;
  stack: string[];
  contributions: string[];
  href: string;
  accent: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  period: string;
  description: string;
  href: string;
}

export const profile = {
  name: "Nguyen Quang Dao",
  role: "Backend Engineer",
  eyebrow: "Software engineer / architecture enthusiast",
  summary:
    "I design dependable backend systems and the interfaces around them. My work spans modular Spring Boot platforms, data-heavy products, and practical tools that turn complex workflows into clear experiences.",
  location: "Ho Chi Minh City, Vietnam",
  email: "nguyenquangdao1408@gmail.com",
  phone: "077-692-5520",
  github: "https://github.com/DaoNQ1408",
  linkedin: "https://www.linkedin.com/in/nguyen-quang-dao-a16909298/",
};

export const skills = [
  { label: "Backend", value: "Java · Spring Boot · REST APIs" },
  { label: "Data", value: "PostgreSQL · MySQL · PostGIS · Redis" },
  { label: "Frontend", value: "React · Next.js · TypeScript" },
  { label: "Platform", value: "Docker · AWS · Firebase · CI/CD" },
];

export const experiences: Experience[] = [
  {
    company: "Picare Vietnam Company",
    role: "Software Engineer Intern",
    period: "May — Aug 2025",
    location: "Ho Chi Minh City",
    summary:
      "Built internal tools for document-heavy operations and warehouse workflows.",
    highlights: [
      "Developed a multi-tier form approval system with Spring Security, JWT, OTP verification, and Google Drive storage.",
      "Engineered a PDF signature utility that embeds authorized signatures at precise document coordinates.",
      "Built a React warehouse dashboard with barcode scanning and fulfillment filters.",
    ],
    stack: ["Spring Boot", "React", "SQL Server", "Google Drive API"],
  },
];

export const projects: Project[] = [
  {
    title: "Culture Quest Lite",
    category: "Capstone / social exploration",
    period: "May — Aug 2026",
    description:
      "A gamified travel and social platform for exploring places, collecting progress, and sharing local stories.",
    role: "Backend Developer · team of 4",
    stack: ["Spring Boot", "PostgreSQL", "PostGIS", "Redis", "AWS"],
    contributions: [
      "Designed a geospatial data model for polygon-based exploration features.",
      "Built the XP, reward, and progress engine with race-condition handling.",
      "Implemented content moderation, scheduled notifications, and asynchronous check-in processing.",
    ],
    href: "https://github.com/Culture-Quest-Lite",
    accent: "teal",
  },
  {
    title: "Coffee Management SaaS",
    category: "Multi-module SaaS platform",
    period: "Jan — Apr 2026",
    description:
      "A modular operating system for coffee shops covering orders, payments, inventory, and day-to-day operations.",
    role: "Backend Developer · team of 3",
    stack: ["Spring Boot", "Next.js", "PostgreSQL", "PayOS", "Cloudinary"],
    contributions: [
      "Architected a multi-module foundation designed for independent domain growth.",
      "Implemented JWT authentication with role-based access control.",
      "Integrated payments and map services into the operational workflow.",
    ],
    href: "https://github.com/coffee-management-saas",
    accent: "amber",
  },
  {
    title: "Skincare Product Sale System",
    category: "E-commerce platform",
    period: "Jan — Apr 2025",
    description:
      "An e-commerce product for managing skincare inventory, orders, customers, and secure account access.",
    role: "Backend Developer · team of 4",
    stack: ["Spring Boot", "MySQL", "React", "Firebase", "MoMo"],
    contributions: [
      "Developed REST APIs for product management, order processing, and authentication.",
      "Designed the MySQL schema with a code-first approach.",
      "Integrated Google login, password recovery, image storage, and sandbox payments.",
    ],
    href: "https://github.com/DaoNQ1408/swp-project-BE",
    accent: "cyan",
  },
];

export const certifications: Certification[] = [
  {
    title: "Amazon Junior Software Developer",
    issuer: "Coursera · Amazon",
    period: "Jan — Apr 2025",
    description:
      "Practical foundations in Java programming and software development.",
    href: "https://coursera.org/share/3b677b75ddf0109bf1af27194ca18be2",
  },
  {
    title: "Software Development Lifecycle",
    issuer: "Coursera · University of Minnesota",
    period: "May — Aug 2025",
    description:
      "Requirements analysis, lifecycle phases, and system architecture design.",
    href: "https://coursera.org/share/f677c17162cab6fc2739202e2884a8c9",
  },
  {
    title: "Project Management Principles and Practices",
    issuer: "Coursera · University of California, Irvine",
    period: "Sep — Dec 2025",
    description:
      "Agile planning, sprint coordination, and risk management for delivery teams.",
    href: "https://coursera.org/share/a5e014e2a15b46f32c8865965ad09ffc",
  },
];
