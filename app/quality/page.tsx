import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ISO 13485 Quality System for Medical Device Manufacturing | YimiLife",
  description:
    "YimiLife operates under an ISO 13485 quality management system for medical device OEM/ODM manufacturing, supporting quality control, production verification, calibration, batch traceability and scalable manufacturing.",
  alternates: {
    canonical: "https://www.yimilife.com/quality",
  },
  openGraph: {
    title: "ISO 13485 Quality System for Medical Device Manufacturing | YimiLife",
    description:
      "Explore YimiLife’s ISO 13485 quality system, manufacturing control, Fluke Index 2 calibration, batch traceability and OEM/ODM documentation support.",
    url: "https://www.yimilife.com/quality",
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
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.8-2.9 8.3-7 10-4.1-1.7-7-5.2-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FactoryIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 21h18M5 21V9l5 3V9l5 3V5h4v16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17h1M12 17h1M16 17h1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DocumentIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l5 5v13H7V3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5h5M10 13h6M10 17h6M10 9h1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalibrationIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 18h16M7 18V9M12 18V5M17 18v-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 9l2 2 3-4 3 5 2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const trustAnchors = [
  "ISO 13485 Quality Management System",
  "3,000 m² Manufacturing Facility",
  "25+ FDA / MDR / NMPA Certified Models",
  "300,000 Units Monthly Pulse Oximeter Capacity",
  "100% Fluke Index 2 Calibration & Verification",
];

const qualityControls = [
  {
    title: "Incoming Inspection",
    text: "Material and component inspection supports stable supply quality before production begins.",
    icon: CheckIcon,
  },
  {
    title: "PCBA Process Control",
    text: "PCBA manufacturing is controlled through process checkpoints, functional inspection and production records.",
    icon: FactoryIcon,
  },
  {
    title: "Assembly and Functional Testing",
    text: "Device assembly, display, buttons, Bluetooth functions and product-level behavior are checked according to defined procedures.",
    icon: ShieldIcon,
  },
  {
    title: "Calibration and Verification",
    text: "Pulse oximeter units are calibrated and verified using Fluke Index 2 clinical simulators before shipment.",
    icon: CalibrationIcon,
  },
  {
    title: "Labeling and Packaging Control",
    text: "Packaging, labeling, IFU and customer-specific private label requirements are controlled during production release.",
    icon: DocumentIcon,
  },
  {
    title: "Batch Traceability",
    text: "Production records and batch traceability help OEM/ODM customers manage regulated medical device supply.",
    icon: ShieldIcon,
  },
];

const manufacturingHighlights = [
  "3,000 m² Manufacturing Facility",
  "Up to 300,000 units monthly pulse oximeter capacity",
  "100% Fluke Index 2 calibration and verification for pulse oximeters",
  "Batch traceability and production records",
  "Incoming inspection and process quality control",
  "Packaging, labeling and shipment inspection",
];

const documentationItems = [
  "Product configuration records",
  "Testing and verification records",
  "Calibration and inspection records",
  "Packaging and labeling control records",
  "Batch traceability records",
  "OEM/ODM project communication records",
  "Quality and manufacturing documentation support",
];

const faqs = [
  {
    question: "Does YimiLife operate under ISO 13485?",
    answer:
      "Yes. YimiLife operates under an ISO 13485 quality management system for medical device manufacturing and OEM/ODM project support.",
  },
  {
    question: "What quality controls are applied during manufacturing?",
    answer:
      "YimiLife applies quality control across incoming inspection, PCBA process control, assembly, functional testing, calibration, packaging, labeling and batch traceability.",
  },
  {
    question: "How are pulse oximeters verified before shipment?",
    answer:
      "Each pulse oximeter unit is calibrated and verified using Fluke Index 2 clinical simulators before shipment to support consistent product output and batch discipline.",
  },
  {
    question: "Does Fluke Index 2 calibration mean clinical validation?",
    answer:
      "No. Fluke Index 2 is used for calibration and performance verification as part of production control. It should not be described as human clinical validation.",
  },
  {
    question: "Can YimiLife support OEM/ODM documentation needs?",
    answer:
      "Yes. Depending on project scope, YimiLife can support product configuration records, testing records, calibration records, packaging and labeling control records and batch traceability documentation.",
  },
  {
    question: "Why is quality control important for OEM/ODM medical device projects?",
    answer:
      "For OEM/ODM customers, quality control supports product consistency, regulated market expectations, shipment reliability and long-term brand trust.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.yimilife.com/#organization",
      name: "Shenzhen YimiLife Technology Co., Ltd.",
      alternateName: "YimiLife",
      url: "https://www.yimilife.com/",
      brand: {
        "@type": "Brand",
        name: "YimiLife",
      },
      description:
        "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer in China for pulse oximeters, blood pressure monitors and wearable health monitoring devices.",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/quality#webpage",
      url: "https://www.yimilife.com/quality",
      name: "ISO 13485 Quality System for Medical Device Manufacturing",
      description:
        "YimiLife quality system page covering ISO 13485 manufacturing control, calibration, testing, batch traceability and OEM/ODM documentation support.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "ISO 13485 medical device quality system",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.yimilife.com/quality#quality-service",
      name: "Medical Device Manufacturing Quality Control",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "ISO 13485 Medical Device Manufacturing Quality Control",
      areaServed: "Global",
      description:
        "Quality control support for medical device OEM/ODM manufacturing, including incoming inspection, PCBA control, assembly testing, calibration, labeling, packaging and batch traceability.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/quality#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.yimilife.com/quality#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.yimilife.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Quality",
          item: "https://www.yimilife.com/quality",
        },
      ],
    },
  ],
};

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-40px] h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              ISO 13485 Medical Device Quality System
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              ISO 13485 Quality System for Medical Device Manufacturing
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife operates under an ISO 13485 quality management system
              and applies manufacturing control across incoming inspection,
              PCBA process control, assembly, functional testing, calibration,
              packaging, labeling and batch traceability.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              For{" "}
              <Link
                href="/oem-odm"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                OEM/ODM medical device manufacturing
              </Link>
              , quality is not only a compliance requirement. It is the
              foundation for product consistency, shipment reliability and
              long-term brand trust.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Request Quality Documents
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/oem-odm"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View OEM/ODM Workflow
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Quality trust anchors
            </p>

            <div className="mt-5 grid gap-4">
              {trustAnchors.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-white/10 p-4 text-white"
                >
                  <div className="mt-1 rounded-full bg-cyan-300/20 p-1 text-cyan-200">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium leading-6">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950/40 p-5">
              <p className="text-sm font-medium text-cyan-100">
                Production verification discipline
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                For pulse oximeters, each unit is calibrated and verified using
                Fluke Index 2 clinical simulators before shipment. This is
                production verification, not a substitute for human clinical
                validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Why quality matters
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Medical device OEM/ODM projects require controlled manufacturing
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              For medical brands, selecting an OEM/ODM partner is not only about
              product appearance, cost or delivery speed. A reliable partner
              must control materials, production process, functional testing,
              calibration, labeling, packaging and shipment release.
            </p>

            <p>
              YimiLife’s quality system supports OEM/ODM customers building{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                pulse oximeters
              </Link>
              , blood pressure monitors and{" "}
              <Link
                href="/products/wearable-monitoring"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                wearable health monitoring devices
              </Link>{" "}
              for home healthcare, private label and connected monitoring
              applications.
            </p>

            <p>
              The goal is to help customers move from project requirements to
              consistent production output with practical engineering,
              manufacturing and documentation discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Quality control scope
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Manufacturing quality control across the product lifecycle
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife applies quality control from incoming materials to final
              shipment, helping OEM/ODM customers manage consistency across
              production batches.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {qualityControls.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Pulse oximeter verification
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Full-unit calibration and verification before shipment
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              For pulse oximeter manufacturing, YimiLife applies full-unit
              calibration and verification using Fluke Index 2 clinical
              simulators before shipment. This supports consistent SpO2
              performance output and production discipline across batches.
            </p>

            <p>
              This verification process is connected with YimiLife’s{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 Technology Platform
              </Link>
              , which focuses on low perfusion SpO2 monitoring, motion artifact
              rejection and skin tone fairness.
            </p>

            <p>
              The wording is important: Fluke Index 2 is used for calibration
              and production verification. It should not be described as human
              clinical validation.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-950 p-7 text-white">
            <p className="text-4xl font-semibold">100%</p>
            <p className="mt-2 text-sm font-medium text-cyan-200">
              Fluke Index 2 calibration and verification
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Each pulse oximeter unit is verified before shipment as part of
              production release control.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-4xl font-semibold text-slate-950">25+</p>
            <p className="mt-2 text-sm font-medium text-cyan-700">
              Certified model experience
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Model experience across FDA, MDR and NMPA pathways supports
              OEM/ODM project discussions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-4xl font-semibold text-slate-950">300,000</p>
            <p className="mt-2 text-sm font-medium text-cyan-700">
              Units monthly capacity
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              Scalable pulse oximeter manufacturing capacity for private label
              and regulated medical device projects.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Scalable manufacturing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Manufacturing capacity with batch traceability
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              YimiLife’s 3,000 m² facility and scalable pulse oximeter
              production capacity support OEM/ODM customers from sample
              confirmation to pilot production and mass production.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {manufacturingHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
              >
                <CheckIcon className="h-4 w-4 text-cyan-300" />
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Documentation support
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Quality documentation for OEM/ODM project communication
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              For OEM/ODM customers, quality documentation helps connect product
              requirements, manufacturing control and shipment release. The
              specific documentation scope depends on product configuration,
              target market and project agreement.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documentationItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <DocumentIcon className="h-4 w-4 text-cyan-700" />
                <span className="text-sm font-medium text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              OEM/ODM value
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Quality system as a foundation for long-term cooperation
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              For B2B medical device customers, a quality system is not only a
              document set. It is a practical operating framework that affects
              engineering change control, production consistency, shipment
              reliability and brand risk.
            </p>

            <p>
              YimiLife connects quality control with{" "}
              <Link
                href="/oem-odm"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                OEM/ODM service workflow
              </Link>
              ,{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>{" "}
              and connected-device customization requirements.
            </p>

            <p>
              This helps customers evaluate YimiLife not as a basic assembly
              factory, but as a medical electronics manufacturing partner with
              quality discipline, production verification and engineering
              support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Frequently asked questions about quality and manufacturing
            </h2>
          </div>

          <div className="grid gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
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

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build your OEM/ODM project with ISO 13485 manufacturing support
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for a medical device OEM/ODM partner with quality system
            discipline, scalable manufacturing, production verification and
            batch traceability? Share your project requirements with YimiLife.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Request Quality Documents
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View OEM/ODM Workflow
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
