"use client";

import Image from "next/image";
import {
  type FormEvent,
  type ReactNode,
  useRef,
  useState,
} from "react";

import { OemOdmProcessFlow } from "./oem-odm-process-flow";
import { ProductPreviewDemo } from "./product-preview-demo/product-preview-demo";

type ProjectPath = "oem" | "odm";

type FaqItem = {
  question: string;
  answer: string;
};

type IconProps = {
  className?: string;
};

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

export function OemOdmExperience({ faqs }: { faqs: readonly FaqItem[] }) {
  const [selectedPath, setSelectedPath] = useState<ProjectPath | null>(null);
  const [selectedColorName, setSelectedColorName] = useState("Aqua");
  const [logoName, setLogoName] = useState("");
  const [oemConfiguratorKey, setOemConfiguratorKey] = useState(0);
  const [selectedOemNeeds, setSelectedOemNeeds] = useState<string[]>([]);
  const [selectedOdmNeeds, setSelectedOdmNeeds] = useState<string[]>([]);
  const [oemSubmitted, setOemSubmitted] = useState(false);
  const [odmSubmitted, setOdmSubmitted] = useState(false);
  const oemFormRef = useRef<HTMLFormElement>(null);

  function choosePath(path: ProjectPath) {
    setSelectedPath(path);
    document
      .getElementById(path === "oem" ? "oem-configurator" : "odm-services")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handlePreviewColorChange(colorName: string) {
    setSelectedColorName(colorName);
    setOemSubmitted(false);
  }

  function handlePreviewLogoChange(fileName: string | null) {
    setLogoName(fileName ?? "");
    setOemSubmitted(false);
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
    if (!logoName) {
      return;
    }
    setOemSubmitted(true);
  }

  function resetOemDemo() {
    oemFormRef.current?.reset();
    setSelectedOemNeeds([]);
    setSelectedColorName("Aqua");
    setLogoName("");
    setOemConfiguratorKey((current) => current + 1);
    setOemSubmitted(false);
  }

  function submitOdmDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOdmSubmitted(true);
  }

  const selectedOemNeedLabels = oemReviewOptions
    .filter((item) => selectedOemNeeds.includes(item.id))
    .map((item) => item.label);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f3f7f8]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(8,168,174,0.10),transparent_32%),radial-gradient(circle_at_88%_88%,rgba(148,163,184,0.18),transparent_34%)]"
          aria-hidden="true"
        />
        <div className="site-container relative py-14 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="max-w-2xl">
              <Badge>Medical Device OEM / ODM</Badge>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 md:text-5xl lg:text-[3.45rem]">
                Build Your Medical Device Project with YimiLife.
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                Start from an existing YimiLife model for branding and packaging,
                or bring a new appearance, structure or function into an ODM
                feasibility review.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {(
              [
                {
                  path: "oem" as const,
                  label: "OEM",
                  title: "Existing product",
                },
                {
                  path: "odm" as const,
                  label: "ODM",
                  title: "New or modified product",
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
                  className={`group inline-flex min-h-14 items-center gap-3 rounded-full border px-4 py-3 text-left shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:px-5 ${
                    isSelected
                      ? "border-brand-700 bg-brand-700 text-white"
                      : "border-slate-200 bg-white/90 text-slate-900 hover:border-brand-300 hover:bg-white"
                  }`}
                >
                  <span
                    className={`text-[0.7rem] font-bold uppercase tracking-[0.14em] ${
                      isSelected ? "text-brand-50" : "text-brand-700"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`h-5 w-px ${isSelected ? "bg-white/30" : "bg-slate-200"}`}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold">{item.title}</span>
                  <span className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full border border-current/15 transition group-hover:translate-x-0.5">
                    {isSelected ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <ArrowIcon className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
              );
            })}
              </div>
            </div>

            <div className="relative aspect-[11/7] overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <Image
                src="/homepage/P2/selected/home-hero-product-family.jpg"
                alt="YimiLife medical device product family for OEM and ODM project evaluation"
                fill
                preload
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-white/10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      <ProductPreviewDemo
        key={oemConfiguratorKey}
        embedded
        sectionId="oem-configurator"
        onColorChange={handlePreviewColorChange}
        onLogoChange={handlePreviewLogoChange}
      >
        <div className="border-t border-slate-200 bg-white">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-xs font-semibold text-white">
                    4
                  </span>
                  <h3 className="text-base font-semibold text-slate-950">
                    Other OEM needs
                  </h3>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Optional
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Add the items that should be included in the follow-up review.
                </p>
              </div>
              <button
                type="button"
                onClick={() => choosePath("odm")}
                className="text-link shrink-0"
              >
                Need product development? View ODM Services
                <ArrowIcon className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {oemReviewOptions.map((item) => {
                const isSelected = selectedOemNeeds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleOemNeed(item.id)}
                    className={`rounded-lg border p-3 text-left transition ${
                      isSelected
                        ? "border-brand-500 bg-brand-50"
                        : "border-slate-200 bg-white hover:border-brand-200"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                          isSelected
                            ? "border-brand-600 bg-brand-600 text-white"
                            : "border-slate-300 bg-white text-transparent"
                        }`}
                      >
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-semibold text-slate-800">
                        {item.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50/80 p-6 md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                Your OEM configuration
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                  Pulse Oximeter · Demo Model
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                  {selectedColorName}
                </span>
                <span
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    logoName
                      ? "border-brand-200 bg-brand-50 text-brand-800"
                      : "border-slate-200 bg-white text-slate-500"
                  }`}
                >
                  {logoName ? "Logo added" : "Logo needed"}
                </span>
                {(selectedOemNeedLabels.length > 0
                  ? selectedOemNeedLabels
                  : ["No additional needs selected"]
                ).map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {!logoName ? (
              <div
                className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600"
                role="status"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
                  3
                </span>
                Upload your logo to continue to the contact details.
              </div>
            ) : null}

            <div className={logoName ? "mt-8 block" : "hidden"} aria-hidden={!logoName}>
              <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Ready to request
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                    Where should we send your preview?
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Share your contact details and YimiLife will review the selected
                    configuration before preparing the next preview step.
                  </p>
                  <p className="mt-4 text-xs leading-5 text-slate-500">
                    Demo only — no information is sent or stored.
                  </p>
                </div>

                <form
                  ref={oemFormRef}
                  onSubmit={submitOemDemo}
                  className="rounded-xl border border-slate-200 bg-white p-5 md:p-6"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-slate-900 sm:col-span-2">
                      Work Email *
                      <input
                        required
                        name="Work Email"
                        type="email"
                        className={inputClassName}
                        placeholder="name@company.com"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-slate-900">
                      Company Name *
                      <input
                        required
                        name="Company Name"
                        type="text"
                        className={inputClassName}
                        placeholder="Company name"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-slate-900">
                      Contact Name *
                      <input
                        required
                        name="Contact Name"
                        type="text"
                        className={inputClassName}
                        placeholder="Your name"
                      />
                    </label>
                  </div>

                  <details className="mt-5 rounded-lg border border-slate-200 bg-slate-50">
                    <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-700">
                      Add project details (optional)
                    </summary>
                    <div className="grid gap-4 border-t border-slate-200 p-4 sm:grid-cols-2">
                      <label className="grid gap-2 text-sm font-semibold text-slate-900">
                        Country or Target Market
                        <input
                          name="Country or Target Market"
                          type="text"
                          className={inputClassName}
                          placeholder="Country or sales region"
                        />
                      </label>
                      <label className="grid gap-2 text-sm font-semibold text-slate-900">
                        Expected Quantity
                        <input
                          name="Expected Quantity"
                          type="text"
                          className={inputClassName}
                          placeholder="Monthly or annual estimate"
                        />
                      </label>
                      <label className="grid gap-2 text-sm font-semibold text-slate-900 sm:col-span-2">
                        Additional Requirements
                        <textarea
                          name="Additional Requirements"
                          rows={3}
                          className={inputClassName}
                          placeholder="Add other project details."
                        />
                      </label>
                    </div>
                  </details>

                  <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600">
                    <input
                      required
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#087f85]"
                    />
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
                    <div
                      className="mt-5 rounded-xl border border-brand-200 bg-brand-50 p-4"
                      role="status"
                    >
                      <div className="flex gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-brand-800">
                            Demo request received
                          </p>
                          <p className="mt-1 text-xs leading-5 text-brand-800">
                            No data was sent. Selected:
                            {` Pulse Oximeter demo, ${selectedColorName}, ${logoName}.`}
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
          </div>
        </div>
      </ProductPreviewDemo>

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
