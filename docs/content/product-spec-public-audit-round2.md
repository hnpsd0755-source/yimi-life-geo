# YimiLife Product Page Public Specification Audit

Date: 2026-08-14  
Scope: `/products/pulse-oximeter`, `/products/blood-pressure-monitor`, `/products/wearable-monitoring`  
Mode: Read-only audit. No code changes were made for this audit.

## Audit Rules

- `KEEP`: Only values clearly supported by current project files.
- `VERIFY`: Values that need product, R&D, software, production or regulatory confirmation.
- `REMOVE`: Values that appear to come from generic industry parameters, competitor references, old templates, or conflict with current project definitions.

重点关注字段：

- MOQ
- Lead Time
- Certification
- Accuracy
- Range
- Power Supply
- User Group

## Sources Reviewed

- `app/products/pulse-oximeter/page.tsx`
- `app/products/blood-pressure-monitor/page.tsx`
- `app/products/wearable-monitoring/page.tsx`
- `AGENTS.md`
- `config/yimi_data_config.js`
- `docs/content/YimiLife 官网内容协作表 V1.0.xlsx`
- `docs/content/YimiLife 官网建站素材需求表 V1.1.xlsx`

## Overall Findings

| Category | Finding |
|---|---|
| KEEP | Only a small number of company-level or existing-config facts are currently supported: three core product categories, company-level `25+ FDA / MDR / NMPA certified models`, legacy SpO2 `70-100% / +/-2%` reference, legacy BP `0-299 mmHg / +/-3 mmHg` reference, and basic OEM services such as logo, packaging and IFU support. |
| VERIFY | Most model names, BLE status, power supply, display options, PI support, PulseMatrix mapping, app/SDK scope, cuff options, certification paths and wearable product status require confirmation. |
| REMOVE | `MOQ From 500 pcs`, `Lead Time 15-30 days`, infant user group `Healthy infants, 1-18 months, 6-30 lb`, and several wearable accuracy/status values should not remain public as specifications without confirmation. |

Important note: `docs/content/YimiLife 官网建站素材需求表 V1.1.xlsx` is a requirements collection sheet, not a confirmed specification database. Many rows explicitly say `待确认`, `待搜集`, or require product/regulatory owner confirmation. It should be treated as a VERIFY source, not a KEEP source.

---

# Pulse Oximeter Page

File: `app/products/pulse-oximeter/page.tsx`

## Key Specifications

| Field | Current Value | Mark | Reason |
|---|---|---|---|
| Product type | Fingertip pulse oximeter configurations, with selected connected, pediatric or project-based options | VERIFY | Product family is valid, but connected/pediatric/project scope needs product status confirmation. |
| Measurement parameters | SpO2, pulse rate and PI by selected model | VERIFY | SpO2 and PR are expected; PI support needs model-level confirmation. |
| Display options | LED, OLED or TFT options depending on model direction | VERIFY | No independent model spec support found. |
| Power options | AAA dry battery or rechargeable lithium battery by configuration | VERIFY | Needs model-level power mapping. |
| Connectivity options | Bluetooth / BLE optional or standard on selected connected models | VERIFY | Docs require confirmation of which models support BLE. |
| Logo customization | Logo, color and housing discussion by project | KEEP | Basic OEM service capability is consistent with project positioning. |
| Packaging customization | Retail box, label, IFU and private-label packaging support | KEEP | Consistent with confirmed OEM workflow. |
| UI / firmware options | UI language, display direction and firmware options by model | VERIFY | Needs engineering confirmation. |
| Bluetooth SDK support | Available for Bluetooth / BLE model projects after technical scope confirmation | VERIFY | Restrained wording, but protocol and SDK deliverables need software/engineering confirmation. |
| MOQ | MOQ starts from 500 pcs for selected models | REMOVE | Not confirmed. Current business discussion mentioned MOQ 1000PCS; `500 pcs` appears template-like. |
| Lead time | Typical lead time: 15-30 days after order confirmation | REMOVE | Not confirmed; likely template value. |
| Certifications | 25+ FDA / MDR / NMPA certified models available; documentation is model- and market-specific | KEEP | Company-level wording is supported by `AGENTS.md`, but must not be applied to every model. |
| Calibration | Production calibration and verification with Fluke testing equipment | KEEP WITH RESTRAINT | Use broad Fluke testing equipment wording rather than naming a specific Fluke model. Do not present this as clinical validation or an accuracy guarantee. |

