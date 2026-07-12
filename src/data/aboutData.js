import {
  School as SchoolIcon,
  Laptop as LaptopIcon,
  LayersOutlined as InfrastructureIcon,
} from "@mui/icons-material";

import { cyan } from "@mui/material/colors";

const coreValues = [
  {
    title: "Clean Code",
    desc: "We emphasize industrial standards, modular component architectures, and best practices.",
  },
  {
    title: "Practical Logic",
    desc: "No pure theory. Every module is backed by building real-world dynamic web applications.",
  },
  {
    title: "Career-Ready",
    desc: "We align our tracks with high-demand tech stacks to guarantee immediate market readiness.",
  },
  {
    title: "Continuous Growth",
    desc: "From basic HTML semantics to advanced Next.js SSR and full MERN integrations.",
  },
];

const facultyMembers = [
  {
    name: "Anas Mansour",
    role: "Lead MERN Stack Instructor",
    exp: "8+ Years",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    detail:
      "Expert in Node.js, Express, and MongoDB schema architecture. Former Senior Full-Stack Engineer.",
  },
  {
    name: "Rami Khoury",
    role: "Senior React & Next.js Specialist",
    exp: "6+ Years",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    detail:
      "Specialized in advanced state management, custom hooks, Server-Side Rendering (SSR), and App Router logic.",
  },
  {
    name: "Laila Shami",
    role: "Frontend Design & UI Stylist",
    exp: "5+ Years",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    detail:
      "Passionate about turning static Figma layouts into responsive perfection using modern CSS, Grid, and Tailwind CSS.",
  },
  {
    name: "Omar Naser",
    role: "Core JavaScript Logic Lead",
    exp: "7+ Years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    detail:
      "Asynchronous programming wizard. Deep dive specialist in ES6+ syntax, Fetch API, and secure JWT auth workflows.",
  },
];

const journeyTimeline = [
  {
    year: "Phase 1",
    text: "Mastering the Frontend Foundation with semantic HTML5 structures and fluent CSS3 styling systems.",
  },
  {
    year: "Phase 2",
    text: "Transitioning into absolute programmatic control using pure JavaScript ES6+ logic and functional DOM events.",
  },
  {
    year: "Phase 3",
    text: "Architecting modern Single Page Applications (SPAs) leveraging React component frameworks and Tailwind fluidity.",
  },
  {
    year: "Phase 4",
    text: "Completing full production cycles with robust Next.js optimization and backend Node.js RESTful API deployments.",
  },
];

const infrastructureItems = [
  {
    icon: <LaptopIcon sx={{ fontSize: "2.5rem", color: cyan[400] }} />,
    title: "Modern Coding Lab",
    desc: "High-end workstations optimized for simultaneous local runtime testing and compilation.",
  },
  {
    icon: <InfrastructureIcon sx={{ fontSize: "2.5rem", color: cyan[400] }} />,
    title: "Live API Environments",
    desc: "Isolated deployment instances and sandbox databases for safe backend and aggregation testing.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: "2.5rem", color: cyan[400] }} />,
    title: "Version Control Repos",
    desc: "Private collaborative cloud repositories simulating agile development git methodologies.",
  },
];

export { coreValues, facultyMembers, journeyTimeline, infrastructureItems };
