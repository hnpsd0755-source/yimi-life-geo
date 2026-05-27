import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pulse Oximeter OEM/ODM Manufacturer | YimiLife",
  description:
    "YimiLife provides pulse oximeter OEM/ODM manufacturing for global healthcare brands, including private label customization, Bluetooth SDK and UI adaptation, certified model experience and production verification.",
  alternates: {
    canonical: "https://www.yimilife.com/products/pulse-oximeter",
  },
  openGraph: {
    title: "Pulse Oximeter OEM/ODM Manufacturer | YimiLife",
    description:
      "Pulse oximeter OEM/ODM manufacturing, private label customization, Bluetooth SDK support, UI adaptation and production verification for global healthcare brands.",
    url: "https://www.yimilife.com/products/pulse-oximeter",
    siteName: "YimiLife",
    type: "website",
  },
};

type IconProps = {
  className?: string;
};

function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

function ShieldIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

function SignalIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 16c2.2 0 2.2-8 4.4-8s2.2 8 4.4 8 2.2-8 4.4-8S19.8 16 22 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 21h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BluetoothIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
  "25+ Certified Models across FDA / MDR / NMPA",
  "300,000 Units Monthly Pulse Oximeter Capacity",
  "100% Fluke Index 2 Production Verification",
  "Bluetooth SDK & UI Customization Support",
  "PulseMatrix™ SpO2 Technology Platform",
];

const supportCards = [
  {
    title: "Fingertip Pulse Oximeter Manufacturing",
    text: "Fingertip pulse oximeter manufacturer support for healthcare brands, importers and private label customers, covering model selection, production configuration and scalable manufacturing.",
  },
  {
    title: "Private Label Customization",
    text: "Private label pulse oximeter customization for logo, color, packaging, labeling, selected UI interface adaptation and project-specific documentation.",
  },
  {
    title: "SpO2 Algorithm & PulseMatrix™ Support",
    text: "Signal processing support focused on waveform quality, low perfusion SpO2 monitoring, motion artifact rejection and skin tone accuracy considerations.",
  },
  {
    title: "Bluetooth SDK & Data Integration",
    text: "Bluetooth data transmission, SDK-level integration and protocol adaptation for connected health products and remote patient monitoring platforms.",
  },
  {
    title: "UI, ID & Mechanical Customization",
    text: "Customization for UI interface, display layout, interaction logic, logo, color, buttons, housing, packaging and labeling.",
  },
  {
    title: "Manufacturing & Quality Control",
    text: "Support from PCBA production and assembly to functional testing, Fluke Index 2 production verification, packaging and batch traceability.",
  },
];

const applications = [
  "Home Healthcare Monitoring",
  "Elderly SpO2 Monitoring",
  "Respiratory Health Monitoring",
  "Private Label Medical Device Projects",
  "Wearable SpO2 Monitoring",
  "Remote Patient Monitoring",
  "Connected Health Platforms",
];

const workflow = [
  "Requirement Review",
  "Product Configuration",
  "Engineering Evaluation",
  "Prototype or Sample Confirmation",
  "Testing and Documentation",
  "Pilot Production",
  "Mass Production",
];

