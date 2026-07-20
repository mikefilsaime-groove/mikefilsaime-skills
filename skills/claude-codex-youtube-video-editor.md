# Claude/Codex YouTube Video Editor

Claude/Codex YouTube Video Editor is a local, end-to-end workflow for turning a raw talking-head recording into a finished YouTube video.

- [Source repository](https://github.com/hassancs91/claude-youtube-editor)
- [Included kit](../media/kits/claude-codex-youtube-video-editor)
- [Learn-with-Hasan guide](https://learnwithhasan.com/guide/claude-code-video-editing/)

## What It Does

The workflow turns a talking-head recording into a cut, synced visual sequence, cleaned voice track, sound pass, title and thumbnail options, and a private YouTube draft. Full-screen statements, diagrams, UI walkthroughs, and mock screencasts are built in Remotion/TSX rather than screen-recorded.

## Workflow

1. **Clean cut** — transcribe the recording, shape the edit, and produce a master cut with a word-level transcript.
2. **Visual beats** — create Remotion/TSX shots and generated screencasts timed to the spoken words.
3. **Clean audio** — diagnose noise, isolate the voice, and preserve levels.
4. **Sound design** — plan and mix SFX at the intended verbal beats.
5. **Packaging** — prepare one title direction with three thumbnail bets.
6. **Upload** — verify for ghost speech and A/V drift, then upload a private YouTube draft.

## Inputs And Requirements

Bring a raw talking-head recording, your channel brand, and the relevant service credentials where needed. The kit expects Claude Code, Python 3.10+, Node 18+, `ffmpeg`, and `ffprobe`; transcription, cloud voice processing, thumbnails, and upload setup may use separate services and OAuth.

## Use It

Start with a brand setup, then work through the production flow:

```text
set up my brand → clean cut → add TSX beats → clean audio → suggest SFX → package → upload
```

Always render and inspect outputs before treating a video as complete.
