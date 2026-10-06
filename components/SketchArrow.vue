<!--
  A hand-drawn curved arrow from (x1, y1) to (x2, y2), in px relative to the
  nearest positioned parent. `bend` pushes the middle sideways (px; negative
  bends the other way). Use Slidev's <Arrow> for plain straight arrows.

  <SketchArrow :x1="120" :y1="40" :x2="260" :y2="90" :bend="-30" color="ink" />
-->
<script setup lang="ts">
import { computed, useId } from 'vue'

const props = defineProps({
  x1: { type: Number, required: true },
  y1: { type: Number, required: true },
  x2: { type: Number, required: true },
  y2: { type: Number, required: true },
  bend: { type: Number, default: 24 },
  color: { type: String, default: 'purple' }, // purple | ink
  width: { type: Number, default: 2 },
  head: { type: Number, default: 10 },
})

const id = `sk-arrowhead-${useId()}`

const geo = computed(() => {
  const { x1, y1, x2, y2, bend } = props
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  const cx = mx - (dy / len) * bend
  const cy = my + (dx / len) * bend
  const pad = 14
  return {
    d: `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`,
    // keeps the filter region from collapsing on near-straight arrows
    box: {
      x: Math.min(x1, x2, cx) - pad,
      y: Math.min(y1, y2, cy) - pad,
      w: Math.abs(Math.max(x1, x2, cx) - Math.min(x1, x2, cx)) + pad * 2,
      h: Math.abs(Math.max(y1, y2, cy) - Math.min(y1, y2, cy)) + pad * 2,
    },
  }
})
</script>

<template>
  <svg
    class="sk-arrow"
    :style="{ color: `var(--${color})` }"
    width="1"
    height="1"
    aria-hidden="true"
  >
    <defs>
      <marker
        :id="id"
        markerUnits="userSpaceOnUse"
        :markerWidth="head + 4"
        :markerHeight="head + 4"
        :refX="head"
        :refY="head / 2 + 2"
        orient="auto"
      >
        <path
          :d="`M 2 2 L ${head} ${head / 2 + 2} L 2 ${head + 2}`"
          fill="none"
          stroke="currentColor"
          :stroke-width="width"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </marker>
    </defs>
    <g filter="url(#rough-sm)">
      <rect :x="geo.box.x" :y="geo.box.y" :width="geo.box.w" :height="geo.box.h" fill="none" />
      <path
        :d="geo.d"
        fill="none"
        stroke="currentColor"
        :stroke-width="width"
        stroke-linecap="round"
        :marker-end="`url(#${id})`"
      />
    </g>
  </svg>
</template>

<style scoped>
.sk-arrow {
  position: absolute;
  left: 0;
  top: 0;
  overflow: visible;
  pointer-events: none;
}
</style>