const faqs = [
  {
    question: "Can YimiLife support private label pulse oximeter projects?",
    answer:
      "Yes. YimiLife supports private label pulse oximeter projects, including logo, color, packaging, labeling, selected UI interface adaptation and manufacturing documentation based on customer requirements.",
  },
  {
    question: "Is YimiLife a fingertip pulse oximeter manufacturer?",
    answer:
      "Yes. YimiLife manufactures fingertip pulse oximeters for OEM/ODM and private label customers, with model selection, production configuration and quality documentation support.",
  },
  {
    question: "Can YimiLife support Bluetooth SDK and UI customization?",
    answer:
      "Yes. For selected pulse oximeter OEM/ODM projects, YimiLife can support Bluetooth SDK integration, data transmission requirements and UI interface customization based on project scope.",
  },
  {
    question: "How does YimiLife verify pulse oximeter production quality?",
    answer:
      "Pulse oximeter units are calibrated and verified using Fluke Index 2 clinical simulators during production, together with functional testing, visual inspection, packaging control and batch traceability.",
  },
  {
    question: "Can YimiLife support CE, MDR, FDA or NMPA market requirements?",
    answer:
      "YimiLife has experience with 25+ FDA / MDR / NMPA certified pulse oximeter models and can support OEM/ODM customers with product documentation and project discussion for target market requirements.",
  },
  {
    question: "What customization options are available for pulse oximeters?",
    answer:
      "Customization options may include logo, color, packaging, labeling, selected functional configuration, UI interface adaptation, Bluetooth data integration and documentation support based on project requirements.",
  },
  {
    question: "What is your monthly pulse oximeter production capacity?",
    answer:
      "YimiLife’s pulse oximeter production capacity reaches up to 300,000 units per month, depending on project configuration, material preparation and production schedule.",
  },
  {
    question: "What information should customers provide for an OEM/ODM inquiry?",
    answer:
      "Customers are encouraged to provide target market, product type, expected annual quantity, customization requirements, regulatory expectations, target price range and project timeline.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.yimilife.com/#organization",
      name: "Shenzhen YimiLife Technology Co., Ltd.",
      url: "https://www.yimilife.com",
      brand: {
        "@type": "Brand",
        name: "YimiLife",
      },
      description:
        "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer for pulse oximeters, blood pressure monitors and wearable health monitoring devices.",
    },
    {
      "@type": "Service",
      "@id":
        "https://www.yimilife.com/products/pulse-oximeter#pulse-oximeter-oem-odm",
      name: "Pulse Oximeter OEM/ODM Manufacturing",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "Pulse Oximeter OEM/ODM Manufacturing",
      areaServed: "Global",
      description:
        "Pulse oximeter OEM/ODM manufacturing for medical brands, including private label customization, fingertip pulse oximeter model selection, hardware engineering, SpO2 technology support, Bluetooth SDK integration, UI customization, quality control and mass production.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/products/pulse-oximeter#faq",
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
      "@id": "https://www.yimilife.com/products/pulse-oximeter#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.yimilife.com",
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
          name: "Pulse Oximeter OEM/ODM",
          item: "https://www.yimilife.com/products/pulse-oximeter",
        },
      ],
    },
  ],
};

