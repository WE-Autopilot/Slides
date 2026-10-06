# WE AutoPilot Slides

Slide decks for WE AutoPilot, built with [Slidev](https://sli.dev): you write slides in a Markdown file and Slidev turns them into a presentation that runs in the browser.

This repo holds:

- **`agm2026.md`**: the 2026/27 AGM deck.
- **`slides.md`**: a starter deck that shows one example of every layout. Copy it to make your own deck.
- **The "Sketchbook" template**: the club's slide style, which every deck in this repo uses automatically. It looks like a whiteboard after a good design meeting: wobbly pen outlines, lavender marker fills, handwritten notes, and photos stuck on with drawn frames.

## Quick start

You need [Node.js](https://nodejs.org) **22.12 or newer** (check with `node --version`).

```bash
git clone <this repo's URL>
cd <repo folder>
npm install
npm run dev        # opens the AGM deck at http://localhost:3030
npm run template   # opens the starter deck
```

Save a `.md` file and the browser updates straight away.

## Make your own deck

1. Copy the starter deck and give it a name:
   ```bash
   cp slides.md workshop-ros2.md
   ```
2. Run it:
   ```bash
   npx slidev workshop-ros2.md --open
   ```
3. Replace the placeholder slides with your own. Delete the layouts you don't need.
4. Put your images in `public/` (see [Images, video and QR codes](#images-video-and-qr-codes)).

Every `.md` file in this folder automatically gets the club's layouts, components and styles. You don't need to copy anything else.

## Slidev in five minutes

A deck is one Markdown file. `---` on its own line starts a new slide.

```md
---
# The very first block is the "headmatter": settings for the whole deck.
title: My talk
colorSchema: light
fonts:
  sans: Montserrat
  provider: none
transition: fade
layout: cover
---

# First slide.

---
layout: cards           # a block right after --- is this slide's settings ("frontmatter")
cards:
  - { icon: eye, name: Perception, text: What it does. }
---

# Second slide.

## A subtitle

<!-- Speaker notes: an HTML comment at the very end of a slide. -->
```

Keep the headmatter from `slides.md` (the first block) when you start a deck. It sets the light colour scheme, the fonts and the fade transition.

**Useful things to know:**

- **Titles:** `# Title.` is the slide title and `## …` is the purple subtitle under it.
- **Markdown and HTML mix freely.** Utility classes such as `flex`, `grid`, `gap-4` and `mt-3` work on any element (Slidev uses [UnoCSS](https://unocss.dev), which is Tailwind-compatible).
- **Clicks:** wrap things in `<v-click>` to reveal them one click at a time ([docs](https://sli.dev/guide/animations)).
- **Emphasis:** underline or circle a key phrase on a click with the purple marker:
  ```html
  <span v-mark="{ at: 1, type: 'underline', color: '#7C5CDB', strokeWidth: 3 }">key phrase</span>
  ```
  `type` can be `underline`, `circle`, `highlight` or `box`.

**While presenting** (in the browser):

| Key | What it does |
| --- | --- |
| `→` / `Space` | Next click or slide |
| `←` | Back |
| `O` | Overview of all slides |
| `P` | Presenter mode: speaker notes, next slide and a timer. Open it on your laptop and put the normal view on the projector. |
| `F` | Fullscreen |

Full Slidev docs: <https://sli.dev/guide/>.

## The Sketchbook style

### Colours

Use only these six colours. They're defined as CSS variables in `styles/index.css`.

| Token | Hex | Use it for |
| --- | --- | --- |
| `--paper` | `#FFFFFF` | Background |
| `--ink` | `#191919` | Text and all pen outlines |
| `--purple` | `#7C5CDB` | Annotations, arrows, marks, small labels, subtitles |
| `--lavender` | `#EAE4FA` | The only fill colour (the "marker") |
| `--lilac` | `#BEAEED` | Secondary lines, quiet dividers |
| `--muted` | `#5D5A66` | Small captions under notes |

Photos, videos and sponsor logos keep their real colours.

### Fonts

- **Montserrat:** titles, body text and anything people must read exactly (numbers, names, specs).
- **Kalam:** handwriting, for notes, asides, explanations and arrow labels. Add `class="hand"` to any element, plus `purple` for an annotation.

Both fonts load from Google Fonts, so **the presenting laptop needs internet**. Without it they fall back to system fonts.

### Rules of thumb

- **Content slides carry 4–6 things to talk about.** Only `section` slides should be sparse. If a slide has one or two things on it, merge it with a neighbour.
- **Titles** are sentence case and end with a full stop: `# Our club.`
- **Only outlines and arrows wobble.** Text and photos always stay crisp.
- **Numbers** (`<Num>`, numbered notes) are for real sequences, or to match a photo to its note. Don't use them as decoration.
- **No** dark backgrounds, gradients, shadows, emoji icons, ALL-CAPS spaced-out labels, or monospace outside code.

## Layouts

Set a layout with `layout:` in a slide's frontmatter. Every layout except `cover` puts the logo top-left, with the `# title` and `## subtitle` under it. **`slides.md` has a working example of each one.** Copy from there.

### `cover`: title slide

```md
---
layout: cover
image: /photos/golf_cart_sketch-hd.jpg   # the sketch on the right
imageAlt: Describe the image
---

# WE<br>AutoPilot

## Your talk title

<p class="hand">a handwritten tagline</p>
```

### `default`: free layout

This is used when you don't set a layout. You get the logo, title and subtitle, then any Markdown or HTML you like. Markdown lists become handwritten notes; put a `<small>` inside a list item to add a caption under it.

### `two-cols`: two columns

Everything before `::right::` goes in the left column, everything after it in the right.

### `section`: section break

```md
---
layout: section
doodle: wrench        # any Doodle name, see below
---

# Section title.

One handwritten line.
```

### `highlights`: photo collage

One big photo plus smaller ones (3–5 in total), each with a numbered badge. Matching numbered notes sit on the right, and an optional "next up" strip runs along the bottom.

```yaml
layout: highlights
photos:
  - { src: /photos/a.jpg, alt: What's in it, pos: center 30% }   # the first one is the big one
  - { src: /photos/b.jpg, alt: … }
notes:
  - Note for photo 1
  - { text: Note for photo 2, caption: small print }
next: "next up: … →"     # optional
```

`pos` moves the crop (CSS `object-position`). Use it to keep faces in frame.

### `flow`: a process or pipeline

3–6 boxes joined by arrows, with an optional image on the left, a loop arrow, and brackets showing who owns which steps.

```yaml
layout: flow
image: /photos/golf-cart.png       # optional
imageNote: the vehicle             # optional
steps:
  - { label: Sense, term: Sensors, note: raw data }
  - { label: Perceive, term: Perception, note: …, mark: true }       # mark: circle it on click
  - { label: Later, term: Next, note: …, fill: none, dashed: true }  # a future step
loop: and round again              # optional
brackets:                          # optional; steps are numbered from 1
  - { from: 2, to: 2, label: Perception team }
```

Anything after `::extra::` is drawn on top of the slide, for example an extra `<SketchArrow>` with a "you are here" note.

### `cards`: teams, options, comparisons

```yaml
layout: cards
cols: 2            # optional, default 2
face: 64           # optional, headshot size in px
textSize: 16.5     # optional, handwriting size in px
sideWidth: 230     # optional, width of the side column
cards:
  - icon: eye
    name: Perception
    text: The handwritten description.
    tools: A small purple line, e.g. tools
    people:
      - { src: /photos/leads/x.jpg, name: Full Name, role: Their role, pos: center 30% }
```

Anything after `::side::` goes in a column on the right, such as numbered notes or a framed QR code with "← scan me!".

### `team`: one technical team up close

```yaml
layout: team
icon: eye
steps:                     # what the team builds (3 is the sweet spot)
  - { label: Ingest, text: Camera frames and LiDAR into ROS 2 }
facts:                     # 2 key facts with an icon
  - { icon: camera, label: Front camera, caption: small print }
tools: [ROS 2, OpenCV]
skills:
  - Computer vision
  - { text: Sensor fusion, caption: small print }
industry: { text: Where it shows up in industry., caption: small print }
handoff: "detections → the rest of the stack"
```

## Components

You can use these in any slide. All sizes are in px on Slidev's 980 × 552 canvas.

| Component | What it is | Example |
| --- | --- | --- |
| `SketchBox` | Lavender box with a wobbly pen border. `fill="none"` for a white box, `dashed` for a dashed border, `pad` for padding. | `<SketchBox :pad="'12px 16px'">…</SketchBox>` |
| `SketchFrame` | Photo with a drawn frame. `pos` moves the crop, `fit="contain"` shows the whole image, and `n` + `corner` (`tl`/`tr`/`bl`/`br`) add a numbered badge. Size it with `style`. | `<SketchFrame src="/photos/x.jpg" alt="…" :n="1" corner="tr" style="width: 200px; height: 140px" />` |
| `Note` | A handwritten line with an optional number and caption. `color="purple"` for annotations. | `<Note :n="1" caption="small print">The note</Note>` |
| `Num` | A hand-drawn numbered circle. | `<Num :n="2" />` |
| `SketchArrow` | Curved pen arrow from (x1, y1) to (x2, y2), relative to the nearest `relative` parent. `bend` curves it; `color="ink"` for black. | `<SketchArrow :x1="0" :y1="0" :x2="120" :y2="40" :bend="-20" />` |
| `Bracket` | A bracket with a handwritten label, for "who owns what". | `<Bracket label="Perception team" style="width: 200px" />` |
| `Doodle` | Pen-drawn icon. Names: `eye`, `map-pin`, `steering-wheel`, `wrench`, `lidar`, `cone`, `camera`, `browser`, `coins`, `megaphone`, `calendar`, `briefcase`, `chat`, `shield`, `log`, `path`, `alert`. | `<Doodle name="lidar" :size="32" />` |
| `CartDiagram` | Top-down sketch of the golf cart with LiDAR, camera view and planned path (used in the AGM deck). | `<CartDiagram />` |

Slidev's built-in components also work, e.g. `<Arrow>` for straight arrows and `<v-click>` for reveals.

## Images, video and QR codes

- **Where files go:** put them in `public/` and reference them with a leading slash. `public/photos/team.jpg` becomes `/photos/team.jpg`. Folders in use: `photos/` (`photos/leads/` for headshots), `qr/`, `sponsors/`, `videos/`.
- **Photos:** always give them `alt` text. Use JPG for photos and SVG for logos. Keep files reasonable (under ~1 MB each); everyone who clones the repo downloads them.
- **Looping video:** trim it first so the file stays small, then:
  ```html
  <SketchFrame style="width: 260px; height: 340px">
    <video class="sk-frame-media" src="/videos/clip.mp4" poster="/videos/clip_poster.png" autoplay loop muted playsinline />
  </SketchFrame>
  ```
  `muted` is required for autoplay. The `poster` image is what appears in PDF/PNG exports, where video can't play.
- **QR codes:** put them in a `SketchFrame` with `fit="contain"` so nothing gets cropped, and test that they scan from the back of the room.

## Present, export and share

| Task | Command |
| --- | --- |
| Present the AGM deck | `npm run dev`, then `F` for fullscreen and `P` for presenter mode |
| Present any deck | `npx slidev my-deck.md --open` |
| Export to PDF | `npx slidev export my-deck.md` (writes `my-deck-export.pdf`) |
| Export each slide as a PNG | `npx slidev export my-deck.md --format png` |
| Build a static website | `npx slidev build my-deck.md` (writes `dist/`) |

The first export asks you to install `playwright-chromium` (a headless browser, about 150 MB): run `npm i -D playwright-chromium` once.

Exports and `dist/` are git-ignored. Share PDFs through the club's Drive or Discord, not the repo.

**Hosting:** `netlify.toml` and `vercel.json` are already set up. Connect the repo on Netlify or Vercel and it publishes the AGM deck (`npm run build`) as a website whenever `main` changes. To host a different deck, change the `build` script in `package.json`.

## Project structure

```text
agm2026.md            The 2026/27 AGM deck
slides.md             Starter deck: one example of every layout (copy this)
styles/index.css      The six colour tokens, fonts and all shared styles
global-top.vue        The two "wobble" SVG filters (#rough, #rough-sm)
layouts/              cover, default, two-cols, section, highlights, flow, cards, team
components/           SketchBox, SketchFrame, Note, Num, SketchArrow, Bracket, Doodle, CartDiagram
setup/shiki.ts        Light code-highlighting theme
public/               Images, logo, QR codes, sponsor logos, videos
netlify.toml, vercel.json   Hosting config
```

Layouts and components are picked up automatically by every deck in the folder. Change them carefully, because every deck uses them.

## Gotchas

- **No blank lines inside an HTML block.** Markdown treats an indented line after a blank line as a code block, and the slide breaks. Keep `<div>…</div>` blocks free of blank lines.
- **SVG text size:** `font-size="12"` on SVG `<text>` gets turned into a CSS class by UnoCSS and comes out huge. Use `style="font: 600 12px Montserrat"` instead.
- **Never put the wobble filter on text.** Draw borders and fills on a `::before` pseudo-element (that's how `SketchBox` works), so the text inside stays crisp.
- **Speaker notes** must be the *last* HTML comment on a slide.
- **Port in use?** `npx slidev my-deck.md --port 3031`
- **The slide looks cramped or overflows?** Check it at full screen (`F`), and split or trim it rather than shrinking the text below ~12 px.

## Working on this repo together

- **Branches:** make a branch for your deck (`git checkout -b workshop-ros2`) and open a pull request into `main`.
- **Template changes:** if you change a layout or component, open the AGM deck and `slides.md` before merging to check nothing else broke.
- **Big files:** don't commit exported PDFs, raw screen recordings, or full-resolution originals.

## Credits

- **Built with:** [Slidev](https://sli.dev). Fonts: [Montserrat](https://fonts.google.com/specimen/Montserrat) and [Kalam](https://fonts.google.com/specimen/Kalam), both under the SIL Open Font License.
- **QNX logo:** from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:QNX-Logo-QNX-CORAL-RGB.svg) and a trademark of BlackBerry/QNX. It's used only to credit QNX as our sponsor.
- **Photos and the WE AutoPilot logo:** belong to the club and its members. Ask before reusing them outside club material.
