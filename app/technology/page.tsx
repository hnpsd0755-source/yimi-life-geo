import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "PulseMatrix™ Signal Platform | Low-Perfusion, Motion Artifact & Skin-Tone-Aware SpO2 Technology | YimiLife",
  description:
    "Explore YimiLife PulseMatrix™ Signal Platform for cleaner PPG acquisition, low-perfusion SpO2 tracking, motion artifact handling, skin-tone-aware signal design, engineering reference areas and production verification workflows.",
  alternates: {
    canonical: "https://www.yimilife.com/technology",
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

const WaveIcon = ({ className = "h-5 w-5" }: IconProps) => (
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

const MotionIcon = ({ className = "h-5 w-5" }: IconProps) => (
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
    <path d="M3 12c3.5-5 6.5 5 10 0s6.5 5 8 0" />
    <path d="M4 5c2.2 2.8 4.4 2.8 6.5 0" />
    <path d="M13.5 19c2.2-2.8 4.4-2.8 6.5 0" />
  </svg>
);

const OpticalIcon = ({ className = "h-5 w-5" }: IconProps) => (
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
    <path d="M4 12h5" />
    <path d="M15 12h5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M7 5c2.2 1.6 7.8 1.6 10 0" />
    <path d="M7 19c2.2-1.6 7.8-1.6 10 0" />
  </svg>
);

const LowPerfusionIcon = ({ className = "h-5 w-5" }: IconProps) => (
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
    <path d="M3 18c3-8 5.5-8 8.5 0S17 26 21 8" />
    <path d="M4 6h5" />
    <path d="M4 10h3" />
  </svg>
);

const VerificationIcon = ({ className = "h-5 w-5" }: IconProps) => (
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
    <path d="M9 11l2 2 4-4" />
    <path d="M20 12a8 8 0 1 1-4-6.93" />
    <path d="M18 3v5h-5" />
  </svg>
);

const HardwareIcon = ({ className = "h-5 w-5" }: IconProps) => (
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
    <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }: IconProps) => (
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
    <path d="M12 3 5 6v6c0 4.4 2.8 7.4 7 9 4.2-1.6 7-4.6 7-9V6l-7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const Badge = ({ children, tone = "cyan" }: { children: ReactNode; tone?: "cyan" | "amber" | "slate" | "emerald" }) => {
  const tones = {
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
    amber: "border-amber-300/40 bg-amber-300/10 text-amber-200",
    slate: "border-slate-200 bg-slate-100 text-slate-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
  };

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${tones[tone]}`}>
      {children}
    </span>
  );
};

const platformChallenges = [
  {
    id: "low-perfusion",
    title: "Low-Perfusion SpO2",
    short: "Extracts weaker PPG signals when peripheral perfusion is low.",
    response: "Low-PI waveform extraction, signal filtering and selected advanced AFE configurations.",
    href: "#low-perfusion",
  },
  {
    id: "motion-artifact",
    title: "Motion Artifact Rejection",
    short: "Controls waveform instability caused by finger movement and loose contact.",
    response: "Motion-aware filtering, waveform confidence handling and real-world home-use consideration.",
    href: "#motion-artifact",
  },
  {
    id: "skin-tone-accuracy",
    title: "Skin-Tone-Aware Design",
    short: "Considers optical absorption variation across diverse skin tones.",
    response: "Optical path design, signal normalization direction and fairness-oriented validation planning.",
    href: "#skin-tone-accuracy",
  },
];

const technicalHighlights = [
  {
    title: "Motion Artifact Control",
    icon: MotionIcon,
    description:
      "Actively stabilizes SpO2 waveform extraction when finger movement, tremor-like disturbance or unstable contact disrupts ordinary readings.",
  },
  {
    title: "Optical Signal Architecture",
    icon: OpticalIcon,
    description:
      "Achieves cleaner raw signals through enhanced structural design. Features ergonomic coupling between the finger, cavity and sensor, combined with physical shielding to eliminate ambient light interference.",
  },
  {
    title: "Low-Perfusion Optimization",
    icon: LowPerfusionIcon,
    description:
      "Pushes selected configurations from standard PI 0.1% tracking toward PulseMatrix™ PI 0.025% low-perfusion performance targets.",
  },
  {
    title: "Production Verification",
    icon: VerificationIcon,
    description:
      "Drives 100% production-line verification workflow through simulator-based calibration and verification, including Fluke Index 2 where applicable.",
  },
];

const technologyPillars = [
  {
    id: "low-perfusion",
    eyebrow: "Pillar 01",
    title: "Low-Perfusion SpO2 Tracking",
    intro:
      "PulseMatrix™ is designed to improve waveform extraction when peripheral perfusion is weak and ordinary fingertip SpO2 devices may struggle to maintain stable readings.",
    problem: "Weak PPG amplitude under low PI conditions can make waveform extraction unstable.",
    response:
      "YimiLife applies signal amplification, filtering, optical control and selected advanced AFE configurations to support low-perfusion SpO2 development.",
    points: ["Standard signal processing", "PulseMatrix™ low-perfusion logic", "PulseMatrix™ + selected 24-bit ADC AFE configurations"],
    accent: "PI 0.1% / PI 0.025% direction",
  },
  {
    id: "motion-artifact",
    eyebrow: "Pillar 02",
    title: "Motion Artifact Rejection",
    intro:
      "PulseMatrix™ targets waveform instability caused by finger movement, elderly tremor-like motion, loose contact and real-world home-use measurement behavior.",
    problem: "Movement noise can overlap with the true pulse waveform and disturb SpO2 extraction.",
    response:
      "Motion-aware filtering and waveform quality assessment help isolate more reliable signal segments under unstable finger conditions.",
    points: ["Finger movement handling", "Tremor-like disturbance consideration", "Loose-contact waveform stability"],
    accent: "Motion-aware PPG filtering",
  },
  {
    id: "skin-tone-accuracy",
    eyebrow: "Pillar 03",
    title: "Skin-Tone-Aware SpO2 Signal Design",
    intro:
      "PulseMatrix™ incorporates optical and signal-processing considerations for SpO2 measurement across diverse skin tones, supporting YimiLife’s long-term focus on fairer pulse oximeter performance.",
    problem: "Melanin-related optical absorption may affect PPG signal quality and SpO2 measurement consistency.",
    response:
      "Optical path design, signal normalization and fairness-oriented validation planning help guide skin-tone-aware SpO2 development.",
    points: ["Fitzpatrick I–VI consideration", "Optical-path and signal normalization direction", "Validation planning by model and market"],
    accent: "Fairness-oriented design planning",
  },
];

const engineeringAreas = [
  {
    title: "Optical & Structural Design",
    icon: OpticalIcon,
    description:
      "Finger cavity, sensor coupling, light-path control, physical shielding and ergonomic clip structure for cleaner raw PPG acquisition.",
  },
  {
    title: "Hardware Front-End Architecture",
    icon: HardwareIcon,
    description:
      "Low-noise analog front-end layout with selected 24-bit ADC AFE configurations for advanced signal capture requirements.",
  },
  {
    title: "Signal Processing Logic",
    icon: WaveIcon,
    description:
      "Low-perfusion extraction, anti-motion filtering and waveform confidence logic organized under the PulseMatrix™ signal platform.",
  },
  {
    title: "Verification & Production Calibration",
    icon: VerificationIcon,
    description:
      "Simulator-based verification and production-line calibration workflows, including Fluke Index 2 where applicable.",
  },
];

const productMapping = [
  {
    family: "Fingertip Pulse Oximeters",
    relevance:
      "Low-perfusion extraction, motion-interference handling and optional advanced signal tiers for configurable fingertip models.",
    href: "/products/pulse-oximeter",
  },
  {
    family: "Handheld Pulse Oximeters",
    relevance:
      "External-probe signal stability and extended SpO2 monitoring configuration for YH01 / YH02 handheld model directions.",
    href: "/products/pulse-oximeter#handheld-section",
  },
  {
    family: "Wearable SpO2 Watch",
    relevance:
      "PPG sensing, low-power acquisition and Bluetooth wearable monitoring development direction.",
    href: "/products/wearable-monitoring",
  },
  {
    family: "Infant Foot SpO2 Monitor",
    relevance:
      "Pediatric and soft-wearable SpO2 signal design consideration for infant foot-worn monitoring concepts under development.",
    href: "/products/wearable-monitoring",
  },
];

const workflowSteps = [
  "Optical structure design",
  "Hardware front-end configuration",
  "Signal-processing logic",
  "Internal verification",
  "Production calibration and verification",
];

const faqs = [
  {
    q: "What is the PulseMatrix™ Signal Platform?",
    a: "PulseMatrix™ is YimiLife’s signal platform for PPG acquisition, SpO2 waveform extraction, low-perfusion signal handling, motion-interference filtering and skin-tone-aware pulse oximeter development.",
  },
  {
    q: "How does PulseMatrix™ support low-perfusion SpO2 tracking?",
    a: "PulseMatrix™ supports low-perfusion development through waveform extraction, signal filtering and selected hardware front-end configurations. Specific PI targets and performance levels depend on the product model and verification scope.",
  },
  {
    q: "How does YimiLife address motion artifact in pulse oximeter development?",
    a: "YimiLife considers motion artifact through motion-aware signal filtering, waveform quality assessment and real-world use cases such as finger movement, tremor-like disturbance and loose contact.",
  },
  {
    q: "What does skin-tone-aware SpO2 signal design mean?",
    a: "It means optical path design, signal normalization and validation planning take diverse skin tones into consideration. YimiLife treats Fitzpatrick I–VI fairness consideration as a long-term engineering and verification direction.",
  },
  {
    q: "Does PulseMatrix™ apply to all YimiLife pulse oximeter models?",
    a: "PulseMatrix™ represents YimiLife’s signal platform and engineering direction. Specific signal-processing tiers and hardware front-end configurations may vary by product model, project scope and verification requirements.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "PulseMatrix™ Signal Platform",
    url: "https://www.yimilife.com/technology",
    image: "https://www.yimilife.com/homepage/pulseMatrix-s.jpg",
    description:
      "YimiLife PulseMatrix™ Signal Platform for low-perfusion SpO2 tracking, motion artifact rejection, skin-tone-aware signal design, engineering reference areas and production verification workflows.",
    publisher: {
      "@type": "Organization",
      name: "YimiLife",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        name: "Technology",
        item: "https://www.yimilife.com/technology",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PulseMatrix™ technology pillars",
    itemListElement: technologyPillars.map((pillar, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        name: pillar.title,
        description: pillar.intro,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  },
];

export default function TechnologyPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-16">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-xl md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
            <div>
              <Badge tone="amber">YimiLife Technology Platform</Badge>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                PulseMatrix™ Signal Platform
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
                A YimiLife signal platform built for cleaner PPG acquisition,
                low-perfusion SpO2 tracking, motion-interference filtering and
                skin-tone-aware pulse oximeter development.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#platform-overview"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Explore Platform Logic
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/products/pulse-oximeter"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Pulse Oximeter Products
                </Link>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
                <img
                  src="/homepage/pulseMatrix-s.jpg"
                  alt="YimiLife PulseMatrix proprietary signal platform showcasing 24-bit ADC front-end architecture, PI 0.1 low perfusion tracking, and Fluke Index 2 calibration workflow."
                  className="aspect-[2/1] w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {platformChallenges.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white"
                  >
                    <span className="block font-semibold text-cyan-200">{item.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-400">{item.short}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform overview */}
      <section id="platform-overview" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Badge>Platform Overview</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            One platform for three SpO2 signal challenges
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            PulseMatrix™ organizes YimiLife’s SpO2 signal work around three
            practical engineering problems: weak pulse signals, motion
            interference and optical variation across different users.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {platformChallenges.map((item) => (
            <article key={item.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.short}</p>
              <div className="mt-5 rounded-2xl bg-cyan-50 px-4 py-3 text-sm leading-6 text-cyan-900">
                <span className="font-semibold">PulseMatrix™ response:</span> {item.response}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical highlights */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-xl md:p-10 lg:p-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge tone="amber">Technical Highlights</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Technical Highlights of PulseMatrix™ Signal Platform
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                Four engineering focus areas turn PulseMatrix™ from a marketing
                name into a practical signal platform: motion control, optical
                structure, low-perfusion optimization and production verification.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {technicalHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex min-h-[245px] flex-col rounded-[1.75rem] border border-amber-300/45 bg-gradient-to-br from-amber-300/10 via-white/[0.04] to-cyan-300/5 p-5 shadow-[0_0_0_1px_rgba(251,191,36,0.12),0_18px_45px_-32px_rgba(251,191,36,0.8)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl border border-amber-300/50 bg-amber-300/10 text-amber-200">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Badge>PulseMatrix™ Pillars</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Three technology pillars under one signal platform
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            Low perfusion, motion artifact and skin tone accuracy should not be
            treated as separate slogans. They are connected signal challenges
            under the same PPG acquisition and interpretation platform.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {technologyPillars.map((pillar) => (
            <article
              key={pillar.id}
              id={pillar.id}
              className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
                <div className="bg-slate-950 p-6 text-white md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{pillar.eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{pillar.title}</h3>
                  <p className="mt-5 text-base leading-8 text-slate-300">{pillar.intro}</p>
                  <div className="mt-7 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm font-semibold leading-6 text-cyan-100">
                    {pillar.accent}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Problem</p>
                      <p className="mt-3 text-sm leading-7 text-slate-700">{pillar.problem}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-cyan-100 bg-cyan-50/70 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">Engineering Response</p>
                      <p className="mt-3 text-sm leading-7 text-slate-700">{pillar.response}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {pillar.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Engineering reference areas */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Badge tone="slate">Engineering Reference Areas</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Product Engineering Reference Areas
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            PulseMatrix™ is supported by optical, structural, hardware,
            algorithm and verification work. These areas explain what stands
            behind the platform claim.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {engineeringAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Product mapping */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-950 p-6 text-white md:p-8">
            <Badge tone="amber">Platform-to-Product Mapping</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              How PulseMatrix™ maps to YimiLife product families
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              The platform is most relevant when it is connected to real product
              families, form factors and development directions.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-100 text-sm font-semibold text-slate-700">
                  <th className="p-5">Product Family</th>
                  <th className="p-5">PulseMatrix™ Relevance</th>
                  <th className="p-5">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                {productMapping.map((row) => (
                  <tr key={row.family} className="transition hover:bg-slate-50">
                    <td className="p-5 font-semibold text-slate-950">{row.family}</td>
                    <td className="p-5 leading-7">{row.relevance}</td>
                    <td className="p-5">
                      <Link href={row.href} className="inline-flex items-center font-semibold text-cyan-700 hover:text-cyan-900">
                        View product
                        <ArrowIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verification workflow */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <div className="max-w-3xl">
            <Badge tone="emerald">Verification Workflow</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              From signal design to production verification
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              YimiLife connects signal design with product engineering and
              production-line verification. Fluke Index 2 clinical simulators
              are referenced as part of the production calibration and
              verification workflow where applicable.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <div key={step} className="relative rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-900">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <Badge tone="slate">FAQ</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              PulseMatrix™ technology questions
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Answers are written for product managers and sourcing teams that
              need to understand the platform without reading an internal
              engineering document.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">{faq.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-24">
        <div className="rounded-[2.5rem] bg-cyan-700 p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Need to discuss SpO2 signal performance for your product project?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cyan-50">
            Talk with YimiLife about low-perfusion, motion-interference, skin-tone-aware
            signal design and pulse oximeter product configuration.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-50"
            >
              Contact YimiLife
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/products/pulse-oximeter"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Pulse Oximeter Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
