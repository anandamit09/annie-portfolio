# Annie — Textile Designer

Dark, editorial portfolio built with React 18, TypeScript, Vite, Tailwind CSS 3, Framer Motion 12 and Lucide React.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

`dist/` is a static site with relative paths, so it can be uploaded to any static host (Netlify, Vercel, GitHub Pages, etc.) or opened from a sub-folder.

## Settings — `src/config.ts`

| Setting | Current value / what to do |
| --- | --- |
| `designer` | Ananya Raj (shown in the Contact section and footer) |
| `email` / `phone` / `phoneHref` | Live `mailto:` and `tel:+91…` links in the Contact section. These become public when the site is deployed. Leave one empty to hide it. |
| `socials` | Add URLs for any profiles you want shown; empty ones are hidden. |
| `heroImage` | `images/hero/annie-cartoon.webp` — the cartoon portrait with its background removed. |

## Hero character and cursor effect — `src/components/HeroCharacter.tsx`

The character keeps the original Magnet behaviour (follows the cursor offset from its centre ÷ `strength` 3, within `padding` 150 px) and adds:

- spring physics (Framer Motion `useSpring`) instead of CSS transitions
- a 3D tilt toward the cursor (up to 12°) anywhere in the hero
- depth parallax: the red glow drifts the opposite way, the floor shadow slides with the lean, and a light sheen moves across the figure
- a smooth spring back to neutral when the cursor leaves the hero
- touch devices: a gentle idle float plus a light tilt on touch, using passive listeners so scrolling is never blocked
- `prefers-reduced-motion`: a still image

Because the character is a flat illustration rather than a modelled 3D figure, it cannot turn its head or show a new angle. The tilt, parallax and lighting give the impression of depth instead.

The portrait's background was removed with `rembg` (isnet-general-use model, alpha matting). To swap in a new one: `pip install "rembg[cpu]"`, `rembg i portrait.png out.png`, save as WebP in `public/images/hero/` and update `heroImage`. The bottom edge fades out softly (`FADE` in `HeroCharacter.tsx`).

## Content and images

- All project text, palettes and specifications come from the four portfolio PDFs; nothing was invented. Edit everything in `src/data/projects.ts`.
- All images in `public/images/{gramin,post,nyx,suits}` were extracted or cropped from the PDFs, converted to WebP, and keep their original colours.
- Garment photography for Gramin, Postscript and Suits & Scribbles comes from your Drive photo folder (files named `drive-*.webp`), resized to 1600 px. The Suits & Scribbles photos were RAW (.CR3) files, so they were converted with only a neutral exposure/contrast correction — no colour grading. NYX has no photos in the folder and still uses its PDF images. To add more, drop WebP/JPG files into `public/images/<project>/` and reference them in `src/data/projects.ts`.
- **Before publishing:** the Gramin, Postscript and NYX moodboards and inspiration strips are your collages but contain third-party reference photos. Trend images (e.g. the WGSN "Playful Paradox" image) and Jodi brand/technique photos were deliberately left out.

## Structure

```
src/
  config.ts                 contact details + hero image path
  data/projects.ts          all project content and marquee images
  components/
    FadeIn.tsx              whileInView fade/slide wrapper
    Magnet.tsx              cursor-following magnetic effect (off on touch / reduced motion)
    AnimatedText.tsx        character-by-character scroll reveal
    Buttons.tsx             ContactButton + ProjectButton
    TextileSculptures.tsx   yarn ball, spool, fabric flower, folded fabric (SVG)
  sections/
    HeroSection, MarqueeSection, AboutSection, ExpertiseSection,
    ProjectsSection (sticky stacking cards), ContactSection, ProjectDetail
```

Routing is hash-based: `#about`, `#projects`, … scroll to sections, and `#/project/<slug>` opens a project page (`gramin`, `postscript`, `nyx`, `suits-and-scribbles`).

## Accessibility & motion

- Respects `prefers-reduced-motion`: scroll reveals render as plain text, the marquee stays still, card scaling and the magnet effect are off.
- Images have descriptive alt text, are lazy-loaded, and open in a keyboard-dismissable lightbox on project pages.
