import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Pulse Oximeter Product Family | Fingertip, Handheld, Bluetooth & Pediatric Models | YimiLife",
  description:
    "Explore YimiLife pulse oximeter product forms including fingertip, handheld, adult, pediatric, dry-battery, rechargeable, Bluetooth and voice-enabled SpO2 monitoring configurations.",
};

const productTypes = [
  {
    title: "Fingertip Pulse Oximeters",
    description:
      "Compact finger-clip SpO2 devices for home healthcare, pharmacy retail and general family monitoring scenarios.",
    imageLabel: "Fingertip models",
    tags: [
      "Adult / Pediatric",
      "Dry Battery",
      "Rechargeable Option",
      "OLED / TFT",
      "Bluetooth Option",
      "Voice Option",
    ],
  },
  {
    title: "Handheld Pulse Oximeters",
    description:
      "Handheld SpO2 monitoring devices for nursing, clinical-support and extended monitoring scenarios where a larger display and external probe configuration may be required.",
    imageLabel: "Handheld models",
    tags: [
      "Handheld Form",
      "External Probe",
      "Larger Display",
      "Rechargeable Battery",
      "Data Storage Option",
    ],
  },
  {
    title: "Adult Pulse Oximeters",
    description:
      "Adult SpO2 monitoring models designed for common home healthcare, distributor product lines and private label medical device brands.",
    imageLabel: "Adult models",
    tags: [
      "Adult Use",
      "Home Healthcare",
      "OLED / TFT",
      "Alarm Option",
      "Family Monitoring",
    ],
  },
  {
    title: "Pediatric Pulse Oximeters",
    description:
      "Child-oriented pulse oximeter models with pediatric-friendly housing, color display options and packaging configurations.",
    imageLabel: "Pediatric models",
    tags: [
      "Pediatric Use",
      "Child Housing",
      "Color Display",
      "Family Brands",
      "Private Label Configuration",
    ],
  },
  {
    title: "Bluetooth Pulse Oximeters",
    description:
      "Bluetooth-enabled SpO2 devices for app-connected product projects, with protocol and SDK support for iOS/Android integration discussions.",
    imageLabel: "Bluetooth models",
    tags: [
      "Bluetooth",
      "App Integration",
      "iOS / Android SDK Discussion",
      "Data Transmission",
      "Connected Health Projects",
    ],
  },
  {
    title: "Voice-Enabled Pulse Oximeters",
    description:
      "Voice prompt pulse oximeter options for elderly users and home care scenarios requiring easier result reading.",
    imageLabel: "Voice models",
    tags: [
      "Voice Prompt",
      "Elderly Users",
      "Home Care",
      "Optional Alarm",
      "Accessible Reading",
    ],
  },
];

const selectionRows = [
  {
    form: "Fingertip Pulse Oximeter",
    user: "Adult / family",
    power: "Dry battery / rechargeable",
    display: "OLED / TFT",
    connectivity: "Optional Bluetooth",
    voice: "Optional",
    signal: "24-bit high-resolution ADC front-end option",
    use: "Home / pharmacy",
  },
  {
    form: "Pediatric Pulse Oximeter",
    user: "Children",
    power: "Dry battery / rechargeable",
    display: "TFT / OLED",
    connectivity: "Optional Bluetooth",
    voice: "Optional",
    signal: "Pediatric signal processing configuration",
    use: "Children / family",
  },
  {
    form: "Handheld Pulse Oximeter",
    user: "Adult / professional",
    power: "Rechargeable lithium battery",
    display: "Larger display",
    connectivity: "Optional Bluetooth",
    voice: "Optional",
    signal: "External probe and extended monitoring configuration",
    use: "Nursing / clinical support",
  },
  {
    form: "Bluetooth Pulse Oximeter",
    user: "Adult / family",
    power: "Dry battery / rechargeable",
    display: "OLED / TFT",
    connectivity: "Bluetooth",
    voice: "Optional",
    signal: "Bluetooth protocol and SDK integration discussion",
    use: "App-connected SpO2 project",
  },
  {
    form: "Voice Pulse Oximeter",
    user: "Adult / elderly",
    power: "Dry battery / rechargeable",
    display: "OLED / TFT",
    connectivity: "Optional Bluetooth",
    voice: "Voice prompt",
    signal: "Accessible result-reading configuration",
    use: "Home care / elderly users",
  },
];

