import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Manufacturing Support | YimiLife",
  description:
    "YimiLife supports overseas healthcare brands and distributors with medical device OEM/ODM project review, private-label configuration, sampling coordination and controlled production planning.",
  alternates: {
    canonical: "https://www.yimilife.com/oem-odm",
  },
  openGraph: {
    title: "Medical Device OEM/ODM Manufacturing Support | YimiLife",
    description:
      "OEM/ODM manufacturing support for pulse oximeter, blood pressure monitor and wearable monitoring device projects.",
    url: "https://www.yimilife.com/oem-odm",
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

function Badge({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
      {children}
    </p>
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
    <div>
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

const heroFitItems = [
  "Pulse Oximeter",
  "Blood Pressure Monitor",
  "Wearable Monitoring Devices",
  "Private-label and configuration review",
  "Sampling and production coordination",
];

const buyerTypes = [
  {
    title: "Healthcare Brands",
    text: "For brands with a defined market direction that need mature product platforms, private-label setup and manufacturing coordination.",
  },
  {
    title: "Distributors & Importers",
    text: "For channel teams comparing product categories, model scope, packaging needs, document expectations and supply stability.",
  },
  {
    title: "Product Teams",
    text: "For teams reviewing samples, configuration options, Bluetooth or software workflow and production feasibility before scaling a project.",
  },
];

const productPlatforms = [
  {
    title: "Pulse Oximeter",
    href: "/products/pulse-oximeter",
    image: "/homepage/P2/selected/product-pulse-oximeter.jpg",
    imageAlt: "YimiLife pulse oximeter product platform",
    tag: "Core product line",
    text: "Fingertip and handheld pulse oximeter platforms for private-label and configuration-based OEM/ODM projects.",
  },
  {
    title: "Blood Pressure Monitor",
    href: "/products/blood-pressure-monitor",
    image: "/homepage/P2/selected/product-blood-pressure-monitor.jpg",
    imageAlt: "YimiLife upper-arm blood pressure monitor platform",
    tag: "Mature platform",
    text: "Upper-arm blood pressure monitor platform for branding, packaging and selected configuration discussions.",
  },
  {
    title: "Wearable Monitoring Devices",
    href: "/products/wearable-monitoring",
    image: "/homepage/P2/selected/product-wearable-monitoring.jpg",
    imageAlt: "YimiLife wearable monitoring device project review",
    tag: "Project review first",
    text: "Wearable monitoring device projects can be reviewed by product maturity, configuration scope, software workflow and production feasibility.",
  },
];

const scopeRows = [
  {
    scope: "Branding",
    review: "Logo, color direction, product label and basic brand adaptation.",
  },
  {
    scope: "Packaging",
    review: "Retail box, carton, label and IFU coordination.",
  },
  {
    scope: "Product configuration",
    review:
      "Model selection, accessory set, language, display or feature options where applicable.",
  },
  {
    scope: "Connectivity",
    review:
      "Bluetooth data workflow, protocol or SDK discussion for selected projects.",
  },
  {
    scope: "Platform refinement",
    review:
      "Housing, UI behavior or mechanical detail review when project volume and feasibility support it.",
  },
  {
    scope: "Documentation coordination",
    review:
      "Target-market document scope and project-specific responsibility review.",
  },
];

const workflow = [
  {
    title: "Project brief",
    text: "Share target market, product category, quantity, customization scope, document expectations and timeline.",
  },
  {
    title: "Platform fit review",
    text: "YimiLife reviews which product platform may fit the project and which requirements need further evaluation.",
  },
  {
    title: "Scope confirmation",
    text: "Confirm model, configuration, packaging, labeling, documentation scope, sample plan and responsibility boundary.",
  },
  {
    title: "Sample and documentation coordination",
    text: "Prepare samples for customer review and coordinate required product information for the agreed project scope.",
  },
  {
    title: "Production planning",
    text: "After sample and order conditions are confirmed, proceed with pilot run, packaging confirmation, production verification and delivery planning.",
  },
];

const qualityMetrics = [
  {
    value: "ISO 13485",
    label: "quality-system manufacturing workflow",
  },
  {
    value: "2,000㎡",
    label: "manufacturing site",
  },
  {
    value: "300,000",
    label: "units monthly capacity",
  },
  {
    value: "25+",
    label: "FDA / MDR / NMPA certified models",
  },
];

const requirementItems = [
  "Target market or sales region",
  "Product category",
  "Expected quantity",
  "Branding and packaging scope",
  "Required accessories",
  "Bluetooth / SDK / app needs, if any",
  "Certification or documentation expectations",
  "Target timeline",
];

const faqs = [
  {
    question: "What types of OEM/ODM medical device projects does YimiLife support?",
    answer:
      "YimiLife reviews OEM/ODM projects across pulse oximeters, blood pressure monitors and wearable monitoring devices according to product platform maturity, customization scope and project feasibility.",
  },
  {
    question: "Can YimiLife support private-label customization?",
    answer:
      "Private-label topics can include logo, packaging, labels, IFU coordination, accessory combinations and model configuration. The confirmed scope depends on the selected product platform and project agreement.",
  },
  {
    question: "Can YimiLife support Bluetooth or SDK integration?",
    answer:
      "Selected projects can be reviewed for Bluetooth data workflow, protocol requirements and SDK-level coordination. Scope depends on product platform, software requirements and feasibility.",
  },
  {
    question: "What should buyers prepare before starting an OEM/ODM project?",
    answer:
      "Useful inputs include target market, product category, expected quantity, customization scope, documentation expectations and target timeline.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.yimilife.com/oem-odm#service",
      name: "Medical Device OEM/ODM Manufacturing Support",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "Medical Device OEM/ODM Manufacturing",
      areaServed: "Global",
      description:
        "YimiLife supports overseas healthcare brands and distributors with product platform review, private-label configuration, sampling coordination and controlled production planning for selected medical device projects.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/oem-odm#faq",
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

export default function OemOdmPage() {
  return (
    <main className="min-h-screen bg-canvas text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-slate-950 text-white">
        <div className="site-container grid gap-10 py-16 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-brand-200/30 bg-brand-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-100">
              Medical device OEM/ODM manufacturer
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              OEM/ODM Manufacturing Support for Medical Device Brands
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              YimiLife supports overseas healthcare brands and distributors with
              product platform review, private-label configuration, sampling
              coordination and controlled production planning for selected
              medical device projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#product-platforms"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Product Platforms
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-100">
              Project fit review
            </p>
            <div className="mt-5 grid gap-3">
              {heroFitItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.07] p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-100" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-14 lg:py-20">
        <SectionIntro
          eyebrow="Who we support"
          title="Built for buyers comparing supplier fit."
          text="OEM/ODM work starts with the right match between buyer type, product platform and project scope. YimiLife keeps this evaluation clear before deeper customization discussions."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {buyerTypes.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="product-platforms" className="bg-white">
        <div className="site-container py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
            <SectionIntro
              eyebrow="Product platforms"
              title="Start from the right product maturity."
              text="The fastest path to a controlled B2B project is choosing the correct platform before discussing customization depth."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {productPlatforms.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 280px, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                      {item.tag}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="oem-odm-scope" className="site-container py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <SectionIntro
            eyebrow="OEM/ODM scope"
            title="Clear scope before deep customization."
            text="YimiLife reviews project needs by scope instead of overpromising every request. Final responsibilities should be confirmed by product platform, selected model and project agreement."
          />

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-3 p-4 md:hidden">
              {scopeRows.map((row) => (
                <article key={row.scope} className="rounded-lg bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-950">{row.scope}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{row.review}</p>
                </article>
              ))}
            </div>
            <table className="hidden w-full border-collapse text-left text-sm md:table">
              <thead className="bg-brand-600 text-white">
                <tr>
                  <th className="w-[34%] px-5 py-4 font-semibold">Scope</th>
                  <th className="px-5 py-4 font-semibold">What can be reviewed</th>
                </tr>
              </thead>
              <tbody>
                {scopeRows.map((row) => (
                  <tr key={row.scope} className="border-t border-slate-200">
                    <th className="bg-slate-50 px-5 py-4 align-top font-semibold text-slate-950">
                      {row.scope}
                    </th>
                    <td className="px-5 py-4 leading-7 text-slate-600">{row.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="project-workflow" className="bg-slate-950 text-white">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-[0.35fr_0.65fr] lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-brand-200/30 bg-brand-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-100">
              Project workflow
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              From early evaluation to production planning.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
              A structured workflow makes risk visible early: product fit,
              customization depth, documentation expectations, sample
              confirmation and production controls.
            </p>
          </div>

          <div className="grid gap-4">
            {workflow.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-5 sm:grid-cols-[auto_1fr]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-300 text-sm font-semibold text-slate-950">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <SectionIntro
            eyebrow="Quality & delivery support"
            title="Manufacturing trust should support the project decision."
            text="This page only summarizes the manufacturing baseline. Detailed quality-system workflow, verification items and target-market responsibilities should be reviewed by selected model and project agreement."
          />

          <div>
            <div className="grid gap-px overflow-hidden rounded-lg bg-slate-200 md:grid-cols-4">
              {qualityMetrics.map((item) => (
                <div key={item.value} className="bg-white p-5">
                  <p className="font-mono text-2xl font-semibold text-slate-950">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Certification status, documentation scope and target-market
              responsibilities should be confirmed by selected model and project
              agreement.
            </p>
            <Link
              href="/manufacturing-quality"
              className="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 transition hover:text-brand-800"
            >
              View Manufacturing & Quality
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-[0.35fr_0.65fr] lg:py-20">
          <SectionIntro
            eyebrow="Requirement checklist"
            title="What to prepare before contacting us."
            text="A concise project brief helps YimiLife review platform fit, customization scope and next discussion path faster."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {requirementItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                <span className="text-sm font-medium leading-6 text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-14 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Badge>OEM/ODM FAQ</Badge>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-4xl">
            Questions buyers usually clarify first.
          </h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-brand-700 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container pb-16 lg:pb-24">
        <div className="rounded-lg bg-brand-700 px-6 py-12 text-white md:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Ready to review your OEM/ODM project?
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-brand-50 md:text-base">
              Share your product category, target market, customization scope and
              expected timeline. YimiLife will review platform fit, project
              feasibility and the next discussion path.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50 lg:mt-0"
          >
            Submit Project Requirements
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
