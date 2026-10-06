<!--
  A marker-filled box with a wobbly pen border (drawn on ::before, so the
  content stays crisp). Use for steps, team cards and callouts.

  <SketchBox fill="none" :pad="16" dashed>…</SketchBox>
-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  fill: { type: String, default: 'lavender' }, // lavender | none
  pad: { type: [Number, String], default: 14 },
  dashed: { type: Boolean, default: false },
})

const padding = computed(() => (typeof props.pad === 'number' ? `${props.pad}px` : props.pad))
</script>

<template>
  <div
    class="sk-box"
    :class="{ 'sk-box--none': fill === 'none', 'sk-box--dashed': dashed }"
    :style="{ padding }"
  >
    <slot />
  </div>
</template>
