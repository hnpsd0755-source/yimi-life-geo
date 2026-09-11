"use client";

import { useState } from "react";
import styles from "./oem-odm-process-flow.module.css";

export type OemOdmProjectPath = "oem" | "odm";
type HeadingLevel = "h1" | "h2";
type StageIconName = "scope" | "artwork" | "sample" | "production";

type ProcessStep = {
  title: string;
  input: string;
  confirmation: string;
  icon: StageIconName;
};

type ProcessPath = {
  tabLabel: string;
  basis: string;
  steps: ProcessStep[];
};

const processPaths = {
  oem: {
    tabLabel: "OEM · Existing Product",
    basis: "Existing YimiLife product model",
    steps: [
      {
        title: "Product & Scope",
        input: "Model, target market, quantity and customization scope",
        confirmation: "Confirmed model and OEM scope",
        icon: "scope",
      },
      {
        title: "Artwork & Configuration",
        input: "Logo, color, packaging, label/IFU and accessories",
        confirmation: "Approved artwork and configuration",
        icon: "artwork",
      },
      {
        title: "Visual Proof & Sample",
        input: "Visual-proof and sample feedback",
        confirmation: "Approved production reference",
        icon: "sample",
      },
      {
        title: "Production & Delivery",
        input: "Order, packaging and shipping requirements",
        confirmation: "Confirmed production and delivery plan",
        icon: "production",
      },
    ],
  },
  odm: {
    tabLabel: "ODM · New or Modified Product",
    basis: "New or modified appearance, structure or function",
    steps: [
      {
        title: "Development Brief",
        input: "Product concept, target market, appearance, structure and function",
        confirmation: "Agreed development brief",
        icon: "scope",
      },
      {
        title: "Feasibility & Proposal",
        input: "Reference files, constraints, quantity and target timeline",
        confirmation: "Agreed development scope",
        icon: "artwork",
      },
      {
        title: "Engineering Sample",
        input: "Feedback on appearance, structure, function and sample",
        confirmation: "Approved sample direction",
        icon: "sample",
      },
      {
        title: "Pilot & Production Preparation",
        input: "Confirmed technical requirements and project approvals",
        confirmation: "Tooling if required, pilot and production plan",
        icon: "production",
      },
    ],
  },
} satisfies Record<OemOdmProjectPath, ProcessPath>;

function StageIcon({ name }: { name: StageIconName }) {
  const commonProps = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  } as const;

  if (name === "scope") {
    return (
      <svg {...commonProps}>
        <path d="M8 5.5h8M8 9.5h8M8 13.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 3.5h10a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (name === "artwork") {
    return (
      <svg {...commonProps}>
        <path d="m5 17 1.2-4.4L15.8 3l5.2 5.2-9.6 9.6L7 19l-2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m13.8 5 5.2 5.2M7 19l4.4-1.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "sample") {
    return (
      <svg {...commonProps}>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12v8.4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 20V9l5 3V8l5 3V4h6v16H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 16h2M14 16h2M18 8h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function OemOdmProcessFlow({
  headingLevel = "h2",
  activePath: controlledPath,
  onPathChange,
}: {
  headingLevel?: HeadingLevel;
  activePath?: OemOdmProjectPath;
  onPathChange?: (path: OemOdmProjectPath) => void;
}) {
  const [internalPath, setInternalPath] = useState<OemOdmProjectPath>("oem");
  const activePath = controlledPath ?? internalPath;
  const Heading = headingLevel;
  const activeContent = processPaths[activePath];

  function selectPath(path: OemOdmProjectPath) {
    setInternalPath(path);
    onPathChange?.(path);
  }

  return (
    <section className="bg-slate-50" aria-labelledby="project-flow-title">
      <div className="site-container py-16 lg:py-20">
        <div className="max-w-5xl">
          <div>
            <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-800">
              OEM / ODM Process
            </span>
            <Heading
              id="project-flow-title"
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl"
            >
              OEM &amp; ODM Project Workflow
            </Heading>
          </div>

          <div
            className="mt-7 grid max-w-2xl grid-cols-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm"
            role="tablist"
            aria-label="Choose OEM or ODM project flow"
          >
            {(Object.keys(processPaths) as OemOdmProjectPath[]).map((path) => (
              <button
                key={path}
                id={`${path}-process-tab`}
                type="button"
                role="tab"
                aria-selected={activePath === path}
                aria-controls="project-flow-panel"
                onClick={() => selectPath(path)}
                className={`site-control min-h-12 px-4 py-2.5 text-left text-xs font-semibold transition sm:text-sm ${
                  activePath === path
                    ? "bg-brand-700 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {processPaths[path].tabLabel}
              </button>
            ))}
          </div>
        </div>

        <div
          key={activePath}
          id="project-flow-panel"
          role="tabpanel"
          aria-labelledby={`${activePath}-process-tab`}
          className={`${styles.panel} mt-10`}
        >
          <div className="flex flex-wrap items-center gap-3 border-y border-slate-200 py-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              Project type
            </span>
            <span className="text-sm font-medium text-slate-700">{activeContent.basis}</span>
          </div>

          <div className="relative mt-8">
            <div
              className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700 lg:block"
              aria-hidden="true"
            />

            <ol className="grid gap-7 lg:grid-cols-4 lg:gap-5">
              {activeContent.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 lg:flex lg:min-w-0 lg:flex-col lg:gap-0"
                >
                  {index < activeContent.steps.length - 1 ? (
                    <span
                      className="absolute bottom-[-1.75rem] left-[1.45rem] top-12 w-px bg-gradient-to-b from-brand-400 to-brand-200 lg:hidden"
                      aria-hidden="true"
                    />
                  ) : null}

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white font-mono text-sm font-semibold text-brand-800 shadow-sm lg:mx-auto">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className={`${styles["depth-card"]} min-w-0 lg:mt-5 lg:h-full`}>
                    <article
                      className={`${styles["card-surface"]} flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 md:p-6`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                          Stage {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                          <StageIcon name={step.icon} />
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-semibold leading-7 tracking-tight text-slate-950">
                        {step.title}
                      </h3>

                      <dl className="mt-6 grid gap-5 border-t border-slate-200 pt-5">
                        <div>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-400">
                            Your input
                          </dt>
                          <dd className="mt-2 text-sm leading-6 text-slate-600">{step.input}</dd>
                        </div>
                        <div className="mt-auto rounded-xl border border-brand-100 bg-brand-50 p-3.5">
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-700">
                            Stage output
                          </dt>
                          <dd className="mt-2 text-sm font-medium leading-6 text-slate-800">
                            {step.confirmation}
                          </dd>
                        </div>
                      </dl>
                    </article>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
