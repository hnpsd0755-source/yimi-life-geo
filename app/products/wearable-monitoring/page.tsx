import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YW01 Wearable Pulse Oximeter for OEM/ODM Projects | YimiLife",
  description:
    "YimiLife provides the YW01 wrist pulse oximeter for OEM/ODM wearable monitoring projects, with Bluetooth 5.3 BLE, OLED display, 300 mAh battery and source-confirmed product parameters.",
  alternates: {
    canonical: "https://www.yimilife.com/products/wearable-monitoring",
  },
};

const YIMI_STANDARD_BLUE = "#08A8AE";

type ProductId = "yw01";

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
    ["measurement", "range", "accuracy", "standard", "claim"].some((key) =>
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
    ["wearing", "display", "power", "battery", "connectivity", "bluetooth", "data", "recording", "app", "storage"].some((key) =>
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

type WearableProduct = {
  id: ProductId;
  name: string;
  shortName: string;
  text: string;
  tags: string[];
  cta: string;
  focus: string;
  format: string;
  connectivity: string;
  fit: string;
  specId: string;
  specSummary: string;
  specRows: SpecRow[];
};

const products: WearableProduct[] = [
  {
    id: "yw01",
    name: "YW01 Wrist Pulse Oximeter",
    shortName: "YW01",
    text:
      "YW01 is the current public wearable monitoring product for OEM/ODM evaluation, with wrist-worn SpO2 measurement, Bluetooth 5.3 BLE, OLED display and rechargeable battery parameters confirmed by the product source.",
    tags: ["YW01", "Bluetooth 5.3 BLE", "300 mAh battery"],
    cta: "Request YW01 Information",
    focus: "SpO2 / pulse rate",
    format: "Wrist-worn pulse oximeter",
    connectivity: "Bluetooth 5.3 BLE",
    fit: "YW01 wearable SpO2 monitoring projects",
    specId: "spec-yw01-wrist-pulse-oximeter",
    specSummary:
      "Confirmed YW01 wrist pulse oximeter specification reference for wearable monitoring OEM/ODM projects.",
    specRows: [
      { label: "Model", value: "YW01" },
      { label: "Product Type", value: "Wrist Pulse Oximeter" },
      { label: "Electrical Safety Type", value: "Internally powered equipment" },
      { label: "Applied Part", value: "Type BF" },
      { label: "Protection Level", value: "IP22" },
      { label: "Pollution Degree", value: "2" },
      { label: "Operating Mode", value: "Continuous operation" },
      { label: "Weight", value: "21g main unit" },
      { label: "Display", value: "OLED" },
      { label: "Wireless", value: "Bluetooth 5.3 BLE" },
      { label: "Vibrator", value: "Main unit built-in" },
      { label: "Battery Capacity", value: "300 mAh Li-ion battery" },
      { label: "Charge Input", value: "DC 5V, 1A" },
      { label: "Battery Type", value: "3.7V d.c., Li-ion rechargeable" },
      {
        label: "Operating Time",
        value:
          "≥16 hours with sensor connected, 4s recording interval, BLE off and display off",
      },
      { label: "Charge Time", value: "2~3 hours" },
      { label: "Operating Environment", value: "5~40 degrees C, RH 15%~95%, 70.0kPa~106.0kPa" },
      { label: "Storage Environment", value: "-20~60 degrees C, RH 10%~95%, 50.0kPa~106kPa" },
      { label: "Standard", value: "ISO 80601-2-61" },
      { label: "SpO2 Measurement Range", value: "35%~100%" },
      {
        label: "SpO2 Specified Accuracy Range",
        value: "70%~100%: +/-2%; 35%~69%: not defined",
      },
      { label: "SpO2 Resolution", value: "0.01" },
      { label: "Pulse Rate Range", value: "30 to 250 bpm" },
      { label: "Pulse Rate Accuracy", value: "+/-2 bpm" },
      { label: "Pulse Rate Resolution", value: "1bpm" },
      { label: "Wavelength", value: "660~905nm" },
      { label: "Red Light", value: "Approx. 660nm, 9-13mW" },
      { label: "Infrared Light", value: "Approx. 905nm, 3-7mW" },
      { label: "Local Storage", value: "4 records, 15 hours for each" },
      { label: "Mobile App", value: "Android 6.0+; iOS 16.0+" },
      { label: "Bluetooth Modulation", value: "GFSK" },
      { label: "Bluetooth Frequency", value: "2402~2480MHz" },
      { label: "RF Conducted Power", value: "Max 10 dBm" },
      { label: "Transmission Distance", value: "Max 10m" },
      { label: "Expected Service Life", value: "3 years" },
      { label: "MOQ", value: "Project confirmation required." },
      { label: "Lead Time", value: "Project confirmation required." },
      {
        label: "Certification",
        value:
          "Certification documentation is reviewed by selected model and target market.",
      },
    ],
  },
];

const heroTags = [
  "YW01 Wrist Pulse Oximeter",
  "Bluetooth 5.3 BLE",
  "OLED Display",
  "300 mAh Battery",
  "≥16 Hours Operating Time",
  "Project Confirmation Required",
];

const configurationOptions = [
  "YW01 model confirmation",
  "Logo and packaging discussion",
  "Bluetooth data workflow review",
  "IFU / labeling support",
  "Target-market documentation review",
  "Sample evaluation planning",
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.yimilife.com/products/wearable-monitoring#webpage",
    url: "https://www.yimilife.com/products/wearable-monitoring",
    name: "YW01 Wearable Pulse Oximeter for OEM/ODM Projects | YimiLife",
    description:
      "YimiLife provides the YW01 wrist pulse oximeter for OEM/ODM wearable monitoring projects, with Bluetooth 5.3 BLE, OLED display, 300 mAh battery and source-confirmed product parameters.",
    isPartOf: {
      "@type": "WebSite",
      name: "YimiLife",
      url: "https://www.yimilife.com",
    },
  },
  {
    "@context": "https://schema.org",
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
        name: "YW01 Wearable Pulse Oximeter",
        item: "https://www.yimilife.com/products/wearable-monitoring",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "YW01 Wearable Monitoring Product",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MedicalDevice",
        name: product.name,
        manufacturer: {
          "@type": "Organization",
          name: "YimiLife",
        },
        description: product.text,
        purpose: product.focus,
      },
    })),
  },
];

