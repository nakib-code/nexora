
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

const articles = [
  {
    slug: "meta-ads-for-small-business",
    category: "Paid Advertising",
    title: "How Meta Ads Can Help Small Businesses Grow",
    excerpt:
      "Learn how Facebook and Instagram advertising can help your business reach the right audience and generate meaningful leads.",
    date: "October 15, 2026",
    readTime: "6 min read",
    author: "Nexora Digital Team",
    sections: [
      {
        heading: "Start with a clear business goal",
        paragraphs: [
          "Before launching a campaign, decide what you want to achieve. Your goal might be generating qualified leads, increasing online purchases, or introducing your business to a new audience.",
          "A clear goal helps you choose the right campaign objective and measure whether your advertising is delivering useful results.",
        ],
      },
      {
        heading: "Understand your audience",
        paragraphs: [
          "Think about the people most likely to need your product or service. Consider their interests, location, challenges, and buying behavior.",
          "Start with a focused audience and test different creative ideas. Use campaign data to understand which messages attract the most relevant customers.",
        ],
      },
      {
        heading: "Create useful and engaging ads",
        paragraphs: [
          "Your creative should communicate one clear message. Use a strong opening, explain the value of your offer, and give people a clear next step.",
          "Test different images, videos, headlines, and calls to action. Make changes based on meaningful results rather than assumptions.",
        ],
      },
      {
        heading: "Measure and improve performance",
        paragraphs: [
          "Track results that matter to your business, such as qualified leads, purchases, and cost per conversion. Reach and clicks can provide context, but they do not tell the whole story.",
          "Make sure conversion tracking is configured correctly before using campaign data to make important decisions.",
        ],
      },
    ],
  },
  {
    slug: "conversion-tracking-guide",
    category: "Analytics",
    title: "A Beginner's Guide to Conversion Tracking",
    excerpt:
      "Understand how GA4, Google Tag Manager, and advertising pixels help you measure meaningful customer actions.",
    date: "October 12, 2026",
    readTime: "7 min read",
    author: "Nexora Digital Team",
    sections: [
      {
        heading: "What is conversion tracking?",
        paragraphs: [
          "Conversion tracking measures important actions visitors take on your website. Examples include submitting a contact form, completing a purchase, or requesting a quotation.",
          "These events help you understand whether your website and advertising are contributing to business goals.",
        ],
      },
      {
        heading: "Understand the main tools",
        paragraphs: [
          "Google Analytics 4 helps you analyze website activity and events. Google Tag Manager helps manage tracking tags without repeatedly changing website code.",
          "Advertising platforms may also use their own pixels or conversion tags to attribute actions to campaigns.",
        ],
      },
      {
        heading: "Set up and test your events",
        paragraphs: [
          "Identify the actions you need to measure, implement the appropriate events, and test them before relying on the reports.",
          "Avoid counting the same conversion multiple times. Check consent requirements and privacy obligations that apply to your visitors.",
        ],
      },
      {
        heading: "Use the data to make decisions",
        paragraphs: [
          "Once your tracking is verified, review conversion quality, campaign costs, and trends over time. Use the findings to identify what needs improvement.",
          "Remember that analytics data can be incomplete, so compare it with relevant business records when appropriate.",
        ],
      },
    ],
  },
  {
    slug: "landing-page-that-converts",
    category: "Web Development",
    title: "What Makes a Landing Page Convert?",
    excerpt:
      "Explore the essential elements of a landing page that communicates value and guides visitors toward action.",
    date: "October 9, 2026",
    readTime: "5 min read",
    author: "Nexora Digital Team",
    sections: [
      {
        heading: "Make the main message clear",
        paragraphs: [
          "Visitors should quickly understand what you offer, who it is for, and why it may be useful to them.",
          "Use a specific headline, a concise supporting message, and a clear call to action above the fold where practical.",
        ],
      },
      {
        heading: "Build trust through clarity",
        paragraphs: [
          "Explain your process, pricing approach, and next steps where relevant. Use genuine reviews, verified results, and accurate business information.",
          "Never add invented testimonials or unsupported performance claims to make a page look more convincing.",
        ],
      },
      {
        heading: "Keep the experience simple",
        paragraphs: [
          "Remove unnecessary distractions and ask only for the information you need. Forms should be easy to complete on both mobile and desktop.",
          "Make sure buttons, navigation, and form validation work as expected.",
        ],
      },
      {
        heading: "Test performance and results",
        paragraphs: [
          "Check loading speed, mobile usability, accessibility, and conversion tracking. A visually attractive page also needs to work reliably.",
          "Use real visitor behavior and conversion data to guide improvements over time.",
        ],
      },
    ],
  },
  {
    slug: "google-ads-budget",
    category: "Paid Advertising",
    title: "How to Plan a Google Ads Budget",
    excerpt:
      "Learn how to approach advertising budgets, keyword selection, and campaign measurement before spending.",
    date: "October 6, 2026",
    readTime: "6 min read",
    author: "Nexora Digital Team",
    sections: [
      {
        heading: "Define what success means",
        paragraphs: [
          "Decide whether your campaign is intended to generate leads, drive purchases, or achieve another measurable business outcome.",
          "Your goal and the value of a successful conversion should guide how you evaluate campaign costs.",
        ],
      },
      {
        heading: "Research keywords and intent",
        paragraphs: [
          "Different search terms show different levels of intent. Focus on terms relevant to your offer and landing page.",
          "Use negative keywords and search-term reviews to reduce spend on irrelevant searches.",
        ],
      },
      {
        heading: "Start with a manageable budget",
        paragraphs: [
          "Set a budget your business can afford to test and monitor. Actual results depend on competition, location, offer, landing page quality, and other factors.",
          "Avoid assuming that a larger budget automatically produces better returns.",
        ],
      },
      {
        heading: "Review results regularly",
        paragraphs: [
          "Monitor relevant metrics such as conversion rate, cost per lead, and purchase value when applicable.",
          "Verify tracking and conversion quality before making major budget changes.",
        ],
      },
    ],
  },
  {
    slug: "short-form-video-creative",
    category: "Creative",
    title: "Creating Better Short-Form Video Ads",
    excerpt:
      "A practical framework for making short videos that capture attention and communicate your offer.",
    date: "October 3, 2026",
    readTime: "5 min read",
    author: "Nexora Digital Team",
    sections: [
      {
        heading: "Win attention early",
        paragraphs: [
          "Open with a relevant problem, a useful demonstration, or a compelling visual. The opening should connect naturally to the product or service.",
          "Avoid introductions that delay the message your audience came to see.",
        ],
      },
      {
        heading: "Focus on one message",
        paragraphs: [
          "A short video usually works best when it communicates one key benefit or idea.",
          "Use captions and readable text so viewers can understand the message even when audio is unavailable.",
        ],
      },
      {
        heading: "Show the value",
        paragraphs: [
          "Demonstrate how the product works, explain the service, or show a real use case. Keep claims accurate and relevant.",
          "Match the creative to the audience and platform without losing your brand identity.",
        ],
      },
      {
        heading: "Test creative variations",
        paragraphs: [
          "Try different openings, lengths, formats, and calls to action. Measure results against your campaign goal.",
          "Use the findings to develop the next version instead of relying only on views or likes.",
        ],
      },
    ],
  },
  {
    slug: "website-performance-basics",
    category: "Web Development",
    title: "Website Performance Basics Every Business Should Know",
    excerpt:
      "Discover why speed, mobile usability, and a reliable user experience matter for business websites.",
    date: "September 29, 2026",
    readTime: "6 min read",
    author: "Nexora Digital Team",
    sections: [
      {
        heading: "Why website speed matters",
        paragraphs: [
          "Slow pages can make it harder for visitors to explore your offer or complete an important action.",
          "Performance depends on factors such as image size, JavaScript, server response, fonts, and third-party scripts.",
        ],
      },
      {
        heading: "Optimize images and assets",
        paragraphs: [
          "Use appropriately sized images and modern formats where supported. Avoid loading large assets that visitors do not need immediately.",
          "Review fonts and third-party scripts to identify resources that delay the initial page display.",
        ],
      },
      {
        heading: "Design for mobile visitors",
        paragraphs: [
          "Check your site on smaller screens. Text should be readable, buttons should be easy to tap, and important content should remain accessible.",
          "Test navigation, forms, and checkout flows on real devices where possible.",
        ],
      },
      {
        heading: "Measure before and after",
        paragraphs: [
          "Use performance tools to establish a baseline and compare results after making changes. Test more than once because network and device conditions vary.",
          "Pair technical performance checks with real user behavior and business outcomes.",
        ],
      },
    ],
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(
      (item) =>
        item.slug !== article.slug &&
        item.category === article.category,
    )
    .slice(0, 2);

  return (
    <main>
      <section className="section-padding">
        <div className="container max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={17} />
            Back to Blog
          </Link>

          <div className="mt-10">
            <span className="section-label">{article.category}</span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <p className="section-description mt-6 max-w-3xl text-lg">
              {article.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-border py-5 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} />
                {article.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} />
                {article.readTime}
              </span>

              <span>By {article.author}</span>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              In this article
            </p>

            <ul className="mt-4 space-y-3">
              {article.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#section-${index + 1}`}
                    className="text-sm text-muted transition-colors hover:text-primary sm:text-base"
                  >
                    {String(index + 1).padStart(2, "0")}.{" "}
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <article className="mt-12">
            {article.sections.map((section, index) => (
              <section
                key={section.heading}
                id={`section-${index + 1}`}
                className="mb-10 scroll-mt-28"
              >
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-4 space-y-4 text-base leading-8 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>

          <div className="mt-12 rounded-2xl bg-surface p-7 sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight">
              Ready to grow your business?
            </h2>

            <p className="section-description mt-3">
              Let&apos;s discuss your goals and find the right digital
              strategy for your business.
            </p>

            <Link href="/contact" className="primary-button mt-6">
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </div>

          {relatedArticles.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight">
                Related Articles
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group rounded-xl border border-border p-5 transition-colors hover:border-primary"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {related.category}
                    </span>

                    <h3 className="mt-3 text-lg font-bold leading-snug group-hover:text-primary">
                      {related.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted">
                      {related.excerpt}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read article
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
