
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
} from "lucide-react";

const categories = [
  "All Articles",
  "Paid Advertising",
  "Analytics",
  "Web Development",
  "Creative",
];

const articles = [
  {
    slug: "meta-ads-for-small-business",
    category: "Paid Advertising",
    title: "How to Build a Meta Ads Strategy for a Small Business",
    excerpt:
      "Learn how to define your audience, choose campaign objectives, and create ads that support real business goals.",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    author: "Nexora Team",
    number: "01",
    color: "bg-blue-50 text-blue-700",
    featured: true,
  },
  {
    slug: "conversion-tracking-guide",
    category: "Analytics",
    title: "Conversion Tracking: What Every Business Should Measure",
    excerpt:
      "Understand the basics of GA4, Google Tag Manager, and tracking the actions that matter to your business.",
    date: "Oct 08, 2026",
    readTime: "7 min read",
    author: "Nexora Team",
    number: "02",
    color: "bg-emerald-50 text-emerald-700",
    featured: false,
  },
  {
    slug: "landing-page-that-converts",
    category: "Web Development",
    title: "What Makes a Landing Page Convert Visitors into Customers?",
    excerpt:
      "Explore the role of clear messaging, page structure, trust signals, and calls to action in landing page design.",
    date: "Oct 04, 2026",
    readTime: "5 min read",
    author: "Nexora Team",
    number: "03",
    color: "bg-violet-50 text-violet-700",
    featured: false,
  },
  {
    slug: "google-ads-budget",
    category: "Paid Advertising",
    title: "How to Think About Your Google Ads Budget",
    excerpt:
      "A practical introduction to campaign budgets, keyword intent, testing, and evaluating advertising performance.",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    author: "Nexora Team",
    number: "04",
    color: "bg-amber-50 text-amber-800",
    featured: false,
  },
  {
    slug: "short-form-video-creative",
    category: "Creative",
    title: "Creating Short-Form Videos That Earn Attention",
    excerpt:
      "Discover how hooks, pacing, captions, and creative testing can make short-form video content more effective.",
    date: "Sep 22, 2026",
    readTime: "4 min read",
    author: "Nexora Team",
    number: "05",
    color: "bg-pink-50 text-pink-700",
    featured: false,
  },
  {
    slug: "website-performance-basics",
    category: "Web Development",
    title: "Website Performance Basics for Growing Businesses",
    excerpt:
      "Learn why loading speed, mobile usability, accessibility, and a clear user journey matter for your website.",
    date: "Sep 16, 2026",
    readTime: "5 min read",
    author: "Nexora Team",
    number: "06",
    color: "bg-cyan-50 text-cyan-800",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All Articles" ||
      article.category === activeCategory;

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <>
      <section className="bg-surface">
        <div className="container section-padding">
          <p className="section-label">THE NEXORA JOURNAL</p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Ideas for your next
            <span className="text-primary"> growth move.</span>
          </h1>

          <p className="section-description mt-6 max-w-2xl">
            Practical insights on digital marketing, conversion tracking,
            creative content, and website development to help your business
            make smarter decisions.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            <BookOpen size={18} className="text-primary" />
            <span>Marketing insights. Practical advice. Clear thinking.</span>
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="grid gap-8 overflow-hidden rounded-2xl border border-border lg:grid-cols-2">
          <div className="flex min-h-64 flex-col justify-center bg-primary p-8 text-white sm:p-10 lg:p-12">
            <span className="w-fit rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Featured article
            </span>

            <p className="mt-6 text-sm text-white/75">
              {featuredArticle.category} · {featuredArticle.readTime}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {featuredArticle.title}
            </h2>

            <p className="mt-4 leading-7 text-white/80">
              {featuredArticle.excerpt}
            </p>

            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              Read the article <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="flex min-h-64 items-center justify-center bg-background p-8 sm:p-10">
            <div className="w-full max-w-sm rounded-xl border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Nexora Insights
                </span>
                <BookOpen size={20} className="text-primary" />
              </div>

              <div className="mt-8 space-y-3">
                <div className="h-3 w-3/4 rounded-full bg-primary/20" />
                <div className="h-3 w-full rounded-full bg-primary/10" />
                <div className="h-3 w-5/6 rounded-full bg-primary/10" />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-lg bg-primary/10" />
                <div className="h-20 rounded-lg bg-primary/20" />
                <div className="h-20 rounded-lg bg-primary/10" />
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted">Learn. Apply. Grow.</span>
                <ArrowUpRight size={17} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-20 sm:pb-28">
        <div className="flex flex-col gap-5">
          <div>
            <p className="section-label">EXPLORE OUR ARTICLES</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Latest insights
            </h2>
          </div>

          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full rounded-lg border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Article categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-background text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex aspect-[16/9] items-center justify-center ${article.color}`}
                >
                  <div className="text-center">
                    <span className="text-6xl font-black tracking-tighter opacity-20">
                      {article.number}
                    </span>
                    <p className="mt-1 text-sm font-bold">
                      {article.category}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary">
                    {article.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="transition group-hover:text-primary"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary"
                  >
                    Read article
                    <ArrowUpRight
                      size={17}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-border bg-surface px-6 py-12 text-center">
            <Search size={28} className="mx-auto text-muted" />
            <h3 className="mt-4 text-lg font-bold">No articles found</h3>
            <p className="mt-2 text-sm text-muted">
              Try another keyword or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All Articles");
              }}
              className="primary-button mt-5"
            >
              Clear filters
            </button>
          </div>
        )}

        <p className="mt-8 text-xs leading-5 text-muted">
          These are sample article listings. Replace the sample content with
          your final, reviewed articles before publishing.
        </p>
      </section>

      <section className="container pb-20 sm:pb-28">
        <div className="rounded-2xl bg-surface px-6 py-10 sm:px-10 sm:py-12">
          <p className="section-label">LET&apos;S GROW TOGETHER</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Want to turn these ideas into action?
          </h2>
          <p className="section-description mt-4 max-w-xl">
            Tell us about your goals and let&apos;s explore how Nexora Digital
            can help.
          </p>
          <Link href="/contact" className="primary-button mt-7">
            Discuss Your Project <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
