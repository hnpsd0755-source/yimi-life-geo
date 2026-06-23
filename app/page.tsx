import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "cyan" | "amber" | "slate" | "emerald";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Manufacturer | YimiLife",
  description:
    "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer for pulse oximeters, blood pressure monitors, private label and overseas healthcare projects.",
  alternates: {
    canonical: "https://www.yimilife.com/",
  },
  openGraph: {
    title: "Medical Device OEM/ODM Manufacturer | YimiLife",
    description:
      "ISO 13485 medical device OEM/ODM manufacturing for pulse oximeters and blood pressure monitors, with private-label customization and production verification.",
    url: "https://www.yimilife.com/",
    siteName: "YimiLife",
    type: "website",
  },
};

const proofCards = [
  {
    value: "ISO 13485",
    label: "Quality system",
    href: "/about#quality-compliance",
  },
  {
    value: "3,000㎡",
    label: "Production facility",
    href: "/about",
  },
  {
    value: "300,000 / month",
    label: "Capacity",
    href: "/about#manufacturing",
  },
  {
    value: "25+ models",
    label: "FDA / MDR / NMPA",
    href: "/about#quality-compliance",
  },
  {
    value: "Fluke Index 2",
    label: "Calibration workflow",
    href: "/about#manufacturing",
  },
];

const quickAnswers = [
  {
    question: "Are you a real manufacturer?",
    answer:
      "YimiLife operates a 3,000㎡ production facility in Shenzhen focused on pulse oximeters and blood pressure monitors.",
    proof: "Factory-based execution",
  },
  {
    question: "Do you follow a medical device quality system?",
    answer:
      "Manufacturing and project execution are managed under an ISO 13485 quality system.",
    proof: "ISO 13485 system",
  },
  {
    question: "Do you have mature product platforms?",
    answer:
      "Mature pulse oximeter and blood pressure monitor platforms support private-label and OEM/ODM projects.",
    proof: "Product-platform based",
  },
  {
    question: "How do you support production consistency?",
    answer:
      "Pulse oximeter production includes 100% calibrated with Fluke Index 2 simulator under defined product and verification conditions.",
    proof: "Production verification",
  },
  {
    question: "Can small brands start early discussions?",
    answer:
      "Early feasibility discussions, sample evaluation and structured project review are available for overseas SMEs.",
    proof: "SME-friendly intake",
  },
];

const aiAnswer =
  "YimiLife is a Shenzhen-based ISO 13485 medical device OEM/ODM manufacturer focused on pulse oximeters, blood pressure monitors, and wearable monitoring devices for OEM/ODM projects for overseas healthcare brands, distributors, and product teams.";

const productFamilies = [
  {
    title: "Pulse Oximeters",
    status: "Mature Core Product Line",
    description:
      "Fingertip, pediatric, Bluetooth and handheld pulse oximeter directions for private-label and OEM/ODM projects.",
    bullets: [
      "Fingertip",
      "Bluetooth option",
      "Handheld track",
      "SpO2 verification",
    ],
    image: "/homepage/ai-product-platforms.png",
    imageAlt: "YimiLife pulse oximeter product platform for OEM and private-label projects",
    imagePosition: "0% center",
    href: "/products/pulse-oximeter",
    cta: "View Pulse Oximeter Options",
    accent: "cyan" as Tone,
  },
  {
    title: "Blood Pressure Monitors",
    status: "Mature / Customizable Product Line",
    description:
      "Upper-arm blood pressure monitors, Bluetooth BP models and home healthcare platform options for brand and distributor projects.",
    bullets: [
      "Upper-arm",
      "Bluetooth option",
      "Cuff customization",
      "ODM platform",
    ],
    image: "/homepage/ai-product-platforms.png",
    imageAlt: "YimiLife upper-arm blood pressure monitor product platform",
    imagePosition: "50% center",
    href: "/products/blood-pressure-monitor",
    cta: "View BP Monitor Options",
    accent: "cyan" as Tone,
  },
  {
    title: "Wearable Monitoring Devices",
    status: "Wearable Product Line",
    description:
      "Wearable SpO2, temperature monitoring and Bluetooth-connected health data devices for OEM/ODM customers, with customization, software integration and production support.",
    bullets: [
      "Wearable devices",
      "Sample planning",
      "Low-power design",
      "Software integration",
    ],
    image: "/homepage/ai-product-platforms.png",
    imageAlt: "YimiLife wearable monitoring device options for OEM and ODM evaluation",
    imagePosition: "100% center",
    href: "/products/wearable-monitoring",
    cta: "Explore Wearable Monitoring",
    accent: "cyan" as Tone,
  },
];

