
import { ArrowUpRight, FolderKanban } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamProjectsProps = {
  member: TeamMember;
};

export default function TeamProjects({
  member,
}: TeamProjectsProps) {
  return (
    <section
      id="projects"
      className="mt-20 border-t border-white/10 pt-12 sm:mt-24 sm:pt-14"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#854fee]/15 text-[#a98aff]">
          <FolderKanban size={20} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#854fee]">
            Selected Work
          </p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
            Projects & Case Studies
          </h2>
        </div>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {member.projects.map((project, index) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#854fee]/60 hover:bg-white/[0.045] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Project {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-xl font-semibold transition group-hover:text-[#d6ff00] sm:text-2xl">
                  {project.title}
                </h3>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition group-hover:border-[#d6ff00]/50 group-hover:text-[#d6ff00]">
                <ArrowUpRight size={19} />
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60"
                >
                  {technology}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#d6ff00] transition hover:text-white"
              >
                View Project
                <ArrowUpRight size={16} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
