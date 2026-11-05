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
    id: "al-amin",
    slug: "al-amin",
    number: "01",
    name: "Al Amin",
    role: "Digital Marketing Specialist",
    specialty: "SEO / Social Media Marketing / Paid Advertising",

    intro:
      "I'm Al Amin, a passionate Digital Marketing Specialist focused on helping businesses grow their online presence, reach the right audience, and generate meaningful results through strategic digital marketing.",

    image: "/team1.jpeg",

    location: "Bangladesh",

    shortBio:
      "Helping businesses grow through strategic digital marketing, audience engagement, and data-driven campaigns.",

    about:
      "I'm a Digital Marketing Specialist with an interest in helping businesses build a strong online presence and connect with their target audience. My work focuses on social media marketing, search engine optimization, paid advertising, content strategy, and campaign planning. I believe successful digital marketing is not just about getting more views or followers; it's about reaching the right people, building trust, and turning engagement into real business opportunities. I aim to create effective marketing strategies that support long-term business growth.",

    email: "hello@example.com",

    whatsapp: "https://wa.me/8801XXXXXXXXX",

    linkedin: "https://www.linkedin.com/in/al-amin",

    services: [
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Facebook & Instagram Ads",
      "Google Ads Management",
      "Content Strategy & Planning",
      "Social Media Page Management",
      "Digital Marketing Strategy",
      "Marketing Analytics & Reporting",
    ],

    skills: [
      "Facebook Marketing",
      "Instagram Marketing",
      "Google Ads",
      "Search Engine Optimization (SEO)",
      "Keyword Research",
      "On-Page SEO",
      "Off-Page SEO",
      "Content Marketing",
      "Content Strategy",
      "Social Media Management",
      "Meta Ads Manager",
      "Audience Targeting",
      "Campaign Optimization",
      "Google Analytics 4",
      "Google Search Console",
      "Canva",
      "Email Marketing",
      "Marketing Analytics",
      "Lead Generation",
      "Competitor Analysis",
    ],

    projects: [
      {
        title: "Social Media Marketing Campaign",
        description:
          "A social media marketing project focused on developing a content strategy, improving audience engagement, and building a consistent online brand presence across social platforms.",
        image: "/images/projects/social-media.jpg",
        category: "Social Media Marketing",
        technologies: ["Facebook", "Instagram", "Meta Ads Manager", "Canva"],
        link: "",
      },
      {
        title: "SEO & Website Growth Strategy",
        description:
          "An SEO-focused project involving keyword research, on-page optimization, content planning, and website performance monitoring to improve organic search visibility.",
        image: "/images/projects/seo.jpg",
        category: "Search Engine Optimization",
        technologies: [
          "Google Analytics 4",
          "Google Search Console",
          "Keyword Research",
          "On-Page SEO",
        ],
        link: "",
      },
    ],
  },
  
  {
    id: "al-amin",
    slug: "al-amin",
    number: "02",
    name: "Al Amin",
    role: "Digital Marketing Specialist",
    specialty: "SEO / Social Media Marketing / Paid Advertising",

    intro:
      "I'm Al Amin, a passionate Digital Marketing Specialist focused on helping businesses grow their online presence, reach the right audience, and generate meaningful results through strategic digital marketing.",

    image: "/team2.jpeg",

    location: "Bangladesh",

    shortBio:
      "Helping businesses grow through strategic digital marketing, audience engagement, and data-driven campaigns.",

    about:
      "I'm a Digital Marketing Specialist with an interest in helping businesses build a strong online presence and connect with their target audience. My work focuses on social media marketing, search engine optimization, paid advertising, content strategy, and campaign planning. I believe successful digital marketing is not just about getting more views or followers; it's about reaching the right people, building trust, and turning engagement into real business opportunities. I aim to create effective marketing strategies that support long-term business growth.",

    email: "hello@example.com",

    whatsapp: "https://wa.me/8801XXXXXXXXX",

    linkedin: "https://www.linkedin.com/in/al-amin",

    services: [
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Facebook & Instagram Ads",
      "Google Ads Management",
      "Content Strategy & Planning",
      "Social Media Page Management",
      "Digital Marketing Strategy",
      "Marketing Analytics & Reporting",
    ],

    skills: [
      "Facebook Marketing",
      "Instagram Marketing",
      "Google Ads",
      "Search Engine Optimization (SEO)",
      "Keyword Research",
      "On-Page SEO",
      "Off-Page SEO",
      "Content Marketing",
      "Content Strategy",
      "Social Media Management",
      "Meta Ads Manager",
      "Audience Targeting",
      "Campaign Optimization",
      "Google Analytics 4",
      "Google Search Console",
      "Canva",
      "Email Marketing",
      "Marketing Analytics",
      "Lead Generation",
      "Competitor Analysis",
    ],

    projects: [
      {
        title: "Social Media Marketing Campaign",
        description:
          "A social media marketing project focused on developing a content strategy, improving audience engagement, and building a consistent online brand presence across social platforms.",
        image: "/images/projects/social-media.jpg",
        category: "Social Media Marketing",
        technologies: ["Facebook", "Instagram", "Meta Ads Manager", "Canva"],
        link: "",
      },
      {
        title: "SEO & Website Growth Strategy",
        description:
          "An SEO-focused project involving keyword research, on-page optimization, content planning, and website performance monitoring to improve organic search visibility.",
        image: "/images/projects/seo.jpg",
        category: "Search Engine Optimization",
        technologies: [
          "Google Analytics 4",
          "Google Search Console",
          "Keyword Research",
          "On-Page SEO",
        ],
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
    name: "Riadul Sharif",
    role: "Video Editor",
    specialty: "Video Editing / Content",

    intro:
      "Creating engaging visual stories through professional video editing, talking-head reels, short-form videos, and promotional advertisements.",

    image: "/team4.jpeg",

    location: "Mirpur, Dhaka, Bangladesh",

    shortBio:
      "Video editor with freelance experience creating talking-head reels, short-form videos, and product or service advertisements for multiple clients.",

    about:
      "Riadul Sharif is a video editor with experience completing projects for several clients. He specializes in editing talking-head reels, short-form videos, and product or service advertisements using Adobe Premiere Pro and CapCut. His work focuses on clean cuts, engaging pacing, and social media-friendly video content. He is passionate about contributing his editing skills to professional teams while continuously developing through hands-on experience.",

    email: "riadulsedit@gmail.com",

    whatsapp: "https://wa.me/8801354309410",

    linkedin: "",

    services: [
      "Video Editing",
      "Talking-Head Reels",
      "Short-Form Videos",
      "Product Advertisements",
      "Service Advertisements",
      "Social Media Content",
    ],

    skills: [
      "Adobe Premiere Pro",
      "CapCut",
      "Talking-Head Reels",
      "Short-Form Video Editing",
      "Product & Service Advertisements",
      "Clean Cuts & Pacing",
      "Social Media Editing",
      "Video Transitions",
    ],

    projects: [
      {
        title: "Talking-Head Reels",
        description:
          "Edited talking-head reels with clean cuts, engaging pacing, and audience-focused storytelling for social media platforms.",
        image: "/images/projects/brand-video.jpg",
        category: "Video Editing",
        technologies: ["Adobe Premiere Pro", "CapCut"],
        link: "https://drive.google.com/drive/folders/16r4DzD5uFKx2RuqV8DhIjF6DfYkMbPr8?usp=sharing",
      },
      {
        title: "Product & Service Advertisements",
        description:
          "Created promotional video content for products and services, focusing on clear messaging, engaging visuals, and effective presentation.",
        image: "/images/projects/social-reels.jpg",
        category: "Video Production",
        technologies: ["Adobe Premiere Pro", "CapCut"],
        link: "https://drive.google.com/drive/folders/16r4DzD5uFKx2RuqV8DhIjF6DfYkMbPr8?usp=sharing",
      },
    ],
  },
];
