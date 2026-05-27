import Link from "next/link";

const contactEmail = "info@yimilife.com";

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

const footerColumns = [
  {
    title: "Products",
    links: [
      ["Medical Device OEM/ODM Product Categories", "/products"],
      ["Pulse Oximeter OEM/ODM Manufacturer", "/products/pulse-oximeter"],
      ["Blood Pressure Monitor OEM Manufacturer", "/products/blood-pressure-monitor"],
      ["Wearable Health Monitoring Device OEM", "/products/wearable-monitoring"],
    ],
  },
  {
    title: "Technology",
    links: [
      ["PulseMatrix™ Vascular Hemodynamic Intelligence", "/technology"],
      ["Low Perfusion SpO2 Technology", "/technology/low-perfusion-spo2"],
      [
        "Motion Artifact Rejection Pulse Oximeter Technology",
        "/technology/motion-artifact-rejection",
      ],
      [
        "Skin Tone Accuracy Pulse Oximeter Technology",
        "/technology/skin-tone-fairness",
      ],
    ],
  },
  {
    title: "OEM/ODM & Quality",
    links: [
      ["Private Label Medical Device Manufacturing", "/oem-odm"],
      ["ISO 13485 Medical Device Manufacturer", "/quality"],
      ["Shenzhen Medical Device Manufacturer", "/about"],
      ["Medical Device OEM Inquiry", "/contact"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1.85fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="YimiLife homepage"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 13h3l2-5 4 10 3-7 2 4h4"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-base font-semibold tracking-tight">
                  YimiLife
                </p>
                <p className="text-xs font-medium text-slate-400">
                  Medical Device OEM/ODM Manufacturer
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Shenzhen YimiLife Technology Co., Ltd. is an ISO 13485 medical
              device OEM/ODM manufacturer supporting{" "}
              <Link
                href="/products/pulse-oximeter"
                className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
              >
                pulse oximeter OEM/ODM manufacturing
              </Link>
              ,{" "}
              <Link
                href="/products/blood-pressure-monitor"
                className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
              >
                blood pressure monitor OEM manufacturing
              </Link>{" "}
              and{" "}
              <Link
                href="/products/wearable-monitoring"
                className="font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
              >
                wearable health monitoring device OEM
              </Link>{" "}
              projects for global healthcare brands.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-300">
              <p>ISO 13485 Quality Management System</p>
              <p>3,000 m² Manufacturing Facility</p>
              <p>25+ FDA / MDR / NMPA Certified Model Experience</p>
              <p>300,000 Units Monthly Pulse Oximeter Capacity</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Submit OEM/ODM Requirements
                <span className="ml-2">
                  <ArrowIcon />
                </span>
              </Link>

              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  {column.title}
                </h2>

                <div className="mt-5 grid gap-3">
                  {column.links.map(([label, href]) => (
                    <Link
                      key={href}
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

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-4 text-xs leading-6 text-slate-400 md:grid-cols-[1fr_auto]">
            <p>
              © {new Date().getFullYear()} Shenzhen YimiLife Technology Co.,
              Ltd. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </Link>
              <Link href="/robots.txt" className="hover:text-white">
                Robots
              </Link>
            </div>
          </div>

          <p className="mt-4 max-w-4xl text-xs leading-6 text-slate-500">
            Product information on this website is intended for B2B OEM/ODM
            project communication. Specific product configuration, certification
            scope, technical documentation, production verification and
            regulatory responsibilities should be confirmed according to each
            project agreement and target market. Fluke Index 2 references on
            this website refer to pulse oximeter production calibration and
            verification, not a clinical validation claim.
          </p>
        </div>
      </div>
    </footer>
  );
}
