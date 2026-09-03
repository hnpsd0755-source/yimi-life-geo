export interface PulseOximeterModel {
  model: string;
  productFamily: string;
  appearanceSeries: string;
  appearanceName: string;
  appearanceDescription: string;
  displayType: string;
  displaySize?: string;
  platform: string;
  bluetooth: "No" | "Optional";
  sound: "No" | "Optional" | "Yes";
  voice: "No" | "Optional" | "TBD";
  targetUser: "Adult" | "Child";
  publicStatus: "public";
  marketPosition?: string;
  configurationTags?: string[];
  image?: string;
}

export type PulseOximeterSelectorFilters = Partial<
  Pick<
    PulseOximeterModel,
    | "productFamily"
    | "appearanceSeries"
    | "displayType"
    | "bluetooth"
    | "sound"
    | "targetUser"
  >
>;

export const pulseOximeterModelSource = {
  sourceFile:
    "public/homepage/P2/products/Fingertip Oximeter/YIMILIFE Fingertip血氧仪 产品型号.docx",
  sourceSection: "YM20 model difference matrix",
  sourceTable: "Table 2",
  sourceRole:
    "Single source of truth for public YM20 fingertip pulse oximeter model differences.",
  notes: [
    "YM01C Lite is enabled as a public model.",
    "Use YM02 Pro for the Pro appearance series.",
    "Reserved future models are intentionally excluded from customer-facing selector logic.",
  ],
} as const;

export const pulseOximeterAppearanceOptions = [
  "YM01 Prime",
  "YM01 Neo",
  "YM02 Pro",
  "YM01C Lite",
  "YM03 Chic",
  "YM04 Male",
  "YM06 Child",
] as const;

export const pulseOximeterProductFamilyOptions = [
  "Fingertip Pulse Oximeter",
] as const;

export const pulseOximeterDisplayOptions = [
  "LED",
  "OLED/TFT",
  "OLED",
  "TFT",
] as const;

export const pulseOximeterBluetoothOptions = ["No", "Optional"] as const;

export const pulseOximeterSoundOptions = ["No", "Optional", "Yes"] as const;

export const pulseOximeterTargetUserOptions = ["Adult", "Child"] as const;

