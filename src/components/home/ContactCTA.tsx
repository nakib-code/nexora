
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24 pb-20 sm:pb-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#854fee] px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border-[45px] border-white/10" />

          <div className="pointer-events-none absolute bottom-[-100px] right-[22%] h-56 w-56 rounded-full bg-[#d6ff63]/20 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
              <Sparkles size={15} />
              Have a project in mind?
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.065em] sm:text-5xl lg:text-7xl">
              Let&apos;s create something worth remembering.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Tell us what you&apos;re planning. We&apos;ll help you explore
              the right ideas, the right tools, and the next step.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d6ff63] px-6 py-4 text-sm font-extrabold text-[#17151d] transition hover:-translate-y-1 hover:bg-white"
            >
              Let&apos;s Talk
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <span className="pointer-events-none absolute bottom-7 right-8 hidden text-8xl text-white/20 lg:block">
            ✳
          </span>
        </div>
      </div>
    </section>
  );
}
