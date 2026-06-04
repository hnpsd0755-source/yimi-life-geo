import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Manufacturer | YimiLife",
  description:
    "YimiLife is an R&D-driven medical device OEM/ODM manufacturer for private-label pulse oximeters, blood pressure monitors and connected home healthcare monitoring projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Medical Device OEM/ODM Manufacturer | YimiLife",
    description:
      "Private-label pulse oximeter and blood pressure monitor OEM/ODM support for global healthcare brands, distributors and project teams.",
    url: "/",
    siteName: "YimiLife",
    type: "website",
  },
};

type IconName =
  | "shield"
  | "factory"
  | "clipboard"
  | "cpu"
  | "users"
  | "globe"
  | "activity"
  | "bluetooth"
  | "check";

type TrustAnchor = {
  title: string;
  text: string;
  icon: IconName;
  href: string;
};

type Audience = {
  title: string;
  text: string;
  primary: string;
  secondary: string;
  href: string;
  secondaryHref: string;
  icon: IconName;
};

type Product = {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  cta1: string;
  cta2: string;
  icon: IconName;
  image: string;
  featured: boolean;
  highlights: string[];
};

type ProcessStep = {
  number: string;
  title: string;
  summary: string;
  bullets: string[];
  output: string;
};

type Technology = {
  title: string;
  text: string;
  href: string;
};

type CaseStudy = {
  outcome: string;
  title: string;
  text: string;
  image: string;
};

type FAQ = {
  q: string;
  a: string;
};

const trustAnchors: TrustAnchor[] = [
  {
    title: "ISO 13485 Manufacturing System",
    text: "Structured quality management for medical device manufacturing and project execution.",
    icon: "shield",
    href: "/quality",
  },
  {
    title: "3,000㎡ Production Facility",
    text: "Stable manufacturing space for private-label and OEM/ODM project delivery.",
    icon: "factory",
    href: "/about",
  },
  {
    title: "Certified-Model Project Experience",
    text: "Certified-model-based support for target-market-oriented projects.",
    icon: "clipboard",
    href: "/quality",
  },
  {
    title: "Engineering-Driven OEM/ODM",
    text: "Product, firmware, packaging, labeling, and project coordination support.",
    icon: "cpu",
    href: "/oem-odm",
  },
  {
    title: "PulseMatrix™ Technology Platform",
    text: "PPG signal acquisition and SpO2 algorithm platform for pulse oximeter programs.",
    icon: "activity",
    href: "/technology",
  },
];

const audiences: Audience[] = [
  {
    title: "Brand Owners",
    text: "Launch private-label home healthcare monitoring devices with product selection, branding adaptation, and OEM/ODM support.",
    primary: "Submit Project Requirements",
    secondary: "Contact Us",
    href: "/contact",
    secondaryHref: "/contact",
    icon: "users",
  },
  {
    title: "Regional Distributors",
    text: "Source certified-model-based products with private-label configuration and documentation-oriented supplier evaluation.",
    primary: "Request Quote",
    secondary: "View Products",
    href: "/products",
    secondaryHref: "/products",
    icon: "globe",
  },
  {
    title: "Product & R&D Teams",
    text: "Evaluate technical feasibility, SpO2 performance direction, connected monitoring fit, and OEM development scope.",
    primary: "Request Technical Discussion",
    secondary: "Explore Technology",
    href: "/technology",
    secondaryHref: "/technology",
    icon: "cpu",
  },
];

