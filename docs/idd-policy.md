# IDD Policy Configuration

This repository uses Issue-Driven Development (IDD) imported from
[`kurone-kito/idd-skill`](https://github.com/kurone-kito/idd-skill).
The decisions below were recorded at the onboarding hearing on
2026-07-27 (see roadmap issue
[#28](https://github.com/kurone-kito/web-toybox/issues/28)) and match
[`.github/idd/config.json`](../.github/idd/config.json). When the two
disagree, treat it as drift and file an issue rather than trusting
either silently.

Start with [`docs/idd-workflow.md`](idd-workflow.md) for the cross-agent
entry path and phase routing, and open
[`.github/instructions/idd-overview-core.instructions.md`](../.github/instructions/idd-overview-core.instructions.md)
before starting IDD work.

## Marker Prefix

**Prefix**: `web-toybox`

Every IDD operational marker in this repository uses this prefix, for
example `<!-- web-toybox-roadmap-id: ... -->` and
`<!-- web-toybox-blocked-by: ... -->`.

## Merge Policy

**Policy**: `fully_autonomous_merge`

One trusted agent session may execute merge phase F3 after the normal
claim, freshness, CI, advisory, and review gates pass.

## PR Review Policy

**Profile**: `copilot-advisory` — this repository keeps the distributed
Copilot advisory review profile: GitHub Copilot reviews every pull
request, and its findings are advisory rather than merge-blocking.

**Advisory bot logins**: `copilot-pull-request-reviewer[bot]`,
`coderabbitai[bot]`

## Review-Thread Resolution Policy

**Policy**: `fast-agent-resolve`

## Critique-Loop Profile

**Profile**: distributed defaults (no repository override recorded)

## Claim Timing

- **claim-stale-age**: `PT24H` (24 h, distributed default)
- **claim-heartbeat-interval**: `PT12H` (12 h, distributed default)

## CI Wait Policy

- **running timeout**: `PT30M` / 30 min (distributed default)
- **generation timeout**: `PT10M` / 10 min (distributed default)
- **rerun policy**: `rerun-once` (distributed default)

## Credential Scope

**Worker credentials**: least-privilege worker scope

**Merge-capable credentials**: same as worker — one trusted agent
session holds both worker and merge-capable credentials
(`fully_autonomous_merge`), per the recorded operator decision.

## Helper Runtime Profile

**Profile**: `package-manager`

The IDD helper bundle resolves through this repository's own package
manager rather than ad hoc `npx` calls or a vendored copy of upstream
`scripts/`. The helper-runtime track (roadmap issue
[#32](https://github.com/kurone-kito/web-toybox/issues/32)) wired the
dependency, so every "when helper runtime is enabled" instruction
branch is live. `package.json`'s `devDependencies` is the authority
for the pinned spec — do not duplicate it here. Invoke helpers as
`pnpm exec <idd-helper>`, for example `pnpm exec idd-doctor`.

## Issue-Author Approval Gate

- **Gate posture**: `enabled-by-default`
- **Opt-out state**: gate remains default-enabled —
  `skipIssueAuthorApprovalGate` stays absent from
  `.github/idd/config.json`
- **`maintainer-approval-actors` policy**: `owners-and-maintainers-only`
- **Approval signals**: configured ready label or standalone `IDD ready`
  comment
- **`approvalSignals.readyLabelName`**: `idd:ready` (distributed
  default)
- **`approvalSignals.labelFreshnessMode`**: `presence-only` (distributed
  default)
- **Missing-approval behavior**: explicit-target stop-before-claim, plus
  a discovery approval-needed fallback bucket

## Issue-Authoring Companion

**Status**: installed, under
[`.claude/skills/issue-authoring/`](../.claude/skills/issue-authoring/)

- **`issueAuthoring.maxClarificationRounds`**: `3` (distributed default)
- **`issueAuthoring.authoringLabelName`**: `status:authoring`
  (distributed default)
- **`issueAuthoring.authoringStaleAge`**: `PT4H` (distributed default)

## IDD Label Names

Distributed defaults — no repository override recorded:

- `labels.roadmapLabelName`: `roadmap`
- `labels.blockedByHumanLabelName`: `status:blocked-by-human`
- `labels.needsDecisionLabelName`: `status:needs-decision`

The full label taxonomy (including `status:blocked-by-human`,
`status:needs-decision`, and `idd:ready`) is created by roadmap issue
[#33](https://github.com/kurone-kito/web-toybox/issues/33).

## Worktree Guard

**`worktreeGuard.enabled`**: `true`

The template ships an opt-in git hook set under `.githooks/` that
refuses commits and pushes made from the **primary** worktree while
`HEAD` is on an implementation branch (`issue/*` or `roadmap-audit/*`).
`git config core.hooksPath .githooks` is **local and uncommitted**, so
every clone — including ephemeral agent environments — must run it once
before relying on the guard:

```sh
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit .githooks/pre-push
```

`idd-doctor` reports an **enabled-but-inert** finding when
`worktreeGuard.enabled` is `true` but `core.hooksPath` has not been
pointed at `.githooks` — the signal that this activation step did not
run.

## Autopilot Suitability

**`autopilotSuitability.floor`**: `3` — autopilot considers issues whose
authored suitability score is `>= 3`; lower scores route to a human.
Advisory ranking/routing hint only — it never bypasses the A4.5/A5
safety gates.

## Machine-Readable Policy File

[`.github/idd/config.json`](../.github/idd/config.json) is the
machine-readable record of the same policy decisions and validates
against
<https://kurone-kito.github.io/idd-skill/schemas/policy.schema.json>.
Keep it and this document aligned in the same change; the JSON file's
`commands` object is authoritative for the `Project commands` table in
[`idd-overview-core.instructions.md`](../.github/instructions/idd-overview-core.instructions.md).
