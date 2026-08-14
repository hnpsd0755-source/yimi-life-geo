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
    family: "YW01 Wrist Pulse Oximeter",
    relevance:
      "Source-confirmed wrist-worn SpO2, pulse rate, Bluetooth 5.3 BLE and low-power wearable monitoring project support.",
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
