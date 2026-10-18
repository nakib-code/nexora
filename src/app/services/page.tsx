
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Code2,
  MousePointerClick,
  Play,
  Search,
} from "lucide-react";

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
  return (
    <>
      <section className="bg-surface">
        <div className="container section-padding">
          <p className="section-label">OUR SERVICES</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            The right digital strategy.
            <span className="text-primary"> Real business goals.</span>
          </h1>

          <p className="section-description mt-6 max-w-2xl">
            From performance marketing to website development, we bring
            the essential digital services together to help your business
            move forward.
          </p>

          <Link href="/contact" className="primary-button mt-8">
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="container section-padding">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">WHAT WE DO</p>
          <h2 className="section-title mt-3">
            Services built around your needs.
          </h2>
          <p className="section-description mt-4">
            Choose a service or combine several into a solution that
            fits your business.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>

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
                      <span className="mt-0.5 font-bold text-primary">
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
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container pb-20 sm:pb-28">
        <div className="rounded-2xl bg-primary px-6 py-12 text-white sm:px-12 sm:py-16">
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
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary transition hover:bg-white/90"
          >
            Let&apos;s Talk <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
