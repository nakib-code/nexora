export type TeamProject = {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
  liveUrl?: string;
  backendUrl?: string;
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
  phone?: string;

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
    name: "masud",
    role: "Founder & Creative Lead",
    specialty: "Strategy / Development",
    intro:
      "Leading Nexora Digital with a focus on strategy, digital experiences, and building work that connects creative thinking with real business goals.",
    image: "/team1.jpeg",

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
    id: "designer",
    slug: "designer",
    number: "02",
    name: "Team Member",
    role: "Full Stack Developer",
    specialty: "Web / Technology",
    intro:
      "Turning ideas into fast, responsive, and scalable digital experiences with clean development and thoughtful interaction.",
    image: "/team2.jpeg",

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
    // Team Section
    id: "developer",
    slug: "nakibul-islam",
    number: "03",

    name: "Nakibul Islam",
    role: "Full Stack Developer",
    specialty: "Web Development / Full Stack Engineering",

    intro:
     "I'm Nakibul Islam, a passionate Full Stack Developer who turns ideas into powerful digital experiences. I specialize in creating modern websites, e-commerce platforms, SaaS applications, and custom management systems. With hands-on experience in React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL, I build complete web solutions that combine intuitive design, robust backend functionality, secure integrations, and scalable architecture.",
    image: "/me.png",

    // Profile Information
    location: "Bangladesh",

    shortBio:
      "Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL. Experienced in building REST APIs, authentication systems, database integrations, and payment features.",

    about:
      "I am a Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. I work with React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, and PostgreSQL to develop complete web solutions. My development experience includes building REST APIs, authentication and authorization systems, role-based access control, database integrations, payment gateway integrations, and responsive user interfaces. I have worked on projects such as a multi-school management system, a home service marketplace, and an e-commerce platform. I enjoy learning new technologies, improving application performance, writing maintainable code, and solving real-world problems through technology. My goal is to contribute to a professional development team and build reliable, scalable digital products.",

    email: "mail.nakib@gmail.com",
    phone: "+880 1856682104",

    // Social Links
    whatsapp: "https://wa.me/8801856682104",
    github: "https://github.com/nakib-code",
    linkedin: "https://linkedin.com/in/nakibul",

    // Services - Exactly 4 Services
    services: [
      "Full Stack Web Development",
      "WordPress Website Development",
      "Frontend UI Development",
      "Backend API & Database Integration",
    ],

    // Technical Skills
    skills: [
      // Frontend Development
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",

      // Backend Development
      "Node.js",
      "Express.js",
      "REST API Development",
      "JWT Authentication",
      "Authentication & Authorization",
      "Role-Based Access Control (RBAC)",
      "Redis",
      "Middleware",
      "API Validation",
      "Error Handling",
      "CRUD Operations",

      // Database & ORM
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Mongoose",

      // CMS & Website Development
      "WordPress",
      "WordPress Website Customization",

      // Payment Integration
      "SSLCommerz",
      "Stripe",

      // Tools & Platforms
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Render",
      "Cloudinary",
      "npm",

      // Core Concepts
      "Responsive Web Design",
      "Authentication & Authorization",
      "Database Integration",
      "SaaS Architecture",
      "Debugging",
      "Performance Optimization",
    ],

    // Featured Projects
    projects: [
      {
        title: "Multi-School Management System",

        description:
          "A full-stack multi-tenant school management platform that enables multiple schools to manage their academic and administrative activities through a centralized dashboard. Implemented role-based access control for Super Admins, School Admins, Managers, Teachers, Students, and Guardians. Integrated SSLCommerz payment processing and Redis caching for backend performance optimization.",

        image: "/images/projects/multi-school-management.jpg",

        category: "Full Stack / SaaS",

        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma ORM",
          "Redis",
          "JWT",
          "SSLCommerz",
        ],

        link: "https://github.com/nakib-code/multi-school-management-system-frontend",

        backendUrl:
          "https://github.com/nakib-code/multi-school-management-system",

        liveUrl:
          "https://school-management-system-frontend-six-snowy.vercel.app/",
      },

      {
        title: "FixItNow - Home Service Platform",

        description:
          "A full-stack home service marketplace that allows customers to discover local technicians and schedule service bookings based on availability. Developed backend workflows for service management, customer bookings, technician assignments, and booking status management.",

        image: "/images/projects/fixitnow.jpg",

        category: "Full Stack / Service Marketplace",

        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "Prisma ORM",
          "PostgreSQL",
          "JWT",
        ],

        link: "https://github.com/nakib-code/fixitnow-frontend",

        backendUrl: "https://github.com/nakib-code/fixitnow-backend",

        liveUrl: "https://fixitnow-eta-blush.vercel.app/",
      },

      {
        title: "NAKIVO - E-Commerce Platform",

        description:
          "A modern full-stack e-commerce platform featuring product management, dynamic product browsing, and a custom combo creator that allows customers to build personalized product packages. Integrated Stripe payment processing and Cloudinary media uploads to provide a complete shopping experience.",

        image: "/images/projects/nakivo.jpg",

        category: "Full Stack / E-Commerce",

        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "MongoDB",
          "Mongoose",
          "TanStack Query",
          "Stripe",
          "Cloudinary",
        ],

        link: "https://github.com/nakib-code/nakivo",

        liveUrl: "https://nakivo.vercel.app/",
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
    image: "/team4.jpeg",

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
