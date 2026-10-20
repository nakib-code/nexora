"use client";

import {
  FormEvent,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  details: "",
};

const services = [
  "Facebook / Meta Ads",
  "Google Ads",
  "Conversion Tracking",
  "Video Editing",
  "Website Design & Development",
  "Other",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

/* =========================================================
   INLINE ICONS
========================================================= */

function ArrowIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2v5" />
      <path d="M12 17v5" />
      <path d="m4.93 4.93 3.54 3.54" />
      <path d="m15.53 15.53 3.54 3.54" />
      <path d="M2 12h5" />
      <path d="M17 12h5" />
      <path d="m4.93 19.07 3.54-3.54" />
      <path d="m15.53 8.47 3.54-3.54" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/* =========================================================
   VALIDATION
========================================================= */

function validateForm(form: FormData): FormErrors {
  const errors: FormErrors = {};

  const name = form.name.trim();
  const email = form.email.trim();
  const details = form.details.trim();

  if (!name) {
    errors.name = "Please enter your full name.";
  } else if (name.length < 2) {
    errors.name = "Please enter at least 2 characters.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.service) {
    errors.service = "Please select a service.";
  }

  if (!details) {
    errors.details = "Please tell us a little about your project.";
  } else if (details.length < 20) {
    errors.details =
      "Please provide a little more detail about your project.";
  }

  return errors;
}

/* =========================================================
   CONTACT COMPONENT
========================================================= */

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  /* =======================================================
     GSAP ENTRANCE
  ======================================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>(
        ".contact-reveal",
      );

      const formFields = gsap.utils.toArray<HTMLElement>(
        ".contact-field",
      );

      if (reduceMotion) {
        gsap.set(revealItems, {
          clearProps: "all",
        });

        gsap.set(formFields, {
          clearProps: "all",
        });

        return;
      }

      gsap.set(revealItems, {
        opacity: 0,
        y: 28,
      });

      gsap.set(formFields, {
        opacity: 0,
        y: 18,
      });

      gsap.to(revealItems, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 76%",
          once: true,
        },
      });

      gsap.to(formFields, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.06,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form-panel",
          start: "top 78%",
          once: true,
        },
      });

      /* subtle decorative line */
      gsap.to(".contact-line-draw", {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =======================================================
     FORM CHANGE
  ======================================================= */

  const updateField = (
    field: keyof FormData,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting") return;

    const validationErrors = validateForm(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    /*
     * No verified backend/API route was found in the existing
     * project files.
     *
     * Do NOT pretend the inquiry was sent.
     *
     * Once /api/contact is implemented, this block can become:
     *
     * const response = await fetch("/api/contact", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify(form),
     * });
     *
     * if (!response.ok) throw new Error("Submission failed");
     */

    setStatus("error");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f7f7f5]
        text-[#15131a]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            inset-0
            opacity-[0.34]
            [background-image:linear-gradient(to_right,rgba(20,16,30,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,16,30,0.035)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div className="absolute -left-40 top-[25%] h-[420px] w-[420px] rounded-full bg-[#854fee]/[0.035] blur-3xl" />

        <div className="absolute -right-40 bottom-[10%] h-[480px] w-[480px] rounded-full bg-[#854fee]/[0.04] blur-3xl" />
      </div>

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:gap-20">
          <div>
            <div className="contact-reveal mb-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#854fee]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/45">
                LET&apos;S CONNECT
              </span>
            </div>

            <h2
              id="contact-heading"
              className="
                contact-reveal
                max-w-[900px]
                text-[clamp(2.8rem,7vw,6.8rem)]
                font-bold
                leading-[0.9]
                tracking-[-0.065em]
              "
            >
              Have a Project
              <br />
              <span className="text-[#854fee]">
                in Mind?
              </span>
            </h2>
          </div>

          <p
            className="
              contact-reveal
              max-w-[480px]
              text-[14px]
              leading-7
              text-black/55
              sm:text-[15px]
            "
          >
            Whether you need a website, a creative campaign,
            or better digital tracking, we&apos;d love to hear
            about your goals and explore how we can help.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="
            contact-line-draw
            mt-12
            h-px
            w-full
            origin-left
            scale-x-0
            bg-black/[0.09]
            lg:mt-16
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <div className="relative mx-auto grid w-full max-w-[1500px] gap-10 px-5 pb-24 sm:px-8 sm:pb-32 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:pb-40">
        {/* ===================================================
            LEFT INTRO
        =================================================== */}

        <div className="flex flex-col">
          <div className="contact-reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-[8px] font-bold uppercase tracking-[0.16em] text-black/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#854fee]" />
              Start something meaningful
            </span>
          </div>

          <div className="contact-reveal mt-7">
            <p className="max-w-[480px] text-[15px] leading-7 text-black/55 sm:text-[16px]">
              Good projects start with a conversation. Share
              what you&apos;re trying to build, improve, or solve,
              and we&apos;ll take it from there.
            </p>
          </div>

          {/* service list */}
          <div className="contact-reveal mt-10 border-t border-black/[0.08]">
            <p className="py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
              What we can help with
            </p>

            <div className="divide-y divide-black/[0.07]">
              {[
                "Meta Ads",
                "Google Ads",
                "Conversion Tracking",
                "Video Editing",
                "Website Design & Development",
              ].map((service, index) => (
                <div
                  key={service}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    gap-4
                    py-4
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        grid
                        h-7
                        w-7
                        place-items-center
                        rounded-full
                        bg-white
                        text-[8px]
                        font-bold
                        text-black/30
                        transition-colors
                        duration-300
                        group-hover:bg-[#854fee]
                        group-hover:text-white
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[12px] font-semibold text-black/65 sm:text-[13px]">
                      {service}
                    </span>
                  </div>

                  <ArrowIcon
                    className="
                      text-black/20
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#854fee]
                    "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* creative mini panel */}
          <div
            className="
              contact-reveal
              relative
              mt-10
              min-h-[190px]
              overflow-hidden
              rounded-[24px]
              border
              border-black/[0.07]
              bg-white
              p-6
              shadow-[0_20px_60px_rgba(20,16,30,0.05)]
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-16
                -top-16
                h-40
                w-40
                rounded-full
                border
                border-[#854fee]/10
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -right-7
                -top-7
                h-24
                w-24
                rounded-full
                border
                border-[#854fee]/10
              "
            />

            <div className="relative z-10">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#854fee]/10 text-[#854fee]">
                <SparkIcon />
              </span>

              <p className="mt-7 max-w-[300px] text-[13px] font-semibold leading-6 tracking-[-0.015em] text-black/70">
                One conversation can turn a rough idea into a
                clear digital direction.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#854fee]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-black/30">
                  Nexora Digital
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            FORM
        =================================================== */}

        <div
          className="
            contact-form-panel
            rounded-[28px]
            border
            border-black/[0.08]
            bg-white
            p-5
            shadow-[0_30px_90px_rgba(20,16,30,0.065)]
            sm:p-8
            lg:p-10
          "
        >
          <div className="mb-8 flex items-start justify-between gap-6 border-b border-black/[0.07] pb-6">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                Project inquiry
              </span>

              <h3 className="mt-2 text-2xl font-bold tracking-[-0.045em] sm:text-3xl">
                Tell us about it.
              </h3>
            </div>

            <span className="hidden rounded-full bg-[#854fee]/[0.07] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.13em] text-[#854fee] sm:inline-flex">
              Let&apos;s build
            </span>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* NAME + EMAIL */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="contact-field">
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-black/45"
                >
                  Full Name
                  <span className="ml-1 text-[#854fee]">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name
                      ? "contact-name-error"
                      : undefined
                  }
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    bg-[#fafafa]
                    px-4
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-black/25
                    focus:bg-white
                    focus:ring-4
                    ${
                      errors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-red-500/10"
                        : "border-black/[0.08] focus:border-[#854fee]/50 focus:ring-[#854fee]/10"
                    }
                  `}
                  placeholder="Your name"
                />

                {errors.name && (
                  <p
                    id="contact-name-error"
                    role="alert"
                    className="mt-2 text-[10px] font-medium text-red-500"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact-field">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-black/45"
                >
                  Email Address
                  <span className="ml-1 text-[#854fee]">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  value={form.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email
                      ? "contact-email-error"
                      : undefined
                  }
                  className={`
                    h-13
                    w-full
                    rounded-xl
                    border
                    bg-[#fafafa]
                    px-4
                    text-sm
                    text-black
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-black/25
                    focus:bg-white
                    focus:ring-4
                    ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-500/10"
                        : "border-black/[0.08] focus:border-[#854fee]/50 focus:ring-[#854fee]/10"
                    }
                  `}
                  placeholder="you@example.com"
                />

                {errors.email && (
                  <p
                    id="contact-email-error"
                    role="alert"
                    className="mt-2 text-[10px] font-medium text-red-500"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* COMPANY */}
            <div className="contact-field">
              <label
                htmlFor="contact-company"
                className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-black/45"
              >
                Company or Business Name
                <span className="ml-1 font-normal normal-case tracking-normal text-black/25">
                  optional
                </span>
              </label>

              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={(event) =>
                  updateField("company", event.target.value)
                }
                className="
                  h-13
                  w-full
                  rounded-xl
                  border
                  border-black/[0.08]
                  bg-[#fafafa]
                  px-4
                  text-sm
                  text-black
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-black/25
                  focus:border-[#854fee]/50
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#854fee]/10
                "
                placeholder="Your business"
              />
            </div>

            {/* SERVICE + BUDGET */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="contact-field">
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-black/45"
                >
                  Service Required
                  <span className="ml-1 text-[#854fee]">*</span>
                </label>

                <div className="relative">
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={(event) =>
                      updateField(
                        "service",
                        event.target.value,
                      )
                    }
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={
                      errors.service
                        ? "contact-service-error"
                        : undefined
                    }
                    className={`
                      h-13
                      w-full
                      appearance-none
                      rounded-xl
                      border
                      bg-[#fafafa]
                      px-4
                      pr-10
                      text-sm
                      outline-none
                      transition-all
                      duration-200
                      focus:bg-white
                      focus:ring-4
                      ${
                        form.service
                          ? "text-black"
                          : "text-black/30"
                      }
                      ${
                        errors.service
                          ? "border-red-400 focus:border-red-400 focus:ring-red-500/10"
                          : "border-black/[0.08] focus:border-[#854fee]/50 focus:ring-[#854fee]/10"
                      }
                    `}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/30">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </div>

                {errors.service && (
                  <p
                    id="contact-service-error"
                    role="alert"
                    className="mt-2 text-[10px] font-medium text-red-500"
                  >
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="contact-field">
                <label
                  htmlFor="contact-budget"
                  className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-black/45"
                >
                  Project Budget
                  <span className="ml-1 font-normal normal-case tracking-normal text-black/25">
                    optional
                  </span>
                </label>

                <div className="relative">
                  <select
                    id="contact-budget"
                    name="budget"
                    value={form.budget}
                    onChange={(event) =>
                      updateField(
                        "budget",
                        event.target.value,
                      )
                    }
                    className={`
                      h-13
                      w-full
                      appearance-none
                      rounded-xl
                      border
                      border-black/[0.08]
                      bg-[#fafafa]
                      px-4
                      pr-10
                      text-sm
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#854fee]/50
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#854fee]/10
                      ${
                        form.budget
                          ? "text-black"
                          : "text-black/30"
                      }
                    `}
                  >
                    <option value="">
                      Select a budget
                    </option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/30">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div className="contact-field">
              <label
                htmlFor="contact-details"
                className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-black/45"
              >
                Project Details
                <span className="ml-1 text-[#854fee]">*</span>
              </label>

              <textarea
                id="contact-details"
                name="details"
                rows={6}
                value={form.details}
                onChange={(event) =>
                  updateField(
                    "details",
                    event.target.value,
                  )
                }
                aria-invalid={Boolean(errors.details)}
                aria-describedby={
                  errors.details
                    ? "contact-details-error"
                    : "contact-details-help"
                }
                className={`
                  min-h-[150px]
                  w-full
                  resize-y
                  rounded-xl
                  border
                  bg-[#fafafa]
                  px-4
                  py-4
                  text-sm
                  leading-6
                  text-black
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-black/25
                  focus:bg-white
                  focus:ring-4
                  ${
                    errors.details
                      ? "border-red-400 focus:border-red-400 focus:ring-red-500/10"
                      : "border-black/[0.08] focus:border-[#854fee]/50 focus:ring-[#854fee]/10"
                  }
                `}
                placeholder="Tell us what you're building, what you need help with, your goals, timeline, or anything else we should know."
              />

              {errors.details ? (
                <p
                  id="contact-details-error"
                  role="alert"
                  className="mt-2 text-[10px] font-medium text-red-500"
                >
                  {errors.details}
                </p>
              ) : (
                <p
                  id="contact-details-help"
                  className="mt-2 text-[9px] leading-5 text-black/30"
                >
                  A little context helps us understand your
                  project before we respond.
                </p>
              )}
            </div>

            {/* STATUS */}
            {status === "error" && (
              <div
                role="alert"
                className="
                  rounded-xl
                  border
                  border-amber-200
                  bg-amber-50
                  px-4
                  py-3
                  text-[11px]
                  leading-5
                  text-amber-800
                "
              >
                <strong className="font-semibold">
                  The form is ready, but submission isn&apos;t
                  connected yet.
                </strong>{" "}
                No working contact API or email integration was
                found in the existing project, so your inquiry
                has not been sent.
              </div>
            )}

            {status === "success" && (
              <div
                role="status"
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-emerald-200
                  bg-emerald-50
                  px-4
                  py-3
                  text-[11px]
                  leading-5
                  text-emerald-800
                "
              >
                <span className="mt-0.5">
                  <CheckIcon />
                </span>

                <span>
                  Your project inquiry has been submitted.
                </span>
              </div>
            )}

            {/* SUBMIT */}
            <div className="contact-field pt-1">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="
                  group
                  flex
                  min-h-14
                  w-full
                  items-center
                  justify-between
                  gap-5
                  rounded-full
                  bg-[#17141d]
                  px-5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#854fee]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#854fee]
                  focus-visible:ring-offset-4
                "
              >
                <span>
                  {status === "submitting"
                    ? "Sending..."
                    : "Send Project Inquiry"}
                </span>

                <span
                  className="
                    grid
                    h-9
                    w-9
                    shrink-0
                    place-items-center
                    rounded-full
                    bg-white
                    text-black
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                >
                  {status === "submitting" ? (
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-black/20
                        border-t-black
                      "
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowIcon />
                  )}
                </span>
              </button>

              <p className="mt-4 text-center text-[8px] leading-5 text-black/25">
                By submitting this form, you&apos;re starting a
                conversation about your project. No guaranteed
                results are implied.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* =====================================================
          BOTTOM STRIP
      ===================================================== */}

      <div className="relative border-t border-black/[0.07] bg-white/55">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-5 px-5 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#854fee]/10 text-[#854fee]">
              <MailIcon />
            </span>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-black/30">
                Contact
              </p>

              <p className="mt-0.5 text-[11px] font-medium text-black/55">
                Use the inquiry form above to start a conversation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.14em] text-black/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[#854fee]" />
            Strategy · Creative · Technology
          </div>
        </div>
      </div>
    </section>
  );
}
