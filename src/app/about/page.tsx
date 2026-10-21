"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Eye,
  HeartHandshake,
  Target,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Purpose before tactics",
    description:
      "We start by understanding your business goals before choosing a platform, campaign, or technology.",
  },
  {
    icon: Eye,
    title: "Clarity over complexity",
    description:
      "We keep communication simple, explain our decisions, and focus on what actually matters.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership over promises",
    description:
      "We believe in honest expectations, collaborative work, and building trust over time.",
  },
  {
    icon: TrendingUp,
    title: "Progress through learning",
    description:
      "We use insights, feedback, and measurement to find opportunities for continuous improvement.",
  },
];

const capabilities = [
  "Performance marketing",
  "Conversion tracking and analytics",
  "Video and advertising creatives",
  "Website design and development",
];

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <main>
      {/* About Hero */}
      <section
        id="about"
        data-sidebar-theme="light"
        className="section-with-left-nav overflow-hidden bg-surface"
      >
        <motion.div
          className="container section-padding"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={reveal} className="section-label">
            ABOUT NEXORA
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Digital growth starts with
            <span className="text-primary"> the right direction.</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="section-description mt-6 max-w-2xl"
          >
            Nexora Digital brings marketing, creative thinking, analytics,
            and web development together to help businesses build a stronger
            digital presence.
          </motion.p>

          <motion.div variants={reveal}>
            <Link
              href="/contact"
              className="primary-button mt-8 inline-flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
            >
              Get to Know Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section
        id="about-story"
        data-sidebar-theme="light"
        className="section-with-left-nav container section-padding"
      >
        <motion.div
          className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={reveal}>
            <p className="section-label">WHO WE ARE</p>

            <h2 className="section-title mt-3">
              More than individual digital services.
            </h2>
          </motion.div>

          <motion.div
            variants={reveal}
            className="space-y-5 text-base leading-8 text-muted"
          >
            <p>
              A successful digital presence takes more than running ads or
              launching a website. It requires a clear message, the right
              audience, useful creative work, and reliable measurement.
            </p>

            <p>
              That is the thinking behind Nexora Digital. We bring these
              essential pieces together so businesses can approach digital
              growth with greater clarity and purpose.
            </p>

            <p>
              Whether you need to reach new customers, understand campaign
              performance, create engaging content, or improve your website,
              our approach starts with your goals.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section
        id="mission-vision"
        data-sidebar-theme="light"
        className="section-with-left-nav bg-surface"
      >
        <motion.div
          className="container section-padding"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Compass,
                label: "Our mission",
                title: "Make digital growth more purposeful.",
                description:
                  "Help businesses make better digital decisions through thoughtful strategy, effective execution, and meaningful measurement.",
              },
              {
                icon: Eye,
                label: "Our vision",
                title: "Build a more connected digital experience.",
                description:
                  "Bring marketing, creativity, data, and technology together in a way that supports long-term business goals.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.label}
                  variants={reveal}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -6, transition: { duration: 0.25 } }
                  }
                  className="group rounded-2xl border border-border bg-background p-7 transition-colors duration-300 hover:border-primary/40 sm:p-10"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon size={25} />
                  </div>

                  <p className="mt-6 text-sm font-bold uppercase tracking-widest text-primary">
                    {item.label}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-muted">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section
        id="our-values"
        data-sidebar-theme="light"
        className="section-with-left-nav container section-padding"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div variants={reveal} className="mb-12 max-w-2xl">
            <p className="section-label">WHAT GUIDES US</p>

            <h2 className="section-title mt-3">
              The principles behind our work.
            </h2>

            <p className="section-description mt-4">
              A practical approach built on clear thinking, honest
              communication, and continuous improvement.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  variants={reveal}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -5, transition: { duration: 0.25 } }
                  }
                  className="group rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>

                    <span className="text-sm font-semibold text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        data-sidebar-theme="light"
        className="section-with-left-nav bg-surface"
      >
        <motion.div
          className="container section-padding"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <motion.div variants={reveal}>
              <p className="section-label">HOW WE HELP</p>

              <h2 className="section-title mt-3">
                The right skills for your next step.
              </h2>

              <p className="section-description mt-4">
                We connect essential digital capabilities to help you
                create a more consistent customer experience.
              </p>

              <Link
                href="/services"
                className="secondary-button mt-7 inline-flex items-center gap-2 transition-transform duration-300 hover:translate-x-1"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.ul
              variants={stagger}
              className="space-y-5"
            >
              {capabilities.map((capability) => (
                <motion.li
                  key={capability}
                  variants={reveal}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span className="font-medium">{capability}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section
        id="about-cta"
        data-sidebar-theme="dark"
        className="section-with-left-nav container pb-20 sm:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-2xl bg-primary px-6 py-12 text-white sm:px-12 sm:py-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-white/75">
            LET&apos;S CONNECT
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Have a goal? Let&apos;s work towards it.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-white/80">
            Tell us what your business needs and explore the next step
            for your digital presence.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary transition duration-300 hover:-translate-y-1 hover:bg-white/90"
          >
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