const basicParameters = [
  "SpO2 measurement",
  "Pulse rate measurement",
  "OLED / TFT display options",
  "Dry battery and rechargeable lithium battery options",
  "Adult and pediatric product forms",
  "Bluetooth data transmission option",
  "Voice prompt option",
  "Alarm and display configuration options",
];

const signalOptions = [
  "24-bit high-resolution ADC front-end architecture in selected configurations",
  "Advanced anti-motion artifact filtering for unstable finger conditions",
  "Low-perfusion signal processing for challenging PI scenarios",
  "PulseMatrix™ signal optimization platform for SpO2 waveform acquisition and signal interpretation",
];

const gallerySlots = [
  {
    title: "Fingertip pulse oximeter models",
    alt: "YimiLife fingertip pulse oximeter product image placeholder",
  },
  {
    title: "Pediatric pulse oximeter models",
    alt: "YimiLife pediatric pulse oximeter product image placeholder",
  },
  {
    title: "Handheld pulse oximeter models",
    alt: "YimiLife handheld pulse oximeter product image placeholder",
  },
  {
    title: "Bluetooth and voice-enabled pulse oximeter models",
    alt: "YimiLife Bluetooth voice-enabled pulse oximeter product image placeholder",
  },
];

const faqs = [
  {
    question:
      "How does YimiLife support pediatric pulse oximeter configurations for private label medical brands?",
    answer:
      "YimiLife can discuss pediatric pulse oximeter configurations across housing style, color display options, packaging format and product labeling requirements. Final specifications should be reviewed according to the target market and project scope.",
  },
  {
    question:
      "What is the difference between fingertip and handheld pulse oximeter product forms?",
    answer:
      "Fingertip pulse oximeters are compact finger-clip devices for home healthcare, pharmacy retail and general family monitoring. Handheld pulse oximeters are more suitable for nursing, clinical-support or extended monitoring scenarios where a larger display or external probe configuration may be required.",
  },
  {
    question:
      "Can YimiLife discuss Bluetooth pulse oximeter SDK integration for iOS or Android apps?",
    answer:
      "Yes. For Bluetooth pulse oximeter projects, YimiLife can discuss Bluetooth protocol, data transmission and SDK integration requirements for iOS or Android app-connected product development.",
  },
  {
    question:
      "What pulse oximeter configurations are available for elderly users or home care scenarios?",
    answer:
      "Voice-enabled pulse oximeters, larger display options, optional alarm settings and accessible result-reading configurations may be discussed for elderly users or home care product scenarios.",
  },
  {
    question:
      "How are low-perfusion and motion artifact challenges considered in YimiLife SpO2 product development?",
    answer:
      "Selected YimiLife SpO2 configurations may include low-perfusion signal processing, anti-motion artifact filtering and PulseMatrix™ signal optimization concepts. The exact configuration should be evaluated according to the product form, hardware architecture and target application.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/products/pulse-oximeter#webpage",
      name: "Pulse Oximeter Product Family",
      url: "https://www.yimilife.com/products/pulse-oximeter",
      description:
        "YimiLife pulse oximeter product family page covering fingertip, handheld, adult, pediatric, Bluetooth and voice-enabled SpO2 monitoring configurations.",
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
      name: "YimiLife pulse oximeter product types",
      itemListElement: [
        "Fingertip Pulse Oximeter",
        "Handheld Pulse Oximeter",
        "Pediatric Pulse Oximeter",
        "Bluetooth Pulse Oximeter",
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
          description:
            "SpO2 and pulse rate monitoring product configuration for home healthcare, professional support or private label medical device brand discussions.",
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

function PlaceholderVisual({ label }: { label: string }) {
  return (
    <div
      aria-label={label}
      className="relative flex aspect-[4/3] min-h-[220px] overflow-hidden rounded-[1.75rem] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-sky-100 shadow-sm"
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute inset-x-8 bottom-8 h-20 rounded-full bg-white/50 blur-xl" />
      <div className="relative m-auto flex h-32 w-48 flex-col items-center justify-center rounded-[1.5rem] border border-white/70 bg-white/70 px-6 text-center shadow-lg backdrop-blur">
        <div className="mb-3 h-2 w-24 rounded-full bg-cyan-500/70" />
        <div className="text-sm font-semibold text-slate-800">{label}</div>
        <div className="mt-2 text-xs text-slate-500">Product visual slot</div>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}

export default function PulseOximeterProductFamilyPage() {
  return (
    <main className="bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-cyan-50/70 to-slate-50">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Products / Pulse Oximeters</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-7xl">
              Pulse Oximeter Product Family
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-650">
              Explore YimiLife pulse oximeter product forms including fingertip, handheld, adult,
              pediatric, dry-battery, rechargeable, Bluetooth and voice-enabled SpO2 monitoring
              configurations.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              For private label medical device brands, YimiLife supports structured product
              configuration discussions across display, power supply, connectivity and user-group
              requirements.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#product-types"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                View Product Types
                <span className="ml-2">›</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-cyan-600 px-7 py-4 text-base font-semibold text-cyan-700 transition hover:bg-cyan-50"
              >
                Request Product Details
                <span className="ml-2">›</span>
              </Link>
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-white bg-white/70 p-4 shadow-xl shadow-cyan-900/10 backdrop-blur">
            <PlaceholderVisual label="Fingertip + Pediatric + Handheld Pulse Oximeters" />
          </div>
        </div>
      </section>

      <section id="product-types" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Product types"
          title="Find the right pulse oximeter form factor"
          description="Compare core pulse oximeter product categories by use scenario, power supply, display type, connectivity and user group."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productTypes.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-4 pb-0">
                <PlaceholderVisual label={item.imageLabel} />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 min-h-[88px] text-base leading-7 text-slate-600">{item.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Selection table"
            title="Pulse oximeter model selection table"
            description="A quick comparison of pulse oximeter product forms by user group, power supply, display, connectivity and signal architecture."
          />

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-[1120px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    {[
                      "Product Form",
                      "User Group",
                      "Power Supply",
                      "Display",
                      "Connectivity",
                      "Voice",
                      "Signal Architecture",
                      "Typical Use",
                    ].map((header) => (
                      <th key={header} className="px-5 py-4 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {selectionRows.map((row, index) => (
                    <tr key={row.form} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-5 font-semibold text-slate-950">{row.form}</td>
                      <td className="px-5 py-5 text-slate-650">{row.user}</td>
                      <td className="px-5 py-5 text-slate-650">{row.power}</td>
                      <td className="px-5 py-5 text-slate-650">{row.display}</td>
                      <td className="px-5 py-5 text-slate-650">{row.connectivity}</td>
                      <td className="px-5 py-5 text-slate-650">{row.voice}</td>
                      <td className="px-5 py-5 text-slate-650">{row.signal}</td>
                      <td className="px-5 py-5 text-slate-650">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Parameters</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Key pulse oximeter parameters & signal processing options
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              This snapshot keeps the product page focused on configuration and product selection,
              while still making core SpO2 engineering entities visible for search engines and
              procurement teams.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">Basic product parameters</h3>
              <ul className="mt-6 space-y-3">
                {basicParameters.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-650">
                    <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-cyan-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50/60 p-7 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-950">Advanced signal options</h3>
              <ul className="mt-6 space-y-3">
                {signalOptions.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-slate-700">
                    <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-cyan-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl bg-white/70 px-4 py-3 text-sm leading-6 text-slate-600">
                Exact hardware and signal-processing configuration should be evaluated by product
                model, target application and project requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-slate-50 to-cyan-50/70 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Product visuals"
            title="Reserved image slots for product families"
            description="These spaces are prepared for actual product photography, renderings or approved visual assets in the next design stage."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {gallerySlots.map((slot) => (
              <figure key={slot.title}>
                <PlaceholderVisual label={slot.title} />
                <figcaption className="mt-4 text-center text-sm font-medium text-slate-600">
                  {slot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions procurement teams often ask"
          description="Practical answers for product managers, private label medical device brands and overseas distribution teams evaluating pulse oximeter configurations."
        />
        <div className="mt-10 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-7 open:bg-slate-50/70">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-slate-950">
                <span>{faq.question}</span>
                <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-cyan-50 text-cyan-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-650">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[2.25rem] bg-slate-950 px-7 py-12 text-white md:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Next step</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Need pulse oximeter product specifications or configuration support?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Share the product form, target user group, power supply preference and connectivity
              requirements you are evaluating.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Contact YimiLife
              <span className="ml-2">›</span>
            </Link>
            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Discuss Pulse Oximeter Configuration
              <span className="ml-2">›</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
