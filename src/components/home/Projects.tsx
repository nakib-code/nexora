

"use client";
import Link from "next/link";
import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects, type Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const PURPLE = "#854FEE";

function ArrowUpRight({
  size = 17,
  strokeWidth = 1.8,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7H17V16"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectImage({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imageRef = useRef<HTMLDivElement | null>(null);

  const isRightImage = index % 2 === 0;

  return (
    <div
      ref={imageRef}
      className={[
        "project-image-wrap",
        "relative w-full overflow-hidden",
        "border border-black/[0.07]",
        "bg-[#efefec]",
        "shadow-[0_20px_70px_rgba(15,15,20,0.07)]",
        isRightImage
          ? "lg:order-2"
          : "lg:order-1",
      ].join(" ")}
    >
      {project.image.type === "image" ? (
        <div
          className={[
            "relative overflow-hidden",
            project.image.aspect === "portrait"
              ? "aspect-[4/5]"
              : project.image.aspect === "wide"
                ? "aspect-[16/9]"
                : "aspect-[4/3]",
          ].join(" ")}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="
              project-image
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]
              will-change-transform
              hover:scale-[1.025]
            "
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/[0.08]
              via-transparent
              to-transparent
              opacity-60
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              ring-1
              ring-inset
              ring-white/10
            "
          />
        </div>
      ) : (
        <div
          className="
            project-fallback
            relative
            flex
            aspect-[4/3]
            min-h-[280px]
            flex-col
            justify-between
            overflow-hidden
            bg-[#f3f1f7]
            p-6
            sm:min-h-[380px]
            sm:p-8
            lg:min-h-[500px]
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-[#854FEE]/[0.08]
              blur-3xl
            "
          />

          <div className="relative flex items-center justify-between">
            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-black/40
              "
            >
              Selected work
            </span>

            <span
              className="
                text-4xl
                font-black
                tracking-[-0.08em]
                text-black/[0.06]
                sm:text-6xl
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="relative">
            <div
              className="
                mb-4
                h-px
                w-full
                bg-black/[0.08]
              "
            />

            <p
              className="
                max-w-[420px]
                text-sm
                font-medium
                leading-6
                text-black/45
              "
            >
              {project.title}
            </p>

            <span
              className="
                mt-2
                block
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#854FEE]
              "
            >
              Project visual unavailable
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectMeta({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isRightContent = index % 2 === 0;

  return (
    <div
      className={[
        "project-content",
        "flex flex-col justify-center",
        "lg:min-h-[420px]",
        isRightContent
          ? "lg:order-1"
          : "lg:order-2",
      ].join(" ")}
    >
      <div
        className="
          mb-7
          flex
          items-center
          justify-between
          border-b
          border-black/[0.08]
          pb-4
          sm:mb-9
        "
      >
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#854FEE]
          "
        >
          {project.category}
        </span>

        <span
          className="
            text-[10px]
            font-bold
            tracking-[0.12em]
            text-black/25
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className="
          max-w-[650px]
          text-[clamp(2.25rem,5vw,5.2rem)]
          font-bold
          leading-[0.92]
          tracking-[-0.065em]
          text-[#111111]
        "
      >
        {project.title}
      </h3>

      <p
        className="
          mt-6
          max-w-[540px]
          text-[13px]
          font-medium
          leading-6
          text-black/50
          sm:mt-7
          sm:text-[15px]
          sm:leading-7
        "
      >
        {project.description}
      </p>

      {project.technologies.length > 0 && (
        <div className="mt-7 sm:mt-8">
          <p
            className="
              mb-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-black/30
            "
          >
            Technologies / Services
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  text-[11px]
                  font-semibold
                  text-black/60
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      )}

      {(project.liveUrl || project.caseStudyUrl) && (
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live project`}
              className="
                project-link
                group
                inline-flex
                min-h-11
                items-center
                gap-3
                border-b
                border-black/20
                pb-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-black
                transition-colors
                hover:border-[#854FEE]
                hover:text-[#854FEE]
              "
            >
              <span>View Project</span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              >
                <ArrowUpRight size={15} />
              </span>
            </a>
          )}

          {project.caseStudyUrl && (
            <Link
              href={project.caseStudyUrl}
              aria-label={`View ${project.title} case study`}
              className="
                project-link
                group
                inline-flex
                min-h-11
                items-center
                gap-3
                border-b
                border-black/10
                pb-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-black/55
                transition-colors
                hover:border-[#854FEE]
                hover:text-[#854FEE]
              "
            >
              <span>View Case Study</span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              >
                <ArrowUpRight size={15} />
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="
        project-row
        grid
        grid-cols-1
        gap-8
        lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)]
        lg:items-center
        lg:gap-14
        xl:gap-20
      "
    >
      <ProjectImage project={project} index={index} />

      <ProjectMeta project={project} index={index} />
    </article>
  );
}

function ClosingCTA() {
  return (
    <div
      className="
        projects-cta
        relative
        mt-24
        overflow-hidden
        border-y
        border-black/[0.08]
        py-16
        sm:mt-32
        sm:py-20
        lg:mt-40
        lg:py-28
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          h-[420px]
          w-[420px]
          -translate-y-1/2
          rounded-full
          bg-[#854FEE]/[0.07]
          blur-[100px]
        "
      />

      <div
        className="
          relative
          grid
          gap-10
          lg:grid-cols-[1fr_auto]
          lg:items-end
          lg:gap-16
        "
      >
        <div>
          <p
            className="
              projects-cta-label
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#854FEE]
              sm:text-[10px]
            "
          >
            HAVE SOMETHING IN MIND?
          </p>

          <h3
            className="
              projects-cta-title
              mt-4
              max-w-[850px]
              text-[clamp(2.7rem,6vw,6.5rem)]
              font-bold
              leading-[0.9]
              tracking-[-0.07em]
              text-[#111111]
            "
          >
            Your Next Big Idea Could Be Here.
          </h3>

          <p
            className="
              projects-cta-copy
              mt-6
              max-w-[560px]
              text-[13px]
              font-medium
              leading-6
              text-black/45
              sm:mt-7
              sm:text-[15px]
              sm:leading-7
            "
          >
            Let&apos;s collaborate to create something useful,
            memorable, and built for your goals.
          </p>
        </div>

        <Link
          href="#contact"
          className="
            projects-cta-button
            group
            inline-flex
            min-h-14
            w-full
            items-center
            justify-between
            gap-8
            border
            border-black
            bg-black
            px-5
            text-[11px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-white
            transition-all
            duration-300
            hover:border-[#854FEE]
            hover:bg-[#854FEE]
            sm:w-auto
            sm:min-w-[230px]
            sm:px-6
          "
        >
          <span>Start a Project</span>

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          >
            <ArrowUpRight size={17} />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<"All" | Project["category"]>("All");

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(projects.map((project) => project.category)),
    );

    return unique;
  }, []);

  const hasEnoughProjectsForFilter = categories.length > 1;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  const projectCount = filteredProjects.length;

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const headerItems = gsap.utils.toArray<HTMLElement>(
        ".projects-header-item",
      );

      const projectRows = gsap.utils.toArray<HTMLElement>(
        ".project-row",
      );

      const imageWrappers = gsap.utils.toArray<HTMLElement>(
        ".project-image-wrap",
      );

      const contentBlocks = gsap.utils.toArray<HTMLElement>(
        ".project-content",
      );

      const ctaItems = gsap.utils.toArray<HTMLElement>(
        ".projects-cta-label, .projects-cta-title, .projects-cta-copy, .projects-cta-button",
      );

      if (reduceMotion) {
        gsap.set(
          [
            ...headerItems,
            ...projectRows,
            ...imageWrappers,
            ...contentBlocks,
            ...ctaItems,
          ],
          {
            clearProps: "all",
          },
        );

        return;
      }

      gsap.fromTo(
        headerItems,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      );

      projectRows.forEach((row, index) => {
        const image = imageWrappers[index];
        const content = contentBlocks[index];

        const direction = index % 2 === 0 ? 28 : -28;

        gsap.fromTo(
          image,
          {
            opacity: 0,
            y: 36,
            clipPath: "inset(10% 0% 10% 0%)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          content,
          {
            opacity: 0,
            x: direction,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 78%",
              once: true,
            },
          },
        );

        if (window.innerWidth >= 1024) {
          const imageElement =
            image.querySelector<HTMLElement>(".project-image");

          if (imageElement) {
            gsap.fromTo(
              imageElement,
              {
                yPercent: -2,
              },
              {
                yPercent: 2,
                ease: "none",
                scrollTrigger: {
                  trigger: row,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.2,
                },
              },
            );
          }
        }
      });

      gsap.fromTo(
        ctaItems,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-cta",
            start: "top 82%",
            once: true,
          },
        },
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, [filteredProjects.length]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        scroll-mt-20
        overflow-hidden
        bg-[#f7f7f5]
        text-[#111111]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-20
          sm:px-8
          sm:py-28
          lg:px-12
          lg:py-36
          xl:px-16
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header
          className="
            grid
            gap-10
            border-b
            border-black/[0.08]
            pb-12
            lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)]
            lg:items-end
            lg:gap-16
            lg:pb-16
          "
        >
          <div>
            <div
              className="
                projects-header-item
                mb-5
                flex
                items-center
                gap-2.5
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#854FEE]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#854FEE]
                  sm:text-[10px]
                "
              >
                OUR SELECTED WORK
              </span>
            </div>

            <h2
              className="
                projects-header-item
                max-w-[1000px]
                text-[clamp(2.8rem,6.8vw,7rem)]
                font-bold
                leading-[0.88]
                tracking-[-0.075em]
                text-[#111111]
              "
            >
              Selected Projects.
              <br />

              <span className="text-[#854FEE]">
                Real Digital Experiences.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p
              className="
                projects-header-item
                max-w-[500px]
                text-[13px]
                font-medium
                leading-6
                text-black/45
                sm:text-[15px]
                sm:leading-7
              "
            >
              A closer look at the digital experiences we
              design and build, combining thoughtful design,
              modern technology, and purposeful execution.
            </p>

            <div
              className="
                projects-header-item
                mt-8
                flex
                items-end
                justify-between
                border-t
                border-black/[0.08]
                pt-4
                sm:mt-10
              "
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-black/30
                "
              >
                Selected projects
              </span>

              <span
                className="
                  text-[12px]
                  font-bold
                  tracking-[0.1em]
                  text-black/70
                "
              >
                {String(projectCount).padStart(2, "0")}
                {" — "}
                {String(projectCount).padStart(2, "0")}
                {" "}
                <span className="text-black/25">
                  SELECTED PROJECTS
                </span>
              </span>
            </div>
          </div>
        </header>

        {/* =====================================================
            FILTER
        ====================================================== */}

        {hasEnoughProjectsForFilter && (
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-2
              sm:mt-10
            "
            aria-label="Project categories"
          >
            {(["All", ...categories] as const).map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={[
                    "min-h-10",
                    "border",
                    "px-4",
                    "text-[9px]",
                    "font-bold",
                    "uppercase",
                    "tracking-[0.14em]",
                    "transition-all",
                    "duration-300",
                    active
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-transparent text-black/45 hover:border-black/30 hover:text-black",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* =====================================================
            PROJECTS
        ====================================================== */}

        {filteredProjects.length > 0 ? (
          <div className="mt-16 sm:mt-24 lg:mt-32">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={[
                  index > 0
                    ? "mt-24 border-t border-black/[0.08] pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40"
                    : "",
                ].join(" ")}
              >
                <ProjectRow
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </div>
        ) : (
          /* ===================================================
             HONEST EMPTY STATE
          ==================================================== */

          <div
            className="
              projects-empty
              mt-16
              border-y
              border-black/[0.08]
              py-16
              sm:mt-24
              sm:py-24
              lg:mt-32
              lg:py-32
            "
          >
            <div
              className="
                grid
                gap-8
                lg:grid-cols-[120px_1fr]
                lg:gap-16
              "
            >
              <span
                className="
                  text-6xl
                  font-black
                  leading-none
                  tracking-[-0.08em]
                  text-black/[0.06]
                  sm:text-8xl
                "
              >
                00
              </span>

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#854FEE]
                  "
                >
                  PORTFOLIO
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[760px]
                    text-[clamp(2rem,4vw,4.5rem)]
                    font-bold
                    leading-[0.94]
                    tracking-[-0.065em]
                  "
                >
                  Real work goes here.
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[580px]
                    text-[13px]
                    font-medium
                    leading-6
                    text-black/45
                    sm:mt-6
                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  No portfolio project has been added to the
                  verified project data yet. Once real project
                  information and screenshots are connected,
                  this section will automatically render the
                  full editorial showcase.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            CTA
        ====================================================== */}

        <ClosingCTA />
      </div>
    </section>
  );
}