const products: Product[] = [
  {
    eyebrow: "Core product",
    title: "Pulse Oximeter",
    text: "Private-label pulse oximeter OEM/ODM support with branding, UI adaptation, Bluetooth-related discussion, and production-oriented verification workflow.",
    href: "/products/pulse-oximeter",
    cta1: "View Details",
    cta2: "Get Specs",
    icon: "activity",
    image: "/homepage/pulse-oximeter.png",
    featured: true,
    highlights: ["Private label", "Bluetooth discussion", "Production verification"],
  },
  {
    eyebrow: "Core product",
    title: "Blood Pressure Monitor",
    text: "Upper-arm digital blood pressure monitor OEM programs with private-label adaptation, packaging, labeling, and clinical accuracy documentation discussion.",
    href: "/products/blood-pressure-monitor",
    cta1: "View Details",
    cta2: "Get Specs",
    icon: "shield",
    image: "/homepage/blood-pressure-monitor.png",
    featured: false,
    highlights: ["Upper-arm BPM", "Private label", "Accuracy documentation"],
  },
  {
    eyebrow: "Capability direction",
    title: "Wearable Monitoring Direction",
    text: "Wearable SpO2, Bluetooth data transmission, connected health, and future remote monitoring device opportunities.",
    href: "/products/wearable-monitoring",
    cta1: "Discuss Opportunities",
    cta2: "Explore Technology",
    icon: "bluetooth",
    image: "/homepage/wearable-monitoring.png",
    featured: false,
    highlights: ["Wearable SpO2", "Bluetooth data", "Connected health"],
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "1",
    title: "Requirement Review",
    summary: "Align the project scope before technical or commercial decisions begin.",
    bullets: [
      "Product category and target market",
      "Estimated volume and timeline",
      "Certification and documentation expectations",
    ],
    output: "Initial project brief",
  },
  {
    number: "2",
    title: "Evaluation & Customization",
    summary: "Define the most suitable product path and customization scope.",
    bullets: [
      "Model selection and feasibility review",
      "Branding, packaging, and labeling options",
      "UI, firmware, and Bluetooth-related discussion",
    ],
    output: "Proposed solution scope",
  },
  {
    number: "3",
    title: "Sample & Verification",
    summary: "Prepare samples and confirm key verification items before mass production.",
    bullets: [
      "Sample preparation",
      "Functional and visual review",
      "Validation planning and feedback loop",
    ],
    output: "Sample package & review plan",
  },
  {
    number: "4",
    title: "Production & Delivery",
    summary: "Move the approved project into controlled manufacturing and shipment.",
    bullets: [
      "Production preparation and quality execution",
      "Batch traceability and inspection flow",
      "Delivery coordination and shipment support",
    ],
    output: "Production-ready delivery",
  },
];

const technologies: Technology[] = [
  {
    title: "Low Perfusion SpO2",
    text: "Signal acquisition and algorithm handling in weak-signal monitoring conditions.",
    href: "/technology#low-perfusion",
  },
  {
    title: "Motion Artifact Rejection",
    text: "Interference reduction for finger movement and unstable measurement conditions.",
    href: "/technology#motion-artifact",
  },
  {
    title: "Skin Tone Accuracy",
    text: "Optical response and engineering validation planning across diverse skin tone conditions.",
    href: "/technology#skin-tone-accuracy",
  },
];

const cases: CaseStudy[] = [
  {
    outcome: "Pilot-to-production support established",
    title: "Private-Label Pulse Oximeter Project",
    text: "Product selection, logo and packaging adaptation, and project coordination for a healthcare brand.",
    image: "/homepage/case-project-1.png",
  },
  {
    outcome: "Production verification workflow established",
    title: "Blood Pressure Monitor OEM Support",
    text: "Private-label adaptation, supply alignment, and documentation-oriented communication for regional distribution.",
    image: "/homepage/case-project-2.png",
  },
  {
    outcome: "Customization path aligned",
    title: "Connected Monitoring Project Discussion",
    text: "Project evaluation, product direction alignment, and engineering communication for connected monitoring opportunities.",
    image: "/homepage/case-project-3.png",
  },
];

