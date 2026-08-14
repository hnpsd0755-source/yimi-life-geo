"use client";

import type { ReactNode } from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const YIMI_STANDARD_BLUE = "#08A8AE";

type IconProps = {
  className?: string;
};

const ArrowIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const PulseIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M2 12h4l2.5-7 5 14 2.5-7h6" />
  </svg>
);

const LayersIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 18 9 5 9-5" />
  </svg>
);

const CpuIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" />
    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
  </svg>
);

const ShieldIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.1 6.2-2.6a1.2 1.2 0 0 1 1.6 0C14.5 3.9 17 5 19 5a1 1 0 0 1 1 1v7Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Badge = ({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "slate" | "cyan" | "emerald";
}) => {
  const toneClass = {
    blue: "border-blue-100 bg-blue-50 text-blue-700",
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
    ["measurement", "range", "accuracy", "low perfusion"].some((key) =>
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
    [
      "display",
      "power",
      "bluetooth",
      "voice",
      "auto power",
      "housing",
      "signal platform",
    ].some((key) => normalized.includes(key))
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
  open,
  onClose,
  title,
  rows,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  rows: SpecRow[];
}) => {
  // Close on ESC key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-slate-900/45 p-3 backdrop-blur-sm sm:p-4"
      aria-labelledby="spec-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative z-10 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_80px_-44px_rgba(15,23,42,0.6)] sm:rounded-[1.75rem]">
        <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400" />

        <div className="flex flex-none items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-5">
          <h3
            id="spec-modal-title"
            className="text-base font-semibold tracking-tight text-slate-950 sm:text-lg"
          >
            Full Technical Specifications
            <span className="ml-2 text-sm font-normal text-slate-500">
              — {title}
            </span>
          </h3>
          <button
            onClick={onClose}
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xl leading-none text-slate-500 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
            aria-label="Close specification detail"
          >
            ×
          </button>
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
};

const keySpecGroups = [
  {
    title: "General Specs",
    note: "",
    items: [
      {
        label: "Product type",
        value:
          "Fingertip pulse oximeters and handheld pulse oximeters listed in the current product parameter source",
      },
      {
        label: "Measurement parameters",
        value:
          "SpO2 and pulse rate for fingertip models; SpO2, pulse rate and PI for YH01 / YH02 handheld models",
      },
      {
        label: "Display options",
        value:
          "Fingertip: LED / OLED / TFT; handheld: YH01 3.5-inch LED, YH02 3.5-inch TFT",
      },
      {
        label: "Power options",
        value:
          "Fingertip: 2 x AAA 1.5V alkaline batteries; handheld: 4 x AA 1.5V batteries",
      },
    ],
  },
  {
    title: "OEM/ODM Options",
    note: "",
    items: [
      {
        label: "Logo customization",
        value: "Logo, color and housing discussion by project",
      },
      {
        label: "Packaging customization",
        value: "Retail box, label, IFU and private-label packaging support",
      },
      {
        label: "UI / firmware options",
        value:
          "UI language, display direction and firmware options reviewed by selected model",
      },
    ],
  },
  {
    title: "Commercial & Quality Info",
    note:
      "Commercial and certification wording is project-level and should be reviewed by selected model and target market.",
    items: [
      {
        label: "MOQ",
        value: "Confirmed by selected model and project scope.",
      },
      {
        label: "Lead time",
        value:
          "Confirmed after product configuration, order quantity and project requirements are reviewed.",
      },
      {
        label: "Certifications",
        value:
          "Certification documentation is reviewed by selected model and target market.",
      },
    ],
  },
];

const fingertipSpecRows = (
  model: string,
  productType = "Fingertip Pulse Oximeter",
): SpecRow[] => [
  { label: "Model", value: model },
  { label: "Product Type", value: productType },
  { label: "Measurement", value: "SpO2, pulse rate" },
  { label: "SpO2 Measurement Range", value: "35%~100%" },
  {
    label: "SpO2 Specified Accuracy Range",
    value: "70%~100%: +/-2%; 35%~69%: not defined",
  },
  { label: "SpO2 Resolution", value: "0.01" },
  { label: "Pulse Rate Range", value: "30bpm~250bpm" },
  { label: "Pulse Rate Accuracy", value: "+/-3bpm" },
  { label: "Pulse Rate Resolution", value: "1bpm" },
  { label: "Data Update Period", value: "<30 seconds" },
  { label: "Display Type", value: "LED / OLED / TFT" },
  {
    label: "OLED / TFT Display Content",
    value:
      "SpO2, pulse rate, battery indicator, waveform and buzzer indication",
  },
  {
    label: "LED Display Content",
    value:
      "SpO2, pulse rate, perfusion index on selected display direction and battery indicator",
  },
  { label: "Power Supply", value: "2 x AAA 1.5V alkaline batteries" },
  { label: "Electrical Safety Type", value: "Internally powered equipment" },
  {
    label: "Applied Part",
    value: "Type BF applied part, no defibrillation protection",
  },
  { label: "Protection Level", value: "IP22" },
  { label: "Operating Mode", value: "Continuous mode" },
  {
    label: "Dimensions",
    value:
      "Approx. 57 x 30 x 31 mm (YM01 / YM02 type), 62 x 34 x 35 mm (YM03 type), 63 x 36 x 37 mm (YM04 type), 54 x 32 x 31 mm (YM06 type)",
  },
  { label: "Weight", value: "Approx. 35g without batteries" },
  {
    label: "Operating Environment",
    value: "10~40 degrees C, RH 15%~95%, 70kPa~106kPa",
  },
  {
    label: "Storage Environment",
    value: "-20~60 degrees C, RH 10%~95%, 50kPa~107.4kPa",
  },
  { label: "Red Light", value: "Approx. 660nm, 9-13mW" },
  { label: "Infrared Light", value: "Approx. 905nm, 3-6mW" },
  { label: "OEM Options", value: "Logo / color / packaging / IFU" },
  { label: "MOQ", value: "Confirmed by selected model and project scope." },
  {
    label: "Lead Time",
    value:
      "Confirmed after product configuration, order quantity and project requirements are reviewed.",
  },
  {
    label: "Certification",
    value:
      "Certification documentation is reviewed by selected model and target market.",
  },
];

const fingertipTracks = [
  {
    title: "YM101 / YM102 / YM103 / YM104 Fingertip Models",
    eyebrow: "AAA battery fingertip line",
    description:
      "Fingertip pulse oximeter models using the shared confirmed measurement, display, power and protection parameters from the current product parameter source.",
    keyInfo: ["2 x AAA alkaline batteries", "IP22"],
    tags: ["Fingertip", "LED / OLED / TFT", "Continuous mode"],
    models: ["YM101", "YM102", "YM103", "YM104"],
    visuals: [
      {
        model: "YM101",
        note: "Fingertip model listed in source",
        shape: "compact",
        imageSrc: "/homepage/P2/products/Fingertip Oximeter/YM101.jpg",
      },
      {
        model: "YM102 / YM103 / YM104",
        note: "Same public specification source family",
        shape: "wide",
      },
    ],
    specId: "spec-ym101-ym104-fingertip",
    specSummary:
      "Confirmed fingertip pulse oximeter specification reference for YM101 / YM102 / YM103 / YM104.",
    specRows: fingertipSpecRows("YM101 / YM102 / YM103 / YM104"),
    icon: PulseIcon,
  },
  {
    title: "YM201 / YM202 / YM301 / YM302 Fingertip Models",
    eyebrow: "Mainstream fingertip line",
    description:
      "Mainstream fingertip pulse oximeter models for private-label projects, with public specifications limited to the confirmed shared source values.",
    keyInfo: ["SpO2 35%~100%", "PR 30bpm~250bpm"],
    tags: ["Fingertip", "Shared YM specs", "Private-label ready"],
    models: ["YM201", "YM202", "YM301", "YM302"],
    visuals: [
      {
        model: "YM201",
        note: "Fingertip model listed in source",
        shape: "wide",
        imageSrc: "/homepage/P2/products/Fingertip Oximeter/YM201.jpg",
      },
      {
        model: "YM202 / YM301 / YM302",
        note: "Same public specification source family",
        shape: "compact",
      },
    ],
    specId: "spec-ym201-ym302-fingertip",
    specSummary:
      "Confirmed fingertip pulse oximeter specification reference for YM201 / YM202 / YM301 / YM302.",
    specRows: fingertipSpecRows("YM201 / YM202 / YM301 / YM302"),
    icon: ShieldIcon,
  },
  {
    title: "YM111 / YM112 / YM113 / YM114 / YM211 / YM212 / YM314 Fingertip Models",
    eyebrow: "Expanded YM model group",
    description:
      "Additional YM fingertip pulse oximeter models listed in the source file for OEM/ODM product selection and private-label discussion.",
    keyInfo: ["+/-3bpm PR accuracy", "<30 seconds data update"],
    tags: ["Fingertip", "OEM selection", "Confirmed source specs"],
    models: ["YM111", "YM112", "YM113", "YM114", "YM211", "YM212", "YM314"],
    visuals: [
      {
        model: "YM111 / YM112",
        note: "Model group listed in source",
        shape: "compact",
      },
      {
        model: "YM113 / YM114 / YM211 / YM212 / YM314",
        note: "Same public specification source family",
        shape: "wide",
      },
    ],
    specId: "spec-ym111-ym314-fingertip",
    specSummary:
      "Confirmed fingertip pulse oximeter specification reference for YM111 / YM112 / YM113 / YM114 / YM211 / YM212 / YM314.",
    specRows: fingertipSpecRows(
      "YM111 / YM112 / YM113 / YM114 / YM211 / YM212 / YM314",
    ),
    icon: LayersIcon,
  },
  {
    title: "YM401 / YM402 / YM403 / YM501 / YM502 / YM503 / YM504 / YM601 / YM602 / YM603 Fingertip Models",
    eyebrow: "Full listed YM extension group",
    description:
      "Full extension group of YM fingertip pulse oximeter models currently listed in the product parameter source, without adding unsupported BLE, rechargeable or pediatric performance claims.",
    keyInfo: ["LED / OLED / TFT", "Type BF applied part"],
    tags: ["Fingertip", "Model selection", "Confirmed source specs"],
    models: [
      "YM401",
      "YM402",
      "YM403",
      "YM501",
      "YM502",
      "YM503",
      "YM504",
      "YM601",
      "YM602",
      "YM603",
    ],
    visuals: [
      {
        model: "YM401",
        note: "Fingertip model listed in source",
        shape: "compact",
        imageSrc: "/homepage/P2/products/Fingertip Oximeter/YM401.jpg",
      },
      {
        model: "YM402 / YM403 / YM501 / YM502 / YM503 / YM504 / YM601 / YM602 / YM603",
        note: "Same public specification source family",
        shape: "wide",
      },
    ],
    specId: "spec-ym401-ym603-fingertip",
    specSummary:
      "Confirmed fingertip pulse oximeter specification reference for YM401 / YM402 / YM403 / YM501 / YM502 / YM503 / YM504 / YM601 / YM602 / YM603.",
    specRows: fingertipSpecRows(
      "YM401 / YM402 / YM403 / YM501 / YM502 / YM503 / YM504 / YM601 / YM602 / YM603",
    ),
    icon: CpuIcon,
  },
];

const handheldSpecRows = (model: "YH01" | "YH02"): SpecRow[] => [
  { label: "Model", value: model },
  { label: "Product Type", value: "Handheld Pulse Oximeter" },
  { label: "Display", value: model === "YH01" ? "3.5-inch LED screen" : "3.5-inch TFT screen" },
  { label: "Sensor Interface", value: "1 x DB9 multifunction interface for SpO2 sensor connection" },
  { label: "SpO2 Measurement Range", value: "35%~100%" },
  {
    label: "SpO2 Accuracy",
    value:
      "70%~100%: +/-2% with RS201 / RS202 / SS201 sensors; +/-3% with SS102 sensor; 0%~69%: not defined",
  },
  { label: "SpO2 Resolution", value: "0.01" },
  { label: "Pulse Rate Range", value: "30~250 bpm" },
  { label: "Pulse Rate Accuracy", value: "+/-3 bpm" },
  { label: "Pulse Rate Resolution", value: "1bpm" },
  { label: "PI Range", value: "0.5%~20%" },
  { label: "Data Update Period", value: "<30 seconds" },
  { label: "Power Supply", value: "4 x 1.5V AA batteries" },
  {
    label: "Operating Time",
    value:
      "Approx. 15h for TFT and approx. 30h for LED under the listed typical source conditions",
  },
  { label: "Low Voltage", value: "2.35V +/-0.1V low-battery display" },
  { label: "Shutdown Delay", value: "Up to 10 minutes after first low-battery prompt" },
  { label: "Protection Level", value: "IPX2" },
  { label: "Operating Mode", value: "Continuous operation" },
  { label: "Dimensions", value: "70(W) x 150(H) x 30(D) mm" },
  { label: "Maximum Weight", value: "<500g, full configuration including batteries" },
  { label: "Operating Environment", value: "10~40 degrees C, RH 15%~95%, 70.0~106.0 kPa" },
  { label: "Storage Environment", value: "-20~60 degrees C, RH 10%~95%, 50.0~107.4 kPa" },
  { label: "Red Light", value: "650nm~667nm, output <13mW" },
  { label: "Infrared Light", value: "885nm~915nm, output <6mW" },
  { label: "Optical Radiation Safety", value: "No-risk class under GB/T20145-2006 classification" },
  { label: "MOQ", value: "Confirmed by selected model and project scope." },
  {
    label: "Lead Time",
    value:
      "Confirmed after product configuration, order quantity and project requirements are reviewed.",
  },
  {
    label: "Certification",
    value:
      "Certification documentation is reviewed by selected model and target market.",
  },
];

const handheldModels = [
  {
    model: "YH01",
    role: "LED handheld configuration",
    description:
      "YH01 is a handheld pulse oximeter model with a 3.5-inch LED screen and DB9 multifunction interface for SpO2 sensor connection.",
    display: "3.5-inch LED screen",
    ble: "Not listed in current source",
    power: "4 x 1.5V AA batteries",
    imageSrc: "/homepage/P2/products/handheld Oximeter/YH01-Oximeter.png",
    scenario:
      "Handheld SpO2 projects requiring external sensor connection and source-confirmed YH01 parameters",
    specId: "spec-yh01-handheld",
    specRows: handheldSpecRows("YH01"),
  },
  {
    model: "YH02",
    role: "TFT handheld configuration",
    description:
      "YH02 is a handheld pulse oximeter model with a 3.5-inch TFT screen and DB9 multifunction interface for SpO2 sensor connection.",
    display: "3.5-inch TFT screen",
    ble: "Not listed in current source",
    power: "4 x 1.5V AA batteries",
    imageSrc: "/homepage/P2/products/handheld Oximeter/handheld oximeter.jpg",
    scenario:
      "Handheld SpO2 projects requiring TFT display and source-confirmed YH02 parameters",
    specId: "spec-yh02-handheld",
    specRows: handheldSpecRows("YH02"),
  },
];

const fingertipSelector = [
  {
    configuration: "YM101 / YM102 / YM103 / YM104",
    bestFor: "Buyers comparing listed baseline fingertip model codes",
    display: "LED / OLED / TFT",
    ble: "2 x AAA 1.5V alkaline batteries",
    voice: "Continuous mode",
    signal: "Excel-confirmed shared YM specifications",
    projectFit: "Private-label fingertip model selection",
  },
  {
    configuration: "YM201 / YM202 / YM301 / YM302",
    bestFor: "Mainstream fingertip pulse oximeter sourcing",
    display: "LED / OLED / TFT",
    ble: "2 x AAA 1.5V alkaline batteries",
    voice: "Continuous mode",
    signal: "Excel-confirmed shared YM specifications",
    projectFit: "Retail and distributor product programs",
  },
  {
    configuration: "YM111 / YM112 / YM113 / YM114 / YM211 / YM212 / YM314",
    bestFor: "Expanded YM model evaluation",
    display: "LED / OLED / TFT",
    ble: "2 x AAA 1.5V alkaline batteries",
    voice: "Continuous mode",
    signal: "Excel-confirmed shared YM specifications",
    projectFit: "OEM model comparison and quotation preparation",
  },
  {
    configuration: "YM401 / YM402 / YM403 / YM501 / YM502 / YM503 / YM504 / YM601 / YM602 / YM603",
    bestFor: "Full listed extension group review",
    display: "LED / OLED / TFT",
    ble: "2 x AAA 1.5V alkaline batteries",
    voice: "Continuous mode",
    signal: "Excel-confirmed shared YM specifications",
    projectFit: "Broader private-label model shortlist review",
  },
];

const faqs = [
  {
    question:
      "Can I start a private label pulse oximeter project with an existing YimiLife model?",
    answer:
      "Yes. YimiLife can review existing YM fingertip models or YH01 / YH02 handheld models, then discuss logo, packaging, labeling, IFU and configuration needs according to the selected model and target market requirements.",
  },
  {
    question:
      "Are Bluetooth pulse oximeter specifications listed on this page?",
    answer:
      "No. This round keeps public specifications limited to the confirmed product parameter source. Bluetooth or app-integration requirements should be reviewed separately by selected hardware configuration and software scope.",
  },
  {
    question:
      "What is the difference between a pulse oximeter OEM project and a fully custom ODM project?",
    answer:
      "A pulse oximeter OEM project usually starts from an existing YimiLife platform and adapts branding, packaging, labels, IFU or selected configurations. A deeper ODM project may involve wider engineering changes and should be reviewed by feasibility, target market and expected volume.",
  },
  {
    question:
      "Where can buyers learn more about PulseMatrix signal technology?",
    answer:
      "This product page is kept focused on source-confirmed product specifications. Detailed technology content is organized under the PulseMatrix Signal Platform section.",
  },
  {
    question:
      "What fingertip pulse oximeter configuration is suitable for elderly users?",
    answer:
      "For elderly-user-oriented projects, usability requirements should be reviewed against the selected model, target market and confirmed product configuration.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.yimilife.com/products/pulse-oximeter#webpage",
      url: "https://www.yimilife.com/products/pulse-oximeter",
      name: "Pulse Oximeter OEM Manufacturer | YimiLife",
      description:
        "YimiLife supports pulse oximeter OEM projects for overseas brands with fingertip and handheld models, private-label customization, production verification and certified model experience.",
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
      name: "Pulse Oximeter Product Types",
      itemListElement: [
        "Fingertip Pulse Oximeter",
        "Handheld Pulse Oximeter",
        "YM Fingertip Pulse Oximeter",
        "YH01 Handheld Pulse Oximeter",
        "YH02 Handheld Pulse Oximeter",
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
          description: `${name} product configuration for SpO2 and pulse rate monitoring discussions under the YimiLife pulse oximeter product family.`,
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

export default function PulseOximeterProductPage() {
  const [activeSpec, setActiveSpec] = useState<{
    title: string;
    rows: SpecRow[];
  } | null>(null);

  const closeModal = useCallback(() => setActiveSpec(null), []);

  return (
    <main className="bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Spec Detail Modal */}
      {activeSpec && (
        <SpecDetailModal
          open={true}
          onClose={closeModal}
          title={activeSpec.title}
          rows={activeSpec.rows}
        />
      )}

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/20 md:p-12 lg:grid-cols-[1.02fr_0.98fr] lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-400">
              <Link
                href="/products/pulse-oximeter"
                className="hover:text-white"
              >
                Products
              </Link>
              <span>/</span>
              <span className="text-cyan-300">
                Pulse Oximeter Product Architecture
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Pulse Oximeter OEM Manufacturing for Overseas Brands
            </h1>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              YimiLife supports overseas brands and distributors as a fingertip
              pulse oximeter manufacturer with YM fingertip models, YH01 / YH02
              handheld SpO2 options, private-label customization, packaging
              support and project documentation review.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-400">
              As a B2B OEM/ODM medical device manufacturer, YimiLife supports
              pulse oximeter OEM discussions across display, power supply,
              model selection and model-level documentation requirements.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Procurement reference: 300,000 units/month production capacity
              and 25+ certified models across FDA, MDR and NMPA pathways for
              buyer evaluation. Documentation availability depends on the
              selected model, configuration and target market.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#fingertip-section"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Fingertip Matrix
                <ArrowIcon className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#handheld-section"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Handheld Spotlight
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#67e8f9_1px,transparent_1px)] [background-size:20px_20px]" />
              <Image
                src="/homepage/P2/selected/product-pulse-oximeter.jpg"
                alt="YimiLife pulse oximeter product family photo"
                fill
                className="object-contain p-8"
                priority
              />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-white backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">
                  Pulse oximeter family
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  YM fingertip and YH01 / YH02 handheld SpO2 products for
                  private-label OEM/ODM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key specifications */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Badge tone="cyan">B2B Buyer Reference</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Key Specifications & OEM Information
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            A concise reference for buyer-side product selection, OEM/ODM
            discussion and early project evaluation. Full model-specific
            technical specifications remain available in the detailed modal for
            each product track.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {keySpecGroups.map((group) => (
            <article
              key={group.title}
              className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                {group.title}
              </h3>
              <dl className="mt-5 divide-y divide-slate-100">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-3 py-3 text-sm"
                    style={{ gridTemplateColumns: "40% 60%" }}
                  >
                    <dt className="text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-6 text-slate-700">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              {group.note && (
                <p className="mt-auto rounded-2xl border border-cyan-100 bg-cyan-50 px-4 py-3 text-xs leading-5 text-cyan-900">
                  {group.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Fingertip tracks */}
      <section
        id="fingertip-section"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 lg:px-8"
      >
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 shadow-xl md:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Badge tone="cyan">Configurable Category</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Fingertip Pulse Oximeter Tracks
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                Four compact product tracks connect buyer requirements with
                representative model directions. Each row keeps the
                configuration logic on the left and the linked model visuals on
                the right.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-300/25 bg-cyan-300/10 px-5 py-4 text-sm leading-6 text-cyan-100 lg:max-w-sm">
              <span className="font-semibold text-cyan-200">
                Reading logic:
              </span>{" "}
              choose the track first, then review the two linked model
              directions beside it.
            </div>
          </div>

          <div className="mt-8 space-y-3 md:space-y-4">
            {fingertipTracks.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.title}
                  className="group grid gap-3 rounded-[1.75rem] border border-slate-700/80 bg-slate-900/70 p-3 shadow-sm transition duration-300 hover:border-cyan-300 hover:bg-slate-900 hover:shadow-[0_0_0_1px_rgba(103,232,249,0.25),0_24px_55px_-35px_rgba(34,211,238,0.8)] md:p-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch"
                >
                  <div className="rounded-[1.35rem] border border-slate-700 bg-slate-950/60 p-4 transition duration-300 group-hover:border-cyan-300/80 group-hover:bg-cyan-950/35 md:p-5">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                        <Icon />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                          {track.eyebrow}
                        </p>
                        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-white md:text-2xl">
                          {track.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {track.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {track.keyInfo.map((item) => (
                        <div
                          key={item}
                          className="rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-semibold leading-5 text-slate-200 transition duration-300 group-hover:border-cyan-300/45 group-hover:bg-cyan-400/10 group-hover:text-cyan-50"
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveSpec({
                          title: track.title,
                          rows: track.specRows,
                        })
                      }
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200 bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-950 shadow-sm shadow-cyan-950/10 transition hover:border-cyan-100 hover:bg-cyan-300 hover:text-slate-950 hover:shadow-cyan-300/30"
                    >
                      View Full Technical Specifications
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {track.visuals.map((visual, index) => (
                      <div
                        key={visual.model}
                        className="overflow-hidden rounded-[1.35rem] border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/35 shadow-inner transition duration-300 group-hover:border-cyan-300 group-hover:from-cyan-950/60 group-hover:via-slate-950 group-hover:to-cyan-900/45 group-hover:shadow-[0_0_0_1px_rgba(103,232,249,0.16),0_18px_40px_-28px_rgba(34,211,238,0.9)]"
                      >
                        <div className="flex h-36 items-center justify-center p-4 md:h-full md:min-h-[175px]">
                          {visual.imageSrc ? (
                            <div className="relative h-full min-h-[140px] w-full overflow-hidden rounded-[1.2rem] border border-slate-700 bg-white transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300">
                              <Image
                                src={visual.imageSrc}
                                alt={`${visual.model} fingertip pulse oximeter product image`}
                                fill
                                sizes="(min-width: 1024px) 260px, 50vw"
                                className="object-contain p-3"
                              />
                              <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-[11px] font-semibold text-slate-950 shadow-md">
                                {index + 1}
                              </div>
                            </div>
                          ) : (
                            <div
                              className={`relative rounded-[1.6rem] border border-slate-600 bg-slate-950 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300 group-hover:shadow-cyan-300/50 ${
                                visual.shape === "wide"
                                  ? "h-24 w-40"
                                  : "h-28 w-32"
                              }`}
                            >
                              <div className="absolute left-1/2 top-3 h-9 w-20 -translate-x-1/2 rounded-lg bg-cyan-300/30" />
                              <div className="absolute bottom-4 left-1/2 h-2.5 w-14 -translate-x-1/2 rounded-full bg-white/20" />
                              <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300 text-[11px] font-semibold text-slate-950 shadow-md">
                                {index + 1}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="border-t border-slate-700 bg-slate-950/80 px-4 py-3">
                          <h4 className="text-base font-semibold tracking-tight text-white">
                            {visual.model}
                          </h4>
                          <p className="mt-0.5 text-xs leading-5 text-slate-300">
                            {visual.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fingertip selector */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-3xl">
          <Badge tone="slate">Selection Matrix</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Fingertip Pulse Oximeter Configuration Selector
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-600">
            Use this matrix to narrow down fingertip pulse oximeter
            configurations by target user, display, BLE option, voice prompt,
            signal technology and project scenario.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "All",
            "Adult",
            "YM models",
            "YH handheld",
            "TFT Display",
            "High-Volume",
            "AAA Battery",
            "IP22",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1040px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-950 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  <th className="p-5">Configuration</th>
                  <th className="p-5">Best For</th>
                  <th className="p-5">Display</th>
                  <th className="p-5">Power Supply</th>
                  <th className="p-5">Operating Mode</th>
                  <th className="p-5">Source Basis</th>
                  <th className="p-5">Project Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {fingertipSelector.map((row) => (
                  <tr
                    key={row.configuration}
                    className="transition hover:bg-cyan-50/40"
                  >
                    <td className="p-5 font-semibold text-slate-950">
                      {row.configuration}
                    </td>
                    <td className="p-5 leading-6">{row.bestFor}</td>
                    <td className="p-5 font-medium">{row.display}</td>
                    <td className="p-5">{row.ble}</td>
                    <td className="p-5">{row.voice}</td>
                    <td className="p-5 leading-6 text-cyan-800">
                      {row.signal}
                    </td>
                    <td className="p-5 leading-6">{row.projectFit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Handheld spotlight */}
      <section
        id="handheld-section"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-10 lg:px-8"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge tone="emerald">Professional Product Line</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Handheld Pulse Oximeter Models
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              YH01 and YH02 belong to one focused handheld SpO2 family. The
              selection difference is mainly display, BLE and battery
              configuration.
            </p>
          </div>
        </div>

        <article className="mt-8 grid gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:border-emerald-300 hover:shadow-lg md:p-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="rounded-[1.35rem] border border-slate-100 bg-emerald-50/45 p-4 md:p-5">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <PulseIcon />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Handheld SpO2 family
                </p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
                  YH01 / YH02 Configuration Pair
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A compact two-model handheld line for customers that need
                  external-probe SpO2 form factors rather than a broad fingertip
                  product pool.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Display: YH01 LED / YH02 TFT",
                "Power: 4 x AA 1.5V batteries",
                "Interface: DB9 for SpO2 sensor",
                "Protection level: IPX2",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-100 bg-white px-3 py-2 text-xs font-semibold leading-5 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {handheldModels.map((model, index) => (
              <div
                key={model.model}
                className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 shadow-inner transition duration-300 hover:border-emerald-300 hover:shadow-md"
              >
                <div className="flex h-36 items-center justify-center p-4 md:h-full md:min-h-[175px]">
                  <div className="relative h-full min-h-[140px] w-full overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-emerald-300">
                    <Image
                      src={model.imageSrc}
                      alt={`${model.model} handheld pulse oximeter product image`}
                      fill
                      sizes="(min-width: 1024px) 260px, 50vw"
                      className="object-contain p-3"
                    />
                    <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-emerald-700 shadow-md">
                      H{index + 1}
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-100 bg-white/95 px-4 py-3">
                  <h4 className="text-base font-semibold tracking-tight text-slate-950">
                    {model.model}
                  </h4>
                  <p className="mt-0.5 text-xs leading-5 text-slate-600">
                    Display / battery / DB9 probe interface
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Technology crosslink */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-cyan-100 bg-cyan-50/70 p-6 shadow-sm md:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <Badge tone="cyan">Technology Note</Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Product selection here, signal platform details in Technology
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              This page is kept focused on pulse oximeter product forms, model
              directions and fingertip configuration selection. Detailed content
              about PI 0.1% low-perfusion, performance under motion conditions
              and SpO₂ performance across diverse skin pigmentation is
              organized under the PulseMatrix™ Signal Platform.
            </p>
          </div>
          <Link
            href="/technology"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-slate-800"
          >
            Explore PulseMatrix™ Signal Platform
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10 lg:p-12">
          <div className="max-w-3xl">
            <Badge tone="slate">FAQ Reference</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Sourcing Questions for Pulse Oximeter Product Selection
            </h2>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Practical answers for product managers and private label medical
              device brands comparing pulse oximeter configurations.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.75rem] border border-slate-100 bg-slate-50 p-6"
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-[2.5rem] bg-cyan-700 p-8 text-center text-white shadow-xl shadow-cyan-900/10 md:p-14">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Need pulse oximeter product specifications or configuration support?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-cyan-50">
            Contact YimiLife to discuss fingertip pulse oximeter configurations,
            handheld SpO2 model directions, source-confirmed specifications and product
            selection for your target market.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-semibold text-cyan-800 transition hover:bg-cyan-50"
            >
              Contact YimiLife
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Discuss Pulse Oximeter Configuration
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
