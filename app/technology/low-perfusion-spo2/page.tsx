import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PI 0.1% Low-Perfusion | YimiLife PulseMatrix™",
  description:
    "Explore YimiLife PulseMatrix™ terminology for PI 0.1% low-perfusion, weak-signal acquisition and OEM/ODM pulse oximeter development discussions.",
  alternates: {
    canonical: "https://www.yimilife.com/technology/low-perfusion-spo2",
  },
  openGraph: {
    title: "PI 0.1% Low-Perfusion | YimiLife PulseMatrix™",
    description:
      "PI 0.1% low-perfusion terminology for weak-signal monitoring, OEM/ODM pulse oximeter development and PulseMatrix™ engineering support.",
    url: "https://www.yimilife.com/technology/low-perfusion-spo2",
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

function SignalIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 16c2.2 0 2.2-8 4.4-8s2.2 8 4.4 8 2.2-8 4.4-8S19.8 16 22 16"
        stroke="currentColor"
        strokeWidth="2"
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

const challengeCards = [
  {
    title: "Weak Pulsatile Signal",
    text: "Low perfusion reduces the AC component of the PPG waveform, making useful pulsatile information harder to separate from noise, baseline variation and unstable contact.",
  },
  {
    title: "Poor Peripheral Circulation",
    text: "Cold fingers, elderly users, vascular conditions and reduced peripheral blood flow can make fingertip SpO2 measurement more challenging in real-world home healthcare use.",
  },
  {
    title: "Motion + Low Perfusion",
    text: "When weak perfusion is combined with finger movement or tremor, the device must screen waveform quality before presenting a stable SpO2 reading.",
  },
];

const engineeringLayers = [
  {
    title: "Optical and Analog Front-End Design",
    text: "LED drive, photodiode response, analog gain, filtering and PCB layout all influence weak PPG signal acquisition under low perfusion conditions.",
    icon: CircuitIcon,
  },
  {
    title: "Waveform Quality Assessment",
    text: "PulseMatrix™ evaluates waveform stability, perfusion strength and signal confidence to support more reliable SpO2 reading decisions in weak-signal scenarios.",
    icon: WaveIcon,
  },
  {
    title: "Low Perfusion Signal Processing",
    text: "Signal processing strategies focus on weak-signal extraction, noise control, baseline stability and reading consistency under low PI conditions such as 0.1% PI.",
    icon: SignalIcon,
  },
  {
    title: "Verification and Manufacturing Control",
    text: "Low perfusion performance must be connected with device-level testing, production calibration, Fluke Index 2 production verification and batch consistency control.",
    icon: ShieldIcon,
  },
];

const useCases = [
  "Elderly SpO2 Monitoring",
  "Home Healthcare Monitoring",
  "Respiratory Health Management",
  "Cold Finger or Poor Circulation Scenarios",
  "Wearable SpO2 Monitoring",
  "Remote Patient Monitoring Devices",
  "Private Label Pulse Oximeter Projects",
  "Connected Health Monitoring Devices",
];

const faqs = [
  {
    question: "What is low perfusion in pulse oximetry?",
    answer:
      "Low perfusion refers to a condition where the pulsatile blood flow signal detected by the pulse oximeter is weak. This makes SpO2 measurement more challenging because the useful PPG signal becomes smaller relative to noise, motion disturbance and baseline variation.",
  },
  {
    question: "Why does low perfusion affect SpO2 accuracy?",
    answer:
      "SpO2 algorithms rely on stable red and infrared pulsatile signals. Under low perfusion conditions, signal amplitude is reduced, so the device must manage weak-signal acquisition, waveform quality assessment and signal processing more carefully.",
  },
  {
    question: "What does PI 0.1% low-perfusion mean?",
    answer:
      "PI 0.1% refers to a very weak perfusion index condition used to describe a challenging low-perfusion measurement scenario. For pulse oximeter OEM/ODM customers, it is a useful engineering reference when discussing weak-signal SpO2 performance.",
  },
  {
    question: "How does PulseMatrix™ support PI 0.1% low-perfusion?",
    answer:
      "PulseMatrix™ supports PI 0.1% low-perfusion discussions through system-level engineering, including optical signal acquisition, analog front-end design, waveform quality assessment, weak-signal processing and validation discussion for OEM/ODM projects.",
  },
  {
    question: "Is low perfusion performance only an algorithm issue?",
    answer:
      "No. Low perfusion performance depends on hardware, optical design, analog front-end quality, PCB layout, signal processing, calibration, production verification and manufacturing consistency. It should be treated as a full-system engineering challenge.",
  },
  {
    question: "Can YimiLife support PI 0.1% low-perfusion requirements in OEM/ODM projects?",
    answer:
      "Yes. YimiLife can discuss PI 0.1% low-perfusion requirements during pulse oximeter OEM/ODM project evaluation, including product configuration, target use scenarios, testing approach and manufacturing control expectations.",
  },
  {
    question: "How is low perfusion performance connected to manufacturing quality?",
    answer:
      "Low perfusion technology must be supported by production discipline. YimiLife connects SpO2 technology discussion with functional testing, production calibration, Fluke Index 2 production verification and batch traceability.",
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
      "@type": "TechArticle",
      "@id": "https://www.yimilife.com/technology/low-perfusion-spo2#article",
      headline: "PI 0.1% Low-Perfusion for Weak-Signal Monitoring",
      description:
        "A technical overview of PI 0.1% low-perfusion, weak-signal acquisition, waveform quality assessment and PulseMatrix™ support for OEM/ODM pulse oximeter projects.",
      author: {
        "@id": "https://www.yimilife.com/#organization",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
      mainEntityOfPage: {
        "@id": "https://www.yimilife.com/technology/low-perfusion-spo2#webpage",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/technology/low-perfusion-spo2#webpage",
      url: "https://www.yimilife.com/technology/low-perfusion-spo2",
      name: "Low Perfusion SpO2 Technology",
      description:
        "PI 0.1% low-perfusion technology page for PulseMatrix™ and OEM/ODM pulse oximeter projects.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "Low perfusion SpO2 monitoring",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/technology/low-perfusion-spo2#faq",
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
      "@id": "https://www.yimilife.com/technology/low-perfusion-spo2#breadcrumb",
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
          name: "Technology",
          item: "https://www.yimilife.com/technology",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Low Perfusion SpO2",
          item: "https://www.yimilife.com/technology/low-perfusion-spo2",
        },
      ],
    },
  ],
};