const faqs: FAQ[] = [
  {
    q: "What products does YimiLife currently support for OEM/ODM?",
    a: "YimiLife focuses on pulse oximeters, blood pressure monitors, and selected wearable monitoring directions for connected health discussions.",
  },
  {
    q: "Can YimiLife support private label and customization?",
    a: "Yes. Depending on the project type, support may include branding, packaging, labeling, UI adaptation, and other customization items subject to project evaluation.",
  },
  {
    q: "Can you support certification and target-market documentation discussion?",
    a: "YimiLife can support project discussions around certification direction, documentation expectations, and target-market compliance requirements based on project scope and product path.",
  },
  {
    q: "What information should we prepare before starting a project?",
    a: "The most helpful inputs are product category, target market, estimated quantity, customization requirements, documentation expectations, and project timeline.",
  },
];

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.6 2.9 8.2 7 10 4.1-1.8 7-5.4 7-10V6l-7-3Z" />
        <path d="m9.2 12 2 2 4-4" />
      </svg>
    );
  }

  if (name === "factory") {
    return (
      <svg {...common}>
        <path d="M4 20V9l5 3V9l5 3V6h6v14H4Z" />
        <path d="M8 16h.01M12 16h.01M16 16h.01" />
      </svg>
    );
  }

  if (name === "clipboard") {
    return (
      <svg {...common}>
        <path d="M9 4h6l1 2h3v15H5V6h3l1-2Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  if (name === "cpu") {
    return (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg {...common}>
        <path d="M16 20c0-2.2-1.8-4-4-4s-4 1.8-4 4" />
        <circle cx="12" cy="9" r="3" />
        <path d="M4 18c.3-1.7 1.5-3 3-3.6M20 18c-.3-1.7-1.5-3-3-3.6" />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12S9.6 18.5 12 21" />
      </svg>
    );
  }

  if (name === "activity") {
    return (
      <svg {...common}>
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </svg>
    );
  }

  if (name === "bluetooth") {
    return (
      <svg {...common}>
        <path d="M7 7l10 10-5 4V3l5 4L7 17" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function SectionTitle({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "left" | "center" }) {
  return (
    <div className={align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
    </div>
  );
}

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
    >
      {children}
      <ArrowRightIcon className="ml-2 h-4 w-4" />
    </Link>
  );
}

function SecondaryDarkLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      {children}
      <ArrowRightIcon className="ml-2 h-4 w-4" />
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_28%),linear-gradient(135deg,#020617,#0f172a_48%,#164e63)]">
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <div className="absolute left-8 top-16 h-48 w-48 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
              R&D-Driven Medical Device OEM/ODM Manufacturer
            </div>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Private-Label Pulse Oximeter and Blood Pressure Monitor OEM/ODM for Global Healthcare Brands
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              YimiLife develops and manufactures home healthcare monitoring devices for global brand owners, distributors, and project teams seeking reliable OEM/ODM support. Our core focus includes pulse oximeters, blood pressure monitors, and selected connected monitoring projects backed by engineering, quality systems, and manufacturing execution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryLink href="/contact">Submit OEM/ODM Requirements</PrimaryLink>
              <SecondaryDarkLink href="/products">Get Product Overview</SecondaryDarkLink>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] bg-white/90 shadow-xl">
                <Image
                  src="/homepage/hero-devices.png"
                  alt="Pulse oximeter and blood pressure monitor"
                  width={1200}
                  height={960}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-7 max-w-7xl px-6 lg:px-8">
        <div className="relative grid gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-5">
          {trustAnchors.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-3xl p-4 transition hover:bg-cyan-50">
              <Icon name={item.icon} className="h-6 w-6 text-cyan-700" />
              <p className="mt-4 text-base font-semibold leading-6 text-slate-950">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <SectionTitle eyebrow="Who We Work With" title="Designed for the teams behind real OEM/ODM decisions" />
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {audiences.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                <Icon name={item.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={item.href} className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800">
                  {item.primary}
                </Link>
                <Link href={item.secondaryHref} className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700">
                  {item.secondary}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Core Product Categories" title="Pulse oximeters, blood pressure monitors, and connected monitoring directions" />
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {products.map((product) => {
              const featured = product.featured;
              return (
                <Link
                  key={product.title}
                  href={product.href}
                  className={`group overflow-hidden rounded-[2rem] border transition duration-200 hover:-translate-y-1 hover:shadow-xl ${
                    featured ? "border-slate-900 bg-slate-950 text-white" : "border-slate-200 bg-slate-50 text-slate-950 hover:bg-white"
                  }`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image src={product.image} alt={product.title} width={1200} height={900} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <div className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-xs font-semibold ${featured ? "bg-cyan-400 text-slate-950" : "bg-white/85 text-cyan-800 shadow-sm backdrop-blur"}`}>
                      {product.eyebrow}
                    </div>
                    <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${featured ? "from-slate-950" : "from-white/80"} to-transparent`} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`inline-flex shrink-0 rounded-2xl p-3 ${featured ? "bg-cyan-300/15 text-cyan-300" : "bg-cyan-100 text-cyan-800"}`}>
                        <Icon name={product.icon} className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight">{product.title}</h3>
                        <p className={`mt-3 text-sm leading-7 ${featured ? "text-slate-300" : "text-slate-600"}`}>{product.text}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.highlights.map((item) => (
                        <span key={item} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${featured ? "bg-white/10 text-cyan-100" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className={`rounded-full px-4 py-2 text-xs font-semibold ${featured ? "bg-cyan-400 text-slate-950" : "bg-slate-950 text-white"}`}>
                        {product.cta1}
                      </span>
                      <span className={`rounded-full border px-4 py-2 text-xs font-semibold ${featured ? "border-white/20 text-white" : "border-slate-200 text-slate-700"}`}>
                        {product.cta2}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
          <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">OEM/ODM Support</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">
              Structured support from requirement review to production delivery
            </h2>
            <p className="mt-6 text-lg leading-9 text-slate-600">
              YimiLife supports private-label and custom medical device projects through a proven, end-to-end development path.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-slate-800">
                Submit Project Requirements
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/oem-odm" className="inline-flex items-center justify-center rounded-full border border-cyan-600 px-6 py-3.5 text-base font-semibold text-cyan-700 transition hover:bg-cyan-50">
                Explore OEM/ODM
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-auto pt-8">
              <div className="relative h-[340px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                  src="/homepage/oem-packaging.png"
                  alt="OEM packaging and customization"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid h-full gap-5 sm:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.number} className="flex min-h-[360px] flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-xl font-semibold text-cyan-800">{step.number}</div>
                <h3 className="mt-6 text-[1.65rem] font-semibold leading-tight tracking-tight text-slate-950">{step.title}</h3>
                <div className="mt-4 h-[3px] w-14 rounded-full bg-cyan-600" />
                <p className="mt-4 text-base leading-7 text-slate-700">{step.summary}</p>
                <div className="mt-4 border-t border-slate-200" />
                <ul className="mt-4 space-y-3">
                  {step.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-600" />
                      <span className="text-[0.95rem] leading-7 text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-cyan-700" aria-hidden="true">
                      <path d="M8 3H14L19 8V21H8C6.89543 21 6 20.1046 6 19V5C6 3.89543 6.89543 3 8 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 3V8H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 12H15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M9.5 16H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    <p className="text-sm leading-6 text-slate-700">
                      <span className="font-semibold text-cyan-800">Output:</span> {step.output}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">PulseMatrix™ Technology</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">PPG signal acquisition and SpO2 algorithm platform</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                PulseMatrix™ is YimiLife’s proprietary PPG signal acquisition and SpO2 algorithm platform, designed to support low perfusion monitoring, motion artifact rejection, and skin tone accuracy in pulse oximeter development.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Request Technical Discussion
                </Link>
                <Link href="/technology" className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Explore Technology
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image src="/homepage/technology-visual.png" alt="PulseMatrix technology visual" width={1600} height={900} className="h-auto w-full object-cover" />
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {technologies.map((tech) => (
                  <Link key={tech.title} href={tech.href} className="rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15">
                    <h3 className="text-sm font-semibold text-white">{tech.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-300">{tech.text}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle eyebrow="Selected OEM/ODM Project Snapshots" title="Project outcomes, summarized for fast supplier evaluation" />
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <Image src={item.image} alt={item.title} width={1200} height={900} className="h-auto w-full object-cover" />
                <div className="p-6">
                  <p className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold leading-5 text-cyan-800">{item.outcome}</p>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  <div className="mt-5">
                    <Link href="/case-studies" className="inline-flex items-center text-sm font-semibold text-cyan-700 transition hover:text-cyan-900">
                      View Case Studies
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
        <SectionTitle eyebrow="Frequently Asked Questions" title="Short answers for early OEM/ODM evaluation" />
        <div className="mt-9 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-950">
                {faq.q}
                <Icon name="check" className="h-5 w-5 flex-none text-cyan-700" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Start Your OEM/ODM Discussion</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Submit your target product, market plan, or private-label requirement for project evaluation.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Include product type, target market, estimated annual quantity, customization requirements, certification expectations, timeline, and any available specification files.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryLink href="/contact">Submit OEM/ODM Requirements</PrimaryLink>
            <SecondaryDarkLink href="/contact">Contact YimiLife</SecondaryDarkLink>
          </div>
        </div>
      </section>
    </main>
  );
}
