import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Accent = "brand" | "slate";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Manufacturer | YimiLife",
  description:
    "YimiLife is a B2B medical device OEM/ODM manufacturer for pulse oximeters, blood pressure monitors and wearable SpO2 monitoring devices.",
  alternates: {
    canonical: "https://www.yimilife.com/",
  },
  openGraph: {
    title: "Medical Device OEM/ODM Manufacturer | YimiLife",
    description:
      "YimiLife supports overseas healthcare brands with certified medical device models, OEM/ODM customization and manufacturing quality control.",
    url: "https://www.yimilife.com/",
    siteName: "YimiLife",
    type: "website",
  },
};

const proofMetrics = [
  {
    value: "ISO 13485",
    label: "quality-system manufacturing workflow",
  },
  {
    value: "300,000",
    label: "units monthly capacity",
  },
  {
    value: "25+",
    label: "FDA / MDR / NMPA certified models",
  },
  {
    value: "Fluke",
    label: "testing equipment for calibration and verification",
  },
];

const productFamilies = [
  {
    title: "Pulse Oximeter",
    eyebrow: "Core product line",
    description:
      "Fingertip and handheld pulse oximeter formats for OEM/ODM projects, product configuration and private-label supply.",
    image: "/homepage/P2/selected/product-pulse-oximeter.jpg",
    imageAlt: "YimiLife pulse oximeter product family for OEM and ODM projects",
    href: "/products/pulse-oximeter",
    cta: "Explore pulse oximeters",
    details: ["Fingertip models", "Handheld models", "Appearance and configuration options"],
  },
  {
    title: "Blood Pressure Monitor",
    eyebrow: "Mature platform",
    description:
      "Upper-arm blood pressure monitor platforms with model selection, cuff configuration and OEM/private-label support.",
    image: "/homepage/P2/selected/product-blood-pressure-monitor.jpg",
    imageAlt: "YimiLife upper-arm blood pressure monitor platform",
    href: "/products/blood-pressure-monitor",
    cta: "Explore BP monitors",
    details: ["Upper-arm models", "Cuff and accessory review", "Packaging and label customization"],
  },
  {
    title: "Wearable Monitoring Devices",
    eyebrow: "Project review first",
    description:
      "Wearable SpO2 monitoring devices reviewed by project scope, target market and required configuration.",
    image: "/homepage/P2/selected/product-wearable-monitoring.jpg",
    imageAlt: "YimiLife wearable SpO2 monitoring device for OEM and ODM evaluation",
    href: "/products/wearable-monitoring",
    cta: "Review wearable monitoring",
    details: ["External SpO2 sensor", "Bluetooth connectivity", "OEM/ODM feasibility review"],
  },
];

