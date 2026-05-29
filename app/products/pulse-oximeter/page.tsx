import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Pulse Oximeter Product Family | Fingertip Configuration Selector & Handheld Models | YimiLife",
  description:
    "Explore YimiLife pulse oximeter product forms with a fingertip pulse oximeter configuration selector, handheld SpO2 models, Bluetooth, voice, pediatric and rechargeable options.",
};

const fingertipHighlights = [
  "Adult and pediatric fingertip product forms",
  "Dry battery and rechargeable lithium battery options",
  "OLED / TFT display configurations",
  "Bluetooth and iOS / Android SDK discussion",
  "Voice prompt and elderly-care reading support",
  "Multiple housing, color and packaging directions",
];

const handheldHighlights = [
  "Two focused handheld SpO2 model directions",
  "External probe configuration for professional scenarios",
  "Rechargeable power design",
  "Larger display and extended monitoring layout",
  "Data storage or Bluetooth discussion by project",
];

const filterTags = [
  "All fingertip models",
  "Adult",
  "Pediatric",
  "Dry Battery",
  "Rechargeable",
  "Bluetooth",
  "Voice",
  "TFT Display",
  "High-Volume",
  "App Integration",
  "Elderly Care",
];

const fingertipSelectorRows = [
  {
    type: "Basic Adult Fingertip Model",
    bestFor: "Cost-sensitive distributor product line",
    user: "Adult / family",
    power: "Dry battery",
    display: "OLED",
    connectivity: "No / optional",
    voice: "Optional",
    direction: "Standard adult fingertip model",
    fit: "High-volume private label orders",
  },
  {
    type: "Pediatric Fingertip Model",
    bestFor: "Child-friendly family healthcare product",
    user: "Children",
    power: "Dry battery / rechargeable",
    display: "TFT / OLED",
    connectivity: "Optional",
    voice: "Optional",
    direction: "Pediatric housing model",
    fit: "Pediatric or family health brands",
  },
  {
    type: "Rechargeable Fingertip Model",
    bestFor: "Reusable home healthcare product",
    user: "Adult / family",
    power: "Lithium battery",
    display: "OLED / TFT",
    connectivity: "Optional",
    voice: "Optional",
    direction: "Rechargeable fingertip model",
    fit: "Premium retail / pharmacy channel",
  },
  {
    type: "Bluetooth Fingertip Model",
    bestFor: "App-connected SpO2 product project",
    user: "Adult / family",
    power: "Dry battery / rechargeable",
    display: "OLED / TFT",
    connectivity: "Bluetooth",
    voice: "Optional",
    direction: "Bluetooth-enabled fingertip model",
    fit: "Connected health / app integration",
  },
  {
    type: "Voice-Enabled Fingertip Model",
    bestFor: "Elderly users and home care reading support",
    user: "Elderly / adult",
    power: "Dry battery / rechargeable",
    display: "OLED / TFT",
    connectivity: "Optional",
    voice: "Recommended",
    direction: "Voice prompt fingertip model",
    fit: "Elderly care / accessible home use",
  },
  {
    type: "Color Display Fingertip Model",
    bestFor: "Differentiated product appearance",
    user: "Adult / pediatric",
    power: "Dry battery / rechargeable",
    display: "TFT",
    connectivity: "Optional",
    voice: "Optional",
    direction: "TFT display fingertip model",
    fit: "Brand differentiation projects",
  },
];

const handheldModels = [
  {
    model: "Handheld SpO2 Model A",
    probe: "External finger probe",
    display: "Large display",
    power: "Rechargeable",
    data: "Basic data review",
    scenario: "Nursing / clinical-support scenario",
  },
  {
    model: "Handheld SpO2 Model B",
    probe: "External probe option",
    display: "Larger UI layout",
    power: "Rechargeable",
    data: "Data storage / Bluetooth discussion",
    scenario: "Extended monitoring project",
  },
];

const basicParameters = [
  "SpO2 measurement and pulse rate measurement",
  "Adult and pediatric fingertip configurations",
  "OLED / TFT display options",
  "Dry battery and rechargeable lithium battery options",
  "Bluetooth data transmission option",
  "Voice prompt option for elderly users",
  "Alarm and display configuration options",
  "Handheld SpO2 models with external probe configuration",
];

const signalOptions = [
  "24-bit high-resolution ADC front-end architecture in selected configurations",
  "Advanced anti-motion artifact filtering for unstable finger conditions",
  "Low-perfusion signal processing for challenging PI scenarios",
  "PulseMatrix™ signal optimization platform for SpO2 waveform acquisition and signal interpretation",
  "Bluetooth protocol and SDK support for iOS/Android app integration discussions",
];

