<template>
  <svg>
      <path id="motionPath" fill="none" stroke="#FFF" stroke-miterlimit="10" d="M-35.5,25.5c25.25-29.28,57.32-11.95,79.9,9S81,87.39,71.5,110.5s-46,33-75,7C-19.38,103.26-60.75,54.78-35.5,25.5Z"/>

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
</template>

<style>

body {background:#7e6e48;}

.butterfly {
  position:relative;
	margin-top:20%;
	width:140px;
	transform:rotate(130deg);
}
.butterfly > div {position:absolute;}
.butterfly img {width:100%;}

.leftwing {
  animation:flap-l 4s cubic-bezier(.08,1.47,.65,-0.68) infinite;
}
.rightwing {
  animation:flap-r 4s cubic-bezier(.08,1.47,.65,-0.68) infinite;
}
.leftwing, .rightwing {z-index:1;}

@keyframes flap-l {
			0% {transform:rotateY(0);}
			50% {transform:rotateY(80deg);}
			100% {transform:rotateY(0);}
}
@keyframes flap-r {
			0% {transform:rotateY(0); }
			50% {transform:rotateY(-80deg);}
			100% {transform:rotateY(0);}
}
</style>