export default function LowPerfusionSpo2Page() {
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              PulseMatrix™ PI 0.1% Low-Perfusion
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              PI 0.1% Low-Perfusion for Weak-Signal Monitoring
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              PulseMatrix™ supports PI 0.1% low-perfusion by connecting
              weak-signal acquisition, waveform quality assessment, signal
              processing and production verification into a system-level
              engineering approach for pulse oximeter OEM/ODM development.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              For{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>
              , low perfusion performance is a key differentiator in elderly
              monitoring, home healthcare, respiratory health, connected SpO2
              applications and private label pulse oximeter projects.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products/pulse-oximeter"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Explore Pulse Oximeter OEM/ODM Manufacturing Manufacturing
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Discuss Low Perfusion SpO2 Requirements
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Key technical focus
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "PI 0.1% Low-Perfusion Scenario",
                "Weak PPG Signal Acquisition",
                "Waveform Quality Assessment",
                "SpO2 Reading Stability",
                "OEM/ODM Validation and Testing Support",
              ].map((item) => (
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
                Part of the PulseMatrix™ platform
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                This page is one technical pillar of the{" "}
                <Link
                  href="/technology"
                  className="font-semibold text-cyan-200 underline underline-offset-4"
                >
                  PulseMatrix™ Signal Platform
                </Link>
                , together with{" "}
                <Link
                  href="/technology/motion-artifact-rejection"
                  className="font-semibold text-cyan-200 underline underline-offset-4"
                >
                  performance under motion conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/technology/skin-tone-fairness"
                  className="font-semibold text-cyan-200 underline underline-offset-4"
                >
                  SpO₂ performance across diverse skin pigmentation
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Technical challenge
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Why low perfusion makes SpO2 monitoring more difficult
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Pulse oximeters estimate SpO2 by analyzing pulsatile optical
              signals from red and infrared light. Under low perfusion
              conditions, the pulsatile signal becomes weak, making it harder to
              separate useful waveform information from noise, baseline
              variation and motion disturbance.
            </p>

            <p>
              This is especially important in real-world use scenarios such as
              elderly monitoring, cold fingers, poor peripheral circulation,
              respiratory health management and home healthcare measurement.
            </p>

            <p>
              A PI 0.1% low-perfusion solution should not rely on algorithm claims
              alone. It requires coordination between optical design, analog
              front-end engineering, PCB layout, waveform quality assessment,
              signal processing, calibration and production consistency.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {challengeCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              PulseMatrix™ approach
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              A system-level approach to PI 0.1% low-perfusion
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              PulseMatrix™ treats PI 0.1% low-perfusion as a full-system engineering
              challenge, not only a software feature. The platform connects
              optical signal acquisition, waveform evaluation, algorithmic
              processing, product-level verification and manufacturing
              consistency.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {engineeringLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {layer.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              PI 0.1% reference point
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Why PI 0.1% matters for pulse oximeter OEM/ODM customers
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Perfusion index, or PI, is commonly used to describe the strength
              of the pulsatile signal detected by a pulse oximeter. A 0.1% PI
              condition represents a highly challenging weak-signal scenario.
            </p>

            <p>
              For medical brands and OEM/ODM customers, low perfusion
              performance is important because it reflects whether a product can
              maintain usable SpO2 monitoring capability when signal quality is
              poor.
            </p>

            <p>
              YimiLife uses the PI 0.1% low-perfusion scenario as an
              engineering anchor for product discussion, performance evaluation
              and differentiated SpO2 technology positioning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              OEM/ODM value
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Low perfusion SpO2 technology helps create differentiated products
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              In a competitive pulse oximeter market, low perfusion capability
              helps OEM/ODM customers move beyond basic measurement functions.
              It creates a stronger technical story for elderly monitoring,
              respiratory health, home healthcare and connected medical device
              applications.
            </p>

            <p>
              This PI 0.1% low-perfusion page connects directly with YimiLife’s broader{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                PulseMatrix™ Signal Platform
              </Link>
              , including{" "}
              <Link
                href="/technology/motion-artifact-rejection"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                performance under motion conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/technology/skin-tone-fairness"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                SpO₂ performance across diverse skin pigmentation
              </Link>
              .
            </p>

            <p>
              For product teams building connected devices, low perfusion
              performance can also be combined with Bluetooth data transmission,
              UI customization and remote patient monitoring workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                Application scenarios
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Suitable for weak-signal SpO2 monitoring applications
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Low perfusion SpO2 capability is especially relevant for
                products targeting users and scenarios where peripheral pulse
                signals may be weak or unstable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Verification and quality
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              From low perfusion performance to manufacturing consistency
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              For OEM/ODM projects, low perfusion performance must be supported
              by product-level testing and manufacturing control. YimiLife
              connects SpO2 technology discussion with production verification,
              calibration and batch consistency.
            </p>

            <p>
              Our pulse oximeter manufacturing process is supported by the{" "}
                <Link
                  href="/about#quality-compliance"
                  className="font-semibold text-cyan-700 underline underline-offset-4"
                >
                  ISO 13485 medical device manufacturing quality
                </Link>
              . Each pulse oximeter unit is calibrated and verified using
              Fluke Index 2 simulator during production before
              shipment to support consistent production output.
            </p>

            <p>
              This helps customers evaluate low perfusion performance not only
              as a laboratory claim, but also as part of a practical product
              development and manufacturing workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Frequently asked questions about PI 0.1% low-perfusion
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
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build PI 0.1% low-perfusion discussion into your next product
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for a pulse oximeter OEM/ODM partner with PI 0.1% low-perfusion
            SpO2 technology, scalable manufacturing capacity and full-unit
            production calibration discipline? Share your project requirements
            with YimiLife.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/products/pulse-oximeter"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Explore Pulse Oximeter OEM/ODM Manufacturing
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Discuss Low Perfusion SpO2 Requirements
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
