<!--
  A real photo stuck on the page: the photo stays clean and in full colour,
  a wobbly pen frame sits about 6px outside it. Optional numbered badge.

  <SketchFrame src="/photos/x.jpg" alt="…" pos="center 30%" :n="1" corner="tr" />
  Or wrap your own media in the default slot.
  Size it from outside (width/height on the component or its parent).
-->
<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '@slidev/client'

const props = defineProps({
  src: { type: String },
  alt: { type: String, default: '' },
  pos: { type: String, default: 'center' }, // object-position
  fit: { type: String, default: 'cover' },
  n: { type: [Number, String] },
  corner: { type: String, default: 'tl' }, // tl | tr | bl | br
})

const url = computed(() => (props.src ? resolveAssetUrl(props.src) : undefined))

const badge = computed(() => {
  const off = '-17px'
  return {
    position: 'absolute' as const,
    zIndex: 2,
    top: props.corner.startsWith('t') ? off : undefined,
    bottom: props.corner.startsWith('b') ? off : undefined,
    left: props.corner.endsWith('l') ? off : undefined,
    right: props.corner.endsWith('r') ? off : undefined,
  }
})
</script>

<template>
  <figure class="sk-frame">
    <slot>
      <img v-if="url" :src="url" :alt="alt" :style="{ objectPosition: pos, objectFit: fit as any }">
    </slot>
    <Num v-if="n !== undefined" :n="n" :style="badge" />
  </figure>
</template>
