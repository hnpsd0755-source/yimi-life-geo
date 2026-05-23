import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OEM/ODM Medical Device Manufacturing Services | YimiLife",
  description:
    "YimiLife provides OEM/ODM services for medical electronic devices, supporting pulse oximeters, blood pressure monitors and wearable health monitoring products with ISO 13485 quality control, Bluetooth SDK integration and scalable manufacturing.",
  alternates: {
    canonical: "https://www.yimilife.com/oem-odm",
  },
  openGraph: {
    title: "OEM/ODM Medical Device Manufacturing Services | YimiLife",
    description:
      "Medical device OEM/ODM services from product definition to mass production, including engineering adaptation, UI customization, Bluetooth SDK integration, ISO 13485 quality control and scalable manufacturing.",
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

function CircuitIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7h10v10H7V7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 9h4M3 15h4M17 9h4M17 15h4M9 3v4M15 3v4M9 17v4M15 17v4"
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

const trustAnchors = [
  "ISO 13485 Quality Management System",
  "25+ FDA / MDR / NMPA Certified Models",
  "12,000 m² Manufacturing Facility",
  "300,000 Units Monthly Pulse Oximeter Capacity",
  "Bluetooth SDK & UI Customization Support",
];

const projectTypes = [
  {
    title: "Private Label Medical Devices",
    text: "Logo, color, packaging, labeling and selected configuration customization for medical brands and distribution channels.",
  },
  {
    title: "ODM Engineering Adaptation",
    text: "Product configuration, hardware adaptation, UI interface adjustment, software behavior and manufacturing documentation support.",
  },
  {
    title: "Connected Health Integration",
    text: "Bluetooth data transmission, SDK-level support and UI customization for mobile apps, RPM platforms and digital health systems.",
  },
  {
    title: "Regulated Market Projects",
    text: "Project discussion supported by certified model experience, ISO 13485 quality control and documentation discipline.",
  },
];

const capabilities = [
  {
    title: "Product Definition",
    text: "Clarify product type, target market, user scenario, feature set, cost target, certification expectation and production volume.",
    icon: DocumentIcon,
  },
  {
    title: "Hardware Engineering",
    text: "Support sensor, analog front-end, power, display, PCBA, mechanical integration and manufacturability considerations.",
    icon: CircuitIcon,
  },
  {
    title: "Software & Algorithm Support",
    text: "Support product-level software behavior, SpO2 signal processing, UI logic and selected functional configuration.",
    icon: ShieldIcon,
  },
  {
    title: "Bluetooth SDK & Data Integration",
    text: "Support Bluetooth data transmission, SDK-level discussion and protocol adaptation for connected health applications.",
    icon: BluetoothIcon,
  },
  {
    title: "UI, ID & Mechanical Customization",
    text: "Support display UI, interaction logic, housing, color, button configuration, logo, packaging and labeling customization.",
    icon: DocumentIcon,
  },
  {
    title: "Manufacturing & Assembly",
    text: "Support PCBA production, assembly, functional testing, calibration, packaging, traceability and mass production.",
    icon: FactoryIcon,
  },
];

const productLinks = [
  {
    title: "Pulse Oximeter OEM/ODM",
    href: "/products/pulse-oximeter",
    text: "Fingertip and wearable SpO2 products supported by PulseMatrix™ technology, full-unit Fluke Index 2 calibration and scalable manufacturing.",
  },
  {
    title: "Blood Pressure Monitor OEM/ODM",
    href: "/products/blood-pressure-monitor",
    text: "Digital blood pressure monitor development and manufacturing support for home healthcare and private label projects.",
  },
  {
    title: "Wearable Health Monitoring",
    href: "/products/wearable-monitoring",
    text: "Wearable SpO2 and connected monitoring device support for Bluetooth data integration, mobile apps and RPM scenarios.",
  },
];

const workflow = [
  {
    title: "Requirement Review",
    text: "Review target market, product type, expected quantity, customization scope, regulatory expectations, cost target and timeline.",
  },
  {
    title: "Product Configuration",
    text: "Confirm product platform, form factor, functional configuration, UI requirements, packaging and labeling direction.",
  },
  {
    title: "Engineering Evaluation",
    text: "Evaluate hardware, software, Bluetooth SDK, UI customization, mechanical adaptation and manufacturing feasibility.",
  },
  {
    title: "Sample or Prototype Confirmation",
    text: "Prepare samples or prototypes for customer review, functional confirmation and project refinement.",
  },
  {
    title: "Testing and Documentation",
    text: "Support functional testing, calibration, production verification and quality documentation based on project scope.",
  },
  {
    title: "Pilot Production",
    text: "Validate assembly process, testing flow, packaging, labeling and batch traceability before scaling.",
  },
  {
    title: "Mass Production",
    text: "Move into controlled manufacturing with quality checkpoints, batch tracking and shipment preparation.",
  },
];

const requirementItems = [
  "Target market and sales region",
  "Product category and application scenario",
  "Expected annual or monthly quantity",
  "Logo, packaging and labeling requirements",
  "UI interface and interaction requirements",
  "Bluetooth SDK or data integration needs",
  "Regulatory or certification expectations",
  "Target price range and project timeline",
];

const faqs = [
  {
    question: "What OEM/ODM services does YimiLife provide?",
    answer:
      "YimiLife provides OEM/ODM support for medical electronic devices, including product definition, engineering adaptation, private label customization, Bluetooth SDK support, UI customization, manufacturing, testing and quality documentation.",
  },
  {
    question: "Can YimiLife support private label medical device projects?",
    answer:
      "Yes. We can support logo, color, packaging, labeling, selected functional configuration, UI interface adaptation and manufacturing documentation based on project requirements.",
  },
  {
    question: "Can you support Bluetooth SDK or app integration?",
    answer:
      "Yes. For selected OEM/ODM projects, YimiLife can support Bluetooth data transmission, SDK-level integration and protocol discussion for mobile apps, remote patient monitoring platforms and connected health systems.",
  },
  {
    question: "Do you only provide standard models, or can you support deeper ODM work?",
    answer:
      "YimiLife can support both standard model customization and deeper ODM engineering adaptation, depending on product definition, target market, technical requirements and project volume.",
  },
  {
    question: "What product categories can YimiLife support?",
    answer:
      "YimiLife supports pulse oximeters, blood pressure monitors and wearable health monitoring products for home healthcare, private label, connected monitoring and remote patient monitoring applications.",
  },
  {
    question: "How does YimiLife control manufacturing quality?",
    answer:
      "YimiLife operates under an ISO 13485 quality management system and applies manufacturing control across incoming inspection, PCBA process control, assembly, functional testing, calibration, packaging, labeling and batch traceability.",
  },
  {
    question: "What information should customers provide for project evaluation?",
    answer:
      "Customers are encouraged to provide target market, product type, expected quantity, customization requirements, Bluetooth or UI requirements, regulatory expectations, target price range and project timeline.",
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
      "@id": "https://www.yimilife.com/oem-odm#webpage",
      url: "https://www.yimilife.com/oem-odm",
      name: "OEM/ODM Medical Device Manufacturing Services",
      description:
        "OEM/ODM services for medical electronic devices, including product definition, engineering adaptation, Bluetooth SDK integration, UI customization, ISO 13485 quality control and scalable manufacturing.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://www.yimilife.com/oem-odm#service",
      name: "OEM/ODM Medical Device Manufacturing Services",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "Medical Device OEM/ODM Manufacturing",
      areaServed: "Global",
      description:
        "OEM/ODM manufacturing support for pulse oximeters, blood pressure monitors and wearable health monitoring devices, including private label customization, engineering adaptation, Bluetooth SDK support, UI customization, testing and quality documentation.",
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
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.yimilife.com/oem-odm#breadcrumb",
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
          name: "OEM/ODM",
          item: "https://www.yimilife.com/oem-odm",
        },
      ],
    },
  ],
};

