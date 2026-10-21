"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ProcessIcon = "search" | "layers" | "layout" | "chart" | "check";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: ProcessIcon;
  tags: string[];
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover & Strategize",
    description:
      "We learn about your business, audience, goals, and challenges before creating a tailored digital strategy.",
    icon: "search",
    tags: ["Research", "Goals", "Strategy"],
  },
  {
    number: "02",
    title: "Plan & Create",
    description:
      "We develop a clear action plan and shape the creative direction, content, design, and campaign structure around your objectives.",
    icon: "layers",
    tags: ["Creative Direction", "Content", "Planning"],
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We bring ideas to life through engaging video content, thoughtful UI/UX design, and high-quality website development.",
    icon: "layout",
    tags: ["UI/UX", "Video", "Development"],
  },
  {
    number: "04",
    title: "Launch, Track & Optimize",
    description:
      "We launch campaigns, configure conversion tracking, and use performance data to identify opportunities for improvement.",
    icon: "chart",
    tags: ["Meta Ads", "Google Ads", "Tracking"],
  },
  {
    number: "05",
    title: "Deliver & Improve",
    description:
      "We review the delivered work, share relevant insights, and identify practical next steps for continued improvement.",
    icon: "check",
    tags: ["Delivery", "Insights", "Next Steps"],
  },
];

function ProcessIconSvg({
  type,
  size = 24,
}: {
  type: ProcessIcon;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4.2 4.2" />
          <path d="M11 7.8v6.4M7.8 11h6.4" opacity=".45" />
        </svg>
      );

    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3.5 8 4.2-8 4.2-8-4.2 8-4.2Z" />
          <path d="m4 12 8 4.2 8-4.2" />
          <path d="m4 16.3 8 4.2 8-4.2" />
        </svg>
      );

    case "layout":
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="17" height="16" rx="2" />
          <path d="M3.5 9h17M8.5 9v11M11.5 13h6M11.5 16h4.5" />
        </svg>
      );

    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19.5V14M9.3 19.5V10M14.6 19.5V6.5M19.8 19.5V3.5" />
          <path d="m4 10.5 5-4 5.2 2.5 5.6-5" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8 12.2 2.7 2.7 5.6-6" />
        </svg>
      );
  }
}