export default function PulseOximeterPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-blue-600 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              Pulse Oximeter OEM/ODM for Medical Brands
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pulse Oximeter OEM/ODM Manufacturer
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife provides pulse oximeter OEM/ODM manufacturing for global
              healthcare brands, including private label pulse oximeter
              customization, fingertip pulse oximeter model selection, Bluetooth
              SDK support, UI adaptation and production verification.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              With 25+ certified models across FDA, MDR and NMPA pathways, up
              to 300,000 units monthly production capacity and an ISO 13485
              quality management system, we support OEM/ODM customers from
              product definition and customization to mass production with{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 technology
              </Link>
              .
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Start a Pulse Oximeter OEM/ODM Inquiry
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
            <div className="grid gap-4">
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
                Built for B2B medical device projects
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                From private label fingertip pulse oximeters to connected SpO2
                monitoring products, YimiLife supports customization beyond
                logo and packaging, including UI adaptation, Bluetooth SDK
                support, manufacturing control and project-level engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Beyond basic assembly
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Fingertip Pulse Oximeter OEM/ODM Manufacturing
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              As a fingertip pulse oximeter manufacturer for OEM/ODM and
              private label customers, YimiLife supports model selection,
              product configuration, manufacturing quality and documentation
              needs for healthcare brands, importers and regional distributors.
            </p>

            <p>
              Beyond logo and packaging, customers can discuss housing color,
              labeling content, selected UI interface adaptation, Bluetooth data
              integration, production configuration and project-specific
              documentation based on target market requirements.
            </p>

            <p>
              Our goal is to help customers build pulse oximeter products that
              are manufacturable, quality-controlled and suitable for real-world
              home healthcare, elderly monitoring, respiratory health and
              connected medical device applications.
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
              Private Label Pulse Oximeter Customization
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife provides private label pulse oximeter customization and
              OEM/ODM support for global healthcare brands, covering product
              configuration, hardware engineering, SpO2 algorithm adaptation,
              Bluetooth SDK support, UI customization, industrial design,
              manufacturing and quality control.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                  {card.title.includes("Bluetooth") ? (
                    <BluetoothIcon />
                  ) : card.title.includes("Manufacturing") ? (
                    <FactoryIcon />
                  ) : card.title.includes("Algorithm") ? (
                    <SignalIcon />
                  ) : (
                    <ShieldIcon />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-xl font-semibold">
              Bluetooth SDK and UI customization beyond logo and packaging
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
              For customers developing connected health products or remote
              patient monitoring solutions, YimiLife can support Bluetooth data
              integration, SDK-level protocol discussion and customized UI
              interface requirements based on project specifications.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              PulseMatrix™ technology
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              PulseMatrix™ SpO2 Technology for Low Perfusion and Motion Scenarios
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife’s{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 Technology Platform
              </Link>{" "}
              supports low perfusion SpO2 technology, motion artifact rejection
              pulse oximeter performance and skin tone accuracy considerations,
              helping OEM/ODM customers develop pulse oximeter products beyond
              basic hardware configuration.
            </p>
          </div>

          <div className="grid gap-5">
            <Link
              href="/technology/low-perfusion-spo2"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                Low Perfusion SpO2 Technology
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                PulseMatrix™ supports low perfusion SpO2 technology for weak
                signal scenarios, including elderly users, poor peripheral
                circulation and challenging home-use conditions.
              </p>
            </Link>

            <Link
              href="/technology/motion-artifact-rejection"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                Motion Artifact Rejection Pulse Oximeter Technology
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Motion artifact rejection pulse oximeter technology helps
                improve SpO2 reading stability during hand movement, finger
                tremor and low perfusion combined with motion disturbance.
              </p>
            </Link>

            <Link
              href="/technology/skin-tone-fairness"
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                Skin Tone Accuracy in Pulse Oximeter Development
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Skin tone accuracy is becoming increasingly important for pulse
                oximeter performance evaluation. PulseMatrix™ considers signal
                response and validation strategies across different skin
                pigmentation conditions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Application scenarios
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Pulse Oximeter OEM/ODM Applications for Global Healthcare Brands
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              YimiLife supports pulse oximeter OEM/ODM projects for customers
              targeting home healthcare, elderly monitoring, respiratory
              health, private label medical devices, wearable SpO2 monitoring
              and remote patient monitoring applications.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white"
              >
                <CheckIcon className="h-4 w-4 text-cyan-300" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Project workflow
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Pulse Oximeter OEM/ODM Workflow from Inquiry to Mass Production
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife follows a practical OEM/ODM workflow to help customers
              move from initial product requirements to sample confirmation,
              testing, documentation and mass production.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              For customers requiring deeper customization, our team can also
              discuss Bluetooth data integration, UI interaction logic,
              SDK-level support and engineering adaptation.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="grid gap-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-800">
                    {index + 1}
                  </div>
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-semibold text-slate-950">{step}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {index === 0
                        ? "Evaluate product type, target market, customization scope, expected quantity, regulatory needs, target price range and project timeline."
                        : "Move the project forward with engineering, testing, documentation and production controls according to agreed requirements."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Quality and manufacturing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Production Verification and Certified Model Experience
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                YimiLife has experience with 25+ FDA / MDR / NMPA certified
                pulse oximeter models. As an ISO 13485 medical device
                manufacturer, YimiLife applies quality control throughout pulse
                oximeter manufacturing, including incoming inspection, PCBA
                process control, assembly, functional testing, performance
                verification, labeling, packaging and batch traceability.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Learn more about our{" "}
                <Link
                  href="/quality"
                  className="font-semibold text-cyan-700 underline underline-offset-4"
                >
                  ISO 13485 medical device manufacturing quality
                </Link>{" "}
                and manufacturing control approach.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <p className="text-4xl font-semibold">300,000</p>
                <p className="mt-2 text-sm font-medium text-cyan-200">
                  units monthly capacity
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Scalable production capacity for high-volume private label
                  and regulated medical device projects.
                </p>
              </div>

              <div className="rounded-3xl bg-cyan-50 p-6 text-slate-950">
                <p className="text-4xl font-semibold">100%</p>
                <p className="mt-2 text-sm font-medium text-cyan-800">
                  Fluke Index 2 production verification
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  Each pulse oximeter is calibrated and verified using Fluke
                  Index 2 clinical simulators before shipment.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:col-span-2">
                <h3 className="text-lg font-semibold text-slate-950">
                  Batch consistency at scale
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  This full-unit calibration and verification process helps
                  OEM/ODM customers maintain product consistency across
                  batches, especially for high-volume private label or
                  regulated medical device projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
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
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start your pulse oximeter OEM/ODM project
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for a pulse oximeter OEM/ODM manufacturer for private
            label pulse oximeter projects, custom pulse oximeter supplier
            support, certified model experience, production verification and
            connected-device customization? Share your project requirements
            with YimiLife’s OEM/ODM team.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Submit Pulse Oximeter OEM/ODM Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/technology"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request Technical Brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
