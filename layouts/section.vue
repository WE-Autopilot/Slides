<!--
  section: section breaks only. A big title, one handwritten line, one doodle.
  The only layout allowed to be sparse.

  ---
  layout: section
  doodle: wrench
  ---
  # Title.
  One handwritten line.
-->
<script setup lang="ts">
defineProps({
  doodle: { type: String, default: 'cone' },
})
</script>

<template>
  <div class="slidev-layout sk sk-section">
    <span class="sk-logo" role="img" aria-label="WE AutoPilot" />
    <div>
      <slot />
    </div>
    <Doodle :name="doodle" :size="132" />
  </div>
</template>