function StepVisual({
  step,
  index,
}: {
  step: ProcessStep;
  index: number;
}) {
  return (
    <div className="process-visual relative min-h-[310px] overflow-hidden rounded-[26px] border border-black/[0.08] bg-white shadow-[0_24px_70px_rgba(24,18,40,0.07)] sm:min-h-[390px] lg:min-h-[450px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#854fee]/[0.07] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#854fee]/[0.045] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(to_right,rgba(20,16,30,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,16,30,0.05)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#854fee] text-white">
            <ProcessIconSvg type={step.icon} size={17} />
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
            Process / {step.number}
          </span>
        </div>

        <span className="text-[10px] font-semibold tracking-[0.12em] text-black/25">
          {String(index + 1).padStart(2, "0")} / 05
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-5 top-24 sm:inset-x-8 sm:bottom-8 sm:top-28">
        {index === 0 && (
          <div className="relative h-full">
            <div className="absolute left-[12%] top-[16%] w-[72%] rounded-2xl border border-black/[0.08] bg-[#faf9fc] p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#854fee]" />
                <span className="h-2 w-16 rounded-full bg-black/10" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-[78%] rounded-full bg-black/[0.08]" />
                <div className="h-3 w-[58%] rounded-full bg-black/[0.06]" />
                <div className="h-3 w-[68%] rounded-full bg-[#854fee]/15" />
              </div>
            </div>

            <div className="absolute bottom-[12%] right-[4%] grid h-20 w-20 place-items-center rounded-2xl border border-[#854fee]/20 bg-white shadow-lg">
              <ProcessIconSvg type="search" size={30} />
            </div>

            <div className="absolute bottom-[18%] left-[7%] flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#854fee]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-black/50">
                Audience
              </span>
            </div>
          </div>
        )}

        {index === 1 && (
          <div className="relative h-full">
            <div className="absolute left-[5%] top-[8%] h-[72%] w-[48%] -rotate-3 rounded-2xl border border-black/[0.08] bg-white p-4 shadow-lg">
              <div className="mb-5 h-2 w-20 rounded-full bg-black/10" />
              <div className="space-y-3">
                <div className="h-16 rounded-xl bg-[#854fee]/10" />
                <div className="h-3 w-[82%] rounded-full bg-black/[0.07]" />
                <div className="h-3 w-[64%] rounded-full bg-black/[0.05]" />
              </div>
            </div>

            <div className="absolute bottom-[4%] right-[5%] h-[70%] w-[48%] rotate-3 rounded-2xl border border-black/[0.08] bg-[#f8f7fa] p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 rounded-xl bg-black/[0.04]" />
                <div className="h-16 rounded-xl bg-[#854fee]/15" />
                <div className="col-span-2 h-20 rounded-xl bg-white" />
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#854fee] text-white shadow-lg">
              <ProcessIconSvg type="layers" size={24} />
            </div>
          </div>
        )}

        {index === 2 && (
          <div className="relative flex h-full items-center justify-center">
            <div className="relative w-[86%] overflow-hidden rounded-2xl border border-black/[0.08] bg-[#111] shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
              <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              <div className="grid min-h-[180px] grid-cols-[0.65fr_1fr] gap-3 p-4 sm:min-h-[240px]">
                <div className="rounded-xl bg-white/[0.06] p-3">
                  <div className="mb-4 h-2 w-14 rounded-full bg-white/15" />
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/10" />
                    <div className="h-2 w-[75%] rounded-full bg-white/10" />
                    <div className="h-2 w-[85%] rounded-full bg-[#854fee]/60" />
                  </div>
                </div>

                <div className="rounded-xl bg-white p-3">
                  <div className="h-20 rounded-lg bg-[#854fee]/10" />
                  <div className="mt-3 h-3 w-[75%] rounded-full bg-black/10" />
                  <div className="mt-2 h-2 w-[55%] rounded-full bg-black/5" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-[8%] rounded-full border border-black/[0.08] bg-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] shadow-md">
              Build
            </div>

            <div className="absolute right-0 top-[12%] rounded-full border border-[#854fee]/20 bg-[#854fee]/[0.07] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#854fee]">
              Design
            </div>
          </div>
        )}

        {index === 3 && (
          <div className="relative h-full">
            <div className="absolute left-[5%] top-[10%] w-[90%] rounded-2xl border border-black/[0.08] bg-white p-3 shadow-lg sm:left-[8%] sm:w-[84%] sm:p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/35">
                  Tracking overview
                </span>
                <span className="rounded-full bg-[#854fee]/10 px-2.5 py-1 text-[8px] font-bold text-[#854fee]">
                  LIVE
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-black/[0.035] p-2 sm:p-3">
                  <div className="h-2 w-8 rounded-full bg-black/10" />
                  <div className="mt-4 h-6 w-10 rounded bg-black/10 sm:h-7 sm:w-12" />
                </div>
                <div className="rounded-xl bg-[#854fee]/[0.07] p-2 sm:p-3">
                  <div className="h-2 w-8 rounded-full bg-[#854fee]/25" />
                  <div className="mt-4 h-6 w-10 rounded bg-[#854fee]/25 sm:h-7 sm:w-12" />
                </div>
                <div className="rounded-xl bg-black/[0.035] p-2 sm:p-3">
                  <div className="h-2 w-8 rounded-full bg-black/10" />
                  <div className="mt-4 h-6 w-10 rounded bg-black/10 sm:h-7 sm:w-12" />
                </div>
              </div>

              <div className="mt-5 h-20 rounded-xl bg-[#f7f6f9] p-3 sm:h-24">
                <svg
                  viewBox="0 0 400 100"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 82 C45 78 60 70 92 72 C125 74 130 43 165 52 C205 63 205 29 245 39 C285 49 300 17 338 27 C365 34 380 20 400 12"
                    fill="none"
                    stroke="#854fee"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-[7%] left-[8%] flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3 py-2 shadow-sm sm:left-[12%]">
              <span className="h-2 w-2 rounded-full bg-[#854fee]" />
              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-black/45">
                Meta
              </span>
            </div>

            <div className="absolute bottom-[7%] right-[8%] flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3 py-2 shadow-sm sm:right-[12%]">
              <span className="h-2 w-2 rounded-full bg-black/20" />
              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-black/45">
                Google
              </span>
            </div>
          </div>
        )}

        {index === 4 && (
          <div className="relative flex h-full items-center justify-center">
            <div className="relative w-[90%] rounded-[24px] border border-black/[0.08] bg-white p-5 shadow-[0_25px_60px_rgba(24,18,40,0.09)] sm:w-[70%] sm:p-6">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#854fee]/10 text-[#854fee] sm:h-20 sm:w-20">
                <ProcessIconSvg type="check" size={36} />
              </div>

              <div className="mt-6 space-y-3 text-center">
                <div className="mx-auto h-3 w-32 rounded-full bg-black/[0.08]" />
                <div className="mx-auto h-2 w-48 max-w-full rounded-full bg-black/[0.05]" />
                <div className="mx-auto h-2 w-40 max-w-full rounded-full bg-black/[0.05]" />
              </div>

              <div className="mt-6 flex justify-center gap-2">
                <span className="rounded-full bg-[#854fee]/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-[#854fee]">
                  Review
                </span>
                <span className="rounded-full bg-black/[0.04] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-black/45">
                  Improve
                </span>
              </div>
            </div>

            <div className="absolute left-[7%] top-[18%] h-3 w-3 rounded-full bg-[#854fee]/30" />
            <div className="absolute right-[12%] top-[30%] h-2 w-2 rounded-full bg-[#854fee]/50" />
            <div className="absolute bottom-[18%] left-[18%] h-2 w-2 rounded-full bg-black/10" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinShellRef = useRef<HTMLDivElement | null>(null);
  const journeyRef = useRef<HTMLDivElement | null>(null);
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const activeVisualRef = useRef<HTMLDivElement | null>(null);
  const activeContentRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const totalSteps = processSteps.length;

  const updateActiveStep = useCallback(
    (index: number) => {
      const safeIndex = Math.max(
        0,
        Math.min(totalSteps - 1, index),
      );

      setActiveIndex((current) =>
        current === safeIndex ? current : safeIndex,
      );
    },
    [totalSteps],
  );

  /* =======================================================
     GSAP PIN — DESKTOP ONLY
     One master ScrollTrigger controls the entire journey.
  ======================================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinShell = pinShellRef.current;
    const journey = journeyRef.current;
    const progressPath = progressPathRef.current;

    if (!section || !pinShell || !journey || !progressPath) {
      return;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 1024px)",
        mobile: "(max-width: 1023px)",
        reducedMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const conditions = context.conditions as {
          desktop: boolean;
          mobile: boolean;
          reducedMotion: boolean;
        };

        const steps = gsap.utils.toArray<HTMLElement>(
          ".process-step",
          section,
        );

        const headerItems = gsap.utils.toArray<HTMLElement>(
          ".process-header-item",
          section,
        );

        const visual = activeVisualRef.current;
        const content = activeContentRef.current;

        if (!visual || !content) return;

        gsap.set(
          [...headerItems, ...steps, visual, content],
          { clearProps: "all" },
        );

        const reduceMotion = conditions.reducedMotion;
        const desktop = conditions.desktop && !reduceMotion;

        if (!reduceMotion) {
          gsap.fromTo(
            headerItems,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.out",
            },
          );

          gsap.fromTo(
            visual,
            { opacity: 0, y: 16, scale: 0.985 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.75,
              ease: "power3.out",
            },
          );
        }

        /*
         * MOBILE / REDUCED MOTION
         * No pin and no scroll interception.
         */
        if (!desktop) {
          steps.forEach((step, index) => {
            const title = step.querySelector<HTMLElement>(
              ".process-step-title",
            );
            const description = step.querySelector<HTMLElement>(
              ".process-step-description",
            );
            const tags = step.querySelector<HTMLElement>(
              ".process-step-tags",
            );
            const icon = step.querySelector<HTMLElement>(
              ".process-step-icon",
            );

            gsap.set(step, {
              clearProps: "opacity,transform",
            });

            if (title) {
              gsap.set(title, {
                color:
                  index === 0
                    ? "#15131a"
                    : "rgba(21,19,26,0.5)",
              });
            }

            if (description) {
              gsap.set(description, {
                opacity: 1,
                maxHeight: "none",
              });
            }

            if (tags) {
              gsap.set(tags, {
                opacity: 1,
                maxHeight: "none",
              });
            }

            if (icon) {
              gsap.set(icon, {
                backgroundColor:
                  index === 0 ? "#854fee" : "#ffffff",
                color:
                  index === 0
                    ? "#ffffff"
                    : "rgba(21,19,26,0.4)",
              });
            }
          });

          gsap.set(progressPath, {
            strokeDasharray: 1,
            strokeDashoffset: 0,
          });

          return;
        }

        /*
         * DESKTOP INITIAL STATES
         */
        steps.forEach((step, index) => {
          const title = step.querySelector<HTMLElement>(
            ".process-step-title",
          );
          const description = step.querySelector<HTMLElement>(
            ".process-step-description",
          );
          const tags = step.querySelector<HTMLElement>(
            ".process-step-tags",
          );
          const icon = step.querySelector<HTMLElement>(
            ".process-step-icon",
          );

          gsap.set(step, {
            opacity: index === 0 ? 1 : 0.34,
            x: 0,
          });

          if (title) {
            gsap.set(title, {
              color:
                index === 0
                  ? "#15131a"
                  : "rgba(21,19,26,0.35)",
            });
          }

          if (description) {
            gsap.set(description, {
              opacity: index === 0 ? 1 : 0,
              maxHeight: index === 0 ? 150 : 0,
            });
          }

          if (tags) {
            gsap.set(tags, {
              opacity: index === 0 ? 1 : 0,
              maxHeight: index === 0 ? 100 : 0,
            });
          }

          if (icon) {
            gsap.set(icon, {
              backgroundColor:
                index === 0 ? "#854fee" : "#ffffff",
              color:
                index === 0
                  ? "#ffffff"
                  : "rgba(21,19,26,0.4)",
            });
          }
        });

        /*
         * SVG PROGRESS INITIALIZATION
         */
        const pathLength = progressPath.getTotalLength();

        gsap.set(progressPath, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        /*
         * MASTER TIMELINE + PIN
         *
         * Removed refreshPriority: 1.
         * ScrollTrigger should refresh in document order,
         * accounting for pin spacing from preceding sections.
         */
        const master = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: pinShell,
            pin: pinShell,
            pinSpacing: true,
            start: "top top",
            end: () =>
              `+=${window.innerHeight * (totalSteps - 1)}`,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const nextIndex = Math.min(
                totalSteps - 1,
                Math.floor(
                  self.progress * totalSteps,
                ),
              );

              updateActiveStep(nextIndex);
            },
          },
        });

        master.to(
          progressPath,
          {
            strokeDashoffset: 0,
            duration: 1,
          },
          0,
        );

        steps.forEach((step, index) => {
          const start = index / totalSteps;
          const end = (index + 1) / totalSteps;

          const title = step.querySelector<HTMLElement>(
            ".process-step-title",
          );
          const description = step.querySelector<HTMLElement>(
            ".process-step-description",
          );
          const tags = step.querySelector<HTMLElement>(
            ".process-step-tags",
          );
          const icon = step.querySelector<HTMLElement>(
            ".process-step-icon",
          );

          master.to(
            step,
            {
              opacity: 1,
              x: 0,
              duration: 0.14,
            },
            start,
          );

          if (title) {
            master.to(
              title,
              {
                color: "#15131a",
                duration: 0.12,
              },
              start,
            );
          }

          if (description) {
            master.to(
              description,
              {
                opacity: 1,
                maxHeight: 150,
                duration: 0.12,
              },
              start,
            );
          }

          if (tags) {
            master.to(
              tags,
              {
                opacity: 1,
                maxHeight: 100,
                duration: 0.12,
              },
              start,
            );
          }

          if (icon) {
            master.to(
              icon,
              {
                backgroundColor: "#854fee",
                color: "#ffffff",
                scale: 1.04,
                duration: 0.12,
              },
              start,
            );
          }

          if (index < totalSteps - 1) {
            const fadeAt = end - 0.025;

            master.to(
              step,
              {
                opacity: 0.34,
                x: -3,
                duration: 0.08,
              },
              fadeAt,
            );

            if (title) {
              master.to(
                title,
                {
                  color: "rgba(21,19,26,0.35)",
                  duration: 0.08,
                },
                fadeAt,
              );
            }

            if (description) {
              master.to(
                description,
                {
                  opacity: 0,
                  maxHeight: 0,
                  duration: 0.08,
                },
                fadeAt,
              );
            }

            if (tags) {
              master.to(
                tags,
                {
                  opacity: 0,
                  maxHeight: 0,
                  duration: 0.08,
                },
                fadeAt,
              );
            }

            if (icon) {
              master.to(
                icon,
                {
                  backgroundColor: "#ffffff",
                  color: "rgba(21,19,26,0.4)",
                  scale: 1,
                  duration: 0.08,
                },
                fadeAt,
              );
            }
          }
        });

        master.to(
          visual,
          { y: -5, duration: 0.25 },
          0.15,
        );

        master.to(
          visual,
          { y: 5, duration: 0.25 },
          0.5,
        );

        master.to(
          visual,
          { y: 0, duration: 0.25 },
          0.8,
        );

        master.to(
          content,
          { opacity: 1, y: 0, duration: 0.2 },
          0,
        );

        /*
         * FIXED REFRESH
         *
         * Refresh after layout has settled. This helps prevent
         * the Process pin from starting too early when a previous
         * section is also pinned.
         */
        let frameOne = 0;
        let frameTwo = 0;

        const refreshProcess = () => {
          ScrollTrigger.sort();
          ScrollTrigger.refresh(true);
        };

        frameOne = requestAnimationFrame(() => {
          frameTwo = requestAnimationFrame(() => {
            refreshProcess();
          });
        });

        window.addEventListener("load", refreshProcess);

        return () => {
          cancelAnimationFrame(frameOne);
          cancelAnimationFrame(frameTwo);

          window.removeEventListener(
            "load",
            refreshProcess,
          );

          master.scrollTrigger?.kill();
          master.kill();
        };
      },
    );

    return () => {
      mm.revert();
    };
  }, [totalSteps, updateActiveStep]);

  /*
   * Animate the visual when React switches the active step.
   */
  useLayoutEffect(() => {
    const visual = activeVisualRef.current;
    const content = activeContentRef.current;

    if (!visual || !content) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        visual.querySelector(".process-visual"),
        { opacity: 0.65, y: 8, scale: 0.99 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
        },
      );

      gsap.fromTo(
        content,
        { opacity: 0.65, y: 5 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        },
      );
    }, visual);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-heading"
      className="relative isolate w-full overflow-x-clip bg-[#f7f7f5] text-[#15131a]"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.32] [background-image:linear-gradient(to_right,rgba(20,16,30,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,16,30,0.035)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute -left-40 top-[18%] h-[420px] w-[420px] rounded-full bg-[#854fee]/[0.035] blur-3xl" />
        <div className="absolute -right-40 bottom-[12%] h-[500px] w-[500px] rounded-full bg-[#854fee]/[0.035] blur-3xl" />
      </div>

      {/* HEADER */}
      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-12 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-20">
          <div>
            <div className="process-header-item mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#854fee]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/45">
                HOW WE WORK
              </span>
            </div>

            <h2
              id="process-heading"
              className="process-header-item max-w-[900px] text-[clamp(2.7rem,7vw,6.8rem)] font-bold leading-[0.9] tracking-[-0.065em]"
            >
              From First Idea
              <br />
              <span className="text-[#854fee]">
                to Real Impact.
              </span>
            </h2>
          </div>

          <p className="process-header-item max-w-[480px] text-[14px] leading-7 text-black/55 sm:text-[15px] lg:pb-1">
            Every successful digital project starts with a clear strategy.
            We combine creative thinking, technology, and data-driven
            decisions to help businesses build, launch, and improve their
            digital presence.
          </p>
        </div>
      </div>

      {/* PIN SHELL */}
      <div
        ref={pinShellRef}
        className="process-pin-shell relative w-full"
      >
        <div
          ref={journeyRef}
          className="process-journey relative mx-auto flex min-h-0 w-full max-w-[1500px] items-center px-5 pb-16 sm:px-8 sm:pb-20 lg:h-screen lg:min-h-0 lg:px-12 lg:pb-0"
        >
          <div className="relative grid w-full gap-9 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-20">
            {/* LEFT — TIMELINE */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-10 left-[18px] top-8 hidden w-px bg-black/[0.09] lg:block"
              />

              <svg
                aria-hidden="true"
                className="pointer-events-none absolute bottom-10 left-0 top-8 hidden h-[calc(100%-40px)] w-[38px] overflow-visible lg:block"
                viewBox="0 0 38 1000"
                preserveAspectRatio="none"
              >
                <path
                  d="M19 0 V1000"
                  pathLength="1"
                  fill="none"
                  stroke="#854fee"
                  strokeWidth="2"
                  strokeLinecap="round"
                  ref={progressPathRef}
                />
              </svg>

              <div className="space-y-7 lg:space-y-0">
                {processSteps.map((step, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <article
                      key={step.number}
                      className="process-step relative lg:min-h-[140px] lg:pl-[68px]"
                    >
                      {/* DESKTOP MARKER */}
                      <div
                        aria-hidden="true"
                        className="absolute left-0 top-0 z-20 hidden h-[38px] w-[38px] place-items-center rounded-full border border-black/10 bg-[#f7f7f5] lg:grid"
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? "scale-125 bg-[#854fee] shadow-[0_0_0_6px_rgba(133,79,238,0.12)]"
                              : "bg-black/15"
                          }`}
                        />
                      </div>

                      {/* MOBILE LABEL */}
                      <div className="mb-3 flex items-center justify-between lg:hidden">
                        <div className="flex min-h-10 items-center gap-3 rounded-full border border-black/[0.08] bg-white px-3 pr-4">
                          <span
                            className={`grid h-7 w-7 place-items-center rounded-full text-[9px] font-bold ${
                              isActive
                                ? "bg-[#854fee] text-white"
                                : "bg-black/[0.045] text-black/45"
                            }`}
                          >
                            {step.number}
                          </span>

                          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-black/45">
                            {isActive ? "Current step" : "Process"}
                          </span>
                        </div>

                        <span className="text-[9px] font-bold tracking-[0.14em] text-black/25">
                          {step.number} / 05
                        </span>
                      </div>

                      <div className="w-full rounded-2xl text-left">
                        <div className="border-t border-black/[0.07] py-5 lg:border-t-0 lg:py-0">
                          <div className="flex items-start gap-4">
                            <span
                              className={`hidden pt-1 text-[10px] font-bold tracking-[0.12em] lg:block ${
                                isActive
                                  ? "text-[#854fee]"
                                  : "text-black/25"
                              }`}
                            >
                              {step.number}
                            </span>

                            <div className="min-w-0 flex-1">
                              <div className="mb-3 flex items-center gap-3">
                                <span className="process-step-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-black/40 transition-all duration-300">
                                  <ProcessIconSvg
                                    type={step.icon}
                                    size={17}
                                  />
                                </span>

                                <span
                                  className={`text-[9px] font-bold uppercase tracking-[0.16em] ${
                                    isActive
                                      ? "text-[#854fee]"
                                      : "text-black/30"
                                  }`}
                                >
                                  {isActive
                                    ? "Active process"
                                    : "Process stage"}
                                </span>
                              </div>

                              <h3
                                className={`process-step-title max-w-[500px] text-[clamp(1.4rem,2.2vw,2.15rem)] font-bold leading-[0.98] tracking-[-0.045em] transition-colors duration-300 ${
                                  isActive
                                    ? "text-black"
                                    : "text-black/35"
                                }`}
                              >
                                {step.title}
                              </h3>

                              <p className="process-step-description mt-3 max-w-[500px] overflow-hidden text-[12px] leading-6 text-black/55 sm:text-[13px] lg:max-h-0 lg:opacity-0">
                                {step.description}
                              </p>

                              <div className="process-step-tags mt-4 flex max-h-0 flex-wrap gap-2 overflow-hidden opacity-0">
                                {step.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-black/45"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — VISUAL */}
            <div className="relative flex min-h-0 flex-col justify-center">
              <div ref={activeVisualRef} className="relative w-full">
                <StepVisual
                  step={processSteps[activeIndex]}
                  index={activeIndex}
                />
              </div>

              <div
                ref={activeContentRef}
                className="mt-5 flex items-center justify-between gap-4 border-t border-black/[0.08] pt-5"
              >
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                    Current stage
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold tracking-[-0.02em]">
                    {processSteps[activeIndex].title}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-2xl font-bold leading-none tracking-[-0.06em]">
                      {processSteps[activeIndex].number}
                    </span>
                    <span className="text-xs font-semibold text-black/25">
                      / 05
                    </span>
                  </div>

                  <div className="mt-2 h-1 w-20 overflow-hidden rounded-full bg-black/[0.07]">
                    <div
                      className="h-full rounded-full bg-[#854fee] transition-all duration-300"
                      style={{
                        width: `${((activeIndex + 1) / totalSteps) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 hidden items-center gap-2 lg:flex">
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="flex min-h-10 flex-1 items-center gap-2 rounded-full border border-black/[0.07] bg-white/70 px-3"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full transition-all ${
                        activeIndex === index
                          ? "scale-125 bg-[#854fee]"
                          : index < activeIndex
                            ? "bg-[#854fee]/50"
                            : "bg-black/15"
                      }`}
                    />
                    <span
                      className={`text-[8px] font-bold tracking-[0.08em] ${
                        activeIndex === index
                          ? "text-black"
                          : "text-black/30"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE CONNECTION STRIP */}
      <div className="relative border-y border-black/[0.07] bg-white/55">
        <div className="mx-auto flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8 sm:py-7 lg:px-12">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
              Built around the right mix
            </span>
            <p className="mt-1 text-sm font-semibold tracking-[-0.02em]">
              Strategy · Creative · Development · Advertising · Measurement
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Meta Ads",
              "Google Ads",
              "Conversion Tracking",
              "Video Editing",
              "Website Development",
            ].map((service) => (
              <span
                key={service}
                className="rounded-full border border-black/[0.07] bg-white px-3 py-2 text-[8px] font-bold uppercase tracking-[0.1em] text-black/45"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-36 lg:pt-32">
        <div className="relative overflow-hidden rounded-[28px] bg-[#17141d] px-6 py-12 text-white sm:rounded-[30px] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#854fee]/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#854fee]/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:50px_50px]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <div>
              <span className="mb-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                <span className="h-1.5 w-1.5 rounded-full bg-[#854fee]" />
                Next step
              </span>

              <h2 className="max-w-[800px] text-[clamp(2.5rem,6vw,5.7rem)] font-bold leading-[0.9] tracking-[-0.06em]">
                Ready to Start
                <br />
                <span className="text-[#bba2ff]">
                  Your Project?
                </span>
              </h2>

              <p className="mt-6 max-w-[570px] text-sm leading-7 text-white/55 sm:text-[15px]">
                Tell us what you&apos;re building, and let&apos;s explore
                how Nexora Digital can help.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-14 w-full items-center justify-between gap-8 rounded-full bg-white px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-black transition-colors duration-300 hover:bg-[#854fee] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#17141d] sm:w-auto sm:min-w-[190px]"
            >
              <span>Let&apos;s Talk</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}