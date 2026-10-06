<!--
  flow: a row of 3–6 marker boxes joined by short pen arrows. Each box has a
  plain-language label and the technical term under it; a handwritten note
  sits under each box. Optional: an image on the far left, a purple loop
  arrow back to the first step, and brackets showing who owns which steps.

  ---
  layout: flow
  image: /photos/golf-cart.png      # optional
  imageNote: the vehicle            # optional, handwritten under the image
  steps:
    - { label: Sense, term: Sensors, note: raw data }
    - { label: Perceive, term: Perception, note: …, mark: true }   # mark: circle it on click
    - { label: Later, term: …, fill: none, dashed: true }
  loop: and round again            # optional
  brackets:                         # optional, step numbers start at 1
    - { from: 2, to: 2, label: Perception team }
  ---
  # Title.
  ## Subtitle

  ::extra::
  (anything absolutely positioned on top, e.g. a <SketchArrow> and a note)
-->
<script setup lang="ts">
import { computed } from 'vue'

interface Step { label: string, term?: string, note?: string, fill?: string, dashed?: boolean, mark?: boolean }

const props = defineProps({
  steps: { type: Array as () => Step[], default: () => [] },
  image: { type: String },
  imageAlt: { type: String, default: '' },
  imageNote: { type: String },
  imageW: { type: Number, default: 120 },
  imageH: { type: Number, default: 136 },
  loop: { type: String },
  brackets: { type: Array as () => { from: number, to: number, label: string }[], default: () => [] },
  rowTop: { type: Number, default: 168 },
  boxH: { type: Number, default: 76 },
  noteH: { type: Number, default: 96 },
})

const SIDE = 44
const RIGHT = 980 - SIDE
const GAP = 40

const geo = computed(() => {
  const n = Math.max(props.steps.length, 1)
  const imgX = SIDE + 6
  const x0 = props.image ? imgX + props.imageW + 6 + 48 : SIDE
  const w = (RIGHT - x0 - (n - 1) * GAP) / n
  const xs = props.steps.map((_, i) => x0 + i * (w + GAP))
  const cy = props.rowTop + props.boxH / 2
  const loopTop = props.rowTop + props.boxH + props.noteH + 8
  const bracketTop = props.loop ? loopTop + 62 : loopTop + 4
  return { n, imgX, x0, w, xs, cy, loopTop, bracketTop }
})

// SketchFrame resolves the base path itself, so pass the raw path through
const imgSrc = computed(() => props.image)
const MARK = { at: 1, type: 'circle', color: '#7C5CDB', padding: 6 }
</script>

<template>
  <div class="slidev-layout sk sk-flow">
    <span class="sk-logo" role="img" aria-label="WE AutoPilot" />
    <div class="sk-flow-head">
      <slot />
    </div>

    <!-- optional image on the far left -->
    <template v-if="imgSrc">
      <SketchFrame
        class="sk-flow-img"
        :src="imgSrc"
        :alt="imageAlt"
        fit="contain"
        :style="{ left: `${geo.imgX}px`, top: `${geo.cy - imageH / 2}px`, width: `${imageW}px`, height: `${imageH}px` }"
      />
      <div
        v-if="imageNote"
        class="sk-flow-note"
        :style="{ left: `${geo.imgX - 6}px`, top: `${geo.cy + imageH / 2 + 12}px`, width: `${imageW + 12}px` }"
      >
        {{ imageNote }}
      </div>
      <SketchArrow :x1="geo.imgX + imageW + 12" :y1="geo.cy" :x2="geo.x0 - 6" :y2="geo.cy" :bend="-5" color="ink" />
    </template>

    <!-- steps -->
    <template v-for="(s, i) in steps" :key="i">
      <SketchBox
        class="sk-flow-step"
        :fill="s.fill ?? 'lavender'"
        :dashed="s.dashed"
        :pad="'8px 10px'"
        :style="{ left: `${geo.xs[i]}px`, top: `${rowTop}px`, width: `${geo.w}px`, height: `${boxH}px` }"
      >
        <b v-if="s.mark" v-mark="MARK">{{ s.label }}</b>
        <b v-else>{{ s.label }}</b>
        <span v-if="s.term" class="sk-flow-term">{{ s.term }}</span>
      </SketchBox>
      <div
        v-if="s.note"
        class="sk-flow-note"
        :style="{ left: `${geo.xs[i] - 4}px`, top: `${rowTop + boxH + 12}px`, width: `${geo.w + 8}px` }"
      >
        {{ s.note }}
      </div>
      <SketchArrow
        v-if="i < steps.length - 1"
        :x1="geo.xs[i] + geo.w + 6"
        :y1="geo.cy"
        :x2="geo.xs[i + 1] - 6"
        :y2="geo.cy"
        :bend="-4"
        color="ink"
      />
    </template>

    <!-- loop back to the first step -->
    <template v-if="loop && steps.length > 1">
      <SketchArrow
        :x1="geo.xs[geo.n - 1] + geo.w / 2"
        :y1="geo.loopTop"
        :x2="geo.xs[0] + geo.w / 2"
        :y2="geo.loopTop"
        :bend="-44"
        color="purple"
      />
      <div
        class="sk-flow-loop"
        :style="{ left: `${geo.xs[0] + geo.w / 2}px`, width: `${geo.xs[geo.n - 1] - geo.xs[0]}px`, top: `${geo.loopTop + 28}px` }"
      >
        {{ loop }}
      </div>
    </template>

    <!-- who owns which steps -->
    <div class="sk-flow-brackets">
      <Bracket
        v-for="(b, i) in brackets"
        :key="i"
        :label="b.label"
        :style="{
          left: `${geo.xs[b.from - 1]}px`,
          top: `${geo.bracketTop}px`,
          width: `${geo.xs[b.to - 1] + geo.w - geo.xs[b.from - 1]}px`,
        }"
      />
    </div>

    <slot name="extra" />
  </div>
</template>
