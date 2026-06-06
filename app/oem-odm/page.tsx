import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Medical Device OEM/ODM Services | Private Label & Customization | YimiLife",
  description:
    "YimiLife provides medical device OEM/ODM services for overseas healthcare brands, including private-label pulse oximeters, blood pressure monitors, customization levels, Bluetooth integration discussion and ISO 13485-based manufacturing execution.",
  alternates: {
    canonical: "https://www.yimilife.com/oem-odm",
  },
  openGraph: {
    title:
      "Medical Device OEM/ODM Services | Private Label & Customization | YimiLife",
    description:
      "Private-label customization, product platform selection, engineering feasibility review and ISO 13485-based manufacturing execution for pulse oximeter and blood pressure monitor projects.",
    url: "https://www.yimilife.com/oem-odm",
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

function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const trustAnchors = [
  "Mature pulse oximeter and blood pressure monitor platforms",
  "Private-label support for logo, packaging, labels and IFU coordination",
  "ISO 13485-based manufacturing execution and traceability",
  "Bluetooth / SDK integration discussion for selected projects",
  "Early feasibility review for small and growing healthcare brands",
];

const customizationLevels = [
  {
    level: "Level 1",
    title: "Private Label Setup",
    text: "Logo, color, product label, retail box, IFU coordination and basic project documentation based on mature product platforms.",
  },
  {
    level: "Level 2",
    title: "Configuration Selection",
    text: "Model selection, display language, accessory set, package combination, target-market documentation scope and sample confirmation.",
  },
  {
    level: "Level 3",
    title: "UI and Bluetooth Adaptation",
    text: "Selected UI behavior, Bluetooth data workflow and SDK-level integration discussion for connected health or app-based projects.",
  },
  {
    level: "Level 4",
    title: "Mold Update and Platform Refinement",
    text: "Feasibility review for housing updates, user interaction changes, mechanical details and platform-level refinements where project volume supports it.",
  },
  {
    level: "Level 5",
    title: "Joint Development Discussion",
    text: "Joint development discussion for wearable platform projects, software integration, sample planning and production readiness evaluation.",
  },
];

const productDirections = [
  {
    title: "Pulse Oximeters",
    href: "/products/pulse-oximeter",
    stage: "Mature core product line",
    text: "Fingertip, pediatric, Bluetooth and handheld SpO2 product platforms for private-label and OEM/ODM projects.",
  },
  {
    title: "Blood Pressure Monitors",
    href: "/products/blood-pressure-monitor",
    stage: "Mature / customizable product line",
    text: "Upper-arm BP monitor project directions for private-label customization, connected health and home healthcare programs.",
  },
  {
    title: "Wearable Monitoring",
    href: "/products/wearable-monitoring",
    stage: "Wearable platform direction",
    text: "Engineering sample and joint development discussion for wearable monitoring products, software integration and production planning.",
  },
];

const workflow = [
  "Project brief review",
  "Product platform and customization scope confirmation",
  "Engineering and documentation feasibility review",
  "Sample preparation and customer confirmation",
  "Pilot run, packaging and verification setup",
  "Mass production under defined quality controls",
];

const requirementItems = [
  "Target market and sales region",
  "Product category and use scenario",
  "Expected monthly or annual quantity",
  "Logo, packaging, label and IFU requirements",
  "Bluetooth, SDK or app integration needs",
  "Certification or documentation expectations",
  "Target price range and timeline",
  "Current project stage and decision concerns",
];

const faqs = [
  {
    question: "Can YimiLife support small healthcare brands?",
    answer:
      "Yes. YimiLife can review early-stage project requirements and help customers clarify product platform, customization depth, documentation scope, sample plan and production feasibility.",
  },
  {
    question: "Does OEM/ODM mean a fully new device from scratch?",
    answer:
      "Not always. Many projects start from mature pulse oximeter or blood pressure monitor platforms, then add private-label, configuration, UI, Bluetooth or packaging requirements. Deeper ODM work depends on feasibility, target market and project volume.",
  },
  {
    question: "Can wearable monitoring projects be ordered as mature products?",
    answer:
      "Wearable monitoring is handled as a targeted platform direction or engineering sample discussion. Configuration, software integration and market requirements need to be reviewed before the project scope is confirmed.",
  },
  {
    question: "How does YimiLife discuss production verification?",
    answer:
      "For applicable pulse oximeter projects, production-line calibration and verification workflows can use Fluke Index 2 clinical simulators under defined product and verification conditions. This is not a clinical validation claim.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.yimilife.com/oem-odm#service",
      name: "Medical Device OEM/ODM Services",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "Medical Device OEM/ODM Manufacturing",
      areaServed: "Global",
      description:
        "Private-label and OEM/ODM support for pulse oximeter and blood pressure monitor projects, including customization level review, Bluetooth integration discussion, documentation support and ISO 13485-based manufacturing execution.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/oem-odm#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function OemOdmPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.52fr_0.48fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              Medical device OEM/ODM services
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Private-label and custom manufacturing support for healthcare brands.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              YimiLife helps overseas healthcare brands evaluate, customize and manufacture mature pulse oximeter and blood pressure monitor platforms. We support practical OEM/ODM work from private label setup to selected engineering adaptation, with clear boundaries for concept validation, software integration and production planning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#customization-levels"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Review Customization Levels
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              What buyers can verify quickly
            </p>
            <div className="mt-5 grid gap-3">
              {trustAnchors.map((item) => (
                <div key={item} className="flex gap-3 rounded-3xl bg-white/[0.07] p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="customization-levels" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Customization boundary
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Five levels of OEM/ODM support.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              Clear customization levels help buyers avoid overpromised projects and match the right product platform, engineering scope and production path.
            </p>
          </div>

          <div className="grid gap-4">
            {customizationLevels.map((item) => (
              <div key={item.level} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                  <span className="w-fit rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {item.level}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Product fit
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Start from the right platform maturity.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-700">
                The fastest path to a reliable B2B project is choosing the correct maturity level before discussing customization depth.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {productDirections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                    {item.stage}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="project-workflow" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Project workflow
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              From early evaluation to controlled production.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              OEM/ODM work should make risk visible early: product fit, customization depth, documentation expectations, sample confirmation and production controls.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-6 text-white">
            <div className="grid gap-4">
              {workflow.map((item, index) => (
                <div key={item} className="grid gap-4 rounded-[1.5rem] bg-white/[0.06] p-4 sm:grid-cols-[auto_1fr] sm:items-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 text-sm font-semibold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="bluetooth-sdk" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.38fr_0.62fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Connected device discussion
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Bluetooth and SDK topics can be reviewed early.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm leading-7 text-slate-700">
              For selected OEM/ODM projects, YimiLife can discuss Bluetooth data transmission, protocol requirements, SDK-level integration needs and app-side data workflow. Scope depends on the product platform, target use case, software requirements and project feasibility.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Wearable monitoring directions are handled as targeted engineering or joint development discussions, helping customers review product configuration, Bluetooth integration and production readiness without implying a ready-for-sale claim.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Requirement checklist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              What to prepare before contacting us.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              A concise project brief helps us review fit and feasibility faster.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Submit Project Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {requirementItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                <span className="text-sm font-medium leading-6 text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Share your OEM/ODM project requirements.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300">
            Whether you already have a target model or are still evaluating supplier fit, YimiLife can help clarify product maturity, customization boundaries, documentation scope and production feasibility.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Start Project Inquiry
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
