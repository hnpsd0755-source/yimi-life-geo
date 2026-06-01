import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "cyan" | "amber" | "emerald" | "slate";

export const metadata: Metadata = {
  title:
    "Medical Device OEM/ODM Manufacturing for Pulse Oximeters & Blood Pressure Monitors | YimiLife",
  description:
    "YimiLife is a medical device OEM/ODM manufacturing partner for overseas healthcare brands, focused on pulse oximeters, blood pressure monitors, private-label customization and production verification under an ISO 13485 quality system.",
  alternates: {
    canonical: "https://www.yimilife.com/",
  },
  openGraph: {
    title:
      "YimiLife Medical Device OEM/ODM Manufacturing for Overseas Healthcare Brands",
    description:
      "Pulse oximeter and blood pressure monitor OEM/ODM manufacturing, private-label customization, production verification and project support under an ISO 13485 quality system.",
    url: "https://www.yimilife.com/",
    siteName: "YimiLife",
    type: "website",
  },
};

const trustPoints = [
  {
    title: "ISO 13485 Manufacturing System",
    text: "Structured quality management for medical device manufacturing and project execution.",
    href: "/about#quality-compliance",
  },
  {
    title: "3,000㎡ Production Facility",
    text: "Focused manufacturing space for pulse oximeter and blood pressure monitor project delivery.",
    href: "/about",
  },
  {
    title: "300,000 Units / Month Capacity",
    text: "Dedicated pulse oximeter production capacity for private-label and OEM/ODM programs.",
    href: "/about#manufacturing",
  },
  {
    title: "25+ Certified-Model Experience",
    text: "Certified-model-based project support for target-market-oriented evaluation.",
    href: "/about#quality-compliance",
  },
  {
    title: "Product-Focused OEM/ODM",
    text: "Pulse oximeters, blood pressure monitors and selected wearable monitoring project directions.",
    href: "#product-families",
  },
];

const productFamilies = [
  {
    title: "Pulse Oximeters",
    status: "Mature core line",
    text: "Fingertip, pediatric, Bluetooth and handheld SpO2 product directions for private-label and OEM/ODM projects.",
    details: ["Fingertip model tracks", "Bluetooth / lithium options", "Handheld YH01 / YH02"],
    href: "/products/pulse-oximeter",
    cta: "View pulse oximeters",
    tone: "cyan" as Tone,
  },
  {
    title: "Blood Pressure Monitors",
    status: "Mature / customizable line",
    text: "Upper-arm BP monitors, Bluetooth models and home healthcare platform directions for brand and distributor projects.",
    details: ["Upper-arm BP models", "Cuff / display options", "Advanced ODM discussion"],
    href: "/products/blood-pressure-monitor",
    cta: "View BP monitors",
    tone: "amber" as Tone,
  },
  {
    title: "Wearable Monitoring",
    status: "Development-stage direction",
    text: "Wearable temperature, SpO2 watch, infant foot SpO2 and sleep-related monitoring concepts for engineering discussion.",
    details: ["Engineering sample discussion", "Bluetooth / low power", "Software integration feasibility"],
    href: "/products/wearable-monitoring",
    cta: "Discuss wearable projects",
    tone: "emerald" as Tone,
  },
];

const customizationLevels = [
  "Private label",
  "UI & firmware settings",
  "Bluetooth / SDK integration",
  "Mold update",
  "ODM project",
];

const evidenceItems = [
  {
    title: "Quality system",
    text: "ISO 13485-based manufacturing and project execution for medical electronic devices.",
  },
  {
    title: "Controlled production",
    text: "IQC, process control, final inspection and batch traceability support sample-to-production consistency.",
  },
  {
    title: "Available documents",
    text: "Product specifications, IFU / label references, certificates and controlled project records can be discussed by model and project scope.",
  },
];

