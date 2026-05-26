import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blood Pressure Monitor OEM Manufacturer | YimiLife",
  description:
    "YimiLife offers blood pressure monitor OEM manufacturing, private label customization and digital upper arm blood pressure monitor solutions for global healthcare brands.",
  alternates: {
    canonical: "https://www.yimilife.com/products/blood-pressure-monitor",
  },
  openGraph: {
    title: "Blood Pressure Monitor OEM Manufacturer | YimiLife",
    description:
      "Blood pressure monitor OEM manufacturing, private label customization and digital upper arm blood pressure monitor solutions for global healthcare brands.",
    url: "https://www.yimilife.com/products/blood-pressure-monitor",
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

function PressureIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21a8 8 0 100-16 8 8 0 000 16z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 13l4-4M8 17h8M12 5V3"
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

function BluetoothIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7l10 10-5 4V3l5 4L7 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const highlights = [
  "ISO 13485 Quality Management System",
  "Blood Pressure Monitor OEM Manufacturer",
  "Private Label Blood Pressure Monitor Support",
  "Custom Digital Upper Arm BP Monitor Projects",
  "Manufacturing, Testing and Documentation",
  "Connected Health and Bluetooth Project Discussion",
];

const supportCards = [
  {
    title: "Product Configuration",
    text: "Support for digital blood pressure monitor manufacturer projects, including upper arm BP monitor configuration, display requirements, memory options and functional positioning.",
    icon: PressureIcon,
  },
  {
    title: "Private Label Customization",
    text: "Private label blood pressure monitor customization for logo, color, packaging, labeling, IFU coordination and selected project-specific configurations.",
    icon: DocumentIcon,
  },
  {
    title: "Hardware and Mechanical Support",
    text: "Engineering discussion for custom blood pressure monitor supplier projects, including electronics, cuff interface, display, enclosure, buttons, power design and manufacturability.",
    icon: ShieldIcon,
  },
  {
    title: "Connected Device Integration",
    text: "Bluetooth data transmission, app integration discussion and UI requirements can be evaluated for selected connected blood pressure monitor OEM projects.",
    icon: BluetoothIcon,
  },
  {
    title: "Manufacturing and Assembly",
    text: "Blood pressure monitor OEM manufacturing support from production preparation and assembly to functional testing, packaging, labeling and shipment release.",
    icon: FactoryIcon,
  },
  {
    title: "Quality Documentation",
    text: "Quality documentation support can include configuration records, testing records, manufacturing records, packaging control and batch traceability.",
    icon: DocumentIcon,
  },
];

const applications = [
  "Home Blood Pressure Monitoring",
  "Elderly Health Management",
  "Hypertension Management",
  "Private Label Medical Devices",
  "Retail and Distribution Channels",
  "Remote Patient Monitoring",
  "Connected Health Platforms",
  "Home Healthcare Kits",
];

const workflow = [
  "Requirement Review",
  "Product Configuration",
  "Engineering Evaluation",
  "Sample Confirmation",
  "Testing and Documentation",
  "Pilot Production",
  "Mass Production",
];

const faqs = [
  {
    question: "Is YimiLife a blood pressure monitor OEM manufacturer?",
    answer:
      "Yes. YimiLife supports blood pressure monitor OEM manufacturing for global healthcare brands, including product configuration, private label customization, manufacturing, testing, packaging and quality documentation.",
  },
  {
    question: "Can YimiLife support private label blood pressure monitor projects?",
    answer:
      "Yes. YimiLife supports private label blood pressure monitor projects, including logo, color, packaging, labeling, IFU coordination, selected functional configurations and project-specific manufacturing documentation.",
  },
  {
    question: "Can YimiLife work as a custom blood pressure monitor supplier?",
    answer:
      "Yes. For suitable OEM/ODM projects, YimiLife can evaluate custom blood pressure monitor supplier requirements such as display configuration, button layout, cuff requirements, packaging, labeling, UI requirements and connected-device features.",
  },
  {
    question: "What blood pressure monitor types can be discussed?",
    answer:
      "YimiLife focuses on home-use digital blood pressure monitor projects, especially upper arm blood pressure monitor OEM configurations for home healthcare, retail, distribution and connected health scenarios.",
  },
  {
    question: "Can YimiLife support connected blood pressure monitor projects?",
    answer:
      "For selected projects, YimiLife can discuss Bluetooth data transmission, app integration requirements and UI customization for connected health or remote patient monitoring applications.",
  },
  {
    question: "What information should customers provide for a BP monitor OEM project?",
    answer:
      "Customers are encouraged to provide target market, product type, cuff requirements, expected quantity, customization scope, regulatory expectations, target price range and project timeline.",
  },
  {
    question: "Does YimiLife operate under ISO 13485?",
    answer:
      "Yes. YimiLife operates under an ISO 13485 quality management system for medical device manufacturing and OEM/ODM project support.",
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
      "@type": "Service",
      "@id":
        "https://www.yimilife.com/products/blood-pressure-monitor#blood-pressure-monitor-oem-odm",
      name: "Blood Pressure Monitor OEM Manufacturing",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "Blood Pressure Monitor OEM Manufacturing",
      areaServed: "Global",
      description:
        "Blood pressure monitor OEM manufacturing for medical brands, including digital upper arm BP monitor configuration, private label customization, connected health discussion, manufacturing, testing and quality documentation.",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.yimilife.com/products/blood-pressure-monitor#webpage",
      url: "https://www.yimilife.com/products/blood-pressure-monitor",
      name: "Blood Pressure Monitor OEM Manufacturer",
      description:
        "YimiLife blood pressure monitor OEM manufacturer page for home healthcare BP monitor projects, private label customization, custom BP monitor requirements and ISO 13485 manufacturing support.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "Blood pressure monitor OEM manufacturing",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/products/blood-pressure-monitor#faq",
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
      "@id":
        "https://www.yimilife.com/products/blood-pressure-monitor#breadcrumb",
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
          name: "Products",
          item: "https://www.yimilife.com/products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Blood Pressure Monitor OEM Manufacturer",
          item: "https://www.yimilife.com/products/blood-pressure-monitor",
        },
      ],
    },
  ],
};

