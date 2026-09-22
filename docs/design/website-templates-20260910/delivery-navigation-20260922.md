# Website navigation reorganization - 2026-09-22

## Confirmed scope
Main navigation: Products / OEM/ODM / Manufacturing & Quality / About / Contact. The logo returns Home.
About contains four sibling entries: Company Profile, Research & Development, News, Blogs. Research links to about.html#research.
All ten existing page main elements are unchanged, including the 2026-09-21 approved copy. OEM source and interaction bundle are unchanged.
News and Blogs have separate accessible directory pages and explicit empty states. No article, publication date, customer story or business claim was invented.

## Changes
- Updated the header and footer on all ten existing HTML pages.
- Added news.html, blogs.html and navigation.js.
- Consolidated menu interaction from app.js into navigation.js; added mutual exclusion, keyboard Escape/focus, outside click, mobile menu close and current-page states.
- Added scoped dropdown/resource/footer styles in styles.css.
- Added two tabs to index.html and preserved iframe fragment/query context on refresh and history navigation.
- Updated README and the page-content definition with the confirmed navigation hierarchy.

## Research and adaptation
Read on 2026-09-22:
- https://www.sejoygroup.com/ : Products grouped by family/form, About grouped with company information, Blogs grouped with content categories.
- https://www.med-linket.com/ : separate company information and News/Blog content categories; an adjacent B2B medical supplier rather than an exact product peer.
Only the readable information hierarchy was used. No competitor visual or conversion performance claim was made. YimiLife keeps the owner's five-item navigation and places News/Blogs under About. Original page styling and copy are retained.

## Validation actually performed
- Preserved-main SHA-256 comparison: 10 existing pages unchanged within the main element.
- 497 local href/src references checked; files and referenced fragment IDs found.
- JavaScript syntax checks: app.js, navigation.js, batch2.js, pulse.js, bp.js and index.html inline script.
- 12 pages at 1440px and 390px: 24 checks of HTTP status, five-item navigation, four About entries, H1 placement, horizontal overflow, image loading and noindex.
- Supplementary menu/resource checks at 768px and 360px.
- Tested native keyboard opening, Escape/focus return, outside click, mutually exclusive dropdowns, mobile closing after navigation and active About subitems.
- Tested About research jump and wrapper refresh, News-to-Blogs and browser Back, and product inquiry category/subtype/model context across refresh.
- Browser result: no page errors, failed requests or unexpected external requests. No real inquiry was sent.
- Visually reviewed desktop About menu, mobile About menu, News desktop and Blogs mobile; no clipping or horizontal overflow observed.
- git diff --check passed. No Next.js build/lint: this change is limited to independent static preview HTML/CSS/JS and documentation.

## Remaining work
Real News/Blogs articles, authentic images/product documents and the receiving backend remain pending. Official Next.js routes have not been migrated to this new UI. No commit, push or deployment was performed.

## Preview
http://127.0.0.1:18767/?page=home
http://127.0.0.1:18767/?page=about&section=research
http://127.0.0.1:18767/?page=news
http://127.0.0.1:18767/?page=blogs

## Portable Windows package
- ZIP contains 66 files; CRC and all manifest SHA-256 values verified.
- All 12 extracted site pages responded with the updated navigation.
- Focused browser checks passed with external network blocked: About to News, Blogs, research link and refresh, offline guide, mobile dropdown and close after navigation. No browser errors or failed requests.
