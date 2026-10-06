<!--
  A hand-drawn numbered circle. Only for a real sequence, or to tie a
  photo to its note.

  <Num :n="2" /> <Num :n="3" :size="34" />
-->
<script setup lang="ts">
defineProps({
  n: { type: [Number, String], required: true },
  size: { type: Number, default: 28 },
})
</script>

<template>
  <span class="sk-num" :style="{ '--num-size': `${size}px` }"><span>{{ n }}</span></span>
</template>
