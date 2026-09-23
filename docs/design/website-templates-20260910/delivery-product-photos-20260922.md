# Product photo integration - 2026-09-22

Current static preview catalog only: 19 pulse oximeters and 3 blood pressure monitors. Model list and specifications are unchanged.

Integrated 65 supplied, conventionally processed PNG photos for 19 existing models. Images remain byte-identical to the delivered processed files. Main, side, top and sensor views are available where supplied; frog and panda designs remain under YM601. Back-label photos and the unnamed extra image were not selected.

Updated home/product-overview category images, pulse series/handheld images, BP cards and model detail galleries. OEM logo placement demo and production Next.js pages were not changed.

YM102 and YM503 retain existing images. YM104 retains its existing image placeholder. Source models absent from the existing catalog were excluded: YM113, YM114, YM302, YM402, YM502, YM504.

Preview: http://127.0.0.1:18767/?page=pulse and http://127.0.0.1:18767/?page=bp .

## Modified files
- home.html and products.html: selected category images.
- pulse.html and bp.html: series/model images and photo-script inclusion.
- pulse.js and bp.js: use the shared model photo renderer.
- pulse.css: scoped detail gallery styles.
- product-photos.js: exact model-to-photo mapping and accessible view controls.
- assets/products-20260922/: 65 supplied PNG files for 19 existing models.

## Verification
- Compared pulse model list and all non-image fields with HEAD: unchanged. Compared pulse/BP specification logic with HEAD: unchanged.
- JavaScript syntax and git diff --check passed.
- Tested all 22 existing models at desktop 1440px and mobile 390px (44 model checks), including 130 gallery view clicks: no failures or browser errors.
- Verified image loading, expected 800px source dimensions, one active thumbnail, model/inquiry matching and no horizontal overflow.
- Verified keyboard selection, switching models resets photos, wrapper refresh and inquiry model context.
- Visually reviewed home/products category images, desktop pulse/BP pages and mobile detail galleries.
- No Next.js build/lint: only the independent static preview and its image assets changed.
- No commit, push or production deployment performed.
