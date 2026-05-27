import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PulseMatrix™ Vascular Hemodynamic Intelligence | YimiLife",
  description:
    "PulseMatrix™ is YimiLife’s vascular hemodynamic intelligence platform for medical-grade SpO2 technology, low perfusion SpO2 monitoring, motion artifact rejection pulse oximeter technology and skin tone accuracy in pulse oximeter OEM/ODM projects.",
  alternates: {
    canonical: "https://www.yimilife.com/technology",
  },
  openGraph: {
    title: "PulseMatrix™ Vascular Hemodynamic Intelligence | YimiLife",
    description:
      "Explore PulseMatrix™ vascular hemodynamic intelligence for low perfusion SpO2 technology, motion artifact rejection pulse oximeter technology and skin tone accuracy in OEM/ODM pulse oximeter development.",
    url: "https://www.yimilife.com/technology",
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

const technologyPillars = [
  {
    title: "Low Perfusion SpO2 Technology",
    label: "0.1% PI Low Perfusion Focus",
    href: "/technology/low-perfusion-spo2",
    icon: WaveIcon,
    cta: "Explore low perfusion SpO2 technology",
    text: "Focused on weak pulsatile signals, poor peripheral circulation and low perfusion SpO2 monitoring scenarios where stable oxygen saturation readings are more difficult to maintain.",
  },
  {
    title: "Motion Artifact Rejection Pulse Oximeter",
    label: "Motion + Tremor Resistance",
    href: "/technology/motion-artifact-rejection",
    icon: MotionIcon,
    cta: "Explore motion artifact rejection pulse oximeter technology",
    text: "Designed to improve signal quality assessment and reading stability during finger movement, elderly tremor and motion combined with low perfusion.",
  },
  {
    title: "Skin Tone Accuracy Pulse Oximeter",
    label: "Fitzpatrick I–VI Awareness",
    href: "/technology/skin-tone-fairness",
    icon: SkinToneIcon,
    cta: "Explore skin tone accuracy",
    text: "Built around the growing need to consider optical signal response and validation planning across different skin pigmentation conditions.",
  },
];

const platformLayers = [
  {
    title: "Optical Signal Acquisition",
    text: "LED/PD configuration, analog front-end design, sampling strategy and hardware consistency provide the foundation for reliable medical-grade SpO2 signal capture.",
  },
  {
    title: "Waveform Quality Assessment",
    text: "Pulse waveform quality, perfusion strength and signal stability are assessed to support more reliable reading decisions in low perfusion and motion scenarios.",
  },
  {
    title: "Algorithmic Signal Processing",
    text: "SpO2 signal processing strategies address low perfusion, motion disturbance, waveform variation and reading consistency across product scenarios.",
  },
  {
    title: "Validation and Manufacturing Control",
    text: "Technology performance is connected with testing, production verification, batch consistency and ISO 13485 medical device manufacturing discipline for OEM/ODM projects.",
  },
];

const faqs = [
  {
    question: "What is PulseMatrix™ vascular hemodynamic intelligence?",
    answer:
      "PulseMatrix™ is YimiLife’s vascular hemodynamic intelligence platform for medical-grade SpO2 technology. It focuses on low perfusion SpO2 monitoring, motion artifact rejection pulse oximeter technology and skin tone accuracy for pulse oximeter OEM/ODM development.",
  },
  {
    question: "Is PulseMatrix™ only a software algorithm?",
    answer:
      "No. PulseMatrix™ is positioned as a system-level technology platform that connects optical signal acquisition, analog front-end design, waveform quality assessment, algorithmic signal processing, validation planning and manufacturing control.",
  },
  {
    question: "How does PulseMatrix™ support pulse oximeter OEM/ODM customers?",
    answer:
      "For OEM/ODM customers, PulseMatrix™ provides a technical foundation for differentiated pulse oximeter products, including low perfusion SpO2 technology, motion-resistant SpO2 design, connected device integration and product-level verification discussion.",
  },
  {
    question: "Can PulseMatrix™ support Bluetooth and UI customization projects?",
    answer:
      "Yes. YimiLife can support Bluetooth data transmission, SDK-level integration and UI customization for selected OEM/ODM projects involving mobile apps, remote patient monitoring or connected health platforms.",
  },
  {
    question: "How is PulseMatrix™ connected with ISO 13485 manufacturing quality?",
    answer:
      "PulseMatrix™ is not separated from manufacturing. YimiLife connects SpO2 technology with production verification, batch consistency, documentation control and ISO 13485 medical device manufacturing discipline.",
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
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/technology#webpage",
      url: "https://www.yimilife.com/technology",
      name: "PulseMatrix™ Vascular Hemodynamic Intelligence",
      description:
        "PulseMatrix™ is YimiLife’s vascular hemodynamic intelligence platform for medical-grade SpO2 technology, low perfusion SpO2 monitoring, motion artifact rejection pulse oximeter technology and skin tone accuracy in pulse oximeter OEM/ODM projects.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "PulseMatrix™ vascular hemodynamic intelligence",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/technology#faq",
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
      "@id": "https://www.yimilife.com/technology#breadcrumb",
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
      ],
    },
  ],
};

