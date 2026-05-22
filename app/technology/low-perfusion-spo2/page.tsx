import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Low Perfusion SpO2 Monitoring at 0.1% PI | PulseMatrix™",
  description:
    "Learn how PulseMatrix™ supports low perfusion SpO2 monitoring at 0.1% PI through weak-signal acquisition, waveform quality assessment, signal processing and OEM/ODM validation support.",
  alternates: {
    canonical: "https://www.yimilife.com/technology/low-perfusion-spo2",
  },
  openGraph: {
    title: "Low Perfusion SpO2 Monitoring at 0.1% PI | PulseMatrix™",
    description:
      "Explore Yimi Life’s low perfusion SpO2 technology approach for weak signal scenarios, elderly users, poor peripheral circulation and OEM/ODM pulse oximeter projects.",
    url: "https://www.yimilife.com/technology/low-perfusion-spo2",
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
    text: "Low perfusion reduces the AC component of the PPG waveform, making the useful pulsatile signal harder to separate from noise and baseline variation.",
  },
  {
    title: "Poor Peripheral Circulation",
    text: "Cold fingers, elderly users, vascular conditions or low blood flow can make fingertip SpO2 measurement more challenging in real-world use.",
  },
  {
    title: "Motion + Low Perfusion",
    text: "When weak perfusion is combined with finger movement or tremor, the device must assess signal quality before presenting a stable SpO2 reading.",
  },
];

const engineeringLayers = [
  {
    title: "Optical and Analog Front-End Design",
    text: "LED drive, photodiode response, analog gain, filtering and PCB layout all influence the quality of weak PPG signal acquisition.",
    icon: CircuitIcon,
  },
  {
    title: "Waveform Quality Assessment",
    text: "PulseMatrix™ evaluates waveform stability, perfusion strength and signal confidence to support more reliable SpO2 reading decisions.",
    icon: WaveIcon,
  },
  {
    title: "Low Perfusion Signal Processing",
    text: "Signal processing strategies focus on weak-signal extraction, noise control, baseline stability and reading consistency under low PI conditions.",
    icon: SignalIcon,
  },
  {
    title: "Verification and Manufacturing Control",
    text: "Low perfusion performance must be connected with device-level testing, production calibration and batch consistency control.",
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
      "SpO2 algorithms rely on stable red and infrared pulsatile signals. Under low perfusion conditions, the signal amplitude is reduced, so the device must manage weak-signal acquisition, waveform quality assessment and signal processing more carefully.",
  },
  {
    question: "What does 0.1% PI low perfusion mean?",
    answer:
      "0.1% PI refers to a very weak perfusion index level used to describe challenging low perfusion measurement conditions. For OEM/ODM customers, it is an important engineering reference when evaluating pulse oximeter performance in weak-signal scenarios.",
  },
  {
    question: "How does PulseMatrix™ support low perfusion SpO2 monitoring?",
    answer:
      "PulseMatrix™ supports low perfusion SpO2 monitoring through system-level engineering, including optical signal acquisition, analog front-end design, waveform quality assessment, weak-signal processing and validation discussion for OEM/ODM projects.",
  },
  {
    question: "Is low perfusion performance only an algorithm issue?",
    answer:
      "No. Low perfusion performance depends on hardware, optical design, analog front-end quality, PCB layout, signal processing, calibration, verification and manufacturing consistency. It should be treated as a full-system engineering challenge.",
  },
  {
    question: "Can Yimi Life support low perfusion requirements in OEM/ODM projects?",
    answer:
      "Yes. Yimi Life can discuss low perfusion SpO2 requirements during OEM/ODM project evaluation, including product configuration, target use scenarios, validation approach and manufacturing control expectations.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.yimilife.com/#organization",
      name: "Shenzhen Yimi Life Technology Co., Ltd.",
      url: "https://www.yimilife.com",
      brand: {
        "@type": "Brand",
        name: "Yimi Life",
      },
      description:
        "Yimi Life is an ISO 13485 medical device OEM/ODM manufacturer for pulse oximeters, blood pressure monitors and wearable health monitoring devices.",
    },
    {
      "@type": "TechArticle",
      "@id": "https://www.yimilife.com/technology/low-perfusion-spo2#article",
      headline: "Low Perfusion SpO2 Monitoring at 0.1% PI",
      description:
        "A technical overview of low perfusion SpO2 monitoring, weak-signal acquisition, waveform quality assessment and PulseMatrix™ support for OEM/ODM pulse oximeter projects.",
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
      name: "Low Perfusion SpO2 Monitoring at 0.1% PI",
      description:
        "Low perfusion SpO2 monitoring technology page for PulseMatrix™ and OEM/ODM pulse oximeter projects.",
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
              PulseMatrix™ Low Perfusion Technology
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Low Perfusion SpO2 Monitoring at 0.1% PI
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              PulseMatrix™ supports low perfusion SpO2 monitoring by connecting
              weak-signal acquisition, waveform quality assessment, signal
              processing and manufacturing verification into a system-level
              engineering approach.
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
              monitoring, home healthcare, respiratory health and connected SpO2
              applications.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products/pulse-oximeter"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Explore Pulse Oximeter OEM/ODM
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Low Perfusion Test Data
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Key technical focus
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "0.1% PI Low Perfusion Scenario",
                "Weak PPG Signal Acquisition",
                "Waveform Quality Assessment",
                "SpO2 Reading Stability",
                "OEM/ODM Validation Support",
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
                  PulseMatrix™ SpO2 Technology Platform
                </Link>
                , together with motion artifact rejection and skin tone
                fairness.
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
              A low perfusion SpO2 solution should not rely on algorithm claims
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
              A system-level approach to low perfusion SpO2 monitoring
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              PulseMatrix™ treats low perfusion as a full-system engineering
              challenge, not only a software feature. The platform connects
              signal acquisition, waveform evaluation, algorithmic processing
              and product-level verification.
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
              0.1% PI reference point
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Why 0.1% PI matters for pulse oximeter OEM/ODM customers
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
              Yimi Life uses the 0.1% PI low perfusion scenario as an
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
              Low perfusion technology helps create differentiated SpO2
              products
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
              This low perfusion technology page connects directly with Yimi
              Life’s broader{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 Technology Platform
              </Link>
              , including{" "}
              <Link
                href="/technology/motion-artifact-rejection"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                motion artifact rejection
              </Link>{" "}
              and{" "}
              <Link
                href="/technology/skin-tone-fairness"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                skin tone fairness
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
              by product-level testing and manufacturing control. Yimi Life
              connects SpO2 technology discussion with production verification,
              calibration and batch consistency.
            </p>

            <p>
              Our pulse oximeter manufacturing process is supported by the{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                ISO 13485 Quality System
              </Link>
              . Each unit is calibrated and verified using Fluke Index 2
              clinical simulators before shipment to support consistent
              production output.
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
                Frequently asked questions about low perfusion SpO2 monitoring
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
            Build low perfusion SpO2 capability into your next product
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for a pulse oximeter OEM/ODM partner with low perfusion
            SpO2 technology, scalable manufacturing capacity and full-unit
            calibration discipline? Share your project requirements with Yimi
            Life.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/products/pulse-oximeter"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Explore Pulse Oximeter OEM/ODM
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request Low Perfusion Test Data
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
