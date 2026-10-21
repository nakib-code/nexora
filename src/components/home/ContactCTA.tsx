"use client";

import { useState, type FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [notice, setNotice] = useState("");

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setNotice("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<FormData> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(form.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "Please enter at least 10 characters.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setNotice("");
      return;
    }

    setNotice(
      "Your message is validated, but an email/API connection is needed to send it.",
    );
  };

  const inputClass =
    "contact-input w-full rounded-xl border border-white/[0.10] bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#8057ef] focus:bg-white/[0.065] focus:ring-4 focus:ring-[#8057ef]/15";

  const labelClass =
    "mb-2.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/65";

  return (
    <section
      id="contact"
      data-sidebar-theme="dark"
      className="section-with-left-nav contact-section relative isolate overflow-hidden bg-[#101014] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <style jsx>{`
        .contact-glow {
          will-change: transform;
          animation: glow-drift 10s ease-in-out infinite alternate;
        }

        .contact-card {
          animation: card-enter 850ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .contact-heading {
          animation: heading-enter 750ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .contact-button {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .contact-button::before {
          position: absolute;
          z-index: -1;
          inset: 0;
          content: "";
          background: #6e46df;
          transform: translateX(-102%);
          transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-button:hover::before {
          transform: translateX(0);
        }

        .contact-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgb(128 87 239 / 28%);
        }

        .contact-button:active {
          transform: translateY(-1px) scale(0.99);
        }

        .contact-arrow {
          transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-button:hover .contact-arrow {
          transform: translate(3px, -3px) rotate(45deg);
        }

        .contact-dot {
          animation: dot-pulse 2.4s ease-in-out infinite;
        }

        .contact-input:focus {
          box-shadow: 0 0 0 4px rgb(128 87 239 / 10%);
        }

        @keyframes card-enter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.985);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heading-enter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-drift {
          0% {
            transform: translate3d(-12px, -8px, 0) scale(0.94);
          }

          100% {
            transform: translate3d(18px, 18px, 0) scale(1.08);
          }
        }

        @keyframes dot-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgb(128 87 239 / 35%);
          }

          50% {
            box-shadow: 0 0 0 7px rgb(128 87 239 / 0%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-glow,
          .contact-card,
          .contact-heading,
          .contact-dot {
            animation: none !important;
          }

          .contact-button,
          .contact-button::before,
          .contact-arrow,
          .contact-input {
            transition: none !important;
          }
        }
      `}</style>

      {/* Animated background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="contact-glow absolute -right-28 -top-20 h-[320px] w-[320px] rounded-full bg-[#8057ef]/15 blur-[100px] sm:h-[480px] sm:w-[480px]" />

        <div className="contact-glow absolute -bottom-36 -left-28 h-[300px] w-[300px] rounded-full bg-[#d6ff63]/[0.075] blur-[100px] sm:h-[440px] sm:w-[440px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(128,87,239,0.07),transparent_58%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(0,0,0,0.18))]" />
      </div>

      <div className="mx-auto max-w-[760px]">
        {/* Heading */}
        <div className="contact-heading mb-9 text-center sm:mb-12">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/[0.10] bg-white/[0.035] px-4 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.15)] backdrop-blur-xl">
            <span className="contact-dot h-2 w-2 rounded-full bg-[#d6ff63]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.19em] text-white/75">
              Let&apos;s work together
            </span>
          </div>

          <h2 className="text-[clamp(2.8rem,8vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.075em]">
            Have a project
            <br />

            <span className="relative inline-block text-[#a58aff]">
              in mind?
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-1 h-[3px] w-[72%] rounded-full bg-[#d6ff63] sm:-bottom-2 sm:h-1"
              />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[390px] text-sm leading-7 text-white/50 sm:text-[15px]">
            Have an idea? Tell us about it. Let&apos;s make something
            meaningful together.
          </p>
        </div>

        {/* Form card */}
        <div className="contact-card relative rounded-[24px] border border-white/[0.09] bg-[#19181f]/90 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:rounded-[30px] sm:p-9 md:p-11">
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-0 h-[2px] rounded-b-full bg-gradient-to-r from-[#8057ef] via-[#a58aff] to-[#d6ff63] sm:left-12 sm:right-12"
          />

          <div className="mb-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#a58aff]">
              Get in touch
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-[-0.05em] sm:text-[28px]">
              Send us a message.
            </h3>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="space-y-5 sm:space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Your name *
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Enter your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? "contact-name-error" : undefined
                }
                className={`${inputClass} ${
                  errors.name ? "!border-red-400" : ""
                }`}
              />

              {errors.name && (
                <p
                  id="contact-name-error"
                  className="mt-2 text-xs text-red-400"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email address *
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className={`${inputClass} ${
                  errors.email ? "!border-red-400" : ""
                }`}
              />

              {errors.email && (
                <p
                  id="contact-email-error"
                  className="mt-2 text-xs text-red-400"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Your message *
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Tell us a little about your idea..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className={`${inputClass} min-h-[145px] resize-y leading-7 ${
                  errors.message ? "!border-red-400" : ""
                }`}
              />

              {errors.message && (
                <p
                  id="contact-message-error"
                  className="mt-2 text-xs text-red-400"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status */}
            {notice && (
              <p
                role="status"
                className="rounded-xl border border-[#8057ef]/25 bg-[#8057ef]/[0.08] px-4 py-3 text-xs leading-6 text-white/75"
              >
                {notice}
              </p>
            )}

            {/* Animated button */}
            <button
              type="submit"
              className="contact-button group flex min-h-[58px] w-full items-center justify-between gap-4 rounded-full border border-white/[0.08] bg-[#8057ef] px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:px-6"
            >
              <span>Send message</span>

              <span className="contact-arrow grid h-9 w-9 place-items-center rounded-full bg-[#d6ff63] text-[#19171f]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </button>

            <p className="text-center text-[10px] leading-5 text-white/35">
              Let&apos;s turn your idea into something great.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
