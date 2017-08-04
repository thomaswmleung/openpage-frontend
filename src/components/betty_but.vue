<template>

  <div class="butterfly">
    <div class="leftwing">
        <img src="statics/glow_butt_l.png">
      </div>
      <div class="body">
  			<img src="statics/glow_butt_b.png">
  		</div>
      	<div class="rightwing">
      		<img src="statics/glow_butt_r.png">
      	</div>
  	</div>


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
