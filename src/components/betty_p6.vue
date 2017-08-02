<template>
<q-layout>
<div class="row wrap text-center" style=" overflow-x: scroll; background:lightgrey; width: 100%;">
<svg width="100%" height="80%" version="1.1" xmlns="http://www.w3.org/2000/svg" style="border:1px solid black">

<!-- <svg class="vueconf-logo" viewBox="0 0 191 169" >
  <g id="VueConf-Logo"><path id="VueConf-Triangle-Green" d="M95.04,0l95.04,168l-190.08,0l95.04,-168Z" style="fill:#41b883;"/><path id="VueConf-Triangle-Blue" d="M95.04,67.95l61.624,100.05l-123.248,0l61.624,-100.05Z" style="fill:#35495e;"/><path id="VueConf-Triangle-White" d="M95.04,122.992l27.51,45.968l-55.02,0l27.51,-45.968Z" style="fill:#eee;"/></g></svg> -->


<svg class="alogo" viewBox="0 0 191 169" ><g id="a1"><path class="cls-1" d="M39.77,9.49,33.3,16V34H15.92V9.48H39.77a8.42,8.42,0,0,0-3.45-3.93Q32.31,3,24.62,3T13,5.55a7.82,7.82,0,0,0-4,6.86V45.73l6.48-6.48h.09a27.1,27.1,0,0,0,9.13,1.31q7.7,0,11.66-2.55a7.82,7.82,0,0,0,4-6.77h0v-.1h0V12.42A7.8,7.8,0,0,0,39.77,9.49Z" transform="translate(-6.71 -3)"/><polygon class="cls-1" points="33.06 6.48 33.05 6.48 33.05 6.49 33.06 6.48"/></g><g id="a2"><path class="cls-2" d="M6.73,40.65a1.56,1.56,0,0,1,.5-1.21A2.1,2.1,0,0,1,8.69,39a2.12,2.12,0,0,1,1.47.46,1.55,1.55,0,0,1,.49,1.21l0,3.52a1.55,1.55,0,0,1-.5,1.21,2.12,2.12,0,0,1-1.47.44,2.1,2.1,0,0,1-1.46-.46,1.55,1.55,0,0,1-.49-1.21Zm2.71.07q0-.66-.75-.66t-.75.66v3.4q0,.66.75.66t.75-.66Z" transform="translate(-6.71 -3)"/>
  <path class="cls-2" d="M12.69,40.37a2.86,2.86,0,0,1,1.19-.28,1.34,1.34,0,0,1,.93.32,1.18,1.18,0,0,1,.35.93v3a1.35,1.35,0,0,1-.42,1.07,1.62,1.62,0,0,1-1.11.36h-.88V47.2H11.51l0-7.09h1.15Zm1.24,1.22q0-.42-.46-.42a1.47,1.47,0,0,0-.71.18v3.34h.58q.6,0,.6-.52Z" transform="translate(-6.71 -3)"/>
  <path class="cls-2" d="M15.93,44.23V41.57a1.46,1.46,0,0,1,.45-1.13A2,2,0,0,1,17.76,40a1.87,1.87,0,0,1,1.34.42,1.49,1.49,0,0,1,.42,1.13v1.86H17.12v.71a.58.58,0,0,0,.21.51,1.47,1.47,0,0,0,.81.16,4.31,4.31,0,0,0,1.22-.18v1a5.18,5.18,0,0,1-1.39.17Q15.93,45.83,15.93,44.23Zm1.19-1.7h1.26v-.94q0-.57-.63-.58t-.63.57Z" transform="translate(-6.71 -3)"/>
  <path class="cls-2" d="M21.48,40.4a2.66,2.66,0,0,1,1.16-.28,1.34,1.34,0,0,1,.93.32,1.18,1.18,0,0,1,.35.93l0,4.43H22.66l0-4.18q0-.42-.44-.42a1.44,1.44,0,0,0-.69.18l0,4.41H20.31l0-5.65h1.15Z" transform="translate(-6.71 -3)"/><path class="cls-2" d="M24.86,39.17h2a1.88,1.88,0,0,1,1.26.39,1.37,1.37,0,0,1,.44,1.1v1.62a1.37,1.37,0,0,1-.45,1.09,1.88,1.88,0,0,1-1.27.38h-.82v2.06H24.84Zm2.54,1.61q0-.58-.63-.58h-.69v2.56h.69q.64,0,.64-.59Z" transform="translate(-6.71 -3)"/>
  <path class="cls-2" d="M29.37,40.32a5.13,5.13,0,0,1,1.52-.18,2,2,0,0,1,1.38.41,1.57,1.57,0,0,1,.43,1.21l0,4.08H31.54v-.41a1.69,1.69,0,0,1-2.15.09,1.43,1.43,0,0,1-.33-1v-.33a1.38,1.38,0,0,1,.3-.93,1.85,1.85,0,0,1,1-.51l1.22-.31v-.65a.55.55,0,0,0-.18-.44,1.45,1.45,0,0,0-.79-.14,3.63,3.63,0,0,0-1.2.2Zm.88,3.88v.28q0,.49.53.5a1.26,1.26,0,0,0,.73-.21V43.36l-.72.19a.82.82,0,0,0-.44.22A.72.72,0,0,0,30.25,44.2Z" transform="translate(-6.71 -3)"/>
  <path class="cls-2" d="M37.55,40.71h-.34a1.54,1.54,0,0,0-.31,0,1.48,1.48,0,0,1,.24.86v.8a1.37,1.37,0,0,1-.45,1.09,2,2,0,0,1-1.35.4q-.37,0-.37.33a.25.25,0,0,0,.11.23.78.78,0,0,0,.38.07H36q1.48,0,1.48,1.19v.2a1.2,1.2,0,0,1-.5,1,2.55,2.55,0,0,1-1.52.36h-.38a3.39,3.39,0,0,1-1.76-.39V45.85a3.08,3.08,0,0,0,1.73.47h.27a2,2,0,0,0,.8-.1.35.35,0,0,0,.22-.33v-.07a.29.29,0,0,0-.1-.25.69.69,0,0,0-.39-.08h-.61q-1.38,0-1.38-.86v-.16a.63.63,0,0,1,.55-.69,1.31,1.31,0,0,1-1-1.39v-.8a1.35,1.35,0,0,1,.47-1.09,1.92,1.92,0,0,1,1.27-.38,2.93,2.93,0,0,1,1.23.21,1,1,0,0,1,1-.67h.15Zm-1.63,1.7v-.8q0-.55-.65-.56t-.65.55v.8q0,.54.65.55T35.92,42.41Z" transform="translate(-6.71 -3)"/><path class="cls-2" d="M38,44.33V41.67a1.46,1.46,0,0,1,.45-1.13,2,2,0,0,1,1.36-.41,1.87,1.87,0,0,1,1.34.42,1.49,1.49,0,0,1,.42,1.13v1.86H39.17v.71a.58.58,0,0,0,.21.51,1.47,1.47,0,0,0,.81.16,4.31,4.31,0,0,0,1.22-.18v1a5.17,5.17,0,0,1-1.39.17Q38,45.93,38,44.33Zm1.19-1.7h1.26v-.94q0-.57-.63-.58t-.63.57Z" transform="translate(-6.71 -3)"/>
