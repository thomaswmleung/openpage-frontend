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

  <div style="margin-top: 5px;">

    <div style="text-align: center;">
        <h1>個人發展</h1></div>
    <h2>人與自己</h2>
    <blockquote style="background: #f9f9f9; margin-left:40px;
    border-left: 5px solid #a984bc;"><h3>內容涵蓋健康教育、藥物教育、愛滋病教育、性教育及生活教育。本學習範疇目的在於協助學生掌握有關生理丶心
理及社羣健康的基本知識，鼓勵學生以正面、積極態度面對成長，以至在未來接受各項挑戰時，能作出適當的考慮和抉擇</h3>
  </blockquote>


    <h2>健康的成長</h2>
    <blockquote style="background: #f9f9f9; margin-left:40px;
      border-left: 5px solid #a984bc;"><h3>堅毅</h3>
  </blockquote>



      <div class="list" style="max-width: 100%;">
        <div
          class="item item-link"
          v-for="modal in types"
          @click="$refs[modal.ref].open()"
        >
          <i class="item-primary">star rate</i>
          <div class="item-content has-secondary">
            <div>{{modal.label}}</div>
          </div>
          <i class="item-secondary">keyboard_arrow_right</i>
        </div>
      </div>

  <q-modal ref="ma1" class="maximized" :content-css="{padding: '50px'}">
       <h5>堅毅</h5>
       <br><p><h6>中國語文</h6></p>
        <blockquote style="background: #f9f9f9;
          border-left: 5px solid #ff5555;"><h3>做事堅忍，力不慣徹始終</h3></blockquote>
       <br><p><h6>英國語文</h6></p>
       <br><p><h6>數學</h6></p>
        <blockquote style="background: #f9f9f9;
          border-left: 5px solid #a984bc; "><h3>具有鍥而不捨的鑽研精神，努力嘗試解決令人困惑的數學難題</h3></blockquote>
       <br><p><h6>常識</h6></p>
       <button class="tertiary" @click="$refs.ma1.close()">返回</button>
     </q-modal>

     <q-modal ref="ma2" class="maximized" :content-css="{padding: '50px'}">
          <h5>尊重和關愛別人</h5>
          <br><p><h6>中國語文</h6></p>
           <blockquote><h3>尊重別人的權利和感受</h3></blockquote>
          <br><p><h6>英國語文</h6></p>
          <br><p><h6>數學</h6></p>
           <blockquote><h3>在羣維工作時，應持有開放的態度。而在討論數學問題時，亦意聆聽及尊重他人的意見，對他人的
             貢獻予以重視及懂得欣賞</h3></blockquote>
          <br><p><h6>常識</h6></p>
          <blockquote><h3>欣賞每個人的獨特之處，專重各人有不同的優點與缺點</h3></blockquote>
          <button class="tertiary" @click="$refs.ma2.close()">返回</button>
        </q-modal>




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

h5 {

    font-size: 20pt;
    font-family: 蘋方-繁, Helvetica, sans-serif;
}

h6 {
    color: grey;
    font-size: 14pt;
    font-family: 蘋方-繁, Helvetica, sans-serif;
}



</style>

<script>
import { Toast } from 'quasar'
export default {
  data () {
    return {
      types: [
        {
          label: '堅毅',
          ref: 'ma1'
        },
        {
          label: '尊重和關愛別人',
          ref: 'ma2'
        },
        {
          label: '責任感',
          ref: 'maximizedModal'
        },
        {
          label: '個人獨特性',
          ref: 'maximizedModal'
        },
        {
          label: '自省',
          ref: 'maximizedModal'
        },
        {
          label: '自律',
          ref: 'maximizedModal'
        },
        {
          label: '尊重公平',
          ref: 'maximizedModal'
        },
        {
          label: '尊重生命',
          ref: 'maximizedModal'
        },
        {
          label: '自尊',
          ref: 'maximizedModal'
        },
        {
          label: '簡樸',
          ref: 'maximizedModal'
        },
        {
          label: '積極',
          ref: 'maximizedModal'
        },
        {
          label: '正直與正義',
          ref: 'maximizedModal'
        },
        {
          label: '理性',
          ref: 'maximizedModal'
        },
        {
          label: '勇氣',
          ref: 'maximizedModal'
      }
      ],
      position: 'bottom'
    }
  },
  methods: {
    notify (eventName) {
      Toast.create(`Event "${eventName}" was triggered.`)
    },
    openSpecialPosition (position) {
      this.position = position
      this.$nextTick(() => {
        this.$refs.positionModal.open()
      })
    }
  }
}
</script>