## Economy Retail Fingertip Models

| Field | Current Value | Mark | Reason |
|---|---|---|---|
| Model | YM101 / YM201 series | VERIFY | Docs say final model names need confirmation. |
| Product Type | Fingertip Pulse Oximeter | KEEP | Product category is clear. |
| Measurement | SpO2, PR, PI | VERIFY | PI needs model-level confirmation. |
| Measurement Method | Dual-wavelength optical PPG | VERIFY | Needs product specification support. |
| SpO2 Range | 70-100% | KEEP | Legacy config reference exists in `config/yimi_data_config.js`. |
| SpO2 Accuracy | +/-2% SpO2 | KEEP | Legacy config reference exists, but still should be checked against current model specs before launch. |
| Pulse Rate Range | 30-250 bpm | VERIFY | No independent support found. |
| Pulse Rate Accuracy | +/-2 bpm or +/-2% | VERIFY | No independent support found. |
| Perfusion Index | Supported by selected model | VERIFY | Needs model mapping. |
| PI 0.1% Low-Perfusion | Selected configuration discussion | VERIFY | Technology direction is valid, but model applicability must be confirmed. |
| Display | OLED / LCD by selected model | VERIFY | Needs model confirmation. |
| Connectivity | Bluetooth optional | VERIFY | Needs model confirmation. |
| Power Supply | AAA battery / rechargeable option by model | VERIFY | Needs model confirmation. |
| Data Output | Spot-check data / app data by Bluetooth model | VERIFY | Needs BLE data-field confirmation. |
| OEM Options | Logo / color / packaging / IFU | KEEP | Basic OEM service capability. |
| MOQ | From 500 pcs | REMOVE | Not confirmed; likely template value. |
| Lead Time | 15-30 days | REMOVE | Not confirmed; likely template value. |
| Certification | Model-dependent certification documentation review | KEEP | Safe boundary wording. |

## Mainstream OLED / Advanced / Pediatric Fingertip Models

| Field Group | Current Value | Mark | Reason |
|---|---|---|---|
| Models | YM202/YM302, YM401/YM503, YM603/YM602 | VERIFY | Docs require final confirmation for model names, sample status, production status and certification status. |
| Product Type | OLED / Advanced / Pediatric Fingertip Pulse Oximeter | VERIFY | Track logic may be useful, but product owner should confirm category naming. |
| SpO2 Range / Accuracy | 70-100%, +/-2% | KEEP | Legacy config support exists, but applicability across all models must be verified. |
| PR Range / PR Accuracy | 30-250 bpm, +/-2 bpm or +/-2% | VERIFY | No independent support found. |
| Display / BLE / Power / Data Output | OLED/TFT, BLE optional/standard, rechargeable/AAA, app data | VERIFY | All require model-level mapping. |
| PulseMatrix option | Option by configuration | VERIFY | Technology direction exists, but cannot be assumed across these models. |
| Pediatric Housing | Child-friendly / smaller finger-cavity | VERIFY | Needs product evidence and user-group boundary. |
| OEM Options | Logo / color / packaging / IFU / UI language | KEEP / VERIFY | Basic OEM is KEEP; UI/firmware scope is VERIFY. |
| MOQ / Lead Time | From 500 pcs / 15-30 days | REMOVE | Not confirmed and template-like. |
| Certification | Model-dependent documentation review | KEEP | Safe boundary wording. |

## Handheld Models / Selector / FAQ

