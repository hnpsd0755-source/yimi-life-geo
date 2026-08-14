import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "cyan" | "amber" | "slate" | "emerald";
type FitStatusTone = "ready" | "review";

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
    value: "300,000",
    label: "Units/month",
    href: "/about#manufacturing",
  },
  {
    value: "25+",
    label: "FDA / MDR / NMPA certified models",
    href: "/about#quality-compliance",
  },
  {
    value: "Fluke-based",
    label: "Calibration and test workflow",
    href: "/about#manufacturing",
  },
];

const marketProofCards = [
  {
    value: "50+",
    label: "Brand Partners Served",
  },
  {
    value: "3,000,000+",
    label: "Devices Delivered",
  },
  {
    value: "15+",
    label: "Markets Reached",
  },
];

const customerLogoCards = [
  "/homepage/P2/customer-logos/selected/customer-logo-row-02.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-04.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-06.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-07.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-07-2.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-09.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-10.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-11.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-14.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-15.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-16.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-19.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-20.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-21.png",
  "/homepage/P2/customer-logos/selected/customer-logo-row-22.png",
];

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
    image: "/homepage/P2/selected/product-pulse-oximeter.jpg",
    imageAlt: "YimiLife fingertip pulse oximeter product for OEM and private-label projects",
    imagePosition: "center center",
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
    image: "/homepage/P2/selected/product-blood-pressure-monitor.jpg",
    imageAlt: "YimiLife upper-arm blood pressure monitor product platform",
    imagePosition: "center center",
    href: "/products/blood-pressure-monitor",
    cta: "View BP Monitor Options",
    accent: "cyan" as Tone,
  },
  {
    title: "Wearable Monitoring Devices",
    status: "New Product Platforms",
    description:
      "Wearable SpO2, temperature monitoring and Bluetooth-connected health data device directions for OEM/ODM evaluation, with model readiness, software integration and target-market requirements confirmed by project.",
    bullets: [
      "Project evaluation",
      "Model readiness",
      "Target-market review",
      "Software integration",
    ],
    image: "/homepage/P2/selected/product-wearable-monitoring.jpg",
    imageAlt: "YimiLife wearable SpO2 monitoring device for OEM and ODM evaluation",
    imagePosition: "center center",
    href: "/products/wearable-monitoring",
    cta: "Explore Wearable Monitoring",
    accent: "cyan" as Tone,
  },
];

const productFitRows = [
  {
    productLine: "Pulse Oximeters",
    status: "Ready to customize",
    statusTone: "ready" as FitStatusTone,
    conclusion: "Best starting point for private-label pulse oximeter programs.",
    fitTags: ["Fingertip", "Pediatric", "Bluetooth", "Handheld"],
    customizationTags: ["Logo", "Packaging", "Color", "UI settings"],
    href: "/products/pulse-oximeter",
  },
  {
    productLine: "Blood Pressure Monitors",
    status: "Ready to customize",
    statusTone: "ready" as FitStatusTone,
    conclusion: "Use this path for upper-arm BP monitor brand and distributor projects.",
    fitTags: ["Upper-arm", "Home healthcare", "Bluetooth option"],
    customizationTags: ["Cuff", "Display", "Packaging", "Platform options"],
    href: "/products/blood-pressure-monitor",
  },
  {
    productLine: "Wearable Monitoring Devices",
    status: "Feasibility review first",
    statusTone: "review" as FitStatusTone,
    conclusion: "Use this path when model readiness and software integration need project review.",
    fitTags: ["Newer concepts", "Model readiness", "Software integration"],
    customizationTags: ["Power design", "Bluetooth", "Verification planning"],
    href: "/products/wearable-monitoring",
  },
];

