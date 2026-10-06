<!--
  Simple pen-drawn line icons: ink outline, a touch of purple, a white or
  lavender fill, and the small wobble.

  <Doodle name="eye" :size="36" />

  eye · map-pin · steering-wheel · wrench · lidar · cone · browser · coins ·
  megaphone · calendar · camera · briefcase · chat · shield · log · path · alert
-->
<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 36 },
})
</script>

<template>
  <svg
    class="sk-doodle"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    role="img"
    :aria-label="name"
  >
    <g
      filter="url(#rough-sm)"
      fill="none"
      stroke="var(--ink)"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <template v-if="name === 'eye'">
        <path d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12z" fill="var(--lavender)" />
        <circle cx="12" cy="12" r="4" fill="var(--paper)" />
        <circle cx="12" cy="12" r="1.7" fill="var(--purple)" stroke="none" />
      </template>

      <template v-else-if="name === 'map-pin'">
        <path d="M5 21.5c2 .9 12 .9 14 0" stroke="var(--purple)" />
        <path d="M19.5 9.5c0 6.5-7.5 11.5-7.5 11.5S4.5 16 4.5 9.5a7.5 7.5 0 0 1 15 0z" fill="var(--lavender)" />
        <circle cx="12" cy="9.5" r="2.8" fill="var(--paper)" />
      </template>

      <template v-else-if="name === 'steering-wheel'">
        <circle cx="12" cy="12" r="9.5" fill="var(--paper)" />
        <circle cx="12" cy="12" r="3" fill="var(--lavender)" />
        <path d="M12 15v6.5M9.2 11.2 2.8 9.8M14.8 11.2l6.4-1.4" />
        <path d="M6.2 5.2a9 9 0 0 1 11.6 0" stroke="var(--purple)" stroke-width="2" />
      </template>

      <template v-else-if="name === 'wrench'">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z" fill="var(--lavender)" />
        <circle cx="5.6" cy="18.4" r=".6" fill="var(--purple)" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'lidar'">
        <path d="M7 11v6.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" fill="var(--lavender)" />
        <ellipse cx="12" cy="11" rx="5" ry="2.3" fill="var(--paper)" />
        <path d="M7 14.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5" stroke="var(--purple)" />
        <path d="M3.6 8.5a8.5 8.5 0 0 0 0 9M20.4 8.5a8.5 8.5 0 0 1 0 9M1.2 6.5a11.5 11.5 0 0 0 0 13M22.8 6.5a11.5 11.5 0 0 1 0 13" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'cone'">
        <path d="M10.4 2.5h3.2L19 19.5H5z" fill="var(--paper)" />
        <path d="M8.9 8h6.2M7.3 13.4h9.4" stroke="var(--purple)" stroke-width="2.6" />
        <path d="M2.5 19.5h19v2h-19z" fill="var(--lavender)" />
      </template>

      <template v-else-if="name === 'browser'">
        <rect x="2" y="3.5" width="20" height="16" rx="1.5" fill="var(--paper)" />
        <path d="M2 7.5h20" />
        <path d="M2.2 3.7h19.6v3.6H2.2z" fill="var(--lavender)" stroke="none" />
        <path d="M9.5 11 7 13.5 9.5 16M14.5 11l2.5 2.5-2.5 2.5" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'coins'">
        <ellipse cx="9" cy="17" rx="6.5" ry="2.8" fill="var(--lavender)" />
        <path d="M2.5 17v2c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-2" fill="var(--lavender)" />
        <circle cx="15" cy="9" r="6.5" fill="var(--paper)" />
        <path d="M16.8 6.7c-.4-.7-1.1-1-1.9-1-1.1 0-1.9.6-1.9 1.5 0 2 4 1.1 4 3.2 0 .9-.9 1.6-2.1 1.6-.9 0-1.7-.4-2.1-1.1M15 4.6v.9M15 12v.9" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'megaphone'">
        <path d="M3 9.5v5h3.5l8 5v-15l-8 5z" fill="var(--lavender)" />
        <path d="M6.5 14.5 8 20h2.5L9.5 15" fill="var(--paper)" />
        <path d="M17.5 9a4.5 4.5 0 0 1 0 6M20.2 6.5a8.5 8.5 0 0 1 0 11" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'calendar'">
        <rect x="3" y="4.5" width="18" height="17" rx="1.5" fill="var(--paper)" />
        <path d="M3.2 4.7h17.6v4.8H3.2z" fill="var(--lavender)" stroke="none" />
        <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
        <path d="m10 15 1.7 1.7L15.5 13" stroke="var(--purple)" stroke-width="2" />
      </template>

      <template v-else-if="name === 'camera'">
        <path d="M22.5 18.5a2 2 0 0 1-2 2h-17a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h4l2-3h5l2 3h4a2 2 0 0 1 2 2z" fill="var(--lavender)" />
        <circle cx="12" cy="13" r="4.2" fill="var(--paper)" />
        <circle cx="18.6" cy="9.4" r=".5" fill="var(--purple)" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'briefcase'">
        <rect x="2" y="7" width="20" height="14" rx="1.8" fill="var(--lavender)" />
        <path d="M8.5 7V5a1.8 1.8 0 0 1 1.8-1.8h3.4A1.8 1.8 0 0 1 15.5 5v2" />
        <path d="M2.2 12.5c6.4 2.3 13.2 2.3 19.6 0" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'chat'">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" fill="var(--lavender)" />
        <circle cx="8.5" cy="11.5" r=".6" fill="var(--purple)" stroke="var(--purple)" />
        <circle cx="12.5" cy="11.5" r=".6" fill="var(--purple)" stroke="var(--purple)" />
        <circle cx="16.5" cy="11.5" r=".6" fill="var(--purple)" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'shield'">
        <path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z" fill="var(--lavender)" />
        <path d="m8.5 12 2.4 2.4 4.6-4.8" stroke="var(--purple)" stroke-width="2" />
      </template>

      <template v-else-if="name === 'log'">
        <path d="M14 2.5H6a1.5 1.5 0 0 0-1.5 1.5v16A1.5 1.5 0 0 0 6 21.5h12a1.5 1.5 0 0 0 1.5-1.5V8z" fill="var(--paper)" />
        <path d="M14 2.5V8h5.5z" fill="var(--lavender)" />
        <path d="M8 12h8M8 15.5h8M8 19h5" stroke="var(--purple)" />
      </template>

      <template v-else-if="name === 'path'">
        <circle cx="5" cy="19" r="2.5" fill="var(--lavender)" />
        <path d="M7 17.5c3-1.5 2-6 5.5-7s5.5-2 6.5-5" stroke="var(--purple)" stroke-dasharray="2 2.5" />
        <path d="m16.5 3.5 3 1.5-1 3.2" />
        <path d="M13.5 18.5h7M17 15v7" stroke="var(--lilac)" />
      </template>

      <template v-else-if="name === 'alert'">
        <path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" fill="var(--lavender)" />
        <path d="M12 9v4.5" stroke="var(--purple)" stroke-width="2.2" />
        <circle cx="12" cy="17" r=".7" fill="var(--purple)" stroke="var(--purple)" />
      </template>
    </g>
  </svg>
</template>