const pulseMatrixPoints = [
  {
    title: "0.1% PI low perfusion",
    text: "Supports pulse oximeter projects where low-perfusion signal handling is a key evaluation point.",
  },
  {
    title: "Motion artifact rejection",
    text: "Designed to improve signal stability during common movement conditions.",
  },
  {
    title: "Skin tone fairness",
    text: "Used as a technology discussion point for evaluating signal behavior across diverse skin tones.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.yimilife.com/#organization",
      name: "YimiLife",
      url: "https://www.yimilife.com/",
      description:
        "YimiLife is a B2B medical device OEM/ODM manufacturer for pulse oximeters, blood pressure monitors and wearable SpO2 monitoring devices.",
      knowsAbout: [
        "Pulse Oximeter",
        "Blood Pressure Monitor",
        "Wearable Monitoring Devices",
        "Medical Device OEM/ODM",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/#webpage",
      url: "https://www.yimilife.com/",
      name: "Medical Device OEM/ODM Manufacturer | YimiLife",
      description:
        "YimiLife homepage for medical device OEM/ODM manufacturing, product portfolio review, quality support and PulseMatrix technology.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      name: "YimiLife medical device product portfolio",
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
  ],
};

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function Badge({ children, accent = "brand" }: { children: ReactNode; accent?: Accent }) {
  const classes =
    accent === "brand"
      ? "border-brand-200 bg-brand-50 text-brand-700"
      : "border-slate-200 bg-white text-slate-600";

  return (
    <span className={`inline-flex rounded-md border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${classes}`}>
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <Badge accent="slate">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-sm font-semibold text-brand-700 transition hover:text-brand-800"
    >
      {children}
      <ArrowIcon className="ml-2 h-4 w-4" />
    </Link>
  );
}

function ProductCard({ item }: { item: (typeof productFamilies)[number] }) {
  return (
    <article className="group grid overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/70">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
          {item.eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-950">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
        <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-700">
          {item.details.map((detail) => (
            <li key={detail} className="flex gap-2">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-700" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <TextLink href={item.href}>{item.cta}</TextLink>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="bg-canvas text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-slate-950">
        <Image
          src="/homepage/P2/selected/home-hero-product-family.jpg"
          alt="YimiLife product family including pulse oximeter, blood pressure monitor and wearable monitoring device"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/78 to-slate-950/12" />
        <div className="site-container relative flex min-h-[76dvh] items-center py-16 text-white lg:min-h-[calc(100dvh-72px)]">
          <div className="max-w-4xl">
            <Badge>Medical Device OEM/ODM Manufacturer</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              YimiLife medical device OEM/ODM manufacturing
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 md:text-xl">
              Pulse oximeters, blood pressure monitors and wearable SpO2 monitoring
              devices for overseas healthcare brands, distributors and OEM/ODM
              medical device projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-50 active:translate-y-px"
              >
                Explore products
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 active:translate-y-px"
              >
                Discuss OEM/ODM project
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge accent="slate">Count on YimiLife</Badge>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
              You serve your customers. Your manufacturing partner should support the rest.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Your team should spend more time building customer trust, channel service and
              product adoption, and less time chasing product quality, delivery or
              configuration issues. YimiLife supports B2B medical device projects with
              controlled production, model-level review and practical OEM/ODM execution.
            </p>

            <div className="mt-8 rounded-lg bg-brand-600 p-6 text-white md:p-8">
              <h3 className="text-2xl font-semibold leading-tight">
                A commitment to better product experience
              </h3>
              <p className="mt-4 text-base leading-8 text-brand-50">
                We keep improving product platforms, usability details and manufacturing
                discipline while following quality-system requirements. For YimiLife,
                product quality is not a slogan; it is the operating baseline we protect
                in development, sampling and production.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_0.7fr] md:grid-rows-[0.8fr_1.1fr]">
            <div className="relative min-h-[220px] overflow-hidden rounded-lg bg-slate-100 shadow-sm ring-1 ring-slate-200 md:min-h-[260px]">
              <Image
                src="/homepage/P2/selected/home-hero-product-family.jpg"
                alt="YimiLife medical device product family"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[180px] overflow-hidden rounded-lg bg-slate-100 shadow-sm ring-1 ring-slate-200 md:min-h-0">
              <Image
                src="/homepage/P2/selected/product-pulse-oximeter.jpg"
                alt="YimiLife pulse oximeter product platform"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 22vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-lg bg-slate-100 shadow-sm ring-1 ring-slate-200 md:col-span-2">
              <Image
                src="/homepage/P2/selected/manufacturing-production-line.jpg"
                alt="YimiLife production line and manufacturing process"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-slate-200 md:grid-cols-4">
          {proofMetrics.map((item) => (
            <div key={item.label} className="bg-white p-6">
              <p className="font-mono text-3xl font-semibold text-slate-950 md:text-4xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-white py-16 lg:py-20">
        <div className="site-container">
          <SectionHeading
            eyebrow="Featured products"
            title="Medical device product portfolio"
            text="Start with a clear product family, then review model options, customization scope and production requirements by project."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {productFamilies.map((item) => (
              <ProductCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white lg:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Badge>PulseMatrix™ Technology</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Signal platform behind YimiLife pulse oximeter projects
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              PulseMatrix™ gives YimiLife a focused technology story for pulse
              oximeter OEM/ODM discussions without turning the homepage into a
              technical specification sheet.
            </p>
            <div className="mt-8">
              <Link
                href="/technology"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-50 active:translate-y-px"
              >
                View technology
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {pulseMatrixPoints.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-white/12 bg-white/[0.06] p-6"
              >
                <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container pb-16 lg:pb-24">
        <div className="overflow-hidden rounded-lg bg-brand-700 text-white">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                Ready to discuss a medical device OEM/ODM project?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-brand-50">
                Share your product category, target market, customization scope
                and expected timeline so YimiLife can review the right path.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50 active:translate-y-px"
              >
                Start project discussion
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-lg border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 active:translate-y-px"
              >
                Review products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