const technologyTags = [
  "Low-perfusion SpO2",
  "Motion artifact handling",
  "Skin-tone-aware design",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.yimilife.com/#organization",
      name: "Shenzhen Yimi Life Technology Co., Ltd.",
      alternateName: "YimiLife",
      url: "https://www.yimilife.com/",
      brand: { "@type": "Brand", name: "YimiLife" },
      description:
        "YimiLife is a medical device OEM/ODM manufacturing partner focused on pulse oximeters, blood pressure monitors and selected wearable monitoring project directions.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.yimilife.com/#website",
      url: "https://www.yimilife.com/",
      name: "YimiLife",
      publisher: { "@id": "https://www.yimilife.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/#webpage",
      url: "https://www.yimilife.com/",
      name: "YimiLife Medical Device OEM/ODM Manufacturing",
      description:
        "Homepage for YimiLife medical device OEM/ODM manufacturing, product families, production verification, private-label support and project intake.",
      isPartOf: { "@id": "https://www.yimilife.com/#website" },
    },
    {
      "@type": "ItemList",
      name: "YimiLife product families",
      itemListElement: productFamilies.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: item.title,
          description: item.text,
          url: `https://www.yimilife.com${item.href}`,
          brand: { "@type": "Brand", name: "YimiLife" },
        },
      })),
    },
  ],
};

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5l4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Badge({ children, tone = "cyan" }: { children: ReactNode; tone?: Tone }) {
  const toneClass = {
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-800",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    slate: "border-slate-200 bg-white text-slate-700",
  }[tone];

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${toneClass}`}
    >
      {children}
    </span>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-3xl">
      <Badge tone="slate">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function ProductIcon({ tone }: { tone: Tone }) {
  const toneClass = {
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    slate: "border-slate-200 bg-slate-50 text-slate-700",
  }[tone];

  return (
    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${toneClass}`}>
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 8.5h10M7 12h7M8 4.5h8a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 16V8A3.5 3.5 0 0 1 8 4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_28%),linear-gradient(135deg,#020617,#0f172a_48%,#164e63)]">
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute left-8 top-16 h-48 w-48 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              Medical Device OEM/ODM Manufacturer
            </div>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Pulse oximeter and blood pressure monitor manufacturing for global healthcare brands
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife develops and manufactures home healthcare monitoring devices for brand owners, distributors and product teams seeking reliable private-label and OEM/ODM support. Our core focus is pulse oximeters and blood pressure monitors, with selected wearable monitoring projects available for engineering discussion.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#product-families"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Product Families
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] bg-white/90 shadow-xl">
                <img
                  src="/homepage/hero-devices.png"
                  alt="YimiLife pulse oximeter and blood pressure monitor product family"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="mx-auto -mt-7 max-w-7xl px-6 lg:px-8">
        <div className="relative grid gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-5">
          {trustPoints.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-3xl p-4 transition hover:bg-cyan-50">
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <CheckIcon className="h-4 w-4" />
              </div>
              <p className="mt-4 text-base font-semibold leading-6 text-slate-950">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Product families */}
      <section id="product-families" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Product Families"
            title="Start from the right product platform."
            text="Choose a mature product line for faster private-label execution, or discuss a development-stage monitoring direction when your project requires software or platform integration."
          />
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Request product specs
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {productFamilies.map((item) => (
            <article key={item.title} className="group flex flex-col rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <ProductIcon tone={item.tone} />
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              <ul className="mt-5 grid gap-2.5">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link href={item.href} className="inline-flex items-center text-sm font-semibold text-cyan-700 transition group-hover:text-cyan-900">
                  {item.cta}
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OEM/ODM */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="border-b border-slate-200 bg-slate-950 p-7 text-white md:p-9 lg:border-b-0 lg:border-r">
              <Badge tone="cyan">OEM/ODM Support</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Clear project paths from private label to ODM.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                YimiLife separates quick branding work, interface settings, Bluetooth / SDK integration, mold update and deeper ODM development so buyers can understand timeline, risk and engineering involvement early.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href="/oem-odm" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
                  Explore OEM/ODM
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Submit requirements
                </Link>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-3 md:grid-cols-5">
                {customizationLevels.map((level, index) => (
                  <div key={level} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-800 shadow-sm">
                      {index + 1}
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-5 text-slate-950">{level}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-cyan-100 bg-cyan-50/70 p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">Early-stage inquiry is acceptable</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    The project form includes a feasibility stage option for buyers still comparing models, customization scope or target-market requirements.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-amber-100 bg-amber-50/70 p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">Developer documentation on request</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Bluetooth, SDK and data-integration discussions can be reviewed with software teams when project requirements are available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and technology */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <Badge tone="slate">Quality & Compliance</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Evidence that helps reduce sourcing risk.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {evidenceItems.map((item) => (
                <article key={item.title} className="rounded-[1.35rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-base font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-sm md:p-8">
            <Badge tone="amber">Technology Driven</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              PulseMatrix™ for SpO2 projects.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              For pulse oximeter programs, PulseMatrix™ supports low-perfusion SpO2 tracking, motion artifact handling and skin-tone-aware signal design under defined product and verification conditions.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {technologyTags.map((tag) => (
                <span key={tag} className="rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold text-amber-100">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/technology" className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">
              View technology page
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-20">
        <div className="rounded-[2rem] bg-cyan-700 p-7 text-white shadow-sm md:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.66fr_0.34fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Tell us your target product and project stage.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-cyan-50 md:text-base">
                Share your product category, target market, expected quantity, customization needs and timeline. YimiLife will review the most suitable product path with your team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-50">
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