| Content | Current Value | Mark | Reason |
|---|---|---|---|
| YH01 / YH02 | Handheld configurations | VERIFY | Docs require confirmation of models, probes, interfaces and user group. |
| Handheld scenarios | Point-of-care support, nursing support | VERIFY | Medical-use positioning needs registration and product positioning review. |
| BLE optional / power options | Optional BLE, dry/rechargeable | VERIFY | Needs model confirmation. |
| Fingertip selector | Basic/Mainstream/Advanced/Pediatric with display/BLE/voice/signal | VERIFY | Useful selection table, but all capability mappings need confirmation. |
| FAQ: existing model/private label | Existing model review for private-label projects | KEEP | Process-oriented and restrained. |
| FAQ: BLE app integration | BLE protocol, data formats, SDK support | VERIFY | Needs software/engineering confirmation. |
| FAQ: OEM vs ODM | Explains OEM/ODM difference | KEEP | Process explanation; not a product spec claim. |
| FAQ: PulseMatrix link | Directs buyers to technology page | KEEP | No specific parameter claim. |
| FAQ: elderly users | High-contrast display, voice prompt, alarm settings | REMOVE | No model support found; may imply user-specific suitability. |

---

# Blood Pressure Monitor Page

File: `app/products/blood-pressure-monitor/page.tsx`

## Standard Upper-Arm BP Monitors

| Field | Current Value | Mark | Reason |
|---|---|---|---|
| Model | YP03 series | VERIFY | Docs require confirmation of model, cuff, power and certification. |
| Product Type | Upper-arm Blood Pressure Monitor | KEEP | Product category is clear. |
| Measurement Method | Oscillometric method | VERIFY | Needs specification support. |
| Measurement | Systolic / diastolic blood pressure, PR | KEEP | Basic BP monitor measurement scope. |
| Pressure Range | 0-299 mmHg | KEEP | Legacy config support exists in `config/yimi_data_config.js`. |
| Pulse Rate Range | 40-180 bpm | VERIFY | No independent support found. |
| Pressure Accuracy | +/-3 mmHg | KEEP | Legacy config support exists. |
| Pulse Rate Accuracy | +/-5% | VERIFY | No independent support found. |
| Cuff Size | 22-32 cm standard adult cuff | VERIFY | Docs explicitly require cuff confirmation. |
| Optional Cuff | 22-42 cm / larger cuff by project | VERIFY | Needs product and supplier confirmation. |
| Display | LCD | VERIFY | Needs model confirmation. |
| Memory | Single-user / multi-user by model | VERIFY | Docs require confirmation of user count and memory groups. |
| Power Supply | Battery-powered | VERIFY | Needs model confirmation. |
| Auto Power-off | Yes | VERIFY | No independent support found. |
| OEM Options | Logo / color / packaging / IFU | KEEP | Basic OEM service capability. |
| MOQ | From 500 pcs | REMOVE | Not confirmed and template-like. |
| Lead Time | 15-30 days | REMOVE | Not confirmed and template-like. |
| Certification | FDA / MDR / NMPA model experience available | VERIFY | Company-level certification experience is supported, but BP model certification needs regulatory file mapping. |

## Bluetooth BP Monitors

| Field | Current Value | Mark | Reason |
|---|---|---|---|
| Model | Bluetooth BP Monitor series | VERIFY | No specific model support found. |
| Product Type | Bluetooth Upper-arm Blood Pressure Monitor | VERIFY | BLE BP direction exists, but platform and model status need confirmation. |
| Pressure Range / Accuracy | 0-299 mmHg / +/-3 mmHg | KEEP | Legacy config support exists, but applicability to BLE model must be confirmed. |
| Pulse Rate Range / Accuracy | 40-180 bpm / +/-5% | VERIFY | No independent support found. |
| Cuff / Optional Cuff | 22-32 cm / 22-42 cm | VERIFY | Needs confirmation. |
| Connectivity | Bluetooth Low Energy | VERIFY | Docs require protocol, SDK and data-field confirmation. |
| Data Output | BP / PR measurement records | VERIFY | Needs software confirmation. |
| Power Supply | Battery / Type-C by selected model | VERIFY | Needs model confirmation. |
| App Workflow | App data sync by project configuration | VERIFY | Needs app/SDK responsibility boundary. |
| OEM Options | Logo / packaging / IFU / app workflow | KEEP / VERIFY | Basic OEM is KEEP; app workflow is VERIFY. |
| MOQ / Lead Time | From 500 pcs / 15-30 days | REMOVE | Not confirmed and template-like. |

## Platform-Based Customization / BP-Based Multi-Parameter

