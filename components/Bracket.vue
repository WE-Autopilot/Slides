<!--
  A hand-drawn square bracket under a span of items, with a handwritten
  purple label. For "who owns what". Size and place it from outside.

  <Bracket label="Perception team" style="width: 200px" />
-->
<script setup lang="ts">
defineProps({
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="sk-bracket">
    <span class="sk-bracket-line" />
    <span class="sk-bracket-label"><slot>{{ label }}</slot></span>
  </div>
</template>
