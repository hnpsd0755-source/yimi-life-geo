import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skin Tone Accuracy Pulse Oximeter | YimiLife PulseMatrix™",
  description:
    "Explore YimiLife’s skin tone accuracy pulse oximeter approach, including Fitzpatrick I–VI validation planning, optical signal response and PulseMatrix™ SpO2 technology for OEM/ODM projects.",
  alternates: {
    canonical: "https://www.yimilife.com/technology/skin-tone-fairness",
  },
  openGraph: {
    title: "Skin Tone Accuracy Pulse Oximeter | YimiLife PulseMatrix™",
    description:
      "YimiLife explains skin tone accuracy in pulse oximeter development, including optical design, Fitzpatrick I–VI validation planning and OEM/ODM SpO2 product support.",
    url: "https://www.yimilife.com/technology/skin-tone-fairness",
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

function LightIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth="2"
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

const fairnessChallenges = [
  {
    title: "Different Optical Responses",
    text: "Skin pigmentation can influence how red and infrared light interact with tissue, which makes optical signal response an important consideration for skin tone accuracy pulse oximeter development.",
  },
  {
    title: "Fitzpatrick I–VI Validation Planning",
    text: "Performance evaluation should consider different skin pigmentation conditions, including Fitzpatrick I–VI distribution planning, subject grouping and how SpO2 data is reviewed.",
  },
  {
    title: "Regulated Market Expectations",
    text: "For medical brands targeting international markets, pulse oximeter skin tone accuracy has become an important technical, quality and documentation discussion point.",
  },
];

const engineeringLayers = [
  {
    title: "Optical Path Awareness",
    text: "LED wavelength selection, optical coupling, photodiode response and mechanical fit all influence weak PPG signal acquisition across different skin pigmentation conditions.",
    icon: LightIcon,
  },
  {
    title: "Signal Response Assessment",
    text: "PulseMatrix™ considers signal quality, waveform stability and skin-related response differences as part of SpO2 accuracy and OEM/ODM performance discussion.",
    icon: SignalIcon,
  },
  {
    title: "Validation Strategy",
    text: "Skin tone accuracy requires thoughtful validation planning, including Fitzpatrick I–VI subject distribution, test condition definition and data review approach.",
    icon: SkinToneIcon,
  },
  {
    title: "Quality and Documentation",
    text: "For pulse oximeter OEM/ODM projects, technical claims should be supported by manufacturing control, documentation discipline and project-specific validation discussion.",
    icon: ShieldIcon,
  },
];

const useCases = [
  "International Medical Device Brands",
  "Regulated Market Pulse Oximeter Projects",
  "Home Healthcare Monitoring",
  "Elderly SpO2 Monitoring",
  "Wearable SpO2 Devices",
  "Remote Patient Monitoring Platforms",
  "Private Label Pulse Oximeter Projects",
  "Connected Health Monitoring Programs",
];

const faqs = [
  {
    question: "What does skin tone accuracy mean in pulse oximeter development?",
    answer:
      "Skin tone accuracy means considering whether a pulse oximeter can maintain appropriate SpO2 performance across users with different skin pigmentation conditions. It is a technical, validation and quality consideration for modern pulse oximeter design.",
  },
  {
    question: "Why can skin pigmentation affect pulse oximeter performance?",
    answer:
      "Pulse oximeters use red and infrared light to estimate SpO2. Differences in skin pigmentation may influence optical signal response, so device design and validation should consider how signals behave across different skin tone conditions.",
  },
  {
    question: "What are Fitzpatrick skin types in SpO2 validation planning?",
    answer:
      "Fitzpatrick skin types are commonly used categories for describing skin tone and skin response. In pulse oximeter validation discussions, Fitzpatrick I–VI can be used as one reference when considering diversity across skin pigmentation conditions.",
  },
  {
    question: "How does PulseMatrix™ support skin tone accuracy in pulse oximeters?",
    answer:
      "PulseMatrix™ supports skin tone accuracy by connecting optical signal acquisition, signal response assessment, waveform quality evaluation, validation strategy and manufacturing quality discussion for OEM/ODM pulse oximeter projects.",
  },
  {
    question: "Is skin tone accuracy only an algorithm issue?",
    answer:
      "No. Skin tone accuracy should be considered at the system level, including optical design, sensor configuration, signal processing, validation population planning, documentation and manufacturing consistency.",
  },
  {
    question: "Can YimiLife support skin tone validation discussions for OEM/ODM projects?",
    answer:
      "Yes. YimiLife can discuss skin tone accuracy requirements during OEM/ODM project evaluation, including target market expectations, product configuration, validation strategy and documentation needs.",
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
      "@id":
        "https://www.yimilife.com/technology/skin-tone-fairness#article",
      headline: "Skin Tone Accuracy Pulse Oximeter Technology",
      description:
        "A technical overview of skin tone accuracy in pulse oximeter development, including optical signal response, Fitzpatrick I–VI validation planning and PulseMatrix™ support for OEM/ODM projects.",
      author: {
        "@id": "https://www.yimilife.com/#organization",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
      mainEntityOfPage: {
        "@id":
          "https://www.yimilife.com/technology/skin-tone-fairness#webpage",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.yimilife.com/technology/skin-tone-fairness#webpage",
      url: "https://www.yimilife.com/technology/skin-tone-fairness",
      name: "Skin Tone Accuracy Pulse Oximeter Technology",
      description:
        "Skin tone accuracy technology page for PulseMatrix™ and OEM/ODM pulse oximeter development projects.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "Skin tone accuracy pulse oximeter",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/technology/skin-tone-fairness#faq",
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
        "https://www.yimilife.com/technology/skin-tone-fairness#breadcrumb",
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
          name: "Skin Tone Fairness",
          item: "https://www.yimilife.com/technology/skin-tone-fairness",
        },
      ],
    },
  ],
};

