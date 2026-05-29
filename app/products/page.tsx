import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Healthcare Monitoring Product Lines | YimiLife",
  description:
    "Explore YimiLife product families for pulse oximeters, blood pressure monitors and wearable monitoring devices under development, with clear product categories and key product directions.",
  alternates: {
    canonical: "https://www.yimilife.com/products",
  },
  openGraph: {
    title: "Home Healthcare Monitoring Product Lines | YimiLife",
    description:
      "YimiLife product line overview for pulse oximeters, blood pressure monitors and wearable monitoring devices under development.",
    url: "https://www.yimilife.com/products",
    siteName: "YimiLife",
    type: "website",
  },
};

type IconProps = {
  className?: string;
};

function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

function PressureIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21a8 8 0 100-16 8 8 0 000 16z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 13l4-4M8 17h8M12 5V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WearableIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3h8l1 5v8l-1 5H8l-1-5V8l1-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 9h6v6H9V9zM10 1h4M10 23h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductImagePlaceholder({
  title,
  subtitle,
  compact = false,
}: {
  title: string;
  subtitle: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-slate-100 ${
        compact ? "min-h-[190px]" : "min-h-[260px]"
      }`}
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/50 blur-2xl" />
      <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-blue-200/40 blur-2xl" />
      <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(8,145,178,0.10),transparent_32%),radial-gradient(circle_at_84%_18%,rgba(14,165,233,0.12),transparent_34%)]" />

      <div className="relative flex h-full min-h-[inherit] items-center justify-center p-6">
        <div className="w-full rounded-[1.35rem] border border-dashed border-cyan-300/80 bg-white/70 p-6 text-center shadow-sm backdrop-blur">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8"
              aria-hidden="true"
            >
              <path
                d="M4 7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M8 14l2.2-2.2a1 1 0 011.4 0L14 14l1.2-1.2a1 1 0 011.4 0L20 16M8.5 9.5h.01"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Product image placeholder
          </p>
          <p className="mt-2 text-lg font-semibold text-slate-950">{title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

const productFamilies = [
  {
    title: "Pulse Oximeters",
    href: "/products/pulse-oximeter",
    icon: WaveIcon,
    eyebrow: "SpO2 product family",
    imageTitle: "Pulse oximeter family image",
    imageSubtitle:
      "Reserve space for adult, pediatric, battery-powered, rechargeable, Bluetooth and voice models.",
    description:
      "Finger-tip SpO2 monitoring products covering adult and pediatric use, dry-battery and rechargeable configurations, plus Bluetooth and voice-enabled options.",
    categories: [
      "Adult",
      "Pediatric",
      "Dry battery",
      "Rechargeable",
      "Bluetooth",
      "Voice",
    ],
    linkText: "View pulse oximeter family",
  },
  {
    title: "Blood Pressure Monitors",
    href: "/products/blood-pressure-monitor",
    icon: PressureIcon,
    eyebrow: "BP monitoring product family",
    imageTitle: "Blood pressure monitor family image",
    imageSubtitle:
      "Reserve space for upper-arm BPM, Bluetooth BPM and BP-based multi-parameter home monitor.",
    description:
      "Upper-arm blood pressure monitoring products, including standard home-use models, Bluetooth-enabled models and a BP-based multi-parameter wireless home healthcare device direction.",
    categories: [
      "Upper-arm BPM",
      "Bluetooth BPM",
      "Large display",
      "Home use",
      "Multi-parameter base unit",
    ],
    linkText: "View blood pressure monitor family",
  },
  {
    title: "Wearable Monitoring",
    href: "/products/wearable-monitoring",
    icon: WearableIcon,
    eyebrow: "Under-development wearable family",
    imageTitle: "Wearable monitoring product image",
    imageSubtitle:
      "Reserve space for temperature patch, SpO2 watch, sleep eye mask and infant foot SpO2 designs.",
    description:
      "Wearable monitoring product development based on Bluetooth connectivity, low-power sensing and application-specific medical device design capability.",
    categories: [
      "Temperature patch",
      "SpO2 watch",
      "Sleep eye mask",
      "Infant foot SpO2",
    ],
    linkText: "View wearable monitoring family",
  },
];

const faqs = [
  {
    question: "What product families are shown on this page?",
    answer:
      "This page summarizes YimiLife product families, including pulse oximeters, blood pressure monitors and wearable monitoring products currently under development.",
  },
  {
    question: "What pulse oximeter categories does YimiLife provide?",
    answer:
      "The pulse oximeter family includes adult, pediatric, dry-battery, rechargeable lithium-battery, Bluetooth and voice-enabled product forms.",
  },
  {
    question: "What blood pressure monitor types are included?",
    answer:
      "The blood pressure monitor family includes standard upper-arm blood pressure monitors, Bluetooth blood pressure monitors and a BP-based multi-parameter wireless home healthcare monitor direction.",
  },
  {
    question: "Which wearable monitoring products are under development?",
    answer:
      "YimiLife’s wearable monitoring development categories include temperature patch, SpO2 watch, respiratory sleep monitoring eye mask with SpO2 nasal clip and infant foot SpO2 monitor.",
  },
  {
    question: "Where should customers go after choosing a product family?",
    answer:
      "Customers can enter the corresponding product family page to review product forms, key parameters and available configuration directions, then contact YimiLife for further discussion.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.yimilife.com/#organization",
      name: "Shenzhen YimiLife Technology Co., Ltd.",
      alternateName: "YimiLife",
      url: "https://www.yimilife.com/",
      brand: {
        "@type": "Brand",
        name: "YimiLife",
      },
      description:
        "YimiLife develops and manufactures home healthcare monitoring devices, including pulse oximeters, blood pressure monitors and wearable monitoring products under development.",
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.yimilife.com/products#webpage",
      url: "https://www.yimilife.com/products",
      name: "Home Healthcare Monitoring Product Lines",
      description:
        "Product line overview for YimiLife pulse oximeters, blood pressure monitors and wearable monitoring products under development.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.yimilife.com/products#product-families",
      name: "YimiLife Product Families",
      itemListElement: productFamilies.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `https://www.yimilife.com${item.href}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/products#faq",
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
      "@id": "https://www.yimilife.com/products#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.yimilife.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://www.yimilife.com/products",
        },
      ],
    },
  ],
};

