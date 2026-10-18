import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Clapperboard,
  PanelsTopLeft,
  Layers3,
  MoveUpRight,
  Sparkles,
  CheckCircle2,
  Palette,
  Zap,
} from "lucide-react";

const services = [
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

const projects = [
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
];

const team = [
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

const process = [
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

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[1.1fr_0.65fr] md:items-end">
      <div>
        <p
          className={`mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-purple-300" : "text-primary"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#854fee]" />
          {eyebrow}
        </p>
        <h2
          className={`max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${
            light ? "text-white" : "text-[#17151d]"
          }`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`max-w-md text-sm leading-7 ${
            light ? "text-white/65" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#17151d]">
      {/* HERO */}
      <section className="relative pb-20 pt-16 sm:pb-24 sm:pt-24 lg:pt-28">
        <div className="pointer-events-none absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-purple-200/30 blur-[100px]" />
        <div className="container relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm">
              <Sparkles size={15} className="text-[#854fee]" />
              Your ideas deserve a digital future
            </div>

            <h1 className="mt-7 max-w-3xl text-[clamp(3.5rem,8vw,6.7rem)] font-black leading-[0.91] tracking-[-0.085em]">
              We make
              <br />
              digital feel
              <br />
              <span className="relative inline-block text-[#854fee]">
                different.
                <span className="absolute -bottom-1 left-1 h-2 w-[95%] -rotate-2 rounded-full bg-[#d6ff63]" />
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              We bring design, development, and creativity together to build
              digital experiences that help businesses move forward.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#854fee] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#7040e3]"
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white px-6 py-4 text-sm font-bold transition hover:border-[#854fee] hover:text-[#854fee]"
              >
                Explore Our Work
                <ArrowDown size={17} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#854fee]" />
                Creative solutions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#854fee]" />
                Modern technology
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#854fee]" />
                Built for your goals
              </span>
            </div>
          </div>

          {/* Abstract creative visual */}
          <div className="relative mx-auto w-full max-w-[530px]">
            <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] bg-[#e9e1ff] p-6 sm:min-h-[490px] sm:p-8">
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(#8057ef20 1px, transparent 1px), linear-gradient(90deg, #8057ef20 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative z-10 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#30264b]">
                <span>Nexora Creative Lab</span>
                <span>ND / 001</span>
              </div>

              <div className="absolute left-1/2 top-[47%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 animate-[spin_24s_linear_infinite] rounded-[42%_58%_60%_40%] bg-[radial-gradient(circle_at_28%_25%,#ffffff_0%,#d4c1ff_18%,#9568f7_48%,#5429b5_100%)] shadow-[inset_-18px_-20px_35px_#28105255,0_30px_65px_#7850cb45] sm:h-64 sm:w-64">
                <span className="absolute inset-5 rounded-full border-2 border-white/70 [transform:rotate(35deg)_scaleY(.45)]" />
                <span className="absolute -inset-4 rounded-full border border-[#7654d6]/70 [transform:rotate(-35deg)_scaleY(.48)]" />
              </div>

              <div className="absolute left-5 top-[29%] z-10 rotate-[-7deg] rounded-2xl bg-white p-4 shadow-xl sm:left-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#e8e0ff] text-[#854fee]">
                    <Layers3 size={17} />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold">Creative ideas</p>
                    <p className="text-[10px] text-gray-500">Made tangible</p>
                  </div>
                </div>
                <div className="flex h-7 items-end gap-1">
                  {[35, 60, 45, 85, 65, 100].map((height, index) => (
                    <span
                      key={index}
                      className="w-3 rounded-t-sm bg-[#a68af7]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-[19%] right-5 z-10 rotate-[6deg] rounded-2xl bg-white p-4 shadow-xl sm:right-8">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#d6ff63]">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold">Think boldly.</p>
                    <p className="mt-1 text-[10px] text-gray-500">
                      Build beautifully.
                    </p>
                  </div>
                </div>
              </div>

              <span className="absolute right-[16%] top-[22%] text-3xl text-[#854fee]">
                ✳
              </span>
              <span className="absolute bottom-[28%] left-[14%] text-2xl text-[#854fee]">
                ✦
              </span>

              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between border-t border-[#30264b]/15 pt-4 text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#30264b] sm:left-8 sm:right-8">
                <span>Strategy · Design · Build</span>
                <span>Scroll to explore ↓</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-2 -z-0 h-24 w-24 rounded-full bg-[#d6ff63] blur-[1px] sm:-left-5" />
            <div className="absolute -right-3 -top-4 -z-0 h-20 w-20 rounded-full border-[14px] border-[#854fee]/15" />
          </div>
        </div>
      </section>

      {/* EXPERTISE STRIP */}
      <section className="border-y border-gray-200 bg-white py-5">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">
            Our expertise
          </span>
          {["Web Development", "Video Editing", "UI/UX Design", "Graphic Design"].map(
            (item) => (
              <span
                key={item}
                className="text-xs font-bold tracking-tight text-gray-600 sm:text-sm"
              >
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Big ideas.
                <br />
                <span className="text-[#854fee]">Thoughtful execution.</span>
              </>
            }
            description="Everything your brand needs to look better, work smarter, and create a stronger digital presence."
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex min-h-[300px] flex-col rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#854fee]/50 hover:shadow-[0_20px_55px_#26124d0d]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${service.color} transition group-hover:scale-105`}
                    >
                      <Icon size={23} />
                    </span>
                    <span className="text-xs font-extrabold text-gray-300">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-extrabold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {service.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f5f3f9] px-2.5 py-1.5 text-[10px] font-bold text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-bold transition group-hover:text-[#854fee]"
                  >
                    Discuss your project
                    <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-24 bg-[#f0ede7] py-20 sm:py-28"
      >
        <div className="container">
          <SectionHeading
            eyebrow="Selected projects"
            title={
              <>
                Built with purpose.
                <br />
                <span className="text-[#854fee]">Made to be useful.</span>
              </>
            }
            description="A selection of digital products and platforms. Explore the live projects to see the work in action."
          />

          <div className="grid gap-7 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.number} className="group min-w-0">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name} live project`}
                  className={`relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[1.7rem] p-6 transition duration-500 group-hover:shadow-xl sm:min-h-[330px] sm:p-10 ${project.visual}`}
                >
                  <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/50">
                    <span className="h-2 w-2 rounded-full bg-current" />
                    Live project
                  </div>

                  {project.type === "service" && (
                    <div className="w-full max-w-[390px] rotate-[-3deg] rounded-xl bg-white p-5 shadow-[0_25px_70px_#163d2a22] transition duration-500 group-hover:rotate-0 sm:p-7">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <span className="text-sm font-black" style={{ color: project.accent }}>
                          FixItNow<span className="text-gray-400">.</span>
                        </span>
                        <span className="rounded-full bg-green-50 px-3 py-1 text-[9px] font-bold text-green-800">
                          Service platform
                        </span>
                      </div>
                      <div className="mt-7 max-w-[260px]">
                        <p className="text-2xl font-black leading-tight tracking-[-0.06em] text-gray-900 sm:text-3xl">
                          Fix it. Fast.
                          <br />
                          Get it done.
                        </p>
                        <p className="mt-2 text-[10px] leading-5 text-gray-500">
                          Find trusted help for your everyday needs.
                        </p>
                        <span className="mt-4 inline-flex rounded-md px-3 py-2 text-[9px] font-bold text-white" style={{ backgroundColor: project.accent }}>
                          Find a service ↗
                        </span>
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {["Home repair", "Electrical", "Plumbing"].map((item) => (
                          <div key={item} className="rounded-lg bg-[#eff5f0] p-2 text-center text-[8px] font-bold text-gray-600">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.type === "school" && (
                    <div className="w-full max-w-[390px] rotate-[2deg] rounded-xl bg-white p-5 shadow-[0_25px_70px_#30205e20] transition duration-500 group-hover:rotate-0 sm:p-7">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <span className="text-sm font-black" style={{ color: project.accent }}>
                          ShikkhaDesk
                        </span>
                        <span className="text-[9px] font-bold text-gray-400">
                          ADMIN PANEL
                        </span>
                      </div>
                      <p className="mt-6 text-2xl font-black leading-tight tracking-[-0.06em] text-gray-900 sm:text-3xl">
                        Every school.
                        <br />
                        One workspace.
                      </p>
                      <p className="mt-2 text-[10px] leading-5 text-gray-500">
                        Manage school operations in one connected platform.
                      </p>
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {[
                          ["Schools", "12"],
                          ["Students", "840"],
                          ["Teachers", "64"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-lg bg-[#f3efff] p-3">
                            <p className="text-[8px] text-gray-500">{label}</p>
                            <p className="mt-1 text-lg font-black" style={{ color: project.accent }}>
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.type === "shop" && (
                    <div className="w-full max-w-[390px] rotate-[-2deg] rounded-xl bg-white p-5 shadow-[0_25px_70px_#723b2520] transition duration-500 group-hover:rotate-0 sm:p-7">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <span className="text-sm font-black" style={{ color: project.accent }}>
                          nakivo.
                        </span>
                        <span className="text-[9px] font-bold text-gray-400">
                          THE ONLINE STORE
                        </span>
                      </div>
                      <p className="mt-6 text-2xl font-black leading-tight tracking-[-0.06em] text-gray-900 sm:text-3xl">
                        Find your
                        <br />
                        next favorite.
                      </p>
                      <p className="mt-2 text-[10px] leading-5 text-gray-500">
                        A modern shopping experience, made simple.
                      </p>
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {["#e8c8b3", "#d6d1ee", "#d6e4cb"].map((color, index) => (
                          <div key={color} className="flex h-16 items-end rounded-lg p-2" style={{ backgroundColor: color }}>
                            <span className="h-5 w-5 rounded-full border-2 border-white/80" />
                            <span className="ml-auto text-[8px] font-black text-black/60">
                              0{index + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-gray-900 shadow-md transition group-hover:bg-[#854fee] group-hover:text-white">
                    <MoveUpRight size={19} />
                  </span>
                </a>

                <div className="flex items-start justify-between gap-4 px-1 pt-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#854fee]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-bold text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gray-300 transition hover:border-[#854fee] hover:bg-[#854fee] hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">
            Project previews are illustrative designs. Open the links to visit the live websites.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="The people behind the work"
            title={
              <>
                Different skills.
                <br />
                <span className="text-[#854fee]">One creative team.</span>
              </>
            }
            description="We bring different perspectives together to make digital projects feel consistent, thoughtful, and complete."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.initials}
                className="group rounded-3xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`relative grid h-52 place-items-center overflow-hidden rounded-2xl ${member.color}`}>
                  <div className={`absolute -right-8 -top-8 h-36 w-36 rounded-full border-[22px] border-white/30`} />
                  <div className={`absolute -bottom-12 -left-7 h-36 w-36 rounded-full border-[22px] border-white/30`} />
                  <span className={`relative grid h-24 w-24 place-items-center rounded-[2rem] bg-white text-3xl font-black tracking-tight shadow-sm transition duration-300 group-hover:rotate-[-7deg] group-hover:scale-105 ${member.text}`}>
                    {member.initials}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-gray-700">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
                <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#854fee]">
                  {member.role}
                </p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {member.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs text-gray-400">
            Team cards currently show service roles. Replace these with your actual team members, photos, and names before launch.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 bg-[#19171e] py-20 text-white sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
              <span className="h-2 w-2 rounded-full bg-[#d6ff63]" />
              About Nexora
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-[1.03] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              We believe good digital work should{" "}
              <span className="text-[#d6ff63]">feel effortless.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
              Nexora Digital brings web development, video editing, UI/UX, and
              graphic design together under one creative direction. Our goal is
              to make useful things, solve real problems, and help brands show
              up with confidence.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#19171e] transition hover:bg-[#d6ff63]"
            >
              More About Us <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "04", label: "Core creative services" },
              { value: "01", label: "Connected team" },
              { value: "∞", label: "Ideas to explore" },
              { value: "100%", label: "Focus on thoughtful work" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-36 flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:min-h-44 sm:p-7"
              >
                <span className="text-4xl font-black tracking-[-0.07em] text-[#d6ff63] sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-5 text-xs leading-5 text-white/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Our process"
            title={
              <>
                From first thought
                <br />
                to <span className="text-[#854fee]">final delivery.</span>
              </>
            }
            description="Clear communication and a focused process help us turn a good idea into work you can confidently put out into the world."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border-t-2 border-gray-200 bg-white p-5 pt-6 transition hover:border-[#854fee] sm:p-6"
              >
                <span className="text-xs font-black tracking-[0.16em] text-[#854fee]">
                  STEP / {step.number}
                </span>
                <div className="my-7 h-px bg-gray-100" />
                <h3 className="text-xl font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="scroll-mt-24 pb-20 sm:pb-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#854fee] px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border-[45px] border-white/10" />
            <div className="pointer-events-none absolute bottom-[-100px] right-[22%] h-56 w-56 rounded-full bg-[#d6ff63]/20 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                <Sparkles size={15} />
                Have a project in mind?
              </p>
              <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.065em] sm:text-5xl lg:text-7xl">
                Let&apos;s create something worth remembering.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Tell us what you&apos;re planning. We&apos;ll help you explore
                the right ideas, the right tools, and the next step.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6ff63] px-6 py-4 text-sm font-extrabold text-[#17151d] transition hover:-translate-y-1 hover:bg-white"
              >
                Let&apos;s Talk
                <ArrowUpRight size={19} />
              </Link>
            </div>

            <span className="pointer-events-none absolute bottom-7 right-8 hidden text-8xl text-white/20 lg:block">
              ✳
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
