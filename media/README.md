# Media Skills And Tools

Media workflows get their own space because they often include scripts, dependencies, generated files, and examples.

## Included Kits

- [yt-dlp-superpowers](kits/yt-dlp-superpowers): transcript, WhisperX fallback, and video-inspection workflows built downstream of yt-dlp.
- [stickman-vsl-director](kits/stickman-vsl-director): timed VSL storyboards, voiceover-to-image mapping, visual concept direction, and GPT Image 2 prompts. [Open the live portal](https://stickman-vsl-director.mikefilsaime.chatgpt.site).

These are Git submodules, so each keeps its own repository history while also appearing inside this hub.

## Pull The Kit Locally

```bash
git submodule update --init --recursive
```

## Source Repository

- [yt-dlp-superpowers](https://github.com/mikefilsaime-groove/yt-dlp-superpowers)
- [stickman-vsl-director](https://github.com/mikefilsaime-groove/stickman-vsl-director)

## Future Candidates

- Video visual inspection workflows.
- Transcript cleanup and summarization.
- Short-form clip selection.
- Media asset sourcing and relighting workflows.
