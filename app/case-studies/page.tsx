import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Case Studies | YimiLife",
  description:
    "Explore YimiLife medical device OEM/ODM case study scenarios for private label pulse oximeters, blood pressure monitors, Bluetooth customization and ISO 13485 manufacturing support.",
  alternates: {
    canonical: "https://www.yimilife.com/case-studies",
  },
  openGraph: {
    title: "Medical Device OEM/ODM Case Studies | YimiLife",
    description:
      "B2B medical device OEM/ODM case study scenarios covering pulse oximeters, blood pressure monitors, connected health customization and quality manufacturing support.",
    url: "https://www.yimilife.com/case-studies",
    siteName: "YimiLife",
    type: "website",
  },
};

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

const caseCards = [
  {
    title: "Private Label Pulse Oximeter OEM Project",
    category: "Pulse Oximeter OEM/ODM",
    summary:
      "An anonymized project scenario for healthcare brands evaluating private label pulse oximeter manufacturing, packaging, labeling, UI adaptation and production verification.",
    outcomes: [
      "Private label product configuration",
      "Packaging and labeling coordination",
      "Fluke Index 2 production verification planning",
    ],
  },
  {
    title: "Blood Pressure Monitor OEM Project for Regional Distribution",
    category: "Blood Pressure Monitor OEM",
    summary:
      "A B2B case scenario showing how a regional distributor can evaluate digital upper arm blood pressure monitor OEM manufacturing and documentation support.",
    outcomes: [
      "Upper arm blood pressure monitor configuration",
      "Private label and packaging support",
      "Manufacturing and quality documentation alignment",
    ],
  },
  {
    title: "Bluetooth Pulse Oximeter Customization",
    category: "Connected Health Customization",
    summary:
      "A connected health project scenario for customers requiring Bluetooth data transmission, SDK-level discussion and UI customization for SpO2 monitoring products.",
    outcomes: [
      "Bluetooth SDK integration discussion",
      "UI interface adaptation scope",
      "Connected health project evaluation",
    ],
  },
  {
    title: "ISO 13485 Manufacturing Support for Home Healthcare Devices",
    category: "Quality & Regulatory Support",
    summary:
      "A quality-oriented project scenario for overseas brands evaluating ISO 13485 manufacturing support, batch traceability and certified model experience.",
    outcomes: [
      "ISO 13485 manufacturing process support",
      "Incoming inspection and production process control",
      "Certified model experience for project discussion",
    ],
  },
];

const faqs = [
  {
    question: "Can YimiLife publish real customer names in case studies?",
    answer:
      "Many OEM/ODM projects require confidentiality. YimiLife can present anonymized case study scenarios that explain product category, customization scope, manufacturing support and quality control without exposing customer identity.",
  },
  {
    question: "What kinds of OEM/ODM case studies are most relevant for buyers?",
    answer:
      "For medical device buyers, the most useful case studies explain product configuration, private label scope, engineering adaptation, documentation support, production verification and transition from pilot production to mass production.",
  },
  {
    question: "How should a buyer use these case studies?",
    answer:
      "Buyers can use these case scenarios to compare their own target market, product category, expected quantity, customization level and regulatory expectations before starting a project discussion with YimiLife.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.yimilife.com/case-studies#webpage",
  url: "https://www.yimilife.com/case-studies",
  name: "Medical Device OEM/ODM Case Studies",
  description:
    "Anonymized medical device OEM/ODM case study scenarios for pulse oximeters, blood pressure monitors and home healthcare monitoring products.",
  publisher: {
    "@type": "Organization",
    name: "Shenzhen YimiLife Technology Co., Ltd.",
    url: "https://www.yimilife.com/",
  },
};

export default function CaseStudiesPage() {
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
              Case Studies
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Medical Device OEM/ODM Case Studies
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Explore anonymized YimiLife OEM/ODM case study scenarios for
              private label pulse oximeters, blood pressure monitors, connected
              health customization and ISO 13485 manufacturing support.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Discuss a Similar OEM/ODM Project
                <ArrowIcon className="ml-2" />
              </Link>
              <Link
                href="/oem-odm"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Private Label Manufacturing Workflow
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {caseCards.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                {item.category}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {item.summary}
              </p>
              <div className="mt-6 grid gap-3">
                {item.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              How case studies support buyer evaluation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              From project scenario to manufacturing discussion
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              For OEM/ODM buyers, case studies should not simply describe a
              finished product. They should explain the project context,
              customization scope, production requirements, quality controls and
              documentation support needed to move from concept to mass
              production.
            </p>
            <p>
              YimiLife uses anonymized project scenarios to help overseas brands
              evaluate whether their pulse oximeter OEM/ODM, blood pressure
              monitor OEM or connected health monitoring project is aligned with
              our manufacturing and engineering capabilities.
            </p>
            <p>
              To start a similar project, share your target market, product
              category, expected quantity, private label scope, regulatory
              expectations and timeline through our{" "}
              <Link
                href="/contact"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                medical device OEM inquiry
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Case study questions from OEM/ODM buyers
            </h2>
          </div>
          <div className="grid gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
