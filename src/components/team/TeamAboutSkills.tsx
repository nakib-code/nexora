
"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2 } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamAboutSkillsProps = {
  member: TeamMember;
};

const skillColors = [
  "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 hover:border-violet-300",
  "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-300",
  "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300",
  "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:border-orange-300",
  "border-pink-200 bg-pink-50 text-pink-700 hover:bg-pink-100 hover:border-pink-300",
  "border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:border-cyan-300",
  "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:border-amber-300",
  "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-300",
  "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 hover:border-rose-300",
  "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100 hover:border-teal-300",
];

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
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function TeamAboutSkills({
  member,
}: TeamAboutSkillsProps) {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f8f8fc] px-5 py-20 text-[#171717] sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-200/30 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#854fee]">
            <Sparkles size={15} />
            My Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Skills & Technologies
            <span className="text-[#854fee]">.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            The technologies, tools, and skills I use to
            build modern websites, powerful applications,
            and reliable digital experiences.
          </p>
        </motion.div>

        {/* Single Skills Box */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-9 lg:p-12"
        >
          {/* Box Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-100/70 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative">

            {/* Box Header */}
            <div className="mb-9 flex flex-col gap-5 border-b border-gray-100 pb-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#854fee]/10 text-[#854fee]">
                  <Code2 size={23} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    Technical Skills
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Technologies & Development Tools
                  </p>
                </div>
              </div>

              {/* Total Skills */}
              <div className="flex w-fit items-center gap-2 rounded-xl bg-[#854fee]/10 px-4 py-2.5">
                <Sparkles size={15} className="text-[#854fee]" />

                <span className="text-sm font-bold text-[#854fee]">
                  {member.skills.length} Skills
                </span>
              </div>
            </div>

            {/* All Skills */}
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
                  whileHover={{
                    y: -5,
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`cursor-default rounded-xl border px-4 py-3 text-xs font-semibold shadow-sm transition-all duration-200 sm:px-5 sm:py-3.5 sm:text-sm ${
                    skillColors[index % skillColors.length]
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Bottom Decoration */}
            <div className="mt-10 flex items-center gap-3 border-t border-gray-100 pt-6">
              <div className="h-1 w-12 rounded-full bg-[#854fee]" />

              <p className="text-xs font-medium text-gray-400">
                Always learning, building and improving.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
