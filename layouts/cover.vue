<!--
  cover: the title slide. Logo top-left, a heavy black title, a purple
  subtitle, a handwritten tagline, and the sketch on the right.

  ---
  layout: cover
  image: /photos/golf_cart_sketch-hd.jpg
  imageAlt: What the sketch shows
  ---
  # WE<br>AutoPilot
  ## Annual General Meeting
  <p class="hand">The handwritten tagline</p>
-->
<script setup lang="ts">
import { computed } from 'vue'
import { resolveAssetUrl } from '@slidev/client'

const props = defineProps({
  image: { type: String },
  imageAlt: { type: String, default: '' },
})

const src = computed(() => (props.image ? resolveAssetUrl(props.image) : undefined))
</script>

<template>
  <div class="slidev-layout sk sk-cover">
    <span class="sk-logo" role="img" aria-label="WE AutoPilot" />
    <div class="sk-cover-text">
      <slot />
    </div>
    <img v-if="src" class="sk-cover-art" :src="src" :alt="imageAlt">
  </div>
</template>
