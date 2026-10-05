import type { CollectionEntry } from 'astro:content';

/** All photos in a series (local images first, then file paths / URLs), in the shape PhotoWall expects. */
export function seriesPhotos(s: CollectionEntry<'series'>) {
  const base = { series: s.id, seriesTitle: s.data.title };
  return [
    ...s.data.images.map((p) => ({ src: p.image.src, alt: p.alt, w: p.image.width, h: p.image.height, title: p.title ?? '', caption: p.caption ?? '', ...base })),
    ...s.data.photos.map((p) => ({ src: p.src, alt: p.alt, w: p.w, h: p.h, span: p.span, title: p.title ?? '', caption: p.caption ?? '', ...base })),
  ];
}

export function seriesCover(s: CollectionEntry<'series'>) {
  return s.data.cover?.src ?? s.data.coverSrc!;
}
