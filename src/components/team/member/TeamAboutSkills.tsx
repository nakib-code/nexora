
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Sparkles, ArrowUpRight } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamAboutSkillsProps = {
  member: TeamMember;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

export default function TeamAboutSkills({
  member,
}: TeamAboutSkillsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      data-sidebar-theme="dark"
      className="section-with-left-nav relative isolate overflow-hidden bg-[#050505] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#854fee]/15 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D6FF09]/[0.07] blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32 xl:px-20">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6FF09]">
            <Sparkles size={15} />
            My Expertise
          </p>

          <h2 className="text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
            Skills &
            <span className="text-white/35"> Technologies.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
            The technologies, tools, and skills I use to build
            modern websites, powerful applications, and reliable
            digital experiences.
          </p>
        </motion.div>

        {/* Skills container */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm sm:p-9 lg:p-12"
        >
          {/* Card glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#854fee]/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#D6FF09]/[0.06] blur-[100px]" />

          <div className="relative">
            {/* Skills header */}
            <div className="mb-9 flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D6FF09]/20 bg-[#D6FF09]/[0.08] text-[#D6FF09]">
                  <Code2 size={23} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    Technical Skills
                  </h3>

                  <p className="mt-1 text-xs text-white/35 sm:text-sm">
                    Technologies & Development Tools
                  </p>
                </div>
              </div>

              {/* Skill count */}
              <div className="flex w-fit items-center gap-2 rounded-xl border border-[#D6FF09]/20 bg-[#D6FF09]/[0.06] px-4 py-2.5">
                <Sparkles size={14} className="text-[#D6FF09]" />

                <span className="text-sm font-semibold text-[#D6FF09]">
                  {member.skills.length} Skills
                </span>
              </div>
            </div>

            {/* Skills list */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-wrap gap-3"
            >
              {member.skills.map((skill, index) => (
                <motion.span
                  key={`${skill}-${index}`}
                  variants={itemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                          borderColor: "rgba(214,255,9,0.5)",
                          backgroundColor: "rgba(214,255,9,0.08)",
                        }
                  }
                  whileTap={
                    shouldReduceMotion ? undefined : { scale: 0.97 }
                  }
                  className="group inline-flex cursor-default items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs font-medium text-white/65 transition-colors duration-300 hover:text-[#D6FF09] sm:px-5 sm:py-3.5 sm:text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF09]/50 transition-colors duration-300 group-hover:bg-[#D6FF09]" />
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Bottom information */}
            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="h-1 w-10 rounded-full bg-[#D6FF09]" />

                <p className="text-xs font-medium text-white/35">
                  Always learning, building and improving.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                Explore expertise
                <ArrowUpRight size={14} className="text-[#D6FF09]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom section label */}
        <div className="mt-8 flex flex-col gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>Nexora Digital / Expertise</span>
          <span>Skills that create possibilities.</span>
        </div>
      </div>
    </section>
  );
}
