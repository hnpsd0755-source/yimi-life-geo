import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shenzhen Medical Device Manufacturer | About YimiLife",
  description:
    "Learn about Shenzhen YimiLife Technology Co., Ltd., a Shenzhen medical device manufacturer with a 3,000 m² facility, ISO 13485 quality system and OEM/ODM manufacturing capabilities.",
  alternates: {
    canonical: "https://www.yimilife.com/about",
  },
  openGraph: {
    title: "Shenzhen Medical Device Manufacturer | About YimiLife",
    description:
      "Learn about Shenzhen YimiLife Technology Co., Ltd., a Shenzhen medical device manufacturer with a 3,000 m² facility, ISO 13485 quality system and OEM/ODM manufacturing capabilities.",
    url: "https://www.yimilife.com/about",
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

function WaveIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 14c2 0 2-8 4-8s2 8 4 8 2-8 4-8 2 8 4 8 2-8 4-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 20h16"
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

const companyFacts = [
  "ISO 13485 Quality Management System",
  "3,000 m² Medical Device Manufacturing Facility",
  "25+ FDA / MDR / NMPA Certified Model Experience",
  "300,000 Units Monthly Pulse Oximeter Capacity",
  "PulseMatrix™ SpO2 Technology Platform",
];

const strengths = [
  {
    title: "Medical Device OEM/ODM Focus",
    text: "YimiLife focuses on home healthcare monitoring devices for OEM/ODM and private label customers, including pulse oximeters, blood pressure monitors and wearable health monitoring products.",
    icon: ShieldIcon,
  },
  {
    title: "Engineering and Manufacturing Integration",
    text: "We connect product definition, electronics engineering, software adaptation, Bluetooth SDK support, UI customization, manufacturing and quality documentation.",
    icon: FactoryIcon,
  },
  {
    title: "PulseMatrix™ SpO2 Technology",
    text: "Our SpO2 technology platform focuses on low perfusion monitoring, motion artifact rejection and SpO2 performance across skin pigmentation for differentiated pulse oximeter projects.",
    icon: WaveIcon,
  },
  {
    title: "OEM/ODM Project Discipline",
    text: "We support B2B customers from requirement review and sample confirmation to testing, documentation, pilot production and mass production.",
    icon: DocumentIcon,
  },
];

const productLines = [
  {
    title: "Pulse Oximeter OEM/ODM",
    href: "/products/pulse-oximeter",
    text: "Fingertip pulse oximeter OEM/ODM manufacturing supported by PulseMatrix™ technology, certified model experience and full-unit Fluke Index 2 production calibration and verification.",
  },
  {
    title: "Blood Pressure Monitor OEM",
    href: "/products/blood-pressure-monitor",
    text: "Digital and upper arm blood pressure monitor OEM manufacturing support for home healthcare, private label and regulated medical device projects.",
  },
  {
    title: "Wearable Health Monitoring Device OEM",
    href: "/products/wearable-monitoring",
    text: "Wearable SpO2 and connected health monitoring device OEM support for Bluetooth data integration, UI customization and remote patient monitoring scenarios.",
  },
];

const customers = [
  "Overseas medical device brands",
  "Private label healthcare companies",
  "OEM/ODM project buyers",
  "Healthcare product importers",
  "Amazon and independent website sellers",
  "Regional home healthcare distributors",
  "Remote patient monitoring platforms",
  "Connected health solution providers",
];

const faqs = [
  {
    question: "Who is YimiLife?",
    answer:
      "YimiLife is a Shenzhen medical device manufacturer supporting home healthcare monitoring device OEM/ODM projects for global B2B customers.",
  },
  {
    question: "What does YimiLife manufacture?",
    answer:
      "YimiLife manufactures pulse oximeters, blood pressure monitors and wearable health monitoring devices for OEM/ODM and private label medical device projects.",
  },
  {
    question: "Does YimiLife operate under ISO 13485?",
    answer:
      "Yes. YimiLife operates under an ISO 13485 quality management system for medical device manufacturing, production process control and OEM/ODM project support.",
  },
  {
    question: "What makes YimiLife different from a basic assembly factory?",
    answer:
      "YimiLife combines medical electronics engineering, PulseMatrix™ SpO2 technology, Bluetooth SDK support, UI customization, ISO 13485 manufacturing control and scalable production capability.",
  },
  {
    question: "Where is YimiLife located?",
    answer:
      "YimiLife is based in Shenzhen, China, a major electronics and medical device manufacturing center, with a 3,000 m² medical device manufacturing facility.",
  },
  {
    question: "Can YimiLife support private label medical device customers?",
    answer:
      "Yes. YimiLife supports private label customers with model selection, logo and packaging coordination, labeling discussion, selected UI adaptation, documentation support and controlled manufacturing.",
  },
  {
    question: "Can YimiLife support international OEM/ODM customers?",
    answer:
      "Yes. YimiLife supports international medical brands, importers, distributors and connected health companies with OEM/ODM project evaluation, manufacturing and quality documentation support.",
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
        "YimiLife is a Shenzhen medical device OEM/ODM manufacturer operating under an ISO 13485 quality system and supporting pulse oximeters, blood pressure monitors and wearable health monitoring devices.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shenzhen",
        addressCountry: "CN",
      },
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.yimilife.com/about#webpage",
      url: "https://www.yimilife.com/about",
      name: "About YimiLife",
      description:
        "About YimiLife, a Shenzhen medical device manufacturer for home healthcare monitoring device OEM/ODM projects.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@id": "https://www.yimilife.com/#organization",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/about#faq",
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
      "@id": "https://www.yimilife.com/about#breadcrumb",
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
          name: "About",
          item: "https://www.yimilife.com/about",
        },
      ],
    },
  ],
};

