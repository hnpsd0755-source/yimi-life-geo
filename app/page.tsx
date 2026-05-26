import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Manufacturer | YimiLife",
  description:
    "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer in Shenzhen, specializing in pulse oximeters, blood pressure monitors and home healthcare monitoring devices for global brands.",
  alternates: {
    canonical: "https://www.yimilife.com/",
  },
  openGraph: {
    title:
      "YimiLife | Medical Device OEM/ODM Manufacturer for Home Healthcare Monitoring",
    description:
      "ISO 13485 medical device OEM/ODM manufacturing for pulse oximeters, blood pressure monitors and wearable health monitoring devices, supported by PulseMatrix™ SpO2 technology.",
    url: "https://www.yimilife.com/",
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
  "3,000 m² Manufacturing Facility",
  "25+ FDA / MDR / NMPA Certified Models",
  "300,000 Units Monthly Pulse Oximeter Capacity",
  "PulseMatrix™ SpO2 Technology Platform",
];

const strengths = [
  {
    title: "OEM/ODM Manufacturing Focus",
    text: "YimiLife is built for private label medical device manufacturing and OEM/ODM projects, not for consumer retail sales.",
    icon: ShieldIcon,
  },
  {
    title: "Engineering and Manufacturing Integration",
    text: "We connect product definition, electronics engineering, software adaptation, Bluetooth SDK support, UI customization, manufacturing and quality documentation.",
    icon: FactoryIcon,
  },
  {
    title: "PulseMatrix™ SpO2 Technology",
    text: "Our SpO2 technology platform supports low perfusion SpO2 monitoring, motion artifact rejection and skin tone accuracy considerations for differentiated pulse oximeter OEM/ODM projects.",
    icon: WaveIcon,
  },
  {
    title: "Quality and Project Discipline",
    text: "We support B2B customers from requirement review and sample confirmation to testing, documentation, pilot production, batch traceability and mass production.",
    icon: DocumentIcon,
  },
];

const productLines = [
  {
    title: "Pulse Oximeters",
    href: "/products/pulse-oximeter",
    cta: "Explore pulse oximeter OEM/ODM manufacturing",
    text: "Fingertip and wearable SpO2 devices supported by PulseMatrix™ technology, private label customization, certified model experience and full-unit Fluke Index 2 production verification.",
  },
  {
    title: "Blood Pressure Monitors",
    href: "/products/blood-pressure-monitor",
    cta: "Explore blood pressure monitor OEM manufacturing",
    text: "Digital and upper arm blood pressure monitor OEM manufacturing support for home healthcare brands, private label customers and regulated medical device projects.",
  },
  {
    title: "Wearable Health Monitoring",
    href: "/products/wearable-monitoring",
    cta: "Explore wearable health monitoring device OEM",
    text: "Wearable SpO2 and connected health monitoring device support for Bluetooth data integration, UI customization and remote patient monitoring scenarios.",
  },
];

const customers = [
  "Medical device brands",
  "Private label medical device companies",
  "OEM/ODM project buyers",
  "Healthcare product importers",
  "Home healthcare distributors",
  "Amazon and independent store sellers",
  "Remote patient monitoring platforms",
  "Digital health companies",
];