export default function TechnologyPage() {
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
          <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute bottom-[-140px] right-[-40px] h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              Medical-Grade SpO2 Technology Platform
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              PulseMatrix™ Vascular Hemodynamic Intelligence
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              PulseMatrix™ is YimiLife’s vascular hemodynamic intelligence
              platform for medical-grade SpO2 technology, focusing on{" "}
              <Link
                href="/technology/low-perfusion-spo2"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                low perfusion SpO2 technology
              </Link>
              ,{" "}
              <Link
                href="/technology/motion-artifact-rejection"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                motion artifact rejection pulse oximeter technology
              </Link>{" "}
              and{" "}
              <Link
                href="/technology/skin-tone-fairness"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                skin tone accuracy in pulse oximeter development
              </Link>
              .
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Built for pulse oximeter OEM/ODM projects, PulseMatrix™ connects
              optical signal acquisition, analog front-end design, waveform
              quality assessment, algorithmic signal processing and
              production verification, Bluetooth-enabled product integration and manufacturing quality into one technology narrative.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
                Request PulseMatrix™ Technical Brief
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Three technology anchors
            </p>

            <div className="mt-5 grid gap-4">
              {technologyPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <Link
                    key={pillar.title}
                    href={pillar.href}
                    className="group rounded-2xl bg-white/10 p-5 text-white transition hover:bg-white/15"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-cyan-300/20 p-3 text-cyan-200">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-cyan-100">
                          {pillar.label}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Why it matters
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Medical-grade SpO2 technology requires more than basic PPG
              detection
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              For medical brands, pulse oximeter performance is not only about
              detecting a PPG waveform. Real-world use introduces weak
              peripheral signals, motion disturbance, finger tremor, optical
              variation, skin pigmentation differences and manufacturing
              consistency challenges.
            </p>

            <p>
              PulseMatrix™ is designed as a system-level technology platform
              that links hardware signal acquisition, waveform quality
              assessment, SpO2 signal processing and product verification. This
              makes it especially relevant for{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>{" "}
              and connected health monitoring projects.
            </p>

            <p>
              Instead of presenting SpO2 as a simple measurement function, YimiLife
              positions PulseMatrix™ as a practical engineering framework for
              building differentiated pulse oximeter OEM/ODM products.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Platform architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              From optical signal acquisition to OEM/ODM product integration
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              PulseMatrix™ connects multiple engineering layers so that SpO2
              performance can be considered from early product definition to
              production verification.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {platformLayers.map((layer, index) => (
              <div
                key={layer.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-800">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {layer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Technology pillars
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Three technical challenges that define PulseMatrix™
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            The PulseMatrix™ platform is organized around three high-value
            technical challenges in modern pulse oximetry.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {technologyPillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                  <Icon />
                </div>
                <p className="text-sm font-medium text-cyan-700">
                  {pillar.label}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {pillar.text}
                </p>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-700">
                  {pillar.cta}
                  <ArrowIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              OEM/ODM value
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Turning SpO2 technology into differentiated medical device
              projects
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              For OEM/ODM customers, PulseMatrix™ is not just a technical
              slogan. It is a way to connect product requirements with
              engineering decisions, performance verification, user experience
              and manufacturing consistency.
            </p>

            <p>
              YimiLife can support customers who need fingertip pulse
              oximeters, wearable SpO2 products, Bluetooth-enabled devices, UI
              customization or integration with remote patient monitoring
              platforms.
            </p>

            <p>
              The platform is supported by YimiLife’s{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                ISO 13485 medical device manufacturing quality
              </Link>{" "}
              and practical pulse oximeter OEM/ODM manufacturing experience.
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
                Frequently asked questions about PulseMatrix™
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
            Build your next pulse oximeter OEM/ODM product with PulseMatrix™
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for a pulse oximeter OEM/ODM manufacturer with SpO2 technology
            depth, Bluetooth and UI customization capability and ISO 13485
            manufacturing support? Share your project requirements with
            YimiLife.
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
              Request PulseMatrix™ Technical Brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