const comparisonRows = [
  {
    category: "Pulse Oximeter",
    fit: "Private-label fingertip, pediatric, Bluetooth and handheld SpO2 projects.",
    customization: "Logo, packaging, UI settings, Bluetooth options and product-track selection.",
    stage: "Mature core product family",
  },
  {
    category: "Blood Pressure Monitor",
    fit: "Upper-arm BP monitor projects for distributors, brands and home healthcare programs.",
    customization: "Cuff, display, packaging, Bluetooth configuration and platform discussion.",
    stage: "Mature / customizable",
  },
  {
    category: "Wearable Monitoring Devices",
    fit: "Selected SpO2 watch, infant foot SpO2, temperature and sleep monitoring concepts.",
    customization: "Engineering feasibility, low-power design, Bluetooth SDK and software integration.",
    stage: "Wearable product options",
  },
];

const oemSteps = [
  {
    number: "01",
    title: "Requirement Review",
    summary:
      "Clarify product category, target market, expected quantity, timeline and documentation needs.",
    output: "Initial project brief",
  },
  {
    number: "02",
    title: "Customization Scope",
    summary:
      "Define whether the project fits private label, UI settings, Bluetooth integration, mold update or ODM.",
    output: "Proposed customization level",
  },
  {
    number: "03",
    title: "Sample & Verification",
    summary:
      "Prepare samples, confirm functional and visual requirements, and define required verification items.",
    output: "Sample package and review plan",
  },
  {
    number: "04",
    title: "Production & Delivery",
    summary:
      "Move approved projects into controlled manufacturing, inspection, traceability and shipment support.",
    output: "Production-ready delivery",
  },
];

const smallBrandSupport = [
  {
    title: "Feasibility",
    text: "Early review",
  },
  {
    title: "Samples",
    text: "Model evaluation",
  },
  {
    title: "Customization",
    text: "Clear scope",
  },
  {
    title: "Documents",
    text: "Labeling and IFU",
  },
];

