"use client";

import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";

import { OemOdmProcessFlow } from "./oem-odm-process-flow";

type ProjectPath = "oem" | "odm";
type DeviceKind = "oximeter" | "bp-monitor" | "wearable";

type FaqItem = {
  question: string;
  answer: string;
};

type DemoModel = {
  id: string;
  name: string;
  category: string;
  kind: DeviceKind;
  colors: Array<{
    name: string;
    hex: string;
  }>;
};

type IconProps = {
  className?: string;
};

const demoModels: DemoModel[] = [
  {
    id: "demo-model-a",
    name: "Demo Model A",
    category: "Pulse Oximeter",
    kind: "oximeter",
    colors: [
      { name: "Demo White", hex: "#f8fafc" },
      { name: "Demo Aqua", hex: "#55c5c8" },
      { name: "Demo Navy", hex: "#31526f" },
    ],
  },
  {
    id: "demo-model-b",
    name: "Demo Model B",
    category: "Blood Pressure Monitor",
    kind: "bp-monitor",
    colors: [
      { name: "Demo White", hex: "#f8fafc" },
      { name: "Demo Silver", hex: "#cbd5e1" },
      { name: "Demo Graphite", hex: "#475569" },
    ],
  },
  {
    id: "demo-model-c",
    name: "Demo Model C",
    category: "Wearable Monitoring Device",
    kind: "wearable",
    colors: [
      { name: "Demo Graphite", hex: "#334155" },
      { name: "Demo Ocean", hex: "#087f85" },
      { name: "Demo Rose", hex: "#c77d86" },
    ],
  },
];

const oemReviewOptions = [
  {
    id: "packaging",
    label: "Packaging",
    text: "Retail box or shipping-packaging requirements.",
  },
  {
    id: "label-ifu",
    label: "Label and IFU",
    text: "Label, language or instruction-for-use requirements.",
  },
  {
    id: "accessories",
    label: "Accessories",
    text: "Available accessory combinations for the selected model.",
  },
  {
    id: "product-options",
    label: "Available Product Options",
    text: "Existing model options that require confirmation.",
  },
] as const;

const odmServices = [
  {
    title: "Appearance and Color Design",
    text: "New industrial-design directions and colors outside an existing model range.",
  },
  {
    title: "Structural Modification",
    text: "Housing, internal structure, button layout and assembly-related changes.",
  },
  {
    title: "Function and Interface Development",
    text: "New functions, custom display or UI, Bluetooth workflow or SDK requirements.",
  },
  {
    title: "Tooling",
    text: "Project review and planning for new tooling or modifications to existing tooling.",
  },
  {
    title: "Engineering Prototype",
    text: "Prototype stages used for engineering review and further project confirmation.",
  },
  {
    title: "Packaging Development",
    text: "Packaging development and confirmation for a new product project.",
  },
] as const;

const inputClassName =
  "site-control w-full border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
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

