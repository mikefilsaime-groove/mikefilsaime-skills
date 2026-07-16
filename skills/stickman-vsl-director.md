# Stickman VSL Director

Stickman VSL Director turns a video sales letter, narration, transcript, or voiceover into a timed, image-by-image production plan.

- [Live portal](https://stickman-vsl-director.mikefilsaime.chatgpt.site)
- [Compare Simple & Cute with Full-Color & Expressive](https://stickman-vsl-director.mikefilsaime.chatgpt.site/#styles)
- [Source repository](https://github.com/mikefilsaime-groove/stickman-vsl-director)
- [Included skill package](../media/kits/stickman-vsl-director)
- [Analyzed YouTube example](https://www.youtube.com/watch?v=nv7HuwnofW0)
- [Model-ready character and style reference](../media/kits/stickman-vsl-director/references/style-atlas/model-ready-character-style-reference.pdf)
- [Complete 233-slide visual atlas](../media/kits/stickman-vsl-director/references/style-atlas/original-video-complete-slide-atlas.pdf)

## Problem It Solves

A normal image prompt does not explain when the image appears, what voiceover it owns, why its concept was chosen, or how it stays visually consistent with the rest of a VSL. This skill directs the complete slide sequence.

## Inputs

- A script, transcript, or final voiceover.
- Optional final audio or word-level timestamps.
- Optional brand, character, palette, or model requirements.

## Art-Direction Choice

Before planning or generation, the skill asks the user to choose one complete workflow:

- **Option 1 — Simple & Cute:** warm cream backgrounds, a compact blue-body character, restrained accent colors, generous negative space, and softer charming expressions.
- **Option 2 — Full-Color & Expressive:** saturated full-frame environments, true stick bodies, larger emotional reactions, denser visual metaphors, and more physical humor.

The public comparison uses the same two-minute voiceover and identical 23-slide timing for both options.

## Workflow

1. Present both example boards and record the user's explicit art-direction choice.
2. Measure the script and establish the timing skeleton.
3. Divide the voiceover at semantic and emotional beats.
4. Give every slide one visual and persuasive job.
5. Choose the clearest layout: scene, contrast, grid, timeline, map, metaphor, or diagram.
6. Write the exact voiceover assignment and generation-ready prompt.
7. Route only the selected profile's reference pack.
8. Generate with GPT Image 2 through Codex by default, or use a deliberately selected alternate route.
9. Validate continuity, present the complete storyboard for approval, and render only after explicit approval.

## Output

The primary deliverable is a numbered slide manifest. Each slide includes its in/out timing, exact voiceover text, concept, narrative function, expression direction, layout, image prompt, continuity constraints, and production status.

## Default Generation Route

GPT Image 2 through the Codex subscription is the default. The skill does not silently switch to a paid API or an external Gen Media model. Nano Banana 2, SeedDream 5.0, and other routes remain optional when the user explicitly selects them.

## Guardrails

- Preserve the spoken script unless the user asks for copy editing.
- Do not select or blend an art-direction profile on the user's behalf.
- Do not cut only by word count; use meaning and emotion.
- Do not mix models casually because it introduces style drift.
- Do not attach the 20-page atlas to every image request; select only the relevant curated pages or individual frames.
- Validate the style anchor and proof slides before a large paid batch.
- Always stop at the storyboard review gate and obtain explicit approval before rendering video.
- Keep the heading **Voiceover reads on this image** in the human-readable manifest.

## Example Prompt

```text
Use $stickman-vsl-director on this script. Create a timed slide manifest,
quote the exact voiceover for every image, and render with GPT Image 2
through my Codex subscription. Ask me to choose the visual direction first.
```
