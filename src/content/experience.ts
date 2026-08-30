export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
  link?: { label: string; href: string };
}

export const experiences: ExperienceEntry[] = [
  {
    id: "stallioni",
    title: "Full Stack Developer Intern",
    company: "Stallioni Net Solutions",
    location: "Coimbatore",
    period: "May 2026 – Jul 2026",
    bullets: [
      "Shipped a production government job portal for a Malaysian client on React, Node.js, Express and MongoDB — dynamic listings, filtering and search, and a multi-step application flow with document upload and real-time status tracking.",
      "Built the secure admin panel for managing postings, reviewing applications and exporting applicant data, with role-based access control over JWT auth to meet the client's data-privacy requirements.",
      "Worked through code reviews and sprint planning with senior engineers, following team standards for schema design, API versioning and automated testing.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    link: { label: "Certificate", href: "https://drive.google.com/file/d/1jPKdP4xH8s6XpGNHGfEIPBgvVm-GikJi/view?usp=sharing" },
  },
  {
    id: "srmist-research",
    title: "Undergraduate Researcher, AI-Integrated IoT Healthcare",
    company: "SRMIST",
    location: "Chennai",
    period: "Aug 2025 – Present",
    bullets: [
      "ESP32-based system for automated syringe injection with real-time sensor fusion and AI-driven control loops; sub-5% dosage error using TensorFlow regression and time-series models.",
      "Prototyped NLP parsing of patient instructions via sequence-to-intent classification for voice-command caregiver interaction.",
      "Supervised by Dr. Nithya V. Funded by an Undergraduate Research Grant (2025).",
    ],
    stack: ["ESP32", "TensorFlow", "Sensor Fusion", "Edge AI", "NLP"],
  },
];
