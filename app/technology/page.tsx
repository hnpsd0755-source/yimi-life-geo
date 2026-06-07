import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "PulseMatrix™ Signal Platform | PI 0.1% Low-Perfusion, Motion Conditions & Diverse Skin Pigmentation",
  description:
    "YimiLife PulseMatrix™ Signal Platform covers PI 0.1% low-perfusion, performance under motion conditions and SpO₂ performance across diverse skin pigmentation for OEM/ODM pulse oximeter projects.",
  alternates: {
    canonical: "https://www.yimilife.com/technology",
  },
};

type IconProps = {
  className?: string;
};

const ArrowIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Badge = ({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "amber" | "slate" | "emerald";
}) => {
  const tones = {
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
    amber: "border-amber-300/40 bg-amber-300/10 text-amber-200",
    slate: "border-slate-200 bg-slate-100 text-slate-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
};

const platformAnchors = [
  {
    id: "low-perfusion",
    title: "PI 0.1% Low-Perfusion",
    href: "#low-perfusion",
  },
  {
    id: "motion-artifact",
    title: "Motion Conditions",
    href: "#motion-artifact",
  },
  {
    id: "skin-pigmentation",
    title: "SpO₂ Performance Across Diverse Skin Pigmentation",
    href: "#skin-pigmentation",
  },
];

const technologyPillars = [
  {
    id: "low-perfusion",
    eyebrow: "Pillar 01",
    title: "PI 0.1% Low-Perfusion",
    intro:
      "A verified PulseMatrix™ capability for weak PPG signal acquisition and interpretation, configurable according to customer requirements.",
    problem:
      "When perfusion is very low, the pulse signal becomes weak and harder to separate from noise.",
    response:
      "PulseMatrix™ supports PI 0.1% low-perfusion signal handling for pulse oximeter projects that require stronger weak-signal performance.",
    controls: [
      "LED drive",
      "Optical sensing",
      "Analog front-end noise",
      "Ambient-light suppression",
      "Waveform quality",
      "Low-perfusion calibration workflows",
    ],
    productRelevance:
      "Relevant for OEM/ODM customers who need better low-perfusion performance for fingertip pulse oximeter projects.",
  },
  {
    id: "motion-artifact",
    eyebrow: "Pillar 02",
    title: "Motion Conditions",
    intro:
      "Motion algorithm processing for real-world measurement behavior, supported by motion/static comparison testing workflows.",
    problem:
      "Finger movement, loose contact or changing pressure can disturb the PPG waveform and make readings harder to interpret.",
    response:
      "PulseMatrix™ uses motion algorithm processing to support signal interpretation under motion conditions.",
    controls: [
      "Waveform quality checks",
      "Pulse-cycle continuity",
      "Abnormal segment handling",
      "Filtering strategy",
      "Finger-contact stability",
      "Motion/static comparison testing",
    ],
    productRelevance:
      "Relevant for home-use, pharmacy retail, pediatric or unstable-contact measurement scenarios where users may not keep perfectly still.",
  },
  {
    id: "skin-pigmentation",
    eyebrow: "Pillar 03",
    title: "SpO₂ Performance Across Diverse Skin Pigmentation",
    intro:
      "Optical sensing and signal-processing considerations for SpO₂ performance across diverse skin pigmentation, with planned validation work as the project develops.",
    problem:
      "Different skin pigmentation may affect how red and infrared light are absorbed and scattered, which can influence PPG signal interpretation.",
    response:
      "PulseMatrix™ treats diverse skin pigmentation as an optical sensing and signal-processing consideration, not as a completed clinical fairness claim.",
    controls: [
      "Emitter wavelength consistency",
      "Photodiode response",
      "Optical path design",
      "Shielding",
      "Ambient-light control",
      "Signal-processing parameters",
      "Future validation planning",
    ],
    productRelevance:
      "Relevant for B2B customers serving North American, European and global markets with diverse user populations.",
  },
];

const productMapping = [
  {
    family: "Fingertip Pulse Oximeters",
    relevance:
      "PI 0.1% low-perfusion, performance under motion conditions and optional advanced signal tiers for configurable fingertip models.",
    href: "/products/pulse-oximeter",
  },
  {
    family: "Handheld Pulse Oximeters",
    relevance:
      "External-probe signal stability and extended SpO2 monitoring configuration for YH01 / YH02 handheld directions.",
    href: "/products/pulse-oximeter#handheld-section",
  },
  {
    family: "Wearable SpO2 Watch",
    relevance:
      "PPG sensing, low-power acquisition and Bluetooth-connected wearable monitoring platform support.",
    href: "/products/wearable-monitoring",
  },
  {
    family: "Infant Foot SpO2 Monitor",
    relevance:
      "Pediatric and soft-wearable SpO2 signal design consideration for infant foot-worn monitoring and connected health applications.",
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
    a: "PulseMatrix™ is YimiLife’s signal platform for PPG acquisition and interpretation around PI 0.1% low-perfusion, performance under motion conditions and SpO₂ performance across diverse skin pigmentation in pulse oximeter development.",
  },
  {
    q: "How does PulseMatrix™ support PI 0.1% low-perfusion?",
    a: "PulseMatrix™ supports PI 0.1% low-perfusion discussions through waveform extraction, signal filtering and selected hardware front-end configurations. Specific PI targets and performance levels depend on the product model and verification scope.",
  },
  {
    q: "What does SpO₂ performance across diverse skin pigmentation mean?",
    a: "It means optical path design, signal normalization and validation planning take diverse skin pigmentation conditions into consideration. YimiLife treats this as an engineering and verification direction, not as a universal accuracy claim.",
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
      "YimiLife PulseMatrix™ Signal Platform covers PI 0.1% low-perfusion, performance under motion conditions and SpO₂ performance across diverse skin pigmentation for OEM/ODM pulse oximeter workflows.",
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
    name: "PulseMatrix™ Signal Platform pillars",
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

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-14">
        <div className="overflow-hidden rounded-[2.25rem] bg-slate-950 p-5 text-white shadow-xl md:p-7 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            <div className="lg:pr-2">
              <Badge tone="amber">YimiLife Technology Platform</Badge>
              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                PulseMatrix™ Signal Platform
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                A focused PPG signal platform for PI 0.1% low-perfusion,
                performance under motion conditions and SpO₂ performance across
                diverse skin pigmentation.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
              <img
                src="/homepage/pulseMatrix-s.jpg"
                alt="YimiLife PulseMatrix signal platform for PI 0.1% low-perfusion and production calibration workflow."
                className="aspect-[2/1] w-full rounded-[1.35rem] object-cover"
              />

              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {platformAnchors.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="rounded-full border border-amber-300/45 bg-amber-300/10 px-4 py-2.5 text-center text-xs font-semibold leading-5 text-amber-100 shadow-[inset_0_0_0_1px_rgba(251,191,36,0.06)] transition hover:border-amber-200 hover:bg-amber-300/18 hover:text-white"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Badge>PulseMatrix™ Pillars</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Three PulseMatrix™ Signal Pillars
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            PulseMatrix™ focuses on three real-world signal challenges in pulse
            oximeter design: PI 0.1% low-perfusion, performance under motion
            conditions, and SpO₂ performance across diverse skin pigmentation.
          </p>
          <p className="mt-4 text-lg leading-9 text-slate-600">
            These pillars help OEM/ODM customers understand how YimiLife
            approaches weak signals, unstable measurement behavior and global
            user diversity in pulse oximeter projects.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {technologyPillars.map((pillar) => (
            <article
              key={pillar.id}
              id={pillar.id}
              className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid gap-0 lg:grid-cols-[0.36fr_0.64fr]">
                <div className="flex h-full flex-col justify-between bg-slate-950 p-6 text-white md:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {pillar.eyebrow}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-slate-300">
                      {pillar.intro}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50/50 p-5 md:p-6 lg:p-7">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex min-h-[170px] flex-col rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Problem
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {pillar.problem}
                      </p>
                    </div>

                    <div className="flex min-h-[170px] flex-col rounded-[1.35rem] border border-cyan-100 bg-cyan-50/80 p-5 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                        PulseMatrix™ Response
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {pillar.response}
                      </p>
                    </div>

                    <div className="flex min-h-[170px] flex-col rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Engineering Controls
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {pillar.controls.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-600" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex min-h-[170px] flex-col rounded-[1.35rem] border border-emerald-100 bg-emerald-50/80 p-5 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                        Product Relevance
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {pillar.productRelevance}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Engineering Evidence Examples
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              YimiLife reviews SpO₂ product performance through signal-path
              design, model-level verification planning, optical acquisition
              control and clearly defined verification boundaries. The
              following illustrative placeholders show the kind of waveform
              screenshots, test comparison photos or technical diagrams that can
              be replaced with approved YimiLife R&D material later.
            </p>
          </div>

          <div className="mt-7 grid gap-5 xl:grid-cols-3">
            <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
              <div className="border-b border-slate-200 bg-slate-950 p-4 text-white">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Illustrative
                  </p>
                  <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    Waveform
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  PI 0.1% Low-Perfusion Waveform Review
                </h3>
              </div>
              <div className="p-5">
                <div className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 shadow-inner">
                  <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    <span>Normal perfusion</span>
                    <span>Reference trace</span>
                  </div>
                  <svg
                    viewBox="0 0 360 86"
                    className="h-24 w-full"
                    role="img"
                    aria-label="Illustrative normal perfusion PPG waveform"
                  >
                    <path
                      d="M0 45 C18 45 20 16 34 16 C48 16 48 70 62 70 C76 70 78 45 94 45 C112 45 114 16 128 16 C142 16 142 70 156 70 C170 70 172 45 188 45 C206 45 208 16 222 16 C236 16 236 70 250 70 C264 70 266 45 282 45 C300 45 302 16 316 16 C330 16 330 70 344 70 C352 70 354 45 360 45"
                      fill="none"
                      stroke="#0891b2"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="my-4 h-px bg-slate-200" />
                  <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    <span>PI 0.1% low-perfusion</span>
                    <span>Weak signal review</span>
                  </div>
                  <svg
                    viewBox="0 0 360 86"
                    className="h-24 w-full"
                    role="img"
                    aria-label="Illustrative PI 0.1% low-perfusion PPG waveform"
                  >
                    <path
                      d="M0 44 C18 46 20 34 35 35 C50 36 51 55 66 54 C82 53 83 44 98 44 C114 45 117 34 132 35 C147 36 148 55 164 54 C180 53 181 44 196 44 C212 45 215 34 230 35 C245 36 246 55 262 54 C278 53 279 44 294 44 C310 45 313 34 328 35 C343 36 344 55 360 54"
                      fill="none"
                      stroke="#0f766e"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 48 L18 43 L36 51 L54 45 L72 50 L90 44 L108 49 L126 43 L144 52 L162 45 L180 50 L198 44 L216 51 L234 45 L252 49 L270 43 L288 50 L306 44 L324 52 L342 45 L360 49"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                    />
                  </svg>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  A low-perfusion waveform review helps customers understand how
                  weak PPG signal integrity is evaluated under defined project
                  conditions.
                </p>
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Illustrative placeholder. Replace with approved R&D waveform
                  screenshots when available.
                </p>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
              <div className="border-b border-slate-200 bg-slate-950 p-4 text-white">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Illustrative
                  </p>
                  <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    Comparison
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  Motion Condition Signal Comparison
                </h3>
              </div>
              <div className="p-5">
                <div className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 shadow-inner">
                  {[
                    {
                      label: "Static condition waveform",
                      stroke: "#0891b2",
                      path: "M0 48 C20 48 22 24 38 24 C54 24 54 70 70 70 C86 70 88 48 106 48 C126 48 128 24 144 24 C160 24 160 70 176 70 C192 70 194 48 212 48 C232 48 234 24 250 24 C266 24 266 70 282 70 C298 70 300 48 318 48 C338 48 340 24 356 24",
                    },
                    {
                      label: "Motion condition waveform",
                      stroke: "#f59e0b",
                      path: "M0 50 C18 30 26 72 42 42 C58 12 64 74 80 48 C96 22 108 72 122 36 C138 8 148 82 164 50 C180 24 190 74 206 40 C222 10 236 84 250 52 C266 24 276 74 292 42 C310 16 326 80 342 48 C350 36 354 54 360 50",
                    },
                  ].map((trace) => (
                    <div key={trace.label} className="mb-4 last:mb-0">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {trace.label}
                      </p>
                      <svg
                        viewBox="0 0 360 86"
                        className="h-24 w-full rounded-xl bg-slate-50"
                        role="img"
                        aria-label={`Illustrative ${trace.label}`}
                      >
                        <path
                          d={trace.path}
                          fill="none"
                          stroke={trace.stroke}
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <rect
                          x="210"
                          y="10"
                          width="72"
                          height="66"
                          rx="10"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2"
                          strokeDasharray="5 5"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Motion-condition comparison reviews how waveform quality
                  changes when finger movement, loose contact or pressure
                  variation occurs.
                </p>
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Illustrative placeholder. It does not imply accuracy under all
                  motion scenarios.
                </p>
              </div>
            </article>

            <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
              <div className="border-b border-slate-200 bg-slate-950 p-4 text-white">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                    Illustrative
                  </p>
                  <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    Test setup
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  Bench-Level Test Setup / Technical Diagram
                </h3>
              </div>
              <div className="p-5">
                <div className="rounded-[1.4rem] border border-cyan-100 bg-white p-4 shadow-inner">
                  <div className="grid gap-3">
                    {[
                      "Pulse oximeter sample",
                      "Fluke Index 2 simulator",
                      "Signal review workstation",
                      "Project verification notes",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="grid items-center gap-3"
                        style={{ gridTemplateColumns: "2.25rem 1fr" }}
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-100 text-sm font-semibold text-cyan-800">
                          {index + 1}
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
                    Future replacement area for approved lab photo or technical
                    solution image after masking serial numbers, customer
                    information and internal software details.
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Bench-level setup visuals can explain how YimiLife organizes
                  production calibration, waveform review and project-defined
                  verification work.
                </p>
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Illustrative placeholder. Real photos should be reviewed for
                  confidentiality before publication.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-950 p-6 text-white md:p-8">
            <Badge tone="amber">Platform-to-Product Mapping</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              How PulseMatrix™ maps to YimiLife product families
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              PulseMatrix™ is not presented as a standalone claim. It is mapped
              to product families, form factors and a production-verification
              layer that supports repeatable manufacturing execution.
            </p>
          </div>

          <div className="border-b border-slate-200 bg-amber-50/60 p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                  Production verification layer
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  Verification follows the product path
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Production-line calibration and verification are connected to
                  the selected product configuration. Simulator-based workflows,
                  including Fluke Index 2 where applicable, support consistent
                  production execution without turning verification into a
                  clinical validation claim.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-5">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-[1.25rem] border border-amber-100 bg-white px-4 py-4 shadow-sm"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-700">
                      {index + 1}
                    </div>
                    <p className="mt-3 text-xs font-semibold leading-5 text-slate-800">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-4">
            {productMapping.map((row) => (
              <Link
                key={row.family}
                href={row.href}
                className="group border-b border-slate-200 p-6 transition hover:bg-cyan-50 md:border-r xl:border-b-0"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950 group-hover:text-cyan-800">
                  {row.family}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {row.relevance}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-700">
                  View product
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <Badge tone="slate">FAQ</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              PulseMatrix™ Signal Platform questions
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Written for product managers and sourcing teams that need to
              understand the platform without reading an internal engineering
              document.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-24">
        <div className="rounded-[2.5rem] bg-cyan-700 p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Need to discuss SpO2 signal performance for your product project?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cyan-50">
            Talk with YimiLife about PI 0.1% low-perfusion, performance under
            motion conditions, SpO₂ performance across diverse skin pigmentation
            and pulse oximeter product configuration.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-50"
            >
              Discuss SpO2 Signal Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/products/pulse-oximeter"
              className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Pulse Oximeter Product Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
