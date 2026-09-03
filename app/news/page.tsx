import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Insights | YimiLife News",
  description:
    "Read YimiLife news and insights on medical device OEM/ODM, private label pulse oximeters, blood pressure monitor manufacturing, SpO2 technology and ISO 13485 quality topics.",
  alternates: {
    canonical: "https://www.yimilife.com/news",
  },
  openGraph: {
    title: "Medical Device OEM/ODM Insights | YimiLife News",
    description:
      "YimiLife news and insights for OEM/ODM buyers, including private label medical devices, SpO2 technology, blood pressure monitor manufacturing and ISO 13485 quality topics.",
    url: "https://www.yimilife.com/news",
    siteName: "YimiLife",
    type: "website",
  },
};

type IconProps = {
  className?: string;
};

function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const categories = [
  {
    title: "OEM/ODM Guides",
    description:
      "Practical guides for overseas brands evaluating private label medical device manufacturing, OEM services and ODM project workflows.",
    topics: [
      "How to choose a pulse oximeter OEM/ODM manufacturer",
      "OEM vs ODM for home healthcare monitoring devices",
      "What buyers should prepare before starting a private label project",
    ],
  },
  {
    title: "Product Insights",
    description:
      "Product-focused articles for pulse oximeters, blood pressure monitors and wearable health monitoring device development.",
    topics: [
      "Fingertip pulse oximeter OEM customization options",
      "Upper arm blood pressure monitor OEM project checklist",
      "Wearable SpO2 monitoring and connected health scenarios",
    ],
  },
  {
    title: "Technology Articles",
    description:
      "Technical articles around PulseMatrix™, PI 0.1% low-perfusion, performance under motion conditions and SpO₂ performance across diverse skin pigmentation in pulse oximeter development.",

    topics: [
      "What matters in PI 0.1% low-perfusion technology",
      "Motion artifact rejection in pulse oximeter development",
      "SpO₂ performance across diverse skin pigmentation considerations for SpO2 monitoring",
    ],
  },
  {
    title: "Quality & Regulatory",
    description:
      "Quality and regulatory-oriented articles for ISO 13485 manufacturing, certified model experience, production verification and B2B buyer evaluation.",
    topics: [
      "ISO 13485 medical device manufacturer checklist for OEM buyers",
      "How certified model experience supports OEM/ODM discussions",
      "Fluke testing equipment in pulse oximeter production verification",
    ],
  },
];

const featuredTopics = [
  {
    title: "How to Choose a Pulse Oximeter OEM/ODM Manufacturer",
    tag: "OEM/ODM Guide",
    summary:
      "A buyer-oriented guide covering manufacturing capability, certified model experience, Bluetooth SDK support, UI customization and production verification.",
  },
  {
    title: "How to Choose a Blood Pressure Monitor OEM Manufacturer",
    tag: "Product Insight",
    summary:
      "A practical checklist for evaluating upper arm blood pressure monitor OEM suppliers, quality documentation and private label customization scope.",
  },
  {
    title: "ISO 13485 Medical Device Manufacturer Checklist for OEM Buyers",
    tag: "Quality & Regulatory",
    summary:
      "A structured article topic for buyers comparing medical device OEM/ODM manufacturers by quality system, process control and documentation readiness.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.yimilife.com/news#webpage",
  url: "https://www.yimilife.com/news",
  name: "Medical Device OEM/ODM Insights",
  description:
    "YimiLife news and insights for medical device OEM/ODM buyers, private label brands and healthcare device product teams.",
  publisher: {
    "@type": "Organization",
    name: "Shenzhen YimiLife Technology Co., Ltd.",
    url: "https://www.yimilife.com/",
  },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              News & Insights
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Medical Device OEM/ODM Insights
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Read YimiLife insights on private label medical device
              manufacturing, pulse oximeter OEM/ODM projects, blood pressure
              monitor OEM manufacturing, the PulseMatrix™ Signal Platform and ISO
              13485 quality topics.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/oem-odm"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                View OEM/ODM Service Workflow
                <ArrowIcon className="ml-2" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore OEM/ODM Project Scenarios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Editorial direction
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            A content hub for OEM/ODM buyers and technical evaluators
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            This section is designed to support long-term SEO and GEO content
            development. Future articles will help buyers evaluate OEM/ODM
            partners, compare product customization options, understand
            the PulseMatrix™ Signal Platform and prepare better project inquiries.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {category.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {category.description}
              </p>
              <div className="mt-6 grid gap-3">
                {category.topics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              First article pipeline
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Priority topics for future SEO and GEO articles
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              The first article pipeline should focus on high-intent B2B
              questions from overseas brands, Amazon sellers, regional
              distributors and digital health product teams.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                  {topic.tag}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  {topic.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {topic.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                Turn insights into a project discussion
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Preparing a private label medical device project?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Share your target market, product category, expected quantity,
                customization scope and regulatory expectations. YimiLife can
                evaluate whether your project fits our OEM/ODM manufacturing
                capabilities.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Submit OEM/ODM Requirements
                <ArrowIcon className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
