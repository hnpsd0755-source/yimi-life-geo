---
name: yimi-local-preview-validation
description: Use after YimiLife code, page, SEO, or UI edits to define and report local validation commands, git status, local preview URL, and unresolved risks.
---

# YimiLife Local Preview Validation

If this skill conflicts with repository AGENTS.md, follow AGENTS.md first.

Use this skill after editing YimiLife files or when the user asks how to validate changes locally.

## Required Validation Steps

1. Run `git status`.
2. Run `npm run lint` if available and relevant.
3. Run `npm run build` when structural code changes are made or when requested.
4. Start or report the local preview command.
5. Provide the local preview URL.
6. Summarize modified files, validation results, and unresolved risks.

## Important Rule

Never claim a command passed unless it was actually run.

## Default Local Preview

For this Next.js project:

- Command: `npm run dev`
- URL: `http://localhost:3000`

For specific routes, provide the exact route URL, such as:

- `http://localhost:3000/oem-odm`
- `http://localhost:3000/products/pulse-oximeter`
- `http://localhost:3000/products/blood-pressure-monitor`
- `http://localhost:3000/products/wearable-monitoring`

## Output Format

Report:

- Commands run.
- Result of each command.
- Preview URL.
- Files modified.
- Unresolved risks or skipped checks.
