import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Pulse Oximeter Product Family | Fingertip, Handheld, Pediatric & Advanced Models | YimiLife",
  description:
    "Explore YimiLife pulse oximeter product architecture including fingertip, handheld, pediatric and advanced rechargeable BLE SpO2 configurations, with clearly tiered signal-processing options from standard PI 0.3% to PulseMatrix™ low-perfusion architectures.",
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
      "Cost-conscious finger-clip SpO2 models for pharmacy retail, distributor programs and high-volume private-label product lines.",
    keyInfo: [
      "Standard Signal",
      "AAA dry battery / BLE optional",
    ],
    tags: ["High-volume", "Standard Signal", "BLE optional"],
    models: ["YM101 Economy", "YM201 Retail"],
    visuals: [
      {
        model: "YM101",
        note: "Compact dry-battery baseline",
        shape: "compact",
      },
      {
        model: "YM201",
        note: "Retail display variant",
        shape: "wide",
      },
    ],
    icon: PulseIcon,
  },
  {
    title: "Mainstream OLED Fingertip Models",
    eyebrow: "Private-label mainstream",
    description:
      "Balanced OLED fingertip configurations for medical device brands that need stronger usability, stable signal acquisition and retail-ready appearance.",
    keyInfo: [
      "OLED UI + voice option",
      "Standard Signal / PulseMatrix™ option",
    ],
    tags: ["OLED UI", "PulseMatrix™ optional", "Voice option"],
    models: ["YM202 OLED", "YM302 Display Plus"],
    visuals: [
      {
        model: "YM202",
        note: "Dual-color OLED model",
        shape: "wide",
      },
      {
        model: "YM302",
        note: "Display-enhanced model",
        shape: "compact",
      },
    ],
    icon: ShieldIcon,
  },
  {
    title: "Advanced Fingertip Models",
    eyebrow: "Lithium battery + BLE standard",
    description:
      "Advanced fingertip SpO2 models for premium connected projects, with rechargeable lithium battery architecture and BLE connectivity as the standard direction.",
    keyInfo: [
      "Lithium battery + BLE standard",
      "PulseMatrix™ / 24-bit ADC AFE option",
    ],
    tags: ["Rechargeable", "BLE standard", "24-bit ADC AFE option"],
    models: ["YM401 Advanced", "YM503 Advanced BLE"],
    visuals: [
      {
        model: "YM401",
        note: "Rechargeable advanced model",
        shape: "compact",
      },
      {
        model: "YM503",
        note: "BLE advanced model",
        shape: "wide",
      },
    ],
    icon: CpuIcon,
  },
  {
    title: "Pediatric Fingertip Models",
    eyebrow: "Child-oriented design",
    description:
      "Pediatric pulse oximeter configurations with child-friendly housing, smaller finger-cavity considerations, color display options and family healthcare branding potential.",
    keyInfo: [
      "Child housing + smaller cavity",
      "TFT / OLED + signal tuning option",
    ],
    tags: ["Pediatric use", "Child housing", "Color display"],
    models: ["YM603 Pediatric", "YM602 Child Display"],
    visuals: [
      {
        model: "YM603",
        note: "Pediatric TFT model",
        shape: "wide",
      },
      {
        model: "YM602",
        note: "Child display model",
        shape: "compact",
      },
    ],
    icon: LayersIcon,
  },
];

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
    signal: "Standard Signal",
    projectFit: "High-volume private label orders",
  },
  {
    configuration: "Mainstream OLED Fingertip Model",
    bestFor: "Balanced retail and pharmacy product lines",
    display: "Dual-color OLED",
    ble: "Optional BLE",
    voice: "Optional",
    signal: "PulseMatrix™",
    projectFit: "Mainstream medical device brands",
  },
  {
    configuration: "Advanced Fingertip Model",
    bestFor: "Premium rechargeable and connected SpO2 projects",
    display: "OLED / TFT",
    ble: "Standard BLE",
    voice: "Optional",
    signal:
      "PulseMatrix™ + 24-bit ADC AFE",
    projectFit:
      "Premium retail, app-connected and differentiated SpO2 programs",
  },
  {
    configuration: "Pediatric Fingertip Model",
    bestFor: "Child-friendly family healthcare product",
    display: "TFT / OLED",
    ble: "Optional BLE",
    voice: "Optional",
    signal: "Standard Signal / PulseMatrix™ option",
    projectFit: "Pediatric and mother-baby brand projects",
  },
];

