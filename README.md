# Siva Prasath K — Portfolio

Production-ready personal portfolio built with the **Signal & Instrument** design system.

## Tech Stack

- **Next.js 16** (App Router, TypeScript strict mode)
- **Tailwind CSS v4** with CSS-variable token layer (`@theme`)
- **Framer Motion** for scroll/reveal/hover choreography
- **React Three Fiber + custom GLSL shader** for the animated background
- **Lucide React** for icons
- `next/font` for self-hosted typefaces (Chakra Petch, Inter Tight, IBM Plex Mono)

## Local Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, theme, utilities
│   ├── layout.tsx           # Root layout (fonts, metadata, JSON-LD)
│   ├── page.tsx             # Main page composition
│   └── opengraph-image.tsx  # Generated OG image
├── components/
│   ├── AnimatedBackground.tsx  # WebGL wrapper with fallback
│   ├── SignalField.tsx         # R3F + GLSL shader canvas
│   ├── WebGLFallback.tsx       # CSS gradient + SVG grid fallback
│   ├── Nav.tsx                 # Sticky nav with active section tracking
│   ├── Hero.tsx                # Hero with count-up metrics
│   ├── About.tsx               # Two-column about + spec sheet
│   ├── Experience.tsx          # Timeline with cards
│   ├── OpenSource.tsx          # Supabase case study
│   ├── Work.tsx                # Featured projects + GitHub repos
│   ├── FeaturedProjectCard.tsx # Project card with SVG diagrams
│   ├── GitHubRepos.tsx         # Server component (ISR, GitHub API)
│   ├── Stack.tsx               # Categorized skills list
│   ├── Signals.tsx             # Achievements + profile links
│   ├── Contact.tsx             # Contact links with copy-to-clipboard
│   ├── Footer.tsx              # Footer with IST clock
│   ├── ScrollReveal.tsx        # Reusable scroll animation wrapper
│   └── SectionDivider.tsx      # Tick-mark ruler divider
└── content/
    ├── experience.ts    # Work experience entries
    ├── opensource.ts     # Supabase contribution data
    ├── projects.ts      # Featured projects + fallback repos
    └── skills.ts        # Skill categories + achievements
```

## Editing Content

All content lives in typed data files under `src/content/`. To update:

1. **Projects:** Edit `src/content/projects.ts` — modify `featuredProjects` array or `fallbackRepos`.
2. **Experience:** Edit `src/content/experience.ts` — add/remove entries from `experiences` array.
3. **Open Source:** Edit `src/content/opensource.ts` — update the `supabaseContribution` object.
4. **Skills/Achievements:** Edit `src/content/skills.ts` — modify `skillCategories`, `achievements`, or `profileLinks`.

No component changes needed when editing content. Each file exports typed interfaces for IDE autocomplete.

## Design Tokens

All colors and fonts are defined as CSS variables in `src/app/globals.css`:

| Token      | Value     | Usage                              |
|------------|-----------|-------------------------------------|
| `--color-void`   | `#05070E` | Page background                   |
| `--color-panel`  | `#0D1420` | Card surfaces                     |
| `--color-edge`   | `#1C2739` | Borders, grid lines               |
| `--color-trace`  | `#5BE9D8` | Primary accent (phosphor teal)    |
| `--color-signal` | `#7C5CFF` | Secondary (interactive states)    |
| `--color-flux`   | `#FFB65C` | Tertiary (achievements only)      |
| `--color-ink`    | `#E8EDF7` | Primary text                      |
| `--color-muted`  | `#8A97AE` | Secondary text                    |

## Assets

- `public/resume.pdf` — Place your resume PDF here
- `public/headshot.jpg` — Optional; if present, shown in About section

## Deployment

Deployed on Vercel. Push to `main` to trigger auto-deployment.

```bash
# Deploy via Vercel CLI
npx vercel --prod
```
