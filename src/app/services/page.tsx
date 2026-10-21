"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Code2,
  MousePointerClick,
  Play,
  Search,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const services = [
  {
    number: "01",
    title: "Meta Ads",
    description:
      "Reach the right people on Facebook and Instagram with audience-focused campaigns designed around your business goals.",
    features: [
      "Campaign strategy and setup",
      "Audience research",
      "Creative testing",
      "Performance optimization",
    ],
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "Google Ads",
    description:
      "Connect with people actively searching for your products or services through carefully planned Google advertising campaigns.",
    features: [
      "Search campaign setup",
      "Keyword research",
      "Ad copy optimization",
      "Conversion-focused campaigns",
    ],
    icon: Search,
  },
  {
    number: "03",
    title: "Conversion Tracking",
    description:
      "Understand what happens after someone clicks your ad with accurate analytics and conversion tracking.",
    features: [
      "Google Analytics 4 setup",
      "Google Tag Manager",
      "Meta Pixel integration",
      "Conversion event tracking",
    ],
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Video Editing",
    description:
      "Turn your ideas and raw footage into engaging video content for social media, advertisements, and your website.",
    features: [
      "Reels and short-form videos",
      "Social media ad creatives",
      "Captions and motion graphics",
      "Brand-focused editing",
    ],
    icon: Play,
  },
  {
    number: "05",
    title: "Website Design & Development",
    description:
      "Build a modern, responsive website that communicates your value clearly and helps visitors take action.",
    features: [
      "Responsive website design",
      "Landing pages",
      "Business websites",
      "Performance optimization",
    ],
    icon: Code2,
  },
];

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 26,
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
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <main>
      {/* Services Hero */}
      <section
        id="services"
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
            OUR SERVICES
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
          >
            The right digital strategy.
            <span className="text-primary"> Real business goals.</span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="section-description mt-6 max-w-2xl"
          >
            From performance marketing to website development, we bring
            the essential digital services together to help your business
            move forward.
          </motion.p>

          <motion.div variants={reveal}>
            <Link
              href="/contact"
              className="primary-button mt-8 inline-flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section
        id="services-list"
        data-sidebar-theme="light"
        className="section-with-left-nav container section-padding"
      >
        <motion.div
          className="mb-12 max-w-2xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={reveal} className="section-label">
            WHAT WE DO
          </motion.p>

          <motion.h2 variants={reveal} className="section-title mt-3">
            Services built around your needs.
          </motion.h2>

          <motion.p
            variants={reveal}
            className="section-description mt-4"
          >
            Choose a service or combine several into a solution that
            fits your business.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={reveal}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.08, rotate: -4 }
                    }
                    transition={{ duration: 0.25 }}
                    className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                  >
                    <Icon size={24} />
                  </motion.div>

                  <span className="text-sm font-semibold text-muted">
                    {service.number}
                  </span>
                </div>

                <h2 className="mt-7 text-xl font-bold tracking-tight">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 font-bold text-primary"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Discuss this service
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* CTA */}
      <section
        id="services-cta"
        data-sidebar-theme="dark"
        className="section-with-left-nav container pb-20 sm:pb-28"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-2xl bg-primary px-6 py-12 text-white sm:px-12 sm:py-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-white/75">
            LET&apos;S WORK TOGETHER
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
            Not sure which service is right for you?
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-white/80">
            Tell us about your business and goals. We can help you
            identify a practical next step.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary transition duration-300 hover:-translate-y-1 hover:bg-white/90"
          >
            Let&apos;s Talk
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
