/**
 * Content model for the portfolio.
 * Add a project = add one .md file in src/content/projects (copy _TEMPLATE.md).
 * Add a photo series = add one .md file in src/content/series.
 * You never need to touch layout code to add work.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sparks = z.enum(['tomato', 'cobalt', 'green', 'pink']);
const glyphs = z.enum(['star', 'dot', 'flower', 'burst', 'arch', 'rolli', 'cubi']);

const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.string(),
      role: z.string(),
      industry: z.string().optional(),
      website: z.string().optional(), // e.g. "www.rollibakehouse.com"
      summary: z.string(),
      tags: z.array(z.string()).min(1),

      // Homepage
      featured: z.boolean().default(true),
      order: z.number().default(99),
      glyph: glyphs.default('star'),
      color: sparks.default('tomato'),
      cover: image(),
      coverSrc: z.string().optional(), // a video in /public shown on the homepage card instead of the cover image
      coverAlt: z.string(),

      // Case study
      hero: image().optional(),
      heroSrc: z.string().optional(), // a video in /public used instead of the hero image
      heroAlt: z.string(),
      overview: z.string(),
      challenge: z.string(),
      solution: z.string(),
      system: z.object({
        intro: z.string().optional(),
        logo: z.object({ image: image(), alt: z.string(), caption: z.string().optional() }).optional(),
        type: z
          .array(z.object({ name: z.string(), use: z.string() }))
          .default([]),
        typeImage: z.object({ image: image(), alt: z.string() }).optional(),
        colors: z.array(z.object({ name: z.string(), hex: z.string() })).default([]),
      }).default({}),
      applications: z
        .array(
          z.object({
            // An image from src/assets, OR a file in /public used as-is: an animated GIF
            // or a video (e.g. src: /projects/x/clip.mp4). GIFs must use src so they keep moving.
            image: image().optional(),
            src: z.string().optional(),
            // Or a block of text between images: optional small label + paragraphs (blank line = new paragraph)
            label: z.string().optional(),
            text: z.string().optional(),
            // Or a row of color swatches
            swatches: z.array(z.object({ hex: z.string(), name: z.string().optional(), image: image().optional(), alt: z.string().optional(), position: z.string().optional() })).optional(),
            // Framing: which part of the image to keep when it's cropped ("center", "right", "50% 30%"…),
            // an optional crop shape for this item ("3 / 1") and a zoom (1.8 = 180%)
            position: z.string().optional(),
            aspect: z.string().optional(),
            zoom: z.number().optional(),
            // Or an Instagram-style story player (9:16 images)
            stories: z.array(z.object({ image: image(), alt: z.string() })).optional(),
            alt: z.string().default(''),
            caption: z.string().optional(),
            size: z.enum(['full', 'half']).default('full'),
          }).refine((a) => a.image || a.src || a.text || a.label || a.swatches || a.stories, { message: 'Each application needs an image, a src, text or swatches' }),
        )
        .default([]),
      results: z.object({
        text: z.string(),
        metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      }),
      seoDescription: z.string().optional(),

      // Optional extras, shown in this order after Results
      halfAspect: z.string().optional(), // e.g. "4 / 3": side-by-side images are cropped to the same shape
      marquee: z.array(z.string()).default([]), // words that scroll across the page
      gallery: z
        .object({
          title: z.string(),
          images: z.array(z.object({ image: image(), alt: z.string() })).min(1),
        })
        .optional(), // a swipeable photo carousel
      reels: z
        .object({
          title: z.string(),
          intro: z.string().optional(),
          // video: a file in /public (e.g. /projects/x/reel-1.mp4). Leave it out for a placeholder tile.
          items: z.array(z.object({ title: z.string(), video: z.string().optional(), poster: image().optional() })).min(1),
        })
        .optional(),
    }),
});

const series = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/series' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      theme: z.string(),
      intro: z.string().optional(), // a sentence or two shown at the top of the series page
      featured: z.boolean().default(true),
      wall: z.boolean().default(false), // true = the "All photos" wall on /photography, not a series
      layout: z.enum(['wall', 'book']).default('wall'), // book = book spreads: two side by side, then rows of three
      hero: z.string().optional(), // big photo at the top of the series page (book layout)
      heroStyle: z.enum(['overlay', 'cover']).default('overlay'), // overlay = full-width photo, title on it; cover = whole cover centred, title below
      opening: z.enum(['blink']).optional(), // blink = eyelid intro animation when the page opens
      order: z.number().default(99),
      glyph: glyphs.default('dot'),
      color: sparks.default('cobalt'),
      // Cover for the series grid: an image from src/assets, or a file path / URL in coverSrc
      cover: image().optional(),
      coverSrc: z.string().optional(),
      coverAlt: z.string(),
      coverPosition: z.string().default('center'), // which part of the cover shows on the series card, e.g. 'right'
      // Photos inside the series. Either local images (images) or file paths / URLs (photos).
      images: z
        .array(z.object({ image: image(), alt: z.string(), title: z.string().optional(), caption: z.string().optional() }))
        .default([]),
      photos: z
        .array(z.object({ src: z.string(), alt: z.string(), w: z.number().optional(), h: z.number().optional(), title: z.string().optional(), caption: z.string().optional() }))
        .default([]),
    }).refine((s) => s.cover || s.coverSrc, { message: 'A series needs a cover or coverSrc' }),
});

export const collections = { projects, series };
