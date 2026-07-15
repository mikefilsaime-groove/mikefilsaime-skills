# Stickman VSL Director

Stickman VSL Director turns a video sales letter, narration, transcript, or voiceover into a timed, image-by-image production plan.

- [Live portal](https://stickman-vsl-director.mikefilsaime.chatgpt.site)
- [Source repository](https://github.com/mikefilsaime-groove/stickman-vsl-director)
- [Included skill package](../media/kits/stickman-vsl-director)
- [Analyzed YouTube example](https://www.youtube.com/watch?v=nv7HuwnofW0)

## Problem It Solves

A normal image prompt does not explain when the image appears, what voiceover it owns, why its concept was chosen, or how it stays visually consistent with the rest of a VSL. This skill directs the complete slide sequence.

## Inputs

- A script, transcript, or final voiceover.
- Optional final audio or word-level timestamps.
- Optional brand, character, palette, or model requirements.

## Workflow

1. Measure the script and establish the timing skeleton.
2. Divide the voiceover at semantic and emotional beats.
3. Give every slide one visual and persuasive job.
4. Choose the clearest layout: scene, contrast, grid, timeline, map, metaphor, or diagram.
5. Write the exact voiceover assignment and generation-ready prompt.
6. Generate with GPT Image 2 through Codex by default, or use a deliberately selected alternate route.
7. Validate continuity and optionally render the timed slideshow.

## Output

The primary deliverable is a numbered slide manifest. Each slide includes its in/out timing, exact voiceover text, concept, narrative function, expression direction, layout, image prompt, continuity constraints, and production status.

## Default Generation Route

GPT Image 2 through the Codex subscription is the default. The skill does not silently switch to a paid API or an external Gen Media model. Nano Banana 2, SeedDream 5.0, and other routes remain optional when the user explicitly selects them.

## Guardrails

- Preserve the spoken script unless the user asks for copy editing.
- Do not cut only by word count; use meaning and emotion.
- Do not mix models casually because it introduces style drift.
- Validate the style anchor and proof slides before a large paid batch.
- Keep the heading **Voiceover reads on this image** in the human-readable manifest.

## Example Prompt

```text
Use $stickman-vsl-director on this script. Create a timed slide manifest,
quote the exact voiceover for every image, and render with GPT Image 2
through my Codex subscription.
```