const homepageFaqs = [
  {
    question: "What products does YimiLife manufacture for OEM/ODM projects?",
    answer:
      "YimiLife focuses on pulse oximeters, blood pressure monitors and wearable monitoring platforms for OEM/ODM projects for overseas healthcare brands and distributors.",
  },
  {
    question: "Can YimiLife support private-label medical device projects?",
    answer:
      "Yes. YimiLife supports private-label customization including logo, packaging, UI settings, selected connectivity options and project-specific documentation discussion.",
  },
  {
    question: "What should buyers send before quotation?",
    answer:
      "Buyers should send the target market, product category, estimated quantity range, customization needs and timeline so the team can review feasibility before quotation.",
  },
  {
    question: "Is wearable monitoring ready for mass OEM production?",
    answer:
      "Wearable monitoring is handled as a product family for OEM/ODM project evaluation, with engineering feasibility and software integration reviewed before production planning.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/#webpage",
      url: "https://www.yimilife.com/",
      name: "Medical Device OEM/ODM Manufacturer | YimiLife",
      description:
        "YimiLife homepage for medical device OEM/ODM manufacturing, pulse oximeter and blood pressure monitor product families, private-label support, production verification and project intake.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      name: "YimiLife product families",
      itemListElement: productFamilies.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: item.title,
          description: item.description,
          url: `https://www.yimilife.com${item.href}`,
          brand: {
            "@type": "Brand",
            name: "YimiLife",
          },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/#faq",
      mainEntity: homepageFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5l4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Badge({ children, tone = "cyan" }: { children: ReactNode; tone?: Tone }) {
  const toneClass = {
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-800",
    amber: "border-cyan-200 bg-cyan-50 text-cyan-800",
    slate: "border-slate-200 bg-slate-100 text-slate-700",
    emerald: "border-cyan-200 bg-cyan-50 text-cyan-800",
  }[tone];

  return (
    <span className={`inline-flex max-w-full rounded-xl border px-3 py-1 text-left text-xs font-semibold uppercase leading-5 tracking-[0.12em] ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Badge tone="slate">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}

function ProductImage({
  src,
  alt,
  position = "center center",
}: {
  src: string;
  alt: string;
  position?: string;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-200 bg-slate-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="scale-[1.45] object-cover transition duration-300 group-hover:scale-[1.5]"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

function ProductPlatformCard({
  item,
}: {
  item: (typeof productFamilies)[number];
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <ProductImage src={item.image} alt={item.imageAlt} position={item.imagePosition} />
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone={item.accent}>{item.status}</Badge>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
          {item.title}
        </h3>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.bullets.map((bullet) => (
            <span
              key={bullet}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700"
            >
              {bullet}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-7">
          <Link
            href={item.href}
            className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
          >
            {item.cta}
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#f7fafb] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden border-b border-slate-200 bg-slate-950">
        <Image
          src="/homepage/ai-hero-devices.png"
          alt="AI-generated placeholder showing YimiLife-style monitoring device family for OEM and ODM presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.86)_0%,rgba(2,6,23,0.68)_34%,rgba(2,6,23,0.18)_68%,rgba(2,6,23,0.06)_100%)]" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[calc(100dvh-72px)] max-w-7xl items-center px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-xl border border-cyan-200/25 bg-white/12 px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
              Medical Device OEM/ODM Manufacturer
            </div>
            <h1 className="mt-6 break-words text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              Build your monitoring device line with a factory partner
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Pulse oximeters, blood pressure monitors, and wearable monitoring devices for overseas healthcare brands planning OEM/ODM programs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-50"
              >
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#product-families"
                className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18"
              >
                View Product Platforms
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 max-w-xl rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur">
              <p className="text-sm font-semibold">Best fit for procurement teams that need:</p>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-200 sm:grid-cols-2">
                <span>Factory-based project execution</span>
                <span>Certified-model experience</span>
                <span>Private-label customization</span>
                <span>Production verification discussion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement proof */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Badge tone="cyan">Procurement Proof</Badge>
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Supplier facts buyers scan first
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
            {proofCards.map((item) => (
              <Link
                key={item.value}
                href={item.href}
                className="group min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-200 hover:bg-cyan-50"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-cyan-700 ring-1 ring-slate-200 transition group-hover:ring-cyan-200">
                  <CheckIcon className="h-4 w-4" />
                </div>
                <p className="mt-4 break-words text-base font-semibold tracking-tight text-slate-950 md:text-xl">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI answer block */}
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
        <div className="grid gap-6 rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm md:grid-cols-[0.32fr_0.68fr] md:p-8">
          <div>
            <Badge tone="cyan">AI Answer</Badge>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A concise supplier summary for buyers and AI search surfaces.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold leading-8 text-slate-950">
              {aiAnswer}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Send your target market, product category, quantity range, and customization needs. Our team will review feasibility before quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Product families */}
      <section id="product-families" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Product Families"
            title="Three product lines"
            text="Mature platforms and wearable options for OEM/ODM evaluation."
          />
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {productFamilies.map((item) => (
            <ProductPlatformCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* Visual capability modules */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src="/homepage/ai-pulsematrix-visual.png"
                alt="AI-generated placeholder visualization of PulseMatrix signal processing for product engineering discussion"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <Badge tone="cyan">PulseMatrix™</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Signal platform for difficult monitoring conditions
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                PulseMatrix™ is positioned around 0.1% PI low perfusion, motion artifact rejection, and skin-tone fairness for OEM/ODM product discussions under defined verification conditions.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src="/homepage/ai-factory-qc.png"
                alt="AI-generated placeholder of medical device production and quality inspection for YimiLife manufacturing communication"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <Badge tone="cyan">Manufacturing Proof</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                Factory-based execution for sample and production review
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Project discussions can cover sample evaluation, production verification, documentation scope, labeling, packaging, and customization boundaries before quotation.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Product comparison */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Product Comparison"
          title="Choose the right OEM/ODM project path"
          text="Compare the three main project paths before submitting requirements, especially if you are deciding between mature private-label platforms and wearable monitoring integration."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:hidden">
          {comparisonRows.map((row) => (
            <article key={row.category} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{row.category}</h3>
                <span className="rounded-xl border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                  {row.stage}
                </span>
              </div>
              <div className="mt-5 grid gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Best fit</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{row.fit}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Customization discussion</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{row.customization}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="bg-[#08A8AE] text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  <th className="p-4">Product path</th>
                  <th className="p-4">Best fit</th>
                  <th className="p-4">Customization discussion</th>
                  <th className="p-4">Stage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {comparisonRows.map((row) => (
                  <tr key={row.category}>
                    <td className="p-4 font-semibold text-slate-950">{row.category}</td>
                    <td className="p-4 leading-6">{row.fit}</td>
                    <td className="p-4 leading-6">{row.customization}</td>
                    <td className="p-4 leading-6 text-cyan-800">{row.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OEM/ODM support */}
      <section id="oem-odm-support" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge tone="cyan">OEM/ODM Support</Badge>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                From idea to production
              </h2>
            </div>
            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-xl bg-[#08A8AE] px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              Explore OEM/ODM Support
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {oemSteps.map((step, index) => (
              <article key={step.title} className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-4 md:p-6">
                {index < oemSteps.length - 1 ? (
                  <div className="absolute left-[calc(100%-0.5rem)] top-10 hidden h-px w-6 bg-cyan-300/35 lg:block" aria-hidden="true" />
                ) : null}
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#08A8AE] text-xs font-semibold text-white md:h-12 md:w-12 md:rounded-2xl md:text-sm">
                  {step.number}
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-white md:text-xl">{step.title}</h3>
                <p className="mt-2 text-xs font-semibold leading-5 text-cyan-100 md:text-sm">{step.output}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Small brand support */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div>
            <Badge tone="cyan">Small Brand Support</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Sample-first, scope-clear
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#08A8AE]"
              >
                Just Evaluating Feasibility? Start Here
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {smallBrandSupport.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                    <span className="text-sm font-semibold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing confidence */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8" aria-labelledby="sourcing-confidence-title">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
          <div>
            <Badge tone="slate">Sourcing Confidence</Badge>
            <h2 id="sourcing-confidence-title" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Buyer checks
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickAnswers.map((item, index) => (
              <article
                key={item.question}
                className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${index === 4 ? "sm:col-span-2" : ""}`}
              >
                <p className="text-lg font-semibold tracking-tight text-slate-950">{item.question}</p>
                <p className="mt-4 inline-flex rounded-xl border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-cyan-700">
                  {item.proof}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Short answers for early OEM/ODM evaluation"
          text="These answers are designed for buyers comparing supplier fit before a full quotation request."
          align="center"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {homepageFaqs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-24">
        <div className="rounded-2xl bg-[#075e63] p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Ready to discuss a medical device OEM/ODM project?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cyan-50">
            Tell us your target market, product category, customization needs and expected timeline. YimiLife will help review the most suitable product path.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#075e63] transition hover:bg-cyan-50"
            >
              Submit Project Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request Product Specs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
