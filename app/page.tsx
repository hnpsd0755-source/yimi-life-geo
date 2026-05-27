import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  ClipboardCheck,
  Cpu,
  Users,
  Globe2,
  Activity,
  Bluetooth,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Device OEM/ODM Manufacturer | YimiLife",
  description:
    "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer for private-label pulse oximeters, blood pressure monitors, and connected home healthcare monitoring projects.",
  alternates: {
    canonical: "https://www.yimilife.com/",
  },
  openGraph: {
    title: "Medical Device OEM/ODM Manufacturer | YimiLife",
    description:
      "Private-label pulse oximeter and blood pressure monitor OEM/ODM support for global healthcare brands, distributors, and project teams.",
    url: "https://www.yimilife.com/",
    siteName: "YimiLife",
    type: "website",
    images: [
      {
        url: "https://www.yimilife.com/homepage/hero-devices.png",
        width: 1200,
        height: 960,
        alt: "YimiLife pulse oximeter and blood pressure monitor OEM ODM devices",
      },
    ],
  },
};

const trustAnchors = [
  {
    title: "ISO 13485 Manufacturing System",
    text: "Structured quality management for medical device manufacturing and project execution.",
    icon: ShieldCheck,
    href: "/quality",
  },
  {
    title: "3,000㎡ Production Facility",
    text: "Stable manufacturing space for private-label and OEM/ODM project delivery.",
    icon: Factory,
    href: "/about",
  },
  {
    title: "Certified-Model Project Experience",
    text: "Certified-model-based support for target-market-oriented projects.",
    icon: ClipboardCheck,
    href: "/quality",
  },
  {
    title: "Engineering-Driven OEM/ODM",
    text: "Product, firmware, packaging, labeling, and project coordination support.",
    icon: Cpu,
    href: "/oem-odm",
  },
  {
    title: "PulseMatrix™ Platform",
    text: "PPG signal acquisition and SpO2 algorithm platform for pulse oximeter programs.",
    icon: Cpu,
    href: "/technology",
  },
];

const audiences = [
  {
    title: "Brand Owners",
    text: "Launch private-label home healthcare monitoring devices with product selection, branding adaptation, and OEM/ODM support.",
    primary: "Submit Project Requirements",
    primaryHref: "/contact",
    secondary: "Contact Us",
    secondaryHref: "/contact",
    icon: Users,
  },
  {
    title: "Regional Distributors",
    text: "Source certified-model-based products with private-label configuration and documentation-oriented supplier evaluation.",
    primary: "Request Quote",
    primaryHref: "/contact",
    secondary: "View Products",
    secondaryHref: "/products",
    icon: Globe2,
  },
  {
    title: "Product & R&D Teams",
    text: "Evaluate technical feasibility, SpO2 performance direction, connected monitoring fit, and OEM development scope.",
    primary: "Request Technical Discussion",
    primaryHref: "/contact",
    secondary: "Explore Technology",
    secondaryHref: "/technology",
    icon: Activity,
  },
];

const products = [
  {
    title: "Pulse Oximeter",
    text: "Private-label pulse oximeter OEM/ODM support with branding, UI adaptation, Bluetooth-related discussion, and production-oriented verification workflow.",
    href: "/products/pulse-oximeter",
    cta1: "View Details",
    cta2: "Get Specs",
    icon: Activity,
    image: "/homepage/pulse-oximeter.png",
    featured: true,
  },
  {
    title: "Blood Pressure Monitor",
    text: "Upper-arm digital blood pressure monitor OEM programs with private-label adaptation, packaging, labeling, and clinical accuracy documentation discussion.",
    href: "/products/blood-pressure-monitor",
    cta1: "View Details",
    cta2: "Get Specs",
    icon: ShieldCheck,
    image: "/homepage/blood-pressure-monitor.png",
    featured: false,
  },
  {
    title: "Wearable Monitoring Direction",
    text: "Wearable SpO2, Bluetooth data transmission, connected health, and future remote monitoring device opportunities.",
    href: "/products/wearable-monitoring",
    cta1: "Discuss Opportunities",
    cta2: "Explore Technology",
    icon: Bluetooth,
    image: "/homepage/wearable-monitoring.png",
    featured: false,
  },
];

const processSteps = [
  {
    title: "Requirement Review",
    text: "Product type, target market, volume, customization scope, and documentation expectations.",
  },
  {
    title: "Evaluation & Customization",
    text: "Product selection, branding, packaging, firmware/UI adaptation, and project-specific requirements.",
  },
  {
    title: "Sample & Verification",
    text: "Sample preparation and validation planning aligned with the selected product path.",
  },
  {
    title: "Production & Delivery",
    text: "Production preparation, quality execution, batch traceability, and delivery coordination.",
  },
];

const technologies = [
  {
    title: "Low Perfusion SpO2",
    text: "Signal acquisition and algorithm handling in weak-signal monitoring conditions.",
    href: "/technology/low-perfusion-spo2",
  },
  {
    title: "Motion Artifact Rejection",
    text: "Interference reduction for finger movement and unstable measurement conditions.",
    href: "/technology/motion-artifact-rejection",
  },
  {
    title: "Skin Tone Accuracy",
    text: "Optical response and engineering validation planning across diverse skin tone conditions.",
    href: "/technology/skin-tone-fairness",
  },
];