const faqs = [
  {
    question: "What type of medical device OEM/ODM projects does YimiLife support?",
    answer:
      "YimiLife supports home healthcare monitoring device OEM/ODM projects, especially pulse oximeters, blood pressure monitors and selected wearable health monitoring devices for global B2B customers.",
  },
  {
    question: "Can YimiLife support private label medical device manufacturing?",
    answer:
      "Yes. YimiLife supports private label medical device manufacturing, including logo, color, packaging, labeling, selected UI interface adaptation, Bluetooth data integration and manufacturing documentation based on project requirements.",
  },
  {
    question: "Is YimiLife a pulse oximeter OEM/ODM manufacturer?",
    answer:
      "Yes. Pulse oximeters are one of YimiLife’s core product categories, with fingertip pulse oximeter model experience, PulseMatrix™ SpO2 technology support, scalable production capacity and Fluke Index 2 production verification.",
  },
  {
    question: "Does YimiLife support blood pressure monitor OEM manufacturing?",
    answer:
      "Yes. YimiLife supports digital and upper arm blood pressure monitor OEM manufacturing for home healthcare brands, private label customers and regulated medical device projects.",
  },
  {
    question: "Does YimiLife operate under ISO 13485?",
    answer:
      "Yes. YimiLife operates under an ISO 13485 quality management system for medical device manufacturing, production process control, quality documentation and batch traceability.",
  },
  {
    question: "How should customers start an OEM/ODM inquiry?",
    answer:
      "Customers can share their target market, product category, expected quantity, customization requirements, regulatory expectations, target price range and project timeline through the contact page for project evaluation.",
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
        "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer in Shenzhen, China, supporting pulse oximeters, blood pressure monitors and wearable health monitoring devices.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shenzhen",
        addressCountry: "CN",
      },
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
      name: "Medical Device OEM/ODM Manufacturer | YimiLife",
      description:
        "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer for pulse oximeters, blood pressure monitors and home healthcare monitoring devices.",
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
      "@type": "Service",
      "@id": "https://www.yimilife.com/#medical-device-oem-odm-service",
      name: "Medical Device OEM/ODM Manufacturing",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "Medical Device OEM/ODM Manufacturing",
      areaServed: "Global",
      description:
        "OEM/ODM manufacturing support for home healthcare monitoring devices, including pulse oximeters, blood pressure monitors and wearable health monitoring products.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/#faq",
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

export default function HomePage() {
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
              Medical Device OEM/ODM Manufacturer
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Medical Device OEM/ODM Manufacturer for Home Healthcare Monitoring
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife helps global healthcare brands develop and manufacture
              home healthcare monitoring devices, including pulse oximeters,
              blood pressure monitors and wearable health monitoring devices
              for OEM/ODM and private label projects.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Backed by an ISO 13485 quality management system, a 3,000 m²
              manufacturing facility, 25+ FDA / MDR / NMPA certified model
              experience and up to 300,000 units monthly pulse oximeter
              capacity, we support customers from product definition to
              controlled mass production.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Submit OEM/ODM Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/technology"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore PulseMatrix™ SpO2 Technology
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Trust anchors
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
                Built for private label and OEM/ODM customers
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                YimiLife is positioned as a medical device OEM/ODM
                manufacturing partner for global brands, importers,
                distributors and connected health companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              B2B positioning
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Medical device OEM/ODM manufacturing for home healthcare brands
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              YimiLife supports medical brands, importers, private label
              customers and connected health companies that need a reliable
              medical device OEM/ODM manufacturer for home healthcare
              monitoring products.
            </p>

            <p>
              Our work covers product categories such as{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturer
              </Link>
              ,{" "}
              <Link
                href="/products/blood-pressure-monitor"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                blood pressure monitor OEM manufacturer
              </Link>{" "}
              and{" "}
              <Link
                href="/products/wearable-monitoring"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                wearable health monitoring device OEM
              </Link>
              .
            </p>

            <p>
              Our goal is to help B2B customers move from product requirements
              and private label customization needs to controlled manufacturing,
              quality documentation and scalable production.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Why YimiLife
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Why medical brands choose YimiLife
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife combines medical electronics engineering, private label
              medical device manufacturing, PulseMatrix™ SpO2 technology and
              ISO 13485 manufacturing discipline to support practical B2B
              medical device projects.
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
              3,000 m² facility with scalable production capability
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              YimiLife operates a 3,000 m² manufacturing facility in Shenzhen,
              supporting medical electronic device OEM/ODM projects from sample
              confirmation and pilot production to scalable mass production.
            </p>

            <p>
              For pulse oximeter manufacturing, monthly capacity reaches up to
              300,000 units. Each pulse oximeter unit is calibrated and verified
              using Fluke Index 2 clinical simulators before shipment to support
              consistent manufacturing quality.
            </p>

            <p>
              Manufacturing control is supported by the{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                ISO 13485 medical device manufacturing quality
              </Link>
              , including incoming inspection, PCBA process control, assembly,
              functional testing, calibration, packaging, labeling and batch
              traceability.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "3,000 m² Manufacturing Facility",
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
              Core home healthcare monitoring device OEM/ODM categories
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              YimiLife’s product portfolio is organized around practical home
              healthcare monitoring categories for OEM/ODM customers, with
              pulse oximeters and blood pressure monitors as the current
              primary product SEO and commercial focus.
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
                  {item.cta}
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
              PulseMatrix™ SpO2 technology supports differentiated pulse oximeter products
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              PulseMatrix™ is YimiLife’s vascular hemodynamic intelligence
              platform for medical-grade SpO2 monitoring. It helps position
              YimiLife beyond basic product assembly and supports stronger
              technical differentiation for SpO2-related OEM/ODM projects.
            </p>

            <p>
              The platform focuses on{" "}
              <Link
                href="/technology/low-perfusion-spo2"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                low perfusion SpO2 technology
              </Link>
              ,{" "}
              <Link
                href="/technology/motion-artifact-rejection"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                motion artifact rejection pulse oximeter technology
              </Link>{" "}
              and{" "}
              <Link
                href="/technology/skin-tone-fairness"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                skin tone accuracy in pulse oximeter development
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
              Explore PulseMatrix™ SpO2 Technology
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
              YimiLife supports customers that need more than a product
              supplier. We work with teams that require engineering discussion,
              private label medical device manufacturing, manufacturing
              reliability, quality documentation and long-term OEM/ODM
              cooperation.
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
              Project discussions may include product configuration, private
              label customization, Bluetooth SDK support, UI interface
              adaptation, packaging, labeling, regulatory expectations, target
              price range and production volume.
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
              Frequently asked questions about medical device OEM/ODM manufacturing
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
            Start your medical device OEM/ODM project with YimiLife
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for an ISO 13485 medical device OEM/ODM manufacturer for
            pulse oximeters, blood pressure monitors or wearable health
            monitoring devices? Share your project requirements with YimiLife’s
            engineering and OEM/ODM team.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Submit OEM/ODM Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View private label medical device manufacturing services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
