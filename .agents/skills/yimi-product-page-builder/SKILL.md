---
name: yimi-product-page-builder
description: Use when safely editing YimiLife product pages for pulse oximeters, blood pressure monitors, or wearable monitoring devices with concise B2B specs and compliant product language.
---

# YimiLife Product Page Builder

If this skill conflicts with repository AGENTS.md, follow AGENTS.md first.

Use this skill when editing:

- `app/products/pulse-oximeter/page.tsx`
- `app/products/blood-pressure-monitor/page.tsx`
- `app/products/wearable-monitoring/page.tsx`

If a request references `app/products/pulse-oximeters/page.tsx`, first check the repository route and confirm whether the intended target is the existing singular path above.

## Product Page Principles

- Keep product pages concise.
- Prioritize key technical and commercial specs.
- Keep MOQ, lead time, certification info, and customization details short.
- Do not overload specification tables with all compliance information.
- Do not add unsupported clinical, approval, launch, or mass-production claims.
- Do not make unrelated refactors.

## Specification Table Rules

- Product specification modal/table must stay 2 columns on mobile and desktop.
- Use 40% / 60% grid columns where applicable.
- Standard table header blue: `#08A8AE`.
- Keep labels short and values scannable.
- Put broad certification or quality-system content in page sections, not spec tables, unless the product row requires it.

## Safe Editing Workflow

1. Read the current page and related shared components.
2. Identify the exact section or data structure to change.
3. Confirm uncertain product, certification, MOQ, lead time, launch, or mass-production facts before editing.
4. Make the smallest necessary change.
5. Run appropriate validation from `yimi-local-preview-validation`.

## Output After Editing

Report:

- Product page changed.
- Sections or specs changed.
- Claims that were avoided or require confirmation.
- Validation commands actually run.
