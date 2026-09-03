import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device Products | YimiLife",
  description:
    "Browse YimiLife medical device product families for B2B OEM/ODM projects, including fingertip pulse oximeters, handheld pulse oximeters, blood pressure monitors and wearable monitoring devices.",
  alternates: {
    canonical: "https://www.yimilife.com/products",
  },
  openGraph: {
    title: "Medical Device Products | YimiLife",
    description:
      "YimiLife product catalog for OEM/ODM medical device buyers reviewing product family, format and project direction.",
    url: "https://www.yimilife.com/products",
    siteName: "YimiLife",
    type: "website",
  },
};

const catalogProducts = [
  {
    name: "Fingertip Pulse Oximeter",
    code: "YM101-YM603 public model series",
    family: "Pulse Oximeter",
    format: "Fingertip",
    direction: "Public Models / OEM Configuration",
    image: "/homepage/P2/selected/product-pulse-oximeter.jpg",
    imageAlt: "YimiLife fingertip pulse oximeter product models",
    href: "/products/pulse-oximeter#fingertip-portfolio",
  },
  {
    name: "Handheld Pulse Oximeter",
    code: "YH01 / YH02",
    family: "Pulse Oximeter",
    format: "Handheld",
    direction: "Project Review",
    image: "/homepage/P2/products/handheld Oximeter/handheld oximeter02.jpg",
    imageAlt: "YimiLife handheld pulse oximeter product format",
    href: "/products/pulse-oximeter#handheld-section",
  },
  {
    name: "Blood Pressure Monitor",
    code: "Upper-arm product platform",
    family: "Blood Pressure Monitor",
    format: "Upper-arm",
    direction: "OEM / Private Label",
    image: "/homepage/P2/selected/product-blood-pressure-monitor.jpg",
    imageAlt: "YimiLife upper-arm blood pressure monitor product platform",
    href: "/products/blood-pressure-monitor",
  },
  {
    name: "Wearable Monitoring Devices",
    code: "Wearable SpO2 project direction",
    family: "Wearable Monitoring",
    format: "Wearable",
    direction: "Project Review",
    image: "/homepage/P2/selected/product-wearable-monitoring.jpg",
    imageAlt: "YimiLife wearable monitoring device product direction",
    href: "/products/wearable-monitoring",
  },
];

const trustNotes = [
  "Product pages are organized by product family and project direction so buyers can move from catalog review to model-level discussion.",
  "Certified model experience, document scope and target-market responsibilities should be confirmed by selected model and project agreement.",
  "Production calibration and verification can use Fluke testing equipment under defined procedures where applicable.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.yimilife.com/products#webpage",
      url: "https://www.yimilife.com/products",
      name: "Medical Device Products | YimiLife",
      description:
        "YimiLife product catalog for B2B medical device OEM/ODM buyers.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
    },
    {
      "@type": "ItemList",
      name: "YimiLife medical device product catalog",
      itemListElement: catalogProducts.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: item.name,
          description: `${item.family} product format for ${item.direction} projects.`,
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

function ProductTile({ item }: { item: (typeof catalogProducts)[number] }) {
  return (
    <Link
      href={item.href}
      className="group block overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/70"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="bg-slate-50 p-5 text-center">
        <h2 className="text-lg font-semibold leading-tight text-slate-950">
          {item.name}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">{item.code}</p>
        <div className="mt-4 grid gap-1 text-xs leading-5 text-slate-500">
          <p>{item.format}</p>
          <p>{item.direction}</p>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <main className="bg-canvas text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-brand-700 text-white">
        <div className="site-container py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              YimiLife product catalog
            </h1>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-brand-100">
              Pulse oximeters · blood pressure monitors · wearable monitoring devices
            </p>
          </div>
        </div>
      </section>

      <section id="product-grid" className="site-container scroll-mt-24 py-12 lg:py-16">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {catalogProducts.map((item) => (
            <ProductTile key={item.name} item={item} />
          ))}
        </div>
      </section>

      <section className="site-container pb-16 lg:pb-24">
        <div className="bg-slate-100 px-6 py-12 md:px-12 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-semibold leading-tight text-slate-950 md:text-3xl">
              Product review for OEM/ODM buyers
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-8 text-slate-600">
              {trustNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center text-sm font-semibold text-brand-700 transition hover:text-brand-800"
            >
              Contact YimiLife
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
