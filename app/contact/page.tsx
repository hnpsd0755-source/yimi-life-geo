import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Submit OEM/ODM Project Requirements | Contact YimiLife",
  description:
    "Submit OEM/ODM project requirements to YimiLife for pulse oximeter, blood pressure monitor, private-label customization, Bluetooth integration and medical device manufacturing feasibility review.",
  alternates: {
    canonical: "https://www.yimilife.com/contact",
  },
  openGraph: {
    title: "Submit OEM/ODM Project Requirements | Contact YimiLife",
    description:
      "Start a medical device OEM/ODM inquiry with YimiLife. Share product category, target market, customization scope, quantity, documentation expectations and timeline.",
    url: "https://www.yimilife.com/contact",
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

function MailIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const contactEmail = "info@yimilife.com";

const projectTypes = [
  "Pulse oximeter private-label project",
  "Pulse oximeter Bluetooth / SDK project",
  "Blood pressure monitor OEM project",
  "Packaging, label or IFU customization",
  "Mold update or product platform refinement",
  "Development-stage wearable monitoring discussion",
  "Early supplier feasibility evaluation",
];

const readinessCards = [
  {
    title: "Already have a product direction",
    text: "Share the product category, model preference, target market, quantity and customization requirements.",
  },
  {
    title: "Still evaluating supplier fit",
    text: "Tell us your target market, customer profile and decision concerns. We can help clarify suitable product platforms and risk points.",
  },
  {
    title: "Need connected device support",
    text: "Describe Bluetooth, SDK, data format, app workflow or integration requirements so feasibility can be reviewed early.",
  },
];

const checklist = [
  "Company type and target sales region",
  "Product category and application scenario",
  "Expected monthly or annual quantity",
  "Private-label, packaging, label and IFU scope",
  "Bluetooth, SDK or app integration needs",
  "Certification or documentation expectations",
  "Target price range and launch timeline",
  "Main concern: supplier verification, samples, quality, cost or schedule",
];

const relatedPages = [
  {
    title: "OEM/ODM Services",
    href: "/oem-odm",
    text: "Review customization levels, project workflow and OEM/ODM scope before submitting requirements.",
  },
  {
    title: "Pulse Oximeters",
    href: "/products/pulse-oximeter",
    text: "Explore mature pulse oximeter platforms for private-label and connected SpO2 projects.",
  },
  {
    title: "Blood Pressure Monitors",
    href: "/products/blood-pressure-monitor",
    text: "Review blood pressure monitor project directions for home healthcare brands.",
  },
  {
    title: "Quality & Compliance",
    href: "/about#quality-compliance",
    text: "Understand ISO 13485-based manufacturing execution, traceability and document support.",
  },
];

const faqs = [
  {
    question: "Can I contact YimiLife before my project scope is final?",
    answer:
      "Yes. Early feasibility discussion is welcome. A rough target market, product category, quantity range and customization idea are enough to start a practical review.",
  },
  {
    question: "What happens after I submit requirements?",
    answer:
      "The YimiLife team reviews product fit, customization depth, target-market expectations, documentation needs and sample or next-step feasibility.",
  },
  {
    question: "Can YimiLife help decide between product platforms?",
    answer:
      "Yes. For pulse oximeters and blood pressure monitors, YimiLife can help compare mature platform directions against your market, cost, configuration and documentation needs.",
  },
  {
    question: "Can I ask about wearable monitoring?",
    answer:
      "Yes, but wearable monitoring is handled as a development-stage project direction or engineering sample discussion, not as a mature ready-for-sale product claim.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.yimilife.com/contact#webpage",
      url: "https://www.yimilife.com/contact",
      name: "Submit OEM/ODM Project Requirements",
      description:
        "Contact page for submitting medical device OEM/ODM project requirements to YimiLife.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@id": "https://www.yimilife.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/contact#faq",
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.52fr_0.48fr] lg:px-8 lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              Project start form
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Submit OEM/ODM project requirements.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              Tell YimiLife what you want to build, customize or verify. We will review product fit, customization boundaries, engineering feasibility, documentation expectations and manufacturing next steps for your medical device OEM/ODM project.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Email Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/oem-odm"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Review OEM/ODM Scope
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Best inquiry format
            </p>
            <div className="mt-5 grid gap-3">
              {[
                "Product category and target market",
                "Expected quantity and launch timeline",
                "Customization level and documentation needs",
                "Bluetooth / SDK / app integration expectations",
                "Main decision concern or supplier verification question",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-3xl bg-white/[0.07] p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Inquiry stage
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              You can contact us at different project stages.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              The form is designed for B2B project evaluation, not retail customer support. Clear project context helps the team respond with useful next steps.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {readinessCards.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.38fr_0.62fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Project form
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Share the information needed for feasibility review.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-700">
              This temporary form opens your email client with the project details. A direct backend form can be added later when the website content and sales workflow are finalized.
            </p>
          </div>

          <form
            action={`mailto:${contactEmail}`}
            method="post"
            encType="text/plain"
            className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-900">
                Full Name *
                <input
                  name="Full Name"
                  required
                  type="text"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-500"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-900">
                Work Email *
                <input
                  name="Work Email"
                  required
                  type="email"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-500"
                  placeholder="name@company.com"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-900">
                Company *
                <input
                  name="Company"
                  required
                  type="text"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-500"
                  placeholder="Company name"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-900">
                Country / Region
                <input
                  name="Country / Region"
                  type="text"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-500"
                  placeholder="Target sales region"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-900">
                Project Type *
                <select
                  name="Project Type"
                  required
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-500"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-900">
                Expected Quantity
                <input
                  name="Expected Quantity"
                  type="text"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-500"
                  placeholder="Monthly or annual estimate"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-900">
              Customization Scope
              <textarea
                name="Customization Scope"
                rows={4}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-500"
                placeholder="Logo, packaging, labels, IFU, UI, Bluetooth, SDK, mold update, documentation, sample requirements..."
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-900">
              Project Message *
              <textarea
                name="Project Message"
                required
                rows={6}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-cyan-500"
                placeholder="Describe target market, use case, current stage, timeline, certification expectations and main concerns."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Send Project Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Preparation checklist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Useful details to include.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="flex gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                <span className="text-sm font-medium leading-6 text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.38fr_0.62fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Before you submit
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Review the most relevant pages.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {relatedPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Project inquiry questions.
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <MailIcon className="mx-auto h-10 w-10 text-cyan-300" />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Prefer email?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300">
            Send your project brief directly to YimiLife. Include target market, product category, expected quantity, customization needs and any certification or documentation expectations.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {contactEmail}
            <ArrowIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
