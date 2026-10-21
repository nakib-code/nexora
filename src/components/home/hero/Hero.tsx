"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MobileHero from "./MobileHero";

gsap.registerPlugin(ScrollTrigger);

const phrase = "studio";

/* =========================================================
   REDUCED MOTION
========================================================= */

function usePrefersReducedMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const update = () => {
      setReduceMotion(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return reduceMotion;
}

/* =========================================================
   TYPING TEXT
========================================================= */

function TypingText({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
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
      } else {
        index -= 1;

        setText(phrase.slice(0, index));

        if (index <= 0) {
          deleting = false;
          timeout = setTimeout(tick, 350);
          return;
        }

        timeout = setTimeout(tick, 65);
      }
    };

    timeout = setTimeout(tick, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [reduceMotion]);

  return (
    <span className="inline-flex min-w-0 items-baseline">
      <span>{text}</span>

      {!reduceMotion && (
        <span
          data-typing-cursor
          aria-hidden="true"
          className="
            ml-1
            inline-block
            h-[0.75em]
            w-[3px]
            translate-y-[0.04em]
            rounded-full
            bg-[#d6ff00]
            sm:ml-2
            sm:w-1
          "
        />
      )}
    </span>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section =
      document.querySelector<HTMLElement>(
        "[data-hero-root]",
      );

    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      const revealItems =
        gsap.utils.toArray<HTMLElement>(
          "[data-hero-reveal]",
          section,
        );

      const floatingItems =
        gsap.utils.toArray<HTMLElement>(
          "[data-hero-float]",
          section,
        );

      const worldMap =
        section.querySelector<HTMLElement>(
          "[data-world-map]",
        );

      const line =
        section.querySelector<HTMLElement>(
          "[data-hero-line]",
        );

      const bottom =
        section.querySelector<HTMLElement>(
          "[data-hero-bottom]",
        );

      const cursor =
        section.querySelector<HTMLElement>(
          "[data-typing-cursor]",
        );

      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      if (reduceMotion) {
        gsap.set(revealItems, {
          autoAlpha: 1,
          y: 0,
          clearProps: "filter,transform",
        });

        gsap.set(floatingItems, {
          clearProps: "transform",
        });

        if (worldMap) {
          gsap.set(worldMap, {
            scale: 1,
            opacity: 0.52,
            yPercent: 0,
          });
        }

        if (bottom) {
          gsap.set(bottom, {
            autoAlpha: 1,
            y: 0,
          });
        }

        if (line) {
          gsap.set(line, {
            xPercent: 0,
          });
        }

        if (cursor) {
          gsap.set(cursor, {
            autoAlpha: 1,
          });
        }

        return;
      }

      /* =====================================================
         INITIAL REVEAL
      ===================================================== */

      gsap.set(revealItems, {
        autoAlpha: 0,
        y: 28,
        filter: "blur(8px)",
      });

      gsap.to(revealItems, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "filter",
      });

      /* =====================================================
         WORLD MAP
      ===================================================== */

      if (worldMap) {
        gsap.to(worldMap, {
          scale: 1.025,
          opacity: 0.55,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(worldMap, {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      /* =====================================================
         AMBIENT FLOATING GLOWS
      ===================================================== */

      floatingItems.forEach((item, index) => {
        gsap.to(item, {
          x: index % 2 === 0 ? -18 : 18,
          y: index % 2 === 0 ? 16 : -16,
          duration: 9 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /* =====================================================
         TYPING CURSOR
      ===================================================== */

      if (cursor) {
        gsap.to(cursor, {
          autoAlpha: 0,
          duration: 0.45,
          repeat: -1,
          yoyo: true,
          ease: "steps(1)",
        });
      }

      /* =====================================================
         BOTTOM CONTENT
      ===================================================== */

      if (bottom) {
        gsap.fromTo(
          bottom,
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: 0.45,
            ease: "power3.out",
          },
        );
      }

      /* =====================================================
         MOVING LIME LINE
      ===================================================== */

      if (line) {
        gsap.fromTo(
          line,
          {
            xPercent: -120,
          },
          {
            xPercent: 350,
            duration: 4,
            repeat: -1,
            ease: "none",
          },
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, [reduceMotion]);

  return (
    <>
      {/* =====================================================
          DESKTOP / TABLET HERO
      ====================================================== */}

      <section
        id="home"
        data-hero-root
        data-sidebar-theme="dark"
        className="
          relative
          isolate
          hidden
          min-h-screen
          w-full
          flex-col
          overflow-hidden
          bg-[#050505]
          text-white
          sm:flex
          section-with-left-nav
        "
      >
        {/* =================================================
            BACKGROUND
        ================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-[#030303]" />

          {/* =================================================
              DESKTOP / TABLET WORLD MAP

              Uses:
              /world-map-bg.png

              IMPORTANT:
              This file must be inside /public
          ================================================== */}

          <div
            data-world-map
            className="
              absolute
              inset-0
              overflow-hidden
              opacity-[0.52]
              mix-blend-screen
            "
          >
            <img
              src="/world-map-bg.png"
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
              draggable={false}
            />
          </div>

          {/* =================================================
              MAIN LIME GLOW
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(ellipse_at_60%_42%,rgba(214,255,0,0.16),transparent_48%)]
            "
          />

          {/* =================================================
              CENTER AMBIENT GLOW
          ================================================== */}

          <div
            data-hero-float
            className="
              absolute
              left-1/2
              top-[48%]
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#d6ff00]/[0.045]
              blur-[180px]
            "
          />

          {/* =================================================
              TOP RIGHT GLOW
          ================================================== */}

          <div
            data-hero-float
            className="
              absolute
              -right-40
              -top-20
              h-[550px]
              w-[550px]
              rounded-full
              bg-[#d6ff00]/10
              blur-[150px]
            "
          />

          {/* =================================================
              LEFT GLOW
          ================================================== */}

          <div
            data-hero-float
            className="
              absolute
              -left-40
              top-[42%]
              h-[430px]
              w-[430px]
              rounded-full
              bg-white/[0.05]
              blur-[140px]
            "
          />

          <div className="absolute inset-0 bg-black/20" />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/30
              via-transparent
              to-black/80
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.65)_100%)]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(rgba(255,255,255,0.16)_0.7px,transparent_0.7px)]
              [background-size:28px_28px]
              opacity-[0.08]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(to_bottom,transparent_0%,transparent_49.8%,rgba(255,255,255,0.025)_50%,transparent_50.2%,transparent_100%)]
              [background-size:100%_150px]
              opacity-40
            "
          />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[38%]
              bg-gradient-to-t
              from-[#030303]
              to-transparent
            "
          />
        </div>

        {/* =================================================
            TOP LABEL
        ================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1900px]
            px-9
            pt-16
            lg:px-14
            lg:pt-20
          "
        >
          <div data-hero-reveal>
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.035]
                px-4
                py-2.5
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/70
                backdrop-blur-md
                transition-colors
                hover:border-[#d6ff00]/40
                hover:text-white
              "
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#d6ff00]
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#d6ff00]
                  "
                />
              </span>

              <span>
                Strategy, Design, Development
              </span>

              <MoveUpRight
                size={14}
                className="
                  shrink-0
                  text-[#d6ff00]
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1900px]
            flex-1
            flex-col
            px-9
            pb-10
            pt-20
            lg:px-14
            lg:pt-24
          "
        >
          <div className="flex flex-col">
            <div
              data-hero-reveal
              className="
                flex
                min-w-0
                items-center
                gap-5
                lg:gap-7
              "
            >
              <h1
                className="
                  min-w-0
                  whitespace-nowrap
                  text-8xl
                  font-bold
                  leading-[0.88]
                  tracking-[-0.075em]
                  md:text-9xl
                "
              >
                Digital agency
              </h1>

              <span
                className="
                  shrink-0
                  rounded-2xl
                  border-2
                  border-white/60
                  px-4
                  py-2
                  text-xl
                  font-semibold
                  text-white/80
                  lg:px-5
                  lg:py-2.5
                  lg:text-2xl
                "
              >
                Pro
              </span>
            </div>

            <div
              className="
                mt-9
                grid
                min-w-0
                grid-cols-1
                items-start
                gap-6
                lg:grid-cols-[1.2fr_0.8fr]
                lg:items-center
                lg:gap-6
              "
            >
              <h2
                data-hero-reveal
                className="
                  min-w-0
                  max-w-full
                  whitespace-nowrap
                  text-[clamp(5rem,9.5vw,10.5rem)]
                  font-bold
                  leading-[0.82]
                  tracking-[-0.085em]
                  text-[#d6ff00]
                "
              >
                <TypingText
                  reduceMotion={reduceMotion}
                />
              </h2>

              <div
                data-hero-reveal
                className="
                  relative
                  mt-10
                  w-full
                  max-w-[600px]
                  min-w-0
                  lg:-ml-8
                "
              >
                <p
                  className="
                    max-w-[520px]
                    text-base
                    font-medium
                    leading-7
                    text-white/60
                    lg:text-[15px]
                    lg:leading-6
                  "
                >
                  With every project, we bring
                  creativity, strategy, and technology
                  together to solve problems and create
                  digital experiences that move businesses
                  forward.
                </p>

                <Link
                  href="/contact"
                  className="
                    group
                    mt-6
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-5
                    border-b
                    border-white/20
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:border-white/60
                  "
                >
                  <span>
                    Let&apos;s work together
                  </span>

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-[#d6ff00]
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM
          ================================================== */}

          <div
            data-hero-bottom
            className="
              relative
              mt-auto
              flex
              min-h-[190px]
              items-end
              justify-between
              gap-4
              pt-16
              lg:min-h-[200px]
              lg:pt-20
            "
          >
            <Link
              href="/about"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.16em]
                text-white/50
                transition-colors
                hover:text-[#d6ff00]
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  transition-all
                  duration-300
                  group-hover:border-[#d6ff00]/60
                  group-hover:bg-[#d6ff00]/10
                "
              >
                <ArrowDown
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </span>

              Explore About
            </Link>

            <div
              className="
                ml-auto
                flex
                min-w-0
                flex-col
                items-end
                text-right
              "
            >
              <div className="flex items-baseline gap-1">
                <span
                  className="
                    text-5xl
                    font-semibold
                    leading-none
                    tracking-[-0.075em]
                    lg:text-6xl
                  "
                >
                  25
                </span>

                <span
                  className="
                    text-4xl
                    font-semibold
                    leading-none
                    tracking-[-0.06em]
                    text-[#d6ff00]
                    lg:text-5xl
                  "
                >
                  k+
                </span>
              </div>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-white/45
                "
              >
                Projects completed successfully
              </p>
            </div>
          </div>

          {/* =================================================
              ANIMATED LINE
          ================================================== */}

          <div
            className="
              relative
              mt-7
              h-px
              w-full
              overflow-hidden
              bg-white/10
            "
          >
            <div
              data-hero-line
              className="
                absolute
                inset-y-0
                left-0
                w-1/3
                bg-gradient-to-r
                from-transparent
                via-[#d6ff00]
                to-transparent
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE HERO

          MobileHero internally uses:
          /world-map-bg-m.png
      ====================================================== */}

      <MobileHero />
    </>
  );
}
