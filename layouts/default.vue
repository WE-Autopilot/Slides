<!--
  default: logo top-left, title under it (# …), optional subtitle (## …),
  then a free content area. Markdown lists render as handwritten notes;
  put a <small> inside a list item for a caption under it.
-->
<template>
  <div class="slidev-layout sk sk-default">
    <span class="sk-logo" role="img" aria-label="WE AutoPilot" />
    <div class="sk-content">
      <slot />
    </div>
  </div>
</template>
