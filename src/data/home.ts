
import {
  Code2,
  Clapperboard,
  PanelsTopLeft,
  Palette,
} from "lucide-react";

export const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, responsive websites and web applications designed to turn your ideas into useful digital products.",
    icon: Code2,
    tags: ["Next.js", "React", "Full-stack"],
    color: "bg-[#e8e0ff]",
  },
  {
    number: "02",
    title: "Video Editing",
    description:
      "Engaging videos, reels, and creative content that tell your story and keep your audience watching.",
    icon: Clapperboard,
    tags: ["Reels", "Promotional", "Motion"],
    color: "bg-[#e6f0cf]",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces and intuitive user experiences that make digital products easier to use.",
    icon: PanelsTopLeft,
    tags: ["Wireframes", "Prototypes", "Design"],
    color: "bg-[#ffe4d6]",
  },
  {
    number: "04",
    title: "Graphic Design",
    description:
      "Distinctive visuals, brand assets, and creative designs that give your business a recognizable identity.",
    icon: Palette,
    tags: ["Branding", "Social media", "Visuals"],
    color: "bg-[#dcecff]",
  },
];

export const expertise = [
  "Web Development",
  "Video Editing",
  "UI/UX Design",
  "Graphic Design",
];

export const projects = [
  {
    number: "01",
    name: "FixItNow",
    category: "Service Marketplace · Full-stack",
    description:
      "A service booking platform connecting customers with technicians through role-based workflows and online payments.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    href: "https://fixitnow-eta-blush.vercel.app/",
    visual: "bg-[#e6f2e9]",
    accent: "#246b4c",
    type: "service",
  },
  {
    number: "02",
    name: "Multi-School Management",
    category: "Education · SaaS Platform",
    description:
      "A multi-school management system with dashboards and workflows for administrators, teachers, students, and guardians.",
    stack: ["Next.js", "Express.js", "Prisma", "PostgreSQL"],
    href: "https://school-management-system-frontend-six-snowy.vercel.app/",
    visual: "bg-[#e8e1ff]",
    accent: "#6944cf",
    type: "school",
  },
  {
    number: "03",
    name: "Nakivo",
    category: "E-commerce · Online Store",
    description:
      "A modern online store with product discovery, shopping cart, authentication, and product management features.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
    href: "https://nakivo.vercel.app/",
    visual: "bg-[#f9e4d6]",
    accent: "#a45630",
    type: "shop",
  },
] as const;

export const team = [
  {
    initials: "ND",
    name: "Web Development",
    role: "Development Team",
    description: "Building fast, scalable websites and digital products.",
    color: "bg-[#e7deff]",
    text: "text-[#6844cb]",
  },
  {
    initials: "VE",
    name: "Video Editing",
    role: "Creative Team",
    description: "Turning raw footage into polished visual stories.",
    color: "bg-[#e7f0d1]",
    text: "text-[#52732a]",
  },
  {
    initials: "UX",
    name: "UI/UX Design",
    role: "Design Team",
    description: "Creating clear, intuitive, user-friendly experiences.",
    color: "bg-[#ffe2d4]",
    text: "text-[#a6532f]",
  },
  {
    initials: "GD",
    name: "Graphic Design",
    role: "Visual Team",
    description: "Giving brands a distinct and consistent visual identity.",
    color: "bg-[#dcecff]",
    text: "text-[#34699e]",
  },
];

export const process = [
  {
    number: "01",
    title: "Discover",
    description: "We listen to your ideas, goals, audience, and challenges.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description: "We shape the strategy and create a clear project direction.",
  },
  {
    number: "03",
    title: "Build & Create",
    description: "We turn the plan into a polished, practical solution.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We test, deliver, and help you take the next step.",
  },
];

export const aboutStats = [
  { value: "04", label: "Core creative services" },
  { value: "01", label: "Connected team" },
  { value: "∞", label: "Ideas to explore" },
  { value: "100%", label: "Focus on thoughtful work" },
];
