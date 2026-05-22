import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Motion Artifact Rejection Pulse Oximeter Technology | PulseMatrix™",
  description:
    "PulseMatrix™ motion artifact rejection supports more stable SpO2 monitoring during finger movement, elderly tremor and low perfusion combined with motion disturbance for OEM/ODM pulse oximeter projects.",
  alternates: {
    canonical: "https://www.yimilife.com/technology/motion-artifact-rejection",
  },
  openGraph: {
    title: "Motion Artifact Rejection Pulse Oximeter Technology | PulseMatrix™",
    description:
      "Explore Yimi Life’s motion artifact rejection approach for medical-grade SpO2 monitoring, elderly tremor, home healthcare and OEM/ODM pulse oximeter projects.",
    url: "https://www.yimilife.com/technology/motion-artifact-rejection",
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

const motionChallenges = [
  {
    title: "Finger Movement",
    text: "Small finger movements can disturb optical coupling, introduce waveform distortion and make the SpO2 reading less stable.",
  },
  {
    title: "Elderly Tremor",
    text: "Elderly users may experience hand tremor or unstable finger placement, creating repeated motion disturbance during measurement.",
  },
  {
    title: "Low Perfusion + Motion",
    text: "When weak peripheral perfusion is combined with movement, useful PPG signals become harder to distinguish from artifacts.",
  },
];

const engineeringLayers = [
  {
    title: "Motion-Aware Signal Acquisition",
    text: "Optical, analog and sampling design must preserve useful PPG waveform information while reducing unnecessary disturbance from unstable contact.",
    icon: MotionIcon,
  },
  {
    title: "Waveform Quality Assessment",
    text: "PulseMatrix™ evaluates waveform regularity, signal strength and stability before deciding how much confidence to place in a reading.",
    icon: WaveIcon,
  },
  {
    title: "Artifact Screening and Processing",
    text: "Signal processing strategies help identify motion-distorted waveform segments and support more stable SpO2 output behavior.",
    icon: SignalIcon,
  },
  {
    title: "Product-Level Verification",
    text: "Motion-resistant SpO2 design should be connected with product testing, calibration discipline and manufacturing consistency control.",
    icon: ShieldIcon,
  },
];

const useCases = [
  "Elderly SpO2 Monitoring",
  "Home Healthcare Measurement",
  "Respiratory Health Monitoring",
  "Wearable SpO2 Devices",
  "Remote Patient Monitoring",
  "Connected Health Platforms",
];

const faqs = [
  {
    question: "What is motion artifact in pulse oximetry?",
    answer:
      "Motion artifact refers to signal disturbance caused by finger movement, hand tremor, unstable contact or changes in optical coupling during SpO2 measurement. It can distort the PPG waveform and reduce reading stability.",
  },
  {
    question: "Why does motion affect SpO2 accuracy?",
    answer:
      "SpO2 measurement depends on stable red and infrared pulsatile signals. Motion can introduce non-physiological waveform changes, baseline shifts and signal noise, making it more difficult for the device to identify reliable pulse information.",
  },
  {
    question: "Why is elderly tremor important for pulse oximeter design?",
    answer:
      "Elderly users may have weaker peripheral circulation and more frequent finger tremor. This creates a combined challenge where low perfusion and motion disturbance occur at the same time.",
  },
  {
    question: "How does PulseMatrix™ support motion artifact rejection?",
    answer:
      "PulseMatrix™ supports motion artifact rejection through waveform quality assessment, signal stability evaluation, artifact screening and SpO2 signal processing strategies for challenging measurement scenarios.",
  },
  {
    question: "Is motion artifact rejection only a software feature?",
    answer:
      "No. Motion artifact rejection depends on optical design, mechanical fit, analog front-end quality, sampling strategy, waveform assessment, algorithm processing and product-level verification.",
  },
  {
    question: "Can Yimi Life support motion-resistant SpO2 OEM/ODM projects?",
    answer:
      "Yes. Yimi Life can discuss motion-resistant SpO2 design requirements during OEM/ODM project evaluation, including target use scenarios, product form factor, connected device requirements and validation approach.",
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
      "@id":
        "https://www.yimilife.com/technology/motion-artifact-rejection#article",
      headline: "Motion Artifact Rejection for Medical-Grade SpO2 Monitoring",
      description:
        "A technical overview of motion artifact rejection in pulse oximetry, including elderly tremor, low perfusion combined with motion, waveform quality assessment and PulseMatrix™ support for OEM/ODM projects.",
      author: {
        "@id": "https://www.yimilife.com/#organization",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
      mainEntityOfPage: {
        "@id":
          "https://www.yimilife.com/technology/motion-artifact-rejection#webpage",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.yimilife.com/technology/motion-artifact-rejection#webpage",
      url: "https://www.yimilife.com/technology/motion-artifact-rejection",
      name: "Motion Artifact Rejection for Medical-Grade SpO2 Monitoring",
      description:
        "Motion artifact rejection technology page for PulseMatrix™ and OEM/ODM pulse oximeter projects.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "Motion artifact rejection pulse oximeter technology",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/technology/motion-artifact-rejection#faq",
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
        "https://www.yimilife.com/technology/motion-artifact-rejection#breadcrumb",
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
          name: "Motion Artifact Rejection",
          item: "https://www.yimilife.com/technology/motion-artifact-rejection",
        },
      ],
    },
  ],
};