</g></svg>


  <rect id="svg_1" height="81" width="81" y="38" x="270" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <rect id="svg_2" height="81" width="81" y="38" x="351" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <rect id="svg_3" height="81" width="81" y="38" x="432" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <text stroke="#000" transform="matrix(2.03125,0,0,2.03125,-65.484375,-58.78125) " xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_5" y="75.061538" x="56.607692" fill-opacity="null" stroke-opacity="null" stroke-width="0" fill="#000000">你去哪裡</text>

  <rect id="svg_4" height="81" width="81" y="139" x="270" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <rect id="svg_5" height="81" width="81" y="139" x="351" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <rect id="svg_6" height="81" width="81" y="139" x="432" stroke-width="1.5" stroke="#000" fill="#fff"/>
  <text stroke="#000" transform="matrix(2.03125,0,0,2.03125,-65.484375,-58.78125) " xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_5" y="125" x="56.607692" fill-opacity="null" stroke-opacity="null" stroke-width="0" fill="#000000">你們食了</text>

</svg>

<div>
  <div class="layout-padding"><div style="
text-align: center;">

<!-- Row Start, Make a better format for easily to see the dependence -->
<div class="label bg-white" v-for="n in 1" style="margin-bottom:0.3em">
<input class="text" maxlength="30" :value="'Demo String'" style="width: 260px;">

</div>

<!-- Row End -->
          </div>
        </div>
      </div>
    </div>
</q-layout>
</template>

<style >
.list .item-avatar {
  width: 60px !important;
  height: 60px !important;
}

div.image_container {
  width: 400px;
  height: 50px;

  input[type="text"] {
    width: 100px;
    height: 30px;
    border: 0.5px solid #CCC;
  }
}
/*
.vueconf-logo {
position: absolute;
height: 50%;
width: 50%;
top: 25%;
left: 25%;
animation: slideInBounce 1s 1,
flip 0.5s 1s 1;
}*/

.alogo {
position: absolute;
height: 50%;
width: 50%;
top: 25%;
left: 25%;
animation: slideInBounce 1s 1,
flip 0.5s 1s 1;
}

@keyframes slideInBounce {
  0%{
    transform: rotate(-180deg);
    top: -100%;
  }
 70%{
    transform: rotate(-180deg);
    top: 33%;
  }
  100%{
    transform: rotate(-180deg);
    top: 25%;
  }
}

@keyframes flip{
  0%{
    transform: rotate(-180deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

</style>


<script>

</script>
