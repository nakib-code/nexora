
import { process } from "@/data/home";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our process"
          title={
            <>
              From first thought
              <br />
              to <span className="text-[#854fee]">final delivery.</span>
            </>
          }
          description="Clear communication and a focused process help us turn a good idea into work you can confidently put out into the world."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border-t-2 border-gray-200 bg-white p-5 pt-6 transition hover:border-[#854fee] sm:p-6"
            >
              <span className="text-xs font-black tracking-[0.16em] text-[#854fee]">
                STEP / {step.number}
              </span>

              <div className="my-7 h-px bg-gray-100" />

              <h3 className="text-xl font-extrabold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
