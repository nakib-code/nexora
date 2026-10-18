import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Meta Ads",
  "Google Ads",
  "Conversion Tracking",
  "Video Editing",
  "Website Design & Development",
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-lg text-white">
                n
              </span>
              <span>
                nexora<span className="text-primary">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
              Digital strategy, performance marketing and creative development
              for businesses ready to grow.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Explore</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link className="hover:text-primary" href="/">Home</Link></li>
              <li><Link className="hover:text-primary" href="/about">About us</Link></li>
              <li><Link className="hover:text-primary" href="/projects">Projects</Link></li>
              <li><Link className="hover:text-primary" href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Our Services</h3>
            <ul className="space-y-3 text-sm text-muted">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    className="hover:text-primary"
                    href="/services"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Have a project?</h3>
            <p className="mb-4 text-sm leading-7 text-muted">
              Tell us about your business and what you want to achieve.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Let&apos;s talk <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Nexora Digital. All rights reserved.
          </p>
          <p>Made with intention, built for growth.</p>
        </div>
      </div>
    </footer>
  );
}