export default function MotionArtifactRejectionPage() {
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
              PulseMatrix™ Motion Artifact Rejection
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Motion Artifact Rejection for Medical-Grade SpO2 Monitoring
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              PulseMatrix™ supports motion artifact rejection by combining
              motion-aware signal acquisition, waveform quality assessment,
              artifact screening and SpO2 signal processing for more stable
              monitoring behavior.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              For{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>
              , motion-resistant SpO2 design is especially important in elderly
              monitoring, home healthcare, wearable devices and remote patient
              monitoring applications.
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
                Discuss Motion-Resistant SpO2 Design
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Key technical focus
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "Finger Movement and Hand Tremor",
                "Waveform Quality Assessment",
                "Artifact Screening",
                "Motion + Low Perfusion Challenge",
                "OEM/ODM Product Integration",
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
                , together with low perfusion monitoring and skin tone fairness.
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
              Why motion artifacts affect pulse oximeter accuracy
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Pulse oximeters rely on stable red and infrared pulsatile signals
              to estimate SpO2. When a user moves a finger, changes pressure or
              experiences hand tremor, the optical path and contact condition
              may change, creating waveform distortion and non-physiological
              signal variation.
            </p>

            <p>
              Motion artifact is especially challenging in home healthcare and
              elderly monitoring because users may not maintain a perfectly
              still measurement posture. In wearable SpO2 devices, movement can
              be even more common.
            </p>

            <p>
              Motion artifact rejection should therefore be treated as a
              system-level design challenge involving optical design, mechanical
              fit, analog front-end performance, sampling strategy, waveform
              quality assessment and signal processing.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {motionChallenges.map((card) => (
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
              A system-level approach to motion artifact rejection
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              PulseMatrix™ treats motion artifact rejection as a combined
              hardware, signal quality and algorithm challenge. The goal is to
              support stable SpO2 monitoring behavior when the waveform is
              disturbed by motion or tremor.
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
              Combined challenge
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Motion artifact becomes more difficult under low perfusion
              conditions
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Motion disturbance is difficult on its own. It becomes even more
              challenging when the user also has weak peripheral circulation or
              poor signal strength. In these cases, useful pulsatile signal
              components are already small, and motion can further distort the
              waveform.
            </p>

            <p>
              This is why motion artifact rejection should be considered
              together with{" "}
              <Link
                href="/technology/low-perfusion-spo2"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                low perfusion SpO2 monitoring
              </Link>
              . For elderly users and home healthcare scenarios, these two
              challenges often appear together.
            </p>

            <p>
              PulseMatrix™ is organized around this combined reality: weak
              signal acquisition, motion-aware waveform assessment and
              confidence-based reading behavior must work together.
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
              Motion-resistant SpO2 design helps products perform better in
              real-world use
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              For OEM/ODM customers, motion artifact rejection creates a
              stronger product story than basic SpO2 measurement. It is relevant
              for elderly monitoring, home healthcare, wearable SpO2 devices and
              remote patient monitoring solutions.
            </p>

            <p>
              Yimi Life connects motion artifact rejection with the broader{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 Technology Platform
              </Link>
              , including{" "}
              <Link
                href="/technology/low-perfusion-spo2"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                low perfusion SpO2 monitoring
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
              For connected health projects, motion-resistant SpO2 capability
              can be combined with Bluetooth data transmission, SDK-level
              integration and customized UI requirements.
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
                Suitable for motion-challenged SpO2 monitoring applications
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Motion artifact rejection is especially relevant for products
                used in home, elderly, wearable and connected health monitoring
                scenarios.
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
              From motion-resistant design to manufacturing consistency
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Motion-resistant SpO2 design should not stop at a laboratory
              demonstration. For OEM/ODM projects, it needs to be connected with
              product configuration, use-case definition, testing approach and
              manufacturing control.
            </p>

            <p>
              Yimi Life’s pulse oximeter manufacturing is supported by the{" "}
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
              For motion artifact rejection projects, our team can discuss
              target use scenarios, test expectations, Bluetooth data behavior,
              UI interaction requirements and production verification strategy
              during the OEM/ODM evaluation stage.
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
                Frequently asked questions about motion artifact rejection
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
            Build motion-resistant SpO2 capability into your next product
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for a pulse oximeter OEM/ODM partner with motion artifact
            rejection technology, low perfusion experience and connected-device
            customization support? Share your project requirements with Yimi
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
              Discuss Motion-Resistant SpO2 Design
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
