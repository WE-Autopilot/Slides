<!--
  Top-down whiteboard sketch of the golf cart driving itself: LiDAR rings,
  the camera's view, a detected pedestrian and golf ball, and the planned
  path changing lanes. Shapes wobble; text is kept out of the filter.
  Colours and type come from CSS classes so UnoCSS attributify can't touch them.
-->
<template>
  <svg class="cart-diagram" viewBox="0 0 400 460" role="img" aria-label="Top-down sketch of the golf cart: LiDAR rings around it, the camera's view ahead, a detected pedestrian and golf ball, and the planned path changing lanes.">
    <defs>
      <marker id="cart-path-head" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto">
        <path class="head" d="M 3 2 L 12 8 L 3 14" />
      </marker>
    </defs>

    <!-- shapes: these wobble -->
    <g filter="url(#rough)">
      <line class="edge" x1="70" y1="46" x2="70" y2="426" />
      <line class="edge" x1="330" y1="46" x2="330" y2="426" />
      <line class="centre" x1="200" y1="52" x2="200" y2="426" />

      <circle class="lidar-ring" cx="265" cy="352" r="55" />
      <circle class="lidar-ring" cx="265" cy="352" r="100" />
      <circle class="lidar-ring" cx="265" cy="352" r="132" />

      <path class="fov" d="M265 300 L178 76 L352 76 Z" />

      <path class="path" d="M265 292 C265 236 138 252 138 186 C138 130 140 92 140 36" marker-end="url(#cart-path-head)" />
      <circle class="waypoint" cx="138" cy="186" r="5" />
      <circle class="waypoint" cx="140" cy="104" r="5" />

      <!-- pedestrian (stick figure, like the title slide) -->
      <circle class="ink-line" cx="268" cy="150" r="6" />
      <path class="ink-line" d="M268 156 L268 176 M268 162 L259 170 M268 162 L277 170 M268 176 L261 188 M268 176 L275 188" />
      <rect class="detect" x="248" y="138" width="40" height="56" />

      <!-- golf ball -->
      <circle class="ball" cx="38" cy="134" r="5.5" />
      <rect class="detect" x="26" y="122" width="24" height="24" />

      <!-- the cart, nose up -->
      <rect class="wheel" x="226" y="312" width="11" height="24" rx="3" />
      <rect class="wheel" x="293" y="312" width="11" height="24" rx="3" />
      <rect class="wheel" x="226" y="374" width="11" height="24" rx="3" />
      <rect class="wheel" x="293" y="374" width="11" height="24" rx="3" />
      <rect class="body" x="235" y="298" width="60" height="114" rx="16" />
      <rect class="roof" x="231" y="324" width="68" height="76" rx="8" />
      <rect class="sensor" x="255" y="300" width="20" height="6" rx="2" />
      <circle class="puck" cx="265" cy="352" r="8" />

      <!-- pointer for the handwritten notes -->
      <path class="note-line" d="M66 398 C120 410 196 380 254 360" />
    </g>

    <!-- text: crisp, never filtered -->
    <rect class="tag" x="247" y="116" width="122" height="20" />
    <text class="tag-text" x="253" y="130.5">pedestrian 0.94</text>
    <rect class="tag" x="25" y="100" width="108" height="20" />
    <text class="tag-text" x="31" y="114.5">golf_ball 0.71</text>
    <rect class="tag" x="8" y="8" width="96" height="21" />
    <text class="tag-text" x="15" y="23">autonomous</text>

    <text class="hand" x="4" y="404">LiDAR</text>
    <text class="hand" x="236" y="68">camera</text>
    <text class="hand" x="154" y="34">planned path</text>

    <text class="readout" x="2" y="452">v 12.4 km/h · δ −6.2°</text>
  </svg>
</template>

<style scoped>
.cart-diagram { display: block; width: 100%; height: 100%; overflow: visible; }

.edge { stroke: var(--ink); stroke-width: 2.5; }
.centre { stroke: var(--lilac); stroke-width: 3; stroke-dasharray: 22 16; }
.lidar-ring { fill: none; stroke: var(--lilac); stroke-width: 1.6; stroke-dasharray: 4 6; }
.fov { fill: var(--lavender); stroke: var(--purple); stroke-width: 1.5; stroke-dasharray: 5 5; }
.path { fill: none; stroke: var(--purple); stroke-width: 3.5; stroke-linecap: round; stroke-dasharray: 0.5 9; }
.head { fill: none; stroke: var(--purple); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }
.waypoint { fill: var(--paper); stroke: var(--purple); stroke-width: 2.5; }
.ink-line { fill: var(--paper); stroke: var(--ink); stroke-width: 2; stroke-linecap: round; }
.detect { fill: none; stroke: var(--purple); stroke-width: 1.5; stroke-dasharray: 4 3; }
.ball { fill: var(--paper); stroke: var(--ink); stroke-width: 2; }
.wheel { fill: var(--ink); }
.body { fill: var(--paper); stroke: var(--ink); stroke-width: 2.5; }
.roof { fill: var(--lavender); stroke: var(--ink); stroke-width: 2.5; }
.sensor { fill: var(--purple); }
.puck { fill: var(--paper); stroke: var(--purple); stroke-width: 2.5; }
.note-line { fill: none; stroke: var(--purple); stroke-width: 1.5; stroke-linecap: round; }

.tag { fill: var(--purple); }
.tag-text {
  fill: var(--paper);
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 600;
}
.hand {
  fill: var(--purple);
  font-family: var(--hand);
  font-size: 22px;
}
.readout {
  fill: var(--muted);
  font-family: var(--sans);
  font-size: 13.5px;
}
</style>
