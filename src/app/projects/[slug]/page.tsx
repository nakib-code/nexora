
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Target,
  Workflow,
} from "lucide-react";

const projects = [
  {
    slug: "form-and-field",
    name: "Form & Field",
    category: "Website Design & Development",
    type: "E-commerce Concept",
    headline: "A thoughtful shopping experience for modern living.",
    description:
      "An illustrative e-commerce concept focused on clean product presentation, intuitive navigation, and a smoother shopping journey.",
    challenge:
      "Online stores need to present products clearly, help customers discover relevant items, and make the path to purchase easy to understand.",
    solution:
      "The concept combines a minimal visual direction with structured product categories, clear calls to action, and a responsive layout designed for desktop and mobile visitors.",
    deliverables: [
      "Responsive storefront design",
      "Product discovery and category layout",
      "Clear calls to action",
      "Mobile-first user experience",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    color: "bg-[#f3e8df]",
    textColor: "text-[#30251f]",
    label: "E-commerce",
    previewTitle: "Objects for",
    previewAccent: "everyday living.",
    previewDescription: "Considered design for modern homes.",
    outcome:
      "The proposed design creates a clear foundation for an online store. This is a concept project, so no real client results or conversion improvements are claimed.",
  },
  {
    slug: "northstar-campaign",
    name: "Northstar Campaign",
    category: "Paid Advertising",
    type: "Campaign Concept",
    headline: "Make every advertising decision count.",
    description:
      "A sample paid advertising project showing how campaign planning, audience research, and measurement can work together.",
    challenge:
      "Advertising activity is difficult to evaluate when campaign goals, audience targeting, and conversion measurement are not clearly connected.",
    solution:
      "The proposed approach starts with business objectives, defines a focused audience, develops creative variations, and identifies the conversion events needed for evaluation.",
    deliverables: [
      "Campaign goal and audience planning",
      "Ad creative direction",
      "Conversion measurement plan",
      "Performance review framework",
    ],
    tools: ["Meta Ads", "Google Ads", "GA4", "Google Tag Manager"],
    color: "bg-[#e8edff]",
    textColor: "text-[#17244b]",
    label: "Paid Advertising",
    previewTitle: "Make every",
    previewAccent: "click count.",
    previewDescription: "A campaign planning and analytics concept.",
    outcome:
      "The concept demonstrates a structured campaign workflow. No live advertising spend, customer engagement figures, or verified ROAS results are represented.",
  },
  {
    slug: "motion-social-studio",
    name: "Motion Social Studio",
    category: "Video Editing",
    type: "Creative Concept",
    headline: "Short-form creative built to communicate clearly.",
    description:
      "A creative direction concept for social videos and advertising assets designed around a clear message and visual consistency.",
    challenge:
      "Short-form content needs to communicate value quickly while remaining recognizable, engaging, and appropriate for its audience.",
    solution:
      "The proposed creative workflow uses strong opening visuals, concise messaging, readable captions, and platform-friendly formats to make each video easier to follow.",
    deliverables: [
      "Short-form video direction",
      "Social ad creative concepts",
      "Caption and text styling",
      "Creative variation planning",
    ],
    tools: ["Video Editing", "Creative Strategy", "Social Media", "Ad Formats"],
    color: "bg-[#ece7f8]",
    textColor: "text-[#30214f]",
    label: "Video Creative",
    previewTitle: "Made to",
    previewAccent: "make you look.",
    previewDescription: "Short-form creative direction and editing.",
    outcome:
      "This concept outlines a creative production direction. Actual engagement and advertising performance would need to be measured after publishing.",
  },
  {
    slug: "clarity-workspace",
    name: "Clarity Workspace",
    category: "Website Design & Development",
    type: "SaaS Website Concept",
    headline: "A clearer digital experience for a modern product.",
    description:
      "A sample SaaS landing page concept that organizes product messaging, key benefits, and calls to action into a clean web experience.",
    challenge:
      "A software website must help visitors understand what a product does, who it helps, and why they should explore it further.",
    solution:
      "The concept uses a clear headline, structured benefit sections, visual product cues, and purposeful calls to action to guide visitors through the page.",
    deliverables: [
      "SaaS landing page structure",
      "Product value proposition",
      "Feature and benefit sections",
      "Responsive interface concept",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    color: "bg-[#e2f1ea]",
    textColor: "text-[#193d2c]",
    label: "SaaS Website",
    previewTitle: "A smarter way",
    previewAccent: "to work.",
    previewDescription: "A clean website concept for a SaaS product.",
    outcome:
      "The concept provides a starting point for a product marketing website. It does not represent a launched client website or verified business outcomes.",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  return (
    <main>
      <section className="section-padding">
        <div className="container">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="section-label">{project.category}</span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {project.headline}
              </h1>

              <p className="section-description mt-6">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="primary-button">
                  Discuss a Similar Project
                  <ArrowRight size={18} />
                </Link>

                <Link href="/projects" className="secondary-button">
                  Explore Projects
                </Link>
              </div>
            </div>

            <div
              className={`overflow-hidden rounded-2xl border border-border p-5 sm:p-8 ${project.color} ${project.textColor}`}
            >
              <div className="rounded-xl bg-white/80 p-5 shadow-sm sm:p-8">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="text-sm font-extrabold">
                    {project.name}
                  </span>
                  <span className="text-xs font-medium opacity-60">
                    Concept Preview
                  </span>
                </div>

                <div className="py-12 sm:py-16">
                  <p className="text-sm font-semibold opacity-60">
                    {project.label}
                  </p>

                  <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                    {project.previewTitle}
                    <br />
                    {project.previewAccent}
                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-6 opacity-70">
                    {project.previewDescription}
                  </p>

                  <div className="mt-7 h-10 w-32 rounded-lg bg-[#315cfd]" />

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-lg bg-black/5" />
                    <div className="h-16 rounded-lg bg-black/10" />
                    <div className="h-16 rounded-lg bg-black/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-muted">
            Illustrative project preview. It is not a screenshot of a live
            client deliverable.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target size={22} />
                </span>
                <h2 className="text-2xl font-bold">The Challenge</h2>
              </div>

              <p className="section-description mt-5">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Workflow size={22} />
                </span>
                <h2 className="text-2xl font-bold">Our Approach</h2>
              </div>

              <p className="section-description mt-5">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="section-label">Project scope</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What this project covers
            </h2>

            <div className="mt-7 space-y-4">
              {project.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <p className="text-base leading-7">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <Layers3 size={22} className="text-primary" />
              <h2 className="text-xl font-bold">Tools & Focus</h2>
            </div>

            <p className="section-description mt-3">
              The technologies, platforms, or disciplines relevant to this
              concept.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-border pt-6">
              <p className="text-sm font-bold">Expected direction</p>
              <p className="section-description mt-2">
                {project.outcome}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Have a similar goal?</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Let&apos;s plan your next project.
            </h2>
            <p className="section-description mx-auto mt-5">
              Tell us about your business, what you want to improve, and
              where you want to go next.
            </p>
            <Link href="/contact" className="primary-button mt-7">
              Start a Conversation
              <ExternalLink size={17} />
            </Link>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary sm:p-7"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {item.category}
                </span>

                <h3 className="mt-3 text-xl font-bold group-hover:text-primary">
                  {item.name}
                </h3>

                <p className="section-description mt-2">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View Project
                  <ArrowRight size={17} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
