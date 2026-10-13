# Independent static preview deployment

## 2026-10-13 publication configuration

Use the same project and stable domain listed below. Publish branch `main` from `hnpsd0755-source/yimi-life-geo` with root `docs/design/website-templates-20260910`.

The current `vercel.json` runs `node export-static-preview.cjs`, disables installation, and serves the generated `dist` directory. The exporter validates page resources and copies only runtime files and their referenced images/PDFs. It excludes raw archives, office documents, Markdown notes and CJS tools from the public output. The build script itself must remain included in the deployment source.

Local checks:

```powershell
node docs/design/website-templates-20260910/export-static-preview.cjs
node docs/design/website-templates-20260910/serve.cjs 18767
```

The October release contains the approved company/factory/certificate media, 14 fingertip selections across six series, refreshed YM112/YM201/YM212/YM603 photos, and four-photo galleries for YM401/YM501. Contact and OEM/ODM inquiries remain demonstrations. Keep `X-Robots-Tag: noindex, nofollow` while the website is under review.

The September record below describes the earlier manual Drop publication. After connecting the existing project to GitHub, new pushes to its production branch use the configuration above instead of requiring a folder upload.

## Previous manual publication

Deployed on 2026-09-23 through Vercel Drop (uploaded static folder).
Project: yimilife-website-preview
Team: yimilife
Stable preview URL: https://yimilife-website-preview.vercel.app/
Dashboard: https://vercel.com/yimilife/yimilife-website-preview
Deployment: dpl_3LE4Pt7CDsN7T68BYYqXg6hwL9UK
Unique deployment URL: https://yimilife-website-preview-6n4rfeihy-yimilife.vercel.app/
Source snapshot: a5c3bc7183680e556a4fa05745c28e03707c6b07 plus scoped deployment configuration.

## Scope

Uploaded output/vercel-static-preview-20260923: 123 files, including vercel.json and 65 selected product PNGs.
The formal yimi-life-geo project was not modified.
This preview project is NOT connected to GitHub. Future repository pushes do not automatically update it.
To update, assemble a fresh static snapshot and deploy to this existing preview project.
Do not create duplicate preview projects.

## Configuration

Source directory: docs/design/website-templates-20260910
Framework: Other. Build command: empty. Install command: empty. Output directory: .
vercel.json preserves HTML paths and adds X-Robots-Tag: noindex, nofollow.
The prepared upload excludes Markdown notes, CJS tools and TypeScript development sources.
.vercelignore provides equivalent exclusions for subsequent CLI uploads.

## Verification

Unauthenticated HTTPS requests: all 122 content files returned HTTP 200 and matched the local snapshot byte-for-byte.
All 122 responses included X-Robots-Tag: noindex, nofollow.
Verification report: output/vercel-static-preview-validation.json.
Contact and OEM/ODM inquiry submission remain demonstrations without a receiving backend.
