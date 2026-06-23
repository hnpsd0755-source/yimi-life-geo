import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Blood Pressure Monitor Manufacturer | YimiLife OEM/ODM",
  description:
    "YimiLife is a blood pressure monitor manufacturer supporting overseas brands with upper-arm BP monitors, Bluetooth options, cuff configuration, private-label packaging and OEM/ODM project support.",
  alternates: {
    canonical: "https://www.yimilife.com/products/blood-pressure-monitor",
  },
  openGraph: {
    title:
      "Blood Pressure Monitor Manufacturer | YimiLife OEM/ODM",
    description:
      "YimiLife supports overseas brands with upper-arm BP monitors, Bluetooth options, cuff configuration, private-label packaging and OEM/ODM project support.",
    url: "https://www.yimilife.com/products/blood-pressure-monitor",
    siteName: "YimiLife",
    type: "website",
  },
};

const YIMI_STANDARD_BLUE = "#08A8AE";

type IconProps = {
  className?: string;
};

const ArrowIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.2"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const PressureIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 13.5 16 9" />
    <path d="M8 17h8" />
    <path d="M12 5V3" />
  </svg>
);

const BluetoothIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <path d="m7 7 10 10-5 4V3l5 4L7 17" />
  </svg>
);

const PlatformIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="M7 17v3h10v-3" />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.1 6.2-2.6a1.2 1.2 0 0 1 1.6 0C14.5 3.9 17 5 19 5a1 1 0 0 1 1 1v7Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Badge = ({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "slate" | "emerald";
}) => {
  const toneClass = {
    cyan: "border-cyan-100 bg-cyan-50 text-cyan-700",
    slate: "border-slate-200 bg-slate-50 text-slate-700",
    emerald: "border-emerald-100 bg-emerald-50 text-emerald-700",
  }[tone];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${toneClass}`}
    >
      {children}
    </span>
  );
};

type SpecRow = {
  label: string;
  value: string;
};

type SpecRowTone = {
  category: string;
  rowClass: string;
  accentClass: string;
  labelClass: string;
  chipClass: string;
};

const getSpecRowTone = (label: string): SpecRowTone => {
  const normalized = label.toLowerCase();

  if (["model", "product type"].some((key) => normalized.includes(key))) {
    return {
      category: "Identity",
      rowClass: "bg-slate-50/90 hover:bg-slate-100/90",
      accentClass: "border-l-slate-400",
      labelClass: "text-slate-900",
      chipClass: "border-slate-200 bg-white text-slate-600",
    };
  }

  if (
    ["measurement", "range", "accuracy", "cuff", "memory"].some((key) =>
      normalized.includes(key),
    )
  ) {
    return {
      category: "Performance",
      rowClass: "bg-cyan-50/70 hover:bg-cyan-100/70",
      accentClass: "border-l-cyan-500",
      labelClass: "text-cyan-900",
      chipClass: "border-cyan-200 bg-white text-cyan-700",
    };
  }

  if (
    ["display", "power", "connectivity", "bluetooth", "data", "app", "auto power"].some((key) =>
      normalized.includes(key),
    )
  ) {
    return {
      category: "Configuration",
      rowClass: "bg-blue-50/70 hover:bg-blue-100/70",
      accentClass: "border-l-blue-500",
      labelClass: "text-blue-900",
      chipClass: "border-blue-200 bg-white text-blue-700",
    };
  }

  if (
    ["oem", "moq", "lead time", "certification"].some((key) =>
      normalized.includes(key),
    )
  ) {
    return {
      category: "Project",
      rowClass: "bg-emerald-50/70 hover:bg-emerald-100/70",
      accentClass: "border-l-emerald-500",
      labelClass: "text-emerald-900",
      chipClass: "border-emerald-200 bg-white text-emerald-700",
    };
  }

  return {
    category: "General",
    rowClass: "bg-white hover:bg-slate-50",
    accentClass: "border-l-slate-300",
    labelClass: "text-slate-900",
    chipClass: "border-slate-200 bg-white text-slate-600",
  };
};

const SpecDetailModal = ({
  id,
  title,
  summary,
  rows,
}: {
  id: string;
  title: string;
  summary: string;
  rows: SpecRow[];
}) => (
  <div
    id={id}
    className="fixed inset-0 z-[80] hidden items-center justify-center overflow-y-auto bg-slate-900/45 p-3 backdrop-blur-sm target:flex sm:p-4"
    aria-labelledby={`${id}-title`}
    role="dialog"
    aria-modal="true"
  >
    <a
      href="#bp-platforms"
      className="absolute inset-0 cursor-default"
      aria-label="Close specification detail"
    />

    <div className="relative z-10 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_80px_-44px_rgba(15,23,42,0.6)] sm:rounded-[1.75rem]">
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400" />

      <div className="flex flex-none items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-5">
        <h3
          id={`${id}-title`}
          className="text-base font-semibold tracking-tight text-slate-950 sm:text-lg"
        >
          Blood Pressure Monitor Specification
          <span className="sr-only">: {title}. {summary}</span>
        </h3>
        <a
          href="#bp-platforms"
          className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xl leading-none text-slate-500 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
          aria-label="Close specification detail"
        >
          ×
        </a>
      </div>

      <div className="overflow-y-auto bg-slate-50/80 p-3 sm:p-4">
        <div className="overflow-x-auto">
          <div className="min-w-[360px] overflow-hidden rounded-[1.1rem] border border-slate-200 bg-white shadow-sm sm:rounded-[1.25rem]">
            <div
              className="grid border-b border-slate-200 px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white sm:px-5 sm:text-[11px] sm:tracking-[0.16em]"
              style={{
                backgroundColor: YIMI_STANDARD_BLUE,
                gridTemplateColumns: "40% 60%",
              }}
            >
              <div>Item</div>
              <div>Specification</div>
            </div>

            <dl className="divide-y divide-slate-200">
              {rows.map((row) => {
                const tone = getSpecRowTone(row.label);
                return (
                  <div
                    key={row.label}
                    className={`grid gap-2 border-l-[3px] px-3 py-3 text-sm transition sm:gap-3 sm:px-5 ${tone.accentClass} ${tone.rowClass}`}
                    style={{ gridTemplateColumns: "40% 60%" }}
                  >
                    <dt
                      className={`pr-1 text-[10px] font-semibold uppercase leading-5 tracking-[0.06em] sm:pr-2 sm:text-[13px] sm:tracking-[0.06em] ${tone.labelClass}`}
                    >
                      {row.label}
                    </dt>
                    <dd className="break-words text-[11px] leading-5 text-slate-700 sm:text-[13px] sm:leading-6">
                      {row.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const platformOptions = [
  {
    title: "Standard Upper-Arm BP Monitors",
    eyebrow: "Core private-label platform",
    description:
      "Upper-arm blood pressure monitor platforms for home healthcare, distributor programs, pharmacy retail and branded BP monitor lines.",
    icon: PressureIcon,
    tags: ["Large display", "Simple operation", "Retail-ready configuration"],
    bestFor:
      "Buyers who need a practical home BP monitor with clear user interface, stable platform options and private-label readiness.",
    specId: "spec-standard-upper-arm-bp",
    specSummary:
      "Standard upper-arm blood pressure monitor specification reference for private-label home healthcare and distributor programs.",
    specRows: [
      { label: "Model", value: "YP03 series" },
      { label: "Product Type", value: "Upper-arm Blood Pressure Monitor" },
      { label: "Measurement Method", value: "Oscillometric method" },
      { label: "Measurement", value: "Systolic / diastolic blood pressure, PR" },
      { label: "Pressure Range", value: "0–299 mmHg" },
      { label: "Pulse Rate Range", value: "40–180 bpm" },
      { label: "Pressure Accuracy", value: "±3 mmHg" },
      { label: "Pulse Rate Accuracy", value: "±5%" },
      { label: "Cuff Size", value: "22–32 cm standard adult cuff" },
      { label: "Optional Cuff", value: "22–42 cm / larger cuff by project" },
      { label: "Display", value: "LCD" },
      { label: "Memory", value: "Single-user / multi-user by model" },
      { label: "Power Supply", value: "Battery-powered" },
      { label: "Auto Power-off", value: "Yes" },
      { label: "OEM Options", value: "Logo / color / packaging / IFU" },
      { label: "MOQ", value: "From 500 pcs" },
      { label: "Lead Time", value: "15–30 days" },
      { label: "Certification", value: "FDA / MDR / NMPA model experience available" },
    ],
  },
  {
    title: "Bluetooth BP Monitors",
    eyebrow: "Connected BP option",
    description:
      "BLE blood pressure monitor options for brands building app-connected records, connected home-care programs or remote monitoring workflows.",
    icon: BluetoothIcon,
    tags: ["BLE data transmission", "App workflow discussion", "Connected health use cases"],
    bestFor:
      "Digital health, home-care and distribution teams that need BP readings to connect with software or data-review workflows.",
    specId: "spec-bluetooth-bp-monitor",
    specSummary:
      "Bluetooth upper-arm blood pressure monitor specification reference for app-connected and digital health product programs.",
    specRows: [
      { label: "Model", value: "Bluetooth BP Monitor series" },
      { label: "Product Type", value: "Bluetooth Upper-arm Blood Pressure Monitor" },
      { label: "Measurement Method", value: "Oscillometric method" },
      { label: "Measurement", value: "Systolic / diastolic blood pressure, PR" },
      { label: "Pressure Range", value: "0–299 mmHg" },
      { label: "Pulse Rate Range", value: "40–180 bpm" },
      { label: "Pressure Accuracy", value: "±3 mmHg" },
      { label: "Pulse Rate Accuracy", value: "±5%" },
      { label: "Cuff Size", value: "22–32 cm standard adult cuff" },
      { label: "Optional Cuff", value: "22–42 cm / larger cuff by project" },
      { label: "Display", value: "LCD" },
      { label: "Connectivity", value: "Bluetooth Low Energy" },
      { label: "Data Output", value: "BP / PR measurement records" },
      { label: "Power Supply", value: "Battery / Type-C by selected model" },
      { label: "App Workflow", value: "App data sync by project configuration" },
      { label: "OEM Options", value: "Logo / packaging / IFU / app workflow" },
      { label: "MOQ", value: "From 500 pcs" },
      { label: "Lead Time", value: "15–30 days" },
    ],
  },
  {
    title: "Platform-Based Customization",
    eyebrow: "Configuration path",
    description:
      "Customization based on existing BP monitor platforms, covering brand appearance, cuff requirements, display details, packaging and selected function discussions.",
    icon: PlatformIcon,
    tags: ["Logo and color direction", "Cuff and labeling options", "Packaging and IFU support"],
    bestFor:
      "Brands that want to start from a mature platform while adapting the product package and selected details for their market.",
    specId: "spec-home-healthcare-monitor-platform",
    specSummary:
      "BP-based multi-parameter home healthcare monitor platform reference for deeper OEM/ODM configuration discussions.",
    specRows: [
      { label: "Model", value: "Home Healthcare Monitor platform" },
      { label: "Product Type", value: "BP-based Multi-Parameter Monitor" },
      { label: "Measurement Method", value: "Oscillometric BP measurement" },
      { label: "Core Measurement", value: "Blood pressure, pulse rate" },
      { label: "Optional Modules", value: "SpO₂ / temperature by project configuration" },
      { label: "Pressure Range", value: "0–299 mmHg" },
      { label: "Pulse Rate Range", value: "40–180 bpm" },
      { label: "Pressure Accuracy", value: "±3 mmHg for BP module" },
      { label: "Pulse Rate Accuracy", value: "±5% for BP module" },
      { label: "Display", value: "Large LCD / TFT by selected configuration" },
      { label: "Connectivity", value: "Bluetooth / Wi-Fi by project configuration" },
      { label: "Power Supply", value: "Type-C / adapter-supported configuration" },
      { label: "Data Workflow", value: "App / cloud workflow by project" },
      { label: "OEM Options", value: "Housing / UI / packaging / IFU" },
      { label: "MOQ", value: "Project confirmation required" },
      { label: "Lead Time", value: "Project confirmation required" },
      { label: "Certification Path", value: "Subject to configuration and target market" },
    ],
  },
];

const configurationOptions = [
  "Brand logo and product color direction",
  "Retail box, inner tray and shipping carton coordination",
  "Cuff size, cuff labeling and cuff packaging discussion",
  "Display layout, button language and UI label review",
  "Bluetooth data transmission and app workflow discussion",
  "IFU, label and project documentation support",
];

const faqs = [
  {
    question: "Can YimiLife support a private label blood pressure monitor project?",
    answer:
      "Yes. YimiLife can support private label blood pressure monitor projects with logo, color direction, retail packaging, label coordination, IFU discussion and selected product configuration details.",
  },
  {
    question: "Can Bluetooth blood pressure monitor data output be discussed for app workflows?",
    answer:
      "Yes. Bluetooth BP monitor projects can be discussed for selected platforms, including BLE data transmission, app workflow needs and software handoff requirements.",
  },
  {
    question: "What customization options are available for OEM blood pressure monitors?",
    answer:
      "OEM blood pressure monitor customization can include logo, color direction, packaging, IFU, cuff size direction, cuff labeling and selected UI or Bluetooth workflow discussions by project scope.",
  },
  {
    question: "Can we start from an existing BP monitor platform?",
    answer:
      "Yes. Many private-label BP monitor projects start from existing upper-arm BP platforms, then adapt branding, packaging, cuff details, UI labels or selected functions based on project scope.",
  },
  {
    question: "What should we prepare before requesting BP monitor specs?",
    answer:
      "Useful inputs include target market, expected quantity, standard or Bluetooth direction, cuff requirements, branding scope, packaging needs, documentation expectations and project timeline.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/products/blood-pressure-monitor#webpage",
      url: "https://www.yimilife.com/products/blood-pressure-monitor",
      name: "Blood Pressure Monitor Manufacturer | YimiLife OEM/ODM",
      description:
        "YimiLife is a blood pressure monitor manufacturer supporting overseas brands with upper-arm BP monitors, Bluetooth options, cuff configuration, private-label packaging and OEM/ODM project support.",
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
          name: "Blood Pressure Monitors",
          item: "https://www.yimilife.com/products/blood-pressure-monitor",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Blood Pressure Monitor Platform Options",
      itemListElement: platformOptions.map((option, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "MedicalDevice",
          name: option.title,
          manufacturer: {
            "@type": "Organization",
            name: "YimiLife",
          },
          description: option.description,
          purpose: "Home blood pressure monitoring",
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

export default function BloodPressureMonitorProductPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-10 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/20 md:p-12 lg:grid-cols-[1.02fr_0.98fr] lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-cyan-300">Blood Pressure Monitors</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Blood Pressure Monitor Manufacturer for OEM/ODM Projects
            </h1>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              YimiLife supports overseas brands, distributors and healthcare
              product companies with upper-arm blood pressure monitor
              manufacturing, OEM customization, Bluetooth configuration
              discussion and private-label project support.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-400">
              Choose from mature BP monitor platforms and configuration paths
              for branded home healthcare, retail distribution and connected
              health projects.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?product=blood-pressure-monitor"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Request BP Monitor Specs
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact?product=blood-pressure-monitor"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Discuss BP Monitor Configuration
              </Link>
            </div>
          </div>

          <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="relative flex h-full min-h-[310px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#67e8f9_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative w-full max-w-md rounded-[2rem] border border-cyan-300/20 bg-white/10 p-5 backdrop-blur-sm">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white">
                  <Image
                    src="/homepage/blood-pressure-monitor.png"
                    alt="YimiLife blood pressure monitor product family photo"
                    width={900}
                    height={675}
                    className="aspect-[4/3] w-full object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["Standard", "Bluetooth", "Customize"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/10 p-3"
                    >
                      <p className="text-sm font-semibold text-white">
                        {item}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        BP platform
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bp-platforms" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="max-w-3xl">
          <Badge>Product Platform Options</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Choose the right BP monitor starting point
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            Start with the product direction that matches your sales channel,
            connectivity needs and private-label customization scope.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {platformOptions.map((option) => {
            const Icon = option.icon;
            return (
              <article
                key={option.title}
                className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg"
              >
                <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-100">
                  <Image
                    src="/homepage/blood-pressure-monitor.png"
                    alt={`${option.title} product image`}
                    width={720}
                    height={540}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                    <Icon />
                  </div>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
                    Platform
                  </span>
                </div>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  {option.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {option.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {option.description}
                </p>
                <div className="mt-5 grid gap-2">
                  {option.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-semibold leading-5 text-slate-700"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="mt-auto pt-5 text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-slate-950">Best for:</span>{" "}
                  {option.bestFor}
                </p>
                <a
                  href={`#${option.specId}`}
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2.5 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
                >
                  View Specification Detail
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </a>
                <SpecDetailModal
                  id={option.specId}
                  title={option.title}
                  summary={option.specSummary}
                  rows={option.specRows}
                />
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-cyan-100 bg-cyan-50/70 p-6 shadow-sm md:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Badge>Common Configuration Options</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Configure the platform for your brand and channel
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              BP monitor projects can start from existing platforms, then adapt
              the visible product package and selected functional details for
              the target market.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {configurationOptions.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-cyan-100 bg-white p-4"
              >
                <div className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cyan-100 text-cyan-800">
                  <ShieldIcon className="h-4 w-4" />
                </div>
                <p className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10 lg:p-12">
          <div className="max-w-3xl">
            <Badge tone="slate">Quick Answers</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Quick Answers for BP Monitor Buyers
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Practical answers for buyers comparing private-label BP monitor
              platforms, Bluetooth options and configuration requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className={`rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6 ${
                  index === faqs.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-xl font-semibold leading-8 text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-cyan-700 p-8 text-center text-white shadow-xl shadow-cyan-900/10 md:p-14">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Submit your BP monitor requirements
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-cyan-50">
            Share your target market, quantity, standard or Bluetooth direction,
            cuff requirements, branding scope and packaging needs with YimiLife.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?product=blood-pressure-monitor"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-cyan-800 transition hover:bg-cyan-50"
            >
              Submit BP Monitor Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View OEM/ODM Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
