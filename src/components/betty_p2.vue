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


    <div slot="header" class="toolbar"
    style=".layout-header, .layout-footer {
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
        <img src="statics/header_flash_1a.png" >
       </button>

       <button style="color: black;">
         <img src="statics/header_filter_1a.png" >
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
    padding-top: 0.4em;" >

  <div style="
  font-size: 14px;
  font-family: Helvetica, sans-serif;
  font-weight: bold;">
  BL</div></div>


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


<div class="layout-view" style="background-color: black;">

</div>

<div slot="footer" class="toolbar">

  <div class="group">
      <button class="button1"><img src="statics/footer_photo_1a.png"></button>
      <button class="button2">VERTICAL<br><img src="statics/footer_vertical_1a.png"></button>
      <button class="button3">SCAN<br><img src="statics/footer_scan_1a.png"></button>
      <button class="button4">HORIZONTAL<br><img src="statics/footer_hortizontal_1a.png"></button>
      <button class=""><img src="statics/footer_photo_1b.png"></button>
  </div>




</div>
</q-layout>
</template>

<style >
.list .item-avatar{
width: 60px !important;
height : 60px !important;}

.toolbar {
  height: 90px;
  background-color: #29ABE2;
  padding-left: 10px;
}

.button1 {
  padding-top: 65px;
  margin-left: -15px;
}

.button2 {
  padding-top: 65px;
  margin-left: -25px;
  font-size: 8pt;
  font-family: Helvetica, sans-serif;
}

.button2:hover {
    background: url('~/statics/footer_vertical_1b.png');
    background-repeat: no-repeat;
    background-position: bottom;
}

.button3 {
  padding-top: 65px;
  margin-left: -25px;
  font-size: 8pt;
  font-family: Helvetica, sans-serif;
}

.button3:hover {
    background: url('~/statics/footer_scan_1b.png');
    background-repeat: no-repeat;
    background-position: bottom;
}

.button4 {
  padding-top: 65px;
  margin-left: -25px;
  font-size: 8pt;
  font-family: Helvetica, sans-serif;
}

.button4:hover {
    background: url('~/statics/footer_hortizontal_1b.png');
    background-repeat: no-repeat;
    background-position: bottom;
}


</style>


<script>
export default {
  data () {
    return {
      search: ''
    }
  }
}
</script>
