<!--
  The wobble. Anything drawn with filter: url(#rough) or url(#rough-sm)
  looks pen-drawn. Used on outlines, fills and arrows only, never on text.
-->
<template>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="7" result="n" />
      <feDisplacementMap in="SourceGraphic" in2="n" scale="4" xChannelSelector="R" yChannelSelector="G" />
    </filter>
    <filter id="rough-sm" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="3" result="n" />
      <feDisplacementMap in="SourceGraphic" in2="n" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>
</template>
