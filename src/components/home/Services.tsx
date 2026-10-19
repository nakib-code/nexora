
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/home";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Big ideas.
              <br />
              <span className="text-[#854fee]">
                Thoughtful execution.
              </span>
            </>
          }
          description="Everything your brand needs to look better, work smarter, and create a stronger digital presence."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex min-h-[300px] flex-col rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#854fee]/50 hover:shadow-[0_20px_55px_#26124d0d]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${service.color} transition group-hover:scale-105`}
                  >
                    <Icon size={23} />
                  </span>

                  <span className="text-xs font-extrabold text-gray-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-extrabold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f5f3f9] px-2.5 py-1.5 text-[10px] font-bold text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs font-bold transition group-hover:text-[#854fee]"
                >
                  Discuss your project
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
