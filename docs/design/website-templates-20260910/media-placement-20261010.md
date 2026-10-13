# Environment photo and certificate placement — 2026-10-10

This update fills existing media slots in the approved static templates. It preserves the navigation, section order, product catalog, and OEM/ODM flow.

## Placement

| Page | Existing slot | Processed asset |
| --- | --- | --- |
| Home | Company introduction | `company-reception` |
| Home | R&D main photograph | `rd-electronics-product-design` |
| Home | Testing workspace | `device-testing-workbench` |
| Home | Patent/document display | `patent-certificate-display` |
| Home | Manufacturing introduction | `production-line-overview` |
| Home | OEM illustration | `oem-private-label-demo.jpg` (user-provided demo) |
| About | Company/team hero | `company-team-group` |
| About | Engineering team at work | `rd-mechanical-design` |
| About | Testing workspace | `device-testing-workbench` |
| About | Development in practice | `rd-electronics-product-design` |
| About | Patent/document display | `patent-certificate-display` |
| Manufacturing & Quality | Production hero | `production-line-overview` |
| Manufacturing & Quality | Production and assembly | `production-assembly-line` |
| Manufacturing & Quality | Production inspection | `production-product-review` |
| Manufacturing & Quality | ISO 13485:2016 certificate | English certificate `CN25/00008755` |

## Assets and display rules

- Processed source: `H:\Desktop\官网图片\环境与证书处理_20261010`.
- Nine unique environment photographs fill thirteen positions. Each has an 800px and a larger WebP variant, selected with `srcset`.
- Website copies live in `assets/environment-20261010/`. `media-map.json` records the original filenames and exact placements.
- Photos keep their complete proportions. No additional crop, watermark, AI redraw, or logo alteration was applied.
- The user explicitly approved the original ESPOO signs in reception and team photographs. The company group photograph is labeled as the company team, without implying every person is an R&D employee.
- The patent/certificate collage is a document display image, not a legible original or proof of a particular patent, certification, or product scope.
- The testing photograph is described as a testing workspace. It is not used to claim clinical validation, specific instrument performance, or a specific laboratory test.
- The Manufacturing page remains limited to factory photographs and one ISO quality-system certificate, consistent with the approved simplified structure.
- `assets/certificates-20261010/` contains the English ISO certificate thumbnail, full-page WebP, and unchanged original PDF. The thumbnail shows the complete page; both the full image and PDF have visible links.
- Other environment photographs remain available in the processed source folder as alternatives. Other regulatory documents remain there for later model-specific placement; this update does not expand certification claims across the product portfolio.

## OEM demo illustration

The user supplied a privacy-preserving OEM demo image after the environment-photo placement. It is copied unchanged to `assets/oem-20261010/oem-private-label-demo.jpg` (1536 × 1024, 143,590 bytes). The Home section labels it as an OEM customization demo, with a full-image viewing link. Its headline now describes an example of customization, rather than claiming a published customer project.

Branding, artwork, model numbers, regulatory-style symbols, and marketing text embedded in this image are illustrative. They do not establish a customer identity, customer endorsement, certified model mapping, or delivery outcome. Requirements, completed work, outcomes, and testimonial fields remain pending actual project information.

## Remaining content slots

The actual OEM project narrative, product-specific development example, patent name/status information, and missing nebulizer/thermometer product photographs still require their corresponding source material. Generic environment photographs do not fill these slots. Existing product photographs and public contact information are preserved.

## Local review

From the repository root:

```powershell
node docs/design/website-templates-20260910/serve.cjs 18767
```

- Home: `http://127.0.0.1:18767/?page=home`
- About: `http://127.0.0.1:18767/?page=about`
- Manufacturing & Quality: `http://127.0.0.1:18767/?page=manufacturing`

The local server now sends `image/webp` and `application/pdf` for the new asset types. No package, build, environment, or deployment configuration changed.

## Verification

- `git diff --check`: passed.
- `node --check docs/design/website-templates-20260910/serve.cjs`: passed.
- Forty-four unique local references across the three edited pages exist and returned HTTP 200. WebP responses decoded; the PDF response had the expected MIME type and PDF signature.
- All twenty-one environment/certificate files matched their processed source files byte for byte. The additional OEM JPEG matched the user-provided attachment byte for byte.
- Desktop and 390px mobile views were inspected in the in-app browser. Photographs kept their proportions; no horizontal page overflow was observed. The mobile PDF link has a 44px tap area.
- The update changes static templates, not the Next.js application; no Next.js build or lint was run.
- No Git commit, push, or deployment was performed.
