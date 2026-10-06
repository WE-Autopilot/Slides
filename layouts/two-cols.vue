<!--
  two-cols: the default page split in two. Content before ::right:: goes
  left (put the # title there), content after it goes right.
-->
<template>
  <div class="slidev-layout sk sk-two">
    <span class="sk-logo" role="img" aria-label="WE AutoPilot" />
    <div class="sk-two-grid">
      <div><slot /></div>
      <div><slot name="right" /></div>
    </div>
  </div>
</template>
