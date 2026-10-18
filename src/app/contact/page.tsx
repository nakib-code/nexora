
"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

const services = [
  "Meta Ads",
  "Google Ads",
  "Conversion Tracking",
  "Video Editing",
  "Website Design & Development",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const budget = String(form.get("budget") || "");
    const timeline = String(form.get("timeline") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\nTimeline: ${timeline}\n\nProject details:\n${message}`
    );

    window.location.href =
      `mailto:hello@nexoradigital.example?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-surface">
        <div className="container section-padding">
          <p className="section-label">CONTACT US</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s talk about
            <span className="text-primary"> your next move.</span>
          </h1>

          <p className="section-description mt-6 max-w-2xl">
            Tell us about your business, your goals, and what you want
            to build. We&apos;ll start with the details that matter.
          </p>
        </div>
      </section>

      <section className="container section-padding">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <aside>
            <p className="section-label">GET IN TOUCH</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Good projects start with a conversation.
            </h2>

            <p className="mt-4 leading-7 text-muted">
              Whether you need help with advertising, tracking, creative
              content, or a website, share a little about your project.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-border p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={21} />
                </div>

                <div>
                  <h3 className="font-semibold">Email us</h3>
                  <p className="mt-1 text-sm text-muted">
                    Send us your project details.
                  </p>
                  <a
                    href="mailto:hello@nexoradigital.example"
                    className="mt-2 inline-block break-all text-sm font-semibold text-primary"
                  >
                    hello@nexoradigital.example
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-border p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h3 className="font-semibold">Tell us your goals</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    The more we understand your needs, the easier it is
                    to discuss the right next step.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-surface p-5">
              <p className="text-sm font-semibold">What happens next?</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="shrink-0 text-primary" />
                  We review your project details.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="shrink-0 text-primary" />
                  We discuss your goals and requirements.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={18} className="shrink-0 text-primary" />
                  We explore the next steps together.
                </li>
              </ul>
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-background p-6 sm:p-9">
            <h2 className="text-2xl font-bold tracking-tight">
              Tell us about your project
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted">
              Fill out the form below. Required fields are marked with *.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-surface p-6">
                <CheckCircle2 size={32} className="text-primary" />
                <h3 className="mt-4 text-xl font-bold">
                  Your email app should open.
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Review the prepared message in your email app and send
                  it to complete your inquiry. This website does not
                  submit the form to a server.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Which service do you need? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                    <option value="Multiple Services">
                      Multiple services
                    </option>
                    <option value="Not Sure">
                      Not sure yet
                    </option>
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Estimated budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    >
                      <option value="">Select a budget</option>
                      <option>Under $250</option>
                      <option>$250–$500</option>
                      <option>$500–$1,000</option>
                      <option>$1,000+</option>
                      <option>Need guidance</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Project timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    >
                      <option value="">Select a timeline</option>
                      <option>As soon as possible</option>
                      <option>Within 2 weeks</option>
                      <option>Within a month</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What does your business do, and what would you like help with?"
                    className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm leading-6 outline-none transition focus:border-primary"
                  />
                </div>

                <button type="submit" className="primary-button w-full">
                  Prepare Email <Send size={17} />
                </button>

                <p className="text-xs leading-5 text-muted">
                  Submitting opens your default email app with your
                  project details. Nothing is sent automatically.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="container pb-20 sm:pb-28">
        <div className="rounded-2xl bg-primary px-6 py-10 text-white sm:px-10 sm:py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Not ready to start yet?
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-white/80">
            Explore our services to see how we can support your digital
            marketing and development goals.
          </p>
          <a
            href="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-primary transition hover:bg-white/90"
          >
            Explore Services <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
