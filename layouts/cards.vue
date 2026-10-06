<!--
  cards: a grid of marker boxes (2×2 by default), each with a doodle icon,
  a name, a handwritten description, people and a small purple line.
  Content after ::side:: fills a column on the right (Num steps, a framed
  QR or image with "← scan me!", …).

  ---
  layout: cards
  cols: 2            # optional
  face: 44           # optional, headshot size in px
  sideWidth: 230     # optional
  cards:
    - icon: eye
      name: Perception
      text: The handwritten description.
      tools: Small purple line
      people:
        - { src: /photos/leads/x.jpg, name: Full Name, role: Their role, pos: center 30% }
  ---
  # Title.
  ## Subtitle

  ::side::
  …
-->
<script setup lang="ts">
interface Person { src: string, name: string, role?: string, pos?: string }
interface Card { icon?: string, name: string, text?: string, tools?: string, people?: Person[] }

defineProps({
  cards: { type: Array as () => Card[], default: () => [] },
  cols: { type: Number, default: 2 },
  face: { type: Number, default: 44 },
  textSize: { type: Number, default: 16.5 },
  sideWidth: { type: Number, default: 230 },
})
</script>

<template>
  <div class="slidev-layout sk sk-cards">
    <span class="sk-logo" role="img" aria-label="WE AutoPilot" />
    <div class="sk-cards-head">
      <slot />
    </div>

    <div class="sk-cards-body">
      <div class="sk-cards-grid" :style="{ gridTemplateColumns: `repeat(${cols}, 1fr)` }">
        <SketchBox v-for="c in cards" :key="c.name" class="sk-card" :pad="'12px 16px 12px'">
          <div class="sk-card-head">
            <Doodle v-if="c.icon" :name="c.icon" :size="32" />
            <h3>{{ c.name }}</h3>
          </div>
          <div v-if="c.text" class="sk-card-text" :style="{ fontSize: `${textSize}px` }">{{ c.text }}</div>
          <div v-if="c.people?.length || c.tools" class="sk-card-foot">
            <div v-if="c.people?.length" class="sk-card-people" :style="{ '--face': `${face}px` }">
              <div v-for="p in c.people" :key="p.src" class="sk-person">
                <SketchFrame :src="p.src" :alt="p.name" :pos="p.pos ?? 'center 30%'" />
                <div>
                  <div class="sk-person-name">{{ p.name }}</div>
                  <div v-if="p.role" class="sk-person-role">{{ p.role }}</div>
                </div>
              </div>
            </div>
            <div v-if="c.tools" class="sk-card-tools">{{ c.tools }}</div>
          </div>
        </SketchBox>
      </div>

      <div v-if="$slots.side" class="sk-cards-side" :style="{ '--side-w': `${sideWidth}px` }">
        <slot name="side" />
      </div>
    </div>
  </div>
</template>

<style>
.sk-person {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: calc(var(--face, 44px) + 70px);
}

.sk-person-name {
  font-size: 12.5px;
  font-weight: 700;
  line-height: 1.25;
}

.sk-person-role {
  font-size: 11px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--purple);
}
</style>
