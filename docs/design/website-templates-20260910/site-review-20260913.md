# Site review — 2026-09-13

## Scope

The user confirmed keeping the approved designs while supplying authentic photos and materials later, then authorized a site-wide navigation, CTA, inquiry and mobile check plus a materials checklist. Reviewed the ten static preview pages: Home, Products, thermometer category, thermometer model template, About, Manufacturing & Quality, OEM/ODM, Contact, Pulse Oximeter and Blood Pressure Monitor. Existing uncommitted BP work was preserved.

This is a consistency and defect correction pass, with no new page design, component library, competitor-based redesign or product claim. Missing forehead thermometer and temperature-patch information remains pending; only the rapid thermometer has the user-confirmed future-product status.

## Findings and fixes

| Finding | Fix and files |
| --- | --- |
| Several Pulse Oximeter menu/footer links still returned to the homepage; its homepage card still opened a pending-page notice. | Direct links now open `pulse.html` throughout the ten pages. Removed the stale pending behavior from `home.html`. |
| Wearable and nebulizer menu links returned to an undifferentiated homepage section. | Point them to their existing `products.html#wearable` and `products.html#nebulizer` sections. Unbuilt detail pages retain their explicit pending notice. |
| Some Products breadcrumbs returned to the homepage. | Point them to `products.html`. |
| Header Contact links on pulse/BP pages lost horizontal padding, unlike button-based Contact CTAs elsewhere. | Scoped `.mainnav > .btn` rules in `styles.css` give anchors and buttons matching padding and white hover text. Measured identical 115.17 px widths at 1280 px on Home, Pulse and BP. |
| Preview page selection did not update the outer URL; refresh restored a different page. | `index.html` synchronizes `?page=` after a recognized iframe page loads. BP selection and refresh retention verified. |
| The default thermometer detail template shows a forehead thermometer but its inquiry omitted that subcategory. | `app.js` now defaults this specific detail route to `forehead` when no type was provided. Explicit patch/rapid behavior is preserved. |
| Internal review copy still described only three templates or only the thermometer page. | Updated stale dialog/home preview copy and review status. |

Supporting files: updated `README.md`, created [materials-checklist.md](materials-checklist.md) and this report. Repeated header/footer/link corrections affect `home.html`, `products.html`, `category.html`, `detail.html`, `about.html`, `manufacturing.html`, `oem.html`, `contact.html`, `pulse.html` and `bp.html`. This pass did not edit the underlying OEM React bundle or product specifications.

## Validation actually performed

- Static inspection of all ten pages: **322 local href/src references**, with no missing files or fragment targets. This checks local references, not remote websites or images loaded only after every possible interaction.
- Browser checks at **1280 px and 390 px** for all ten outer pages: no horizontal page overflow; no failed images among loaded image elements. Nine outer pages each have one H1; OEM's H1 lives in its embedded application, where one rendered H1 was confirmed separately.
- Opened the mobile menu and Products dropdown on all ten pages; confirmed the direct pulse route and no horizontal overflow. Exercised Escape dismissal.
- Inspected mobile Home, About, Contact, Manufacturing and embedded OEM screenshots, plus the desktop Home screenshot. This was a focused visual review, not a pixel-by-pixel check of every scrolled section.
- Mobile selected-model regression for YM202, YH02 and YP7202: each has eight rows, two cells per row and no horizontal overflow. The existing thermometer detail table also retains two columns.
- Homepage Pulse card navigates to `pulse.html`. Default `detail.html` inquiry selects `thermometer` / `forehead`.
- Contact local preview: empty required fields produced errors; fictional test contact data produced the success demonstration; switching the internal outcome produced the failure demonstration. No real message was sent. Earlier BP and pulse model-prefill validations remain recorded in their delivery notes.
- Embedded OEM: changed shell color to Navy, used the sample logo and switched the workflow to ODM; the expected selected state and four ODM stages appeared. No user files were uploaded and no OEM form was submitted.
- Preview selection changed the URL to `?page=bp`; reload restored the BP page and selected tenth tab.
- Parsed `app.js`, `batch2.js`, `pulse.js`, `bp.js` and the inline preview script with Node's `vm.Script`; all passed syntax validation. `git diff --check` passed.
- No Next.js build was run: this pass changes static preview HTML/CSS/JS and documentation, not the formal Next.js app. No commit, push or deployment was performed.

## Remaining work

Use [the materials checklist](materials-checklist.md) to supply model-image mappings, missing product photos, company/factory/lab photos, verifiable documents, contact details and product information. Product facts must be confirmed separately from layout approval.

Contact's previously discussed unknown-category option and optional attachments remain unimplemented. Real inquiry storage, attachments, notifications and replies, plus migration of the approved templates into the formal Next.js app, remain separate implementation work. The local demo's success state is not a receipt of a real inquiry.

## Preview

The current local preview is <http://127.0.0.1:8767/?page=bp>. If stopped, start it with:

```bash
node docs/design/website-templates-20260910/serve.cjs
```

Switching among the ten tabs now keeps the selected page in the URL. The materials checklist and this report are documentation and need no page-specific UI preview.
