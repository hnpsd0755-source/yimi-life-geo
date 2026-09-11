---
name: yimilife-project-handoff
description: Prepare the YIMILIFE website project so work can continue on another computer. Use when the user says they will go home, switch to a laptop, continue this project on another machine, sync office/home computers, finish today's work for later continuation, or asks Codex to handle all handoff actions for the YIMILIFE website repo and related Codex skills.
---

# YIMILIFE Project Handoff

## Purpose

Help the user safely continue the YIMILIFE website project across computers by preparing the local repo, GitHub sync, dependency notes, and YIMILIFE Codex skills transfer.

Prefer Chinese output unless the user asks otherwise. Be practical and action-oriented.

## Default Workflow

1. Identify the active project folder. Prefer the current working directory if it contains `package.json` and `.git`; otherwise search the workspace for the YIMILIFE website repo.
2. Inspect state before taking action:
   - `git status --short`
   - `git branch --show-current`
   - `git remote -v`
   - `package.json` scripts
3. Summarize uncommitted changes by file. Distinguish current-task changes from unrelated user changes when possible.
4. If a GitHub remote exists:
   - Recommend committing the handoff state before leaving the office.
   - Ask for confirmation before committing or pushing unless the user explicitly says to do all handoff actions.
   - Use a clear commit message such as `Prepare YIMILIFE website handoff`.
   - Push the current branch to the configured remote.
5. If no Git remote exists or push is unavailable:
   - Create a safe fallback plan: zip the repo excluding `node_modules`, `.next`, and large generated artifacts, or instruct the user to copy the folder.
   - Prefer GitHub setup when the user is willing.
6. Provide home/laptop continuation steps:
   - Install Git and Node.js.
   - Clone or pull the repo.
   - Run `npm install`.
   - Run `npm run dev`.
   - Open `http://localhost:3000`.
7. Include Codex skills transfer:
   - Copy these folders if present:
     - `%USERPROFILE%\.codex\skills\yimilife-product-researcher`
     - `%USERPROFILE%\.codex\skills\yimilife-website-growth-optimizer`
     - `%USERPROFILE%\.codex\skills\yimilife-project-handoff`
   - Destination on the other computer: `%USERPROFILE%\.codex\skills\`
   - Restart Codex or open a new thread after copying skills.
8. When returning to the office computer, instruct:
   - `git pull origin <branch>`
   - `npm install` if dependencies changed
   - `npm run dev`

## Safety Rules

- Never run destructive Git commands such as `git reset --hard` or `git checkout --` unless explicitly requested.
- Do not commit unrelated changes without showing them first.
- Do not include secrets, `.env` files, `node_modules`, `.next`, or large archives in handoff commits.
- If credentials or GitHub authentication are missing, explain the blocker and give the exact next step.

## Final Response Checklist

End with a concise handoff status:

- Current branch and remote
- Whether changes were committed and pushed
- Commit hash if available
- What the user should do on the laptop
- Whether YIMILIFE Codex skills need to be copied