export default function AboutPage() {
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
              About YimiLife
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Shenzhen Medical Device Manufacturer for Home Healthcare OEM/ODM
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Shenzhen YimiLife Technology Co., Ltd. is a medical electronic
              device OEM/ODM manufacturer supporting global B2B customers with
              pulse oximeters, blood pressure monitors and wearable health
              monitoring devices.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              We focus on home healthcare monitoring products and combine medical electronics engineering, ISO 13485 manufacturing control, scalable production, private label project support, quality documentation and{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 technology
              </Link>{" "}
              support.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/oem-odm"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                View Private Label Medical Device Manufacturing
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact YimiLife for OEM/ODM inquiries
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Company facts
            </p>

            <div className="mt-5 grid gap-4">
              {companyFacts.map((item) => (
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
                Built for B2B medical brands
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                YimiLife is positioned as a B2B OEM/ODM manufacturing partner,
                not a consumer-facing healthcare product brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Company positioning
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Shenzhen medical device manufacturer focused on OEM/ODM cooperation
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              YimiLife supports medical brands, importers, private label customers and connected health companies that need a reliable Shenzhen medical device manufacturer for home healthcare monitoring products.
            </p>

            <p>
              Our work covers product categories such as{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>
              ,{" "}
              <Link
                href="/products/blood-pressure-monitor"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                blood pressure monitor OEM/ODM manufacturing
              </Link>{" "}
              and{" "}
              <Link
                href="/products/wearable-monitoring"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                wearable health monitoring devices
              </Link>
              .
            </p>

            <p>
              Our goal is to help B2B customers move from product requirements and customization needs to controlled manufacturing, quality documentation, private label medical device manufacturing and scalable production.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Core strengths
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Why YimiLife is built for medical device OEM/ODM projects
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife combines engineering capability, manufacturing discipline and ISO 13485 quality system thinking to support practical B2B medical device OEM/ODM projects.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => {
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
              Manufacturing base
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              3,000 m² medical device manufacturing facility in Shenzhen
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              YimiLife operates a 3,000 m² medical device manufacturing facility in Shenzhen, supporting medical electronic device OEM/ODM projects from sample confirmation and pilot production to scalable mass production.
            </p>

            <p>
              For pulse oximeter manufacturing, monthly capacity reaches up to 300,000 units. Each pulse oximeter unit is calibrated and verified using Fluke Index 2 clinical simulators before shipment to support consistent production output.
            </p>

            <p>
              Manufacturing control is supported by the{" "}
              <Link
                href="/about#quality-compliance"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                ISO 13485 medical device manufacturing quality system
              </Link>
              , including incoming inspection, PCBA process control, assembly,
              functional testing, calibration, packaging, labeling and batch
              traceability.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "3,000 m² Medical Device Manufacturing Facility",
            "300,000 Units Monthly Pulse Oximeter Capacity",
            "100% Fluke Index 2 Calibration & Verification",
            "Batch Traceability and Quality Records",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <CheckIcon className="h-5 w-5 text-cyan-700" />
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-900">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Product portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Pulse oximeters, blood pressure monitors and wearable monitoring devices
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              YimiLife’s product portfolio is organized around practical home healthcare monitoring categories for OEM/ODM and private label customers.
            </p>
          </div>

          <div className="grid gap-5">
            {productLines.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl bg-white/10 p-6 transition hover:bg-white/15"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
                <div className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300">
                  Explore OEM/ODM product line
                  <ArrowIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Technology platform
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              PulseMatrix™ technology supports differentiated SpO2 products
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              PulseMatrix™ is YimiLife’s vascular hemodynamic intelligence
              platform for medical-grade SpO2 monitoring. It helps position YimiLife beyond basic product assembly and supports stronger technical
              differentiation for SpO2-related OEM/ODM projects.
            </p>

            <p>
              The platform supports OEM/ODM customers with{" "}
              <Link
                href="/technology#low-perfusion"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                low perfusion SpO2 monitoring
              </Link>
              ,{" "}
              <Link
                href="/technology#motion-artifact"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                motion artifact rejection
              </Link>{" "}
              and{" "}
              <Link
                href="/technology#skin-pigmentation"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                SpO2 performance across skin pigmentation
              </Link>
              .
            </p>

            <p>
              This technology platform supports both fingertip pulse oximeter
              projects and wearable SpO2 monitoring projects for connected
              health applications.
            </p>

            <Link
              href="/technology"
              className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Explore PulseMatrix™ Technology
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Who we serve
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Built for global B2B medical device and private label customers
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife supports customers that need more than a product supplier. We work with teams that require engineering discussion, manufacturing reliability, quality documentation and long-term OEM/ODM cooperation with a Shenzhen medical device manufacturer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {customers.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <CheckIcon className="h-4 w-4 text-cyan-700" />
                <span className="text-sm font-medium text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              OEM/ODM cooperation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              From requirement review to controlled mass production
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              YimiLife’s{" "}
              <Link
                href="/oem-odm"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                private label medical device manufacturing workflow
              </Link>{" "}
              helps customers move from initial product requirements to
              engineering evaluation, sample confirmation, testing,
              documentation, pilot production and mass production.
            </p>

            <p>
              Project discussions may include product configuration, private label customization, Bluetooth SDK support, UI interface adaptation, packaging, labeling, regulatory expectations and production volume.
            </p>

            <p>
              This structured approach helps customers evaluate feasibility,
              customization depth, manufacturing readiness and long-term supply
              cooperation.
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
              Frequently asked questions about YimiLife
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

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Work with a Shenzhen medical device OEM/ODM manufacturer
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for an ISO 13485 Shenzhen medical device manufacturer for pulse oximeters, blood pressure monitors or wearable health monitoring devices? Share your OEM/ODM project requirements with YimiLife.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Contact YimiLife for OEM/ODM inquiries
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Private Label Medical Device Manufacturing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