export const pulseOximeterModels: PulseOximeterModel[] = [
  {
    model: "YM101",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01 Prime",
    appearanceName: "Classic Fingertip Design",
    appearanceDescription: "Baseline adult fingertip appearance family.",
    displayType: "LED",
    displaySize: "1.5-inch red LED",
    platform: "YM10",
    bluetooth: "No",
    sound: "No",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "Baseline LED model for adult fingertip pulse oximeter projects.",
    configurationTags: ["YM01 Prime", "LED", "No Bluetooth", "Adult"],
    image: "/homepage/P2/products/fingertip-oximeter/YM101.jpg",
  },
  {
    model: "YM102",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01 Prime",
    appearanceName: "Classic Fingertip Design",
    appearanceDescription: "Baseline adult fingertip appearance family.",
    displayType: "LED",
    displaySize: "1.5-inch green LED",
    platform: "YM10",
    bluetooth: "No",
    sound: "No",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "Green LED configuration under the YM01 Prime appearance.",
    configurationTags: ["YM01 Prime", "LED", "No Bluetooth", "Adult"],
    image: "/homepage/P2/products/fingertip-oximeter/YM102.jpg",
  },
  {
    model: "YM103",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01 Prime",
    appearanceName: "Classic Fingertip Design",
    appearanceDescription: "Baseline adult fingertip appearance family.",
    displayType: "LED",
    displaySize: "1.5-inch white LED",
    platform: "YM10",
    bluetooth: "No",
    sound: "No",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "White LED configuration under the YM01 Prime appearance.",
    configurationTags: ["YM01 Prime", "LED", "No Bluetooth", "Adult"],
    image: "/homepage/P2/products/fingertip-oximeter/YM103.jpg",
  },
  {
    model: "YM201",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01 Prime",
    appearanceName: "Classic Fingertip Design",
    appearanceDescription: "Baseline adult fingertip appearance family.",
    displayType: "OLED/TFT",
    displaySize: "0.96-inch OLED/TFT",
    platform: "YM10",
    bluetooth: "No",
    sound: "No",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "Compact OLED/TFT display configuration under YM01 Prime.",
    configurationTags: ["YM01 Prime", "OLED/TFT", "No Bluetooth", "Adult"],
    image: "/homepage/P2/products/fingertip-oximeter/YM201.jpg",
  },
  {
    model: "YM301",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01 Prime",
    appearanceName: "Classic Fingertip Design",
    appearanceDescription: "Baseline adult fingertip appearance family.",
    displayType: "OLED",
    displaySize: "1.3-inch OLED",
    platform: "YM10",
    bluetooth: "No",
    sound: "No",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "Larger OLED display configuration under YM01 Prime.",
    configurationTags: ["YM01 Prime", "OLED", "No Bluetooth", "Adult"],
    image: "/homepage/P2/products/fingertip-oximeter/YM301.jpg",
  },
  {
    model: "YM111",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01 Neo",
    appearanceName: "Updated Fingertip Design",
    appearanceDescription: "Minor upper-shell update based on the YM01 appearance.",
    displayType: "LED",
    displaySize: "1.3-inch LED",
    platform: "YM10",
    bluetooth: "No",
    sound: "No",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "LED model under the YM01 Neo appearance update.",
    configurationTags: ["YM01 Neo", "LED", "No Bluetooth", "Adult"],
  },
  {
    model: "YM211",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01 Neo",
    appearanceName: "Updated Fingertip Design",
    appearanceDescription: "Minor upper-shell update based on the YM01 appearance.",
    displayType: "OLED/TFT",
    displaySize: "0.96-inch OLED/TFT",
    platform: "YM21",
    bluetooth: "Optional",
    sound: "Yes",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "OLED/TFT model under YM01 Neo with optional Bluetooth.",
    configurationTags: ["YM01 Neo", "OLED/TFT", "Optional Bluetooth", "Sound", "Adult"],
  },
  {
    model: "YM112",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM02 Pro",
    appearanceName: "Professional Fingertip Design",
    appearanceDescription: "Major YM01-derived update with a clean professional style.",
    displayType: "LED",
    displaySize: "LED, size not restricted",
    platform: "YM10",
    bluetooth: "No",
    sound: "No",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "LED configuration under the YM02 Pro appearance.",
    configurationTags: ["YM02 Pro", "LED", "No Bluetooth", "Adult"],
  },
  {
    model: "YM212",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM02 Pro",
    appearanceName: "Professional Fingertip Design",
    appearanceDescription: "Major YM01-derived update with a clean professional style.",
    displayType: "OLED/TFT",
    displaySize: "OLED/TFT, size not restricted",
    platform: "YM21",
    bluetooth: "Optional",
    sound: "Yes",
    voice: "Optional",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "OLED/TFT YM02 Pro configuration with optional Bluetooth and voice.",
    configurationTags: ["YM02 Pro", "OLED/TFT", "Optional Bluetooth", "Sound", "Optional Voice", "Adult"],
  },
  {
    model: "YM104",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01C Lite",
    appearanceName: "Compact Fingertip Design",
    appearanceDescription: "Lite appearance update based on the YM01 appearance.",
    displayType: "LED",
    displaySize: "LED, size and color not restricted",
    platform: "YM10",
    bluetooth: "No",
    sound: "No",
    voice: "No",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "Enabled YM01C Lite LED model for adult fingertip projects.",
    configurationTags: ["YM01C Lite", "LED", "No Bluetooth", "Adult"],
  },
  {
    model: "YM202",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM01C Lite",
    appearanceName: "Compact Fingertip Design",
    appearanceDescription: "Lite appearance update based on the YM01 appearance.",
    displayType: "OLED/TFT",
    displaySize: "OLED/TFT, size not restricted",
    platform: "YM21",
    bluetooth: "No",
    sound: "Yes",
    voice: "TBD",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "Enabled YM01C Lite OLED/TFT model with sound.",
    configurationTags: ["YM01C Lite", "OLED/TFT", "No Bluetooth", "Sound", "Adult"],
  },
  {
    model: "YM401",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM03 Chic",
    appearanceName: "Lifestyle Fingertip Design",
    appearanceDescription: "Appearance family designed for female-oriented projects.",
    displayType: "OLED/TFT",
    displaySize: "0.96-inch OLED/TFT",
    platform: "YM21",
    bluetooth: "Optional",
    sound: "Yes",
    voice: "Optional",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "Chic appearance configuration with optional Bluetooth and voice.",
    configurationTags: ["YM03 Chic", "OLED/TFT", "Optional Bluetooth", "Sound", "Optional Voice", "Adult"],
    image: "/homepage/P2/products/fingertip-oximeter/YM401.jpg",
  },
  {
    model: "YM403",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM03 Chic",
    appearanceName: "Lifestyle Fingertip Design",
    appearanceDescription: "Appearance family designed for female-oriented projects.",
    displayType: "TFT",
    displaySize: "1.14-inch TFT",
    platform: "YM21",
    bluetooth: "Optional",
    sound: "Yes",
    voice: "Optional",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "YM03 Chic model with 1.14-inch TFT display.",
    configurationTags: ["YM03 Chic", "TFT", "Optional Bluetooth", "Sound", "Optional Voice", "Adult"],
  },
  {
    model: "YM501",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM04 Male",
    appearanceName: "Professional Style Design",
    appearanceDescription: "Appearance family designed for male-oriented projects.",
    displayType: "OLED/TFT",
    displaySize: "0.96-inch OLED/TFT",
    platform: "YM21",
    bluetooth: "Optional",
    sound: "Yes",
    voice: "Optional",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "YM04 Male appearance configuration with optional Bluetooth and voice.",
    configurationTags: ["YM04 Male", "OLED/TFT", "Optional Bluetooth", "Sound", "Optional Voice", "Adult"],
    image: "/homepage/P2/products/fingertip-oximeter/YM501.jpg",
  },
  {
    model: "YM503",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM04 Male",
    appearanceName: "Professional Style Design",
    appearanceDescription: "Appearance family designed for male-oriented projects.",
    displayType: "TFT",
    displaySize: "1.14-inch TFT",
    platform: "YM21",
    bluetooth: "Optional",
    sound: "Yes",
    voice: "Optional",
    targetUser: "Adult",
    publicStatus: "public",
    marketPosition: "YM04 Male model with 1.14-inch TFT display.",
    configurationTags: ["YM04 Male", "TFT", "Optional Bluetooth", "Sound", "Optional Voice", "Adult"],
  },
  {
    model: "YM601",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM06 Child",
    appearanceName: "Child Fingertip Design",
    appearanceDescription: "Child-oriented fingertip appearance family.",
    displayType: "TFT",
    displaySize: "0.96-inch TFT",
    platform: "YM60",
    bluetooth: "No",
    sound: "Optional",
    voice: "No",
    targetUser: "Child",
    publicStatus: "public",
    marketPosition: "Child-oriented TFT model under YM06 Child.",
    configurationTags: ["YM06 Child", "TFT", "No Bluetooth", "Optional Sound", "Child"],
    image: "/homepage/P2/products/fingertip-oximeter/YM601-01.jpg",
  },
  {
    model: "YM603",
    productFamily: "Fingertip Pulse Oximeter",
    appearanceSeries: "YM06 Child",
    appearanceName: "Child Fingertip Design",
    appearanceDescription: "Child-oriented fingertip appearance family.",
    displayType: "TFT",
    displaySize: "0.96-inch TFT",
    platform: "YM60",
    bluetooth: "No",
    sound: "Optional",
    voice: "No",
    targetUser: "Child",
    publicStatus: "public",
    marketPosition: "Child-oriented TFT model under YM06 Child.",
    configurationTags: ["YM06 Child", "TFT", "No Bluetooth", "Optional Sound", "Child"],
    image: "/homepage/P2/products/fingertip-oximeter/YM603.png",
  },
];

export function filterPulseOximeterModels(filters: PulseOximeterSelectorFilters) {
  return pulseOximeterModels.filter((model) =>
    Object.entries(filters).every(([key, value]) => {
      if (!value) {
        return true;
      }

      return model[key as keyof PulseOximeterSelectorFilters] === value;
    }),
  );
}

export function getPulseOximeterModel(modelCode: string) {
  return pulseOximeterModels.find(
    (item) => item.model.toLowerCase() === modelCode.toLowerCase(),
  );
}
