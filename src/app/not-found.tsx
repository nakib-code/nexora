
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          404 — Page Not Found
        </p>

        <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Lost your way?
        </h1>

        <p className="mt-5 leading-7 text-muted">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link href="/" className="primary-button mt-8">
          Back to Home <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
