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

gsap.registerPlugin(ScrollTrigger);

const PURPLE = "#854FEE";

type ProjectCategory =
  | "Facebook Advertising"
  | "Google Advertising"
  | "Conversion Tracking"
  | "Video Editing"
  | "Website Design & Development";

type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  technologies: string[];
  metric: string;
  metricLabel: string;
  visualType: "meta" | "google" | "tracking" | "video" | "website";
  liveUrl?: string;
  caseStudyUrl?: string;
};

/* ============================================================
   PROJECT DATA
============================================================ */

const projects: Project[] = [
  {
    id: "meta-growth-campaign",
    category: "Facebook Advertising",
    title: "Meta Growth Campaign",
    description:
      "A performance-focused Facebook advertising system built around audience research, creative testing, retargeting, and continuous campaign optimization.",
    technologies: [
      "Meta Ads",
      "Audience Research",
      "Creative Strategy",
      "Retargeting",
    ],
    metric: "+184%",
    metricLabel: "ROAS improvement",
    visualType: "meta",
  },

  {
    id: "google-search-system",
    category: "Google Advertising",
    title: "Search Growth System",
    description:
      "A high-intent Google Ads system designed to capture demand, improve search visibility, and turn qualified traffic into measurable conversions.",
    technologies: [
      "Google Ads",
      "Keyword Research",
      "Search Campaigns",
      "Bid Optimization",
    ],
    metric: "3.8×",
    metricLabel: "Return on ad spend",
    visualType: "google",
  },

  {
    id: "analytics-attribution",
    category: "Conversion Tracking",
    title: "Analytics & Attribution",
    description:
      "A complete conversion tracking architecture connecting GA4, Google Tag Manager, Meta Pixel, server-side events, and custom conversion funnels.",
    technologies: [
      "GA4",
      "GTM",
      "Meta CAPI",
      "Event Tracking",
    ],
    metric: "97%",
    metricLabel: "Event accuracy",
    visualType: "tracking",
  },

  {
    id: "performance-creative",
    category: "Video Editing",
    title: "Performance Creative Studio",
    description:
      "Short-form performance creatives built around strong hooks, fast pacing, motion graphics, sound design, and conversion-focused storytelling.",
    technologies: [
      "Short-form Video",
      "Motion Graphics",
      "Ad Creatives",
      "Sound Design",
    ],
    metric: "2.6×",
    metricLabel: "Higher engagement",
    visualType: "video",
  },

  {
    id: "conversion-website",
    category: "Website Design & Development",
    title: "Conversion Website",
    description:
      "A modern responsive website engineered around clean UI, conversion-focused journeys, strong performance, and a scalable Next.js architecture.",
    technologies: [
      "Next.js",
      "UI / UX",
      "Core Web Vitals",
      "Conversion Design",
    ],
    metric: "+62%",
    metricLabel: "Conversion rate",
    visualType: "website",
  },
];

/* ============================================================
   ICON
============================================================ */

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

/* ============================================================
   META VISUAL
============================================================ */

