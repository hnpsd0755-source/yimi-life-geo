# Upper-arm blood pressure monitor category — 2026-09-13

## Scope and page structure

The user approved proceeding with the upper-arm blood pressure monitor category after the pulse page. The new static prototype follows the approved pulse-page styling: category hero, three model cards, a selected-model panel immediately after the cards, OEM/ODM referral and contextual inquiry. Desktop uses three cards per row; tablet uses two and mobile one. The specification table retains two columns and the established #08A8AE header.

## Research and adaptation

Primary manufacturer pages inspected on 2026-09-13:

- [Joytech DBP-1254](https://www.sejoygroup.com/OEM-ODM-Digital-Blood-Pressure-Monitor-Upper-Arm-BP-Meter-Digital-Tensiometer-pd736955088.html): model identity, specification table, cuff circumference, memory, power and inquiry appear in the product information. Adapt the concise selection-to-specification-to-inquiry flow for B2B buyers. Do not borrow its numeric values or certification claims.
- [Rossmax X3](https://rossmax.com/en/products/monitoring/blood-pressure-monitors/x3-automatic-blood-pressure-monitor.html): display, user memory, cuff and adapter information appear alongside feature and document sections. Use this as a limited product-information reference, not an OEM positioning or visual-layout benchmark. Do not copy proprietary algorithms, clinical claims or lifetime-calibration promises.

Research supports field selection only. No competitor screenshot-based visual comparison or conversion claim was made. YimiLife's confirmed template provides the layout and styling.

## Source evidence

Read the user-supplied `16 臂式电子血压计产品技术要求.pdf` from its original clinical-project folder without modifying or uploading it. The document has 11 pages and is stamped with a provided date of 2024-11-20. SHA256: `1d30c9e7f225a5862b70a87318364cbb791b51b446cda4b9faa510eb114e91c6`.

Extracted the PDF text and visually inspected rendered pages 1, 3, 6 and 11 to verify table mappings, signs, ranges, conditions and cuff identifiers.

| Website group | Source and interpretation |
| --- | --- |
| Measurement | PDF p.1: oscillometric, during deflation, upper arm for all three models. |
| Static pressure | PDF pp.3,6, sections 2.2 and 3.2: 0–290 mmHg, ±3 mmHg, resolution 1 mmHg. Footnote retains 10–40°C and 15–85% RH, non-condensing. Explicitly identified as static pressure testing, not clinical blood pressure accuracy. |
| BP display range | PDF p.3, section 2.4: systolic at least 60–230 mmHg, diastolic at least 40–130 mmHg. Kept separate from cuff/static-pressure range. |
| Pulse rate | PDF p.3: 40–199 bpm, ±5%, resolution 1 bpm. |
| Cuff options | PDF p.11 appendix A.2: adult YM-C001A 22–32 cm and YM-C002A 22–36 cm. |
| Display and memory | PDF p.1: YP7101 LED; YP7201 LCD; YP7202 LCD with backlight. All have voice readout and 2 users × 120 records. |
| Power | PDF p.10 A.1.6: 3.7 V / 1200 mAh lithium battery; Type-C 5 V / 1 A. |
| Dimensions and weight | PDF p.1: 138 × 102 × 61.5 mm. `public/homepage/产品参数.xlsx`, sheet `血压计`, B33: approx. 340 g excluding cuff; B32 corroborates dimensions. |

The workbook lists all three models at B3 and corroborates shared memory, pressure, pulse, power and cuff data. Its runtime says at least 15 days under normal use, but gives no daily measurement frequency; that runtime is not included in the compact public table. Bluetooth, app integration, clinical validation and model-specific certification status were not inferred from the prior page or regulatory standards.

## Assets and unresolved facts

The hero reuses `assets/product-blood-pressure-monitor.jpg` as the existing category image, without assigning it to an individual model. Inspected `public/homepage/P2/products/Blood pressure Monitor/08-1.jpg` (black LED appearance) and `BP Monitor.jpg` (white LCD appearance). Asked the user which models they represent; no answer had been received at this delivery. All three cards and the selected-model image area therefore keep explicit image-mapping placeholders. No product photo was renamed, retouched or assigned based only on appearance.

## Changed files

- New `bp.html`, `bp.css`, `bp.js`: three model cards, eight-group detail table, model query support and inquiry links. Reuse `styles.css` and `pulse.css`; no shared style edits or new dependencies.
- `batch2.js`: upper-arm BP subcategory and allowlisted YP7101/YP7201/YP7202 inquiry prefill.
- `products.html` and `home.html`: BP product entry now opens the new page; removed the old pending-page behavior on the homepage BP card.
- Navigation/footer BP links updated in `home.html`, `products.html`, `category.html`, `detail.html`, `about.html`, `manufacturing.html`, `oem.html`, `contact.html` and `pulse.html`.
- `index.html`: tenth preview tab, direct `?page=bp` support and current review status.
- `README.md` and this record: preview index, sources, checks and remaining work.

## Actual validation

- `node --check` passed for `bp.js` and `batch2.js`; `git diff --check` passed.
- Browser selection covered all three models: eight rows, correct LED/LCD/backlight values, corresponding query/inquiry URL and detail panel following the model cards.
- Desktop hero/detail screenshots and 390 px mobile detail screenshot inspected. Desktop, 768, 390 and 360 px checks showed no horizontal overflow. Tablet cards use two columns; mobile table remains eight rows with two cells each.
- YP7101 and YP7202 direct links restored the requested model. Return-to-models navigation worked.
- YP7202 inquiry populated `bp`, `upper-arm` and the model-specific editable request. No form was submitted. Existing YH02 handheld inquiry prefill still worked.
- Homepage and Products BP cards both opened `bp.html`. The tenth preview tab loaded correctly and switching from pulse back to BP worked.
- No browser warning/error entries were captured in the successful validation tab. The local server had initially stopped; restarted `serve.cjs` and completed browser checks after recovery.
- No Next.js files, dependency files, production deployment or Git commits were changed in this step. The static prototype is ready for review, with model-image mapping pending.

## Preview and next step

Run `node docs/design/website-templates-20260910/serve.cjs` if needed. Open <http://127.0.0.1:8767/?page=bp>. Confirm the model-image mapping, review the three display variants and specification density, then supply any missing model-specific imagery.
