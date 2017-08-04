<template>

  <div class="box">

    <svg class="Sun" viewBox="0 0 191 169" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g id="Sun"><ellipse id="Sun-Circle-White" cx="44.28" cy="43.2" rx="44.28" ry="43.2" style="fill:#41b883;"/><ellipse id="Sun-Circle-Green" cx="44.28" cy="43.2" rx="26.88" ry="26.224" style="fill:#fff;"/></g></svg>

  <svg class="vueconf-logo" viewBox="0 0 191 169" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g id="VueConf-Logo"><path id="VueConf-Triangle-Green" d="M95.04,0l95.04,168l-190.08,0l95.04,-168Z" style="fill:#41b883;"/><path id="VueConf-Triangle-Blue" d="M95.04,67.95l61.624,100.05l-123.248,0l61.624,-100.05Z" style="fill:#35495e;"/><path id="VueConf-Triangle-White" d="M95.04,122.992l27.51,45.968l-55.02,0l27.51,-45.968Z" style="fill:#fff;"/></g></svg>


  <svg class="bush" width="100%" height="100%" viewBox="0 -10 77 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g id="Tree-Left"><rect id="Tree-Left-Base" x="33.171" y="42.234" width="10.32" height="104.766" style="fill:#35495e;"/><ellipse id="Tree-Left-Circle-Bottom" cx="38.331" cy="59.367" rx="38.331" ry="36.122" style="fill:#41b883;"/><ellipse id="Tree-Left-Circle-Top" cx="38.331" cy="23.245" rx="24.666" ry="23.245" style="fill:#41b883;"/></g></svg>s

  <svg class="tree-left" width="100%" height="100%" viewBox="0 -10 77 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g id="Tree-Left"><rect id="Tree-Left-Base" x="33.171" y="42.234" width="10.32" height="104.766" style="fill:#35495e;"/><ellipse id="Tree-Left-Circle-Bottom" cx="38.331" cy="59.367" rx="38.331" ry="36.122" style="fill:#41b883;"/><ellipse id="Tree-Left-Circle-Top" cx="38.331" cy="23.245" rx="24.666" ry="23.245" style="fill:#41b883;"/></g></svg>

  <svg class="tree-right" width="100%" height="100%" viewBox="0 -16 110 171" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g id="Tree-Right"><rect id="Tree-Right-Base" x="49.615" y="54.96" width="10.32" height="115.2" style="fill:#35495e;"/><ellipse id="Tree-Right-Circle" cx="54.775" cy="56.76" rx="54.775" ry="56.76" style="fill:#41b883;"/></g></svg>

  <ellipse id="Tree-Right-Circle" cx="54.775" cy="56.76" rx="54.775" ry="56.76" style="fill:#41b883;"/>
  <rect id="Tree-Right-Base" x="49.615" y="54.96" width="10.32" height="115.2" style="fill:#35495e;"/>

    </svg>

    <svg width="100%" height="100%" version="1.1"
    xmlns="http://www.w3.org/2000/svg">

    <rect x="20" y="20" width="250" height="250"
    style="fill:blue;stroke:pink;stroke-width:5;
    opacity:0.9"/>

    <rect x="20" y="20" rx="30" ry="20" width="500"
    height="1000" style="fill:red;stroke:black;
    stroke-width:5;opacity:0.5"/>

<path id="motionPath" fill="none" stroke="#FFF" stroke-miterlimit="10" d="M-35.5,25.5c25.25-29.28,57.32-11.95,79.9,9S81,87.39,71.5,110.5s-46,33-75,7C-19.38,103.26-60.75,54.78-35.5,25.5Z"/>
<div id="c1">GGGGG</div>
<circle id="circle" r="10" cx="0" cy="0" fill="tomato" />

<animateMotion
         xlink:href="#circle"
         dur="5s"
         begin="0s"
         fill="freeze"
         repeatCount="indefinite">
  <mpath xlink:href="#motionPath" />
</animateMotion>
  </svg>

</div>

</template>

<style>
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

.vueconf-logo {
position: absolute;
height: 50%;
width: 50%;
top: 25%;
left: 25%;
animation: slideInBounce 1s 1,
flip 0.5s 1s 1;
}


.bush {
position: absolute;
height: 30%;
width: 50%;
top: 45%;
left: 0%;
animation: slideInBounce 1s 1,

}

.tree-left {
position: absolute;
height: 30%;
width: 50%;
top: 45%;
left: 60%;

}

.tree-right {
position: absolute;
height: 30%;
width: 50%;
top: 50%;
left: 50%;
animation: slideInBounce 1s 1,

}

.Sun {
position: absolute;
height: 50%;
width: 50%;
top: 15%;
left: 50%;
animation: slideInBounce 1s 1,

}

@keyframes slideInBounce {
  0%{
    transform: rotate(-180deg);
    top: -50%;
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
</style>

<script>





</script>