const oemSteps = [
  {
    number: "01",
    title: "Project Brief",
    icon: "chat",
    summary: "Share market, quantity, model direction and customization needs.",
    outcome: "Project requirements",
  },
  {
    number: "02",
    title: "Scope Check",
    icon: "search",
    summary: "Review available platform options and separate engineering items.",
    outcome: "Defined scope",
  },
  {
    number: "03",
    title: "Sample Review",
    icon: "sample",
    summary: "Check appearance, branding, packaging, label, IFU and functions.",
    outcome: "Sample review plan",
  },
  {
    number: "04",
    title: "Production Plan",
    icon: "ship",
    summary: "Align specifications, inspection items, records, traceability and shipment.",
    outcome: "Production and shipment plan",
  },
];

const confidenceChecks = [
  {
    question: "Factory or trading layer?",
    answer: "Shenzhen production facility, direct project coordination.",
    detail:
      "YimiLife operates a 3,000㎡ medical device production facility in Shenzhen focused on pulse oximeters and blood pressure monitors. Confirm who handles sample review, production planning and project documentation for the selected model.",
    cta: "View manufacturing details",
    href: "/about#manufacturing",
  },
  {
    question: "Does certification match my market?",
    answer: "Confirm model, market and document scope before artwork or quotation.",
    detail:
      "YimiLife works under an ISO 13485 quality system, with 25+ FDA / MDR / NMPA certified models. Certification discussions should be checked against the selected model, configuration and target market.",
    cta: "Check quality scope",
    href: "/about#quality-compliance",
  },
];

const homepageFaqs = [
  {
    question: "Can newer wearable monitoring concepts move directly to production?",
    answer:
      "New wearable monitoring concepts need a project-specific feasibility review before production planning. Model readiness, software integration, documentation scope and target-market requirements should be confirmed before quotation.",
  },
];

const sourcingQuestions = [
  ...confidenceChecks,
  {
    question: homepageFaqs[0].question,
    answer: "Feasibility review first, then quotation and production planning.",
    detail: homepageFaqs[0].answer,
    cta: "Explore wearable path",
    href: "/products/wearable-monitoring",
  },
];

const pulseMatrixTags = [
  "PI 0.1% Low-Perfusion",
  "Motion Conditions",
  "Skin Pigmentation",
];

const manufacturingTags = [
  "Sample review",
  "Production verification",
  "Documentation scope",
  "Labeling / packaging",
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

function QuestionIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9.2 9a3 3 0 1 1 4.7 2.5c-1.2.8-1.9 1.4-1.9 2.7M12 18h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProcessIcon({ type, className = "h-5 w-5" }: { type: string; className?: string }) {
  if (type === "search") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M10.8 18.1a7.3 7.3 0 1 1 0-14.6 7.3 7.3 0 0 1 0 14.6ZM16 16l4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "sample") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3.8h10M8 3.8v6.4l-3.6 7.1A2 2 0 0 0 6.2 20h11.6a2 2 0 0 0 1.8-2.7L16 10.2V3.8M7 14h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "ship") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 7.5h10v9H4zM14 10h3.8l2.2 3v3.5h-6M7 19.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM17 19.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 7.5h14v8H9l-4 3v-11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Badge({ children, tone = "cyan" }: { children: ReactNode; tone?: Tone }) {
  const toneClass = {
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-800",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    slate: "border-slate-200 bg-slate-100 text-slate-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
  }[tone];

  return (
    <span className={`inline-flex max-w-full rounded-xl border px-3 py-1 text-left text-xs font-semibold uppercase leading-5 tracking-[0.12em] ${toneClass}`}>
      {children}
    </span>
  );
}

