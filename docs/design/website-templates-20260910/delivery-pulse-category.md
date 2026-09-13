# Pulse oximeter category prototype

Date: 2026-09-12. Products overview confirmed by the user; the workflow now proceeds to the pulse oximeter category. This new design awaits review.

## Structure and sources

Hero with fingertip and handheld product images; section navigation; seven compact fingertip series choices; one shared model-selection area; an inline detail panel positioned after the selected model's category; two handheld models; a compact PulseMatrix referral; contextual inquiry links.

The 17 public fingertip models and configuration values are a static snapshot of `data/pulseOximeterModels.ts`. That file identifies the supplied YM20 model difference matrix as its source. Image mapping comes from `data/pulseOximeterImages.ts`; handheld YH01/YH02 identifiers and pictures follow the existing `app/products/pulse-oximeter/page.tsx`. No reserved model, measurement claim or certification claim was added. The source files themselves were not changed. Refresh the snapshot and Contact model allowlist together if the public model list changes.

Images for YM104, YM401 and YM501 remain pending according to the image mapping. YM212 initially did not decode in the browser and image-viewing tool; this was resolved in the user-supplied-image update below. Original source files are preserved.

Handheld specifications were filled from the supplied technical requirements on 2026-09-13; see the source and verification record below. Handheld image-to-model correspondence awaits user confirmation. YM202 voice remains “To be confirmed.” Display values with internal “not restricted” notes use only the recorded display type. Technical platform names from internal model data are not copied into specification tables.

## Research and adaptation

Primary pages inspected on 2026-09-12:

