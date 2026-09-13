# Rapid thermometer placeholder

## Confirmed status — 2026-09-13

The user explicitly classified the rapid thermometer as a future product and requested retaining its position. This status applies only to the rapid thermometer; the temperature patch and other products retain their existing status. No launch date, performance, production or certification claim was added.

## Changes

- `category.html`: retain the rapid thermometer filter and card, label them as a future product, remove its specification placeholders and model-detail CTA, and distinguish the future slot in the catalog count.
- `home.html` and `products.html`: mark the rapid thermometer as a future product in portfolio summaries.
- Navigation labels updated consistently in `home.html`, `products.html`, `category.html`, `detail.html`, `about.html`, `manufacturing.html`, `oem.html`, `contact.html` and `pulse.html`; the retained navigation leads to the future-product card.
- `app.js`: update filtered catalog status, redirect old rapid model-detail links to the retained card, and omit rapid from inquiry subcategory prefill.
- `batch2.js`: omit rapid from selectable thermometer inquiry subcategories.

## Verification

`node --check` passed for `app.js` and `batch2.js`; `git diff --check` passed. Browser checks confirmed that the rapid filter shows one future-product card without a model-detail link, the legacy `detail.html?type=rapid` URL redirects to that card, and the temperature-patch filter still exposes its existing detail link. Contact with the old rapid prefill offers only forehead and patch subcategories with no rapid selection. The Products summary displays the future-product status. The desktop card screenshot was inspected; no browser warning/error entries were captured. No specifications were added and no deployment was performed.

## Preview

Run `node docs/design/website-templates-20260910/serve.cjs` if the local server is stopped. Open <http://127.0.0.1:8767/category.html?filter=rapid#models> to review the retained slot. Future model details remain pending user confirmation.
