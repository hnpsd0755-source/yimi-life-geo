import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Pulse Oximeter Product Family | Fingertip, Handheld, Pediatric & Advanced Models | YimiLife",
  description:
    "Explore YimiLife pulse oximeter product architecture including fingertip, handheld, pediatric, dry-battery, advanced rechargeable BLE and voice-enabled SpO2 monitoring configurations.",
  alternates: {
    canonical: "https://www.yimilife.com/products/pulse-oximeter",
  },
};

type IconProps = {
  className?: string;
};

const CheckIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ArrowIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const PulseIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M2 12h4l2.5-7 5 14 2.5-7h6" />
  </svg>
);

const LayersIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 18 9 5 9-5" />
  </svg>
);

const CpuIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);

const ShieldIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.1 6.2-2.6a1.2 1.2 0 0 1 1.6 0C14.5 3.9 17 5 19 5a1 1 0 0 1 1 1v7Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Badge = ({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "slate" | "cyan" | "emerald";
}) => {
  const toneClass = {
    blue: "border-blue-100 bg-blue-50 text-blue-700",
    cyan: "border-cyan-100 bg-cyan-50 text-cyan-700",
    slate: "border-slate-200 bg-slate-50 text-slate-700",
    emerald: "border-emerald-100 bg-emerald-50 text-emerald-700",
  }[tone];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${toneClass}`}
    >
      {children}
    </span>
  );
};

const fingertipTracks = [
  {
    title: "Economy Retail Fingertip Models",
    eyebrow: "High-volume baseline",
    description:
      "Cost-conscious finger-clip SpO2 devices for retail pharmacy, distributor programs and general home healthcare product lines.",
    keyInfo: ["AAA dry battery", "LED / OLED display", "High-volume projects"],
    tags: ["Cost-optimized", "Distributor-ready", "BLE optional"],
    models: ["YM101 Economy", "YM201 LED/OLED"],
    visualLabel: "Dry-battery retail models",
    icon: PulseIcon,
  },
  {
    title: "Mainstream OLED Fingertip Models",
    eyebrow: "Private-label mainstream",
    description:
      "Balanced fingertip pulse oximeter configurations for private label medical device brands that need display quality, stable operation and flexible housing options.",
    keyInfo: ["Dual-color OLED", "Adult / family use", "BLE optional"],
    tags: ["OLED UI", "Mainstream retail", "Voice optional"],
    models: ["YM202 OLED", "YM302 Display Plus"],
    visualLabel: "Mainstream OLED models",
    icon: ShieldIcon,
  },
  {
    title: "Advanced Fingertip Models",
    eyebrow: "Rechargeable + BLE standard",
    description:
      "Advanced fingertip SpO2 models positioned for premium connected projects, with rechargeable lithium battery architecture and BLE connectivity as standard configuration directions.",
    keyInfo: [
      "Lithium battery standard",
      "BLE standard",
      "Type-C charging direction",
    ],
    tags: ["Rechargeable", "BLE standard", "Premium connected"],
    models: ["YM401 Advanced", "YM503 Advanced BLE"],
    visualLabel: "Advanced lithium + BLE models",
    icon: CpuIcon,
  },
  {
    title: "Pediatric Fingertip Models",
    eyebrow: "Child-oriented design",
    description:
      "Pediatric pulse oximeter configurations with child-friendly housing, smaller finger-cavity considerations, color display options and family healthcare branding potential.",
    keyInfo: [
      "Pediatric housing",
      "Small finger-cavity consideration",
      "BLE optional",
    ],
    tags: ["Pediatric use", "Child housing", "TFT / OLED options"],
    models: ["YM603 Pediatric", "YM602 Child Display"],
    visualLabel: "Pediatric fingertip models",
    icon: LayersIcon,
  },
];

const fingertipModelVisuals = fingertipTracks.map((track) => ({
  title: track.visualLabel,
  models: track.models,
  tags: track.tags,
}));

const handheldModels = [
  {
    model: "YH01",
    role: "Portable handheld configuration",
    description:
      "YH01 is positioned as a compact handheld SpO2 model direction with external probe configuration and a portable product structure.",
    display: "Standard / larger handheld display option",
    ble: "Optional BLE discussion",
    power: "Dry battery or rechargeable configuration by project",
    scenario: "Point-of-care support, nursing support and distributor handheld SpO2 projects",
  },
  {
    model: "YH02",
    role: "Enhanced handheld configuration",
    description:
      "YH02 follows the same handheld SpO2 product family logic as YH01, with configuration differences mainly around display, BLE and power selection.",
    display: "Larger UI / waveform display discussion",
    ble: "Optional BLE discussion",
    power: "Rechargeable lithium or dry-battery configuration by project",
    scenario: "Projects requiring a more instrument-like handheld SpO2 form factor",
  },
];

const fingertipSelector = [
  {
    configuration: "Basic Adult Fingertip Model",
    bestFor: "Cost-sensitive distributor product line",
    display: "LED / OLED",
    ble: "Optional / not required",
    voice: "Optional",
    signal: "Standard SpO2 spot-check configuration",
    projectFit: "High-volume private label orders",
  },
  {
    configuration: "Mainstream OLED Fingertip Model",
    bestFor: "Balanced retail and pharmacy product lines",
    display: "Dual-color OLED",
    ble: "Optional BLE",
    voice: "Optional",
    signal: "Anti-motion filtering option",
    projectFit: "Mainstream medical device brands",
  },
  {
    configuration: "Advanced Fingertip Model",
    bestFor: "Premium rechargeable and connected SpO2 projects",
    display: "OLED / TFT",
    ble: "Standard BLE",
    voice: "Optional",
    signal:
      "24-bit ADC front-end option with low-perfusion and anti-motion processing discussion in selected configurations",
    projectFit:
      "Premium retail, app-connected and differentiated SpO2 programs",
  },
  {
    configuration: "Pediatric Fingertip Model",
    bestFor: "Child-friendly family healthcare product",
    display: "TFT / OLED",
    ble: "Optional BLE",
    voice: "Optional",
    signal: "Pediatric configuration and housing discussion",
    projectFit: "Pediatric and mother-baby brand projects",
  },
];

const processingOptions = [
  "SpO2 and pulse rate measurement across adult and selected pediatric configurations",
  "OLED, TFT and high-contrast display options depending on model direction",
  "AAA dry-battery models and rechargeable lithium-battery models are separated by product configuration",
  "BLE data transmission and iOS / Android SDK integration discussions for selected or advanced configurations",
  "24-bit high-resolution ADC front-end architecture in selected configurations",
  "Advanced anti-motion artifact filtering for unstable finger conditions",
  "Low-perfusion signal processing for challenging PI scenarios, with internal development targets reaching PI 0.1% scenarios in selected configurations",
  "PulseMatrix™ signal optimization platform for SpO2 waveform acquisition and signal interpretation",
];

const engineeringAreas = [
  {
    title: "Optical & Structural Design",
    description:
      "Finger-cavity geometry, optical shielding, silicone contact structure and ambient-light reduction are considered during product configuration reviews.",
    label: "Structure",
  },
  {
    title: "Hardware Front-End Architecture",
    description:
      "Selected SpO2 configurations may use high-resolution analog front-end architecture, photodiode signal conditioning and low-noise PCB layout considerations.",
    label: "Hardware",
  },
  {
    title: "Signal Processing Verification",
    description:
      "Motion interference, low-perfusion signal handling and simulator-based production verification can be reviewed as part of project-specific product planning.",
    label: "Signal",
  },
];

const faqs = [
  {
    question:
      "How does YimiLife support pediatric pulse oximeter configurations for private label medical device brands?",
    answer:
      "YimiLife can discuss pediatric pulse oximeter configurations including child-friendly housing, smaller finger-cavity considerations, display options, packaging direction and project-specific labeling needs. Final specifications should be confirmed according to the selected model and target market requirements.",
  },
  {
    question:
      "Can YimiLife discuss BLE pulse oximeter SDK integration for iOS or Android apps?",
    answer:
      "Yes. For BLE-enabled pulse oximeter projects, YimiLife can discuss Bluetooth Low Energy protocol documentation, data transmission formats and iOS / Android SDK integration support depending on the selected hardware configuration and software scope.",
  },
  {
    question:
      "What is the difference between fingertip and handheld pulse oximeter product forms?",
    answer:
      "Fingertip pulse oximeters are compact, high-volume product forms for home healthcare, pharmacy and private label retail programs. Handheld pulse oximeters are more professional-oriented configurations with external probe options, larger displays and extended monitoring or data-review discussions.",
  },
  {
    question:
      "How are low-perfusion and motion artifact challenges considered in YimiLife SpO2 product development?",
    answer:
      "Selected YimiLife SpO2 configurations can combine high-resolution front-end architecture, anti-motion filtering and PulseMatrix™ signal optimization to support challenging signal conditions. Specific performance claims should be reviewed by model, configuration and verification scope.",
  },
  {
    question:
      "What fingertip pulse oximeter configuration is suitable for elderly users?",
    answer:
      "For elderly users, projects can consider high-contrast display options, voice prompt configurations, accessible result reading and optional alarm settings. These choices can help improve readability and usability in home care scenarios.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/products/pulse-oximeter#webpage",
      url: "https://www.yimilife.com/products/pulse-oximeter",
      name: "Pulse Oximeter Product Family | YimiLife",
      description:
        "YimiLife pulse oximeter product family page covering fingertip, handheld, pediatric, advanced BLE and voice-enabled SpO2 monitoring configurations.",
      isPartOf: {
        "@type": "WebSite",
        name: "YimiLife",
        url: "https://www.yimilife.com",
      },
    },
    {
      "@type": "BreadcrumbList",
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
          name: "Pulse Oximeters",
          item: "https://www.yimilife.com/products/pulse-oximeter",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Pulse Oximeter Product Types",
      itemListElement: [
        "Fingertip Pulse Oximeter",
        "Handheld Pulse Oximeter",
        "Pediatric Pulse Oximeter",
        "Advanced Fingertip Pulse Oximeter",
        "BLE Optional Fingertip Pulse Oximeter",
        "Voice-Enabled Pulse Oximeter",
      ].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "MedicalDevice",
          name,
          manufacturer: {
            "@type": "Organization",
            name: "YimiLife",
          },
          description: `${name} product configuration for SpO2 and pulse rate monitoring discussions under the YimiLife pulse oximeter product family.`,
          purpose: "SpO2 and pulse rate monitoring",
        },
      })),
    },
    {
      "@type": "FAQPage",
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

export default function PulseOximeterProductPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/20 md:p-12 lg:grid-cols-[1.02fr_0.98fr] lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-400">
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
              <span>/</span>
              <span className="text-cyan-300">
                Pulse Oximeter Product Architecture
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Pulse Oximeter Product Architecture
            </h1>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              Explore YimiLife pulse oximeter categories across two product
              disciplines: highly configurable fingertip pulse oximeter models
              and focused handheld SpO2 monitoring instruments.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-400">
              For private label medical device brands, YimiLife supports
              structured product configuration discussions across display, power
              supply, BLE option, user group and selected signal-processing
              options.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#fingertip-section"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Fingertip Matrix
                <ArrowIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#handheld-section"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Handheld Spotlight
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative flex h-full min-h-[320px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#67e8f9_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative w-full max-w-md rounded-[2rem] border border-cyan-300/20 bg-white/10 p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {["Fingertip", "Pediatric", "Advanced", "Handheld"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/10 p-4"
                      >
                        <div className="mb-4 h-24 rounded-xl bg-gradient-to-br from-white/70 to-cyan-100/40 shadow-inner" />
                        <p className="text-sm font-semibold text-white">
                          {item}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          SpO2 product form
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fingertip tracks */}
      <section
        id="fingertip-section"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <Badge>Configurable Category</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Fingertip Pulse Oximeter Tracks
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Fingertip pulse oximeters are YimiLife&apos;s main SpO2 product
              line. The product structure is organized by commercial track,
              power architecture, BLE option and user group, so buyers can quickly
              match a product direction before reviewing model details.
            </p>

            <div className="mt-8 space-y-4">
              {fingertipTracks.map((track) => {
                const Icon = track.icon;
                return (
                  <article
                    key={track.title}
                    className="group rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-lg"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                        <Icon />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                          {track.eyebrow}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                          {track.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {track.description}
                        </p>
                        <div className="mt-4 grid gap-2 sm:grid-cols-3">
                          {track.keyInfo.map((item) => (
                            <div
                              key={item}
                              className="rounded-2xl bg-slate-50 px-3 py-2 text-xs font-semibold leading-5 text-slate-700"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Model visual board
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Representative Fingertip Model Directions
                </h3>
              </div>
              <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                Main line
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The visual system groups representative fingertip model directions by product track, helping buyers understand dry-battery, OLED, advanced lithium-BLE and pediatric configurations without seeing all SKUs as a flat list.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {fingertipModelVisuals.map((item, index) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-cyan-50"
                >
                  <div className="flex h-44 items-center justify-center p-5">
                    <div className="relative h-28 w-40 rounded-[2rem] border border-slate-200 bg-slate-950 shadow-xl">
                      <div className="absolute left-1/2 top-4 h-11 w-24 -translate-x-1/2 rounded-xl bg-cyan-300/30" />
                      <div className="absolute bottom-5 left-1/2 h-3 w-16 -translate-x-1/2 rounded-full bg-white/20" />
                      <div className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-cyan-700 shadow-md">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 bg-white/80 p-4">
                    <h4 className="text-base font-semibold text-slate-950">
                      {item.title}
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.models.map((model) => (
                        <span
                          key={model}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Handheld spotlight */}
      <section
        id="handheld-section"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-8"
      >
        <div className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Badge tone="emerald">Professional Product Line</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Handheld Pulse Oximeter Models
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Handheld pulse oximeters are a focused professional supplement to
              the broader fingertip product family. YimiLife currently positions
              this line around two models, YH01 and YH02, with differences mainly in display, BLE option and dry-battery or lithium-battery configuration.
            </p>

            <div className="mt-7 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Model configuration comparison
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {handheldModels.map((model) => (
                  <div key={model.model} className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {model.model}
                      </h3>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Handheld
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-700">
                      {model.role}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {model.description}
                    </p>
                    <div className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                      <p><span className="font-semibold text-slate-950">Display:</span> {model.display}</p>
                      <p><span className="font-semibold text-slate-950">BLE:</span> {model.ble}</p>
                      <p><span className="font-semibold text-slate-950">Power:</span> {model.power}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm leading-7 text-slate-700">
              <span className="font-semibold text-emerald-800">
                Project fit:
              </span>{" "}
              YH01 and YH02 belong to the same focused handheld SpO2 family. The
              purchasing decision is mainly driven by configuration differences
              such as display, BLE and battery architecture rather than a large
              model pool.
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-emerald-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Two-model visual combination
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              YH01 + YH02 Handheld Model Combination
            </h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {handheldModels.map((model, index) => (
                <div
                  key={model.model}
                  className="flex h-72 items-center justify-center rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-inner"
                >
                  <div
                    className={`relative rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-xl ${
                      index === 0 ? "h-48 w-40" : "h-52 w-52"
                    }`}
                  >
                    <div className="mb-4 h-24 rounded-2xl bg-emerald-300/20" />
                    <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">
                      {model.model}
                    </p>
                    <p className="mt-2 text-xl font-semibold">98% / 72</p>
                    <div className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-emerald-700 shadow-md">
                      H{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fingertip selector */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Badge tone="slate">Selection Matrix</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Fingertip Pulse Oximeter Configuration Selector
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            Use this matrix to narrow down fingertip pulse oximeter
            configurations by target user, display, BLE option, voice prompt,
            signal-processing option and project scenario.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "All",
            "Adult",
            "Pediatric",
            "Advanced",
            "BLE Optional",
            "Voice",
            "TFT Display",
            "High-Volume",
            "App Integration",
            "Elderly Care",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1040px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-950 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  <th className="p-5">Configuration</th>
                  <th className="p-5">Best For</th>
                  <th className="p-5">Display</th>
                  <th className="p-5">BLE Option</th>
                  <th className="p-5">Voice</th>
                  <th className="p-5">Signal / Algorithm Option</th>
                  <th className="p-5">Project Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {fingertipSelector.map((row) => (
                  <tr
                    key={row.configuration}
                    className="transition hover:bg-cyan-50/40"
                  >
                    <td className="p-5 font-semibold text-slate-950">
                      {row.configuration}
                    </td>
                    <td className="p-5 leading-6">{row.bestFor}</td>
                    <td className="p-5 font-medium">{row.display}</td>
                    <td className="p-5">{row.ble}</td>
                    <td className="p-5">{row.voice}</td>
                    <td className="p-5 leading-6 text-cyan-800">
                      {row.signal}
                    </td>
                    <td className="p-5 leading-6">{row.projectFit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical snapshot */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-xl md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div>
            <Badge tone="cyan">Signal Processing Options</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Key Parameters & Signal Processing Options
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              Advanced signal-processing language is used carefully on this
              page: availability and performance should be reviewed by model,
              configuration and verification scope.
            </p>
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Platform Anchor
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                PulseMatrix™ Signal Optimization Platform
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processingOptions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                <span className="text-sm font-medium leading-6 text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering reference areas */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Badge tone="slate">Engineering Reference</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Product Engineering Reference Areas
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            These areas help B2B buyers understand how product configuration
            discussions connect to structure, hardware and signal verification.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {engineeringAreas.map((area) => (
            <article
              key={area.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-44 bg-slate-950 p-5">
                <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(#67e8f9_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    {area.label}
                  </span>
                  <div className="h-14 rounded-2xl border border-white/10 bg-white/[0.04]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {area.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10 lg:p-12">
          <div className="max-w-3xl">
            <Badge tone="slate">FAQ Reference</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Sourcing Questions for Pulse Oximeter Product Selection
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Practical answers for product managers and private label medical
              device brands comparing pulse oximeter configurations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold leading-8 text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-cyan-700 p-8 text-center text-white shadow-xl shadow-cyan-900/10 md:p-14">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Need pulse oximeter product specifications or configuration support?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-cyan-50">
            Contact YimiLife to discuss fingertip pulse oximeter configurations,
            handheld SpO2 model directions, BLE integration and product
            selection for your target market.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-cyan-800 transition hover:bg-cyan-50"
            >
              Contact YimiLife
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Discuss Pulse Oximeter Configuration
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
