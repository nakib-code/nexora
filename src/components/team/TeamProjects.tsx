
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FolderKanban,
  ExternalLink,
} from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamProjectsProps = {
  member: TeamMember;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function TeamProjects({
  member,
}: TeamProjectsProps) {
  return (
    <section
      id="projects"
      className="bg-[#f8f8fc] px-5 py-20 text-[#171717] sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#854fee]">
              <FolderKanban size={15} />
              Selected Work
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Projects & Case Studies
              <span className="text-[#854fee]">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              A collection of projects that showcase my
              experience, creativity, and problem-solving skills.
            </p>
          </div>

          <span className="text-sm font-medium text-gray-400">
            {String(member.projects.length).padStart(2, "0")} Projects
          </span>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {member.projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#854fee]/40 hover:shadow-xl hover:shadow-[#854fee]/[0.06] sm:p-8"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#854fee]">
                  Project {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-[#854fee] group-hover:bg-[#854fee] group-hover:text-white">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Project Content */}
              <h3 className="mt-7 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#854fee] sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-gray-200 bg-[#f8f8fc] px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:border-[#854fee]/20"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#854fee] transition-colors hover:text-[#6234c5]"
                >
                  View Live Project
                  <ExternalLink size={15} />
                </a>
              )}

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#854fee] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {member.projects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <FolderKanban
              size={32}
              className="mx-auto text-gray-300"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Projects Coming Soon
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              New projects will be showcased here soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