function MetaVisual() {
  return (
    <div className="relative h-full min-h-[330px] overflow-hidden bg-[#17131f]">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#854FEE]/30 blur-[90px]" />

      <div className="absolute left-6 top-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
        META PERFORMANCE
      </div>

      <div className="absolute left-6 right-6 top-16">
        <div className="grid grid-cols-3 gap-3">
          {[
            ["ROAS", "4.82×"],
            ["CTR", "6.7%"],
            ["CPA", "-38%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border border-white/10 bg-white/[0.045] p-4 backdrop-blur-md"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/35">
                {label}
              </p>

              <p className="mt-2 text-xl font-bold tracking-[-0.05em] text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-7 left-6 right-6">
        <div className="flex h-28 items-end gap-2">
          {[32, 48, 40, 62, 55, 76, 68, 91, 82, 100].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 bg-white/[0.12]"
                style={{ height: `${height}%` }}
              >
                <div
                  className="h-full w-full bg-[#854FEE]/70"
                  style={{
                    transform: `scaleY(${0.5 + index * 0.045})`,
                    transformOrigin: "bottom",
                  }}
                />
              </div>
            ),
          )}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
        DEMO CAMPAIGN
      </div>
    </div>
  );
}

/* ============================================================
   GOOGLE VISUAL
============================================================ */

function GoogleVisual() {
  return (
    <div className="relative h-full min-h-[330px] overflow-hidden bg-[#15131b]">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#854FEE]/15 blur-3xl" />

      <div className="relative p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
            GOOGLE ADS
          </span>

          <span className="text-[9px] font-bold text-[#a987ff]">
            LIVE
          </span>
        </div>

        <div className="mt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
            Search performance
          </p>

          <p className="mt-2 text-5xl font-bold tracking-[-0.08em] text-white sm:text-6xl">
            3.8×
          </p>

          <p className="mt-2 text-xs font-medium text-white/40">
            Return on ad spend
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {[
            ["High Intent", "84%"],
            ["Quality Score", "92%"],
            ["Conversion", "76%"],
          ].map(([label, value], index) => (
            <div key={label}>
              <div className="mb-1.5 flex justify-between text-[9px] font-bold uppercase tracking-[0.12em]">
                <span className="text-white/35">{label}</span>
                <span className="text-white/55">{value}</span>
              </div>

              <div className="h-1 bg-white/[0.08]">
                <div
                  className="h-full bg-[#854FEE]"
                  style={{
                    width: `${[84, 92, 76][index]}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   TRACKING VISUAL
============================================================ */

function TrackingVisual() {
  return (
    <div className="relative h-full min-h-[330px] overflow-hidden bg-[#0d0d0d]">
      <div className="absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(133,79,238,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(133,79,238,.14) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
            CONVERSION TRACKING
          </span>

          <span className="h-2 w-2 rounded-full bg-[#854FEE]" />
        </div>

        <div className="relative mx-auto mt-12 max-w-[470px]">
          <div className="grid grid-cols-3 gap-3">
            {["Traffic", "Event", "Revenue"].map((item, index) => (
              <div
                key={item}
                className={[
                  "border p-4 text-center",
                  index === 1
                    ? "border-[#854FEE]/50 bg-[#854FEE]/15"
                    : "border-white/10 bg-white/[0.035]",
                ].join(" ")}
              >
                <div className="mx-auto h-2 w-2 rounded-full bg-[#854FEE]" />

                <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.14em] text-white/40">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto h-10 w-px bg-[#854FEE]/40" />

          <div className="mx-auto max-w-[180px] border border-[#854FEE]/50 bg-[#854FEE]/10 p-5 text-center">
            <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#c9b4ff]">
              Conversion
            </p>

            <p className="mt-2 text-3xl font-bold tracking-[-0.07em] text-white">
              97%
            </p>

            <p className="mt-1 text-[8px] text-white/35">
              event accuracy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   VIDEO VISUAL
============================================================ */

function VideoVisual() {
  return (
    <div className="relative h-full min-h-[330px] overflow-hidden bg-[#15131b]">
      <div className="absolute left-1/2 top-1/2 h-[230px] w-[170px] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] border border-white/10 bg-black shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-[#854FEE]/50 via-black to-black" />

        <div className="absolute left-5 right-5 top-6">
          <p className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/40">
            PERFORMANCE CREATIVE
          </p>

          <p className="mt-4 text-3xl font-bold leading-[0.9] tracking-[-0.07em] text-white">
            MAKE
            <br />
            IT
            <br />
            MOVE.
          </p>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={item}
                className="h-1 flex-1 bg-white/20"
                style={{
                  opacity: index % 2 === 0 ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-7 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
        SHORT FORM / MOTION
      </div>

      <div className="absolute right-7 top-7 text-5xl font-black tracking-[-0.08em] text-white/[0.05]">
        04
      </div>
    </div>
  );
}

/* ============================================================
   WEBSITE VISUAL
============================================================ */

function WebsiteVisual() {
  return (
    <div className="relative h-full min-h-[330px] overflow-hidden bg-[#16131c]">
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#854FEE]/25 blur-3xl" />

      <div className="relative p-5 sm:p-7">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
            DIGITAL EXPERIENCE
          </span>

          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-[#854FEE]" />
          </div>
        </div>

        <div className="overflow-hidden border border-white/10 bg-white/[0.045]">
          <div className="border-b border-white/10 px-5 py-4">
            <div className="h-1.5 w-16 bg-white/15" />
          </div>

          <div className="grid min-h-[245px] grid-cols-[1.2fr_.8fr]">
            <div className="flex flex-col justify-center p-5">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#a987ff]">
                DIGITAL AGENCY
              </p>

              <h4 className="mt-3 text-3xl font-bold leading-[0.9] tracking-[-0.07em] text-white">
                BUILD
                <br />
                BETTER.
              </h4>

              <div className="mt-6 h-7 w-20 bg-[#854FEE]" />
            </div>

            <div className="bg-[#854FEE]/20">
              <div className="m-5 h-full border border-white/10 bg-white/[0.03]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-7 text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
        NEXT.JS / UI / UX
      </div>
    </div>
  );
}

/* ============================================================
   PROJECT VISUAL
============================================================ */

function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  switch (project.visualType) {
    case "meta":
      return <MetaVisual />;

    case "google":
      return <GoogleVisual />;

    case "tracking":
      return <TrackingVisual />;

    case "video":
      return <VideoVisual />;

    case "website":
      return <WebsiteVisual />;

    default:
      return null;
  }
}

/* ============================================================
   PROJECT IMAGE
============================================================ */

function ProjectImage({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isRightImage = index % 2 === 0;

  return (
    <div
      className={[
        "project-image-wrap",
        "relative w-full overflow-hidden",
        "border border-white/[0.08]",
        "bg-[#111111]",
        "shadow-[0_25px_80px_rgba(0,0,0,0.3)]",
        "lg:aspect-[4/3]",
        isRightImage ? "lg:order-2" : "lg:order-1",
      ].join(" ")}
    >
      <ProjectVisual project={project} />
    </div>
  );
}

/* ============================================================
   PROJECT META
============================================================ */

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
        "lg:min-h-[360px]",
        isRightContent ? "lg:order-1" : "lg:order-2",
      ].join(" ")}
    >
      <div
        className="
          mb-6
          flex
          items-center
          justify-between
          border-b
          border-white/[0.10]
          pb-4
          sm:mb-7
        "
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#a987ff]">
          {project.category}
        </span>

        <span className="text-[10px] font-bold tracking-[0.12em] text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className="
          max-w-[620px]
          text-[clamp(2.2rem,4.7vw,4.8rem)]
          font-bold
          leading-[0.91]
          tracking-[-0.065em]
          text-white
        "
      >
        {project.title}
      </h3>

      <p
        className="
          mt-5
          max-w-[520px]
          text-[13px]
          font-medium
          leading-6
          text-white/45
          sm:mt-6
          sm:text-[14px]
          sm:leading-7
        "
      >
        {project.description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-5 sm:mt-7 sm:max-w-[390px]">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/30">
            Demo Result
          </p>

          <p className="mt-1 text-2xl font-bold tracking-[-0.06em] text-white">
            {project.metric}
          </p>

          <p className="mt-0.5 text-[10px] font-medium text-white/40">
            {project.metricLabel}
          </p>
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/30">
            Service
          </p>

          <p className="mt-2 text-[11px] font-semibold leading-4 text-white/60">
            {project.category}
          </p>
        </div>
      </div>

      <div className="mt-6 sm:mt-7">
        <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
          Technologies / Services
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-[10px] font-semibold text-white/55"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center gap-6 sm:mt-8">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/25">
          Demo Case Study
        </span>

        <span className="inline-flex h-9 w-9 items-center justify-center border border-white/10 text-white/50">
          <ArrowUpRight size={15} />
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   PROJECT ROW
============================================================ */

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
        lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]
        lg:items-center
        lg:gap-12
        xl:gap-16
      "
    >
      <ProjectImage
        project={project}
        index={index}
      />

      <ProjectMeta
        project={project}
        index={index}
      />
    </article>
  );
}

/* ============================================================
   CTA
============================================================ */

function ClosingCTA() {
  return (
    <div
      className="
        projects-cta
        relative
        mt-24
        overflow-hidden
        border-y
        border-white/[0.08]
        py-16
        sm:mt-28
        sm:py-20
        lg:mt-36
        lg:py-24
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
          bg-[#854FEE]/[0.10]
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
              text-[#a987ff]
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
              text-white
            "
          >
            Your Next Big Idea
            <br />
            Could Be Here.
          </h3>

          <p
            className="
              projects-cta-copy
              mt-6
              max-w-[560px]
              text-[13px]
              font-medium
              leading-6
              text-white/45
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
    border-white/20
    bg-white
    px-5
    text-[11px]
    font-bold
    uppercase
    tracking-[0.14em]
    !text-black
    transition-all
    duration-300
    hover:border-[#854FEE]
    hover:bg-[#854FEE]
    hover:!text-white
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

/* ============================================================
   MAIN PROJECTS
============================================================ */

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeCategory, setActiveCategory] =
    useState<"All" | ProjectCategory>("All");

  const categories = useMemo(
    () =>
      [
        "Facebook Advertising",
        "Google Advertising",
        "Conversion Tracking",
        "Video Editing",
        "Website Design & Development",
      ] as ProjectCategory[],
    [],
  );

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

      /* HEADER */

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

      /* PROJECT ROWS */

      projectRows.forEach((row, index) => {
        const image = imageWrappers[index];
        const content = contentBlocks[index];

        const direction =
          index % 2 === 0 ? 28 : -28;

        gsap.fromTo(
          image,
          {
            opacity: 0,
            y: 32,
            clipPath: "inset(8% 0% 8% 0%)",
          },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.9,
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
            duration: 0.75,
            delay: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 78%",
              once: true,
            },
          },
        );

        /* DESKTOP IMAGE PARALLAX */

        if (window.innerWidth >= 1024) {
          gsap.fromTo(
            image,
            {
              yPercent: -1.5,
            },
            {
              yPercent: 1.5,
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
      });

      /* CTA */

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
      data-sidebar-theme="dark"
      className="
        section-with-left-nav
        relative
        scroll-mt-20
        overflow-hidden
        bg-[#050505]
        text-white
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
          sm:py-24
          lg:px-12
          lg:py-32
          xl:px-16
        "
      >
        {/* ==================================================
            HEADER
        =================================================== */}

        <header
          className="
            grid
            gap-10
            border-b
            border-white/[0.08]
            pb-10
            lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)]
            lg:items-end
            lg:gap-16
            lg:pb-14
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
                  text-[#a987ff]
                  sm:text-[10px]
                "
              >
                OUR SELECTED WORK
              </span>
            </div>

            <h2
              className="
                projects-header-item
                max-w-[900px]
                text-[clamp(2.8rem,6.5vw,6.7rem)]
                font-bold
                leading-[0.88]
                tracking-[-0.075em]
                text-white
              "
            >
              Selected Projects.
              <br />

              <span className="text-[#854FEE]">
                Built Around Growth.
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
                text-white/45
                sm:text-[15px]
                sm:leading-7
              "
            >
              A selection of demo projects built around our
              five core services — advertising, tracking,
              creative production, and high-converting digital
              experiences.
            </p>

            <div
              className="
                projects-header-item
                mt-8
                flex
                items-end
                justify-between
                border-t
                border-white/[0.08]
                pt-4
              "
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white/30
                "
              >
                Service projects
              </span>

              <span
                className="
                  text-[12px]
                  font-bold
                  tracking-[0.1em]
                  text-white/70
                "
              >
                {String(projectCount).padStart(2, "0")}
                {" / "}
                <span className="text-white/20">
                  05 SERVICES
                </span>
              </span>
            </div>
          </div>
        </header>

        {/* ==================================================
            FILTER
        =================================================== */}

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
          {(["All", ...categories] as const).map(
            (category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  aria-pressed={active}
                  className={[
                    "min-h-10",
                    "border",
                    "px-4",
                    "text-[9px]",
                    "font-bold",
                    "uppercase",
                    "tracking-[0.12em]",
                    "transition-all",
                    "duration-300",
                    active
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-transparent text-white/40 hover:border-white/30 hover:text-white",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            },
          )}
        </div>

        {/* ==================================================
            PROJECTS
        =================================================== */}

        <div className="mt-14 sm:mt-20 lg:mt-28">
          {filteredProjects.map(
            (project, index) => (
              <div
                key={project.id}
                className={[
                  index > 0
                    ? "mt-24 border-t border-white/[0.08] pt-24 sm:mt-28 sm:pt-28 lg:mt-36 lg:pt-36"
                    : "",
                ].join(" ")}
              >
                <ProjectRow
                  project={project}
                  index={index}
                />
              </div>
            ),
          )}
        </div>

        {/* ==================================================
            CTA
        =================================================== */}

        <ClosingCTA />
      </div>
    </section>
  );
}