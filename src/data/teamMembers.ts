
export type TeamProject = {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
  liveUrl?: string;
};

export type TeamMember = {
  // Team Section
  id: string;
  slug: string;
  number: string;
  name: string;
  role: string;
  specialty: string;
  intro: string;
  image: string;

  // Profile information
  location: string;
  shortBio: string;
  about: string;
  email: string;

  // Social links
  whatsapp?: string;
  github?: string;
  linkedin?: string;

  // Portfolio information
  services: string[];
  skills: string[];
  projects: TeamProject[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    slug: "founder",
    number: "01",
    name: "Ahmed Nakib",
    role: "Founder & Creative Lead",
    specialty: "Strategy / Development",
    intro:
      "Leading Nexora Digital with a focus on strategy, digital experiences, and building work that connects creative thinking with real business goals.",
    image: "/me.png",

    location: "Bangladesh",
    shortBio:
      "Building thoughtful digital experiences and helping businesses grow through technology and creative thinking.",
    about:
      "I enjoy planning and building digital products that solve real problems. My focus includes frontend development, digital strategy, user experience, and creating a strong foundation for Nexora Digital. I believe great digital products combine clean code, thoughtful design, and clear business goals.",
    email: "hello@example.com",

    whatsapp: "https://wa.me/8801XXXXXXXXX",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",

    services: [
      "Digital Strategy & Planning",
      "Website Development",
      "Business Growth Solutions",
      "Creative Direction",
      "Project Management",
    ],

    skills: [
      "Business Strategy",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Team Leadership",
      "Product Planning",
      "UI/UX Principles",
    ],

    projects: [
      {
        title: "Nexora Digital",
        description:
          "A digital agency platform focused on modern websites, creative solutions, and meaningful digital experiences.",
        image: "/images/projects/nexora.jpg",
        category: "Agency Website",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        link: "",
      },
      {
        title: "E-commerce Experience",
        description:
          "A concept for a modern online shopping experience with organized product pages and a responsive interface.",
        image: "/images/projects/ecommerce.jpg",
        category: "E-commerce",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "",
      },
    ],
  },

  {
    id: "developer",
    slug: "developer",
    number: "02",
    name: "Team Member",
    role: "Full Stack Developer",
    specialty: "Web / Technology",
    intro:
      "Turning ideas into fast, responsive, and scalable digital experiences with clean development and thoughtful interaction.",
    image: "/me.png",

    location: "Bangladesh",
    shortBio:
      "Developing responsive web applications with a focus on performance, maintainability, and usability.",
    about:
      "A development-focused team profile covering frontend and full-stack web development. The role includes building responsive interfaces, integrating APIs, improving application performance, and creating maintainable solutions. The profile details are placeholders until the actual team member's information is added.",
    email: "developer@example.com",

    whatsapp: "https://wa.me/8801XXXXXXXXX",
    github: "https://github.com/developerusername",
    linkedin: "https://www.linkedin.com/in/developerusername",

    services: [
      "Frontend Development",
      "Full Stack Web Development",
      "Responsive Website Development",
      "API Integration",
      "Website Performance Optimization",
      "Mobile App Development",
    ],

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "React Native",
      "Tailwind CSS",
      "REST APIs",
      "Git & GitHub",
    ],

    projects: [
      {
        title: "E-commerce Platform",
        description:
          "A sample online store concept featuring responsive product pages, reusable UI components, and a scalable frontend structure.",
        image: "/images/projects/ecommerce.jpg",
        category: "E-commerce",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "",
      },
      {
        title: "Business Website",
        description:
          "A professional business website concept designed to present services, communicate value, and establish an online presence.",
        image: "/images/projects/business.jpg",
        category: "Business Website",
        technologies: ["React", "Next.js", "REST APIs"],
        link: "",
      },
      {
        title: "Mobile App Concept",
        description:
          "A sample mobile application project focused on a consistent user experience and reusable interface patterns.",
        image: "/images/projects/mobile-app.jpg",
        category: "Mobile Application",
        technologies: ["React Native", "TypeScript"],
        link: "",
      },
    ],
  },

  {
    id: "designer",
    slug: "designer",
    number: "03",
    name: "Team Member",
    role: "UI/UX & Graphic Designer",
    specialty: "Design / Visual Identity",
    intro:
      "Creating visual systems and interfaces that make brands feel clear, distinctive, and easy to understand.",
    image: "/me.png",

    location: "Bangladesh",
    shortBio:
      "Designing clear interfaces, meaningful user journeys, and distinctive visual identities.",
    about:
      "This design profile focuses on translating ideas into clear and engaging visual experiences. The work includes interface design, wireframes, prototypes, landing pages, and brand visuals. The goal is to make digital products intuitive, consistent, and visually memorable.",
    email: "designer@example.com",

    whatsapp: "https://wa.me/8801XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/designerusername",

    services: [
      "UI/UX Design",
      "Website Interface Design",
      "Brand Identity Design",
      "Landing Page Design",
      "Graphic Design",
      "Wireframing & Prototyping",
    ],

    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Responsive UI Design",
      "Visual Design",
      "Design Systems",
      "User Research",
      "Interface Design",
    ],

    projects: [
      {
        title: "SaaS Dashboard UI",
        description:
          "A sample dashboard design concept focused on usability, clear information hierarchy, and simplified workflows.",
        image: "/images/projects/saas-dashboard.jpg",
        category: "UI/UX Design",
        technologies: ["Figma", "UI/UX", "Prototyping"],
        link: "",
      },
      {
        title: "Brand Identity System",
        description:
          "A sample visual identity project covering brand direction, consistent visual elements, and digital brand applications.",
        image: "/images/projects/brand-identity.jpg",
        category: "Branding",
        technologies: ["Figma", "Visual Design", "Brand Identity"],
        link: "",
      },
    ],
  },

  {
    id: "editor",
    slug: "editor",
    number: "04",
    name: "Team Member",
    role: "Video Editor",
    specialty: "Motion / Content",
    intro:
      "Turning raw ideas into engaging visual stories through editing, motion, pacing, and creative direction.",
    image: "/me.png",

    location: "Bangladesh",
    shortBio:
      "Creating engaging video content through editing, motion, and visual storytelling.",
    about:
      "This profile represents the video editing and motion content role within Nexora Digital. The work focuses on shaping raw footage into engaging stories, producing promotional content, and adapting videos for different digital platforms. The profile can be updated with the team member's real experience and portfolio.",
    email: "editor@example.com",

    whatsapp: "https://wa.me/8801XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/editorusername",

    services: [
      "Video Editing",
      "Social Media Content",
      "Motion Graphics",
      "Promotional Videos",
      "Reels & Short-Form Videos",
      "Color Correction",
    ],

    skills: [
      "Video Editing",
      "Motion Design",
      "Visual Storytelling",
      "Color Correction",
      "Audio Editing",
      "Content Editing",
      "Video Transitions",
    ],

    projects: [
      {
        title: "Brand Promotional Video",
        description:
          "A sample promotional video concept designed to communicate a brand message through engaging visual storytelling.",
        image: "/images/projects/brand-video.jpg",
        category: "Video Production",
        technologies: ["Video Editing", "Motion Graphics"],
        link: "",
      },
      {
        title: "Social Media Reels",
        description:
          "A short-form video content concept designed for social platforms, with attention to pacing, transitions, and audience engagement.",
        image: "/images/projects/social-reels.jpg",
        category: "Social Media",
        technologies: ["Short-Form Editing", "Motion Design"],
        link: "",
      },
    ],
  },
];
