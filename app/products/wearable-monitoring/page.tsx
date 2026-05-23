import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wearable Health Monitoring Device OEM/ODM | YimiLife",
  description:
    "YimiLife provides wearable health monitoring device OEM/ODM support for medical brands, including wearable SpO2 devices, Bluetooth data integration, UI customization, remote patient monitoring and ISO 13485 manufacturing.",
  alternates: {
    canonical: "https://www.yimilife.com/products/wearable-monitoring",
  },
  openGraph: {
    title: "Wearable Health Monitoring Device OEM/ODM | YimiLife",
    description:
      "Wearable SpO2 and connected health monitoring device OEM/ODM support with Bluetooth SDK integration, UI customization, PulseMatrix™ SpO2 technology and ISO 13485 manufacturing.",
    url: "https://www.yimilife.com/products/wearable-monitoring",
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

function WearableIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3h8l1 5v8l-1 5H8l-1-5V8l1-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 9h6v6H9V9zM10 1h4M10 23h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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

function AppIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 6h4M11 18h2M9 10h6v5H9v-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const highlights = [
  "Wearable SpO2 Device OEM/ODM",
  "Bluetooth SDK & Data Integration",
  "Mobile App and RPM Platform Support",
  "UI Interface Customization",
  "PulseMatrix™ SpO2 Technology Support",
  "ISO 13485 Manufacturing Control",
];

const supportCards = [
  {
    title: "Wearable SpO2 Product Definition",
    text: "Support for wearable SpO2 monitoring product definition, use scenarios, display requirements, battery strategy and functional configuration.",
    icon: WearableIcon,
  },
  {
    title: "Bluetooth SDK & Data Integration",
    text: "Bluetooth data transmission, SDK-level discussion and protocol adaptation for mobile apps, connected health platforms and remote patient monitoring systems.",
    icon: BluetoothIcon,
  },
  {
    title: "PulseMatrix™ SpO2 Technology",
    text: "SpO2 technology support focused on low perfusion monitoring, motion artifact rejection and skin tone fairness for wearable monitoring scenarios.",
    icon: WaveIcon,
  },
  {
    title: "UI and Interaction Customization",
    text: "Support for display layout, UI interface, user interaction logic, notification behavior and selected software configuration.",
    icon: AppIcon,
  },
  {
    title: "Mechanical and ID Customization",
    text: "Support for wearable form factor discussion, enclosure design, color, logo, packaging, labeling and user comfort considerations.",
    icon: ShieldIcon,
  },
  {
    title: "Manufacturing and Documentation",
    text: "Support for assembly, functional testing, calibration, packaging, labeling, batch traceability and project documentation.",
    icon: DocumentIcon,
  },
];

const connectedScenarios = [
  "Wearable SpO2 Monitoring",
  "Bluetooth Health Data Transmission",
  "Mobile App Integration",
  "Remote Patient Monitoring",
  "Sleep and Respiratory Health Tracking",
  "Elderly Health Monitoring",
  "Connected Home Healthcare",
  "Digital Health Platforms",
];

const workflow = [
  "Requirement Review",
  "Wearable Product Definition",
  "Engineering Evaluation",
  "Bluetooth and UI Discussion",
  "Sample or Prototype Confirmation",
  "Testing and Documentation",
  "Pilot Production",
  "Mass Production",
];

const faqs = [
  {
    question: "Does YimiLife provide wearable health monitoring OEM/ODM services?",
    answer:
      "Yes. YimiLife supports wearable health monitoring OEM/ODM projects, especially wearable SpO2 and connected health monitoring devices for home healthcare, remote patient monitoring and digital health applications.",
  },
  {
    question: "Can YimiLife support wearable SpO2 devices?",
    answer:
      "Yes. YimiLife can support wearable SpO2 product projects, including product definition, PulseMatrix™ SpO2 technology discussion, Bluetooth data integration, UI customization, manufacturing and documentation support.",
  },
  {
    question: "Can wearable devices connect to mobile apps or RPM platforms?",
    answer:
      "For selected OEM/ODM projects, YimiLife can support Bluetooth data transmission, SDK-level integration and protocol discussion to help connect wearable devices with mobile apps, remote patient monitoring platforms or digital health systems.",
  },
  {
    question: "Can the UI interface be customized?",
    answer:
      "Yes. UI interface, display layout, interaction logic and selected software behavior can be discussed based on product definition, hardware platform and project requirements.",
  },
  {
    question: "Is wearable monitoring only a consumer electronics product?",
    answer:
      "No. YimiLife positions wearable health monitoring as part of its medical electronics OEM/ODM portfolio, with attention to SpO2 performance, quality control, documentation and manufacturing consistency.",
  },
  {
    question: "What information should customers provide for a wearable project?",
    answer:
      "Customers are encouraged to provide target market, application scenario, wearable form factor, measurement parameters, Bluetooth or app integration needs, expected quantity, regulatory expectations, target price range and project timeline.",
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
        "https://www.yimilife.com/products/wearable-monitoring#wearable-health-monitoring-oem-odm",
      name: "Wearable Health Monitoring Device OEM/ODM",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "Wearable Health Monitoring Device OEM/ODM",
      areaServed: "Global",
      description:
        "Wearable health monitoring device OEM/ODM support for medical brands, including wearable SpO2 devices, Bluetooth SDK integration, UI customization, remote patient monitoring applications and ISO 13485 manufacturing.",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.yimilife.com/products/wearable-monitoring#webpage",
      url: "https://www.yimilife.com/products/wearable-monitoring",
      name: "Wearable Health Monitoring Device OEM/ODM",
      description:
        "YimiLife wearable health monitoring OEM/ODM page for wearable SpO2 devices, Bluetooth data integration, UI customization and connected health applications.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "Wearable health monitoring device OEM/ODM",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/products/wearable-monitoring#faq",
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
        "https://www.yimilife.com/products/wearable-monitoring#breadcrumb",
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
          name: "Wearable Health Monitoring",
          item: "https://www.yimilife.com/products/wearable-monitoring",
        },
      ],
    },
  ],
};