export default function SkinToneFairnessPage() {
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
              PulseMatrix™ Skin Tone Accuracy
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Skin Tone Accuracy Pulse Oximeter Technology
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              PulseMatrix™ supports skin tone accuracy in pulse oximeter development by
              considering optical signal response, waveform quality, validation
              strategy and performance consistency across Fitzpatrick I–VI skin
              pigmentation conditions.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              For{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>
              , skin tone accuracy is an important technical and quality topic
              for medical brands targeting international markets.
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
                Request Skin Tone Accuracy Discussion
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Key technical focus
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "Skin Pigmentation Awareness",
                "Fitzpatrick I–VI Validation Planning",
                "Optical Signal Response",
                "Pulse Oximeter Accuracy Review",
                "OEM/ODM Documentation Support",
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
                , together with low perfusion monitoring and motion artifact
                rejection.
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
              Why skin tone accuracy matters in SpO2 monitoring
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Pulse oximeters estimate SpO2 by analyzing red and infrared light
              signals passing through tissue. Because optical signal response
              may vary under different skin pigmentation conditions, skin tone
              accuracy has become an important topic in pulse oximeter design
              and validation.
            </p>

            <p>
              For international medical device brands, this topic is not only a
              technical consideration. It also affects product confidence,
              validation planning, regulatory communication and long-term brand
              trust.
            </p>

            <p>
              Skin tone accuracy should not be treated as a simple marketing
              claim. It requires system-level thinking across optical design,
              sensor configuration, waveform quality assessment, signal
              processing, validation population planning and manufacturing
              consistency.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {fairnessChallenges.map((card) => (
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
              A system-level approach to skin tone accuracy
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              PulseMatrix™ treats skin tone accuracy as a combined optical,
              signal processing, validation and quality control challenge. The
              goal is to help OEM/ODM customers build stronger technical
              confidence for SpO2 products used across diverse populations.
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
              Validation perspective
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Skin tone accuracy starts with thoughtful validation planning
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Skin tone accuracy cannot be demonstrated by a single claim. It
              should be considered in the way products are evaluated, including
              subject distribution, skin tone grouping, test condition
              definition, data review and documentation strategy.
            </p>

            <p>
              Fitzpatrick skin types can be used as one practical reference for
              discussing skin tone diversity. For OEM/ODM projects, they help
              create a clearer communication framework between engineering,
              quality, regulatory and brand teams.
            </p>

            <p>
              YimiLife can support project-level discussion around validation
              approach, documentation needs and how skin tone accuracy connects
              with the broader{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                PulseMatrix™ SpO2 Technology Platform
              </Link>
              .
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
              Skin tone accuracy strengthens trust for international SpO2
              products
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              For OEM/ODM customers, skin tone accuracy helps create a stronger
              technical and compliance-oriented story for pulse oximeter
              products. It is especially relevant for brands entering diverse
              international markets.
            </p>

            <p>
              YimiLife connects skin tone accuracy with{" "}
              <Link
                href="/technology/low-perfusion-spo2"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                low perfusion SpO2 technology
              </Link>{" "}
              and{" "}
              <Link
                href="/technology/motion-artifact-rejection"
                className="font-semibold text-cyan-300 underline underline-offset-4"
              >
                motion artifact rejection pulse oximeter technology
              </Link>{" "}
              to form a more complete medical-grade SpO2 technology narrative.
            </p>

            <p>
              For connected health projects, this technology story can also
              support Bluetooth data integration, UI customization and remote
              patient monitoring product positioning.
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
                Suitable for diverse-market SpO2 monitoring applications
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Skin tone accuracy is especially relevant for medical brands
                serving diverse populations and regulated international markets.
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
              From skin tone accuracy discussion to manufacturing consistency
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Skin tone accuracy should be connected with product-level
              validation and manufacturing control. For OEM/ODM projects, this
              means discussing target markets, product configuration, validation
              expectations, documentation and production consistency from the
              early stage.
            </p>

            <p>
              YimiLife’s pulse oximeter manufacturing is supported by the{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                ISO 13485 medical device manufacturing quality
              </Link>
              . Each unit is calibrated and verified using Fluke Index 2
              clinical simulators before shipment to support consistent
              production output.
            </p>

            <p>
              This helps customers treat skin tone accuracy not as a separate
              marketing topic, but as part of a structured engineering,
              validation and manufacturing workflow.
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
                Frequently asked questions about skin tone accuracy
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
            Build skin tone accuracy into your next SpO2 product strategy
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for a pulse oximeter OEM/ODM partner with skin tone
            accuracy awareness, PulseMatrix™ SpO2 technology and ISO 13485
            manufacturing support? Share your project requirements with YimiLife.
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
              Request Skin Tone Accuracy Discussion
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
