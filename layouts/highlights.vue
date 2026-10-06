<!--
  highlights: a photo collage on the left two-thirds (one big photo plus
  smaller ones, each framed with a numbered badge), a column of matching
  numbered notes on the right, and a marker strip along the bottom teasing
  what comes next.

  ---
  layout: highlights
  photos:
    - { src: /photos/a.jpg, alt: …, pos: center 30% }   # first one is the big one
    - { src: /photos/b.jpg, alt: … }
  notes:
    - Text for photo 1
    - { text: Text for photo 2, caption: small print }
  next: "next up: … →"
  # optional: grid: { columns: …, rows: …, areas: "'p1 p2' 'p1 p3'" }
  ---
  # Title.
  ## Subtitle
-->
<script setup lang="ts">
import { computed } from 'vue'

interface Photo { src: string, alt?: string, pos?: string, corner?: string }
type NoteItem = string | { text: string, caption?: string }

const props = defineProps({
  photos: { type: Array as () => Photo[], default: () => [] },
  notes: { type: Array as () => NoteItem[], default: () => [] },
  next: { type: String, default: '' },
  cart: { type: String, default: '/photos/golf-cart.png' },
  grid: { type: Object as () => { columns?: string, rows?: string, areas?: string }, default: undefined },
})

const DEFAULT_GRIDS: Record<number, { columns: string, rows: string, areas: string }> = {
  3: { columns: '1.4fr 1fr', rows: '1fr 1fr', areas: '\'p1 p2\' \'p1 p3\'' },
  4: { columns: '1.45fr 1fr', rows: '1fr 1fr 1fr', areas: '\'p1 p2\' \'p1 p3\' \'p1 p4\'' },
  5: { columns: '1fr 1fr 1fr', rows: '1.15fr 1fr', areas: '\'p1 p1 p2\' \'p3 p4 p5\'' },
}

const gridStyle = computed(() => {
  const g = { ...(DEFAULT_GRIDS[props.photos.length] ?? DEFAULT_GRIDS[4]), ...(props.grid ?? {}) }
  return { gridTemplateColumns: g.columns, gridTemplateRows: g.rows, gridTemplateAreas: g.areas }
})

const noteList = computed(() =>
  props.notes.map(n => (typeof n === 'string' ? { text: n, caption: undefined } : n)),
)
</script>

<template>
  <div class="slidev-layout sk sk-highlights">
    <span class="sk-logo" role="img" aria-label="WE AutoPilot" />
    <div class="sk-hl-head">
      <slot />
    </div>

    <div class="sk-hl-collage" :style="gridStyle">
      <SketchFrame
        v-for="(p, i) in photos"
        :key="p.src"
        :src="p.src"
        :alt="p.alt"
        :pos="p.pos"
        :n="i + 1"
        :corner="p.corner ?? 'tl'"
        :style="{ gridArea: `p${i + 1}` }"
      />
    </div>

    <div class="sk-hl-notes">
      <Note v-for="(n, i) in noteList" :key="i" :n="i + 1" :caption="n.caption">{{ n.text }}</Note>
    </div>

    <SketchBox v-if="next" class="sk-hl-strip" :pad="'0 18px 0 20px'">
      <SketchFrame :src="cart" alt="The club's golf cart" fit="contain" />
      <span class="hand">{{ next }}</span>
    </SketchBox>
  </div>
</template>
