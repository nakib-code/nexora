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

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));

    setNotice("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<FormData> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(form.email.trim())) {
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
    "contact-input block w-full min-w-0 rounded-xl border border-black/10 bg-white px-4 py-3.5 text-base text-[#171717] outline-none transition-all duration-300 placeholder:text-black/35 focus:border-[#8057ef] focus:bg-white focus:ring-4 focus:ring-[#8057ef]/10 sm:py-4 sm:text-sm";

  const labelClass =
    "mb-2.5 block text-[10px] font-bold uppercase tracking-[0.16em] text-black/65";

  return (
    <section
      id="contact"
      data-sidebar-theme="light"
      className="section-with-left-nav contact-section relative isolate w-full min-w-0 scroll-mt-20 overflow-x-clip bg-[#FAFAF8] px-4 py-16 text-[#171717] sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-28"
    >
      <style jsx>{`
        .contact-glow {
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
            background-color 300ms ease;
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
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgb(128 87 239 / 20%);
        }

        .contact-button:active {
          transform: translateY(0) scale(0.99);
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
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heading-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow-drift {
          0% {
            transform: translate3d(-8px, -6px, 0) scale(0.96);
          }

          100% {
            transform: translate3d(12px, 12px, 0) scale(1.04);
          }
        }

        @keyframes dot-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgb(128 87 239 / 25%);
          }

          50% {
            box-shadow: 0 0 0 6px rgb(128 87 239 / 0%);
          }
        }

        @media (max-width: 639px) {
          .contact-glow {
            animation-duration: 14s;
          }

          .contact-card,
          .contact-heading {
            animation-duration: 650ms;
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

      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="contact-glow absolute -right-24 -top-16 h-56 w-56 rounded-full bg-[#8057ef]/10 blur-[80px] sm:-right-28 sm:top-[-80px] sm:h-[420px] sm:w-[420px] sm:blur-[110px]" />

        <div className="contact-glow absolute -bottom-20 -left-24 h-56 w-56 rounded-full bg-[#a3c900]/10 blur-[80px] sm:-bottom-36 sm:-left-28 sm:h-[400px] sm:w-[400px] sm:blur-[110px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(128,87,239,0.045),transparent_60%)]" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/[0.025] to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[760px] min-w-0">
        {/* Heading */}
        <div className="contact-heading mb-8 text-center sm:mb-12">
          <div className="mb-5 inline-flex max-w-full items-center justify-center gap-2.5 rounded-full border border-black/[0.08] bg-white/80 px-3.5 py-2.5 shadow-sm sm:px-4">
            <span className="contact-dot h-2 w-2 shrink-0 rounded-full bg-[#8BA900]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/65 sm:text-[10px] sm:tracking-[0.19em]">
              Let&apos;s work together
            </span>
          </div>

          <h2 className="text-[clamp(2.55rem,11vw,5.8rem)] font-bold leading-[0.98] tracking-[-0.075em] sm:leading-[0.94]">
            Have a project
            <br />

            <span className="relative inline-block text-[#8057ef]">
              in mind?

              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-1 h-[3px] w-[72%] rounded-full bg-[#a5c900] sm:-bottom-2 sm:h-1"
              />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[390px] px-1 text-sm leading-7 text-black/55 sm:mt-6 sm:px-0 sm:text-[15px]">
            Have an idea? Tell us about it. Let&apos;s make something
            meaningful together.
          </p>
        </div>

        {/* Contact form card */}
        <div className="contact-card relative w-full min-w-0 rounded-[22px] border border-black/[0.08] bg-white/90 p-4 shadow-[0_18px_65px_rgba(0,0,0,0.055)] backdrop-blur-xl sm:rounded-[28px] sm:p-7 md:p-10">
          <div
            aria-hidden="true"
            className="absolute left-6 right-6 top-0 h-[2px] rounded-b-full bg-gradient-to-r from-[#8057ef] via-[#a58aff] to-[#a5c900] sm:left-10 sm:right-10"
          />

          <div className="mb-6 sm:mb-8">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8057ef] sm:text-[10px]">
              Get in touch
            </p>

            <h3 className="mt-2 text-[23px] font-bold tracking-[-0.05em] text-[#171717] sm:text-[28px]">
              Send us a message.
            </h3>

            <p className="mt-2 text-xs leading-6 text-black/45 sm:text-sm">
              Fill in the details below and tell us about your project.
            </p>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="min-w-0 space-y-5 sm:space-y-6"
          >
            {/* Name */}
            <div className="min-w-0">
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
                  className="mt-2 text-xs text-red-500"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="min-w-0">
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
                  className="mt-2 text-xs text-red-500"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="min-w-0">
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
                className={`${inputClass} min-h-[140px] resize-y leading-7 sm:min-h-[160px] ${
                  errors.message ? "!border-red-400" : ""
                }`}
              />

              {errors.message && (
                <p
                  id="contact-message-error"
                  className="mt-2 text-xs text-red-500"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Status message */}
            {notice && (
              <p
                role="status"
                className="break-words rounded-xl border border-[#8057ef]/20 bg-[#8057ef]/[0.06] px-4 py-3 text-xs leading-6 text-[#514078]"
              >
                {notice}
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="contact-button group flex min-h-[56px] w-full min-w-0 items-center justify-between gap-3 rounded-full border border-black/[0.04] bg-[#8057ef] px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:min-h-[60px] sm:px-6 sm:text-xs"
            >
              <span className="min-w-0 truncate">Send message</span>

              <span className="contact-arrow grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d6ff63] text-[#19171f] sm:h-10 sm:w-10">
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

            <p className="px-1 text-center text-[10px] leading-5 text-black/45">
              Let&apos;s turn your idea into something great.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