export default function BloodPressureMonitorPage() {
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
              Blood Pressure Monitor OEM Manufacturer for Medical Brands
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Blood Pressure Monitor OEM Manufacturer
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife supports global healthcare brands with blood pressure
              monitor OEM manufacturing, including private label blood pressure
              monitor customization, digital upper arm BP monitor configuration,
              connected health project discussion and custom BP monitor
              manufacturing support.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Backed by an{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                ISO 13485 medical device manufacturing quality
              </Link>
              , medical electronics engineering experience and scalable
              manufacturing support, we help customers move from product
              requirements to sample confirmation, testing, documentation and
              mass production.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Start a Blood Pressure Monitor OEM Project
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

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Project highlights
            </p>

            <div className="mt-5 grid gap-4">
              {highlights.map((item) => (
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
                Part of YimiLife’s home healthcare portfolio
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Blood pressure monitors can be combined with{" "}
                <Link
                  href="/products/pulse-oximeter"
                  className="font-semibold text-cyan-200 underline underline-offset-4"
                >
                  pulse oximeter OEM/ODM manufacturing
                </Link>{" "}
                and wearable monitoring projects for broader home healthcare
                product portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Commercial value
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Blood Pressure Monitor OEM Manufacturing for Healthcare Brands
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              For medical brands, a blood pressure monitor OEM project requires
              more than basic electronic assembly. Key concerns include product
              configuration, cuff compatibility, user interface, manufacturing
              quality, packaging control, documentation support and supplier
              responsiveness.
            </p>

            <p>
              YimiLife helps OEM/ODM customers evaluate blood pressure monitor
              projects from product definition to mass production, with support
              for private label blood pressure monitor customization, custom
              blood pressure monitor supplier requirements, engineering
              discussion, manufacturing control and quality documentation.
            </p>

            <p>
              For customers building connected health products, Bluetooth data
              transmission, app integration discussion and UI customization can
              also be evaluated based on project requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              OEM/ODM support
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Private Label Blood Pressure Monitor and Custom OEM Support
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife provides flexible support for home-use digital blood
              pressure monitors, covering upper arm blood pressure monitor OEM
              configuration, private label customization, engineering
              adaptation, manufacturing, testing, packaging and documentation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-xl font-semibold">
              From private label blood pressure monitor to connected monitoring
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              Blood pressure monitor projects can range from private label
              customization to connected health devices with Bluetooth data
              transmission and app integration discussion. YimiLife evaluates
              customization depth based on product definition, target market,
              regulatory expectations and production volume.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Application scenarios
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Home Blood Pressure Monitor Manufacturer Application Scenarios
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Home blood pressure monitors are core healthcare devices for
              medical brands, distribution channels, private label programs and
              connected health platforms serving chronic disease management and
              elderly health monitoring scenarios.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((item) => (
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

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                Project workflow
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                From Custom Blood Pressure Monitor Requirements to Mass Production
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                YimiLife follows a practical{" "}
                <Link
                  href="/oem-odm"
                  className="font-semibold text-cyan-300 underline underline-offset-4"
                >
                  private label medical device manufacturing workflow
                </Link>{" "}
                to help customers move from initial product requirements to
                engineering evaluation, sample confirmation, testing,
                documentation, pilot production and mass production.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6">
              <div className="grid gap-5">
                {workflow.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                      {index + 1}
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="font-semibold text-white">{step}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {index === 0
                          ? "Review target market, product type, expected quantity, customization scope, cuff requirements, regulatory expectations, cost target and timeline."
                          : "Move the project forward with engineering, testing, documentation and production controls according to agreed requirements."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Quality and documentation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              ISO 13485 Manufacturing Support for Blood Pressure Monitor OEM Projects
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Blood pressure monitor OEM manufacturing projects require
              controlled manufacturing and clear documentation. YimiLife’s
              manufacturing process is supported by the{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                ISO 13485 medical device manufacturing quality
              </Link>
              , including incoming inspection, PCBA process control, assembly,
              functional testing, packaging, labeling and batch traceability.
            </p>

            <p>
              Depending on project scope, quality documentation support can
              include product configuration records, testing records,
              manufacturing records, packaging control and project
              communication records.
            </p>

            <p>
              This helps customers manage product consistency, regulated market
              expectations and long-term brand trust.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Product portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Combine Blood Pressure Monitor OEM Projects with Broader Home Healthcare Products
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Blood pressure monitors can be part of a broader home healthcare
              product portfolio. YimiLife also supports{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>{" "}
              and{" "}
              <Link
                href="/products/wearable-monitoring"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                wearable health monitoring devices
              </Link>{" "}
              for connected health and remote patient monitoring scenarios.
            </p>

            <p>
              For SpO2-related products, YimiLife’s{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 Technology Platform
              </Link>{" "}
              provides additional differentiation around low perfusion, motion
              artifact rejection and skin tone fairness.
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
              Blood Pressure Monitor OEM Manufacturer FAQ
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
            Start your blood pressure monitor OEM manufacturing project
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for an ISO 13485 blood pressure monitor OEM manufacturer
            for home BP monitors, private label projects or connected health
            monitoring applications? Share your project requirements with
            YimiLife.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Submit Blood Pressure Monitor OEM Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Home Healthcare Product Categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