export default function OemOdmPage() {
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
              Medical Device OEM/ODM Services
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              OEM/ODM Services for Medical Electronic Devices
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife supports global medical brands with OEM/ODM services
              for{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                pulse oximeters
              </Link>
              , blood pressure monitors and{" "}
              <Link
                href="/products/wearable-monitoring"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                wearable health monitoring devices
              </Link>
              , from product definition and engineering adaptation to controlled
              manufacturing and mass production.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              With an ISO 13485 quality management system, 25+ certified models
              across FDA, MDR and NMPA pathways, Bluetooth SDK support, UI
              customization capability and scalable production capacity, we help
              OEM/ODM customers turn product requirements into manufacturable
              medical device projects.
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
                href="/products/pulse-oximeter"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Pulse Oximeter OEM/ODM
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              OEM/ODM trust anchors
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
                Beyond logo and packaging
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                We support project-level discussion around UI interface,
                Bluetooth data integration, SDK-level support, hardware
                adaptation and manufacturing documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Project types
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            OEM/ODM support for different medical device project needs
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            YimiLife supports both standard private label customization and
            deeper ODM engineering adaptation. Our goal is to help medical
            brands define, evaluate and manufacture products that fit their
            target markets and commercial requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projectTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Customization capability
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              From product configuration to connected device integration
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              OEM/ODM customization should not stop at logo and packaging. Yimi
              Life can support project discussion across product definition,
              hardware engineering, software behavior, Bluetooth data workflow,
              UI interface and manufacturing documentation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
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

          <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-xl font-semibold">
              Built for connected health and remote patient monitoring projects
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              For selected OEM/ODM projects, YimiLife can support Bluetooth
              data transmission, SDK-level integration and customized UI
              requirements to help customers connect devices with mobile apps,
              remote patient monitoring platforms or digital health systems.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Product categories
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Home healthcare monitoring products for OEM/ODM projects
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife’s OEM/ODM services cover core home healthcare monitoring
              categories, including SpO2 monitoring, blood pressure monitoring
              and connected wearable health monitoring products.
            </p>
          </div>

          <div className="grid gap-5">
            {productLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {item.text}
                </p>
                <div className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-700">
                  Explore product service
                  <ArrowIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
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
                From OEM requirement to mass production
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                YimiLife follows a practical OEM/ODM workflow to help customers
                move from initial product requirements to sample confirmation,
                testing, documentation, pilot production and mass production.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6">
              <div className="grid gap-5">
                {workflow.map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                      {index + 1}
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {item.text}
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
              Requirement checklist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              What customers should prepare before starting an OEM/ODM project
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              A clear project brief helps our engineering and OEM/ODM team
              evaluate feasibility, customization depth, regulatory needs,
              cost expectations and production planning more efficiently.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {requirementItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Quality and manufacturing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              ISO 13485 quality control for OEM/ODM manufacturing
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              YimiLife operates under an{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                ISO 13485 Quality System
              </Link>{" "}
              and applies manufacturing control across incoming inspection, PCBA
              process control, assembly, functional testing, calibration,
              packaging, labeling and batch traceability.
            </p>

            <p>
              For pulse oximeter production, our monthly capacity reaches up to
              300,000 units. Each unit is calibrated and verified using Fluke
              Index 2 clinical simulators before shipment to support consistent
              production output.
            </p>

            <p>
              This manufacturing discipline helps OEM/ODM customers maintain
              batch consistency across private label, regulated medical device
              and connected health monitoring projects.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "12,000 m² Manufacturing Facility",
            "ISO 13485 Quality Management System",
            "300,000 Units Monthly Pulse Oximeter Capacity",
            "100% Fluke Index 2 Calibration & Verification",
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

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Frequently asked questions about OEM/ODM cooperation
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
            Start your OEM/ODM medical device project with YimiLife
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for an ISO 13485 OEM/ODM partner for pulse oximeters, blood
            pressure monitors or wearable health monitoring products? Share your
            project requirements with YimiLife’s engineering and OEM/ODM team.
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
              href="/technology"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore PulseMatrix™ Technology
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