export default function WearableMonitoringPage() {
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
              Wearable Health Monitoring OEM/ODM
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Wearable Health Monitoring Device OEM/ODM
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife supports medical brands with wearable SpO2 and connected
              health monitoring device OEM/ODM projects, including Bluetooth
              data integration, UI customization, remote patient monitoring
              scenarios and ISO 13485 manufacturing support.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              For connected health products, wearable devices must connect
              sensor performance, user interaction, data transmission, app
              integration and manufacturing consistency. YimiLife helps
              customers evaluate these requirements from product definition to
              mass production.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Start a Wearable Project
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
                Connected health integration
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Wearable monitoring projects can connect with mobile apps,
                digital health systems and remote patient monitoring workflows
                through Bluetooth data transmission and SDK-level support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Connected health value
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Wearable monitoring projects require more than a sensor module
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Wearable health monitoring products require coordination between
              physiological sensing, device form factor, user interface,
              Bluetooth data transmission, app integration, power strategy and
              manufacturing control.
            </p>

            <p>
              For medical brands, the challenge is not only to collect a signal,
              but to create a stable, manufacturable and connected product that
              fits home healthcare, elderly monitoring, respiratory health or
              remote patient monitoring scenarios.
            </p>

            <p>
              YimiLife supports OEM/ODM customers by combining medical
              electronics engineering, wearable SpO2 product discussion,
              Bluetooth SDK support, UI customization and ISO 13485
              manufacturing discipline.
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
              OEM/ODM support for wearable health monitoring projects
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife supports wearable monitoring projects from early product
              definition to engineering evaluation, sample confirmation,
              testing, documentation and mass production.
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
              Designed for app-connected and RPM product strategies
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              For selected OEM/ODM projects, YimiLife can support Bluetooth
              data transmission, SDK-level integration and customized UI
              requirements to help customers connect wearable devices with
              mobile apps, remote patient monitoring platforms or digital health
              systems.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              SpO2 technology
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Wearable SpO2 products supported by PulseMatrix™
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Wearable SpO2 monitoring is more challenging than simple spot-check
              measurement because real-world use involves motion, varying skin
              contact, weak perfusion and longer monitoring scenarios.
            </p>

            <p>
              YimiLife’s{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 Technology Platform
              </Link>{" "}
              focuses on{" "}
              <Link
                href="/technology/low-perfusion-spo2"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                low perfusion SpO2 monitoring
              </Link>
              ,{" "}
              <Link
                href="/technology/motion-artifact-rejection"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                motion artifact rejection
              </Link>{" "}
              and{" "}
              <Link
                href="/technology/skin-tone-fairness"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                skin tone fairness
              </Link>
              , helping wearable projects build stronger technical
              differentiation.
            </p>

            <p>
              For OEM/ODM customers, this technology narrative can support
              product positioning in home healthcare, respiratory health,
              connected monitoring and digital health applications.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Application scenarios
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Suitable for connected health and remote monitoring applications
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Wearable health monitoring devices are especially relevant for
              customers building connected home healthcare, respiratory health
              tracking, elderly monitoring and remote patient monitoring
              solutions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {connectedScenarios.map((item) => (
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
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Project workflow
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                From wearable concept to manufacturable device
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                YimiLife follows a practical{" "}
                <Link
                  href="/oem-odm"
                  className="font-semibold text-cyan-700 underline underline-offset-4"
                >
                  OEM/ODM service workflow
                </Link>{" "}
                to help customers move from wearable product concept to
                engineering evaluation, testing, documentation and production.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-5">
                {workflow.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-800">
                      {index + 1}
                    </div>
                    <div className="border-b border-slate-200 pb-4">
                      <h3 className="font-semibold text-slate-950">{step}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-700">
                        {index === 0
                          ? "Review target market, wearable form factor, measurement parameters, Bluetooth requirements, UI expectations, cost target and timeline."
                          : "Move the project forward with engineering, testing, documentation and manufacturing controls according to agreed requirements."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
              ISO 13485 manufacturing support for wearable projects
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Wearable health monitoring OEM/ODM projects require controlled
              manufacturing and clear documentation. YimiLife’s manufacturing
              process is supported by the{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                ISO 13485 Quality System
              </Link>
              , including incoming inspection, PCBA process control, assembly,
              functional testing, packaging, labeling and batch traceability.
            </p>

            <p>
              For wearable SpO2 projects, product verification should connect
              sensor behavior, signal quality, Bluetooth data output, UI
              interaction and production consistency.
            </p>

            <p>
              This helps customers evaluate wearable monitoring projects not as
              isolated hardware concepts, but as complete product systems ready
              for controlled manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Product portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Connect wearable monitoring with broader home healthcare products
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Wearable monitoring can be part of a broader home healthcare
              product portfolio. YimiLife also supports{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>{" "}
              and{" "}
              <Link
                href="/products/blood-pressure-monitor"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                blood pressure monitor OEM/ODM manufacturing
              </Link>{" "}
              for medical brands building multi-device health monitoring
              strategies.
            </p>

            <p>
              Customers can start from one product category and expand into
              connected health product portfolios based on target market,
              regulatory expectations, platform strategy and production volume.
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
              Frequently asked questions about wearable health monitoring OEM/ODM
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
            Start your wearable health monitoring OEM/ODM project
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for an ISO 13485 OEM/ODM partner for wearable SpO2 devices,
            connected health products or remote patient monitoring applications?
            Share your project requirements with YimiLife.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Submit Wearable Project Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Product Categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
