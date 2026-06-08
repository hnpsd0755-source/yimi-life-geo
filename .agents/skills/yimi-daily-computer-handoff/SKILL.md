---
name: yimi-daily-computer-handoff
description: Use when the user wants to switch YimiLife website work between office and home computers, start work on a different computer, end the day, sync project documents, sync project-local skills, or maintain a daily handoff record through GitHub.
---

# YimiLife Daily Computer Handoff

If this skill conflicts with repository `AGENTS.md`, follow `AGENTS.md` first.

Use this skill to keep the YimiLife website project continuous across multiple computers.

## Core Principle

Treat GitHub as the single source of truth for:

- Website source code.
- Project-local Codex skills under `.agents/skills`.
- Work handoff notes under `docs/workflows` or another agreed project document path.

Do not rely on memory, chat history, local-only zip files, or global Codex skills as the only copy of project-critical workflow knowledge.

## Start-Of-Day Workflow

1. Identify the repo root.
2. Run:
   - `git status --short`
   - `git branch --show-current`
   - `git remote -v`
3. If the worktree is clean, pull the latest branch:
   - `git pull origin <branch>`
4. If there are local changes, summarize them before pulling and ask the user how to proceed.
5. Run `npm install` only when dependency files changed or the user asks for a clean setup.
6. Start or reuse the local dev server.
7. Report:
   - Current branch.
   - Latest commit.
   - Whether project-local skills are present.
   - Local preview URL.

## End-Of-Day Workflow

1. Run:
   - `git status --short`
   - `git diff --stat`
2. Summarize changed files by purpose.
3. Update the daily handoff note if the user asked to preserve work context.
4. Recommend validation commands based on the day's changes.
5. Do not commit or push unless the user explicitly approves.
6. If approved, commit and push the branch.
7. Report the commit hash and exact next-computer steps.

## Project-Local Skills Sync

Project skills live in:

- `.agents/skills`

When switching computers:

1. Confirm `.agents/skills` exists after pulling.
2. If a skill is missing, inspect Git status and remote state before recreating it.
3. Keep project-specific YimiLife skills in the repo when possible.
4. Use global `%USERPROFILE%\.codex\skills` only for personal or machine-level helper skills.

## Handoff Note Rules

When the user asks for seamless work documents, maintain a short note with:

- Date and computer.
- Current branch and latest commit.
- Completed work.
- In-progress work.
- Next recommended action.
- Commands run and their actual results.
- Known risks or unresolved decisions.

Prefer concise notes. Do not duplicate full chat transcripts.

## Safety Rules

- Never run `git reset --hard` or discard local changes unless explicitly requested.
- Never commit, push, or deploy without explicit user approval.
- Never include secrets, `.env` files, `.next`, `node_modules`, or local archives in commits.
- Never claim validation passed unless the command actually ran.
