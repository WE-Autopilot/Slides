<!--
  A handwritten note: an optional Num, a Kalam line, and an optional small
  caption underneath.

  <Note :n="1" caption="Small print">The handwritten line</Note>
  <Note color="purple">An annotation</Note>
-->
<script setup lang="ts">
defineProps({
  n: { type: [Number, String] },
  caption: { type: String },
  color: { type: String, default: 'ink' }, // ink | purple
})
</script>

<template>
  <div class="sk-note" :class="{ 'sk-note--purple': color === 'purple' }">
    <Num v-if="n !== undefined" :n="n" />
    <div>
      <div class="sk-note-text"><slot /></div>
      <span v-if="caption || $slots.caption" class="sk-cap"><slot name="caption">{{ caption }}</slot></span>
    </div>
  </div>
</template>
