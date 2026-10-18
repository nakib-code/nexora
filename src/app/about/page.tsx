
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
  return (
    <>
      <section className="bg-surface">
        <div className="container section-padding">
          <p className="section-label">ABOUT NEXORA</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Digital growth starts with
            <span className="text-primary"> the right direction.</span>
          </h1>

          <p className="section-description mt-6 max-w-2xl">
            Nexora Digital brings marketing, creative thinking, analytics,
            and web development together to help businesses build a stronger
            digital presence.
          </p>

          <Link href="/contact" className="primary-button mt-8">
            Get to Know Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="container section-padding">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-label">WHO WE ARE</p>

            <h2 className="section-title mt-3">
              More than individual digital services.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted">
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
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container section-padding">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-7 sm:p-10">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Compass size={25} />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-primary">
                Our mission
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Make digital growth more purposeful.
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Help businesses make better digital decisions through
                thoughtful strategy, effective execution, and meaningful
                measurement.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-7 sm:p-10">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye size={25} />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-primary">
                Our vision
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Build a more connected digital experience.
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Bring marketing, creativity, data, and technology together
                in a way that supports long-term business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="mb-12 max-w-2xl">
          <p className="section-label">WHAT GUIDES US</p>

          <h2 className="section-title mt-3">
            The principles behind our work.
          </h2>

          <p className="section-description mt-4">
            A practical approach built on clear thinking, honest
            communication, and continuous improvement.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>

                  <span className="text-sm font-semibold text-muted">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{value.title}</h3>

                <p className="mt-3 leading-7 text-muted">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container section-padding">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="section-label">HOW WE HELP</p>

              <h2 className="section-title mt-3">
                The right skills for your next step.
              </h2>

              <p className="section-description mt-4">
                We connect essential digital capabilities to help you
                create a more consistent customer experience.
              </p>

              <Link href="/services" className="secondary-button mt-7">
                Explore Our Services <ArrowRight size={18} />
              </Link>
            </div>

            <ul className="space-y-5">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <span className="font-medium">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container pb-20 sm:pb-28">
        <div className="rounded-2xl bg-primary px-6 py-12 text-white sm:px-12 sm:py-16">
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
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary transition hover:bg-white/90"
          >
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
