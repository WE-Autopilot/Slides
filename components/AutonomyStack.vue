<template>
  <div class="autonomy-stack">
    <div class="stack-units">
      <SketchBox fill="none" :pad="'16px 18px'" class="stack-adcu">
        <h3>ADCU <span>Autonomous Driving Control Unit</span></h3>
        <div class="stack-flow">
          <SketchBox><b>Perception</b><small>Understand the surroundings</small></SketchBox>
          <span class="hand purple">→</span>
          <SketchBox><b>Mapping &amp;<br>Localization</b><small>Map and vehicle position</small></SketchBox>
          <span class="hand purple">→</span>
          <SketchBox><b>Planning</b><small>Route and trajectory</small></SketchBox>
        </div>
        <div class="stack-support"><b>Prediction</b><span>Anticipate nearby movement</span><b>Data &amp; diagnostics</b><span>Record runs and faults</span></div>
      </SketchBox>
      <span class="hand purple stack-link">→</span>
      <SketchBox fill="none" :pad="'16px 18px'" class="stack-vcu">
        <h3>VCU <span>Vehicle Control Unit · QNX</span></h3>
        <SketchBox class="stack-control"><b>Control</b><small>Steering, throttle &amp; braking</small></SketchBox>
        <div class="stack-support"><b>SMS · Safety monitoring</b><span>Health checks and operating state</span><b>DDI · Driver interface</b><span>Status, alerts and override</span><b>Watchdog</b><span>Controlled stop on a lost command</span></div>
      </SketchBox>
      <span class="hand purple stack-link">→</span>
      <div class="stack-vehicle"><SketchFrame src="/photos/golf-cart.png" alt="The club's golf cart" fit="contain" style="width: 94px; height: 116px" /><b>Vehicle</b></div>
    </div>
  </div>
</template>

<style scoped>
.autonomy-stack { margin-top: 24px; }
.stack-units { display: flex; align-items: center; gap: 10px; }
.stack-adcu { width: 476px; flex-shrink: 0; }
.stack-vcu { width: 246px; flex-shrink: 0; }
.stack-units h3 { font-size: 22px; margin: 0 0 16px; }
.stack-units h3 span { display: block; font-size: 12px; font-weight: 500; margin-top: 4px; }
.stack-flow { display: flex; gap: 6px; align-items: center; }
.stack-flow .sk-box { flex: 1; padding: 10px 8px !important; min-height: 97px; }
.stack-flow b, .stack-control b { font-size: 14px; line-height: 1.3; }
.stack-flow small, .stack-control small { font-size: 12px; line-height: 1.3; margin-top: 6px; }
.stack-support { display: grid; gap: 3px; margin-top: 16px; }
.stack-support b { font-size: 13px; margin-top: 5px; }
.stack-support span { font-size: 12px; color: var(--muted); }
.stack-control { padding: 10px 12px !important; }
.stack-link { font-size: 24px; }
.stack-vehicle { display: flex; flex-direction: column; align-items: center; gap: 12px; font-size: 14px; }
</style>
