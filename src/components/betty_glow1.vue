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
    <div class="butterfly  demo-dot" style="position:absolute;top:-50px">
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


  <div id="image1">
    <img src="statics/glow_play.png" height="120px"></div>



<div class="card" style="width: 100%; background:none;box-shadow:none;margin-top:-1.5em;margin-bottom:-1em">
    <h2>"提供全人教育，在德/智/體/群/美/情/靈七育中全面發展”</h2>
</div>


<div class="row gutter wrap">
  <div class="auto">
    <div><button class="button1"><div style="padding-top: 100px;"><h11>成長課<br>課本與評估</h11></div></button></div>
  </div>
  <div class="auto">
    <div><button class="button2"><div style="padding-top: 85px; text-transform: capitalize;"><h12>English <br>TextBooks &<br>Exercise</h12></div></button></div>
  </div>
  <div class="auto">
    <div><button class="button3"><div style="padding-top: 100px;"><h11>中文科<br>課本與練習</h11></div></button></div>
  </div>
  <div class="auto">
    <div><button class="button4"><div style="padding-top: 100px;"><h11>數學科<br>課本與練習</h11></div></button></div>
</div></div>



<div class="card" style="width: 100%; margin-left:10px background:none; box-shadow:none">
  <div class="group">
    <button class="button button5" style="color: grey; border-color: grey;">登錄</button>
    <button class="button button6" style="color: grey; border-color: grey;">註冊</button>
  </div>
</div>

<div class="row gutter wrap">
  <div class="auto"><div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
    <h4>態度為本，運用價值觀架構<br>進行課程統整及跨學科學習</h4>
      <p class="f5 lh-copy">
      文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
      文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
      文字 文字 文字 文字 文字
      </p>
      <router-link to="betty_glow4"><button class="button10">更 多</button></router-link></div></div>

      <q-modal ref="basicModal" :content-css="{padding: '50px', minWidth: '50vw'}">
        <h4>Basic Modal</h4>
        <p v-for="n in 25">Scroll down to close</p>
        <button class="primary" @click="$refs.basicModal.close()">Close</button>
      </q-modal>

  <div class="auto"><div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
    <h4>從個人化生㓉事件方式<br>第一身學習以學生為中心</h4>
      <p class="f5 lh-copy">
        文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
        文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
        文字 文字 文字 文字 文字
      </p>
      <button class="button8">更 多</button></div></div>
  <div class="auto"><div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
    <h4>運用選頁技術，全面校本教材<br>發揮校本價值與特色
  </h4>
      <p class="f5 lh-copy">
        文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
        文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
        文字 文字 文字 文字 文字
      </p>
      <button class="button9">更 多</button></div>
</div>
<div class="auto"><div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
  <h4>以價值學習效果層次<br>而不用分數評鑑學習成果</h4>
    <p class="f5 lh-copy">
      文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
      文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
      文字 文字 文字 文字 文字
    </p>
    <router-link to="betty_glow2"><button class="button10">更 多</button></router-link>


  </div></div>

<!-- @click="/betty_glow2" -->

  <div class="auto"><div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
    <h4>培養共通能力<br>利用資訊科技，進行課後評估</h4>
      <p class="f5 lh-copy">
        文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
        文字 文字 文字 文字 文字 文字 文字 文字 文字 文字 文字
        文字 文字 文字 文字 文字
      </p>
      <button class="button11">更 多</button></div></div>
</div>




<div class="card" style="width: 100%; margin-left:10px background:none; box-shadow:none">
<div id="opclould1">
    <a href="#"><img src="statics/op_cloud1a.png"/>
    </a><p><h7>OpenPage Society</h7></p>
    </div>


<h8>贊助</h8>

<div id="partners1">

    <a href="#">
        <img src="statics/op_link1a.png"/>
    </a>
    <a href="#">
        <img src="statics/op_link1b.png"/>
    </a>
    <a href="#">
        <img src="statics/op_link1c.png"/>
    </a>
    <a href="#">
        <img src="statics/op_link1d.png"/>
    </a>
</div>

<br><br><h8>媒體</h8>

</div>

<div class="card" style="width: 100%; margin-left:10px background:none; box-shadow:none">
<div><br><br><h9> 私隱政策聲明   |   免責聲明及使用條款
|   無障礙瀏覽   |   網站地圖</h9>
<br><br><h10>© 2017 版權所有。iLearners Openpage</h10></div></div>


</div>
  </q-layout>
</template>

<style >
.list .item-avatar{
width: 60px !important;
height : 60px !important;}