const gallerySlots = [
  {
    title: "Fingertip Pulse Oximeter Models",
    caption: "Adult and family SpO2 product forms with multiple display and power options.",
  },
  {
    title: "Pediatric Pulse Oximeter Models",
    caption: "Child-oriented housing, display and product appearance directions.",
  },
  {
    title: "Bluetooth / Voice-Enabled Fingertip Models",
    caption: "Connected and accessible-reading configurations for app or elderly-care projects.",
  },
  {
    title: "Handheld Pulse Oximeter Models",
    caption: "Professional SpO2 monitoring forms with external probe configuration.",
  },
];

const faqs = [
  {
    question:
      "How should a private label medical brand choose between fingertip pulse oximeter configurations?",
    answer:
      "The selection usually depends on target user group, expected price tier, power supply, display type, Bluetooth requirement and whether voice prompt is needed. YimiLife uses configuration discussions to narrow the options before moving into product samples or specifications.",
  },
  {
    question:
      "What is the difference between fingertip and handheld pulse oximeter models?",
    answer:
      "Fingertip pulse oximeters are compact finger-clip devices suitable for home healthcare, pharmacy retail and high-volume product lines. Handheld pulse oximeters are more suitable for professional or nursing scenarios where an external probe, larger display or extended monitoring layout may be required.",
  },
  {
    question:
      "Can YimiLife discuss Bluetooth pulse oximeter SDK integration for iOS or Android apps?",
    answer:
      "Yes. For Bluetooth fingertip pulse oximeter projects, YimiLife can discuss Bluetooth protocol, data transmission format and SDK integration requirements for iOS or Android app-connected product development.",
  },
  {
    question:
      "How does YimiLife support pediatric pulse oximeter configurations for private label medical brands?",
    answer:
      "Pediatric pulse oximeter configurations can be discussed around child-friendly housing, display format, packaging presentation, labeling requirements and target market positioning. Final specifications should be reviewed according to the product model and market requirement.",
  },
  {
    question:
      "How are low-perfusion and motion artifact challenges considered in YimiLife SpO2 product development?",
    answer:
      "Selected YimiLife SpO2 configurations may include low-perfusion signal processing, anti-motion artifact filtering and PulseMatrix™ signal optimization concepts. The exact configuration should be evaluated according to product form, hardware architecture and application scenario.",
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
        "YimiLife pulse oximeter product family page covering fingertip configuration selection, handheld SpO2 models, Bluetooth, voice, pediatric and rechargeable options.",
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
      name: "YimiLife pulse oximeter product forms and configurations",
      itemListElement: [
        "Fingertip Pulse Oximeter",
        "Pediatric Fingertip Pulse Oximeter",
        "Rechargeable Fingertip Pulse Oximeter",
        "Bluetooth Fingertip Pulse Oximeter",
        "Voice-Enabled Fingertip Pulse Oximeter",
        "Handheld Pulse Oximeter",
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

function PlaceholderVisual({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <div
      aria-label={`YimiLife ${label}`}
      className={`relative flex overflow-hidden rounded-[1.75rem] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-sky-100 shadow-sm ${
        compact ? "aspect-[5/3] min-h-[150px]" : "aspect-[4/3] min-h-[220px]"
      }`}
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute inset-x-8 bottom-8 h-20 rounded-full bg-white/50 blur-xl" />
      <div className="relative m-auto flex h-28 w-44 flex-col items-center justify-center rounded-[1.5rem] border border-white/70 bg-white/75 px-5 text-center shadow-lg backdrop-blur">
        <div className="mb-3 h-2 w-24 rounded-full bg-cyan-500/70" />
        <div className="text-sm font-semibold text-slate-800">{label}</div>
        <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-cyan-700">YimiLife</div>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
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
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-700">
              Explore YimiLife pulse oximeter product forms with a deeper focus on fingertip pulse
              oximeter configurations and a dedicated professional handheld SpO2 model line.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              The page is designed to help private label medical device brands quickly understand
              user groups, power options, display types, Bluetooth integration, voice prompts and
              key SpO2 signal-processing considerations.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#configuration-selector"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                Find Fingertip Configuration
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
            <PlaceholderVisual label="Fingertip + Handheld SpO2 Product Family" />
          </div>
        </div>
      </section>

      <section id="product-lines" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Product family overview"
          title="Main fingertip product line and focused handheld models"
          description="Fingertip pulse oximeters are the main product line with multiple configurations. Handheld pulse oximeters are presented separately as professional models with external probe options."
        />

        <div className="mt-12 grid gap-7 lg:grid-cols-[1.35fr_0.85fr] lg:items-stretch">
          <article className="overflow-hidden rounded-[2.25rem] border border-cyan-200 bg-gradient-to-br from-white via-cyan-50/60 to-white shadow-sm">
            <div className="grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8">
              <PlaceholderVisual label="Fingertip Pulse Oximeters" />
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Main product line</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  Fingertip Pulse Oximeters
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  The fingertip line covers the widest range of SpO2 product configurations, from
                  basic adult models to pediatric, rechargeable, Bluetooth, voice-enabled and
                  color-display directions.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {fingertipHighlights.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-cyan-800 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col rounded-[2.25rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Professional models</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Handheld Pulse Oximeters
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Two focused handheld SpO2 model directions are positioned for professional,
              nursing or extended monitoring scenarios.
            </p>
            <div className="mt-6">
              <PlaceholderVisual label="Handheld SpO2 Models" compact />
            </div>
            <ul className="mt-6 space-y-3">
              {handheldHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="configuration-selector" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Fingertip selector"
            title="Fingertip pulse oximeter configuration selector"
            description="Use this selector to narrow down fingertip pulse oximeter configurations by target user, power supply, display, connectivity and project scenario."
          />

          <div className="mt-9 flex flex-wrap justify-center gap-2">
            {filterTags.map((tag, index) => (
              <span
                key={tag}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  index === 0 ? "bg-slate-950 text-white" : "bg-white text-slate-700 shadow-sm ring-1 ring-slate-200"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-[1380px] w-full border-collapse text-left text-sm">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    {[
                      "Configuration Type",
                      "Best For",
                      "Target User",
                      "Power Supply",
                      "Display",
                      "Connectivity",
                      "Voice Prompt",
                      "Typical Model Direction",
                      "Project Fit",
                    ].map((header) => (
                      <th key={header} className="px-5 py-4 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fingertipSelectorRows.map((row, index) => (
                    <tr key={row.type} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-5 font-semibold text-slate-950">{row.type}</td>
                      <td className="px-5 py-5 text-slate-700">{row.bestFor}</td>
                      <td className="px-5 py-5 text-slate-700">{row.user}</td>
                      <td className="px-5 py-5 text-slate-700">{row.power}</td>
                      <td className="px-5 py-5 text-slate-700">{row.display}</td>
                      <td className="px-5 py-5 text-slate-700">{row.connectivity}</td>
                      <td className="px-5 py-5 text-slate-700">{row.voice}</td>
                      <td className="px-5 py-5 text-slate-700">{row.direction}</td>
                      <td className="px-5 py-5 text-slate-700">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Handheld models"
            title="Handheld pulse oximeter mini comparison"
            description="Handheld SpO2 products are handled as a focused professional line instead of being mixed into the richer fingertip selector."
            align="left"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {handheldModels.map((item) => (
              <article key={item.model} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <PlaceholderVisual label={item.model} compact />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{item.model}</h3>
                <dl className="mt-5 space-y-3 text-sm leading-6">
                  {[
                    ["Probe", item.probe],
                    ["Display", item.display],
                    ["Power", item.power],
                    ["Data Function", item.data],
                    ["Scenario", item.scenario],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[110px_1fr] gap-3 border-t border-slate-100 pt-3">
                      <dt className="font-semibold text-slate-950">{label}</dt>
                      <dd className="text-slate-700">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-cyan-50/50 to-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Parameters</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Key pulse oximeter parameters & signal processing options
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                This snapshot keeps the page focused on product selection while naturally exposing
                the SpO2 engineering entities that procurement teams and AI search engines expect
                to understand.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-950">Product parameters</h3>
                <ul className="mt-6 space-y-3">
                  {basicParameters.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-slate-700">
                      <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-cyan-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50/70 p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-950">Signal processing options</h3>
                <ul className="mt-6 space-y-3">
                  {signalOptions.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-slate-700">
                      <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-cyan-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-2xl bg-white/75 px-4 py-3 text-sm leading-6 text-slate-600">
                  Exact hardware and signal-processing configuration should be evaluated by product
                  model, target application and project requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeader
          eyebrow="Product form gallery"
          title="Pulse oximeter product form gallery"
          description="A visual overview of fingertip, pediatric, Bluetooth, voice-enabled and handheld pulse oximeter product forms."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {gallerySlots.map((slot) => (
            <figure key={slot.title} className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
              <PlaceholderVisual label={slot.title} compact />
              <figcaption className="mt-5 px-2 pb-2">
                <h3 className="text-base font-semibold text-slate-950">{slot.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{slot.caption}</p>
              </figcaption>
            </figure>
          ))}
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
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">{faq.answer}</p>
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
              Share the target user group, power supply preference, display type, Bluetooth requirement
              and expected product scenario you are evaluating.
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
