export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  bullets: string[];
  metrics: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  pushedAt: string;
  url: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "interview-platform",
    title: "AI Interview Preparation Platform",
    subtitle: "End-to-end code execution and grading system",
    stack: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    bullets: [
      "Solo-built end to end: NestJS REST API with DTO validation and JWT guards, Next.js frontend on Zustand and React Query.",
      "Executes untrusted user code in a Docker-sandboxed runner with hard per-submission isolation — CPU, memory, process and network caps, read-only filesystem, non-root user, enforced wall-clock timeout.",
      "Grading is decoupled into a Redis-backed BullMQ queue so the API returns 202 immediately, bounding concurrent container execution independently of request traffic.",
      "Auth hardened against stolen-token replay with rotating server-side-hashed refresh tokens and reuse detection that revokes all sessions; validated with scripted replay, cross-account and CSRF/XSS attack simulations.",
    ],
    metrics: ["202 ACCEPTED", "SANDBOXED EXEC", "TOKEN REUSE DETECTION"],
  },
  {
    id: "roadguard-ai",
    title: "RoadGuard AI",
    subtitle: "Intelligent Road Safety Platform",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "YOLOv8",
    ],
    bullets: [
      "Geo-tagged hazard reporting platform; MongoDB 2dsphere indexing cut nearby-hazard lookups by ~90% and Redis caching reduced hot-endpoint latency by ~80%.",
      "YOLOv8 microservice for road defect classification, with real-time hazard sync over WebSockets, Leaflet heatmaps and MongoDB aggregation dashboards.",
    ],
    metrics: ["\u221290% LOOKUP", "\u221280% LATENCY", "REALTIME WS"],
  },
];

/** GitHub language colors for the repo grid */
export const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  Rust: "#dea584",
};

/** Fallback repos if GitHub API fails */
export const fallbackRepos: GitHubRepo[] = [
  {
    name: "ai-interview-platform",
    description:
      "Full-stack AI-powered interview preparation platform with sandboxed code execution",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    pushedAt: "2026-08-01",
    url: "https://github.com/sivaprasath550/ai-interview-platform",
  },
  {
    name: "roadguard-ai",
    description:
      "Intelligent road safety platform with YOLOv8 hazard detection",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    pushedAt: "2026-07-15",
    url: "https://github.com/sivaprasath550/roadguard-ai",
  },
  {
    name: "esp32-syringe-system",
    description:
      "ESP32-based automated syringe injection system with sensor fusion",
    language: "C++",
    languageColor: "#f34b7d",
    stars: 0,
    pushedAt: "2026-06-01",
    url: "https://github.com/sivaprasath550/esp32-syringe-system",
  },
  {
    name: "redis-queue-service",
    description: "BullMQ-based job queue microservice for async task processing",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    pushedAt: "2026-05-20",
    url: "https://github.com/sivaprasath550/redis-queue-service",
  },
  {
    name: "portfolio-v2",
    description:
      "Personal portfolio site built with Next.js, R3F, and custom GLSL shaders",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    pushedAt: "2026-08-30",
    url: "https://github.com/sivaprasath550/portfolio-v2",
  },
  {
    name: "dsa-solutions",
    description: "300+ competitive programming solutions in C++ and Python",
    language: "C++",
    languageColor: "#f34b7d",
    stars: 0,
    pushedAt: "2026-08-25",
    url: "https://github.com/sivaprasath550/dsa-solutions",
  },
];
