import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "cyan" | "amber" | "slate" | "emerald";

export const metadata: Metadata = {
  title:
    "Medical Device OEM/ODM Manufacturing for Pulse Oximeters & Blood Pressure Monitors | YimiLife",
  description:
    "YimiLife supports overseas healthcare brands with pulse oximeter and blood pressure monitor OEM/ODM manufacturing, private-label customization, production verification and ISO 13485 quality system execution.",
  alternates: {
    canonical: "https://www.yimilife.com/",
  },
  openGraph: {
    title:
      "YimiLife Medical Device OEM/ODM Manufacturing for Pulse Oximeters and Blood Pressure Monitors",
    description:
      "Mature product platforms, private-label customization, production verification and ISO 13485 manufacturing support for overseas healthcare brands.",
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

const quickAnswers = [
  {
    question: "Are you a real manufacturer?",
    answer:
      "YimiLife operates a 3,000㎡ production facility in Shenzhen, focused on medical electronic devices such as pulse oximeters and blood pressure monitors.",
    proof: "Factory-based execution",
  },
  {
    question: "Do you follow a medical device quality system?",
    answer:
      "Manufacturing and project execution are managed under an ISO 13485 quality system.",
    proof: "ISO 13485 system",
  },
  {
    question: "Do you have mature product platforms?",
    answer:
      "YimiLife provides mature pulse oximeter and blood pressure monitor product platforms for private-label and OEM/ODM projects.",
    proof: "Product-platform based",
  },
  {
    question: "How do you support production consistency?",
    answer:
      "Pulse oximeter production includes 100% production-line calibration and verification using Fluke Index 2 clinical simulators where applicable.",
    proof: "Production verification",
  },
  {
    question: "Can small brands start early discussions?",
    answer:
      "YimiLife supports early feasibility discussions, sample evaluation and structured project review for overseas SMEs and healthcare brands.",
    proof: "SME-friendly intake",
  },
];

const productFamilies = [
  {
    title: "Pulse Oximeters",
    status: "Mature Core Product Line",
    description:
      "Fingertip, pediatric, Bluetooth and handheld pulse oximeter directions for private-label and OEM/ODM projects.",
    bullets: [
      "Fingertip product tracks",
      "Bluetooth and lithium battery options",
      "Handheld YH01 / YH02 directions",
      "Production-line SpO2 verification",
    ],
    href: "/products/pulse-oximeter",
    cta: "View Pulse Oximeter Options",
    accent: "cyan" as Tone,
  },
  {
    title: "Blood Pressure Monitors",
    status: "Mature / Customizable Product Line",
    description:
      "Upper-arm blood pressure monitors, Bluetooth BP models and home healthcare platform directions for brand and distributor projects.",
    bullets: [
      "Standard upper-arm BP monitors",
      "Bluetooth connectivity options",
      "Cuff, display and packaging customization",
      "Advanced ODM platform discussion",
    ],
    href: "/products/blood-pressure-monitor",
    cta: "View BP Monitor Options",
    accent: "amber" as Tone,
  },
  {
    title: "Wearable Monitoring",
    status: "Development-Stage Direction",
    description:
      "Wearable temperature, SpO2 watch, infant foot SpO2 and sleep-related monitoring concepts for engineering discussion and software integration projects.",
    bullets: [
      "Development-stage project directions",
      "Engineering sample discussion",
      "Bluetooth and low-power design",
      "Software integration feasibility",
    ],
    href: "/products/wearable-monitoring",
    cta: "Discuss Wearable Projects",
    accent: "emerald" as Tone,
  },
];

const oemSteps = [
  {
    number: "01",
    title: "Requirement Review",
    summary:
      "Clarify product category, target market, expected quantity, timeline and documentation expectations.",
    output: "Initial project brief",
  },
  {
    number: "02",
    title: "Customization Scope",
    summary:
      "Confirm whether the project fits private label, UI and firmware settings, Bluetooth / SDK integration, mold update or deeper ODM development.",
    output: "Proposed customization level",
  },
  {
    number: "03",
    title: "Sample & Verification",
    summary:
      "Prepare samples, confirm visual and functional requirements, and define necessary verification items before mass production.",
    output: "Sample package and review plan",
  },
  {
    number: "04",
    title: "Production & Delivery",
    summary:
      "Move approved projects into controlled manufacturing with production preparation, inspection, traceability and shipment support.",
    output: "Production-ready delivery",
  },
];

const smallBrandSupport = [
  {
    title: "Early feasibility discussion",
    text: "You can contact YimiLife even if your project is still in the evaluation stage.",
  },
  {
    title: "Sample-first evaluation",
    text: "Start with existing model review and sample testing before committing to larger customization.",
  },
  {
    title: "Clear customization boundaries",
    text: "YimiLife separates private label, UI settings, Bluetooth integration, mold update and deeper ODM projects.",
  },
  {
    title: "Documentation-aware support",
    text: "Available documents, labeling, IFU and target-market requirements can be discussed during project review.",
  },
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
      brand: {
        "@type": "Brand",
        name: "YimiLife",
      },
      description:
        "YimiLife is a medical device OEM/ODM manufacturing partner for overseas healthcare brands, focused on pulse oximeters, blood pressure monitors and selected wearable monitoring project directions.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.yimilife.com/#website",
      url: "https://www.yimilife.com/",
      name: "YimiLife",
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/#webpage",
      url: "https://www.yimilife.com/",
      name: "YimiLife Medical Device OEM/ODM Manufacturing",
      description:
        "Homepage for YimiLife medical device OEM/ODM manufacturing, product families, private-label support, production verification and project intake.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
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
          description: item.description,
          url: `https://www.yimilife.com${item.href}`,
          brand: {
            "@type": "Brand",
            name: "YimiLife",
          },
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
    slate: "border-slate-200 bg-slate-100 text-slate-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
  }[tone];

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Badge tone="slate">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}

function ProductSignal({ tone }: { tone: Tone }) {
  const toneClass = {
    cyan: "from-cyan-500/20 via-cyan-400/10 to-slate-950",
    amber: "from-amber-500/20 via-amber-400/10 to-slate-950",
    emerald: "from-emerald-500/20 via-emerald-400/10 to-slate-950",
    slate: "from-slate-500/20 via-slate-400/10 to-slate-950",
  }[tone];

  return (
    <div className={`relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${toneClass} p-5`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.24),transparent_26%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.10),transparent_28%)]" />
      <div className="relative h-36 rounded-[1.1rem] border border-white/10 bg-white/[0.06] p-4 shadow-inner">
        <div className="grid h-full grid-cols-5 items-end gap-2">
          {[58, 82, 42, 72, 50].map((height, index) => (
            <div key={`${height}-${index}`} className="rounded-full bg-white/24" style={{ height: `${height}%` }} />
          ))}
        </div>
        <div className="absolute left-4 right-4 top-1/2 h-px bg-white/20" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
          <span>OEM</span>
          <span>ODM</span>
        </div>
      </div>
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
      <section id="product-families" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <SectionHeading
          eyebrow="Product Families"
          title="Product families for healthcare OEM/ODM projects"
          text="Start from a mature product platform or discuss a development-stage monitoring project depending on your market, timeline and customization needs."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {productFamilies.map((item) => (
            <article key={item.title} className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <ProductSignal tone={item.accent} />
              <div className="flex flex-1 flex-col p-6">
                <Badge tone={item.accent}>{item.status}</Badge>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <ul className="mt-5 grid gap-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-sm font-semibold text-cyan-700 transition group-hover:text-cyan-900"
                  >
                    {item.cta}
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OEM/ODM support */}
      <section id="oem-odm-support" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-xl md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div>
              <Badge tone="cyan">OEM/ODM Support</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                OEM/ODM support from requirement review to production delivery
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                YimiLife supports private-label and custom medical device projects through a structured path covering requirement review,
                customization scope, sample evaluation and controlled production.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/oem-odm"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore OEM/ODM Support
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Submit Project Requirements
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {oemSteps.map((step) => (
                <article key={step.title} className="flex min-h-[260px] flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                      {step.number}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                      Output
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.summary}</p>
                  <div className="mt-auto pt-5">
                    <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-4 py-3">
                      <p className="text-sm font-semibold leading-6 text-cyan-100">{step.output}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Small brand support */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <Badge tone="emerald">Small Brand Support</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Built for small and mid-sized healthcare brands
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Not every project starts with a fixed specification or a large order forecast. YimiLife helps buyers move from early feasibility discussion to sample evaluation and production planning.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Just Evaluating Feasibility? Start Here
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {smallBrandSupport.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <CheckIcon />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer quick answers */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8" aria-labelledby="quick-answers-title">
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <div>
            <Badge tone="amber">Buyer Quick Answers</Badge>
            <h2 id="quick-answers-title" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Quick answers for sourcing and product teams
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Before starting an OEM/ODM discussion, buyers need to know whether the supplier is real,
              focused, capable and structured. YimiLife answers these questions directly.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {quickAnswers.map((item, index) => (
              <article
                key={item.question}
                className={`rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm ${index === 4 ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.question}</h3>
                  <span className="shrink-0 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
                    {item.proof}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-24">
        <div className="rounded-[2.5rem] bg-cyan-700 p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Ready to discuss a medical device OEM/ODM project?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cyan-50">
            Tell us your target market, product category, customization needs and expected timeline. YimiLife will help review the most suitable product path.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-50"
            >
              Submit Project Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request Product Specs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