const signalHighlights = [
  {
    title: "Motion Artifact Control",
    description:
      "Actively stabilizes SpO2 waveform capture during finger shake, loose placement and short-term movement, improving real-world spot-check usability.",
    visual: "ppg",
  },
  {
    title: "Optical Signal Architecture",
    description:
      "Builds cleaner PPG acquisition from the hardware side through finger-cavity shielding, light-path control and low-noise front-end layout.",
    visual: "trace",
  },
  {
    title: "Low-Perfusion Optimization",
    description:
      "Pushes selected configurations from standard PI 0.3% tracking toward PulseMatrix™ PI 0.1% low-perfusion performance targets.",
    visual: "wave",
  },
  {
    title: "Production Verification",
    description:
      "Drives 100% production-line calibration and batch consistency using Fluke Index 2 clinical simulators where applicable.",
    visual: "grid",
  },
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
      "YimiLife structures low-perfusion handling into signal-processing tiers: standard configurations around a PI 0.3% level, selected PulseMatrix™ configurations around a PI 0.1% level, and high-end configurations that may combine PulseMatrix™ with a 24-bit ADC AFE path for PI 0.025% level engineering targets. Specific performance claims should be reviewed by model, configuration and verification scope.",
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
        "YimiLife pulse oximeter product family page covering fingertip, handheld, pediatric and advanced rechargeable BLE SpO2 configurations with tiered signal-processing options.",
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
        "PulseMatrix Low-Perfusion Fingertip Pulse Oximeter",
        "24-bit ADC AFE Advanced Fingertip Pulse Oximeter",
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
              supply, BLE option, user group and tiered signal-processing
              architecture.
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
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 shadow-xl md:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge tone="cyan">Configurable Category</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Fingertip Pulse Oximeter Tracks
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                Four compact product tracks connect buyer requirements with representative
                model directions. Each row keeps the configuration logic on the left and
                the linked model visuals on the right.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-4 text-sm leading-6 text-cyan-100 lg:max-w-sm">
              <span className="font-semibold text-cyan-200">Reading logic:</span> choose the track first,
              then review the two linked model directions beside it.
            </div>
          </div>

          <div className="mt-8 space-y-3 md:space-y-4">
            {fingertipTracks.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.title}
                  className="group grid gap-3 rounded-[1.75rem] border border-slate-700/80 bg-slate-900/70 p-3 shadow-sm transition duration-300 hover:border-cyan-300 hover:bg-slate-900 hover:shadow-[0_0_0_1px_rgba(103,232,249,0.25),0_24px_55px_-35px_rgba(34,211,238,0.8)] md:p-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch"
                >
                  <div className="rounded-[1.35rem] border border-slate-700 bg-slate-950/60 p-4 transition duration-300 group-hover:border-cyan-300/80 group-hover:bg-cyan-950/35 md:p-5">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                        <Icon />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                          {track.eyebrow}
                        </p>
                        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-white md:text-2xl">
                          {track.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {track.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {track.keyInfo.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-semibold leading-5 text-slate-200 transition duration-300 group-hover:border-cyan-300/45 group-hover:bg-cyan-400/10 group-hover:text-cyan-50"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {track.visuals.map((visual, index) => (
                      <div
                        key={visual.model}
                        className="overflow-hidden rounded-[1.35rem] border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/35 shadow-inner transition duration-300 group-hover:border-cyan-300 group-hover:from-cyan-950/60 group-hover:via-slate-950 group-hover:to-cyan-900/45 group-hover:shadow-[0_0_0_1px_rgba(103,232,249,0.16),0_18px_40px_-28px_rgba(34,211,238,0.9)]"
                      >
                        <div className="flex h-36 items-center justify-center p-4 md:h-full md:min-h-[175px]">
                          <div
                            className={`relative rounded-[1.6rem] border border-slate-600 bg-slate-950 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300 group-hover:shadow-cyan-300/50 ${
                              visual.shape === "wide" ? "h-24 w-40" : "h-28 w-32"
                            }`}
                          >
                            <div className="absolute left-1/2 top-3 h-9 w-20 -translate-x-1/2 rounded-lg bg-cyan-300/30" />
                            <div className="absolute bottom-4 left-1/2 h-2.5 w-14 -translate-x-1/2 rounded-full bg-white/20" />
                            <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-[11px] font-semibold text-slate-950 shadow-md">
                              {index + 1}
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-slate-700 bg-slate-950/80 px-4 py-3">
                          <h4 className="text-base font-semibold tracking-tight text-white">
                            {visual.model}
                          </h4>
                          <p className="mt-0.5 text-xs leading-5 text-slate-300">
                            {visual.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
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
            signal technology and project scenario.
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
            "PulseMatrix™",
            "24-bit ADC AFE",
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
                  <th className="p-5">Signal Technology</th>
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

      {/* Handheld spotlight */}
      <section
        id="handheld-section"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-10 lg:px-8"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge tone="emerald">Professional Product Line</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Handheld Pulse Oximeter Models
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              YH01 and YH02 belong to one focused handheld SpO2 family. The selection
              difference is mainly display, BLE and battery configuration.
            </p>
          </div>
        </div>

        <article className="mt-8 grid gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:border-emerald-300 hover:shadow-lg md:p-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="rounded-[1.35rem] border border-slate-100 bg-emerald-50/45 p-4 md:p-5">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <PulseIcon />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Handheld SpO2 family
                </p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                  YH01 / YH02 Configuration Pair
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A compact two-model handheld line for customers that need external-probe
                  SpO2 form factors rather than a broad fingertip product pool.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Display: standard or larger UI",
                "Power: dry battery or lithium configuration",
                "BLE: optional by project",
                "Probe-based handheld form factor",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-100 bg-white px-3 py-2 text-xs font-semibold leading-5 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {handheldModels.map((model, index) => (
              <div
                key={model.model}
                className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 shadow-inner transition duration-300 hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-36 items-center justify-center p-4 md:h-full md:min-h-[175px]">
                  <div
                    className={`relative rounded-[1.6rem] border border-slate-200 bg-slate-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-emerald-200/60 ${
                      index === 0 ? "h-28 w-32" : "h-24 w-40"
                    }`}
                  >
                    <div className="absolute left-1/2 top-3 h-9 w-20 -translate-x-1/2 rounded-lg bg-emerald-300/25" />
                    <div className="absolute bottom-4 left-1/2 h-2.5 w-14 -translate-x-1/2 rounded-full bg-white/20" />
                    <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-emerald-700 shadow-md">
                      H{index + 1}
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 bg-white/95 px-4 py-3">
                  <h4 className="text-base font-semibold tracking-tight text-slate-950">
                    {model.model}
                  </h4>
                  <p className="mt-0.5 text-xs leading-5 text-slate-600">
                    Display / BLE / battery configuration option
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Technical snapshot */}
      <section
        className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
        aria-label="YimiLife PulseMatrix proprietary signal platform showcasing 24-bit ADC front-end architecture, PI 0.1 low perfusion tracking, and Fluke Index 2 calibration workflow."
      >
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-xl md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-stretch">
            <div className="flex h-full flex-col justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <Badge tone="cyan">Technical Highlights</Badge>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                PulseMatrix™ Signal Platform
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-slate-300">
                A focused signal platform for extracting cleaner PPG waveforms
                under low perfusion, finger movement and optical-noise
                conditions.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-amber-300/35 bg-gradient-to-br from-amber-300/10 via-white/[0.04] to-cyan-300/5 p-5 shadow-[inset_0_0_0_1px_rgba(251,191,36,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                  Core Anchor
                </p>
                <p className="mt-3 text-xl font-semibold leading-8 text-white">
                  Low-perfusion extraction, anti-motion filtering and
                  production verification in one signal architecture.
                </p>
              </div>
            </div>

            <div className="grid h-full gap-4 sm:grid-cols-2">
              {signalHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className="relative flex min-h-[230px] flex-col overflow-hidden rounded-[1.75rem] border border-amber-300/45 bg-gradient-to-br from-amber-300/10 via-white/[0.05] to-cyan-300/5 p-6 shadow-[0_0_0_1px_rgba(251,191,36,0.12),0_18px_45px_-32px_rgba(251,191,36,0.8)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(90deg,rgba(148,163,184,0.38)_1px,transparent_1px),linear-gradient(0deg,rgba(148,163,184,0.28)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <svg
                    className="pointer-events-none absolute bottom-4 right-4 h-24 w-40 text-cyan-200/25"
                    viewBox="0 0 180 90"
                    fill="none"
                    aria-hidden="true"
                  >
                    {index === 1 ? (
                      <>
                        <path d="M18 20H72C92 20 88 48 110 48H162" stroke="currentColor" strokeWidth="2" />
                        <path d="M18 44H58C84 44 86 68 118 68H162" stroke="currentColor" strokeWidth="2" />
                        <circle cx="72" cy="20" r="4" fill="currentColor" />
                        <circle cx="110" cy="48" r="4" fill="currentColor" />
                      </>
                    ) : index === 3 ? (
                      <>
                        <path d="M20 22H160M20 46H160M20 70H160" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M42 12V78M82 12V78M122 12V78" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M24 66C42 38 54 36 68 54C86 78 98 74 112 40C122 18 138 20 158 44" stroke="currentColor" strokeWidth="2.4" />
                      </>
                    ) : (
                      <path d="M16 58C28 58 30 42 42 42C56 42 56 72 70 72C86 72 84 18 100 18C116 18 114 58 130 58C146 58 148 42 164 42" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    )}
                  </svg>
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-amber-300/50 bg-amber-300/10 text-amber-200">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="relative z-10 mt-5 flex-1 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
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
