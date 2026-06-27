# Automation Kits

This section includes public automation resources while keeping private account workflows out of the hub.

## Included Kits

- [social-media-triage-kit](kits/social-media-triage-kit)
- [ai-inbox-triage-kit](kits/ai-inbox-triage-kit)

These are Git submodules, so they keep their own repository history while also appearing inside this hub.

## Pull The Kits Locally

```bash
git submodule update --init --recursive
```

## Source Repositories

- [social-media-triage-kit](https://github.com/mikefilsaime-groove/social-media-triage-kit)
- [ai-inbox-triage-kit](https://github.com/mikefilsaime-groove/ai-inbox-triage-kit)

## What Belongs Here

- Sanitized setup patterns.
- Example workflows.
- Public-safe prompts.
- Checklists for triage, follow-up, escalation, and logging.
- Links and submodules for standalone kits.

## What Does Not Belong Here

- Credentials, cookies, tokens, private sessions, or authenticated browser state.
- Private schedules, reminder IDs, automation IDs, and internal routing rules.
- Real customer, prospect, partner, or team messages.
- Private social, email, CRM, or Notion data.

## Rule Of Thumb

If someone could run it against Mike's actual accounts without changing anything, it is too specific for a public repo.
