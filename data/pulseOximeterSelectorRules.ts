import {
  pulseOximeterModels,
  type PulseOximeterModel,
} from "./pulseOximeterModels";

export type PulseOximeterSelectorInput = Partial<
  Pick<
    PulseOximeterModel,
    "appearanceSeries" | "displayType" | "bluetooth" | "sound" | "targetUser"
  >
>;

export interface PulseOximeterSelectorRule {
  filters: PulseOximeterSelectorInput;
  recommendedModels: string[];
  priority: 10 | 5 | 1;
  reason: string;
}

export interface PulseOximeterSelectorRecommendation {
  model: string;
  score: number;
  reasons: string[];
  matchedRulePriorities: number[];
}

const selectorFilterKeys = [
  "appearanceSeries",
  "displayType",
  "bluetooth",
  "sound",
  "targetUser",
] as const;

export const pulseOximeterSelectorRules: PulseOximeterSelectorRule[] = [
  {
    filters: {
      appearanceSeries: "YM06 Child",
    },
    recommendedModels: ["YM603", "YM601"],
    priority: 10,
    reason: "Child-oriented fingertip design with TFT display configuration.",
  },
  {
    filters: {
      appearanceSeries: "YM03 Chic",
    },
    recommendedModels: ["YM403", "YM401"],
    priority: 10,
    reason: "Lifestyle-oriented fingertip design with OLED/TFT display options.",
  },
  {
    filters: {
      appearanceSeries: "YM04 Male",
    },
    recommendedModels: ["YM503", "YM501"],
    priority: 10,
    reason: "Professional style fingertip design with OLED/TFT display options.",
  },
  {
    filters: {
      appearanceSeries: "YM02 Pro",
    },
    recommendedModels: ["YM212", "YM112"],
    priority: 10,
    reason: "Professional fingertip design with LED or OLED/TFT configurations.",
  },
  {
    filters: {
      appearanceSeries: "YM01 Prime",
    },
    recommendedModels: ["YM201", "YM301", "YM101"],
    priority: 10,
    reason: "Classic fingertip product family with multiple display configurations.",
  },
  {
    filters: {
      appearanceSeries: "YM01C Lite",
    },
    recommendedModels: ["YM202", "YM104"],
    priority: 10,
    reason: "Compact fingertip design with LED or OLED/TFT configurations.",
  },
  {
    filters: {
      displayType: "TFT",
    },
    recommendedModels: ["YM403", "YM503", "YM603", "YM601"],
    priority: 5,
    reason: "Models with TFT display configuration.",
  },
  {
    filters: {
      displayType: "OLED",
    },
    recommendedModels: ["YM301", "YM211", "YM401", "YM501", "YM212"],
    priority: 5,
    reason: "Models with OLED display configuration.",
  },
  {
    filters: {
      displayType: "LED",
    },
    recommendedModels: ["YM101", "YM111", "YM102", "YM103", "YM104", "YM112"],
    priority: 5,
    reason: "Models with LED display configuration.",
  },
  {
    filters: {
      bluetooth: "Optional",
    },
    recommendedModels: ["YM403", "YM503", "YM401", "YM501", "YM212", "YM211"],
    priority: 5,
    reason: "Models supporting Bluetooth option.",
  },
  {
    filters: {
      bluetooth: "No",
    },
    recommendedModels: [
      "YM101",
      "YM102",
      "YM103",
      "YM104",
      "YM111",
      "YM112",
      "YM201",
      "YM202",
      "YM301",
      "YM601",
      "YM603",
    ],
    priority: 5,
    reason: "Standard fingertip configurations without Bluetooth option.",
  },
  {
    filters: {
      sound: "Yes",
    },
    recommendedModels: [
      "YM403",
      "YM503",
      "YM401",
      "YM501",
      "YM212",
      "YM211",
      "YM202",
      "YM603",
      "YM601",
    ],
    priority: 5,
    reason: "Models with sound option in the current configuration database.",
  },
  {
    filters: {
      sound: "Optional",
    },
    recommendedModels: ["YM603", "YM601"],
    priority: 5,
    reason: "Child models with optional sound configuration.",
  },
  {
    filters: {
      targetUser: "Adult",
    },
    recommendedModels: [
      "YM101",
      "YM102",
      "YM103",
      "YM104",
      "YM111",
      "YM112",
      "YM201",
      "YM202",
      "YM211",
      "YM212",
      "YM301",
      "YM401",
      "YM403",
      "YM501",
      "YM503",
    ],
    priority: 1,
    reason: "Adult fingertip pulse oximeter configurations in the current public model database.",
  },
  {
    filters: {
      targetUser: "Child",
    },
    recommendedModels: ["YM603", "YM601"],
    priority: 10,
    reason: "Child-oriented fingertip models in the current public model database.",
  },
  {
    filters: {},
    recommendedModels: ["YM201", "YM403", "YM603"],
    priority: 1,
    reason: "Representative models covering classic, premium and child design directions.",
  },
];

