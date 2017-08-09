<template>
<!-- glow and grow -->
  <q-layout>
    <q-drawer ref="leftDrawer">

         </div>

         <div class="list no-border platform-delimiter">
           <q-drawer-link to="/showcase/layout" exact>
             關於本站
           </q-drawer-link>

           <hr>
           <div class="list-label">Layout Components</div>
           <q-drawer-link to="/betty_glow1">
             首頁
           </q-drawer-link>
           <q-drawer-link to="/showcase/layout/tabs">
             摘星歷程
           </q-drawer-link>
           <q-drawer-link to="/showcase/layout/drawer">
             課程特色
           </q-drawer-link>
           <q-drawer-link to="/showcase/layout/drawer">
             策略與配套
           </q-drawer-link>
           <q-drawer-link to="/showcase/layout/drawer">
             摘星獎勵計劃
           </q-drawer-link>
           <q-drawer-link to="/showcase/layout/drawer">
             聯絡我們
           </q-drawer-link>
         </div>
       </q-drawer>


    <div slot="header" class="toolbar inverted white"
    style=".layout-header, .layout-footer {
    color: #fff;
    background: #FFF;
    z-index: 10;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height:75px;">
    <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()" style="
    color: black;
    ">
        <i>menu</i>
      </button>


        <h1>
          <img src="statics/glow_logo.png" width="175px"></h1>


      <button @click="$refs.rightDrawer.open()" style="color: black;">
        <i>menu</i>
      </button>
    </div>


    <router-view class="layout-view"></router-view>

    <q-drawer right-side swipe-only ref="rightDrawer">
      <div class="toolbar light">
        <q-toolbar-title :padding="1">
            Right-side Drawer
        </q-toolbar-title>
      </div>

      <p style="padding: 25px;" class="text-grey-7">
        This is yet another Drawer that does not gets displayed alongside content on
        bigger screens.
      </p>
    </q-drawer>
  </div>
  </div>




<div class="row wrap text-center" style=" overflow-x: scroll; background:white; width: 100%;">



    <div id="image1"><img src="statics/glow_award_1a.png" width="220px"></div>

    <p></p>
    <blockquote style="background: #f9f9f9;
    border-left: 5px solid #f9f9f9;"><h3>內容涵蓋健康教育、藥物教育、愛滋病教育、性教育及生活教育。本學習範疇目的在於協助學生掌握有關生理丶心
理及社羣健康的基本知識，鼓勵學生以正面、積極態度面對成長，以至在未來接受各項挑戰時，能作出適當的考慮和抉擇</h3>
  </blockquote>

  <div class="items-center column justify-center full-width full-height">
    <q-transition name="slide">
      <q-stepper class="orange" @finish="finish()" ref="stepper" v-show="!finished">
        <q-step title="日期">
          <p class="caption">請選擇日期
            <q-datetime v-model="model" type="date"></q-datetime>
          </p>
        </q-step>
        <q-step class="orange" title="Create an ad group" :ready="ready">
          An ad group contains one or more ads which target a shared set of keywords.
          <br><br>
          <label>
            <q-toggle v-model="ready"></q-toggle>
            Enable next step
          </label>
        </q-step>
        <q-step class="orange" title="Create an ad">
          Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.
        </q-step>
      </q-stepper>
    </q-transition>

    <div v-show="finished" class="items-center column justify-center full-width full-height">
      <p class="caption">
        <i class="text-primary" style="font-size: 2rem; margin-right: 1rem;">check</i>
        <span>Finished. Well done!</span>
      </p>
      <button class="primary" @click="reset()">Reset</button>
    </div>
  </div>


</div>
  </q-layout>
</template>



<style>

h1 {
  color: #a984bc;
  font-size: 25pt;
  font-family: Arial Rounded MT Bold, sans-serif;

}

h2 {
  margin: 5%;
  text-align:left;
  color: #717071;
  font-size: 18pt;
  font-family: 蘋方-繁, Helvetica, sans-serif;
  line-height: 1%

}

h3 {
  text-align:left;
  color: grey;
  font-size: 10pt;
  font-family: Helvetica, sans-serif;
  line-height: 20px;
  margin: 5%;

}

h4 {
  margin: 5%;
  color: black;
  font-size: 12pt;
  font-family: Helvetica, sans-serif;
  line-height: 130%
}

#image1 {
    /*position: absolute;*/
    padding-top: 30px;
    margin-left: auto;
    margin-right: auto;
    /*width: 100%;
    left: 0;*/
}


</style>
<script>
export default {
  data () {
    return {
      ready: false,
      finished: false
    }
  },
  methods: {
    finish () {
      this.finished = true
    },
    reset () {
      this.$refs.stepper.reset()
      this.finished = false
    }
  }
}
</script>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      model: '',
      minMaxModel: '2016-10-24T10:40:14.674Z',
      min: moment('2016-10-24T10:40:14.674Z').subtract(5, 'days').format(),
      max: moment('2016-10-24T10:40:14.674Z').add(4, 'hours').add(10, 'minutes').format(),
      range: {
        start: moment('2016-10-24T10:40:14.674Z').subtract(3, 'days').format(),
        end: moment('2016-10-24T10:40:14.674Z').add(4, 'hours').add(10, 'minutes').add(1, 'month').format(),
        min: moment('2016-10-24T10:40:14.674Z').subtract(3, 'days').format(),
        max: moment('2016-10-24T10:40:14.674Z').add(4, 'hours').add(10, 'minutes').add(1, 'month').format()// .add(1, 'month').add(1, 'year')
      }
    }
  }
}
</script>
