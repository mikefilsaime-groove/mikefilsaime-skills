# YouTube Growth OS

YouTube Growth OS is a local-first Codex companion for safely auditing, optimizing, repurposing, and tracking work across multiple YouTube channels.

- [Companion dashboard and documentation](https://youtube-growth-os-docs.mikefilsaime.chatgpt.site)
- Source code is maintained in a private standalone repository.
- Matched CLI, MCP, Codex plugin, and Chrome-extension releases are distributed through the authenticated companion.

## When To Use It

- Optimize titles, descriptions, tags, chapters, and thumbnail strategies for public or unlisted videos.
- Create and review title-and-thumbnail experiments using YouTube Studio.
- Find transcripts and turn long-form videos or completed livestreams into Clip and Short candidates.
- Manage more than one YouTube channel without mixing credentials, settings, history, or assets.
- Run small, resumable batches while keeping a durable record of completed and blocked work.

## Inputs

- An authenticated YouTube channel profile.
- A YouTube video URL, video ID, or an eligible channel batch.
- Channel-specific operating preferences, approval policy, and publishing scope.
- Optional brand rules, calls to action, playlists, and thumbnail references.

## Workflow

1. Connect the local helper and authenticate the intended YouTube channel.
2. Synchronize channel inventory and preferences.
3. Verify the selected channel and exclude private videos, Shorts used as source videos, and previously completed work.
4. Audit the video, transcript, existing title, description, tags, chapters, thumbnail provenance, and available Studio capabilities.
5. Freeze the exact video manifest and required deliverables before execution.
6. Prepare metadata, chapter, thumbnail, Clip, Short, or reporting proposals.
7. Apply supported changes through the official YouTube API and use authenticated YouTube Studio only for Studio-only features.
8. Verify every requested deliverable and write receipts, lineage, failures, and experiment reviews to local SQLite history.

## Output

Depending on the selected workflow, Growth OS can produce:

- Optimized metadata and searchable chapter blocks.
- Three genuinely different thumbnail/title hypotheses when testing is eligible.
- Clip and Short candidates with timestamps, transcript evidence, and virality rationale.
- Unlisted-video inventories, channel audits, and Markdown/JSON reports.
- Durable run history, idempotency records, before/after receipts, and scheduled experiment reviews.

## Guardrails

- Private videos never enter proposal or mutation workflows.
- Publishing publicly requires explicit authority for the exact video or approved batch.
- Every run freezes its settings and video manifest before mutations begin.
- A batch is never marked complete until every required deliverable is verified, blocked, or failed with a reason.
- YouTube-generated default frames do not count as uploaded thumbnails.
- Native Studio experiments are never reported as running until the authenticated Studio UI confirms them.
- Credentials, OAuth tokens, browser cookies, local SQLite history, transcripts, and channel assets remain outside this public repository.

## Example Prompts

```text
Use YouTube Growth OS to optimize this YouTube video. Audit the current title,
description, tags, chapters, and thumbnail first, then return a verified run
report showing exactly what changed and what still needs review.
```

```text
Use YouTube Growth OS to prepare the next eligible batch for this channel.
Exclude private videos, Shorts, and videos already verified as complete. Freeze
the manifest before execution and record a receipt for every deliverable.
```

## Public Safety Notes

This page documents the reusable operating pattern only. The production source, release bundles, authentication material, channel profiles, private schedules, browser sessions, and operational database are not published in this public skills hub.
