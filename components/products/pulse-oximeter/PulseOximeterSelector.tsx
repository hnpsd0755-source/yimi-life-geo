"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import {
  pulseOximeterModels,
  type PulseOximeterModel,
} from "@/data/pulseOximeterModels";
import { pulseOximeterImages } from "@/data/pulseOximeterImages";
import {
  getPulseOximeterSelectorRecommendations,
  pulseOximeterSelectorRules,
  type PulseOximeterSelectorInput,
} from "@/data/pulseOximeterSelectorRules";

type SelectorFilters = {
  appearanceSeries: string;
  displayType: string;
  bluetooth: "" | "No" | "Optional";
  sound: "" | "No" | "Yes";
  targetUser: "Adult" | "Child";
};

type Option = {
  label: string;
  value: string;
  helper?: string;
};

const appearanceOptions: Option[] = [
  {
    label: "Classic",
    value: "YM01 Prime",
    helper: "Established fingertip form for broad OEM projects.",
  },
  {
    label: "Updated",
    value: "YM01 Neo",
    helper: "Minor appearance refresh for familiar product lines.",
  },
  {
    label: "Compact",
    value: "YM01C Lite",
    helper: "Compact design direction with LED or OLED/TFT options.",
  },
  {
    label: "Professional",
    value: "YM02 Pro",
    helper: "Clean professional styling for differentiated projects.",
  },
  {
    label: "Lifestyle",
    value: "YM03 Chic",
    helper: "Lifestyle-oriented appearance for stronger shelf presence.",
  },
  {
    label: "Professional Style",
    value: "YM04 Male",
    helper: "Structured style for professional product positioning.",
  },
  {
    label: "Child",
    value: "YM06 Child",
    helper: "Child-oriented fingertip design direction.",
  },
];

const displayOptions: Option[] = [
  {
    label: "LED",
    value: "LED",
    helper: "Standard display direction.",
  },
  {
    label: "OLED",
    value: "OLED",
    helper: "OLED or OLED/TFT product direction.",
  },
  {
    label: "TFT",
    value: "TFT",
    helper: "Stronger visual presentation for OEM demonstration.",
  },
];

const connectivityOptions: Option[] = [
  {
    label: "Standard",
    value: "No",
    helper: "No Bluetooth option.",
  },
  {
    label: "Bluetooth",
    value: "Optional",
    helper: "Bluetooth optional configuration.",
  },
];

const soundOptions: Option[] = [
  {
    label: "No Sound",
    value: "No",
    helper: "Standard no-sound configuration.",
  },
  {
    label: "Sound Option",
    value: "Yes",
    helper: "Models with sound option in the current database.",
  },
];

const userOptions: Option[] = [
  {
    label: "Adult",
    value: "Adult",
    helper: "Default website scenario.",
  },
  {
    label: "Child",
    value: "Child",
    helper: "Child-oriented public models.",
  },
];

const modelByCode = new Map(
  pulseOximeterModels.map((model) => [model.model, model]),
);

function toSelectorInput(filters: SelectorFilters): PulseOximeterSelectorInput {
  const input: PulseOximeterSelectorInput = {
    targetUser: filters.targetUser,
  };

  if (filters.appearanceSeries) {
    input.appearanceSeries = filters.appearanceSeries;
  }

  if (filters.displayType) {
    input.displayType = filters.displayType;
  }

  if (filters.bluetooth) {
    input.bluetooth = filters.bluetooth;
  }

  if (filters.sound) {
    input.sound = filters.sound;
  }

  return input;
}

function getImageForModel(model: PulseOximeterModel) {
  return pulseOximeterImages[
    model.model as keyof typeof pulseOximeterImages
  ];
}

function getSoundLabel(sound: PulseOximeterModel["sound"]) {
  if (sound === "No") {
    return "No Sound";
  }

  return "Sound Option";
}

