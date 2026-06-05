"use client";

import Link from "next/link";
import { useRef } from "react";

function LogoMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-sm">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M3 13h3l2-5 4 10 3-7 2 4h4"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
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

function ChevronIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const productLinks = [
  {
    label: "Pulse Oximeters",
    href: "/products/pulse-oximeter",
    status: "Mature core product line",
    description:
      "Fingertip, pediatric, Bluetooth and handheld SpO2 product platforms for OEM/ODM projects.",
  },
  {
    label: "Blood Pressure Monitors",
    href: "/products/blood-pressure-monitor",
    status: "Mature / customizable product line",
    description:
      "Upper-arm BP monitors, Bluetooth models and home healthcare platform directions.",
  },
  {
    label: "Wearable Monitoring",
    href: "/products/wearable-monitoring",
    status: "Development-stage direction",
    description:
      "Wearable monitoring project directions and engineering sample discussion for software integration.",
  },
];

const aboutLinks = [
  {
    label: "Company Overview",
    href: "/about",
    description:
      "YimiLife manufacturing background, product focus and project support capability.",
  },
  {
    label: "Quality & Compliance",
    href: "/about#quality-compliance",
    description:
      "ISO 13485 system, production verification, traceability and available document support.",
  },
];

function ProductsDropdown() {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="menu"
        className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Products
        <ChevronIcon />
      </button>

      <div className="invisible absolute left-0 top-full z-50 w-[420px] pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div role="menu" className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl ring-1 ring-black/5">
          <div className="px-4 pb-2 pt-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Product families
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Direct entry to product category pages. No separate products overview page.
            </p>
          </div>

          {productLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block rounded-2xl p-4 transition hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
                </div>
                <span className="shrink-0 rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-700">
                  {item.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutDropdown() {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="menu"
        className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        About
        <ChevronIcon />
      </button>

      <div className="invisible absolute right-0 top-full z-50 w-[360px] pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div role="menu" className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl ring-1 ring-black/5">
          {aboutLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block rounded-2xl p-4 transition hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
            >
              <p className="text-sm font-semibold text-slate-950">{item.label}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-slate-100 pt-3">
      <p className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{title}</p>
      <div className="mt-2 grid gap-1">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="rounded-2xl px-3 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="YimiLife homepage">
          <LogoMark />
          <div>
            <p className="text-base font-semibold tracking-tight text-slate-950">YimiLife</p>
            <p className="text-xs font-medium text-slate-500">Medical Device OEM/ODM</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Home
          </Link>

          <ProductsDropdown />

          <Link
            href="/oem-odm"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            OEM/ODM
          </Link>

          <Link
            href="/technology"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Technology
          </Link>

          <Link
            href="/case-studies"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Case Studies
          </Link>

          <AboutDropdown />

          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Submit Project Requirements
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <details ref={mobileMenuRef} className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
            Menu
          </summary>

          <div className="absolute right-0 top-12 z-50 max-h-[82vh] w-[calc(100vw-3rem)] max-w-[340px] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="grid gap-2">
              <MobileLink href="/" onNavigate={closeMobileMenu}>Home</MobileLink>

              <MobileSection title="Products">
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-2xl px-3 py-3 transition hover:bg-slate-50"
                  >
                    <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
                  </Link>
                ))}
              </MobileSection>

              <MobileSection title="Main pages">
                <MobileLink href="/oem-odm" onNavigate={closeMobileMenu}>OEM/ODM</MobileLink>
                <MobileLink href="/technology" onNavigate={closeMobileMenu}>Technology</MobileLink>
                <MobileLink href="/case-studies" onNavigate={closeMobileMenu}>Case Studies</MobileLink>
              </MobileSection>

              <MobileSection title="Company">
                <MobileLink href="/about" onNavigate={closeMobileMenu}>Company Overview</MobileLink>
                <MobileLink href="/about#quality-compliance" onNavigate={closeMobileMenu}>Quality & Compliance</MobileLink>
                <MobileLink href="/contact" onNavigate={closeMobileMenu}>Contact</MobileLink>
              </MobileSection>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
