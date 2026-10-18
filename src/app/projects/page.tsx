
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Code2,
  Play,
  ShoppingBag,
} from "lucide-react";

const projects = [
  {
    slug: "form-and-field",
    title: "Form & Field",
    category: "Web Design",
    type: "E-commerce concept",
    description:
      "A minimal e-commerce experience concept focused on product presentation and a smooth shopping journey.",
    icon: ShoppingBag,
    style: "bg-[#F3E8DF] text-[#30251F]",
    label: "Objects for everyday living.",
    tag: "01",
  },
  {
    slug: "northstar-campaign",
    title: "Northstar Campaign",
    category: "Paid Ads",
    type: "Advertising concept",
    description:
      "A sample paid advertising concept designed around audience targeting, creative testing, and campaign measurement.",
    icon: BarChart3,
    style: "bg-[#E8EDFF] text-[#17244B]",
    label: "Make every click count.",
    tag: "02",
  },
  {
    slug: "motion-social-studio",
    title: "Motion Social Studio",
    category: "Creative",
    type: "Video editing concept",
    description:
      "A short-form video creative concept for brands that want to communicate clearly and capture attention.",
    icon: Play,
    style: "bg-[#ECE7F8] text-[#30214F]",
    label: "Made to make you look.",
    tag: "03",
  },
  {
    slug: "clarity-workspace",
    title: "Clarity Workspace",
    category: "Web Design",
    type: "SaaS website concept",
    description:
      "A clean landing page concept for a software product, with clear messaging and focused calls to action.",
    icon: Code2,
    style: "bg-[#E2F1EA] text-[#193D2C]",
    label: "A smarter way to work.",
    tag: "04",
  },
];

const filters = ["All Projects", "Web Design", "Paid Ads", "Creative"];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container section-padding">
          <p className="section-label">OUR PROJECTS</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Ideas turned into{" "}
            <span className="text-primary">digital experiences.</span>
          </h1>

          <p className="section-description mt-6 max-w-2xl">
            Explore our creative concepts across digital advertising,
            video content, and website design.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">SELECTED WORK</p>
            <h2 className="section-title mt-3">A closer look at our ideas.</h2>
          </div>

          <p className="text-sm text-muted">
            {projects.length} portfolio concepts
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article key={project.slug} className="group min-w-0">
                <div
                  className={`relative flex aspect-[1.45] flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-9 ${project.style}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">
                      NEXORA / CONCEPT {project.tag}
                    </span>
                    <Icon size={25} />
                  </div>

                  <div className="relative z-10">
                    <p className="text-sm font-medium opacity-70">
                      {project.type}
                    </p>

                    <h3 className="mt-3 max-w-lg text-3xl font-extrabold tracking-tight sm:text-5xl">
                      {project.label}
                    </h3>

                    <div className="mt-6 h-1 w-16 rounded-full bg-current opacity-60" />
                  </div>

                  <div className="absolute -bottom-20 -right-10 size-64 rounded-full border border-current/10" />
                  <div className="absolute -bottom-12 -right-2 size-44 rounded-full border border-current/15" />
                </div>

                <div className="flex items-start justify-between gap-4 px-1 pt-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                      {project.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    aria-label={`Discuss a project like ${project.title}`}
                    className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-border transition group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                  >
                    <ArrowDownRight size={20} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-xs leading-6 text-muted">
          Note: These are illustrative portfolio concepts, not verified
          client projects or actual campaign results.
        </p>
      </section>

      <section className="container pb-20 sm:pb-28">
        <div className="rounded-2xl bg-primary px-6 py-12 text-white sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/75">
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-white/80">
            Tell us about your business and goals. Let&apos;s explore
            what we can create together.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary transition hover:bg-white/90"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
