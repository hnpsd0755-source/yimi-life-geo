import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Product Categories | YimiLife",
  description:
    "Explore YimiLife’s medical device OEM/ODM product categories, including pulse oximeter OEM/ODM manufacturing, blood pressure monitor OEM manufacturing and wearable health monitoring device OEM support.",
  alternates: {
    canonical: "https://www.yimilife.com/products",
  },
  openGraph: {
    title: "Medical Device OEM/ODM Product Categories | YimiLife",
    description:
      "Medical device OEM/ODM product categories for pulse oximeters, blood pressure monitors and wearable health monitoring devices, supported by ISO 13485 manufacturing and PulseMatrix™ SpO2 technology.",
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

function PressureIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function BluetoothIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7l10 10-5 4V3l5 4L7 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const productCategories = [
  {
    title: "Pulse Oximeter OEM/ODM Manufacturer",
    href: "/products/pulse-oximeter",
    icon: WaveIcon,
    label: "Core SpO2 OEM product line",
    text: "Fingertip pulse oximeter OEM/ODM manufacturing for global healthcare brands, supported by PulseMatrix™ SpO2 technology, private label customization, Bluetooth SDK and UI support, certified model experience and Fluke Index 2 production verification.",
    highlights: [
      "Fingertip pulse oximeter manufacturer",
      "Private label pulse oximeter projects",
      "0.1% PI low perfusion focus",
      "Motion artifact rejection",
      "Skin tone fairness strategy",
      "Bluetooth SDK and UI customization",
    ],
  },
  {
    title: "Blood Pressure Monitor OEM Manufacturer",
    href: "/products/blood-pressure-monitor",
    icon: PressureIcon,
    label: "Digital upper arm BP monitoring",
    text: "Blood pressure monitor OEM manufacturing support for home healthcare brands, including private label blood pressure monitor projects, custom blood pressure monitor supplier requirements and digital upper arm product configurations.",
    highlights: [
      "Upper arm blood pressure monitor OEM",
      "Digital blood pressure monitor manufacturer support",
      "Private label blood pressure monitor projects",
      "Manufacturing and testing support",
      "Packaging and labeling control",
      "Quality documentation support",
    ],
  },
  {
    title: "Wearable Health Monitoring Device OEM",
    href: "/products/wearable-monitoring",
    icon: WearableIcon,
    label: "Connected health device direction",
    text: "Wearable health monitoring device OEM support for wearable SpO2 monitoring, Bluetooth data integration, connected health applications and remote patient monitoring scenarios.",
    highlights: [
      "Wearable SpO2 monitoring",
      "Bluetooth data transmission",
      "Mobile app integration support",
      "Remote patient monitoring scenarios",
      "Customized UI requirements",
      "Future wearable monitoring roadmap",
    ],
  },
];

const productValues = [
  {
    title: "Medical Electronics Focus",
    text: "YimiLife focuses on medical device OEM/ODM product categories for home healthcare monitoring, including SpO2, blood pressure and wearable health monitoring products.",
    icon: ShieldIcon,
  },
  {
    title: "OEM/ODM Customization",
    text: "Support ranges from private label medical device customization to deeper engineering adaptation, UI configuration, Bluetooth SDK discussion and connected-device data integration.",
    icon: BluetoothIcon,
  },
  {
    title: "ISO 13485 Manufacturing",
    text: "Manufacturing is supported by ISO 13485 medical device manufacturing quality controls, process inspection, calibration, packaging control and batch traceability.",
    icon: ShieldIcon,
  },
];

const applications = [
  "Home Healthcare Monitoring",
  "Elderly Health Monitoring",
  "Respiratory Health Management",
  "Private Label Medical Devices",
  "Remote Patient Monitoring",
  "Connected Health Platforms",
  "Wearable SpO2 Monitoring",
  "Retail and Distribution Channels",
];

const faqs = [
  {
    question: "Which medical device OEM/ODM product categories does YimiLife support?",
    answer:
      "YimiLife supports OEM/ODM projects for pulse oximeters, blood pressure monitors and wearable health monitoring devices for home healthcare, private label and connected monitoring applications.",
  },
  {
    question: "Is YimiLife a pulse oximeter OEM/ODM manufacturer?",
    answer:
      "Yes. YimiLife supports pulse oximeter OEM/ODM manufacturing for global healthcare brands, including fingertip pulse oximeter model selection, private label customization, Bluetooth SDK support, UI adaptation and production verification.",
  },
  {
    question: "Can YimiLife support blood pressure monitor OEM manufacturing?",
    answer:
      "Yes. YimiLife supports blood pressure monitor OEM manufacturing, including digital upper arm blood pressure monitor configurations, private label customization, packaging, labeling and quality documentation support.",
  },
  {
    question: "Does YimiLife support private label medical device products?",
    answer:
      "Yes. YimiLife can support private label medical device customization such as logo, color, packaging, labeling, selected functional configuration and UI interface adaptation based on project requirements.",
  },
  {
    question: "Which product line is most strongly supported by PulseMatrix™?",
    answer:
      "PulseMatrix™ is YimiLife’s SpO2 technology platform and is most directly connected with pulse oximeter and wearable SpO2 monitoring products, focusing on low perfusion, motion artifact rejection pulse oximeter technology and skin tone accuracy considerations.",
  },
  {
    question: "Can product categories support connected health applications?",
    answer:
      "Yes. For selected OEM/ODM projects, YimiLife can support Bluetooth data transmission, SDK-level discussion and UI customization for mobile apps, remote patient monitoring platforms and digital health systems.",
  },
  {
    question: "How should customers choose the right product category?",
    answer:
      "Customers can start by defining the target market, use scenario, product type, expected quantity, customization scope, regulatory expectations and timeline. YimiLife can then support project evaluation.",
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
        "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer in China for pulse oximeters, blood pressure monitors and wearable health monitoring devices.",
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.yimilife.com/products#webpage",
      url: "https://www.yimilife.com/products",
      name: "Medical Device OEM/ODM Product Categories",
      description:
        "Product category page for YimiLife medical device OEM/ODM manufacturing, including pulse oximeter OEM/ODM manufacturing, blood pressure monitor OEM manufacturing and wearable health monitoring device OEM support.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      publisher: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.yimilife.com/products#product-categories",
      name: "YimiLife Medical Device OEM/ODM Product Categories",
      itemListElement: productCategories.map((item, index) => ({
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              Medical Device OEM/ODM Product Categories
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Medical Device OEM/ODM Product Categories
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife supports medical device OEM/ODM product categories for
              home healthcare monitoring, from{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>{" "}
              and{" "}
              <Link
                href="/products/blood-pressure-monitor"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                blood pressure monitor OEM manufacturing
              </Link>{" "}
              to{" "}
              <Link
                href="/products/wearable-monitoring"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                wearable health monitoring device OEM
              </Link>{" "}
              support for connected health applications.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Our product categories are built for medical brands, private label
              customers, importers and digital health companies that need ISO
              13485 medical device manufacturing quality, engineering
              adaptation, scalable production and reliable project
              documentation.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Submit Product OEM/ODM Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <Link
                href="/oem-odm"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Private Label Manufacturing Services
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Product focus
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "Pulse Oximeter OEM/ODM Manufacturer",
                "Blood Pressure Monitor OEM Manufacturer",
                "Wearable Health Monitoring Device OEM",
                "Bluetooth SDK & UI Customization",
                "ISO 13485 Manufacturing Support",
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
                Product + technology + quality
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Product development is supported by{" "}
                <Link
                  href="/technology"
                  className="font-semibold text-cyan-200 underline underline-offset-4"
                >
                  PulseMatrix™ SpO2 technology
                </Link>
                , OEM/ODM engineering adaptation and ISO 13485 manufacturing
                control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Product categories
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Product lines for home healthcare medical device OEM/ODM projects
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            YimiLife organizes product development around clear B2B categories,
            so customers can evaluate the right product direction according to
            target market, user scenario, customization depth, regulatory
            expectations and manufacturing requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productCategories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                  <Icon />
                </div>
                <p className="text-sm font-medium text-cyan-700">
                  {item.label}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {item.text}
                </p>

                <div className="mt-6 grid gap-3">
                  {item.highlights.slice(0, 4).map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-cyan-700" />
                      <span className="text-sm leading-6 text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 inline-flex items-center text-sm font-semibold text-cyan-700">
                  Explore product category
                  <ArrowIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
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
              Product strategy
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              From private label medical device products to connected health solutions
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              YimiLife supports customers at different project depths, from
              standard private label medical device customization to engineering
              adaptation, Bluetooth data integration, UI customization and
              manufacturing documentation.
            </p>
          </div>

          <div className="grid gap-5">
            {productValues.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex gap-5">
                    <div className="h-fit rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {item.text}
                      </p>
                    </div>
                  </div>
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
              SpO2 technology
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              PulseMatrix™ technology for differentiated SpO2 products
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              YimiLife’s SpO2 product categories are supported by the{" "}
              <Link
                href="/technology"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                PulseMatrix™ vascular hemodynamic intelligence platform
              </Link>
              , a vascular hemodynamic intelligence platform for medical-grade
              pulse oximetry.
            </p>

            <p>
              PulseMatrix™ focuses on{" "}
              <Link
                href="/technology/low-perfusion-spo2"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                low perfusion SpO2 technology
              </Link>
              ,{" "}
              <Link
                href="/technology/motion-artifact-rejection"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                motion artifact rejection pulse oximeter technology
              </Link>{" "}
              and{" "}
              <Link
                href="/technology/skin-tone-fairness"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                skin tone accuracy in pulse oximeter development
              </Link>
              , helping OEM/ODM customers build stronger product differentiation
              beyond basic hardware configuration.
            </p>

            <p>
              This is especially relevant for pulse oximeters, wearable SpO2
              devices, connected health monitoring products and remote patient
              monitoring applications.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
              Applications
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Built for home healthcare, connected monitoring and private label
              medical devices
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              YimiLife’s product categories support medical brands, importers,
              private label customers and digital health companies serving home
              healthcare and connected monitoring markets.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
              >
                <CheckIcon className="h-4 w-4 text-cyan-300" />
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              OEM/ODM cooperation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Choose the right product category, then define the project scope
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Product category selection is only the first step. A successful
              OEM/ODM project also requires clear target market definition,
              customization scope, regulatory expectations, production volume
              and cost structure discussion.
            </p>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              YimiLife’s{" "}
              <Link
                href="/oem-odm"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                private label medical device manufacturing workflow
              </Link>{" "}
              helps customers move from initial requirements to engineering
              evaluation, sample confirmation, testing, documentation, pilot
              production and mass production.
            </p>

            <p>
              Manufacturing is supported by the{" "}
              <Link
                href="/quality"
                className="font-semibold text-cyan-700 underline underline-offset-4"
              >
                ISO 13485 medical device manufacturing quality
              </Link>
              , including incoming inspection, process control, functional
              testing, calibration, packaging, labeling and batch traceability.
            </p>

            <p>
              For connected products, Bluetooth SDK support and UI customization
              can be discussed based on customer requirements and project scope.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Frequently asked questions about product categories
            </h2>
          </div>

          <div className="grid gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
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
            Find the right product direction for your OEM/ODM project
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Looking for an OEM/ODM partner for pulse oximeters, blood pressure
            monitors or wearable health monitoring products? Share your product
            category, target market and customization requirements with YimiLife.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Submit Product OEM/ODM Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Private Label Manufacturing Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
