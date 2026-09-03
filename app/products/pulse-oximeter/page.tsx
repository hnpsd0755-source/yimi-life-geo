import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PulseOximeterSelector } from "@/components/products/pulse-oximeter/PulseOximeterSelector";
import {
  pulseOximeterModels,
  type PulseOximeterModel,
} from "@/data/pulseOximeterModels";
import { pulseOximeterImages } from "@/data/pulseOximeterImages";

export const metadata: Metadata = {
  title: "Pulse Oximeter OEM/ODM Manufacturer | YimiLife",
  description:
    "Explore YimiLife fingertip and handheld pulse oximeter solutions, product configurations and OEM/ODM options for healthcare brands and distributors.",
};

const appearanceOrder = [
  "YM01 Prime",
  "YM01 Neo",
  "YM01C Lite",
  "YM02 Pro",
  "YM03 Chic",
  "YM04 Male",
  "YM06 Child",
] as const;

const seriesIdMap: Record<string, string> = {
  "YM01 Prime": "ym01-prime",
  "YM01 Neo": "ym01-neo",
  "YM01C Lite": "ym01c-lite",
  "YM02 Pro": "ym02-pro",
  "YM03 Chic": "ym03-chic",
  "YM04 Male": "ym04-male",
  "YM06 Child": "ym06-child",
};

const seriesDisplayNames: Record<string, string> = {
  "YM01 Prime": "Prime",
  "YM01 Neo": "Neo",
  "YM01C Lite": "Lite",
  "YM02 Pro": "Pro",
  "YM03 Chic": "Chic",
  "YM04 Male": "Male",
  "YM06 Child": "Child",
};

const seriesNotes: Record<string, string> = {
  "YM01 Prime":
    "Classic fingertip direction for broad adult OEM and distributor projects.",
  "YM01 Neo":
    "Updated fingertip direction for customers who want a familiar but refreshed model family.",
  "YM01C Lite":
    "Compact fingertip direction with LED and OLED/TFT configuration options.",
  "YM02 Pro":
    "Professional fingertip direction for differentiated product positioning.",
  "YM03 Chic":
    "Lifestyle-oriented fingertip direction with stronger visual presentation.",
  "YM04 Male":
    "Professional style direction with a structured appearance language.",
  "YM06 Child":
    "Child-oriented fingertip direction using enabled public child models.",
};

const heroFamilyImage = "/homepage/P2/product-family/Oximeter-family02.png";

function getImageForModel(model: PulseOximeterModel) {
  return pulseOximeterImages[
    model.model as keyof typeof pulseOximeterImages
  ];
}

function getSeriesGroups() {
  return appearanceOrder.map((series) => {
    const models = pulseOximeterModels.filter(
      (model) => model.appearanceSeries === series,
    );
    const firstModel = models[0];
    const imageModel = models.find((model) => getImageForModel(model));

    return {
      id: seriesIdMap[series],
      series,
      appearanceName: firstModel?.appearanceName ?? series,
      note: seriesNotes[series],
      models,
      imageModel,
      image: imageModel ? getImageForModel(imageModel) : undefined,
    };
  });
}

const seriesGroups = getSeriesGroups();

const technologyPoints = [
  {
    title: "Low Perfusion",
    text: "PI 0.1% low-perfusion is organized under the PulseMatrix™ Signal Platform for detailed review.",
  },
  {
    title: "Motion Conditions",
    text: "Performance under motion conditions is discussed as a signal engineering topic, not as a broad product claim.",
  },
  {
    title: "Skin Tone Consideration",
    text: "SpO₂ performance across diverse skin pigmentation is presented in the technology section with restrained wording.",
  },
];

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
      {children}
    </p>
  );
}

