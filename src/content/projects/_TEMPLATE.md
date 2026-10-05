---
# ─────────────────────────────────────────────────────────────
#  TEMPLATE · copy this file, rename it (e.g. rolli-bakehouse.md), fill it in
# ─────────────────────────────────────────────────────────────
title: "[Project 1]"
client: "[Client or context]"
year: "[Year]"
role: "[Your role, e.g. creative direction, identity, packaging]"
industry: "[Optional, e.g. Museum / Education]"
summary: "[One sentence: what this project is and why it matters.]"
tags: ["[Brand identity]", "[Packaging]", "[Social]"]

# Homepage
featured: true
order: 1
glyph: star        # star · dot · flower · burst · arch
color: tomato      # tomato · cobalt · green · pink
cover: ../../assets/projects/project-1/cover.jpg
coverAlt: "[Describe the cover image for screen readers]"

# Case study
hero: ../../assets/projects/project-1/hero.jpg
heroAlt: "[Describe the hero mockup]"

overview: "[What is this project, in two or three sentences?]"
challenge: "[What was the problem? Who was it for, and what was in the way?]"
solution: "[How did you solve it? The direction, the big idea.]"

system:
  intro: "[One or two sentences on how the identity works as a system.]"
  logo:
    image: ../../assets/projects/project-1/logo.jpg
    alt: "[Describe the logo]"
    caption: "[Optional caption]"
  type:
    - { name: "[Headline typeface]", use: "Headlines" }
    - { name: "[Body typeface]", use: "Body & labels" }
  typeImage:
    image: ../../assets/projects/project-1/type.jpg
    alt: "[Describe the type specimen]"
  colors:
    - { name: "[Color 1]", hex: "#1A1A1A" }
    - { name: "[Color 2]", hex: "#F2EFE9" }
    - { name: "[Color 3]", hex: "#C9C9C4" }
    - { name: "[Color 4]", hex: "#8A8A85" }

applications:
  - { image: ../../assets/projects/project-1/app-1.jpg, alt: "[Describe image]", caption: "[Caption]", size: full }
  - { image: ../../assets/projects/project-1/app-2.jpg, alt: "[Describe image]", caption: "[Caption]", size: half }
  - { image: ../../assets/projects/project-1/app-3.jpg, alt: "[Describe image]", caption: "[Caption]", size: half }
  - { image: ../../assets/projects/project-1/app-4.jpg, alt: "[Describe image]", caption: "[Caption]", size: full }
  # GIF or video: put the file in public/projects/<name>/ and use src (it plays as-is)
  # - { src: /projects/<name>/clip.mp4, alt: "[Describe the video]", size: half }

results:
  text: "[What happened after launch? Real outcomes, feedback, or what you learned.]"
  metrics:
    - { value: "[00]", label: "[Metric label]" }
    - { value: "[00%]", label: "[Metric label]" }
    - { value: "[00]", label: "[Metric label]" }
---

<!-- Optional: anything written here appears as an extra "Notes" section at the end of the case study. -->
