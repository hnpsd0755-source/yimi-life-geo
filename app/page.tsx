import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "cyan" | "amber" | "emerald" | "slate";

export const metadata: Metadata = {
  title: "Medical Device OEM Manufacturer | YimiLife",
  description:
    "YimiLife provides pulse oximeters, blood pressure monitors and wearable SpO₂ monitoring devices for OEM, private-label and medical device projects.",
  alternates: {
    canonical: "https://www.yimilife.com/",
  },
  openGraph: {
    title: "Medical Device OEM Manufacturer | YimiLife",
    description:
      "YimiLife provides pulse oximeters, blood pressure monitors and wearable SpO₂ monitoring devices for OEM, private-label and medical device projects.",
    url: "https://www.yimilife.com/",
    siteName: "YimiLife",
    type: "website",
  },
};

const productFamilies = [
  {
    title: "Pulse Oximeters",
    status: "Mature Core Product Line",
    description:
      "Fingertip and handheld pulse oximeters with model-level specifications and OEM options.",
    bullets: ["Fingertip Models", "Handheld Models", "Private Label Options"],
    image: "/homepage/P2/selected/product-pulse-oximeter.jpg",
    imageAlt: "YimiLife fingertip pulse oximeter product for OEM and private-label projects",
    imagePosition: "center center",
    href: "/products/pulse-oximeter",
    cta: "View Pulse Oximeters",
    tone: "cyan" as Tone,
  },
  {
    title: "Blood Pressure Monitors",
    status: "Mature / Customizable Product Line",
    description:
      "Upper-arm blood pressure monitors with model selection, cuff configuration and OEM options.",
    bullets: ["Upper-arm Models", "Cuff Configuration", "OEM Options"],
    image: "/homepage/P2/selected/product-blood-pressure-monitor.jpg",
    imageAlt: "YimiLife upper-arm blood pressure monitor product platform",
    imagePosition: "center center",
    href: "/products/blood-pressure-monitor",
    cta: "View BP Monitors",
    tone: "amber" as Tone,
  },
  {
    title: "YW01 Wearable SpO₂ Monitor",
    status: "Project Review First",
    description:
      "A wrist-worn SpO₂ monitoring device with an external fingertip sensor, Bluetooth connectivity and OEM/ODM project evaluation.",
    bullets: ["External SpO₂ Sensor", "Bluetooth Connectivity", "OEM/ODM Review"],
    image: "/homepage/P2/selected/product-wearable-monitoring.jpg",
    imageAlt: "YimiLife wearable SpO2 monitoring device for OEM and ODM evaluation",
    imagePosition: "center center",
    href: "/products/wearable-monitoring",
    cta: "View YW01 Wearable",
    tone: "emerald" as Tone,
  },
];

const manufacturingCards = [
  {
    title: "ISO 13485 Quality System",
    text: "YimiLife operates under an ISO 13485 quality management system for medical device project execution.",
  },
  {
    title: "Shenzhen Manufacturing Operations",
    text: "Manufacturing planning is reviewed according to product category, project scope and order requirements.",
  },
  {
    title: "Product Verification Process",
    text: "Production verification requirements are reviewed by selected product and defined production procedure.",
  },
  {
    title: "Certified Model Experience",
    text: "Document availability depends on selected model, configuration and target market.",
  },
];

const oemCards = [
  {
    title: "Private Label Customization",
    text: "Logo, packaging, labeling and IFU customization based on selected models.",
  },
  {
    title: "Product Configuration",
    text: "Display, accessories, connectivity and product options reviewed by model.",
  },
  {
    title: "ODM Feasibility Discussion",
    text: "Engineering review for hardware, firmware and integration projects.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/#webpage",
      url: "https://www.yimilife.com/",
      name: "Medical Device OEM Manufacturer | YimiLife",
      description:
        "YimiLife homepage for medical device OEM manufacturing and product portfolio review across pulse oximeters, blood pressure monitors and wearable SpO₂ monitoring devices.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      name: "YimiLife product portfolio",
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
        d="M20 6 9 17l-5-5"
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
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    slate: "border-slate-200 bg-slate-100 text-slate-700",
  }[tone];

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${toneClass}`}>
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

function ProductCard({ item }: { item: (typeof productFamilies)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-200 bg-slate-100">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.04]"
          style={{ objectPosition: item.imagePosition }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge tone={item.tone}>{item.status}</Badge>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
        <div className="mt-5 grid gap-2">
          {item.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-cyan-700" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
        <Link
          href={item.href}
          className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-slate-950 transition hover:text-cyan-800"
        >
          {item.cta}
          <ArrowIcon className="ml-2 h-4 w-4" />
        </Link>
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
          alt="YimiLife product portfolio for medical device OEM and ODM projects"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-slate-950/28" />
        <div className="site-container relative flex min-h-[calc(100dvh-72px)] items-center py-20 text-white">
          <div className="max-w-4xl">
            <Badge>Medical Device OEM/ODM Manufacturer</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Medical Device OEM/ODM Manufacturer
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-xl">
              YimiLife supports overseas healthcare brands with pulse oximeters,
              blood pressure monitors and wearable SpO₂ monitoring devices through
              product selection, customization and manufacturing support.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#products"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-50"
              >
                Explore Products
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18"
              >
                Discuss Your Project
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <div id="products" className="scroll-mt-24" />
      <section id="product-families" className="site-container py-16 lg:py-20">
        <SectionHeading
          eyebrow="Product Portfolio"
          title="Medical Device Product Portfolio"
          text="Review the product categories YimiLife can provide for OEM, private-label and medical device projects."
        />

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {productFamilies.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* Manufacturing & Quality */}
      <section className="bg-white">
        <div className="site-container py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Manufacturing & Quality"
                title="Manufacturing & Quality Support"
                text="YimiLife supports medical device projects with quality-system, manufacturing and document-scope review."
              />
              <Link
                href="/manufacturing-quality"
                className="mt-8 inline-flex items-center rounded-xl bg-[#08A8AE] px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Review Manufacturing & Quality
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {manufacturingCards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OEM/ODM */}
      <section className="site-container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="OEM/ODM"
              title="From Product Selection to OEM/ODM Project"
              text="After a product direction is selected, YimiLife can review customization, documentation, engineering and production-planning needs by project."
            />
            <Link
              href="/oem-odm"
              className="mt-8 inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
            >
              View OEM/ODM Cooperation
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {oemCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="site-container pb-16 pt-4 lg:pb-24">
        <div className="rounded-2xl bg-[#075e63] p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Ready to discuss a medical device OEM/ODM project?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-cyan-50">
            Share your product category, target market, customization needs and
            expected timeline so YimiLife can review the right product path.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#075e63] transition hover:bg-cyan-50"
            >
              Start a Project Discussion
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#products"
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