function CheckIcon({ className = "h-5 w-5" }: IconProps) {
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

function UploadIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16V4m0 0L7 9m5-5 5 5M5 15v4h14v-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function PathIcon({ path }: { path: ProjectPath }) {
  return path === "oem" ? (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16v11H4V7Zm3-3h10v3H7V4Zm1 7h8m-8 3h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  ) : (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m14 5 5 5M4 20l4.2-1 10.3-10.3-3.2-3.2L5 15.8 4 20Zm8-12 4 4M5 5h5M5 9h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Badge({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${
        inverse
          ? "border-brand-200/30 bg-brand-300/10 text-brand-100"
          : "border-brand-200 bg-brand-50 text-brand-700"
      }`}
    >
      {children}
    </span>
  );
}

function SectionIntro({
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
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
        {text}
      </p>
    </div>
  );
}

function LogoSlot({
  logoPreview,
  x,
  y,
  width,
  height,
}: {
  logoPreview: string | null;
  x: number;
  y: number;
  width: number;
  height: number;
}) {
  if (logoPreview) {
    return (
      <image
        href={logoPreview}
        x={x}
        y={y}
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid meet"
      />
    );
  }

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="8"
        fill="none"
        stroke="#94a3b8"
        strokeDasharray="5 5"
      />
      <text
        x={x + width / 2}
        y={y + height / 2 + 4}
        textAnchor="middle"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fill="#64748b"
      >
        YOUR LOGO
      </text>
    </g>
  );
}

function DevicePreview({
  model,
  color,
  logoPreview,
}: {
  model: DemoModel;
  color: { name: string; hex: string };
  logoPreview: string | null;
}) {
  return (
    <svg
      viewBox="0 0 520 420"
      role="img"
      aria-label={`${model.name} interactive demo preview in ${color.name}`}
      className="h-auto w-full"
    >
      <defs>
        <filter id="device-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="12"
            floodColor="#0f172a"
            floodOpacity="0.18"
          />
        </filter>
      </defs>

      <ellipse cx="260" cy="382" rx="150" ry="18" fill="#cbd5e1" opacity="0.55" />

      {model.kind === "oximeter" ? (
        <g transform="rotate(-7 260 210)" filter="url(#device-shadow)">
          <rect
            x="110"
            y="28"
            width="300"
            height="350"
            rx="92"
            fill={color.hex}
            stroke="#94a3b8"
            strokeWidth="3"
          />
          <path d="M115 245h290" stroke="#94a3b8" strokeWidth="3" />
          <rect x="165" y="76" width="190" height="132" rx="22" fill="#0f172a" />
          <path
            d="M195 142h55l18-32 22 63 18-31h22"
            stroke="#67e8f9"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="260" cy="334" r="14" fill="#ffffff" stroke="#94a3b8" strokeWidth="3" />
          <LogoSlot logoPreview={logoPreview} x={175} y={268} width={170} height={42} />
        </g>
      ) : null}

      {model.kind === "bp-monitor" ? (
        <g filter="url(#device-shadow)">
          <rect
            x="102"
            y="52"
            width="316"
            height="300"
            rx="54"
            fill={color.hex}
            stroke="#94a3b8"
            strokeWidth="3"
          />
          <rect x="154" y="90" width="212" height="126" rx="18" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <path d="M184 142h70m-70 28h112m-112 28h86" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
          <circle cx="260" cy="301" r="30" fill="#ffffff" stroke="#94a3b8" strokeWidth="3" />
          <circle cx="260" cy="301" r="11" fill="#08a8ae" />
          <path d="M418 264c42 22 45 70 18 96" stroke="#64748b" strokeWidth="8" fill="none" strokeLinecap="round" />
          <LogoSlot logoPreview={logoPreview} x={174} y={236} width={172} height={38} />
        </g>
      ) : null}

      {model.kind === "wearable" ? (
        <g filter="url(#device-shadow)">
          <rect x="218" y="12" width="84" height="396" rx="42" fill={color.hex} stroke="#475569" strokeWidth="3" />
          <rect x="140" y="94" width="240" height="232" rx="68" fill={color.hex} stroke="#334155" strokeWidth="4" />
          <rect x="166" y="120" width="188" height="152" rx="42" fill="#0f172a" />
          <path
            d="M194 194h44l15-25 20 48 18-30h36"
            stroke="#67e8f9"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <LogoSlot logoPreview={logoPreview} x={188} y={278} width={144} height={31} />
        </g>
      ) : null}
    </svg>
  );
}

export function OemOdmExperience({ faqs }: { faqs: readonly FaqItem[] }) {
  const [selectedPath, setSelectedPath] = useState<ProjectPath | null>(null);
  const [selectedModelId, setSelectedModelId] = useState(demoModels[0].id);
  const [selectedColorName, setSelectedColorName] = useState(demoModels[0].colors[0].name);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoName, setLogoName] = useState("");
  const [logoError, setLogoError] = useState("");
  const [selectedOemNeeds, setSelectedOemNeeds] = useState<string[]>([]);
  const [selectedOdmNeeds, setSelectedOdmNeeds] = useState<string[]>([]);
  const [oemSubmitted, setOemSubmitted] = useState(false);
  const [odmSubmitted, setOdmSubmitted] = useState(false);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const oemFormRef = useRef<HTMLFormElement>(null);

  const selectedModel = useMemo(
    () => demoModels.find((model) => model.id === selectedModelId) ?? demoModels[0],
    [selectedModelId],
  );

  const selectedColor = useMemo(
    () =>
      selectedModel.colors.find((color) => color.name === selectedColorName) ??
      selectedModel.colors[0],
    [selectedColorName, selectedModel],
  );

  function choosePath(path: ProjectPath) {
    setSelectedPath(path);
    document
      .getElementById(path === "oem" ? "oem-configurator" : "odm-services")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleModelChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextModel =
      demoModels.find((model) => model.id === event.target.value) ?? demoModels[0];
    setSelectedModelId(nextModel.id);
    setSelectedColorName(nextModel.colors[0].name);
    setOemSubmitted(false);
  }

  function handleLogoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setLogoError("");
    setOemSubmitted(false);

    if (!file) {
      return;
    }

    if (!["image/png", "image/jpeg"].includes(file.type)) {
      setLogoError("Please upload a PNG, JPG or JPEG file.");
      event.target.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setLogoError("The logo file must be 2 MB or smaller.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setLogoPreview(reader.result);
        setLogoName(file.name);
      }
    };
    reader.readAsDataURL(file);
  }

  function removeLogo() {
    setLogoPreview(null);
    setLogoName("");
    setLogoError("");
    setOemSubmitted(false);
    if (logoInputRef.current) {
      logoInputRef.current.value = "";
    }
  }

  function toggleOemNeed(id: string) {
    setSelectedOemNeeds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
    setOemSubmitted(false);
  }

  function toggleOdmNeed(title: string) {
    setSelectedOdmNeeds((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
    setOdmSubmitted(false);
  }

  function submitOemDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!logoPreview) {
      setLogoError("Upload one logo before requesting a brand preview.");
      logoInputRef.current?.closest("section")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    setOemSubmitted(true);
  }

  function resetOemDemo() {
    oemFormRef.current?.reset();
    setSelectedOemNeeds([]);
    removeLogo();
    setOemSubmitted(false);
  }

  function submitOdmDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOdmSubmitted(true);
  }

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-100">
        <div className="site-container py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Medical Device OEM / ODM</Badge>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Choose Your OEM or ODM Path
            </h1>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 lg:grid-cols-2">
            {(
              [
                {
                  path: "oem" as const,
                  eyebrow: "OEM",
                  title: "Customize an Existing Product",
                  scope: "Model · Color · Logo · Packaging",
                },
                {
                  path: "odm" as const,
                  eyebrow: "ODM",
                  title: "Develop or Modify a Product",
                  scope: "Appearance · Structure · Function · Tooling",
                },
              ] as const
            ).map((item) => {
              const isSelected = selectedPath === item.path;
              return (
                <button
                  key={item.path}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => choosePath(item.path)}
                  className={`group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-xl border bg-white p-5 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 md:p-6 ${
                    isSelected
                      ? "border-brand-500 shadow-sm ring-1 ring-brand-100"
                      : "border-slate-200 hover:border-brand-300 hover:shadow-sm"
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <PathIcon path={item.path} />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                      {isSelected ? <CheckIcon className="h-4 w-4" /> : null}
                      {item.eyebrow}
                    </span>
                    <span className="mt-1.5 block text-xl font-semibold text-slate-950 md:text-2xl">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-slate-500 md:text-sm">
                      {item.scope}
                    </span>
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-brand-700 transition group-hover:border-brand-200 group-hover:bg-brand-50">
                    <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="oem-configurator" className="scroll-mt-20 bg-white">
        <div className="site-container py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <SectionIntro
              eyebrow="OEM fast customization"
              title="Select a model and preview the brand direction."
              text="The instant preview only responds to the selected demo model, an available demo color and one uploaded logo. Other OEM requirements are recorded for later confirmation."
            />
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
              <strong>Interactive demo:</strong> model names, colors and device
              illustrations are placeholders. They will be replaced after the
              confirmed model list and product images are provided.
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div className="grid gap-5">
              <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  01 Select a model
                </p>
                <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-900">
                  Demo model
                  <select value={selectedModel.id} onChange={handleModelChange} className={inputClassName}>
                    {demoModels.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name} · {model.category}
                      </option>
                    ))}
                  </select>
                </label>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  The final control will list confirmed model names or model codes
                  directly, without a separate product-platform step.
                </p>
              </section>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  02 Choose an available color
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {selectedModel.colors.map((color) => {
                    const isSelected = selectedColor.name === color.name;
                    return (
                      <button
                        key={color.name}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelectedColorName(color.name);
                          setOemSubmitted(false);
                        }}
                        className={`site-control flex items-center gap-2 border px-3 py-2 text-left text-xs font-semibold transition ${
                          isSelected
                            ? "border-brand-500 bg-brand-50 text-brand-800"
                            : "border-slate-200 bg-white text-slate-700 hover:border-brand-200"
                        }`}
                      >
                        <span
                          className="h-5 w-5 shrink-0 rounded-full border border-slate-300 shadow-inner"
                          style={{ backgroundColor: color.hex }}
                          aria-hidden="true"
                        />
                        <span className="min-w-0 flex-1">{color.name}</span>
                        {isSelected ? <CheckIcon className="h-4 w-4 shrink-0" /> : null}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Only confirmed existing colors will be shown for each real model.
                </p>
              </section>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  03 Upload one logo
                </p>
                <input
                  ref={logoInputRef}
                  id="oem-logo"
                  name="Logo File"
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleLogoChange}
                  className="sr-only"
                />
                <label
                  htmlFor="oem-logo"
                  className="mt-4 flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-4 py-5 text-center transition hover:border-brand-400 hover:bg-brand-50/50"
                >
                  <UploadIcon className="h-6 w-6 text-brand-700" />
                  <span className="mt-2 text-sm font-semibold text-slate-900">
                    {logoPreview ? "Replace logo file" : "Choose logo file"}
                  </span>
                  <span className="mt-1 text-xs text-slate-500">
                    PNG, JPG or JPEG · maximum 2 MB
                  </span>
                </label>
                {logoPreview ? (
                  <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-brand-200 bg-brand-50 px-3 py-2">
                    <span className="min-w-0 truncate text-xs font-medium text-brand-800">
                      {logoName}
                    </span>
                    <button
                      type="button"
                      onClick={removeLogo}
                      className="text-xs font-semibold text-brand-800 underline decoration-brand-300 underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>
                ) : null}
                {logoError ? (
                  <p className="mt-3 text-xs font-medium text-red-700" role="alert">
                    {logoError}
                  </p>
                ) : null}
              </section>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Other OEM needs
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  These selections are recorded for review and do not change the product image.
                </p>
                <div className="mt-4 grid gap-3">
                  {oemReviewOptions.map((item) => {
                    const isSelected = selectedOemNeeds.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => toggleOemNeed(item.id)}
                        className={`rounded-xl border p-3 text-left transition ${
                          isSelected
                            ? "border-brand-500 bg-brand-50"
                            : "border-slate-200 bg-white hover:border-brand-200"
                        }`}
                      >
                        <span className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                              isSelected
                                ? "border-brand-600 bg-brand-600 text-white"
                                : "border-slate-300 bg-white text-transparent"
                            }`}
                          >
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-slate-950">{item.label}</span>
                            <span className="mt-1 block text-xs leading-5 text-slate-500">
                              {item.text} Requires confirmation.
                            </span>
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
                <button type="button" onClick={() => choosePath("odm")} className="text-link mt-4">
                  Need a new appearance or function? View ODM Services
                  <ArrowIcon className="ml-2 h-4 w-4" />
                </button>
              </section>
            </div>

            <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Instant product preview
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">{selectedModel.name}</h3>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Demo illustration
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 p-3 sm:p-6">
                <DevicePreview model={selectedModel} color={selectedColor} logoPreview={logoPreview} />
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {[
                  ["Model", selectedModel.name],
                  ["Color", selectedColor.name],
                  ["Logo", logoPreview ? "Uploaded" : "Not uploaded"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-slate-50 px-3 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-900">{value}</p>
                  </div>
                ))}
              </div>

              {selectedOemNeeds.length > 0 ? (
                <div className="mt-4 rounded-lg border border-slate-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Recorded for review
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedOemNeeds.map((id) => {
                      const option = oemReviewOptions.find((item) => item.id === id);
                      return (
                        <span key={id} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-800">
                          {option?.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              <p className="mt-4 text-xs leading-5 text-slate-500">
                This browser preview is for early communication. Final logo placement,
                color, material and production feasibility require artwork and sample confirmation.
              </p>
            </aside>
          </div>

          <div className="mt-12 grid gap-8 border-t border-slate-200 pt-12 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Request your preview</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Leave a qualified contact for the next review.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                YimiLife will first review the selected model, logo and recorded OEM
                requirements, then contact the buyer by email to confirm the inputs
                needed for product and packaging preview materials.
              </p>
              <p className="mt-4 rounded-lg bg-slate-100 p-3 text-xs leading-5 text-slate-600">
                Demo mode: this form only demonstrates validation and the success state.
                No information or file is sent or stored.
              </p>
            </div>

            <form
              ref={oemFormRef}
              onSubmit={submitOemDemo}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-900">
                  Contact Name *
                  <input required name="Contact Name" type="text" className={inputClassName} placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-900">
                  Company Name *
                  <input required name="Company Name" type="text" className={inputClassName} placeholder="Company name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-900">
                  Work Email *
                  <input required name="Work Email" type="email" className={inputClassName} placeholder="name@company.com" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-900">
                  Country or Target Market
                  <input name="Country or Target Market" type="text" className={inputClassName} placeholder="Country or sales region" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-900 sm:col-span-2">
                  Expected Quantity
                  <input name="Expected Quantity" type="text" className={inputClassName} placeholder="Monthly or annual estimate" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-900 sm:col-span-2">
                  Additional Requirements
                  <textarea
                    name="Additional Requirements"
                    rows={4}
                    className={inputClassName}
                    placeholder="Add packaging, label, IFU, accessory or other project details."
                  />
                </label>
              </div>

              <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600">
                <input required type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#087f85]" />
                <span>
                  I agree that YimiLife may contact me about this project and use
                  the uploaded logo only to prepare requested preview materials.
                </span>
              </label>

              <button type="submit" className="button-primary mt-6 w-full sm:w-auto">
                Request My Brand Preview
                <ArrowIcon className="ml-2 h-4 w-4" />
              </button>

              {oemSubmitted ? (
                <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50 p-4" role="status">
                  <div className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-brand-800">Demo request received</p>
                      <p className="mt-1 text-xs leading-5 text-brand-800">
                        The success state is working. No data was sent. Selected:
                        {` ${selectedModel.name}, ${selectedColor.name}, ${logoName || "no logo"}.`}
                      </p>
                      <button
                        type="button"
                        onClick={resetOemDemo}
                        className="mt-3 text-xs font-semibold text-brand-800 underline underline-offset-4"
                      >
                        Start another demo request
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section id="odm-services" className="scroll-mt-20 border-y border-slate-200 bg-slate-100">
        <div className="site-container py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <Badge>ODM development services</Badge>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-4xl">
                Bring an engineering project into a focused feasibility review.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                YimiLife accepts ODM projects involving appearance design,
                structural modification, function development, tooling and
                engineering prototypes. Project results depend on the confirmed
                scope and feasibility review.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {odmServices.map((service, index) => {
                const isSelected = selectedOdmNeeds.includes(service.title);
                return (
                  <button
                    key={service.title}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleOdmNeed(service.title)}
                    className={`flex h-full gap-4 rounded-xl border bg-white p-5 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                      isSelected
                        ? "border-brand-500 bg-brand-50 shadow-sm"
                        : "border-slate-200 hover:border-brand-300 hover:shadow-sm"
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-xs font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="flex items-start gap-2 text-base font-semibold text-slate-950">
                        {service.title}
                        {isSelected ? <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" /> : null}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-slate-600">{service.text}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-t border-slate-200 pt-12 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">Development brief</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Submit the inputs needed for the first discussion.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Selected services are added to the brief. The form demonstrates
                the intended content and confirmation state; it does not send data.
              </p>
              {selectedOdmNeeds.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedOdmNeeds.map((item) => (
                    <span key={item} className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-800">
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <form onSubmit={submitOdmDemo} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm md:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Work Email *
                  <input required name="ODM Work Email" type="email" className={inputClassName} placeholder="name@company.com" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Company Name *
                  <input required name="ODM Company Name" type="text" className={inputClassName} placeholder="Company name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Product Category *
                  <select required name="ODM Product Category" className={inputClassName} defaultValue="">
                    <option value="" disabled>Select product category</option>
                    <option>Pulse Oximeter</option>
                    <option>Blood Pressure Monitor</option>
                    <option>Wearable Monitoring Devices</option>
                    <option>Other Medical Device Project</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Target Market
                  <input name="ODM Target Market" type="text" className={inputClassName} placeholder="Country or sales region" />
                </label>
                <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
                  Project Brief *
                  <textarea
                    required
                    name="ODM Project Brief"
                    rows={5}
                    className={inputClassName}
                    placeholder="Describe the appearance, structure, function, tooling or prototype requirement."
                  />
                </label>
              </div>
              <button type="submit" className="button-primary mt-6 w-full sm:w-auto">
                Submit Your Development Brief
                <ArrowIcon className="ml-2 h-4 w-4" />
              </button>
              {odmSubmitted ? (
                <div className="mt-5 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800" role="status">
                  <strong>Demo brief received.</strong> The feasibility-review
                  success state is working; no information was sent or stored.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <OemOdmProcessFlow
        activePath={selectedPath ?? undefined}
        onPathChange={setSelectedPath}
      />

      <section className="bg-white">
        <div className="site-container py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <Badge>OEM and ODM FAQ</Badge>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-4xl">
                Questions buyers usually clarify before submitting.
              </h2>
            </div>
            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-2xl font-normal text-brand-700 transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-16 lg:py-20">
        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              {selectedPath ? `${selectedPath.toUpperCase()} next step` : "Choose your next step"}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {selectedPath === "oem"
                ? "Review your OEM model and brand preview."
                : selectedPath === "odm"
                  ? "Share the brief for your ODM project."
                  : "Start with the path that matches your project."}
            </h2>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            {selectedPath !== "odm" ? (
              <button type="button" onClick={() => choosePath("oem")} className="button-primary">
                Request My Brand Preview
              </button>
            ) : null}
            {selectedPath !== "oem" ? (
              <button type="button" onClick={() => choosePath("odm")} className="button-secondary">
                Submit an ODM Brief
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