const cases = [
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

const faqs = [
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

function SectionTitle({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ArrowLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-sm font-semibold transition ${
        light ? "text-cyan-200 hover:text-white" : "text-cyan-700 hover:text-cyan-900"
      }`}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
        dark
          ? "border border-white/25 text-white hover:bg-white/10"
          : "border border-slate-300 text-slate-800 hover:bg-slate-100"
      }`}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
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
              YimiLife develops and manufactures home healthcare monitoring devices for global brand owners,
              distributors, and project teams seeking reliable OEM/ODM support. Our core focus includes pulse
              oximeters, blood pressure monitors, and selected connected monitoring projects backed by engineering,
              quality systems, and manufacturing execution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton href="/contact">Submit OEM/ODM Requirements</PrimaryButton>
              <SecondaryButton href="/products" dark>
                Get Product Overview
              </SecondaryButton>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white/90 shadow-xl">
                <Image
                  src="/homepage/hero-devices.png"
                  alt="Pulse oximeter and blood pressure monitor for OEM ODM projects"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-7 max-w-7xl px-6 lg:px-8">
        <div className="relative grid gap-3 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-xl md:grid-cols-5">
          {trustAnchors.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} href={item.href} className="rounded-3xl p-4 transition hover:bg-cyan-50">
                <Icon className="h-6 w-6 text-cyan-700" />
                <p className="mt-4 text-base font-semibold leading-6 text-slate-950">{item.title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.text}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <SectionTitle eyebrow="Who We Work With" title="Designed for the teams behind real OEM/ODM decisions" />
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex rounded-2xl bg-cyan-100 p-3 text-cyan-800">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={item.primaryHref}
                    className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
                  >
                    {item.primary}
                  </Link>
                  <Link
                    href={item.secondaryHref}
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                  >
                    {item.secondary}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Core Product Categories"
            title="Pulse oximeters, blood pressure monitors, and connected monitoring directions"
          />
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              const featured = product.featured;
              return (
                <Link
                  key={product.title}
                  href={product.href}
                  className={`group overflow-hidden rounded-[2rem] border transition hover:-translate-y-1 hover:shadow-lg ${
                    featured
                      ? "border-slate-900 bg-slate-950 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-950 hover:bg-white"
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6">
                    <div
                      className={`inline-flex rounded-2xl p-3 ${
                        featured ? "bg-cyan-300/15 text-cyan-300" : "bg-cyan-100 text-cyan-800"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">{product.title}</h3>
                    <p className={`mt-4 text-sm leading-7 ${featured ? "text-slate-300" : "text-slate-600"}`}>
                      {product.text}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <span
                        className={`rounded-full px-4 py-2 text-xs font-semibold ${
                          featured ? "bg-cyan-400 text-slate-950" : "bg-slate-950 text-white"
                        }`}
                      >
                        {product.cta1}
                      </span>
                      <span
                        className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                          featured ? "border-white/20 text-white" : "border-slate-200 text-slate-700"
                        }`}
                      >
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
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">OEM/ODM Support</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Structured support from requirement review to production delivery
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              YimiLife supports private-label and custom medical device projects through a structured path from
              requirement review to sample preparation, validation planning, and production delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Submit Project Requirements</PrimaryButton>
              <SecondaryButton href="/oem-odm">Explore OEM/ODM</SecondaryButton>
            </div>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <Image
                src="/homepage/oem-packaging.png"
                alt="OEM ODM packaging and customization visual"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-800">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                PulseMatrix™ Technology
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                PPG signal acquisition and SpO2 algorithm platform
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                PulseMatrix™ is YimiLife’s proprietary PPG signal acquisition and SpO2 algorithm platform, designed
                to support low perfusion monitoring, motion artifact rejection, and skin tone accuracy in pulse
                oximeter development.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryButton href="/contact">Request Technical Discussion</PrimaryButton>
                <SecondaryButton href="/technology" dark>
                  Explore Technology
                </SecondaryButton>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="aspect-video overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/homepage/technology-visual.png"
                  alt="PulseMatrix PPG signal acquisition and SpO2 algorithm technology visual"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {technologies.map((tech) => (
                  <Link
                    key={tech.title}
                    href={tech.href}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                  >
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
          <SectionTitle
            eyebrow="Selected OEM/ODM Project Snapshots"
            title="Project outcomes, summarized for fast supplier evaluation"
          />
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <p className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold leading-5 text-cyan-800">
                    {item.outcome}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  <div className="mt-5">
                    <ArrowLink href="/case-studies">View Case Studies</ArrowLink>
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
                <CheckCircle2 className="h-5 w-5 flex-none text-cyan-700" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Start Your OEM/ODM Discussion
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Submit your target product, market plan, or private-label requirement for project evaluation.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Include product type, target market, estimated annual quantity, customization requirements, certification
            expectations, timeline, and any available specification files.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/contact">Submit OEM/ODM Requirements</PrimaryButton>
            <SecondaryButton href="/contact" dark>
              Contact YimiLife
            </SecondaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