- [Joytech pulse oximeter catalog](https://www.sejoygroup.com/Pulse-Oximeter.html): product models have detail and inquiry entries. Adapt the model-to-detail-to-inquiry sequence; do not copy clinical claims or the long introductory text.
- [Lepu-Creative handheld oximeters](https://www.creative-sz.com/products/handheld-oximeters/): handheld devices form a separate category. Retain fingertip/handheld grouping within YimiLife's single category page. Do not borrow competitor specifications, certification language or product counts.

This research supports content organization only; competitor visual dimensions and conversion performance were not assessed. Visual styling follows the approved local category template and Products overview. Specification tables retain two columns on mobile and desktop.

## Changed files

- `pulse.html`: new static page, public model snapshot and selectors.
- `pulse.css`: page-scoped responsive styles.
- `pulse.js`: image synchronization, inline model details, model deep links and contextual inquiry URL.
- `products.html`: pulse card and pulse navigation entries now open the new category.
- `index.html`: ninth preview entry and updated review status.
- `batch2.js`: Contact supports fingertip/handheld subcategories and an allowlisted model in editable inquiry text. No submission service was connected.
- `homepage/P2/products/fingertip-oximeter/` and `homepage/P2/products/handheld-oximeter/`: copied existing model images used by this prototype.
- `README.md` and this record: current approval and review state.

## Initial iteration verification

- `node --check` passed for `pulse.js` and `batch2.js`.
- Static checks confirmed 19 unique model identifiers, no missing referenced model assets and four explicitly pending images.
- Browser widths 1440, 1024, 768, 390 and 360 px: no horizontal page overflow. Card layout changed from three columns to two, then one; selected-model table retained two columns.
- Desktop hero and mobile model-detail screenshots inspected. YM202 image loaded and its pending voice option remained clearly labeled.
- YM212 selection synchronized the card and detail identity; the later missing-image adjustment addresses its decoding failure.
- YM212 and YH02 inquiry links populated the correct category, subcategory and model in Contact. No form was submitted.
- YM104 deep link displayed its missing-image placeholder. PulseMatrix notice opened and closed.
- Final checks confirmed Products opens the new pulse page, YM212 now displays the explicit missing-image placeholder, and the existing thermometer/patch inquiry preset still works.
- No browser warning/error entries were captured in the new test tab during these checks.

## Local preview and remaining work

```bash
node docs/design/website-templates-20260910/serve.cjs
```

Open <http://127.0.0.1:8767/?page=pulse>. Check series-card rhythm, model selection, inline detail reading and handheld image proportions.

Pending: user visual review, three fingertip model images, handheld image-to-model confirmation, public model documents and the actual PulseMatrix detail page. Formal Next.js integration, real inquiry submission and deployment remain separate tasks. The sections below record subsequent specification updates and their verification; the initial prototype did not include a Next.js build or deployment.

## Refinement: compact series selection

The user found the repeated Model configuration controls less concise than the original page. Compared the original `FingertipPortfolioSection` in `app/products/pulse-oximeter/page.tsx`: it uses seven small image/name choices with shared selection content below. Reused the relevant series-to-model hierarchy from the research above; no new competitor visual claim or business assumption was introduced.

Updated `pulse.html`, `pulse.css` and `pulse.js`:

- Replaced seven full form cards with image/name buttons: Prime, Neo, Lite, Pro, Chic, Male and Child. Seven columns on wide desktop, four on tablet and two on mobile.
- Removed repeated configuration labels, dropdowns and detail buttons. Selecting a series displays only its model buttons in one shared area.
- Moved the shared inline detail panel directly after the fingertip section. Switching series hides the old detail and removes the old model query; selecting a model restores the correct detail and inquiry link.
- Kept the 19 model records and existing asset mappings unchanged. Deep links restore the selected series and model. Handheld detail buttons still work.

Browser checks: desktop 1440 px screenshot and mobile 390 px screenshot inspected; 390 and 360 px layouts had no horizontal overflow. Prime showed five models, selecting YM201 opened its detail, switching to Pro cleared the previous detail/query, and YM212 produced the correct inquiry URL. A YM201 deep link restored matching series/model states. YH02 still opened its handheld detail. No browser warnings or errors were captured during these checks.

## Pro image correction

The user supplied `E:/YimiLife_Projects/Yimilife new website SEO/yimi-life-geo/public/homepage/P2/products/Fingertip Oximeter/YM212.png` as the correct Pro image. Its SHA256 matches the existing YM212 source. Since the original encoding did not open in the browser, decoded it with the existing Sharp library and exported a standard PNG compatibility copy: `homepage/P2/products/fingertip-oximeter/YM212-preview.png`. Verified identical decoded RGBA pixels and dimensions (425 × 389); no visual edits were made and the original was preserved.

Updated `pulse.html` to use this image for the Pro series card and YM212 detail. Both image elements loaded successfully in the browser, and the detail screenshot was visually inspected. YM112's individual model mapping was not changed.

## Fingertip specification priorities

The user requested removing Accessories from fingertip models and researching the most important 6–8 specification items. See [research and source details](research-fingertip-specifications.md).

Updated `pulse.html`, `pulse.js` and `pulse.css` to show eight fingertip groups: SpO₂ range/accuracy, pulse-rate range/accuracy, intended users, display, power/battery life, dimensions/weight, Bluetooth, and sound/voice. Model identity remains in the heading and the series moved below it. Fingertip accessories and its pending-material note were removed; handheld probe/accessory fields remain.

Read the local parameter workbook without modifying it. Measurement values, physical specifications and power data remain pending verification; no competitor numbers were imported. Intended users and existing configuration values follow the public model matrix. Precision metrics, conditions and missing source footnotes must be resolved before filling accuracy values.

Validation: `node --check pulse.js` passed. Browser checks confirmed eight rows and two columns; no fingertip Accessories field; correct YM601 pediatric label; YM202 voice still pending; correct YM202 inquiry prefill; YH02 probe/accessory row retained. Desktop 1440 px and mobile 390 px layouts were inspected with no horizontal overflow detected. No browser warnings/errors were captured. Real submission and a Next.js build were outside this static-template update.

## Fill existing fingertip specifications

Following the user's instruction to use existing data directly, `pulse.js` now fills SpO₂ 35–100%, accuracy ±2% at 70–100% (unspecified at 35–69%); pulse rate 30–250 bpm / ±3 bpm; 2 × AAA 1.5 V alkaline batteries; and approximate dimensions/weight from the workbook. No unsupported battery-life, age or finger-size values were introduced. User confirmation supplies the missing Lite mapping: YM104 and YM202 use the YM01 dimensions, approximately 57 × 30 × 31 mm. Display/connectivity/audio remain model-specific, including YM202 voice TBD.

The original parameter workbook and newly attached technical documents were not modified. New attachments were received but not parsed in this dimension update. See the research record for source cells and the user's clarification.

Verification: JavaScript syntax and `git diff --check` passed. Browser checks covered all seven series, including YM104 and YM202 after the Lite clarification; both display approximately 57 × 30 × 31 mm and 35 g excluding batteries, with no horizontal overflow at the mobile test width.

## Fill handheld specifications — 2026-09-13

Read the user-supplied `4-手持脉搏血氧仪产品技术要求---(加鼻夹探头) .doc` read-only through Word. Source SHA256: `6C72BA772E987AA5431F14DFDDAE262E708A85D05E04896911FA94BECF978ED9`. The original document was neither modified nor copied into this repository.

- Sections 1.2 and 2.1–2.3: YH01 uses a 3.5-inch LED display; YH02 uses a 3.5-inch TFT display. SpO₂ range is 35–100%, accuracy ±2% at 70–100%, unspecified below 70%, resolution 1%. Pulse rate is 30–250 bpm, accuracy ±3 bpm, resolution 1 bpm. Low-battery indication is supported.
- Product features and optional accessory appendices: 4 × AA 1.5 V batteries, continuous operation, IPX2; RS201 reusable adult finger sleeve, RS202 reusable adult finger clip, SS201 disposable adult/pediatric nasal alar clip. The document also specifies 3 V DC; the public table states the battery configuration without inferring a 6 V total. No certification or clinical-validation claim was derived from its testing standards.
- Supplementary physical and runtime data: `public/homepage/产品参数.xlsx`, sheet `手持血氧仪`, D11–D12 (70 × 150 × 30 mm, W × H × D; <500 g fully configured including batteries), D14–D16 (battery configuration; LED approx. 30 hours, TFT approx. 15 hours), D20 (display mapping). Runtime conditions remain visible: fresh batteries, 25°C, continuous SpO₂ measurement, minimum backlight and sound off. The older workbook's SS102 entry was not imported into the updated sensor list.

Changes: `pulse.js` replaces handheld placeholders with eight groups: SpO₂, pulse rate, display, power/battery life, dimensions/weight, optional sensors, operating mode and ingress protection. `pulse.html` now summarizes the documented display type and measurement functions in both handheld cards. Fingertip fields and model image mappings remain unchanged.

Verification: JavaScript syntax passed. Desktop 1440 px and mobile 390 px screenshots were inspected; both handheld models showed eight rows with the corresponding display/runtime and no horizontal overflow. YH02 inquiry navigation selected Pulse Oximeter / handheld and prefilled YH02; no form was submitted. YM202 retained eight fingertip rows, its confirmed Lite dimensions and pending voice value. No browser warning/error entries were captured in the test tab. This static prototype update does not require a Next.js build.

Unresolved: the existing YH01 image appears to show a color waveform screen and YH02 a segmented screen, potentially conflicting with the document's LED/TFT mapping. Asked the user to confirm the image correspondence; kept both images and document-derived display values unchanged pending that reply.

## Keep model details with their category — 2026-09-13

The user reported that handheld details appeared between the fingertip and handheld cards, separating the selected model from its own category. Reused the September 12 research above: model-to-detail navigation and separate handheld grouping still match this buyer need. This fixes the existing reading order while preserving the approved cards, table styling and specification content; no new visual direction or competitor performance claim was introduced.

Updated `pulse.js` to move the existing detail panel immediately after the selected model's category before displaying it or scrolling. Fingertip details follow `#fingertip`; handheld details follow `#handheld`. The back link now names and targets the corresponding category. The shared panel and existing model-query links remain in use.

Verification: `node --check` and `git diff --check` passed. Browser checks confirmed YH01 and YM202 direct links use the correct section order, YH02 selection retains its inquiry URL, switching to a fingertip series hides the previous detail, and selecting YM202 moves the eight-row panel back after the fingertip cards. Desktop screenshots and the wrapper's 390 px phone mode were inspected. Mobile YH02 selection, return to handheld cards, and switching to YM212 worked. Table styles and numeric specifications were not changed. Only this script and this delivery record were edited for the placement fix; the preceding specification edits remain in the working tree.
