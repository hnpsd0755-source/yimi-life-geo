"use client";

import { useEffect, useMemo, useState } from "react";

import {
  pulseOximeterModels,
  type PulseOximeterModel,
} from "@/data/pulseOximeterModels";
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
  targetUser: "" | "Adult" | "Child";
};

type Option = {
  label: string;
  value: string;
  helper?: string;
};

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

const seriesDisplayNames: Record<string, string> = {
  "YM01 Prime": "Prime",
  "YM01 Neo": "Neo",
  "YM01C Lite": "Lite",
  "YM02 Pro": "Pro",
  "YM03 Chic": "Chic",
  "YM04 Male": "Male",
  "YM06 Child": "Child",
};

function toSelectorInput(filters: SelectorFilters): PulseOximeterSelectorInput {
  const input: PulseOximeterSelectorInput = {};

  if (filters.appearanceSeries) {
    input.appearanceSeries = filters.appearanceSeries;
  }

  if (filters.displayType) {
    input.displayType = filters.displayType;
  }

  if (filters.bluetooth) {
    input.bluetooth = filters.bluetooth;
  }

  if (filters.targetUser) {
    input.targetUser = filters.targetUser;
  }

  if (filters.sound) {
    input.sound = filters.sound;
  }

  return input;
}

function OptionGroup({
  eyebrow,
  options,
  selectedValue,
  onSelect,
}: {
  eyebrow: string;
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-3">
      <div className="mb-2">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
          {eyebrow}
        </p>
      </div>

      <div className="grid gap-2 grid-cols-2">
        {options.map((option) => {
          const isSelected = option.value === selectedValue;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(option.value)}
              className={`rounded-xl border px-2.5 py-2 text-center transition ${
                isSelected
                  ? "border-brand-500 bg-brand-50 text-brand-800 shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:bg-brand-50/60"
              }`}
            >
              <span className="block text-xs font-semibold">{option.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function PulseOximeterSelector({ embedded = false }: { embedded?: boolean }) {
  const [filters, setFilters] = useState<SelectorFilters>({
    appearanceSeries: "",
    displayType: "",
    bluetooth: "",
    sound: "",
    targetUser: "",
  });

  useEffect(() => {
    const appearanceInputs = Array.from(
      document.querySelectorAll<HTMLInputElement>(
        'input[name="pulse-oximeter-series"]',
      ),
    );
    const appearanceLabels = Array.from(
      document.querySelectorAll<HTMLLabelElement>(
        ".series-card-grid label[for^='series-']",
      ),
    );

    const syncAppearance = () => {
      const selectedAppearance =
        appearanceInputs.find((input) => input.checked)?.value ?? "";

      setFilters((current) =>
        current.appearanceSeries === selectedAppearance
          ? current
          : { ...current, appearanceSeries: selectedAppearance },
      );
    };

    const toggleAppearance = (event: MouseEvent) => {
      const label = event.currentTarget as HTMLLabelElement;
      const input = document.getElementById(label.htmlFor) as HTMLInputElement | null;

      if (input?.checked) {
        event.preventDefault();
        input.checked = false;
        input.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };

    appearanceInputs.forEach((input) =>
      input.addEventListener("change", syncAppearance),
    );
    appearanceLabels.forEach((label) =>
      label.addEventListener("click", toggleAppearance),
    );
    syncAppearance();

    return () => {
      appearanceInputs.forEach((input) =>
        input.removeEventListener("change", syncAppearance),
      );
      appearanceLabels.forEach((label) =>
        label.removeEventListener("click", toggleAppearance),
      );
    };
  }, []);

  const recommendedModels = useMemo(() => {
    if (pulseOximeterSelectorRules.length === 0) {
      return [];
    }

    return getPulseOximeterSelectorRecommendations(toSelectorInput(filters))
      .map((recommendation) => modelByCode.get(recommendation.model))
      .filter((model): model is PulseOximeterModel => Boolean(model))
      .slice(0, 3);
  }, [filters]);

  const selectorContent = (
    <div
      className={
        embedded
          ? "mt-8 border-t border-slate-200 pt-8"
          : "site-container"
      }
    >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <OptionGroup
              eyebrow="01 Display"
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
              eyebrow="02 Bluetooth"
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
              eyebrow="03 Buzzer"
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
              eyebrow="04 User"
              options={userOptions}
              selectedValue={filters.targetUser}
              onSelect={(value) =>
                setFilters((current) => ({
                  ...current,
                  targetUser:
                    current.targetUser === value
                      ? ""
                      : (value as SelectorFilters["targetUser"]),
                }))
              }
            />
        </div>

        <aside className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 bg-brand-50 px-4 py-4 md:px-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                Recommended Models
              </p>
              <h3 className="mt-1 text-xl font-semibold text-slate-950">
                Best-fit models
              </h3>
            </div>
            <p className="text-sm text-slate-600">Updates with your selections.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
              <colgroup>
                <col className="w-[16%]" />
                <col className="w-[14%]" />
                <col className="w-[20%]" />
                <col className="w-[13%]" />
                <col className="w-[12%]" />
                <col className="w-[12%]" />
                <col className="w-[13%]" />
              </colgroup>
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Available Models
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Appearance Series
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Display
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Bluetooth BLE
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Buzzer
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Voice
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Target User
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs leading-5 text-slate-600">
                {recommendedModels.map((model, index) => (
                  <tr key={model.model} className="border-t border-slate-200">
                    <th scope="row" className="px-3 py-3 text-sm font-semibold text-slate-950">
                      <a href="#fingertip-portfolio" className="hover:text-brand-700">
                        {model.model}
                      </a>
                      <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.1em] text-brand-700">
                        {index === 0 ? "Best Match" : `Alternative ${index}`}
                      </span>
                    </th>
                    <td className="px-3 py-3 font-semibold text-slate-900">
                      {seriesDisplayNames[model.appearanceSeries] ?? model.appearanceSeries}
                    </td>
                    <td className="px-3 py-3">
                      {model.displaySize ?? model.displayType}
                    </td>
                    <td className="px-3 py-3">{model.bluetooth}</td>
                    <td className="px-3 py-3">{model.sound}</td>
                    <td className="px-3 py-3">{model.voice}</td>
                    <td className="px-3 py-3">{model.targetUser}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </aside>
    </div>
  );

  return embedded ? (
    selectorContent
  ) : (
    <section className="site-section-compact bg-slate-50">
      {selectorContent}
    </section>
  );
}

export default PulseOximeterSelector;
