
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { projects } from "@/data/home";
import SectionHeading from "./SectionHeading";

type Project = (typeof projects)[number];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name} live project`}
      className={`relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[1.7rem] p-6 transition duration-500 group-hover:shadow-xl sm:min-h-[330px] sm:p-10 ${project.visual}`}
    >
      <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/50">
        <span className="h-2 w-2 rounded-full bg-current" />
        Live project
      </div>

      <div
        className={`w-full max-w-[390px] rounded-xl bg-white p-5 shadow-[0_25px_70px_#00000018] transition duration-500 group-hover:rotate-0 sm:p-7 ${
          project.type === "school"
            ? "rotate-[2deg]"
            : project.type === "shop"
              ? "rotate-[-2deg]"
              : "rotate-[-3deg]"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span
            className="text-sm font-black"
            style={{ color: project.accent }}
          >
            {project.type === "service"
              ? "FixItNow."
              : project.type === "school"
                ? "ShikkhaDesk"
                : "nakivo."}
          </span>

          <span className="text-[9px] font-bold text-gray-400">
            {project.type === "service"
              ? "SERVICE PLATFORM"
              : project.type === "school"
                ? "ADMIN PANEL"
                : "THE ONLINE STORE"}
          </span>
        </div>

        <p className="mt-6 text-2xl font-black leading-tight tracking-[-0.06em] text-gray-900 sm:text-3xl">
          {project.type === "service" ? (
            <>
              Fix it. Fast.
              <br />
              Get it done.
            </>
          ) : project.type === "school" ? (
            <>
              Every school.
              <br />
              One workspace.
            </>
          ) : (
            <>
              Find your
              <br />
              next favorite.
            </>
          )}
        </p>

        <p className="mt-2 text-[10px] leading-5 text-gray-500">
          {project.type === "service"
            ? "Find trusted help for your everyday needs."
            : project.type === "school"
              ? "Manage school operations in one connected platform."
              : "A modern shopping experience, made simple."}
        </p>

        {project.type === "service" ? (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {["Home repair", "Electrical", "Plumbing"].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-[#eff5f0] p-2 text-center text-[8px] font-bold text-gray-600"
              >
                {item}
              </div>
            ))}
          </div>
        ) : project.type === "school" ? (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ["Schools", "12"],
              ["Students", "840"],
              ["Teachers", "64"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-[#f3efff] p-3">
                <p className="text-[8px] text-gray-500">{label}</p>
                <p
                  className="mt-1 text-lg font-black"
                  style={{ color: project.accent }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {["#e8c8b3", "#d6d1ee", "#d6e4cb"].map((color, index) => (
              <div
                key={color}
                className="flex h-16 items-end rounded-lg p-2"
                style={{ backgroundColor: color }}
              >
                <span className="h-5 w-5 rounded-full border-2 border-white/80" />
                <span className="ml-auto text-[8px] font-black text-black/60">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-gray-900 shadow-md transition group-hover:bg-[#854fee] group-hover:text-white">
        <MoveUpRight size={19} />
      </span>
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group min-w-0">
      <ProjectPreview project={project} />

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
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name}`}
          className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gray-300 transition hover:border-[#854fee] hover:bg-[#854fee] hover:text-white"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
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
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Project previews are illustrative designs. Open the links to visit
          the live websites.
        </p>
      </div>
    </section>
  );
}
