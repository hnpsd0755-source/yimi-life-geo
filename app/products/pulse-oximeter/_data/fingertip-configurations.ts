export type FingertipAvailability = "enabled" | "reserved";

export type FingertipDisplayGroup = "led" | "oled" | "tft" | "oled_or_tft";

export type FingertipMainboardPlatform = "YM10" | "YM21" | "YM60";

export type FingertipBleOption = "none" | "optional";

export type FingertipBuzzerOption = "none" | "included" | "optional";

export type FingertipVoiceOption = "none" | "optional" | "pending";

export type FingertipTargetUser = "adult" | "child";

export type FingertipAppearanceFamilyId =
  | "ym01_prime"
  | "ym01b_neo"
  | "ym01c_lite"
  | "ym02_pro"
  | "ym03_chic"
  | "ym04_male"
  | "ym06_child"
  | "reserved_pending";

export type FingertipAppearanceFamily = {
  id: FingertipAppearanceFamilyId;
  publicName: string;
  sourceName: string;
  availability: FingertipAvailability;
  buyerPositioning: string;
  sourceNotes?: string[];
};

export type FingertipPlatformDefinition = {
  id: FingertipMainboardPlatform;
  hardwarePlatform: string;
  softwarePlatform: string;
  softwareSubtypes: string[];
  displayCoverage: string;
};

export type FingertipConfigurationModel = {
  sequence: number;
  model: string;
  appearanceFamilyId: FingertipAppearanceFamilyId;
  display: string;
  displayGroup: FingertipDisplayGroup;
  mainboardPlatform: FingertipMainboardPlatform;
  ble: FingertipBleOption;
  buzzer: FingertipBuzzerOption;
  targetUser: FingertipTargetUser;
  voice: FingertipVoiceOption;
  availability: FingertipAvailability;
  sourceTable: "YM20 model difference matrix" | "reserved model matrix";
  sourceNotes?: string[];
};

export const fingertipConfigurationSource = {
  sourceFile:
    "public/homepage/P2/products/Fingertip Oximeter/YIMILIFE Fingertip血氧仪 产品型号.docx",
  sourceSection: "YM20 model difference matrix",
  sourceRole:
    "Single source of truth for YM20 fingertip pulse oximeter appearance, display, mainboard, BLE, buzzer, target-user and voice configuration differences.",
  importantUpdates: [
    "YM01C Lite is enabled.",
    "YM02 Pro is the current name. Previous Pro naming is deprecated.",
  ],
} as const;

export const fingertipAppearanceFamilies: FingertipAppearanceFamily[] = [
  {
    id: "ym01_prime",
    publicName: "YM01 Prime",
    sourceName: "YM01 Prime / YM01 Base",
    availability: "enabled",
    buyerPositioning: "Baseline adult fingertip appearance family.",
    sourceNotes: [
      "The paragraph section uses YM01 Prime, while the appearance table labels the base appearance as YM01 Base.",
    ],
  },
  {
    id: "ym01b_neo",
    publicName: "YM01B Neo",
    sourceName: "YM01B Neo",
    availability: "enabled",
    buyerPositioning: "Minor upper-shell update based on the YM01 appearance.",
  },
  {
    id: "ym01c_lite",
    publicName: "YM01C Lite",
    sourceName: "YM01C Lite / YM01 LITE",
    availability: "enabled",
    buyerPositioning: "Lite appearance update based on the YM01 appearance.",
    sourceNotes: [
      "The model matrix labels this family as YM01 LITE; normalized to YM01C Lite according to the source appearance table and current project instruction.",
    ],
  },
  {
    id: "ym02_pro",
    publicName: "YM02 Pro",
    sourceName: "YM02 Pro",
    availability: "enabled",
    buyerPositioning: "Major YM01-derived update with a clean professional style.",
    sourceNotes: ["Current naming is YM02 Pro. Previous Pro naming is deprecated."],
  },
  {
    id: "ym03_chic",
    publicName: "YM03 Chic",
    sourceName: "YM03 Chic",
    availability: "enabled",
    buyerPositioning: "Appearance family designed for female-oriented projects.",
  },
  {
    id: "ym04_male",
    publicName: "YM04 Male",
    sourceName: "YM04 Male",
    availability: "enabled",
    buyerPositioning: "Appearance family designed for male-oriented projects.",
  },
  {
    id: "ym06_child",
    publicName: "YM06 Child",
    sourceName: "YM06 Child",
    availability: "enabled",
    buyerPositioning: "Child-oriented fingertip appearance family.",
  },
  {
    id: "reserved_pending",
    publicName: "Reserved / Pending",
    sourceName: "Pending",
    availability: "reserved",
    buyerPositioning: "Reserved model code for future appearance or configuration planning.",
  },
];

