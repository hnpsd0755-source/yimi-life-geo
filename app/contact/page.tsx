import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Yimi Life | Start a Medical Device OEM/ODM Project",
  description:
    "Contact Yimi Life to discuss medical device OEM/ODM projects for pulse oximeters, blood pressure monitors and wearable health monitoring devices with ISO 13485 manufacturing support.",
  alternates: {
    canonical: "https://www.yimilife.com/contact",
  },
  openGraph: {
    title: "Contact Yimi Life | Start a Medical Device OEM/ODM Project",
    description:
      "Submit OEM/ODM project requirements for pulse oximeters, blood pressure monitors, wearable health monitoring devices, Bluetooth SDK integration, UI customization and ISO 13485 manufacturing support.",
    url: "https://www.yimilife.com/contact",
    siteName: "Yimi Life",
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
  "Pulse Oximeter OEM/ODM",
  "Blood Pressure Monitor OEM/ODM",
  "Wearable Health Monitoring",
  "Bluetooth SDK / App Integration",
  "Private Label Customization",
  "Other Medical Device OEM/ODM Project",
];

const requirementChecklist = [
  "Target market and sales region",
  "Product category and application scenario",
  "Expected annual or monthly quantity",
  "Logo, packaging and labeling requirements",
  "UI interface and interaction requirements",
  "Bluetooth SDK or data integration needs",
  "Regulatory or certification expectations",
  "Target price range and project timeline",
];

const contactReasons = [
  {
    title: "OEM/ODM Project Evaluation",
    text: "Share product type, target market, quantity, customization needs and timeline for project feasibility review.",
    icon: DocumentIcon,
  },
  {
    title: "Manufacturing and Quality Discussion",
    text: "Discuss ISO 13485 manufacturing support, production verification, batch traceability and quality documentation.",
    icon: FactoryIcon,
  },
  {
    title: "Technical and Connected Device Requirements",
    text: "Discuss PulseMatrix™ SpO2 technology, Bluetooth SDK support, UI customization and app integration requirements.",
    icon: ShieldIcon,
  },
];

const faqs = [
  {
    question: "What information should I provide when contacting Yimi Life?",
    answer:
      "Please share target market, product category, expected quantity, customization requirements, regulatory expectations, target price range and project timeline.",
  },
  {
    question: "Can I contact Yimi Life for private label customization?",
    answer:
      "Yes. Yimi Life supports private label customization, including logo, color, packaging, labeling, selected functional configuration and UI interface adaptation based on project requirements.",
  },
  {
    question: "Can Yimi Life support Bluetooth SDK or connected health projects?",
    answer:
      "Yes. For selected OEM/ODM projects, Yimi Life can support Bluetooth data transmission, SDK-level discussion, UI customization and connected health integration requirements.",
  },
  {
    question: "What product categories can Yimi Life support?",
    answer:
      "Yimi Life supports pulse oximeters, blood pressure monitors and wearable health monitoring devices for home healthcare, private label and connected monitoring applications.",
  },
  {
    question: "Does Yimi Life support international customers?",
    answer:
      "Yes. Yimi Life supports international medical brands, importers, private label customers, remote patient monitoring platforms and digital health companies.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.yimilife.com/#organization",
      name: "Shenzhen Yimi Life Technology Co., Ltd.",
      alternateName: "Yimi Life",
      url: "https://www.yimilife.com/",
      email: contactEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shenzhen",
        addressCountry: "CN",
      },
      description:
        "Yimi Life is an ISO 13485 medical device OEM/ODM manufacturer in Shenzhen, China, supporting pulse oximeters, blood pressure monitors and wearable health monitoring devices.",
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
      name: "Contact Yimi Life",
      description:
        "Contact page for Yimi Life medical device OEM/ODM project inquiries.",
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
              Contact Yimi Life
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Start Your Medical Device OEM/ODM Project
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Contact Yimi Life to discuss OEM/ODM projects for{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                pulse oximeters
              </Link>
              ,{" "}
              <Link
                href="/products/blood-pressure-monitor"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                blood pressure monitors
              </Link>{" "}
              and{" "}
              <Link
                href="/products/wearable-monitoring"
                className="font-semibold text-cyan-200 underline underline-offset-4"
              >
                wearable health monitoring devices
              </Link>
              .
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
              Share your target market, product type, customization needs,
              expected quantity, regulatory expectations and project timeline.
              Our team will review your requirements for OEM/ODM feasibility,
              engineering adaptation, manufacturing and quality documentation.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Email Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </a>

              <Link
                href="/oem-odm"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View OEM/ODM Workflow
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
              Contact focus
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "OEM/ODM Project Evaluation",
                "Private Label Customization",
                "Bluetooth SDK & UI Requirements",
                "ISO 13485 Manufacturing Support",
                "Quality Documentation Discussion",
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
                Email Yimi Life
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-2 inline-flex items-center text-sm font-semibold text-cyan-200 underline underline-offset-4"
              >
                {contactEmail}
              </a>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Replace this address with your official sales or project email
                if needed before production deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            Project inquiry form
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Submit your OEM/ODM project requirements
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700">
            This form is designed as a structured project brief for B2B medical
            device OEM/ODM inquiries. Before production deployment, connect it
            to your preferred email system, CRM or backend form handler.
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
              placeholder="Logo, packaging, UI, Bluetooth SDK, app integration, ID/mechanical changes, labeling, etc."
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
              placeholder="Tell us about your project requirements, product goals, current stage and key concerns."
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            Send Project Inquiry
            <ArrowIcon className="ml-2 h-4 w-4" />
          </button>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            This static version uses email submission. For a production website,
            connect this form to a backend API, CRM, Formspree, HubSpot, Zoho or
            your preferred inquiry management system.
          </p>
        </form>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
              Requirement checklist
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              What to prepare before contacting Yimi Life
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              A clear project brief helps our team evaluate product feasibility,
              customization depth, regulatory needs, production planning and
              cost expectations more efficiently.
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
            Explore Yimi Life before submitting your project
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            {
              title: "OEM/ODM Service Workflow",
              href: "/oem-odm",
              text: "Understand how Yimi Life supports projects from requirement review to mass production.",
            },
            {
              title: "Product Categories",
              href: "/products",
              text: "Explore pulse oximeters, blood pressure monitors and wearable health monitoring products.",
            },
            {
              title: "PulseMatrix™ Technology",
              href: "/technology",
              text: "Learn about low perfusion SpO2 monitoring, motion artifact rejection and skin tone fairness.",
            },
            {
              title: "ISO 13485 Quality System",
              href: "/quality",
              text: "Review Yimi Life’s quality system, manufacturing control, calibration and batch traceability.",
            },
          ].map((item) => (
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
                View page
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
              Frequently asked questions about contacting Yimi Life
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
            Ready to discuss your OEM/ODM medical device project?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Send your project requirements to Yimi Life and our team will review
            the product category, customization needs, target market, production
            expectations and next steps.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Email Yimi Life
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