function HeroSection() {
  return (
    <section className="bg-white">
      <div className="site-container grid gap-8 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-16">
        <div>
          <SectionLabel>Pulse Oximeters</SectionLabel>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Pulse Oximeter Solutions for OEM/ODM Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore YimiLife fingertip and handheld pulse oximeter product
            directions with different configuration possibilities for healthcare
            brands and distributors.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#handheld-section" className="button-primary">
              View Handheld Models
            </Link>
            <Link href="/contact" className="button-secondary">
              Discuss Your Project
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white">
            <Image
              src={heroFamilyImage}
              alt="YimiLife pulse oximeter product family"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "Fingertip Pulse Oximeters",
                detail: "YM101–YM603 public models",
              },
              {
                title: "Handheld Pulse Oximeters",
                detail: "YH01 / YH02",
              },
              {
                title: "OEM/ODM Configuration",
                detail: "Model selection and project-specific options",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FingertipPortfolioSection() {
  return (
    <section
      id="fingertip-portfolio"
      className="site-section-compact scroll-mt-24 bg-slate-50"
    >
      <div className="site-container">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <SectionLabel>Product portfolio</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Fingertip Pulse Oximeter Portfolio
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Explore different fingertip pulse oximeter designs based on
              appearance style, display configuration and functional options.
            </p>
          </div>

          <div className="portfolio-selector mt-8">
          <style>{`
            ${seriesGroups
              .map(
                (group) => `
                  #series-${group.id}:checked ~ .series-card-grid label[for="series-${group.id}"] {
                    border-color: #08A8AE;
                    background: #edfafa;
                    color: #075e63;
                    box-shadow: 0 10px 24px -18px rgba(8, 168, 174, 0.65);
                  }
                `,
              )
              .join("\n")}
          `}</style>

          {seriesGroups.map((group) => (
            <input
              key={group.id}
              id={`series-${group.id}`}
              type="radio"
              name="pulse-oximeter-series"
              value={group.series}
              className="sr-only"
            />
          ))}

          <div className="series-card-grid grid gap-3 md:grid-cols-4 lg:grid-cols-7">
            {seriesGroups.map((group) => (
              <label
                key={group.id}
                htmlFor={`series-${group.id}`}
                className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 transition hover:border-brand-200 hover:bg-brand-50/70"
              >
                <span className="relative mb-3 block aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
                  {group.image && group.imageModel ? (
                    <Image
                      src={group.image}
                      alt={`${group.imageModel.model} fingertip pulse oximeter`}
                      fill
                      sizes="(min-width: 1024px) 260px, 50vw"
                      className="object-contain p-2"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center px-4 text-center text-xs font-semibold text-slate-400">
                      Image pending
                    </span>
                  )}
                </span>
                <span className="block text-base font-semibold text-slate-950">
                  {seriesDisplayNames[group.series] ?? group.series}
                </span>
              </label>
            ))}
          </div>
          </div>

          <PulseOximeterSelector embedded />
        </div>
      </div>
    </section>
  );
}

function HandheldPortfolioSection() {
  const handheldModels = [
    {
      model: "YH01",
      image: "/homepage/P2/products/handheld-oximeter/YH01.jpg",
      description:
        "Handheld pulse oximeter direction for OEM/ODM projects that need a separate product format for healthcare applications.",
      relevance:
        "Suitable for appearance review, product configuration and private-label discussions.",
    },
    {
      model: "YH02",
      image: "/homepage/P2/products/handheld-oximeter/YH02.jpg",
      description:
        "Handheld pulse oximeter direction for OEM/ODM portfolio review and project-specific product configuration.",
      relevance:
        "Supports model comparison and project-specific OEM/ODM discussions.",
    },
  ];

  return (
    <section
      id="handheld-section"
      className="site-section-compact scroll-mt-24 bg-slate-50"
    >
      <div className="site-container">
        <div className="max-w-3xl">
          <SectionLabel>Handheld pulse oximeters</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Handheld Pulse Oximeter Solutions
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Review YimiLife handheld models as a separate product direction for
            healthcare applications, product configuration and OEM/ODM planning.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {handheldModels.map((item) => (
            <article
              key={item.model}
              className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:p-6"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-50">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.model} handheld pulse oximeter`}
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-contain p-6"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-slate-400">
                    Product image pending
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <SectionLabel>Handheld model</SectionLabel>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                  {item.model}
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {item.model} Handheld Pulse Oximeter
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {item.description}
              </p>
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  OEM/ODM relevance
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.relevance}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyPreviewSection() {
  return (
    <section className="site-section-compact bg-white">
      <div className="site-container">
        <div className="rounded-[2rem] border border-brand-100 bg-brand-50 p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>PulseMatrix™ preview</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                PulseMatrix™ Signal Platform
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                YimiLife&apos;s PulseMatrix™ engineering approach focuses on
                low-perfusion signal acquisition, motion-condition performance
                and SpO₂ measurement considerations across diverse skin
                pigmentation.
              </p>
              <Link href="/technology" className="button-primary mt-6">
                Explore Technology
                <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1">
              {technologyPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-2xl border border-brand-100 bg-white p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-950">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {point.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="site-section bg-slate-950">
      <div className="site-container text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Ready to Select Your Pulse Oximeter Platform?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Share your target market, product requirements and customization needs
          with YimiLife.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="button-primary-inverse">
            Request Product Specs
          </Link>
          <Link href="/contact" className="button-secondary-inverse">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PulseOximeterProductPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FingertipPortfolioSection />
      <HandheldPortfolioSection />
      <TechnologyPreviewSection />
      <FinalCtaSection />
    </main>
  );
}
