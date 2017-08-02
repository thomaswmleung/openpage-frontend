<template>

  <div id="app">
    <h3>Bounce the Ball!</h3>
    <button @click="toggleShow">
      <span v-if="isShowing">Get it gone!</span>
      <span v-else>Here we go!</span>
    </button>
    <transition
      name="ballmove"
      enter-active-class="bouncein"
      leave-active-class="rollout">
    <div v-if="isShowing">
      <app-child class="child"></app-child>
    </div>
    </transition>
  </div>
</template>

<style>
@mixin ballb($yaxis: 0) {
  transform: translate3d(0, $yaxis, 0);
}

@keyframes bouncein {
  1% { @include ballb(-400px); }
  20%, 40%, 60%, 80%, 95%, 99%, 100% { @include ballb() }
  30% { @include ballb(-80px); }
  50% { @include ballb(-40px); }
  70% { @include ballb(-30px); }
  90% { @include ballb(-15px); }
  97% { @include ballb(-10px); }
}

.bouncein {
  animation: bouncein 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.ballmove-enter {
  @include ballb(-400px);
}
</style>

<script>

</script>