export const pulseOximeterSelectorRuleModelIds = Array.from(
  new Set(pulseOximeterSelectorRules.flatMap((rule) => rule.recommendedModels)),
);

function getDefinedFilterEntries(filters: PulseOximeterSelectorInput) {
  return selectorFilterKeys
    .map((key) => [key, filters[key]] as const)
    .filter((entry): entry is [typeof selectorFilterKeys[number], string] =>
      Boolean(entry[1]),
    );
}

function isDefaultFallbackRule(rule: PulseOximeterSelectorRule) {
  return getDefinedFilterEntries(rule.filters).length === 0;
}

function ruleMatchesInput(
  rule: PulseOximeterSelectorRule,
  input: PulseOximeterSelectorInput,
) {
  const selectedEntries = getDefinedFilterEntries(input);
  const ruleEntries = getDefinedFilterEntries(rule.filters);

  if (selectedEntries.length === 0) {
    return isDefaultFallbackRule(rule);
  }

  if (ruleEntries.length === 0) {
    return false;
  }

  const hasOverlap = ruleEntries.some(([key]) => Boolean(input[key]));
  const hasConflict = ruleEntries.some(
    ([key, ruleValue]) => input[key] && input[key] !== ruleValue,
  );

  return hasOverlap && !hasConflict;
}

function modelIsCompatibleWithInput(
  model: PulseOximeterModel,
  input: PulseOximeterSelectorInput,
) {
  if (input.bluetooth && model.bluetooth !== input.bluetooth) {
    return false;
  }

  if (input.sound === "No" && model.sound !== "No") {
    return false;
  }

  if (input.sound === "Optional" && model.sound !== "Optional") {
    return false;
  }

  if (
    input.sound === "Yes" &&
    model.sound !== "Yes" &&
    model.sound !== "Optional"
  ) {
    return false;
  }

  if (input.targetUser === "Child" && model.targetUser !== "Child") {
    return false;
  }

  return true;
}

export function getPulseOximeterSelectorRecommendations(
  input: PulseOximeterSelectorInput = {},
): PulseOximeterSelectorRecommendation[] {
  const selectedEntries = getDefinedFilterEntries(input);
  const matchedRules = pulseOximeterSelectorRules.filter((rule) =>
    ruleMatchesInput(rule, input),
  );
  const activeRules =
    matchedRules.length > 0
      ? matchedRules
      : pulseOximeterSelectorRules.filter(isDefaultFallbackRule);
  const modelByCode = new Map(
    pulseOximeterModels.map((model) => [model.model, model]),
  );
  const recommendationMap = new Map<
    string,
    PulseOximeterSelectorRecommendation & { firstSeen: number }
  >();

  activeRules.forEach((rule, ruleIndex) => {
    rule.recommendedModels.forEach((modelCode, modelIndex) => {
      const model = modelByCode.get(modelCode);

      if (!model) {
        return;
      }

      if (selectedEntries.length > 0 && !modelIsCompatibleWithInput(model, input)) {
        return;
      }

      const existing = recommendationMap.get(modelCode);

      if (existing) {
        existing.score += rule.priority;
        existing.reasons.push(rule.reason);
        existing.matchedRulePriorities.push(rule.priority);
        return;
      }

      recommendationMap.set(modelCode, {
        model: modelCode,
        score: rule.priority,
        reasons: [rule.reason],
        matchedRulePriorities: [rule.priority],
        firstSeen: ruleIndex * 100 + modelIndex,
      });
    });
  });

  if (recommendationMap.size === 0 && selectedEntries.length > 0) {
    pulseOximeterModels
      .filter((model) => modelIsCompatibleWithInput(model, input))
      .forEach((model, index) => {
        recommendationMap.set(model.model, {
          model: model.model,
          score: 1,
          reasons: ["Model matches the selected conditions in the current database."],
          matchedRulePriorities: [1],
          firstSeen: index,
        });
      });
  }

  return Array.from(recommendationMap.values())
    .sort((a, b) => b.score - a.score || a.firstSeen - b.firstSeen)
    .map((recommendation) => ({
      model: recommendation.model,
      score: recommendation.score,
      reasons: recommendation.reasons,
      matchedRulePriorities: recommendation.matchedRulePriorities,
    }));
}
