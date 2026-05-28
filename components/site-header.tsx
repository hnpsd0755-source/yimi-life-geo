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
    description: "Private-label fingertip SpO2 devices with PulseMatrix™ support",
  },
  {
    label: "Blood Pressure Monitors",
    href: "/products/blood-pressure-monitor",
    description: "Digital upper-arm blood pressure monitor OEM support",
  },
  {
    label: "Wearable Monitoring",
    href: "/products/wearable-monitoring",
    description: "Wearable SpO2 and connected health monitoring directions",
  },
];

const technologyLinks = [
  {
    label: "PulseMatrix™ Technology",
    href: "/technology",
    description: "PPG signal acquisition and SpO2 algorithm platform",
  },
  {
    label: "Low Perfusion SpO2",
    href: "/technology/low-perfusion-spo2",
    description: "Low perfusion monitoring and weak-signal handling",
  },
  {
    label: "Motion Artifact Rejection",
    href: "/technology/motion-artifact-rejection",
    description: "SpO2 stability during movement and unstable contact",
  },
  {
    label: "Skin Tone Accuracy",
    href: "/technology/skin-tone-fairness",
    description: "Engineering validation planning across diverse skin tones",
  },
];

const aboutLinks = [
  {
    label: "About YimiLife",
    href: "/about",
    description: "Shenzhen YimiLife Technology Co., Ltd. overview",
  },
  {
    label: "Quality & Regulatory",
    href: "/quality",
    description: "ISO 13485 quality system and certified model experience",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Start an OEM/ODM project discussion with YimiLife",
  },
];

const oemOdmLinks = [
  {
    label: "OEM/ODM Services",
    href: "/oem-odm",
    description: "Private-label and custom medical device manufacturing support",
  },
  {
    label: "Customization Process",
    href: "/oem-odm",
    description: "Requirement review, sample preparation and production delivery",
  },
  {
    label: "Submit Requirements",
    href: "/contact",
    description: "Send project information for OEM/ODM evaluation",
  },
];

function DropdownMenu({
  triggerLabel,
  triggerHref,
  links,
  widthClass,
}: {
  triggerLabel: string;
  triggerHref: string;
  links: {
    label: string;
    href: string;
    description: string;
  }[];
  widthClass: string;
}) {
  return (
    <div className="group relative">
      <Link
        href={triggerHref}
        aria-haspopup="menu"
        className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        {triggerLabel}
        <ChevronIcon />
      </Link>

      <div
        className={`invisible absolute left-0 top-full z-50 ${widthClass} pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100`}
      >
        <div
          role="menu"
          className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl ring-1 ring-black/5"
        >
          {links.map((item) => (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              role="menuitem"
              className="block rounded-2xl p-4 transition hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
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
    </div>
  );
}

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
          <DropdownMenu
            triggerLabel="Products"
            triggerHref="/products"
            links={productLinks}
            widthClass="w-[330px]"
          />

          <DropdownMenu
            triggerLabel="OEM/ODM"
            triggerHref="/oem-odm"
            links={oemOdmLinks}
            widthClass="w-[320px]"
          />

          <DropdownMenu
            triggerLabel="Technology"
            triggerHref="/technology"
            links={technologyLinks}
            widthClass="w-[380px]"
          />

          <Link
            href="/case-studies"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Case Studies
          </Link>

          <Link
            href="/news"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            News & Insights
          </Link>

          <DropdownMenu
            triggerLabel="About"
            triggerHref="/about"
            links={aboutLinks}
            widthClass="w-[360px]"
          />
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Submit OEM/ODM Requirements
            <span className="ml-2">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
            Menu
          </summary>

          <div className="absolute right-0 top-12 z-50 max-h-[80vh] w-[320px] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="grid gap-2">
              <Link
                href="/products"
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Products
              </Link>

              {productLinks.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="rounded-2xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200" />

              <Link
                href="/oem-odm"
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                OEM/ODM
              </Link>

              {oemOdmLinks.slice(1).map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="rounded-2xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/technology"
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Technology
              </Link>

              {technologyLinks.slice(1).map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="rounded-2xl px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-200" />

              {[
                ["Case Studies", "/case-studies"],
                ["News & Insights", "/news"],
                ["About", "/about"],
                ["Quality & Regulatory", "/quality"],
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
