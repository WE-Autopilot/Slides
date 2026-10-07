<script setup lang="ts">
const systems = [
  { name: 'Steering', note: 'Turn the wheels', icon: 'steering-wheel', x: 8, y: 12 },
  { name: 'Brake', note: 'Slow down & stop', icon: 'shield', x: 8, y: 128 },
  { name: 'Throttle', note: 'Control acceleration', icon: 'path', x: 8, y: 244 },
  { name: 'Power', note: 'Supply onboard systems', icon: 'power', x: 660, y: 60 },
  { name: 'Mounts', note: 'Secure sensors & hardware', icon: 'mount', x: 660, y: 214 },
]
</script>

<template>
  <div class="cart-upgrade" role="group" aria-label="Golf cart upgrade showing steering, brake, throttle, power and mounts.">
    <SketchFrame src="/photos/golf-cart.png" alt="WE AutoPilot's golf cart with its roof-mounted sensor" fit="contain" class="upgrade-cart" />
    <div v-for="s in systems" :key="s.name" class="upgrade-system" :style="{ left: `${s.x}px`, top: `${s.y}px` }">
      <div class="upgrade-icon">
        <Doodle v-if="s.icon !== 'power' && s.icon !== 'mount'" :name="s.icon" :size="40" />
        <svg v-else viewBox="0 0 32 32" width="40" height="40" aria-hidden="true" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <template v-if="s.icon === 'power'">
            <rect x="3" y="8" width="24" height="17" rx="3" fill="var(--paper)" /><path d="M28 13h2v7h-2M9 5h5M19 5h5" />
            <path d="m18 10-6 8h5l-2 6 7-10h-6z" fill="var(--purple)" stroke="var(--purple)" />
          </template>
          <template v-else>
            <path d="M6 4v22h22v-7H13V4z" fill="var(--paper)" /><circle cx="9.5" cy="10" r="1.5" fill="var(--purple)" /><circle cx="21" cy="22.5" r="1.5" fill="var(--purple)" />
          </template>
        </svg>
      </div>
      <div><strong>{{ s.name }}</strong><span>{{ s.note }}</span></div>
    </div>
  </div>
</template>

<style scoped>
.cart-upgrade { position: relative; width: 900px; height: 380px; margin-top: 24px; }
.upgrade-cart { position: absolute; left: 325px; top: 8px; width: 270px; height: 306px; }
.upgrade-system { position: absolute; display: flex; align-items: center; gap: 12px; width: 232px; min-height: 86px; }
.upgrade-icon { display: grid; place-items: center; width: 54px; height: 54px; flex: 0 0 54px; background: var(--lavender); border-radius: 50%; }
.upgrade-system strong { display: block; font-size: 23px; line-height: 1.2; }
.upgrade-system span { display: block; margin-top: 5px; font-size: 15px; line-height: 1.35; }
</style>
