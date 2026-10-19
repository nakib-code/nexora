
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-5 md:grid-cols-[1.1fr_0.65fr] md:items-end">
      <div>
        <p
          className={`mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-purple-300" : "text-primary"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#854fee]" />
          {eyebrow}
        </p>

        <h2
          className={`max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${
            light ? "text-white" : "text-[#17151d]"
          }`}
        >
          {title}
        </h2>
      </div>

      {description && (
        <p
          className={`max-w-md text-sm leading-7 ${
            light ? "text-white/65" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
