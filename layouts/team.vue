<!--
  team: one technical team up close. Left: what the team builds (numbered
  steps) and the hardware/facts it works with. Right: tools, skills and
  where the same work shows up in industry. A handwritten hand-off note
  sits at the bottom right.

  ---
  layout: team
  icon: eye
  steps:
    - { label: Ingest, text: Camera frames and LiDAR point clouds }
    - …                                      # 3 is the sweet spot
  facts:
    - { icon: camera, label: Front camera, caption: small print }
    - …                                      # 2
  tools: [ROS 2, OpenCV, YOLO]
  skills:
    - Computer vision
    - { text: Sensor fusion, caption: small print }
  industry: { text: Handwritten line, caption: small print }
  handoff: "hands off to → Planning & Control"
  ---
  # Title.
  ## Subtitle
-->
<script setup lang="ts">
import { computed } from 'vue'

type Line = string | { text: string, caption?: string }

const props = defineProps({
  icon: { type: String },
  steps: { type: Array as () => { label: string, text?: string }[], default: () => [] },
  facts: { type: Array as () => { icon?: string, label: string, caption?: string }[], default: () => [] },
  tools: { type: Array as () => string[], default: () => [] },
  skills: { type: Array as () => Line[], default: () => [] },
  industry: { type: Object as () => { text: string, caption?: string }, default: undefined },
  handoff: { type: String },
})

const skillList = computed(() => props.skills.map(s => (typeof s === 'string' ? { text: s } : s)))
</script>

<template>
  <div class="slidev-layout sk sk-team">
    <span class="sk-logo" role="img" aria-label="WE AutoPilot" />
    <div class="sk-team-head">
      <slot />
    </div>
    <Doodle v-if="icon" class="sk-team-icon" :name="icon" :size="56" />

    <div class="sk-team-left">
      <div class="sk-label">What the team builds</div>
      <div class="sk-team-steps">
        <template v-for="(s, i) in steps" :key="s.label">
          <SketchBox class="sk-team-step" :pad="'8px 14px 8px 10px'">
            <Num :n="i + 1" />
            <div>
              <b>{{ s.label }}</b>
              <span v-if="s.text" class="sk-team-step-text">{{ s.text }}</span>
            </div>
          </SketchBox>
          <span v-if="i < steps.length - 1" class="sk-team-down" aria-hidden="true">↓</span>
        </template>
      </div>

      <div v-if="facts.length" class="sk-team-facts">
        <div v-for="f in facts" :key="f.label" class="sk-team-fact">
          <Doodle v-if="f.icon" :name="f.icon" :size="30" />
          <div>
            <div class="sk-team-fact-label">{{ f.label }}</div>
            <span v-if="f.caption" class="sk-cap">{{ f.caption }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="sk-team-right">
      <div class="sk-label">Tools you'll use</div>
      <div class="sk-team-tools">
        <SketchBox v-for="t in tools" :key="t" fill="none" :pad="'3px 9px'" class="sk-team-tool">{{ t }}</SketchBox>
      </div>

      <div class="sk-label mt-4">Skills you'll learn</div>
      <div class="sk-team-skills">
        <Note v-for="s in skillList" :key="s.text" :caption="s.caption">{{ s.text }}</Note>
      </div>

      <template v-if="industry">
        <div class="sk-label mt-4">Where it shows up in industry</div>
        <SketchBox class="sk-team-industry" :pad="'10px 14px'">
          <div class="hand">{{ industry.text }}</div>
          <span v-if="industry.caption" class="sk-cap mt-1">{{ industry.caption }}</span>
        </SketchBox>
      </template>
    </div>

    <div v-if="handoff" class="sk-team-handoff hand purple">{{ handoff }}</div>
  </div>
</template>

<style>
.sk-team-head {
  position: absolute;
  top: 62px;
  left: var(--side);
  right: 140px;
}

.sk-team-icon {
  position: absolute;
  top: 70px;
  right: var(--side);
}

.sk-team-left {
  position: absolute;
  top: 148px;
  left: var(--side);
  width: 448px;
}

.sk-team-steps {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 8px;
}

.sk-team-step {
  display: flex;
  align-items: center;
  gap: 12px;
}

.sk-team-step b {
  display: block;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.2;
}

.sk-team-step-text {
  display: block;
  margin-top: 1px;
  font-size: 12.5px;
  line-height: 1.3;
  color: var(--ink);
}

.sk-team-down {
  align-self: flex-start;
  margin: -1px 0 -1px 21px;
  font-family: var(--hand);
  font-size: 17px;
  font-weight: 700;
  line-height: 16px;
  color: var(--purple);
}

.sk-team-facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

.sk-team-fact {
  display: flex;
  align-items: flex-start;
  gap: 9px;
}

.sk-team-fact-label {
  font-size: 13px;
  font-weight: 700;
  line-height: 1.25;
}

.sk-team-right {
  position: absolute;
  top: 148px;
  left: 528px;
  right: var(--side);
}

.sk-team-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 9px;
  margin-top: 8px;
}

.sk-team-tool {
  font-size: 12.5px;
  font-weight: 600;
  line-height: 1.35;
}

.sk-team-skills {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
}

.sk-team-skills .sk-note-text { font-size: 17px; }

.sk-team-industry { margin-top: 8px; }
.sk-team-industry .hand { font-size: 17px; line-height: 1.28; }

.sk-team-handoff {
  position: absolute;
  left: var(--side);
  bottom: 18px;
  font-size: 18px;
}
</style>