h1 {
  color: black;
  font-size: 12pt;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

h2 {
  color: grey;
  font-size: 11pt;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

h3 {
  color: #717071;
  font-size: 19pt;
  font-family: Helvetica, sans-serif;
  text-align: center;
  margin-left: 15px;
  line-height: 130%
}

h4 {
  color: #717071;
  font-size: 19pt;
  font-family: Helvetica, sans-serif;
  text-align: center;
  margin-left: 15px;
  line-height: 130%

}



h7 {
  font-size: 12pt;
  font-family: Helvetica, sans-serif;
  }

h8 {
    font-size: 10pt;
    font-family: Helvetica, sans-serif;
    color: #C8C9CA;
    }

h9 {
      font-size: 10pt;
      font-family: Helvetica, sans-serif;
      color: #595757;

      }

h10 {
      font-size: 8pt;
      font-family: Helvetica, sans-serif;
      color: #595757;
      }

h11 {
      font-size: 16pt;
      font-family: Helvetica, sans-serif;
      color: #fff;
      line-height: 130%
      }

h12 {
      font-size: 16pt;
      font-family: Helvetica-Light, sans-serif;
      color: #fff;
      line-height: 120%

      }

#image1 {
    /*position: absolute;*/
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    /*width: 100%;
    left: 0;*/
}

#image2 {
    display: block;
    padding-top: 50px;
    min-width: 25em;
    text-align: center;
}

.button {
    /*border: none;*/
    /*color: white;*/
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    /*display: inline-block;*/
    font-size: 14px;
    /*margin: 4px 2px;*/
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}

.button1{
     float: center;
     background-color: #DEC1E8;
     height: 178px;
     width: 178px;
     /*cursor: pointer;*/
}

.button2{
     float: center;
     background-color: #F7B7B7;
     height: 178px;
     width: 178px;
     /*cursor: pointer;*/
}

.button3{
     float: center;
     background-color: #ACE2B0;
     height: 178px;
     width: 178px;
     /*cursor: pointer;*/
}

.button4{
     float: center;
     background-color: #FFCE88;
     height: 178px;
     width: 178px;
     /*cursor: pointer;*/
}

.button5
{
  background-color: white;
  color: #e7e7e7;
  border: 1px solid #595757;
  text-align: center;
  font-size: 14pt;

}

.button5:hover {
    background-color: #FFEF94;
    color: white;
}

.button6
{
  background-color: white;
  color: #e7e7e7;
  border: 1px solid #595757;
  text-align: center;
  font-size: 14pt;

}

.button6:hover {
    background-color: #FFEF94;
    color: white;
}

.button7{
     float: right;
     font-size: 12px;
     text-align: center;
     color: #FFF;
     background-color: #953A90;
     height: 20px;
     width: 70px;
     margin-left: auto;
     /*cursor: pointer;*/
}

.button8{
     float: right;
     font-size: 12px;
     text-align: center;
     color: #FFF;
     background-color: #E95205;
     height: 20px;
     width: 70px;
     margin-left: auto;
     /*cursor: pointer;*/
}

.button9{
     float: right;
     font-size: 12px;
     text-align: center;
     color: #FFF;
     background-color: #ffdc00;
     height: 20px;
     width: 70px;
     margin-left: auto;
     /*cursor: pointer;*/
}

.button10{
     float: right;
     font-size: 12px;
     text-align: center;
     color: #FFF;
     background-color: #6ebc66;
     height: 20px;
     width: 70px;
     margin-left: auto;
     /*cursor: pointer;*/
}

.button11{
     float: right;
     font-size: 12px;
     text-align: center;
     color: #FFF;
     background-color: #f29900;
     height: 20px;
     width: 70px;
     margin-left: auto;
     /*cursor: pointer;*/
}

.lh-copy {
      line-height: 1.8;
  }


.f5 {
      font-size: 12px;
      text-align: left;
      padding-left: 18px;
  }


@media screen and (min-width: 30em) {
    .pa5-ns {
        padding: 4rem;
    }
}

#partners1 img{
    float: center;
    margin: 10px;
    height: 40px;
}

#opclould1 img{
   width:135px;
   height:97px;
   float: canter;
}

#motionPath {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}


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


.demo-dot {
  -webkit-animation: xAxis 8.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
  animation: xAxis 8.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
}

.demo-dot::after {
  content: '';
  display: block;
  -webkit-animation: yAxis 4.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
  animation: yAxis 4.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
}

@-webkit-keyframes yAxis {
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}

@keyframes yAxis {
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}

@-webkit-keyframes xAxis {
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    -webkit-transform: translateX(300px);
    transform: translateX(300px);
  }
}

@keyframes xAxis {
  50% {
    -webkit-animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
    -webkit-transform: translateX(300px);
    transform: translateX(300px);
  }
}



</style>

<style lang="styl">
#view-flexbox
  margin-top 30px
  max-width 95vw
  .row, .column, .flex
    > div > div
      padding 10px
      border-radius 3px
      background rgba(147, 128, 108, .1)
      text-align center
  &.with-border
    .row, .column, .flex
      border 2px solid teal
      > div
        border 1px dashed orange
</style>



<script>
export default {
  data () {
    return {
      border: false
    }
  }
}
</script>

<script>
import { Toast } from 'quasar'
export default {
  data () {
    return {
      types: [
        {
          label: 'Basic',
          ref: 'basicModal'
        },
        {
          label: 'Basic with Events',
          ref: 'eventsModal'
        },
        {
          label: 'With Layout',
          ref: 'layoutModal'
        },
        {
          label: 'Always Minimized',
          ref: 'minimizedModal'
        },
        {
          label: 'Always Maximized',
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
