
import { Code2, Layers3 } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamAboutServicesProps = {
  member: TeamMember;
};

export default function TeamAboutServices({
  member,
}: TeamAboutServicesProps) {
  return (
    <section
      id="about"
      className="mt-20 border-t border-white/10 pt-12 sm:mt-24 sm:pt-14"
    >
      {/* Short About */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#854fee]/15 text-[#a98aff]">
            <Layers3 size={20} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#854fee]">
              Introduction
            </p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              About Me
            </h2>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
          {member.intro}
        </p>
      </div>

      {/* Services */}
      <div id="services" className="mt-12 sm:mt-14">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#854fee]/15 text-[#a98aff]">
            <Code2 size={20} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#854fee]">
              What I Do
            </p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Services
            </h2>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {member.services.map((service, index) => (
            <article
              key={service}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#854fee]/60 hover:bg-white/[0.045] sm:p-6"
            >
              <span className="text-xs font-medium tracking-widest text-[#854fee]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-base font-semibold leading-7 text-white/85 transition group-hover:text-[#d6ff00]">
                {service}
              </h3>
            </article>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
        <h3 className="text-lg font-semibold sm:text-xl">
          Skills & Technologies
        </h3>

        <p className="mt-2 text-sm text-white/50">
          Tools and technologies I work with.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition hover:border-[#d6ff00]/50 hover:text-[#d6ff00]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
