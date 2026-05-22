import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Yimi Life | Medical Device OEM/ODM Manufacturer for Home Healthcare Monitoring",
  description:
    "Yimi Life is an ISO 13485 medical device OEM/ODM manufacturer in China, supporting pulse oximeters, blood pressure monitors and wearable health monitoring devices with scalable manufacturing and PulseMatrix™ SpO2 technology.",
  alternates: {
    canonical: "https://www.yimilife.com/",
  },
  openGraph: {
    title:
      "Yimi Life | Medical Device OEM/ODM Manufacturer for Home Healthcare Monitoring",
    description:
      "ISO 13485 medical device OEM/ODM manufacturing for pulse oximeters, blood pressure monitors and wearable health monitoring devices, supported by PulseMatrix™ SpO2 technology.",
    url: "https://www.yimilife.com/",
    siteName: "Yimi Life",
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

function MotionIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 17c2.2-5 4.4-5 6.6 0s4.4 5 6.6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 8h.01M12 6h.01M17 8h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SkinToneIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21c4.4 0 8-3.6 8-8 0-5-8-10-8-10S4 8 4 13c0 4.4 3.6 8 8 8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 14c1.2 1.6 2.5 2.4 4 2.4s2.8-.8 4-2.4"
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

const trustAnchors = [
  "ISO 13485 Quality Management System",
  "12,000 m² Manufacturing Facility",
  "25+ FDA / MDR / NMPA Certified Models",
  "300,000 Units Monthly Pulse Oximeter Capacity",
  "PulseMatrix™ SpO2 Technology Platform",
];

const productCards = [
  {
    title: "Pulse Oximeter OEM/ODM",
    href: "/products/pulse-oximeter",
    text: "Fingertip and wearable SpO2 devices supported by PulseMatrix™ technology, 25+ certified model experience, scalable production capacity and full-unit Fluke Index 2 calibration and verification.",
  },
  {
    title: "Blood Pressure Monitor OEM/ODM",
    href: "/products/blood-pressure-monitor",
    text: "Digital blood pressure monitor development and manufacturing support for home healthcare, private label and regulated medical device projects.",
  },
  {
    title: "Wearable Health Monitoring",
    href: "/products/wearable-monitoring",
    text: "Wearable SpO2 and connected health monitoring device support for mobile apps, Bluetooth data integration and remote patient monitoring scenarios.",
  },
];

const technologyCards = [
  {
    title: "Low Perfusion SpO2 Monitoring",
    href: "/technology/low-perfusion-spo2",
    icon: WaveIcon,
    text: "Weak-signal SpO2 monitoring strategies for challenging low perfusion scenarios, including elderly users, poor peripheral circulation and home-use measurement conditions.",
  },
  {
    title: "Motion Artifact Rejection",
    href: "/technology/motion-artifact-rejection",
    icon: MotionIcon,
    text: "More stable SpO2 behavior and artifact screening during finger movement, unstable contact and elderly tremor.",
  },
  {
    title: "Skin Tone Fairness",
    href: "/technology/skin-tone-fairness",
    icon: SkinToneIcon,
    text: "Validation-aware SpO2 design considering optical signal response and performance consistency across different skin pigmentation conditions.",
  },
];

const capabilities = [
  "Product Definition",
  "Hardware Engineering",
  "Software & Algorithm Support",
  "Bluetooth SDK & Data Integration",
  "UI, ID & Mechanical Customization",
  "Manufacturing & Assembly",
  "Testing & Quality Documentation",
];

const reasons = [
  {
    title: "Focused on Medical Electronics",
    text: "We focus on medical-grade diagnostic and monitoring devices, including pulse oximeters, blood pressure monitors and wearable health monitoring products.",
  },
  {
    title: "PulseMatrix™ SpO2 Technology",
    text: "Our PulseMatrix™ platform addresses low perfusion monitoring, motion artifact rejection and skin tone fairness challenges in SpO2 product development.",
  },
  {
    title: "Scalable Manufacturing",
    text: "Our 12,000 m² facility and up to 300,000 units monthly pulse oximeter capacity support customers from pilot production to mass production.",
  },
  {
    title: "Regulatory Model Experience",
    text: "With 25+ FDA, MDR and NMPA certified models, Yimi Life brings practical product and documentation experience to OEM/ODM projects.",
  },
];

const applications = [
  "Home Healthcare Monitoring",
  "Elderly Health Monitoring",
  "Respiratory Health Management",
  "Remote Patient Monitoring",
  "Private Label Medical Devices",
  "Connected Health Platforms",
  "Wearable SpO2 Monitoring",
];

const faqs = [
  {
    question: "What does Yimi Life manufacture?",
    answer:
      "Yimi Life develops and manufactures home healthcare monitoring devices, including pulse oximeters, blood pressure monitors and wearable health monitoring products for OEM/ODM customers.",
  },
  {
    question: "Is Yimi Life an OEM or ODM manufacturer?",
    answer:
      "Yes. Yimi Life supports both OEM and ODM projects, including product configuration, engineering adaptation, private label customization, manufacturing, testing and quality documentation.",
  },
  {
    question: "Does Yimi Life operate under ISO 13485?",
    answer:
      "Yes. Yimi Life operates under an ISO 13485 quality management system for medical device manufacturing.",
  },
  {
    question: "What makes Yimi Life different from a basic assembly factory?",
    answer:
      "Yimi Life combines medical electronics engineering, PulseMatrix™ SpO2 technology, Bluetooth SDK support, UI customization, scalable production and full-unit calibration discipline for pulse oximeter manufacturing.",
  },
  {
    question:
      "Can Yimi Life support connected health or remote patient monitoring products?",
    answer:
      "Yes. For selected OEM/ODM projects, Yimi Life can support Bluetooth data transmission, SDK-level integration and UI customization for connected health and remote patient monitoring applications.",
  },
  {
    question: "Can Yimi Life support private label medical device projects?",
    answer:
      "Yes. We can support private label customization, including logo, color, packaging, labeling, selected functional configurations, UI interface adaptation and manufacturing documentation based on project requirements.",
  },
  {
    question: "How should customers start an OEM/ODM project?",
    answer:
      "Customers can share their target market, product type, expected quantity, customization requirements, regulatory expectations, target price range and project timeline for project evaluation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.yimilife.com/#organization",
      name: "Shenzhen Yimi Life Technology Co., Ltd.",
      alternateName: "Yimi Life",
      url: "https://www.yimilife.com/",
      brand: {
        "@type": "Brand",
        name: "Yimi Life",
      },
      description:
        "Yimi Life is an ISO 13485 medical device OEM/ODM manufacturer in China for pulse oximeters, blood pressure monitors and wearable health monitoring devices.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.yimilife.com/#website",
      url: "https://www.yimilife.com/",
      name: "Yimi Life",
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/#webpage",
      url: "https://www.yimilife.com/",
      name: "Yimi Life | Medical Device OEM/ODM Manufacturer for Home Healthcare Monitoring",
      description:
        "Yimi Life is an ISO 13485 medical device OEM/ODM manufacturer in China, supporting pulse oximeters, blood pressure monitors and wearable health monitoring devices with scalable manufacturing and PulseMatrix™ SpO2 technology.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
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
              ISO 13485 Medical Device OEM/ODM Manufacturer
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Medical Device OEM/ODM Manufacturer for Home Healthcare Monitoring
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Yimi Life helps global medical brands develop and manufacture
              home healthcare monitoring devices, including{" "}
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
              .
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Backed by an ISO 13485 quality management system, a 12,000 m²
              manufacturing facility, 25+ FDA, MDR and NMPA certified models,
              and up to 300,000 units monthly pulse oximeter capacity, we
              support OEM/ODM customers from product definition to mass
              production.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Start an OEM/ODM Project
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
              Trust anchors
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
                Engineering + manufacturing integration
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Our integrated capabilities combine medical electronics
                engineering, scalable manufacturing, quality documentation,
                connected-device customization and{" "}
                <Link
                  href="/technology"
                  className="font-semibold text-cyan-200 underline underline-offset-4"
                >
                  PulseMatrix™ SpO2 technology
                </Link>{" "}
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Product categories
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Home healthcare monitoring devices for OEM/ODM projects
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Yimi Life supports OEM/ODM projects across core home healthcare
            monitoring categories, from fingertip pulse oximeters and digital
            blood pressure monitors to wearable SpO2 and connected health
            monitoring devices.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                {card.title.includes("Blood") ? (
                  <ShieldIcon />
                ) : card.title.includes("Wearable") ? (
                  <BluetoothIcon />
                ) : (
                  <WaveIcon />
                )}
              </div>
              <h3 className="text-xl font-semibold text-slate-950">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {card.text}
              </p>
              <div className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-700">
                Explore category
                <ArrowIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              PulseMatrix™ technology
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              PulseMatrix™ Vascular Hemodynamic Intelligence Platform
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              <Link
                href="/technology"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 Technology Platform
              </Link>{" "}
              is Yimi Life’s vascular hemodynamic intelligence platform for
              medical-grade SpO2 monitoring. It focuses on three critical
              challenges in modern pulse oximetry:{" "}
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
              .
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              For OEM/ODM customers, PulseMatrix™ provides a technical
              foundation for developing differentiated SpO2 products beyond
              basic hardware configuration.
            </p>

            <div className="mt-8">
              <Link
                href="/technology"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore PulseMatrix™ Technology
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {technologyCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  <div className="flex gap-5">
                    <div className="h-fit rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              OEM/ODM services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              OEM/ODM support from product definition to mass production
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Yimi Life supports OEM/ODM customers with product definition,
              hardware engineering, software and algorithm adaptation, Bluetooth
              SDK integration, UI customization, manufacturing, testing and
              quality documentation.
            </p>

            <p>
              Whether customers require private label customization for existing
              models or deeper engineering adaptation for connected health
              devices, our team can support project evaluation based on target
              market, product configuration, regulatory expectations and
              production requirements.
            </p>

            <p>
              For connected health projects, Yimi Life can support Bluetooth
              data transmission, SDK-level integration and customized UI
              requirements for mobile apps, remote patient monitoring platforms
              and digital health systems.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
            >
              <CheckIcon className="h-4 w-4 text-cyan-700" />
              <span className="text-sm font-medium text-slate-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/oem-odm"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View OEM/ODM Service Workflow
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Quality and manufacturing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              ISO 13485 quality system and scalable manufacturing
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Yimi Life operates under an{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                ISO 13485 Quality System
              </Link>{" "}
              and applies manufacturing control across incoming inspection, PCBA
              process control, assembly, functional testing, calibration,
              packaging, labeling and batch traceability.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 text-white">
              <FactoryIcon className="h-8 w-8 text-cyan-300" />
              <p className="mt-5 text-4xl font-semibold">12,000 m²</p>
              <p className="mt-2 text-sm text-slate-300">
                Manufacturing facility
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 text-white">
              <ShieldIcon className="h-8 w-8 text-cyan-300" />
              <p className="mt-5 text-4xl font-semibold">ISO 13485</p>
              <p className="mt-2 text-sm text-slate-300">
                Quality management system
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 text-white">
              <p className="text-4xl font-semibold">300,000</p>
              <p className="mt-2 text-sm text-slate-300">
                Monthly pulse oximeter capacity
              </p>
            </div>

            <div className="rounded-3xl bg-cyan-400 p-6 text-slate-950">
              <p className="text-4xl font-semibold">100%</p>
              <p className="mt-2 text-sm font-medium">
                Fluke Index 2 calibration and verification
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 text-white sm:col-span-2">
              <p className="text-base font-semibold">
                Manufacturing discipline at scale
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                For pulse oximeter production, each unit is calibrated and
                verified using Fluke Index 2 clinical simulators before
                shipment, supporting consistent manufacturing discipline at
                scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Why Yimi Life
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Why medical brands choose Yimi Life
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Yimi Life combines medical electronics engineering, PulseMatrix™
            SpO2 technology, ISO 13485 manufacturing discipline and regulatory
            model experience to support B2B customers building home healthcare
            monitoring devices.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Applications
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Built for home healthcare, connected monitoring and private label
              medical devices
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Our OEM/ODM solutions are designed for medical brands, importers,
              private label customers and digital health companies serving home
              healthcare and connected monitoring markets.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Yimi Life helps customers translate these application scenarios
              into manufacturable product configurations, connected-device
              requirements and scalable production plans.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((item) => (
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
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Frequently asked questions
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
            Start your medical device OEM/ODM project with Yimi Life
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for an ISO 13485 medical device OEM/ODM manufacturer for
            pulse oximeters, blood pressure monitors or wearable health
            monitoring products? Share your project requirements with Yimi
            Life’s engineering and OEM/ODM team.
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