function StatusPill({ children, tone }: { children: ReactNode; tone: FitStatusTone }) {
  const toneClass =
    tone === "ready"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-amber-200 bg-amber-50 text-amber-900";
  const dotClass = tone === "ready" ? "bg-emerald-500" : "bg-amber-500";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${toneClass}`}>
      <span className={`h-2 w-2 rounded-full ${dotClass}`} aria-hidden="true" />
      {children}
    </span>
  );
}

function TagList({
  items,
  tone = "slate",
}: {
  items: string[];
  tone?: "slate" | "cyan";
}) {
  const toneClass =
    tone === "cyan"
      ? "border-cyan-200 bg-cyan-50 text-cyan-800"
      : "border-slate-200 bg-slate-50 text-slate-700";

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={`rounded-full border px-3 py-1 text-xs font-semibold ${toneClass}`}>
          {item}
        </span>
      ))}
    </div>
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

function ProductPlatformLargeCard({
  item,
}: {
  item: (typeof productFamilies)[number];
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 lg:col-span-2 lg:row-span-2">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="origin-left scale-[1.7] object-cover transition duration-300 group-hover:scale-[1.76]"
          style={{ objectPosition: item.imagePosition }}
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-950 backdrop-blur">
          {item.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{item.description}</p>
        <div className="mt-auto pt-6">
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

function ProductPlatformCompactCard({
  item,
}: {
  item: (typeof productFamilies)[number];
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <ProductImage src={item.image} alt={item.imageAlt} position={item.imagePosition} />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-cyan-700">{item.status}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
        <div className="mt-auto pt-5">
          <Link
            href={item.href}
            className="inline-flex items-center text-sm font-semibold text-slate-950 transition hover:text-cyan-800"
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
          src="/homepage/P2/selected/home-hero-product-family.jpg"
          alt="YimiLife monitoring device product family including pulse oximeters, blood pressure monitor and wearable SpO2 device"
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
                Start a Feasibility Chat
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
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {marketProofCards.map((item) => (
              <div key={item.label} className="rounded-xl bg-slate-950 p-5 text-white">
                <p className="text-3xl font-semibold tracking-tight md:text-4xl">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-cyan-100">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 border-b border-slate-200 pb-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <p className="text-sm font-semibold text-slate-950">Selected customer logos</p>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                Displayed with authorization; private-label packaging artwork remains confidential.
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {customerLogoCards.map((src) => (
                <div key={src} className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3">
                  <Image
                    src={src}
                    alt="Authorized customer logo"
                    width={180}
                    height={64}
                    className="max-h-10 w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {proofCards.map((item) => (
              <Link
                key={item.value}
                href={item.href}
                className="group min-w-0 rounded-xl p-4 transition hover:bg-cyan-50"
              >
                <div className="flex items-start gap-3">
                  <CheckIcon className="mt-2 h-4 w-4 shrink-0 text-cyan-700" />
                  <div className="min-w-0">
                    <p className="break-words text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{item.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-500">{item.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product families */}
      <section id="product-families" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Product Families"
            title="Browse product platform pages"
            text="Product pages carry model-level options after the homepage product-path scan."
          />
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          <ProductPlatformLargeCard item={productFamilies[0]} />
          {productFamilies.slice(1).map((item) => (
            <ProductPlatformCompactCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* Visual capability modules */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src="/homepage/P2/selected/pulsematrix-technology.jpg"
                alt="PulseMatrix signal platform visualization for low perfusion, motion conditions and skin pigmentation discussion"
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
                Patients do not always stay still, and not every reading happens under ideal conditions. PulseMatrix™ supports OEM/ODM product evaluation for low perfusion, movement and skin pigmentation factors under defined verification conditions.
              </p>
              <div className="mt-5">
                <TagList items={pulseMatrixTags} tone="cyan" />
              </div>
              <Link
                href="/technology"
                className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-100 transition hover:text-white"
              >
                View technology details
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src="/homepage/P2/selected/manufacturing-production-line.jpg"
                alt="YimiLife medical device production line for pulse oximeter manufacturing and project review"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <Badge tone="cyan">Manufacturing Workflow</Badge>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                Manufacturing planning from sample review to production
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Align the project workflow before quotation, artwork confirmation or production planning.
              </p>
              <div className="mt-5">
                <TagList items={manufacturingTags} />
              </div>
              <Link
                href="/about#manufacturing"
                className="mt-6 inline-flex items-center text-sm font-semibold text-slate-950 transition hover:text-cyan-800"
              >
                Review manufacturing workflow
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Product fit */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Find Your Product Fit"
          title="Which product line fits your brand?"
          text="Each path gives a quick product-fit conclusion before model-level configuration review."
          align="center"
        />

        <div className="mt-10 flex flex-col gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            {productFitRows.slice(0, 2).map((row) => (
              <article key={row.productLine} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 md:p-6">
                <div className="flex flex-col gap-3">
                  <StatusPill tone={row.statusTone}>{row.status}</StatusPill>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{row.productLine}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">{row.conclusion}</p>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Fit signals</p>
                    <TagList items={row.fitTags} />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Customization topics</p>
                    <TagList items={row.customizationTags} tone="cyan" />
                  </div>
                </div>
                <Link
                  href={row.href}
                  className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-slate-950 transition hover:text-cyan-800"
                >
                  View Product Line
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          {productFitRows.slice(2).map((row) => (
            <article key={row.productLine} className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5 shadow-sm md:p-6">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <StatusPill tone={row.statusTone}>{row.status}</StatusPill>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{row.productLine}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">{row.conclusion}</p>
                </div>
                <div className="space-y-4">
                  <TagList items={row.fitTags} />
                  <TagList items={row.customizationTags} tone="cyan" />
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#08A8AE]"
                >
                  Start a Feasibility Chat
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OEM/ODM project process */}
      <section id="oem-odm-support" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Badge tone="cyan">Your Path From Idea to Production</Badge>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Found your product fit? Here is what happens next.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                Start with feasibility, then confirm scope, samples and production planning.
              </p>
            </div>
            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-xl bg-[#08A8AE] px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              View Full OEM/ODM Process
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-white/[0.06] p-5 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">Step 0</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">Talk first, commit later</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Discuss product fit, label, IFU and customization needs before a formal quotation request or purchase order.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50 md:mt-0"
            >
              Start a Feasibility Chat
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-cyan-300/25 lg:block" aria-hidden="true" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {oemSteps.map((step) => (
                <article key={step.title} className="relative z-10 flex min-w-0 flex-col rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-lg shadow-slate-950/20">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#08A8AE] text-sm font-semibold text-white ring-8 ring-slate-950">
                      {step.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/10">
                      <ProcessIcon type={step.icon} />
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-cyan-100">Result: {step.outcome}</p>
                  <details className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-slate-200">
                      What to confirm
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{step.summary}</p>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing confidence + FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <SectionHeading
          eyebrow="Sourcing Confidence"
          title="Procurement checks before you commit"
          text="Confirm supplier layer, document scope and wearable readiness before sample or quotation work."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[2fr_1fr]">
          <article className="flex flex-col self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">Buyer check 01</p>
            <div className="mt-6 flex items-start gap-3">
              <QuestionIcon className="mt-1 h-6 w-6 shrink-0 text-cyan-700" />
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                {sourcingQuestions[0].question}
              </h3>
            </div>
            <div className="mt-6 flex items-start gap-3 border-l-2 border-cyan-500 pl-4">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
              <p className="text-base font-semibold leading-7 text-slate-700">{sourcingQuestions[0].answer}</p>
            </div>
            <details className="mt-8 border-t border-slate-200 pt-6">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950">Details</summary>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{sourcingQuestions[0].detail}</p>
              <Link
                href={sourcingQuestions[0].href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-slate-950 transition hover:text-cyan-800"
              >
                {sourcingQuestions[0].cta}
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </details>
          </article>

          <div className="grid gap-5">
            {sourcingQuestions.slice(1).map((check, index) => (
              <article key={check.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                  Buyer check {String(index + 2).padStart(2, "0")}
                </p>
                <div className="mt-4 flex items-start gap-3">
                  <QuestionIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">{check.question}</h3>
                </div>
                <div className="mt-4 flex items-start gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-cyan-700" />
                  <p className="text-sm font-semibold leading-6 text-slate-700">{check.answer}</p>
                </div>
                <details className="mt-5 border-t border-slate-200 pt-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-950">Details</summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{check.detail}</p>
                  <Link
                    href={check.href}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-slate-950 transition hover:text-cyan-800"
                  >
                    {check.cta}
                    <ArrowIcon className="ml-2 h-4 w-4" />
                  </Link>
                </details>
              </article>
            ))}
          </div>
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
              Start a Feasibility Chat
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