function OptionGroup({
  eyebrow,
  title,
  options,
  selectedValue,
  onSelect,
}: {
  eyebrow: string;
  title: string;
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          {eyebrow}
        </p>
        <h3 className="mt-1 text-base font-semibold text-slate-950">{title}</h3>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const isSelected = option.value === selectedValue;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option.value)}
              className={`rounded-xl border p-3 text-left transition ${
                isSelected
                  ? "border-brand-500 bg-brand-50 text-brand-800 shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:bg-brand-50/60"
              }`}
            >
              <span className="block text-sm font-semibold">{option.label}</span>
              {option.helper ? (
                <span className="mt-1 block text-xs leading-5 text-slate-500">
                  {option.helper}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function RecommendedModelCard({
  model,
  rank,
}: {
  model: PulseOximeterModel;
  rank: number;
}) {
  const image = getImageForModel(model);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-slate-50">
        {image ? (
          <Image
            src={image}
            alt={`${model.model} fingertip pulse oximeter`}
            width={520}
            height={390}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="px-6 text-center">
            <p className="text-sm font-semibold text-slate-500">
              Product image pending
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Image mapping is not yet available for this model.
            </p>
          </div>
        )}

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
          {rank === 0 ? "Best Match" : `Alternative ${rank}`}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">
              {model.model}
            </h3>
            <p className="mt-1 text-sm font-semibold text-brand-700">
              {model.appearanceSeries}
            </p>
          </div>

          <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {model.targetUser}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {model.appearanceName}
        </p>

        <div className="mt-4 grid gap-2 text-sm text-slate-700">
          <p>
            <span className="font-semibold text-slate-950">Display:</span>{" "}
            {model.displaySize ?? model.displayType}
          </p>
          <p>
            <span className="font-semibold text-slate-950">Connectivity:</span>{" "}
            {model.bluetooth === "Optional" ? "Bluetooth Optional" : "Standard"}
          </p>
          <p>
            <span className="font-semibold text-slate-950">Sound:</span>{" "}
            {getSoundLabel(model.sound)}
          </p>
        </div>

        <a
          href="#model-matrix"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-600 bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-700 hover:bg-brand-700"
        >
          View Specifications
        </a>
      </div>
    </article>
  );
}

export function PulseOximeterSelector() {
  const [filters, setFilters] = useState<SelectorFilters>({
    appearanceSeries: "",
    displayType: "",
    bluetooth: "",
    sound: "",
    targetUser: "Adult",
  });

  const recommendedModels = useMemo(() => {
    if (pulseOximeterSelectorRules.length === 0) {
      return [];
    }

    return getPulseOximeterSelectorRecommendations(toSelectorInput(filters))
      .map((recommendation) => modelByCode.get(recommendation.model))
      .filter((model): model is PulseOximeterModel => Boolean(model))
      .slice(0, 3);
  }, [filters]);

  return (
    <section className="site-section-compact bg-slate-50">
      <div className="site-container">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            OEM configuration assistant
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Configure Your Fingertip Pulse Oximeter
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Select the product direction that fits your OEM or ODM project. The
            result highlights suitable public YimiLife models without exposing
            internal platforms or unconfirmed specifications.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_26rem]">
          <div className="space-y-4">
            <OptionGroup
              eyebrow="01 Select Appearance"
              title="Choose the product style direction"
              options={appearanceOptions}
              selectedValue={filters.appearanceSeries}
              onSelect={(value) =>
                setFilters((current) => ({
                  ...current,
                  appearanceSeries:
                    current.appearanceSeries === value ? "" : value,
                }))
              }
            />

            <OptionGroup
              eyebrow="02 Select Display"
              title="Choose the preferred display direction"
              options={displayOptions}
              selectedValue={filters.displayType}
              onSelect={(value) =>
                setFilters((current) => ({
                  ...current,
                  displayType: current.displayType === value ? "" : value,
                }))
              }
            />

            <OptionGroup
              eyebrow="03 Select Connectivity"
              title="Choose standard or Bluetooth optional configuration"
              options={connectivityOptions}
              selectedValue={filters.bluetooth}
              onSelect={(value) =>
                setFilters((current) => ({
                  ...current,
                  bluetooth:
                    current.bluetooth === value
                      ? ""
                      : (value as SelectorFilters["bluetooth"]),
                }))
              }
            />

            <OptionGroup
              eyebrow="04 Select Sound Option"
              title="Choose whether sound is required"
              options={soundOptions}
              selectedValue={filters.sound}
              onSelect={(value) =>
                setFilters((current) => ({
                  ...current,
                  sound:
                    current.sound === value
                      ? ""
                      : (value as SelectorFilters["sound"]),
                }))
              }
            />

            <OptionGroup
              eyebrow="05 Select User"
              title="Choose the target user direction"
              options={userOptions}
              selectedValue={filters.targetUser}
              onSelect={(value) =>
                setFilters((current) => ({
                  ...current,
                  targetUser: value as SelectorFilters["targetUser"],
                }))
              }
            />
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Recommended Models
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                Best-fit product directions
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Top recommendations are ranked by appearance, display,
                connectivity, sound and target user fit.
              </p>
            </div>

            <div className="space-y-4">
              {recommendedModels.map((model, index) => (
                <RecommendedModelCard
                  key={model.model}
                  model={model}
                  rank={index}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default PulseOximeterSelector;
