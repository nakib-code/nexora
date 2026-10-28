
"use client";

import { motion } from "framer-motion";
import type { TeamProject } from "@/data/team";

export default function TeamProjects({
  projects,
}: {
  projects: TeamProject[];
}) {
  return (
    <section className="border-t border-white/10 px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Selected Work
        </p>

        <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">
          Projects that speak.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-lg leading-7 text-neutral-400">
                    {project.description}
                  </p>
                </div>

                <span className="text-xl text-neutral-400" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm underline underline-offset-4"
                >
                  View Live Project
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
