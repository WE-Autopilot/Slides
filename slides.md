---
theme: default
title: WE AutoPilot — Template
info: |
  Starter deck in the club's Sketchbook style. Copy this file, rename it,
  and replace the placeholder text. See README.md for every layout's options.
colorSchema: light
fonts:
  sans: Montserrat
  provider: none
highlighter: shiki
drawings:
  persist: false
transition: fade
layout: cover
image: /photos/golf_cart_sketch-hd.jpg
imageAlt: Pen sketch of the club's golf cart in a street with detection boxes
---

# WE<br>AutoPilot

## Your talk title here

<p class="hand">a short handwritten tagline</p>

<!--
Speaker notes go in an HTML comment at the end of a slide.
Open http://localhost:3030/presenter/ (presenter mode) to see them.
-->

---

# A default slide.

## Logo, title, subtitle, then anything you like

<div class="grid grid-cols-2 gap-10 mt-6">
  <div class="flex flex-col gap-4">
    <Note :n="1" caption="Small grey caption under the note">A numbered handwritten note</Note>
    <Note :n="2">Use numbers only for a real sequence</Note>
    <Note color="purple">A purple note for asides and annotations</Note>
    <p class="mt-2">Plain text stays crisp Montserrat. Mark the <span v-mark="{ at: 1, type: 'underline', color: '#7C5CDB', strokeWidth: 3 }">one key phrase</span> on a click.</p>
  </div>
  <div class="flex flex-col items-start gap-6">
    <SketchBox :pad="'14px 18px'">
      <h3>A SketchBox</h3>
      <p class="mt-1">Lavender marker fill, wobbly pen border, crisp text.</p>
    </SketchBox>
    <div class="flex items-center gap-6">
      <SketchFrame src="/photos/golf-cart.png" alt="The club's golf cart" fit="contain" :n="3" corner="tr" style="width: 140px; height: 158px; margin-left: 6px" />
      <div class="relative" style="width: 150px; height: 80px">
        <span class="hand purple absolute whitespace-nowrap" style="left: 24px; top: 0">a photo in a frame</span>
        <SketchArrow :x1="40" :y1="30" :x2="0" :y2="70" :bend="12" />
      </div>
    </div>
    <div class="flex gap-4"><Doodle name="eye" /><Doodle name="map-pin" /><Doodle name="steering-wheel" /><Doodle name="lidar" /><Doodle name="cone" /></div>
  </div>
</div>

---
layout: two-cols
---

# Code & tables.

## Two columns: ::right:: starts the second

```python
def two_sum(nums: list[int], target: int):
    seen = {}  # value -> index
    for i, n in enumerate(nums):
        if target - n in seen:
            return seen[target - n], i
        seen[n] = i
```

- Lists become handwritten notes <small>with an optional caption</small>
- No bullet dots

::right::

| Approach | Time | Space |
| --- | --- | --- |
| Brute force | O(n²) | O(1) |
| Hash map | O(n) | O(n) |

---
layout: section
doodle: wrench
---

# A section break.

The only layout that is allowed to be sparse: a big title, one line, one doodle.

---
layout: highlights
photos:
  - { src: /photos/2025_agm.png, alt: A full lecture hall at the 2025 AGM }
  - { src: /photos/group_photo_2.png, alt: Club members in a group photo, pos: center 42% }
  - { src: /photos/mnist_workshop_1-hd.jpg, alt: Students at a tutorial, pos: center 40% }
  - { src: /photos/team_member_photo.png, alt: Members at sign-up night, pos: center 28% }
notes:
  - First photo is the big one
  - { text: Each note matches a badge, caption: Optional caption }
  - Three to five photos
  - Order matters
next: "next up: a flow slide →"
---

# A highlights slide.

## Photo collage, numbered notes, a teaser strip

---
layout: flow
image: /photos/golf-cart.png
imageAlt: The club's golf cart
imageNote: optional image
steps:
  - { label: Step one, term: technical term, note: A handwritten note under each box. }
  - { label: Step two, term: technical term, note: Keep it to a line or two. }
  - { label: Step three, term: technical term, note: "mark: true circles a box on click.", mark: true }
  - { label: Later, term: not yet, note: "fill: none + dashed for future steps.", fill: none, dashed: true }
loop: an optional loop arrow
brackets:
  - { from: 1, to: 2, label: who owns these steps }
---

# A flow slide.

## 3–6 steps joined by arrows

---
layout: cards
cards:
  - { icon: eye, name: Card one, text: A handwritten description of this card., tools: A small purple line for tools }
  - { icon: map-pin, name: Card two, text: Cards are good for teams, options and comparisons., tools: ROS 2 · OpenCV }
  - { icon: steering-wheel, name: Card three, text: "Add people: with src, name and role to show headshots.", people: [{ src: /photos/leads/aly-hd.jpg, name: Full Name, role: Their role, pos: 62% 30% }] }
  - { icon: wrench, name: Card four, text: "cols: sets the number of columns (default 2)." }
---

# A cards slide.

## A grid of marker boxes, with an optional side column

::side::

<div class="flex flex-col gap-3">
  <Note :n="1">Anything after ::side::</Note>
  <Note :n="2">goes in this column</Note>
</div>
<div class="flex items-center gap-3 mt-4 ml-2">
  <SketchFrame src="/qr/discord.png" alt="Discord invite QR code" fit="contain" style="width: 120px; height: 120px" />
  <span class="hand purple">← scan me!</span>
</div>

---
layout: team
icon: eye
steps:
  - { label: Step one, text: What the team does first }
  - { label: Step two, text: Then this }
  - { label: Step three, text: And finally this }
facts:
  - { icon: camera, label: A key fact, caption: Small print about it }
  - { icon: lidar, label: Another fact, caption: Small print about it }
tools: [ROS 2, OpenCV, Tool three]
skills:
  - A skill you'll learn
  - { text: Another skill, caption: With a caption }
industry: { text: Where this work shows up in industry., caption: Optional small print }
handoff: "output → who it goes to"
---

# A team slide.

## One team up close: what it builds, tools, skills, industry
