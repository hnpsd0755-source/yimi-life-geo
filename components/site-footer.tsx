import Link from "next/link";

const contactEmail = "info@yimilife.com";

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

function LogoMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
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

const footerColumns = [
  {
    title: "Products",
    links: [
      ["Pulse Oximeters", "/products/pulse-oximeter"],
      ["Blood Pressure Monitors", "/products/blood-pressure-monitor"],
      ["Wearable Monitoring", "/products/wearable-monitoring"],
    ],
  },
  {
    title: "Company",
    links: [
      ["OEM/ODM", "/oem-odm"],
      ["Manufacturing & Quality", "/manufacturing-quality"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Technology", "/technology"],
    ],
  },
];

const trustItems = [
  "ISO 13485 Quality Management System",
  "B2B OEM/ODM Project Support",
  "Pulse Oximeters · Blood Pressure Monitors · Wearable Monitoring Devices",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="site-container py-16 lg:py-20">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.6fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="YimiLife homepage">
              <LogoMark />
              <div>
                <p className="text-base font-semibold">YimiLife</p>
                <p className="text-xs font-medium text-slate-400">Medical Device OEM/ODM Manufacturer</p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Shenzhen YimiLife Technology Co., Ltd. supports overseas healthcare brands with{" "}
              <Link href="/products/pulse-oximeter" className="font-semibold text-brand-300 underline underline-offset-4 hover:text-brand-200">
                pulse oximeter
              </Link>
              {", "}
              <Link href="/products/blood-pressure-monitor" className="font-semibold text-brand-300 underline underline-offset-4 hover:text-brand-200">
                blood pressure monitor
              </Link>{" "}
              and wearable monitoring device OEM/ODM projects under an ISO 13485 quality system.
            </p>

            <div className="mt-6 grid gap-2 text-sm text-slate-300">
              {trustItems.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 2xl:flex-row">
              <Link
                href="/contact"
                className="button-primary"
              >
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={`mailto:${contactEmail}`}
                className="button-secondary-inverse"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold text-brand-200">{column.title}</p>
                <div className="mt-5 grid gap-3">
                  {column.links.map(([label, href]) => (
                    <Link
                      key={`${column.title}-${label}-${href}`}
                      href={href}
                      className="text-sm leading-6 text-slate-300 transition hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-y border-white/10 py-6">
          <p className="text-sm font-semibold text-white">B2B project information</p>
          <p className="mt-2 max-w-4xl text-xs leading-6 text-slate-400">
            Product information on this website is intended for B2B OEM/ODM project evaluation. Product configuration, documentation scope, verification items and target-market responsibilities should be confirmed according to each project agreement and applicable regulatory requirements.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid gap-4 text-xs leading-6 text-slate-400 md:grid-cols-[1fr_auto]">
            <p>© {new Date().getFullYear()} Shenzhen YimiLife Technology Co., Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
              <Link href="/robots.txt" className="hover:text-white">Robots</Link>
            </div>
          </div>

          <p className="mt-4 max-w-4xl text-xs leading-6 text-slate-500">
            Fluke testing equipment references on this website refer to pulse oximeter production-line calibration and verification workflows under defined product and verification conditions. They are not clinical validation claims or guarantees of clinical accuracy for every product configuration.
          </p>
        </div>
      </div>
    </footer>
  );
}
