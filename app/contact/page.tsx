import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device OEM Inquiry | Contact YimiLife",
  description:
    "Submit a medical device OEM inquiry to YimiLife for pulse oximeter OEM/ODM, blood pressure monitor OEM manufacturing, private label customization and healthcare device manufacturing support.",
  alternates: {
    canonical: "https://www.yimilife.com/contact",
  },
  openGraph: {
    title: "Medical Device OEM Inquiry | Contact YimiLife",
    description:
      "Contact YimiLife for medical device OEM/ODM inquiries, private label pulse oximeter projects, blood pressure monitor customization and healthcare device manufacturing support.",
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
        d="M20 6L9 17l-5-5"
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
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l5 5v13H7V3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 3v5h5M10 13h6M10 17h6M10 9h1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FactoryIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 21h18M5 21V9l5 3V9l5 3V5h4v16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17h1M12 17h1M16 17h1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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

const contactEmail = "info@yimilife.com";

const projectTypes = [
  "Pulse Oximeter OEM/ODM Inquiry",
  "Blood Pressure Monitor OEM Manufacturing Inquiry",
  "Private Label Medical Device Project",
  "Custom Home Healthcare Device Manufacturing",
  "Bluetooth SDK / UI Customization",
  "Wearable Health Monitoring Device OEM",
  "Other Medical Device OEM/ODM Project",
];

const requirementChecklist = [
  "Target market and sales region",
  "Product category and application scenario",
  "Pulse oximeter or blood pressure monitor model preference",
  "Expected monthly or annual quantity",
  "Logo, packaging and private label requirements",
  "UI interface, Bluetooth SDK or data integration needs",
  "Regulatory, certification or documentation expectations",
  "Target price range and project timeline",
];

const contactReasons = [
  {
    title: "Medical Device OEM Inquiry Review",
    text: "Share your product category, target market, expected quantity, customization needs and project timeline for OEM/ODM feasibility evaluation.",
    icon: DocumentIcon,
  },
  {
    title: "Private Label and Custom Manufacturing Discussion",
    text: "Discuss private label medical device manufacturing, logo, packaging, labeling, UI adaptation and custom home healthcare device requirements.",
    icon: FactoryIcon,
  },
  {
    title: "Quality, Documentation and Connected Device Support",
    text: "Discuss ISO 13485 manufacturing support, production verification, batch traceability, Bluetooth SDK support and quality documentation needs.",
    icon: ShieldIcon,
  },
];

const relatedPages = [
  {
    title: "Private Label Medical Device Manufacturing",
    href: "/oem-odm",
    text: "Review YimiLife’s OEM/ODM service workflow for private label medical device manufacturing projects.",
    cta: "View OEM/ODM services",
  },
  {
    title: "Pulse Oximeter OEM/ODM Manufacturer",
    href: "/products/pulse-oximeter",
    text: "Explore fingertip pulse oximeter OEM/ODM manufacturing, private label customization, Bluetooth SDK support and production verification.",
    cta: "View pulse oximeter OEM/ODM",
  },
  {
    title: "Blood Pressure Monitor OEM Manufacturer",
    href: "/products/blood-pressure-monitor",
    text: "Review blood pressure monitor OEM manufacturing, private label customization and digital upper arm blood pressure monitor solutions.",
    cta: "View blood pressure monitor OEM",
  },
  {
    title: "ISO 13485 Medical Device Manufacturer",
    href: "/quality",
    text: "Review YimiLife’s ISO 13485 quality system, certified model experience, production verification and batch traceability.",
    cta: "View quality system",
  },
];

const faqs = [
  {
    question: "What information should I provide for a medical device OEM inquiry?",
    answer:
      "Please share your target market, product category, expected quantity, customization requirements, regulatory expectations, target price range and project timeline so YimiLife can evaluate OEM/ODM feasibility.",
  },
  {
    question: "Can I request a private label pulse oximeter project?",
    answer:
      "Yes. YimiLife supports private label pulse oximeter projects, including logo, color, packaging, labeling, selected UI interface adaptation, Bluetooth data integration and manufacturing documentation based on project requirements.",
  },
  {
    question: "Can I request blood pressure monitor OEM manufacturing?",
    answer:
      "Yes. YimiLife supports blood pressure monitor OEM manufacturing and private label customization for digital upper arm blood pressure monitor projects serving home healthcare markets.",
  },
  {
    question: "Can YimiLife support Bluetooth SDK or UI customization?",
    answer:
      "Yes. For selected OEM/ODM projects, YimiLife can support Bluetooth SDK discussion, data transmission requirements, UI interface adaptation and connected health integration based on project scope.",
  },
  {
    question: "Does YimiLife support international OEM/ODM customers?",
    answer:
      "Yes. YimiLife supports international medical brands, importers, private label customers, e-commerce healthcare brands, regional distributors and connected health companies.",
  },
  {
    question: "How fast can YimiLife evaluate my OEM/ODM project?",
    answer:
      "A clear project brief helps YimiLife review the product type, customization depth, documentation needs, production expectations and next-step feasibility more efficiently.",
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
      email: contactEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shenzhen",
        addressCountry: "CN",
      },
      description:
        "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer in Shenzhen, China, supporting pulse oximeter OEM/ODM, blood pressure monitor OEM manufacturing and private label home healthcare monitoring projects.",
      contactPoint: {
        "@type": "ContactPoint",
        email: contactEmail,
        contactType: "OEM/ODM project inquiry",
        areaServed: "Global",
        availableLanguage: ["English", "Chinese"],
      },
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.yimilife.com/contact#webpage",
      url: "https://www.yimilife.com/contact",
      name: "Medical Device OEM Inquiry | Contact YimiLife",
      description:
        "Contact YimiLife for medical device OEM/ODM inquiries, private label pulse oximeter projects and blood pressure monitor OEM manufacturing support.",
      isPartOf: {
        "@id": "https://www.yimilife.com/#website",
      },
      about: {
        "@id": "https://www.yimilife.com/#organization",
      },
      publisher: {
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
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.yimilife.com/contact#breadcrumb",
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
          name: "Contact",
          item: "https://www.yimilife.com/contact",
        },
      ],
    },
  ],
};

