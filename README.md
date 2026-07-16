# Mike Filsaime's AI Skills Library

A public hub for reusable AI skills, automation kits, and workflow superpowers created by Mike Filsaime.

This repository is the front door. Some resources live directly here as public-ready skill notes and templates. Larger projects stay in their own repositories and are included here as Git submodules.

## Featured Resources

| Resource | Type | What It Helps With | Status |
| --- | --- | --- | --- |
| [social-media-triage-kit](automation/kits/social-media-triage-kit) | Automation kit | Social media inbox and follow-up triage workflows | Included submodule |
| [ai-inbox-triage-kit](automation/kits/ai-inbox-triage-kit) | Automation kit | Gmail, Notion, Codex, and Claude Code inbox triage | Included submodule |
| [yt-dlp-superpowers](media/kits/yt-dlp-superpowers) | Media skill pack | Transcripts, WhisperX fallback, and video inspection workflows | Included submodule |
| [stickman-vsl-director](media/kits/stickman-vsl-director) | Visual production skill | Turns VSL scripts into timed storyboards in either Simple & Cute or Full-Color & Expressive art direction | Included submodule · [Compare styles](https://stickman-vsl-director.mikefilsaime.chatgpt.site/#styles) |
| [AEO audit](skills/aeo-audit.md) | Skill | AI answer visibility across Google AI features, ChatGPT, Perplexity, Claude, Gemini, and related answer engines | Public summary |
| [SEO audit](skills/seo-audit.md) | Skill | Technical SEO, on-page search quality, crawlability, metadata, and structured data | Public summary |
| [Mobile responsive](skills/mobile-responsive.md) | Skill | Mobile UX, responsive layouts, touch targets, and mobile performance checks | Public summary |

## Repo Map

- [Catalog](CATALOG.md): the full index of public kits, local skills, and next candidates.
- [Skills](skills/README.md): public summaries of individual AI skills.
- [Automation](automation/README.md): sanitized automation kit links and publishing rules.
- [Media](media/README.md): media workflow resources.
- [Templates](templates/): reusable templates for publishing future skills safely.
- [Public safety checklist](templates/publication-checklist.md): preflight before making a skill public.

## Clone Everything

This hub includes several standalone repositories as submodules. To clone the hub and pull the nested kits at the same time:

```bash
git clone --recursive https://github.com/mikefilsaime-groove/mikefilsaime-skills.git
```

If you already cloned the repo:

```bash
git submodule update --init --recursive
```

## How This Hub Works

Keep substantial projects in their own repositories when they have setup steps, releases, dependencies, examples, or their own audience.

Use this repository for:

- Curated links to the best public kits.
- Git submodule pointers to standalone public kits.
- Short public summaries of local skills.
- Templates for turning private skills into public-ready resources.
- Roadmaps and examples that connect related workflows.

Promote a skill into its own repository when it becomes big enough to need its own docs, issues, examples, or version history.

## Public Safety

Before publishing any automation or account-related skill, remove private details:

- Credentials, tokens, keys, cookies, and session data.
- Personal account names, private URLs, inbox labels, customer names, and message contents.
- Exact schedules, automation identifiers, and routing details that only apply to one private setup.
- Anything copied from a private workspace that should remain operationally confidential.

Share the pattern, not the private account.

## License

MIT License. See [LICENSE](LICENSE).
