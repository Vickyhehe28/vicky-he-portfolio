# Framer handoff — Vicky He portfolio

Rebuild this portfolio **inside Framer**, using the Astro code in this folder as the visual and structural reference.
Do not try to import the Astro code into Framer. Recreate it with native Framer pages, components, styles and CMS.

## Rules for the agent
- Work on a **branch**, never on the live site.
- **Show your plan first** and wait for approval before making changes.
- **Don't invent content.** Keep every `[bracketed]` placeholder exactly as it is. Vicky will write the real copy.
- If something can't be done through the agent (for example overrides or hover variants), list it under "manual steps" instead of guessing.

## Reference files
| What | File |
|---|---|
| Colors, fonts, spacing | `src/styles/global.css` (`:root`) |
| Site text & nav | `src/data/site.json` |
| Layout: sidebar, mobile top bar, menu, footer | `src/layouts/Base.astro` |
| Homepage | `src/pages/index.astro` |
| Project card + hover | `src/components/ProjectCard.astro` |
| Case study template | `src/pages/work/[slug].astro` |
| Glyph shapes (SVG paths) | `src/components/Glyph.astro` |
| CMS fields | `src/content.config.ts` |
| Placeholder content & images | `src/content/**`, `src/assets/**` |

## 1. Styles
**Colors**
- Ink `#0A0A0A`, Paper `#FFFFFF`, Grey `#5E5E5E`, Rule `#E6E6E6`, Soft `#F5F5F4`
- Sparks, used only for glyphs and accents: Tomato `#FF4F1F`, Cobalt `#2E5BFF`, Green `#19B46A`, Pink `#FF7AC2`, Lime `#C6F24E`
  - Lime is a fill only, always with black text on top.
- Text-safe sparks, for small text: Tomato `#D23A0B`, Cobalt `#2449E0`, Green `#0B7F47`, Pink `#C2338A`

**Fonts**
- Display: Space Grotesk 400/500, letter-spacing −2.5% to −5%
- Body: DM Sans 400/500

**Text styles**
| Style | Size | Font | Notes |
|---|---|---|---|
| Intro | 76 → 36px | Space Grotesk 500, line-height 1.08 | |
| Case title | 112 → 44px | | |
| Section body | 28 → 20px | Space Grotesk 400 | |
| Nav item | 28 → 22px | Space Grotesk 400 | |
| Label | 12–15px | DM Sans 500 | uppercase, +5% tracking |
| Body | 16px | DM Sans | |

**Radius:** 14px on images and cards. Pills are fully rounded with a 1px border.

## 2. Components
1. **Glyph**: a vector with 5 variants (star, dot, flower, burst, arch) and a color property. Take the SVG paths from `Glyph.astro`.
2. **NavItem**: `( label )` on the left; a colored `: hint` and a Glyph on the right; a dashed bottom border.
   - Hover: the label turns ink and the glyph rotates 90° and scales to 1.25.
   - Current page: label in ink, weight 500.
3. **ProjectCard**: 4:5 image with 14px radius.
   - Desktop hover: a dark gradient fades in from the bottom; the title (white, Space Grotesk) and white outlined tag pills slide up 12px; a white circle with the project's colored glyph pops in at the top right; the image scales to 1.035. Use an ease-out curve, about 0.5s.
   - Phone (no hover): the title and ink-outlined tags always sit below the image.
4. **Pill**: an outlined pill, plus a "lime" variant for the résumé button.

## 3. Layout
**Desktop (≥1024px)**
- Two columns. The left sidebar is sticky, full viewport height, 27vw wide (min 280px, max 380px), with a 1px right border.
- Sidebar contents:
  - Logo "vicky✦he", with the star in tomato.
  - Name in uppercase in text-safe tomato, with the role below it.
  - The NavItem list pinned to the bottom.
  - The lime résumé pill and the copyright line.
- The right column scrolls.

**Tablet and phone**
- A sticky top bar with the logo and a "menu" pill.
- The menu opens a full-screen white overlay with large NavItems and the résumé pill.

## 4. Pages
- **Home**
  - Centered intro line from `site.json`. It contains a green flower glyph, and the word "word" is set letter by letter in green, pink, cobalt and tomato.
  - Below it: name • role.
  - On desktop only, a "scroll to explore" cue with a thin animated line.
  - On phone, the NavItem list appears under the intro.
  - Then "( selected work )" with a count, and a 2-column grid of ProjectCards. The right column is offset 80px down. It's 1 column on phone.
- **Case study** (a CMS page for Projects)
  - Breadcrumb, then the title with its glyph, the summary and tag pills.
  - A meta row: Client / Role / Year / Scope.
  - The hero image.
  - Numbered sections 01 Challenge, 02 Insight, 03 Strategy, 04 Design system (logo, typography, color swatches), Applications (full-width and half-width images), and 05 Results (metrics).
  - Then a "( next project )" link.
- **Photography, About, Contact**: placeholder pages for now.

## 5. CMS
Mirror `src/content.config.ts`.

**Projects**
- title, slug, client, year, role, summary, tags
- featured, order, glyph, color
- cover + alt, hero + alt
- challenge, insight, strategy
- system intro, logo image, type list, color list
- applications (images with size)
- results text and metrics

**Photo Series**
- title, slug, theme, featured, order, glyph, color
- cover + alt, images

Seed both collections with the placeholder entries and images in `src/content` and `src/assets`.

## 6. Accessibility & SEO
- Every image needs alt text, taken from the CMS alt fields.
- Keep visible focus states.
- Page titles: "Title — Vicky He". Use the summary as the meta description and the cover as the share image.
