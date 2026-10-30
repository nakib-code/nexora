
"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Code2,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamServicesProps = {
  member: TeamMember;
};

// Icons are only for visual presentation.
// Service data comes directly from member.services.
const icons = [Layout, Server, Code2, Workflow];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function TeamServices({ member }: TeamServicesProps) {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0b0b0f] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#a98aff]">
              What I Offer
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Services I Provide
              <span className="text-[#854fee]">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              Explore the services I offer to build modern, functional, and
              scalable digital solutions.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-white/50">
            <span className="h-2 w-2 rounded-full bg-[#d6ff00]" />
            {member.services.length} Services Available
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {member.services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={`${service}-${index}`}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:border-[#854fee]/50 hover:bg-white/[0.05] sm:p-8"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#854fee]/15 text-[#a98aff] transition-all duration-300 group-hover:bg-[#854fee] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="mt-7 text-lg font-bold text-white/90 transition-colors group-hover:text-[#d6ff00]">
                  {service}
                </h3>

                {/* Bottom Row */}
                <div className="mt-7 flex items-center justify-between">
                  <span className="text-xs font-medium text-white/30">
                    {member.role}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d6ff00]"
                  />
                </div>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#854fee] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