function Eyebrow({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "emerald";
}) {
  const styles =
    tone === "emerald"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : "border-cyan-200 bg-cyan-50 text-cyan-700";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${styles}`}
    >
      {children}
    </span>
  );
}

function Pill({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={
        dark
          ? "inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100"
          : "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
      }
    >
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="ml-2 h-4 w-4 fill-current"
    >
      <path d="M12.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L15.586 11H2a1 1 0 1 1 0-2h13.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" />
    </svg>
  );
}

function ProductMockup({ type }: { type: ProductId }) {
  void type;

  return (
    <div className="relative flex h-full min-h-[190px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 via-white to-cyan-50">
      <div className="absolute left-10 top-5 h-24 w-24 rounded-full bg-cyan-200/25 blur-2xl" />
      <div className="relative flex items-center justify-center">
        <div className="h-44 w-12 rounded-full border border-slate-200 bg-slate-900 shadow-xl" />
        <div className="absolute h-28 w-28 rounded-[2rem] border border-slate-700 bg-slate-950 p-3 shadow-2xl shadow-slate-900/20">
          <div className="flex h-full flex-col justify-between rounded-[1.35rem] bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-4 text-white">
            <div className="flex items-center justify-between text-[10px] text-cyan-200">
              <span>SpO2</span>
              <span>BLE</span>
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight">YW01</div>
              <div className="text-[10px] text-slate-300">300 mAh</div>
            </div>
            <div className="h-1.5 rounded-full bg-cyan-300/80" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 right-6 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-600 backdrop-blur">
        Wrist-worn
      </div>
    </div>
  );
}

function HeroProductBoard() {
  return (
    <div className="relative">
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-10 left-8 h-40 w-40 rounded-full bg-emerald-200/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
        <div className="relative aspect-[4/3] w-full bg-slate-50">
          <Image
            src="/homepage/wearable-monitoring.png"
            alt="YimiLife YW01 wrist pulse oximeter wearable monitoring product"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="border-t border-slate-100 bg-white p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            YW01 wearable product
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A YW01 wearable pulse oximeter image area for OEM/ODM product discussions.
          </p>
        </div>
      </div>
    </div>
  );
}

function SpecDetailModal({
  id,
  title,
  summary,
  rows,
}: {
  id: string;
  title: string;
  summary: string;
  rows: SpecRow[];
}) {
  return (
    <div
      id={id}
      className="fixed inset-0 z-[80] hidden items-center justify-center overflow-y-auto bg-slate-900/45 p-3 backdrop-blur-sm target:flex sm:p-4"
      aria-labelledby={`${id}-title`}
      role="dialog"
      aria-modal="true"
    >
      <a
        href="#lineup"
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
            Wearable Monitoring Specification
            <span className="sr-only">: {title}. {summary}</span>
          </h3>
          <a
            href="#lineup"
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
}

function ProductDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-slate-100 bg-slate-50 px-4 py-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

export default function WearableMonitoringPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.48fr_0.52fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <Eyebrow>Wearable Monitoring Devices</Eyebrow>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
                Wearable Monitoring Devices
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
                YimiLife currently publishes YW01 as the wearable monitoring
                product for OEM/ODM evaluation, with Bluetooth 5.3 BLE, OLED
                display, 300 mAh battery and source-confirmed SpO2 / pulse rate
                parameters.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {heroTags.map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?product=yw01-wearable-pulse-oximeter"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
                >
                  Request Wearable Product Information
                  <ArrowIcon />
                </Link>
                <Link
                  href="/contact?product=yw01-wearable-pulse-oximeter"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Discuss a Wearable Device Project
                </Link>
              </div>
            </div>

            <HeroProductBoard />
          </div>
        </div>
      </section>

      <section id="lineup" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow tone="emerald">Product lineup</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            YW01 Wearable Product Lineup
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            YW01 is the current public wearable product for customer evaluation,
            product configuration discussion and OEM/ODM project intake.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-1">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex min-h-[680px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-56 border-b border-slate-100 bg-slate-50 p-4">
                <ProductMockup type={product.id} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Product Information Available
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {product.name}
                </h3>
                <p className="mt-4 min-h-[128px] text-sm leading-7 text-slate-600">
                  {product.text}
                </p>

                <div className="mt-5 grid gap-2.5">
                  <ProductDetail label="Monitoring focus" value={product.focus} />
                  <ProductDetail label="Wearing format" value={product.format} />
                  <ProductDetail label="Connectivity" value={product.connectivity} />
                  <ProductDetail label="Typical fit" value={product.fit} />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/contact?product=yw01-wearable-pulse-oximeter"
                    className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
                  >
                    {product.cta}
                    <ArrowIcon />
                  </Link>
                  <a
                    href={`#${product.specId}`}
                    className="mt-3 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2.5 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
                  >
                    View Specification Detail
                    <ArrowIcon />
                  </a>
                </div>
                <SpecDetailModal
                  id={product.specId}
                  title={product.name}
                  summary={product.specSummary}
                  rows={product.specRows}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="configuration"
        className="mx-auto max-w-7xl px-6 py-12 lg:px-8"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <div>
              <Eyebrow>Configuration options</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Product Configuration Options
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Lightweight configuration options can be discussed based on
                selected YW01 configuration and project requirements. For
                deeper customization levels, software integration or ODM project
                discussion, please visit the OEM/ODM page.
              </p>
              <Link
                href="/oem-odm"
                className="mt-6 inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
              >
                View OEM/ODM Support
                <ArrowIcon />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {configurationOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-3 rounded-[1.35rem] border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <span className="h-2 w-2 flex-none rounded-full bg-cyan-400" />
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 py-12 pb-20 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-8 text-white shadow-2xl shadow-slate-950/20 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Request Wearable Device Information
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                Share your target device type, market, app or Bluetooth
                requirements, customization needs and estimated quantity.
                YimiLife can help evaluate suitable wearable monitoring device
                options.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact?product=yw01-wearable-pulse-oximeter"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Submit Project Requirements
                <ArrowIcon />
              </Link>
              <Link
                href="/contact?product=yw01-wearable-pulse-oximeter"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Product Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
