<template>
<q-layout>
  <q-drawer ref="leftDrawer">
    <div class="toolbar light">
      <q-toolbar-title :padding="1">
        Drawer
      </q-toolbar-title>
    </div>

    <div class="list no-border platform-delimiter">
      <q-drawer-link icon="view_quilt" to="/showcase/layout" exact>
        About OpenPage
      </q-drawer-link>
      <hr>
      <div class="list-label">Layout Components</div>
      <q-drawer-link icon="build" to="/showcase/layout/toolbar">
        Library
      </q-drawer-link>
      <q-drawer-link icon="tab" to="/showcase/layout/tabs">
        Scan
      </q-drawer-link>
      <q-drawer-link icon="compare_arrows" to="/showcase/layout/drawer">
        Particular
      </q-drawer-link>
    </div>
  </q-drawer>


  <div slot="header" class="toolbar" style=".layout-header, .layout-footer {
    color: #fff;
    background: #f2f2f2;
    z-index: 10;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    height:65px;">
    <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()" style="
    color: black;
    ">
        <i>menu</i>
      </button>

    <button style="color: black;">
        <i class="material-icons" >search</i>
       </button>

    <button style="color: black;">
         <i class="material-icons">wallpaper</i>
       </button>

    <q-toolbar-title :padding="0" style="
      text-align: center;
      color: black;">
      <div style="
        font-size: 14pt;
        font-family: Helvetica, sans-serif;
        font-weight: bold;
        padding-bottom: 5px;">
        OpenPage
      </div>
    </q-toolbar-title>

    <button style="color: black;">
        <div style="
        font-size: 8pt;
        font-family: Helvetica, sans-serif;
        ">
        Library
        </div>
       </button>

    <div class="circle" style="background-color: grey;
    line-height: normal;
    display: inline-block;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    padding-left: 0.5em;
    padding-top: 0.4em;">

      <div style="
  font-size: 14px;
  font-family: Helvetica, sans-serif;
  font-weight: bold;">
        BL</div>
    </div>


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
      This is yet another Drawer that does not gets displayed alongside content on bigger screens.
    </p>
  </q-drawer>
  </div>
  </div>


  <div class="row wrap text-center" style=" overflow-x: scroll; background:lightgrey; width: 100%;">


    <h7><img class="card-img-top" src="statics/op_rigside_1a.png" width="25px" height="60px"></h7>
    <div class="wrapper">

      <div>
        <div class="layout-padding">
          <div style="
text-align: center;">

<!-- Row Start, Make a better format for easily to see the dependence -->
<div class="label bg-white" v-for="n in 30" style="margin-bottom:0.3em">
  <img src="statics/popup_text_1a.png"></img>
    <q-popover ref="popover" style="background:none;box-shadow:none">
      <div style="padding-left: 0px;"><img src="statics/popup_boardtop_1a.png"></div>
      <div class="list no-border" style="width: 185px;margin-left: 18px;margin-top: -25px;">
      <div v-for="type in row_type" class="item item-link" style="background-color: #000" @click="popup_handler()"  >
        <img class="label bg-black text-white" :src="type.image" >
        <h9>{{type.label}}</h9>
      </div>
      <div style="padding-left: -12px; width: 180px; margin-top: -10px; margin-left: -18px;">
        <img src="statics/popup_boardbottom_1a.png"></div>
      </div>
    </q-popover>

  <input class="text" maxlength="16" :value="'Demo String' + n" style="width: 260px;">

</div>

<!-- Row End -->
          </div>
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

/*div.image_container {
  width: 400px;
  height: 50px;

  input[type="text"] {
    width: 100px;
    height: 30px;
    border: 0.5px solid #CCC;
  }
}*/

h7 {
  position: absolute;
  top: 219px;
  width: 5%;
}

.wrapper {
  overflow: auto;
  max-height: 100%;
  width: 400px;
  padding: 15px 0px;
}

.wrapper::-webkit-scrollbar {
  width: 18px;
  height: 50px;
  /*border-radius: 15px;*/
}

.wrapper::-webkit-scrollbar-track {
  /*background: #DDD;*/
  border-radius: 0px;
}

 ::-webkit-scrollbar-thumb {
  width: 28px;
  background-color: #808080;
  background: url('~/statics/scroll_rig_1a.png');
  background-repeat: no-repeat;
  /*background: #49AEC0;*/
  /*border: 5px solid #CCEEF4;*/
  /*border-radius: 15px;*/
}


h9 {
  font-size: 16px;
  color: #FFF;
  align-items: center;
}

</style>


<script>
export default {
  methods:{
    popup_handler:(event)=>{console.log(event,"Item Click")}
  },

  data() {
    return {
      //I am trying to clean up the code, too much line difficult to handle for me
      /*


      */

      "row_type": [{
          image: "statics/popup_pagetitle_1a.png",
          label: "Page Title"
        },
        {
          image: "statics/popup_guildeline_1a.png",
          label: "Guideline"
        },
        {
          image: "statics/popup_heading_1a.png",
          label: "Heading"
        },
        {
          image: "statics/popup_subheading_1a.png",
          label: "Sub-Heading"
        },
        {
          image: "statics/popup_text_1a.png",
          label: "Text"
        },
        {
          image: "statics/popup_backspace_1a.png",
          label: "BackSpace"
        },
        {
          image: "statics/popup_newpara_1a.png",
          label: "New Paragraph"
        },
        {
          image: "statics/popup_ans_1a.png",
          label: "Answer"
        }
      ]


    }
  }
}
</script>