| Field | Current Value | Mark | Reason |
|---|---|---|---|
| Model | Home Healthcare Monitor platform | VERIFY | Docs require confirmation of official category and boundary. |
| Product Type | BP-based Multi-Parameter Monitor | VERIFY | Current definition is not fully stable; needs product owner confirmation. |
| Core Measurement | Blood pressure, pulse rate | VERIFY | Plausible, but platform documentation is needed. |
| Optional Modules | SpO2 / temperature by project configuration | VERIFY | High-risk modular claim; must be confirmed. |
| Pressure Range / Accuracy | 0-299 mmHg / +/-3 mmHg for BP module | KEEP / VERIFY | Legacy BP value exists, but module applicability needs confirmation. |
| Connectivity | Bluetooth / Wi-Fi by project configuration | VERIFY | Wi-Fi has no support file. |
| Power Supply | Type-C / adapter-supported configuration | VERIFY | No support file. |
| Data Workflow | App / cloud workflow by project | REMOVE | Cloud workflow is unsupported and may overpromise. |
| OEM Options | Housing / UI / packaging / IFU | VERIFY | Housing/UI customization needs ODM capability confirmation. |
| MOQ / Lead Time | Project confirmation required | KEEP | Safe wording. |
| Certification Path | Subject to configuration and target market | KEEP | Safe regulatory boundary. |

## BP FAQ

| FAQ Content | Mark | Reason |
|---|---|---|
| Private-label BP project support | KEEP | Basic OEM capability. |
| Bluetooth BP data output / app workflows | VERIFY | Needs BLE protocol, data field and SDK boundary confirmation. |
| Cuff size, labeling, Bluetooth workflow | VERIFY | Cuff and BLE scope require model confirmation. |
| Existing BP platform start | VERIFY | Existing platform status must be confirmed. |
| Request specs input list | KEEP | Procurement guidance, not a product spec claim. |

---

# Wearable Monitoring Page

File: `app/products/wearable-monitoring/page.tsx`

## Wearable Temperature Patch

| Field | Current Value | Mark | Reason |
|---|---|---|---|
| Model | YT01 series | VERIFY | Docs require confirmation of product status, sample, production and certification. |
| Product Type | Wearable Temperature Patch | VERIFY | Product direction exists, but commercial and regulatory status need confirmation. |
| Measurement | Body temperature trend | VERIFY | Needs intended-use and recording-mode confirmation. |
| Measurement Site | Skin-contact temperature monitoring | VERIFY | Needs IFU or regulatory source. |
| Temperature Accuracy | +/-0.2°C | REMOVE | No project support found; high-risk accuracy claim. |
| Thermal Equilibrium Time | <=2 min | REMOVE | No project support found; appears template-like. |
| Temperature Unit | °C / °F | VERIFY | Needs product UI confirmation. |
| Wearing Format | Reusable skin-contact patch | VERIFY | Needs structure and use-mode confirmation. |
| Connectivity | Bluetooth Low Energy | VERIFY | Needs protocol/data confirmation. |
| Power Supply | Low-power rechargeable battery design | VERIFY | Needs battery specification. |
| Data Output | Temperature trend data | VERIFY | Needs software data confirmation. |
| Auto Recording | Yes | VERIFY | Needs firmware/app confirmation. |
| OEM Options | Logo / packaging / IFU / app workflow | KEEP / VERIFY | Basic OEM is KEEP; app workflow is VERIFY. |
| MOQ / Lead Time | From 500 pcs / 15-30 days | REMOVE | Not confirmed and template-like. |
| Certification Path | Subject to intended use and target market | KEEP | Safe boundary wording. |

## Wearable SpO2 Watch

