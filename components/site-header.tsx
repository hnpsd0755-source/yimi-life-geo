import Link from "next/link";

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

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

const productLinks = [
  {
    label: "Product Categories",
    href: "/products",
    description: "Pulse oximeters, BP monitors and wearable monitoring",
  },
  {
    label: "Pulse Oximeter OEM/ODM",
    href: "/products/pulse-oximeter",
    description: "SpO2 devices supported by PulseMatrix™ technology",
  },
  {
    label: "Blood Pressure Monitor OEM/ODM",
    href: "/products/blood-pressure-monitor",
    description: "Home BP monitor manufacturing support",
  },
  {
    label: "Wearable Health Monitoring",
    href: "/products/wearable-monitoring",
    description: "Wearable SpO2 and connected health devices",
  },
];

const technologyLinks = [
  {
    label: "PulseMatrix™ Platform",
    href: "/technology",
    description: "Vascular hemodynamic intelligence platform",
  },
  {
    label: "Low Perfusion SpO2",
    href: "/technology/low-perfusion-spo2",
    description: "0.1% PI low perfusion monitoring focus",
  },
  {
    label: "Motion Artifact Rejection",
    href: "/technology/motion-artifact-rejection",
    description: "SpO2 stability during movement and tremor",
  },
  {
    label: "Skin Tone Fairness",
    href: "/technology/skin-tone-fairness",
    description: "Validation-aware SpO2 design across skin tones",
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
          <div>
            <p className="text-base font-semibold tracking-tight text-slate-950">
              YimiLife
            </p>
            <p className="text-xs font-medium text-slate-500">
              Medical Device OEM/ODM
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <Link
              href="/products"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Products
            </Link>

            <div className="invisible absolute left-0 top-full w-[360px] translate-y-3 rounded-3xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl p-4 transition hover:bg-slate-50"
                >
                  <p className="text-sm font-semibold text-slate-950">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/technology"
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Technology
            </Link>

            <div className="invisible absolute left-0 top-full w-[380px] translate-y-3 rounded-3xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {technologyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl p-4 transition hover:bg-slate-50"
                >
                  <p className="text-sm font-semibold text-slate-950">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/oem-odm"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            OEM/ODM
          </Link>

          <Link
            href="/quality"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Quality
          </Link>

          <Link
            href="/about"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            About
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Start a Project
            <span className="ml-2">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
            Menu
          </summary>

          <div className="absolute right-0 top-12 w-[300px] rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="grid gap-2">
              <Link
                href="/products"
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Products
              </Link>

              {productLinks.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200" />

              <Link
                href="/technology"
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Technology
              </Link>

              {technologyLinks.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200" />

              {[
                ["OEM/ODM", "/oem-odm"],
                ["Quality", "/quality"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
