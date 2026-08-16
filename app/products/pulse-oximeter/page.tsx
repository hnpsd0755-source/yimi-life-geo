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
    "Explore YimiLife fingertip pulse oximeter models, configurations and OEM/ODM options for healthcare brands and distributors.",
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

const heroFamilyImages = [
  { model: "YM403", image: pulseOximeterImages.YM403 },
  { model: "YM503", image: pulseOximeterImages.YM503 },
  { model: "YM201", image: pulseOximeterImages.YM201 },
].filter((item) => item.image);

function getImageForModel(model: PulseOximeterModel) {
  return pulseOximeterImages[
    model.model as keyof typeof pulseOximeterImages
  ];
}

function getDisplaySummary(models: PulseOximeterModel[]) {
  const displayTypes = new Set(models.map((model) => model.displayType));

  if (displayTypes.has("LED") && displayTypes.has("OLED/TFT")) {
    return "LED / OLED display options";
  }

  if (displayTypes.has("OLED/TFT") && displayTypes.has("TFT")) {
    return "OLED/TFT and TFT display options";
  }

  if (displayTypes.has("LED") && displayTypes.has("OLED")) {
    return "LED / OLED display options";
  }

  return Array.from(displayTypes).join(" / ");
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
const defaultSeriesId = seriesGroups[0]?.id;

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
            Fingertip Pulse Oximeters for OEM/ODM Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore YimiLife fingertip pulse oximeter platforms with different
            appearance designs, display options and configuration possibilities
            for healthcare brands and distributors.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Request Product Specs
            </Link>
            <Link href="/contact" className="button-secondary">
              Discuss Your Project
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <div className="grid gap-3 rounded-[1.5rem] bg-white p-4 sm:grid-cols-3">
            {heroFamilyImages.map((item, index) => (
              <div
                key={item.model}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 ${
                  index === 0 ? "sm:col-span-1" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.model} fingertip pulse oximeter`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 180px, 33vw"
                  className="object-contain p-4"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                  {item.model}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              "17 Configurable Models",
              "7 Appearance Series",
              "OEM/ODM Product Platforms",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="site-section-compact bg-slate-50">
      <div className="site-container">
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
                  #series-${group.id}:checked ~ .series-detail-panels [data-series-panel="${group.id}"] {
                    display: grid;
                  }
                `,
              )
              .join("\n")}
          `}</style>

          {seriesGroups.map((group, index) => (
            <input
              key={group.id}
              id={`series-${group.id}`}
              type="radio"
              name="pulse-oximeter-series"
              className="sr-only"
              defaultChecked={group.id === defaultSeriesId || index === 0}
            />
          ))}

          <div className="series-card-grid grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {seriesGroups.map((group) => (
              <label
                key={group.id}
                htmlFor={`series-${group.id}`}
                className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 transition hover:border-brand-200 hover:bg-brand-50/70"
              >
                <span className="relative mb-4 block aspect-[4/3] overflow-hidden rounded-xl bg-slate-50">
                  {group.image && group.imageModel ? (
                    <Image
                      src={group.image}
                      alt={`${group.imageModel.model} fingertip pulse oximeter`}
                      fill
                      sizes="(min-width: 1024px) 260px, 50vw"
                      className="object-contain p-3"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center px-4 text-center text-xs font-semibold text-slate-400">
                      Image pending
                    </span>
                  )}
                </span>
                <span className="text-sm font-semibold text-brand-700">
                  {group.series}
                </span>
                <span className="mt-2 block text-xl font-semibold text-slate-950">
                  {group.appearanceName}
                </span>
                <span className="mt-3 block text-sm leading-6 text-slate-500">
                  {getDisplaySummary(group.models)}
                </span>
              </label>
            ))}
          </div>

          <div className="series-detail-panels mt-6">
            {seriesGroups.map((group) => {
              return (
                <article
                  key={group.id}
                  data-series-panel={group.id}
                  id={group.id === defaultSeriesId ? "model-matrix" : undefined}
                  className="hidden gap-5 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:p-6 lg:grid-cols-[0.7fr_0.85fr_1.15fr]"
                >
                  <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3">
                    <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-white">
                      {group.image && group.imageModel ? (
                        <Image
                          src={group.image}
                          alt={`${group.imageModel.model} fingertip pulse oximeter`}
                          fill
                          sizes="(min-width: 1024px) 360px, 100vw"
                          className="object-contain p-6"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-slate-500">
                          Product image pending
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <SectionLabel>Selected series</SectionLabel>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                      {group.series}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-brand-700">
                      {group.appearanceName}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {group.note}
                    </p>

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Available Models
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.models.map((model) => (
                        <span
                          key={model.model}
                          className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700"
                        >
                          {model.model}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Configuration Preview
                    </p>
                    <div className="mt-3 space-y-3">
                      {group.models.map((model) => (
                        <div
                          key={model.model}
                          className="rounded-xl border border-slate-200 bg-white p-3"
                        >
                          <p className="text-base font-semibold text-slate-950">
                            {model.model}
                          </p>
                          <div className="mt-2 grid gap-1.5 text-sm leading-6 text-slate-600">
                            <p>
                              <span className="font-semibold text-slate-900">
                                Display:
                              </span>{" "}
                              {model.displaySize ?? model.displayType}
                            </p>
                            <p>
                              <span className="font-semibold text-slate-900">
                                Bluetooth:
                              </span>{" "}
                              {model.bluetooth}
                            </p>
                            <p>
                              <span className="font-semibold text-slate-900">
                                Sound:
                              </span>{" "}
                              {model.sound}
                            </p>
                            <p>
                              <span className="font-semibold text-slate-900">
                                User:
                              </span>{" "}
                              {model.targetUser}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
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
      <PortfolioSection />
      <PulseOximeterSelector />
      <TechnologyPreviewSection />
      <FinalCtaSection />
    </main>
  );
}