export const fingertipPlatformDefinitions: FingertipPlatformDefinition[] = [
  {
    id: "YM10",
    hardwarePlatform: "YM10 platform",
    softwarePlatform: "YM10",
    softwareSubtypes: ["YM10_10", "YM10_11"],
    displayCoverage: "All LED display models.",
  },
  {
    id: "YM21",
    hardwarePlatform: "YM21 platform",
    softwarePlatform: "YM21",
    softwareSubtypes: [
      "YM21_1.14TFT",
      "YM21_096TFT",
      "YM21_OLED",
      "YM21_1.14TFT-BT",
      "YM21_096TFT-BT",
      "YM21_OLED-BT",
    ],
    displayCoverage: "OLED, TFT and BLE-capable models.",
  },
  {
    id: "YM60",
    hardwarePlatform: "YM60 platform",
    softwarePlatform: "YM60",
    softwareSubtypes: ["YM603"],
    displayCoverage: "Child appearance differential platform based on YM21.",
  },
];

export const enabledFingertipConfigurations: FingertipConfigurationModel[] = [
  {
    sequence: 1,
    model: "YM101",
    appearanceFamilyId: "ym01_prime",
    display: "1.5-inch red LED",
    displayGroup: "led",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 2,
    model: "YM102",
    appearanceFamilyId: "ym01_prime",
    display: "1.5-inch green LED",
    displayGroup: "led",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 3,
    model: "YM103",
    appearanceFamilyId: "ym01_prime",
    display: "1.5-inch white LED",
    displayGroup: "led",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 4,
    model: "YM201",
    appearanceFamilyId: "ym01_prime",
    display: "0.96-inch OLED/TFT",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 5,
    model: "YM301",
    appearanceFamilyId: "ym01_prime",
    display: "1.3-inch OLED",
    displayGroup: "oled",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 6,
    model: "YM111",
    appearanceFamilyId: "ym01b_neo",
    display: "1.3-inch LED",
    displayGroup: "led",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 7,
    model: "YM211",
    appearanceFamilyId: "ym01b_neo",
    display: "0.96-inch OLED/TFT",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 8,
    model: "YM112",
    appearanceFamilyId: "ym02_pro",
    display: "LED, size not restricted",
    displayGroup: "led",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 9,
    model: "YM212",
    appearanceFamilyId: "ym02_pro",
    display: "OLED/TFT, size not restricted",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "optional",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 10,
    model: "YM104",
    appearanceFamilyId: "ym01c_lite",
    display: "LED, size and color not restricted",
    displayGroup: "led",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
    sourceNotes: ["Source row labels appearance as YM01 LITE; normalized to enabled YM01C Lite."],
  },
  {
    sequence: 11,
    model: "YM202",
    appearanceFamilyId: "ym01c_lite",
    display: "OLED/TFT, size not restricted",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "none",
    buzzer: "included",
    targetUser: "adult",
    voice: "pending",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
    sourceNotes: ["Source row labels appearance as YM01 LITE; normalized to enabled YM01C Lite."],
  },
  {
    sequence: 12,
    model: "YM401",
    appearanceFamilyId: "ym03_chic",
    display: "0.96-inch OLED/TFT",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "optional",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 13,
    model: "YM403",
    appearanceFamilyId: "ym03_chic",
    display: "1.14-inch TFT",
    displayGroup: "tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "optional",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 14,
    model: "YM501",
    appearanceFamilyId: "ym04_male",
    display: "0.96-inch OLED/TFT",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "optional",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 15,
    model: "YM503",
    appearanceFamilyId: "ym04_male",
    display: "1.14-inch TFT",
    displayGroup: "tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "optional",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 16,
    model: "YM601",
    appearanceFamilyId: "ym06_child",
    display: "0.96-inch TFT",
    displayGroup: "tft",
    mainboardPlatform: "YM60",
    ble: "none",
    buzzer: "optional",
    targetUser: "child",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
  {
    sequence: 17,
    model: "YM602",
    appearanceFamilyId: "ym06_child",
    display: "0.96-inch TFT",
    displayGroup: "tft",
    mainboardPlatform: "YM60",
    ble: "none",
    buzzer: "optional",
    targetUser: "child",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
    sourceNotes: [
      "YM602 also appears in the reserved matrix with different appearance/platform values. Keep both records separated until source ownership is confirmed.",
    ],
  },
  {
    sequence: 18,
    model: "YM603",
    appearanceFamilyId: "ym06_child",
    display: "0.96-inch TFT",
    displayGroup: "tft",
    mainboardPlatform: "YM60",
    ble: "none",
    buzzer: "optional",
    targetUser: "child",
    voice: "none",
    availability: "enabled",
    sourceTable: "YM20 model difference matrix",
  },
];

export const reservedFingertipConfigurations: FingertipConfigurationModel[] = [
  {
    sequence: 1,
    model: "YM113",
    appearanceFamilyId: "reserved_pending",
    display: "LED, size and color not restricted",
    displayGroup: "led",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "reserved",
    sourceTable: "reserved model matrix",
  },
  {
    sequence: 2,
    model: "YM114",
    appearanceFamilyId: "reserved_pending",
    display: "LED, size and color not restricted",
    displayGroup: "led",
    mainboardPlatform: "YM10",
    ble: "none",
    buzzer: "none",
    targetUser: "adult",
    voice: "none",
    availability: "reserved",
    sourceTable: "reserved model matrix",
  },
  {
    sequence: 3,
    model: "YM302",
    appearanceFamilyId: "reserved_pending",
    display: "OLED/TFT, size not restricted",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "none",
    buzzer: "included",
    targetUser: "adult",
    voice: "pending",
    availability: "reserved",
    sourceTable: "reserved model matrix",
  },
  {
    sequence: 4,
    model: "YM314",
    appearanceFamilyId: "reserved_pending",
    display: "OLED/TFT, size not restricted",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "none",
    buzzer: "included",
    targetUser: "adult",
    voice: "pending",
    availability: "reserved",
    sourceTable: "reserved model matrix",
  },
  {
    sequence: 5,
    model: "YM602",
    appearanceFamilyId: "reserved_pending",
    display: "0.96-inch TFT",
    displayGroup: "tft",
    mainboardPlatform: "YM21",
    ble: "none",
    buzzer: "included",
    targetUser: "child",
    voice: "pending",
    availability: "reserved",
    sourceTable: "reserved model matrix",
    sourceNotes: [
      "Source conflict: YM602 is also listed in the enabled matrix as YM06 Child / YM60 / optional buzzer / no voice.",
    ],
  },
  {
    sequence: 6,
    model: "YM402",
    appearanceFamilyId: "reserved_pending",
    display: "OLED/TFT, size not restricted",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "pending",
    availability: "reserved",
    sourceTable: "reserved model matrix",
  },
  {
    sequence: 7,
    model: "YM502",
    appearanceFamilyId: "reserved_pending",
    display: "OLED/TFT, size not restricted",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "pending",
    availability: "reserved",
    sourceTable: "reserved model matrix",
  },
  {
    sequence: 8,
    model: "YM504",
    appearanceFamilyId: "reserved_pending",
    display: "OLED/TFT, size not restricted",
    displayGroup: "oled_or_tft",
    mainboardPlatform: "YM21",
    ble: "optional",
    buzzer: "included",
    targetUser: "adult",
    voice: "pending",
    availability: "reserved",
    sourceTable: "reserved model matrix",
  },
];

export const allFingertipConfigurations = [
  ...enabledFingertipConfigurations,
  ...reservedFingertipConfigurations,
];

export function getFingertipConfigurationsByAppearance(
  appearanceFamilyId: FingertipAppearanceFamilyId,
) {
  return allFingertipConfigurations.filter(
    (configuration) => configuration.appearanceFamilyId === appearanceFamilyId,
  );
}

export function getFingertipConfigurationsByPlatform(platform: FingertipMainboardPlatform) {
  return allFingertipConfigurations.filter(
    (configuration) => configuration.mainboardPlatform === platform,
  );
}

export function getFingertipConfigurationsByBle(ble: FingertipBleOption) {
  return allFingertipConfigurations.filter((configuration) => configuration.ble === ble);
}

export function getEnabledFingertipConfigurationByModel(model: string) {
  return enabledFingertipConfigurations.find(
    (configuration) => configuration.model.toLowerCase() === model.toLowerCase(),
  );
}
