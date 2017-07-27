<template>

  <div class="view-parallax">
    <div class="layout-padding">
      <p class="caption">
        Scroll down (best using scrollbar instead of mouse scroll if on desktop) to see Parallax in action.
      </p>

      <p v-for="n in 2" class="par-text">{{loremipsum}}</p>
    </div>

    <q-parallax :src="'statics/parallax1.jpg'" :height="200">
      <div slot="loading">Loading...</div>
      <h1>Parallax  Title</h1>
    </q-parallax>

    <div class="layout-padding">
      <p v-for="n in 7" class="par-text">{{loremipsum}}</p>
    </div>

    <q-parallax :src="'statics/parallax2.jpg'">
      <div slot="loading">Loading...</div>
      <div class="card" style="">

      </div>
      <!-- <img src="http://pngimg.com/uploads/smoke/smoke_PNG962.png" alt=""> -->
    <h1>Bridge</h1>
    </q-parallax>

    <div class="layout-padding">
      <p v-for="n in 7" class="par-text">{{loremipsum}}</p>
    </div>

    <q-parallax :src="'statics/parallax1.jpg'">
      <div slot="loading">Loading...</div>
      <h1>Title</h1>
    </q-parallax>

    <div class="layout-padding">
      <p v-for="n in 7" class="par-text">{{loremipsum}}</p>
    </div>

    <q-parallax :src="'statics/parallax1.jpg'" :height="200">
      <div slot="loading">Loading...</div>
      <h1>Mountains</h1>
    </q-parallax>

    <div class="layout-padding">
      <p v-for="n in 7" class="par-text">{{loremipsum}}</p>
    </div>
  </div>


</template>

<script>
const moveForce = 30
const rotateForce = 40
const RAD_TO_DEG = 180 / Math.PI

import {
  Utils,
  Platform
} from 'quasar'

function getRotationFromAccel(accelX, accelY, accelZ) {
  /* Reference: http://stackoverflow.com/questions/3755059/3d-accelerometer-calculate-the-orientation#answer-30195572 */
  const sign = accelZ > 0 ? 1 : -1
  const miu = 0.001

  return {
    roll: Math.atan2(accelY, sign * Math.sqrt(Math.pow(accelZ, 2) + miu * Math.pow(accelX, 2))) * RAD_TO_DEG,
    pitch: -Math.atan2(accelX, Math.sqrt(Math.pow(accelY, 2) + Math.pow(accelZ, 2))) * RAD_TO_DEG
  }
}

export default {
  data() {
    return {
      orienting: window.DeviceOrientationEvent && !Platform.is.desktop,
      rotating: window.DeviceMotionEvent && !Platform.is.desktop,
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0,
      loremipsum:'朱瞻基比他父親還少活十年，但由于父親死得早，自己二十七歲登基，做了十年皇帝。\n這十一年是明朝的黃金時代，對這段時期的統治，史料中溢美之詞不勝枚舉。大明帝國空前繁榮強大，一切似乎都在向著更好的方向發展。但長期觀看電視劇的習慣告訴我們，一般到了這個時候，就會出現一個轉折，電視編劇會特地搞點矛盾鬧點事出來，比如什麼男主角殺了人，女主角得絕症之類。要是一直都是花好月圓，人人平安，那這電視劇的收視率就不會高，也賣不出廣告。曆史之神（如果真有的話）看來也是一個好編劇，他可能也覺得這樣的曆史沒有意思，便給這出喜劇劃上了一個句號。這個句號最終結束了明朝的黃金十年。宣德十年（1435），一代英主朱瞻基經搶救無效死亡，年僅三十八歲。仁宣之治就此完結。在朱瞻基臨死之前，他為自己那年僅九歲的兒子選擇了五位顧命大臣，雖然兒子還年幼，但朱瞻基並不擔心，因為他相信這五個人決不會讓自己失望。此五人分別是：楊士奇、楊榮、楊溥、張輔、胡濴確實是豪華陣容，文有三楊，武有張輔，還有一個專干秘密工作的，朱瞻基應該走得很安心。但他想不到的是，這五位風云人物，朝廷精英最終還是讓他失望了。一場狂風暴雨即將來臨'
    }
  },
  computed: {
    position() {
      const transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      return {
        top: this.moveY + 'px',
        left: this.moveX + 'px',
        '-webkit-transform': transform,
        '-ms-transform': transform,
        transform
      }
    }
  },
  methods: {
    move(evt) {
      const {
        width,
        height
      } = Utils.dom.viewport()
      const {
        top,
        left
      } = Utils.event.position(evt)
      const halfH = height / 2
      const halfW = width / 2

      this.moveX = (left - halfW) / halfW * -moveForce
      this.moveY = (top - halfH) / halfH * -moveForce
      this.rotateY = (left / width * rotateForce * 2) - rotateForce
      this.rotateX = -((top / height * rotateForce * 2) - rotateForce)
    },
    rotate(evt) {
      if (evt.rotationRate &&
        evt.rotationRate.beta !== null &&
        evt.rotationRate.gamma !== null) {
        this.rotateX = evt.rotationRate.beta * 0.7
        this.rotateY = evt.rotationRate.gamma * -0.7
      } else {
        /* evt.acceleration may be null in some cases, so we'll fall back
           to evt.accelerationIncludingGravity */
        const accelX = evt.acceleration.x || evt.accelerationIncludingGravity.x
        const accelY = evt.acceleration.y || evt.accelerationIncludingGravity.y
        const accelZ = evt.acceleration.z || evt.accelerationIncludingGravity.z - 9.81

        const rotation = getRotationFromAccel(accelX, accelY, accelZ)
        this.rotateX = rotation.roll * 0.7
        this.rotateY = rotation.pitch * -0.7
      }
    },
    orient(evt) {
      if (evt.beta === null || evt.gamma === null) {
        window.removeEventListener('deviceorientation', this.orient, false)
        this.orienting = false

        window.addEventListener('devicemotion', this.rotate, false)
      } else {
        this.rotateX = evt.beta * 0.7
        this.rotateY = evt.gamma * -0.7
      }
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   if (this.orienting) {
    //     window.addEventListener('deviceorientation', this.orient, false)
    //   } else if (this.rotating) {
    //     window.addEventListener('devicemove', this.rotate, false)
    //   } else {
    //     document.addEventListener('mousemove', this.move)
    //   }
    // })
  },
  beforeDestroy() {
    if (this.orienting) {
      window.removeEventListener('deviceorientation', this.orient, false)
    } else if (this.rotating) {
      window.removeEventListener('devicemove', this.rotate, false)
    } else {
      document.removeEventListener('mousemove', this.move)
    }
  }
}
</script>

<style lang="stylus">
.logo-container
  /*width 192px
  height 268px*/
  perspective 800px
  /*position absolute*/
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
