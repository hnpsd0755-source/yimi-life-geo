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
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#08A8AE] text-white">
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
      ["Wearable Monitoring Devices", "/products/wearable-monitoring"],
    ],
  },
  {
    title: "OEM/ODM",
    links: [
      ["OEM/ODM Services", "/oem-odm"],
      ["Customization Levels", "/oem-odm#customization-levels"],
      ["Bluetooth / SDK Integration", "/oem-odm#bluetooth-sdk"],
      ["Project Workflow", "/oem-odm#project-workflow"],
      ["Submit Project Requirements", "/contact"],
    ],
  },
  {
    title: "Technology",
    links: [
      ["PulseMatrix™ Signal Platform", "/technology"],
      ["PI 0.1% Low-Perfusion", "/technology#low-perfusion"],
      ["Motion Conditions", "/technology#motion-artifact"],
      ["SpO₂ Performance Across Diverse Skin Pigmentation", "/technology#skin-pigmentation"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About YimiLife", "/about"],
      ["Quality & Compliance", "/about#quality-compliance"],
      ["Case Studies", "/case-studies"],
      ["Contact", "/contact"],
    ],
  },
];

const trustItems = [
  "ISO 13485 Quality Management System",
  "3,000㎡ Production Facility",
  "25+ FDA / MDR / NMPA certified models",
  "300,000 Units / Month Pulse Oximeter Capacity",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_2.2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="YimiLife homepage">
              <LogoMark />
              <div>
                <p className="text-base font-semibold tracking-tight">YimiLife</p>
                <p className="text-xs font-medium text-slate-400">Medical Device OEM/ODM Manufacturer</p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Shenzhen YimiLife Technology Co., Ltd. supports overseas healthcare brands with{" "}
              <Link href="/products/pulse-oximeter" className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                pulse oximeter
              </Link>
              {", "}
              <Link href="/products/blood-pressure-monitor" className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200">
                blood pressure monitor
              </Link>{" "}
              platforms and a product line of wearable monitoring devices, with private-label customization and production verification under an ISO 13485 quality system.
            </p>

            <div className="mt-6 grid gap-2 text-sm text-slate-300">
              {trustItems.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#08A8AE] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                Submit Project Requirements
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">{column.title}</p>
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

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold text-white">B2B OEM/ODM project communication notice</p>
              <p className="mt-2 max-w-4xl text-xs leading-6 text-slate-400">
                Product information on this website is intended for B2B OEM/ODM project evaluation. Product configuration, documentation scope, verification items and target-market responsibilities should be confirmed according to each project agreement and applicable regulatory requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-cyan-300/35 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              Just evaluating feasibility?
              <ArrowIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="grid gap-4 text-xs leading-6 text-slate-400 md:grid-cols-[1fr_auto]">
            <p>© {new Date().getFullYear()} Shenzhen YimiLife Technology Co., Ltd. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
              <Link href="/robots.txt" className="hover:text-white">Robots</Link>
            </div>
          </div>

          <p className="mt-4 max-w-4xl text-xs leading-6 text-slate-500">
            Fluke Index 2 references on this website refer to pulse oximeter production-line calibration and verification workflows under defined product and verification conditions. They are not clinical validation claims or guarantees of clinical accuracy for every product configuration.
          </p>
        </div>
      </div>
    </footer>
  );
}