| Field | Current Value | Mark | Reason |
|---|---|---|---|
| Model | SpO2 Watch series | VERIFY | No specific model/status support found. |
| Product Type | Wearable SpO2 Watch | VERIFY | New product direction needs status confirmation. |
| Measurement | SpO2, PR | VERIFY | Needs confirmed product parameters. |
| Measurement Method | Optical PPG | VERIFY | Needs product specification. |
| SpO2 Range / Accuracy | 70-100%, +/-2% | VERIFY | Legacy oximeter config cannot be directly applied to watch. |
| Pulse Rate Range / Accuracy | 30-250 bpm, +/-2 bpm or +/-2% | VERIFY | No independent support found. |
| Perfusion Index | Supported by selected configuration | VERIFY | Needs configuration mapping. |
| Motion Data | Supported by selected configuration | VERIFY | Needs sensor/algorithm confirmation. |
| Wearing Format | Wrist-worn watch | VERIFY | Needs product information. |
| Display | OLED / TFT by selected model | VERIFY | Needs model confirmation. |
| Connectivity | Bluetooth Low Energy | VERIFY | Needs protocol confirmation. |
| Power Supply | Rechargeable lithium battery | VERIFY | Needs battery specification. |
| Data Output | SpO2 / PR trend data | VERIFY | Needs software confirmation. |
| OEM Options | Housing / strap / packaging / app workflow | VERIFY | Structural customization needs capability confirmation. |
| MOQ / Lead Time | From 500 pcs / 15-30 days | REMOVE | Not confirmed and template-like. |
| Certification Path | Subject to intended use and target market | KEEP | Safe boundary wording. |

## Infant Foot SpO2 Monitor

| Field | Current Value | Mark | Reason |
|---|---|---|---|
| Model | Infant Foot SpO2 Monitor series | VERIFY | No model/status support found. |
| Product Type | Infant Foot SpO2 Monitor | VERIFY | High-risk user group product; needs regulatory and IFU confirmation. |
| Measurement | SpO2, PR, sleep-related trend data | VERIFY | Sleep trend needs function and compliance confirmation. |
| Measurement Method | Optical PPG | VERIFY | Needs product specification. |
| SpO2 Range / Accuracy | 70-100%, +/-2% | VERIFY | Cannot be inferred from regular fingertip oximeter values. |
| Pulse Rate Range / Accuracy | 30-250 bpm, +/-2 bpm or +/-2% | VERIFY | No independent support found. |
| Wearing Format | Foot-worn soft wearable | VERIFY | Needs structure/IFU confirmation. |
| User Group | Healthy infants, 1-18 months, 6-30 lb | REMOVE | High-risk precise population claim; no project support found; likely competitor/template wording. |
| Connectivity | Bluetooth Low Energy | VERIFY | Needs protocol confirmation. |
| Power Supply | Rechargeable lithium battery | VERIFY | Needs battery specification. |
| Data Output | SpO2 / PR / sleep-related trend data | VERIFY | Needs software and compliance confirmation. |
| OEM Options | Soft structure / packaging / app workflow | VERIFY | Structural customization needs confirmation. |
| Claim Boundary | Not for SIDS prevention or disease diagnosis | KEEP | Important compliance boundary. |
| MOQ / Lead Time | From 500 pcs / 15-30 days | REMOVE | Not confirmed and template-like. |
| Certification Path | Subject to intended use and target market | KEEP | Safe boundary wording. |

---

# Priority Recommendations For Round 2

| Priority | Item | Recommendation |
|---|---|---|
| P0 | MOQ / Lead Time | Remove all public `From 500 pcs` and `15-30 days`, or change them to `Project confirmation required`. |
| P0 | Infant user group | Remove `Healthy infants, 1-18 months, 6-30 lb` until IFU/regulatory confirmation exists. |
| P0 | Wearable accuracy/time specs | Remove or hide `+/-0.2°C`, `<=2 min`, wearable watch/infant `+/-2%` specs until confirmed. |
| P0 | BP multi-parameter | Avoid presenting cloud/Wi-Fi/optional modules as mature specs; keep as project evaluation direction. |
| P1 | Pulse oximeter model mapping | Build a model matrix for YM101/YM201/YM202/YM302/YM401/YM503/YM603/YM602/YH01/YH02 covering BLE, power, display, PulseMatrix and certification. |
| P1 | BP specs | Build a model matrix for YP03 / BLE BP / multi-parameter platform covering cuff, power, memory and certification. |
| P1 | Certification | Build a model-level FDA/MDR/NMPA document map. Avoid broad model claims. |
| P1 | App/SDK | Confirm BLE protocol, data fields, SDK deliverables and customer/app responsibility boundaries. |
