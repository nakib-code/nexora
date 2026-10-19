
import { ArrowUpRight } from "lucide-react";
import { team } from "@/data/home";
import SectionHeading from "./SectionHeading";

export default function Team() {
  return (
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
              <div
                className={`relative grid h-52 place-items-center overflow-hidden rounded-2xl ${member.color}`}
              >
                <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border-[22px] border-white/30" />
                <div className="absolute -bottom-12 -left-7 h-36 w-36 rounded-full border-[22px] border-white/30" />

                <span
                  className={`relative grid h-24 w-24 place-items-center rounded-[2rem] bg-white text-3xl font-black tracking-tight shadow-sm transition duration-300 group-hover:rotate-[-7deg] group-hover:scale-105 ${member.text}`}
                >
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
          Team cards currently show service roles. Replace these with your
          actual team members, photos, and names before launch.
        </p>
      </div>
    </section>
  );
}