export default function ProductsPage() {
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              Product Lines
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Home healthcare monitoring product lines
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Explore YimiLife product families across pulse oximeters, blood
              pressure monitors and wearable monitoring products under
              development.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              This page is designed as a product navigation hub. Choose a
              product family to review product forms, key categories and the
              next-level product information.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#product-families"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Browse Product Families
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact YimiLife
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <ProductImagePlaceholder
              title="Hero product family image"
              subtitle="Reserve space for a combined product image showing pulse oximeter, blood pressure monitor and wearable monitoring concepts."
            />
          </div>
        </div>
      </section>

      <section
        id="product-families"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Product families
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Three product directions for home healthcare monitoring
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            This overview page keeps the structure simple: three product family
            entrances with reserved visual space, representative categories and
            direct links to the next-level product pages.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {productFamilies.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <ProductImagePlaceholder
                  title={item.imageTitle}
                  subtitle={item.imageSubtitle}
                  compact
                />

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-5 inline-flex w-fit rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                    <Icon />
                  </div>

                  <p className="text-sm font-medium text-cyan-700">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-7 inline-flex items-center text-sm font-semibold text-cyan-700">
                    {item.linkText}
                    <ArrowIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Frequently asked questions about product lines
            </h2>
          </div>

          <div className="grid gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6"
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
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Need product specifications or development discussion?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            After selecting a product family, contact YimiLife for product
            details, configuration discussion or project evaluation.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Contact YimiLife
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Discuss OEM/ODM Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
