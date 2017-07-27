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


<div class="row wrap text-center" style=" overflow-x: scroll; background:lightgrey; width: 100%;">

 <div class="wrapper">

<div class="card" style="width: 350px; height:320px; margin-left:10px background:none; box-shadow:none">
  <h5>CHATGROUPS</h5>
    <p class="f5 lh-copy">
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text
    </p>
    <button class="button9">MORE</button></div>


</div></div>
</div></div>
</q-layout>
</template>

<style >
.list .item-avatar{
width: 60px !important;
height : 60px !important;}

div.image_container {
   width: 400px;
   height: 50px;

   input[type="text"]
      {
         width: 100px;
         height: 30px;
         border: 0.5px solid #CCC;
      }
}

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

  .wrapper::-webkit-scrollbar{
    width: 18px;
    height: 50px;
    /*border-radius: 15px;*/
  }

  .wrapper::-webkit-scrollbar-track{
    /*background: #DDD;*/
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb{
    width: 28px;
    background-color:#808080;
    background: url('~/statics/scroll_rig_1a.png');
    background-repeat: no-repeat;
    /*background: #49AEC0;*/
    /*border: 5px solid #CCEEF4;*/
    /*border-radius: 15px;*/
  }


h8 {
     position: absolute;
     top: 10px;
     left: 120px;
     width: 30%;
  }

h9 {
       font-size: 16px;
       color: #FFF;
       align-items: center;
    }

    #floating-button{
      width: 30px;
      height: 35px;
      background: #db4437;
      position: relative;
      margin-left: 20px;
      padding-top: 0px;
      bottom: 0px;
      right: 31px;
      /*cursor: pointer;*/
      /*box-shadow: 0px 2px 5px #666;*/
    }

    .plus{
      color: white;
      /*position: absolute;*/
      top: 0;
      display: block;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      padding: 0;
      /*margin: 0;*/
      line-height: 55px;
      font-size: 20px;
      font-family: 'Roboto';
      font-weight: 300;
      animation: plus-out 0.3s;
      transition: all 0.3s;
    }

    edit{
      position: absolute;
      top: 0;
      display: block;
      bottom: 0;
      left: 0;
      display: block;
      right: 0;
      padding: 0;
      opacity: 0;
      margin: auto;
      line-height: 65px;
      transform: rotateZ(-70deg);
      transition: all 0.3s;
      animation: edit-out 0.3s;
    }

.button1{
      float: left;
      background-color: #35B2E8;
      width: 5px;
      margin-right: 10px
      /*cursor: pointer;*/
    }

h5 {
    color: #C8C9CA;
    font-size: 20pt;
    font-family: Helvetica, sans-serif;
    text-align: left;
    margin-left: 15px;
    /*padding-top: 20px;*/
    min-width: 28em;
  }

.lh-copy {
      line-height: 1.8;
  }


.f5 {
      font-size: 12px;
      text-align: left;
      padding-left: 18px;
  }



  .button9{
       float: right;
       font-size: 10px;
       text-align: center;
       color: #FFF;
       background-color: #C8C9CA;
       height: 20px;
       width: 70px;
       margin-left: auto;
       margin-right: 25px;
       margin-bottom: 100px;
       /*cursor: pointer;*/
  }
</style>


<script>

</script>
