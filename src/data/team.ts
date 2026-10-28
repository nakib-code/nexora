
export type TeamProject = {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location: string;
  shortBio: string;
  about: string;
  image: string;
  email: string;
  skills: string[];
  projects: TeamProject[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "ahmed-nakib",
    name: "Ahmed Nakib",
    role: "Frontend Developer",
    location: "Bangladesh",
    shortBio:
      "Building thoughtful digital experiences for the modern web.",
    about:
      "I enjoy building responsive, accessible, and visually engaging web applications. I focus on clean code, smooth interactions, and useful user experiences.",
    image: "/images/team/ahmed.jpg",
    email: "hello@example.com",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
    projects: [
      {
        title: "E-commerce Experience",
        description:
          "A modern shopping experience with responsive layouts and smooth interactions.",
        image: "/images/projects/ecommerce.jpg",
        category: "E-commerce",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Agency Website",
        description:
          "A premium agency website with motion-driven storytelling.",
        image: "/images/projects/agency.jpg",
        category: "Web Design",
        technologies: ["Next.js", "GSAP", "Framer Motion"],
      },
    ],
  },
];
