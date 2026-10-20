
export type ProjectCategory =
  | "Web Development"
  | "E-commerce"
  | "SaaS"
  | "UI/UX Design"
  | "Creative Design";

export type ProjectImage =
  | {
      type: "image";
      src: string;
      alt: string;
      aspect?: "landscape" | "portrait" | "wide";
    }
  | {
      type: "fallback";
      alt: string;
    };

export type Project = {
  id: string;
  number?: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  image: ProjectImage;
  liveUrl?: string;
  caseStudyUrl?: string;
};

export const projects: Project[] = [
  {
    id: "verified-project-slug",
    title: "Verified Project Name",
    category: "Web Development",
    description:
      "The actual description of the project.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    image: {
      type: "image",
      src: "/projects/project-name.webp",
      alt: "Verified Project website preview",
      aspect: "landscape",
    },
    liveUrl: "https://verified-project.com",
  },
];