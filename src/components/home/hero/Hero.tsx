
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobileHero from "./MobileHero";

gsap.registerPlugin(ScrollTrigger);

const phrase = "studio";

function usePrefersReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return reduceMotion;
}

function TypingText({ reduceMotion }: { reduceMotion: boolean }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduceMotion) {
      setText(phrase);
      return;
    }

    let index = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        index += 1;
        setText(phrase.slice(0, index));

        if (index >= phrase.length) {
          deleting = true;
          timeout = setTimeout(tick, 1600);
          return;
        }

        timeout = setTimeout(tick, 130);
        return;
      }

      index -= 1;
      setText(phrase.slice(0, index));

      if (index <= 0) {
        deleting = false;
        timeout = setTimeout(tick, 350);
        return;
      }

      timeout = setTimeout(tick, 65);
    };

    timeout = setTimeout(tick, 300);

    return () => clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <span className="inline-flex min-w-0 items-baseline">
      <span>{text}</span>

      {!reduceMotion && (
        <span
          data-typing-cursor
          aria-hidden="true"
          className="ml-1 inline-block h-[0.75em] w-[3px] translate-y-[0.04em] rounded-full bg-[#d6ff00] sm:ml-2 sm:w-1"
        />
      )}
    </span>
  );
}

export default function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-hero-root]");

    if (!section) return;

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>(
        "[data-hero-reveal]",
        section,
      );

      const floatingItems = gsap.utils.toArray<HTMLElement>(
        "[data-hero-float]",
        section,
      );

      const worldMap = section.querySelector<HTMLElement>("[data-world-map]");
      const line = section.querySelector<HTMLElement>("[data-hero-line]");
      const bottom = section.querySelector<HTMLElement>("[data-hero-bottom]");
      const cursor = section.querySelector<HTMLElement>("[data-typing-cursor]");

      if (reduceMotion) {
        gsap.set(revealItems, {
          autoAlpha: 1,
          y: 0,
          clearProps: "filter,transform",
        });

        gsap.set(floatingItems, { clearProps: "transform" });

        if (worldMap) {
          gsap.set(worldMap, {
            scale: 1,
            opacity: 0.44,
            yPercent: 0,
          });
        }

        if (bottom) gsap.set(bottom, { autoAlpha: 1, y: 0 });
        if (line) gsap.set(line, { xPercent: 0 });
        if (cursor) gsap.set(cursor, { autoAlpha: 1 });

        return;
      }

      gsap.set(revealItems, {
        autoAlpha: 0,
        y: 24,
        filter: "blur(6px)",
      });

      gsap.to(revealItems, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "filter",
      });

      if (worldMap) {
        gsap.to(worldMap, {
          scale: 1.025,
          opacity: 0.48,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(worldMap, {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      floatingItems.forEach((item, index) => {
        gsap.to(item, {
          x: index % 2 === 0 ? -12 : 12,
          y: index % 2 === 0 ? 12 : -12,
          duration: 10 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      if (cursor) {
        gsap.to(cursor, {
          autoAlpha: 0,
          duration: 0.45,
          repeat: -1,
          yoyo: true,
          ease: "steps(1)",
        });
      }

      if (bottom) {
        gsap.fromTo(
          bottom,
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            delay: 0.4,
            ease: "power3.out",
          },
        );
      }

      if (line) {
        gsap.fromTo(
          line,
          { xPercent: -120 },
          {
            xPercent: 350,
            duration: 4.5,
            repeat: -1,
            ease: "none",
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <>
      <section
        id="home"
        data-hero-root
        data-sidebar-theme="dark"
        className="section-with-left-nav relative isolate hidden min-h-screen w-full flex-col overflow-hidden bg-[#050505] text-white sm:flex"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#030303]" />

          <div
            data-world-map
            className="absolute inset-0 overflow-hidden opacity-[0.44] mix-blend-screen"
          >
            <img
              src="/world-map-bg.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_42%,rgba(214,255,0,0.13),transparent_50%)]" />

          <div
            data-hero-float
            className="absolute left-1/2 top-[46%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6ff00]/[0.04] blur-[160px]"
          />

          <div
            data-hero-float
            className="absolute -right-40 -top-24 h-[480px] w-[480px] rounded-full bg-[#d6ff00]/[0.07] blur-[150px]"
          />

          <div
            data-hero-float
            className="absolute -left-40 top-[45%] h-[400px] w-[400px] rounded-full bg-white/[0.035] blur-[140px]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/75" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.6)_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.16)_0.7px,transparent_0.7px)] [background-size:30px_30px] opacity-[0.06]" />

          <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#030303] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1900px] px-6 pt-10 sm:px-8 sm:pt-12 md:px-10 lg:px-14 lg:pt-14 xl:px-16">
          <div data-hero-reveal>
            <Link
              href="/contact"
              className="group inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.035] px-3.5 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/70 backdrop-blur-md transition-colors hover:border-[#d6ff00]/40 hover:text-white sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.17em]"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d6ff00] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d6ff00]" />
              </span>

              <span>Strategy, Design, Development</span>

              <MoveUpRight
                size={14}
                className="shrink-0 text-[#d6ff00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1900px] flex-1 flex-col px-6 pb-7 pt-14 sm:px-8 sm:pt-16 md:px-10 lg:px-14 lg:pb-9 lg:pt-20 xl:px-16">
          <div>
            <div
              data-hero-reveal
              className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-3 sm:flex-nowrap sm:gap-x-4 lg:gap-x-6"
            >
              <h1 className="min-w-0 text-[clamp(2.9rem,7.7vw,8.5rem)] font-bold leading-[0.9] tracking-[-0.075em]">
                Digital agency
              </h1>

              <span className="shrink-0 rounded-xl border border-white/50 px-3 py-1.5 text-sm font-semibold text-white/80 sm:rounded-2xl sm:border-2 sm:px-4 sm:py-2 sm:text-lg lg:px-5 lg:py-2.5 lg:text-2xl">
                Pro
              </span>
            </div>

            <div className="mt-7 grid min-w-0 grid-cols-1 items-start gap-7 sm:mt-8 lg:mt-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-5 xl:gap-8">
              <h2
                data-hero-reveal
                className="min-w-0 max-w-full whitespace-nowrap text-[clamp(4.25rem,9.5vw,10rem)] font-bold leading-[0.85] tracking-[-0.085em] text-[#d6ff00]"
              >
                <TypingText reduceMotion={reduceMotion} />
              </h2>

              <div
                data-hero-reveal
                className="w-full min-w-0 max-w-[560px] lg:ml-0 lg:pt-3 xl:pt-5"
              >
                <p className="max-w-[520px] text-sm font-normal leading-7 text-white/60 sm:text-base sm:leading-7 lg:text-[15px] lg:leading-[1.8]">
                  With every project, we bring{" "}
                  <span className="font-medium text-white">
                    creativity, strategy, and technology
                  </span>{" "}
                  together to solve problems and create digital experiences
                  that{" "}
                  <span className="font-medium text-[#d6ff00]">
                    move businesses forward.
                  </span>
                </p>

                <Link
                  href="/contact"
                  className="group mt-5 inline-flex min-h-12 items-center justify-center gap-4 border-b border-white/20 px-1 py-3 text-sm font-semibold transition-colors duration-300 hover:border-[#d6ff00]/70 sm:mt-6 sm:gap-5"
                >
                  <span>Let&apos;s work together</span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d6ff00] text-black transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            data-hero-bottom
            className="relative mt-auto flex min-h-[125px] items-end justify-between gap-4 pt-12 sm:min-h-[145px] sm:pt-14 lg:min-h-[160px] lg:pt-16"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 text-[10px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-[#d6ff00] sm:gap-3 sm:text-xs sm:tracking-[0.16em]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#d6ff00]/60 group-hover:bg-[#d6ff00]/10 sm:h-10 sm:w-10">
                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </span>

              Explore About
            </Link>

            <div className="ml-auto flex min-w-0 flex-col items-end text-right">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-semibold leading-none tracking-[-0.075em] sm:text-5xl lg:text-6xl">
                  25
                </span>

                <span className="text-3xl font-semibold leading-none tracking-[-0.06em] text-[#d6ff00] sm:text-4xl lg:text-5xl">
                  k+
                </span>
              </div>

              <p className="mt-2 max-w-[190px] text-[10px] leading-5 text-white/45 sm:max-w-none sm:text-xs">
                Projects completed successfully
              </p>
            </div>
          </div>

          <div className="relative mt-5 h-px w-full overflow-hidden bg-white/10 sm:mt-6">
            <div
              data-hero-line
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#d6ff00] to-transparent"
            />
          </div>
        </div>
      </section>

      <MobileHero />
    </>
  );
}
