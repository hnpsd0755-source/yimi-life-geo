import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Manufacturing & Quality | YimiLife",
  description:
    "Review YimiLife manufacturing operations, ISO 13485 quality-system support, product verification and model-specific document scope.",
  alternates: {
    canonical: "https://www.yimilife.com/manufacturing-quality",
  },
  openGraph: {
    title: "Manufacturing & Quality | YimiLife",
    description:
      "Review YimiLife manufacturing operations, ISO 13485 quality-system support, product verification and model-specific document scope.",
    url: "https://www.yimilife.com/manufacturing-quality",
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
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
      {children}
    </span>
  );
}

const qualityCards = [
  {
    title: "ISO 13485 Quality Management System",
    text: "YimiLife operates under an ISO 13485 quality management system for medical device project execution.",
    note: "Certificate scope and validity are reviewed according to the current company documentation.",
  },
  {
    title: "Manufacturing Operations in Shenzhen",
    text: "YimiLife supports in-house production and project execution in Shenzhen. Manufacturing planning is reviewed according to product category, project scope and order requirements.",
    note: "Production planning should be confirmed by selected product, project scope and order requirements.",
  },
  {
    title: "Product-Specific Production Verification",
    text: "Production verification requirements are reviewed according to the selected product and defined production procedure.",
    note: "Verification scope should be reviewed before quotation, sampling or production planning.",
  },
  {
    title: "Certified Model Experience & Document Scope",
    text: "YimiLife has certified-model experience across FDA, MDR and NMPA pathways. Document availability depends on the selected model, configuration and target market.",
    note: "Document scope is handled by model, configuration and target-market requirements.",
  },
];

export default function ManufacturingQualityPage() {
  return (
    <main className="min-h-screen bg-[#f7fafb] text-slate-900">
      <section className="border-b border-slate-200 bg-slate-950">
        <div className="site-container py-20 text-white lg:py-24">
          <div className="max-w-4xl">
            <Badge>Manufacturing & Quality</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Manufacturing & Quality
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              Review the manufacturing, quality-system and product-verification
              information relevant to YimiLife medical device projects.
            </p>
          </div>
        </div>
      </section>

      <section className="site-container py-16 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {qualityCards.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#08A8AE] text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{item.text}</p>
                </div>
              </div>
              <p className="mt-6 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-500">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-container pb-16 lg:pb-24">
        <div className="rounded-2xl bg-[#075e63] p-8 text-white shadow-xl md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Need Manufacturing or Document Information?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-cyan-50">
                Share the selected product, target market and project requirements
                so YimiLife can review the relevant manufacturing and document scope.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#075e63] transition hover:bg-cyan-50"
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
