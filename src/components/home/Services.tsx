"use client";

import { useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import Link from "next/link";

import { motion, useInView, useReducedMotion } from "framer-motion";

import { ArrowUpRight, Check } from "lucide-react";

import { services } from "@/data/services";
import { AnimationDirection, Service } from "@/types/service";

const ease = [0.22, 1, 0.36, 1] as const;

const directions: Record<
  AnimationDirection,
  { x: number; y: number; scale: number; rotate: number }
> = {
  left: { x: -55, y: 0, scale: 0.97, rotate: -1 },
  right: { x: 55, y: 0, scale: 0.97, rotate: 1 },
  top: { x: 0, y: -40, scale: 0.97, rotate: 0 },
  bottom: { x: 0, y: 40, scale: 0.97, rotate: 0 },
  scale: { x: 0, y: 0, scale: 0.9, rotate: 0 },
};

/* ================= SECTION REVEAL ================= */

function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "bottom",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
          : { opacity: 0, ...directions[direction] }
      }
      animate={
        isInView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 } : undefined
      }
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsFlipped((previous) => !previous);
    }

    if (event.key === "Escape") {
      setIsFlipped(false);
    }
  };

  return (
    <motion.article
      initial={
        reduceMotion
          ? { opacity: 1, x: 0, y: 0, scale: 1 }
          : {
              opacity: 0,
              ...directions[service.direction],
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : (index % 3) * 0.09,
        ease,
      }}
      role="button"
      tabIndex={0}
      aria-label={`${service.title}. Activate to flip the card and view details.`}
      aria-pressed={isFlipped}
      onClick={() => setIsFlipped((previous) => !previous)}
      onKeyDown={handleKeyDown}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: 1200 }}
      className="
        group/card relative isolate
        h-[300px] min-w-0 cursor-pointer
        rounded-[20px] outline-none
        focus-visible:ring-2
        focus-visible:ring-[#8450EE]
        focus-visible:ring-offset-4
        sm:h-[310px] lg:h-[320px]
      "
    >
      <div className="absolute inset-0">
        <div
          className={`
            relative h-full w-full rounded-[20px]
            [transform-style:preserve-3d]
            ${
              reduceMotion
                ? "transition-none"
                : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            }
            ${
              isFlipped
                ? "[transform:rotateY(180deg)]"
                : "[@media(hover:hover)]:group-hover/card:[transform:rotateY(180deg)]"
            }
          `}
        >
          {/* FRONT */}

          <div
            className="
              absolute inset-0 flex h-full flex-col
              overflow-hidden rounded-[20px]
              border border-black/[0.07]
              bg-white p-5 sm:p-6
              [backface-visibility:hidden]
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -right-12 -top-12
                h-36 w-36 rounded-full opacity-[0.08]
                blur-3xl transition-transform duration-700
                group-hover/card:scale-150
              "
              style={{ backgroundColor: service.accent }}
            />

            <div className="relative z-10 flex items-start justify-between gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border"
                style={{
                  color: service.accent,
                  backgroundColor: `${service.accent}12`,
                  borderColor: `${service.accent}25`,
                }}
              >
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <span
                className="select-none text-[42px] font-bold leading-none tracking-[-0.09em]"
                style={{ color: `${service.accent}30` }}
              >
                {service.id}
              </span>
            </div>

            <div className="relative z-10 mt-6">
              <p
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]"
                style={{ color: service.accent }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: service.accent }}
                />
                {service.shortTitle}
              </p>

              <h3 className="mt-2 text-[22px] font-bold leading-[1.1] tracking-[-0.055em] text-[#171717]">
                {service.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#737373]">
                {service.description}
              </p>
            </div>

            <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-black/40">
                Nexora Digital
              </span>

              <span
                aria-hidden="true"
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-full border transition-transform duration-300
                  group-hover/card:rotate-45
                "
                style={{
                  color: service.accent,
                  borderColor: `${service.accent}35`,
                  backgroundColor: `${service.accent}08`,
                }}
              >
                <ArrowUpRight size={17} />
              </span>
            </div>
          </div>

          {/* BACK */}

          <div
            className="
              absolute inset-0 flex h-full flex-col
              overflow-hidden rounded-[20px]
              p-5 text-white sm:p-6
              [backface-visibility:hidden]
              [transform:rotateY(180deg)]
            "
            style={{ backgroundColor: service.accent }}
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -right-16 -top-16
                h-48 w-48 rounded-full border border-white/15
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute -right-8 -top-8
                h-32 w-32 rounded-full bg-white/[0.08] blur-2xl
              "
            />

            <div className="relative z-10 flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                  What you get
                </p>

                <h3 className="mt-2 max-w-[230px] text-[23px] font-bold leading-[1.05] tracking-[-0.055em] text-white">
                  {service.title}
                </h3>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-white/20 bg-white/10">
                <Icon size={21} strokeWidth={1.8} />
              </div>
            </div>

            <ul className="relative z-10 mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-[12px] leading-[1.5] text-white/95"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Check size={11} strokeWidth={2.8} />
                  </span>

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="relative z-10 mt-auto flex items-center justify-between gap-3 border-t border-white/25 pt-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/65">
                  Nexora Digital
                </p>

                <p className="mt-1 text-xs font-semibold text-white">
                  Let&apos;s grow together.
                </p>
              </div>

              <Link
                href="/contact"
                aria-label={`Discuss ${service.title} with Nexora Digital`}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
                className="
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-full bg-white text-[#171717]
                  transition-transform duration-300
                  hover:rotate-45
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-white
                "
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ================= MAIN SERVICES SECTION ================= */

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      data-sidebar-theme="light"
      className="
        section-with-left-nav relative isolate
        scroll-mt-24 overflow-hidden
        bg-[#FAFAF8] text-[#171717]
      "
    >
      {/* Background decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-[8%] h-[320px] w-[320px] rounded-full bg-[#8450EE]/[0.10] blur-[120px] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute -right-40 top-[35%] h-[300px] w-[300px] rounded-full bg-cyan-300/[0.10] blur-[120px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute bottom-0 left-[25%] h-[300px] w-[300px] rounded-full bg-pink-300/[0.07] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.2)_0.65px,transparent_0.65px)] opacity-[0.07] [background-size:26px_26px]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24 xl:px-20">
        {/* Section label */}

        <SectionReveal direction="left">
          <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8450EE] sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#8450EE]" />
            What We Do
          </div>
        </SectionReveal>

        {/* Heading */}

        <h2 className="max-w-[1000px] text-[clamp(2.5rem,6.2vw,6rem)] font-bold leading-[0.95] tracking-[-0.075em] text-[#171717]">
          We turn ideas into
          <br />
          <span className="text-[#8450EE]">digital growth.</span>
        </h2>

        {/* Intro strip */}

        <SectionReveal
          direction="bottom"
          delay={0.1}
          className="mt-10 sm:mt-12"
        >
          <div className="flex flex-col gap-3 rounded-2xl border border-black/[0.07] bg-white/75 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.025)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:rounded-[20px] sm:px-6 sm:py-5">
            <div>
              <p className="text-sm font-semibold text-[#262626]">
                Five services. One growth-focused team.
              </p>

              <p className="mt-1 text-xs leading-5 text-[#737373] sm:text-sm">
                Hover over a service to flip the card and explore what we can do
                for you.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-black/45 sm:text-[10px]">
              <span className="h-2 w-2 rounded-full bg-[#8450EE]" />
              Built around your goals
            </div>
          </div>
        </SectionReveal>

        {/* Services grid */}

        <div className="mt-6 grid grid-cols-1 items-stretch gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* Closing card */}

          <SectionReveal
            direction="scale"
            delay={reduceMotion ? 0 : 0.12}
            className="h-full min-w-0"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.3, ease }}
              className="
                group/closing relative isolate
                flex min-h-[300px] h-full flex-col
                justify-between overflow-hidden rounded-[20px]
                border border-[#D6FF09]/70
                bg-[#D6FF09] p-5 text-[#080808]
                shadow-[0_10px_35px_rgba(120,150,0,0.07)]
                sm:min-h-[310px] sm:p-6 lg:min-h-[320px]
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute -right-12 -top-12
                  h-40 w-40 rounded-full bg-white/60 blur-[55px]
                  transition-transform duration-700
                  group-hover/closing:scale-125
                "
              />

              <div className="relative z-10">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/55">
                  One connected system
                </span>

                <h3 className="mt-5 text-[clamp(2rem,3vw,2.6rem)] font-bold leading-[0.95] tracking-[-0.065em]">
                  Good work.
                  <br />
                  Real impact.
                </h3>

                <p className="mt-3 max-w-[280px] text-xs leading-6 text-black/70">
                  Strategy, creativity, and technology working together to move
                  your business forward.
                </p>
              </div>

              <div className="relative z-10 mt-5 flex items-center justify-between gap-3 border-t border-black/15 pt-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-black/60">
                  Let&apos;s build something
                </span>

                <Link
                  href="/contact"
                  aria-label="Contact Nexora Digital"
                  className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    rounded-full bg-[#080808] text-[#D6FF09]
                    transition-transform duration-300 hover:rotate-45
                  "
                >
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </motion.div>
          </SectionReveal>
        </div>

        {/* Bottom CTA */}

        <SectionReveal
          direction="bottom"
          delay={0.1}
          className="mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-end sm:justify-between sm:pt-8">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/45 sm:text-[10px]">
                Have a project in mind?
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-bold tracking-[-0.045em] text-[#171717] sm:text-3xl lg:text-4xl">
                Let&apos;s turn your next idea into progress.
              </h3>
            </div>

            <motion.div
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="
                  group inline-flex w-full shrink-0
                  items-center justify-between gap-5
                  rounded-full bg-[#D6FF09] px-5 py-3.5
                  text-xs font-bold uppercase tracking-[0.08em]
                  text-[#050505] transition-shadow duration-300
                  hover:shadow-[0_10px_35px_rgba(120,150,0,0.18)]
                  sm:w-auto sm:px-6 sm:py-4
                "
              >
                Start a project
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#050505] text-[#D6FF09] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
