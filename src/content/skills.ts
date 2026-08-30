export interface SkillCategory {
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: ["C++", "Java", "Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    label: "Backend & Systems",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "BullMQ",
      "REST",
      "WebSockets",
      "Docker",
      "Linux",
      "CI/CD",
      "JWT/Auth",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Zustand",
      "React Query",
    ],
  },
  {
    label: "Embedded & Hardware",
    items: [
      "ESP32",
      "Arduino",
      "Sensor Interfacing",
      "I2C/SPI/UART",
      "Real-Time Data Acquisition",
      "Edge AI",
    ],
  },
  {
    label: "Testing, Tools & ML",
    items: [
      "Jest",
      "Vitest",
      "Supertest",
      "Playwright",
      "Git",
      "GitHub",
      "Postman",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "YOLOv8",
    ],
  },
];

export interface Achievement {
  title: string;
  detail: string;
}

export const achievements: Achievement[] = [
  {
    title: "INNOFUSION HACKATHON \u2014 TOP 3 / 200+ TEAMS",
    detail:
      "Built an AI therapist web app offering context-aware conversational support.",
  },
  {
    title: "UG RESEARCH GRANT \u2014 2025",
    detail: "AI-integrated IoT healthcare, SRMIST.",
  },
  {
    title: "CODEFORCES \u2014 1300+ \u00b7 PUPIL",
    detail: "Competitive programming on Codeforces.",
  },
  {
    title: "LEETCODE \u2014 1500+ \u00b7 300+ PROBLEMS SOLVED",
    detail: "Problem solving on LeetCode.",
  },
];

export interface ProfileLink {
  label: string;
  href: string;
}

export const profileLinks: ProfileLink[] = [
  { label: "LeetCode", href: "https://leetcode.com/u/D754nf7hk1/" },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/siva_prasath",
  },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/user/sivaprasath550/",
  },
];
