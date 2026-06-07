---
name: yimi-content-brief-to-code
description: Use for YimiLife requirement clarification, pre-edit planning, product page review preparation, task boundary control, and converting website, SEO, GEO, UI/UX, or compliance copy requests into minimal, safe code changes.
---

# YimiLife Content Brief To Code

If this skill conflicts with repository AGENTS.md, follow AGENTS.md first.

Use this skill before turning a YimiLife content, product page review, UI/UX review, SEO/GEO, or website request into implementation work.

## Required Workflow

1. Restate the user's goal in concrete terms.
2. Identify likely target files and routes before editing.
3. List confirmed facts from the user, AGENTS.md, or existing files.
4. List uncertain facts that need confirmation.
5. Propose the smallest useful change set.
6. Ask before editing when the request affects medical claims, certification status, product maturity, launch status, or regulatory language.
7. Avoid unrelated refactors, file moves, dependency changes, configuration changes, and architecture changes.

## Editing Boundaries

- Preserve the existing Next.js structure and local component patterns.
- Keep changes scoped to the files required by the requested page or feature.
- Do not modify `package.json`, deployment config, environment variables, or build settings unless explicitly requested.
- Do not add new dependencies unless the user approves the reason and tradeoff.

## Output Before Editing

Always provide a short plan with:

- Task goal.
- Files to inspect.
- Files or areas likely to change.
- Risks.
- Verification method.

## Output After Editing

Report:

- Modified files.
- What changed in each file.
- Commands actually run.
- Validation result.
- Unresolved risks or questions.