export default function ContactPage() {
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              Contact YimiLife
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Start Your Medical Device OEM Inquiry
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Contact YimiLife for medical device OEM/ODM inquiries, including{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>
              ,{" "}
              <Link
                href="/products/blood-pressure-monitor"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                blood pressure monitor OEM manufacturing
              </Link>{" "}
              and{" "}
              <Link
                href="/oem-odm"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                private label medical device manufacturing
              </Link>
              .
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Share your target market, product category, customization needs,
              expected quantity, regulatory expectations and project timeline.
              Our team will review your medical device OEM inquiry for
              feasibility, engineering adaptation, private label customization,
              manufacturing and quality documentation.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Email OEM/ODM Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </a>

              <Link
                href="/oem-odm"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Private Label Manufacturing Workflow
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Contact focus
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "Medical Device OEM Inquiry Review",
                "Private Label Pulse Oximeter Projects",
                "Blood Pressure Monitor OEM Manufacturing",
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
                Email OEM/ODM Requirements
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 inline-flex items-center text-sm font-semibold text-cyan-200 underline underline-offset-4"
              >
                {contactEmail}
              </a>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Send your OEM/ODM project brief by email. Our team will review
                your product category, target market, private label requirements,
                customization needs and production expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Project inquiry
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Submit your medical device OEM inquiry
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            Use the form to share your initial OEM/ODM project brief. The more
            clearly you describe your target market, product category,
            customization scope and expected quantity, the faster our team can
            evaluate feasibility, documentation needs and next steps.
          </p>

          <div className="mt-8 grid gap-5">
            {contactReasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
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

        <form
          action={`mailto:${contactEmail}`}
          method="post"
          encType="text/plain"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-slate-900"
              >
                Full Name *
              </label>
              <input
                id="fullName"
                name="Full Name"
                required
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-900"
              >
                Work Email *
              </label>
              <input
                id="email"
                name="Work Email"
                required
                type="email"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="text-sm font-semibold text-slate-900"
              >
                Company *
              </label>
              <input
                id="company"
                name="Company"
                required
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
                placeholder="Company name"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="text-sm font-semibold text-slate-900"
              >
                Country / Region
              </label>
              <input
                id="country"
                name="Country / Region"
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
                placeholder="Target region"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="text-sm font-semibold text-slate-900"
              >
                Project Type *
              </label>
              <select
                id="projectType"
                name="Project Type"
                required
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
              >
                <option value="">Select project type</option>
                {projectTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="text-sm font-semibold text-slate-900"
              >
                Expected Quantity
              </label>
              <input
                id="quantity"
                name="Expected Quantity"
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
                placeholder="Monthly / annual estimate"
              />
            </div>

            <div>
              <label
                htmlFor="targetMarket"
                className="text-sm font-semibold text-slate-900"
              >
                Target Market
              </label>
              <input
                id="targetMarket"
                name="Target Market"
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
                placeholder="US / EU / China / other"
              />
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="text-sm font-semibold text-slate-900"
              >
                Project Timeline
              </label>
              <input
                id="timeline"
                name="Project Timeline"
                type="text"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
                placeholder="Expected launch or delivery schedule"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="customization"
              className="text-sm font-semibold text-slate-900"
            >
              Customization Requirements
            </label>
            <textarea
              id="customization"
              name="Customization Requirements"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
              placeholder="Logo, packaging, UI, Bluetooth SDK, app integration, ID/mechanical changes, labeling, documentation needs, etc."
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-slate-900"
            >
              Project Message *
            </label>
            <textarea
              id="message"
              name="Project Message"
              required
              rows={6}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:bg-white"
              placeholder="Tell us about your medical device OEM inquiry, product goals, current stage, target market and key concerns."
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            Send Medical Device OEM Inquiry
            <ArrowIcon className="ml-2 h-4 w-4" />
          </button>
        </form>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Requirement checklist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              What to prepare for an OEM/ODM project review
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              A clear project brief helps our team evaluate OEM/ODM feasibility,
              customization depth, regulatory needs, production planning,
              quality documentation and cost expectations more efficiently.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {requirementChecklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <CheckIcon className="h-4 w-4 text-cyan-700" />
                <span className="text-sm font-medium text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Related pages
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Explore YimiLife before submitting your OEM/ODM inquiry
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {relatedPages.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {item.text}
              </p>
              <div className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-700">
                {item.cta}
                <ArrowIcon className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Medical device OEM inquiry FAQ
            </h2>
          </div>

          <div className="grid gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
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
          <MailIcon className="mx-auto h-10 w-10 text-cyan-300" />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to discuss your medical device OEM/ODM project?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Send your medical device OEM inquiry to YimiLife and our team will
            review the product category, customization needs, target market,
            production expectations, documentation needs and next steps.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Email OEM/ODM Requirements
              <ArrowIcon className="ml-2 h-4 w-4" />
            </a>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Product Categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
