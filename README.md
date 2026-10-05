# Vicky He — portfolio

Built with [Astro](https://astro.build): fast static pages, optimized images, almost no JavaScript.

## Run it on your computer
1. Install Node.js (LTS) from nodejs.org.
2. In this folder run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:4321. Changes show up as you save.

## Everyday edits (no layout code needed)

| What | Where |
|---|---|
| Name, intro line, email, socials, nav labels & colors | `src/data/site.json` |
| Add a case study | copy `src/content/projects/_TEMPLATE.md` → rename (e.g. `rolli-bakehouse.md`) → fill in |
| Add a photo series | add a file in `src/content/series/` |
| Images | put them in `src/assets/projects/<project-name>/` and point to them from the .md file |
| Order on the homepage | `order:` number in each file (lower = earlier) |
| Hide something | `featured: false` |

**Intro line tricks** (in `site.json`):
- `{star}` `{dot}` `{flower}` `{burst}` `{arch}` insert a colored glyph
- `*word*` sets that word letter-by-letter in the spark colors

**Images:** export large (2000–2400px wide) JPGs. Astro makes small WebP versions automatically. Always fill in the `alt` text — describe what's in the picture.

**Colors & fonts** live in `src/styles/global.css` (top of the file).

## Intro scroll animation
The homepage intro (`src/components/IntroDeck.astro`) pins on desktop and flips through a stack of images as you scroll, then fades out before "selected work". Swap the dummy images in `introImages` in `src/data/site.json`. Use your own files by putting them in `public/intro/` and writing `/intro/01.jpg`, etc. It's built with [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/). Phones and reduced-motion visitors see a still stack.

## Publish to your domain
**Easiest: Netlify Drop (no GitHub needed)**
1. Run `npm run build`. This creates a `dist` folder.
2. Go to app.netlify.com/drop and drag the `dist` folder in. You get a live link.
3. In Netlify go to **Domain management → Add a domain**, type your domain, and follow the DNS records it shows you at your domain registrar.
4. Set `site:` in `astro.config.mjs` to your domain, then rebuild and re-drop.

**Better long-term: GitHub + Netlify or Vercel (auto-deploys on every change)**
1. Push this folder to a GitHub repository.
2. On Netlify or Vercel choose **Import project**, then pick the repo. Build command `npm run build`, output folder `dist`.
3. Add your domain in the project's **Domains** settings and copy the DNS records to your registrar.
