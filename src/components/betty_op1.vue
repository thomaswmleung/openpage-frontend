<template>

  <q-layout>
    <q-drawer ref="leftDrawer">

         </div>

         <div class="list no-border platform-delimiter">
           <q-drawer-link to="/showcase/layout" exact>
             About OpenPage
           </q-drawer-link>

           <hr>
           <div class="list-label">Layout Components</div>
           <q-drawer-link to="/showcase/layout/toolbar">
             OPENPAGE O2O
           </q-drawer-link>
           <q-drawer-link to="/showcase/layout/tabs">
             PAGINATION
           </q-drawer-link>
           <q-drawer-link to="/showcase/layout/drawer">
             CHATGROUP
           </q-drawer-link>
           <q-drawer-link to="/showcase/layout/drawer">
             OPENPAGE PLATFORM
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
    height:65px;">
    <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()" style="
    color: black;
    ">
        <i>menu</i>
      </button>


        <h1>
        <span style="font-size:1.2em;font-weight:bold">iLearners OpenPage </span><br>
        <span style="">AI for Education</span></h1>


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

  <div id="image1">
    <img src="statics/op_vid_logo1a-01.png" height="120px"></div>

<div class="card" style="width: 100%; background:none;box-shadow:none;margin-top:-1.5em;margin-bottom:-1em">
    <h2>"Teaching and Publishing have never been easier with EdTech.”</h2>
</div>

<div class="group">
    <button class="button1"></button>
    <button class="button2"></button>
    <button class="button3"></button>
    <button class="button4"></button>
</div>



<div class="card" style="width: 100%; margin-left:10px background:none; box-shadow:none">
  <div class="group">
    <button class="button button5" style="color: grey; border-color: grey;">LOGIN</button>
    <button class="button button6" style="color: grey; border-color: grey;">REGISTER</button>
  </div>
</div>

<div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
  <h3>OPENPAGE O2O</h3>
    <p class="f5 lh-copy">
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text
    </p>
    <button class="button7">MORE</button></div>

<div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
  <h4>PAGINATION</h4>
    <p class="f5 lh-copy">
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text
    </p>
    <button class="button8">MORE</button></div>

<div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
  <h5>CHATGROUPS</h5>
    <p class="f5 lh-copy">
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text
    </p>
    <button class="button9">MORE</button></div>


<div class="card" style="width: 350px; height:320x; margin-left:10px background:none; box-shadow:none">
  <h6>OPENPAGE PLATFORM</h6>
    <p class="f5 lh-copy">
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text Text Text Text Text Text Text Text Text Text
    Text Text Text Text
    </p>
    <button class="button10">MORE</button></div>

<div class="card"></div>

<div class="card" style="width: 100%; margin-left:10px background:none; box-shadow:none">
<div id="opclould1">
    <a href="#"><img src="statics/op_cloud1a.png"/>
    </a><p><h7>OpenPage Society</h7></p>
    </div>


<h8>Partners</h8>

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

<br><br><h8>Media</h8>

</div>

<div class="card" style="width: 100%; margin-left:10px background:none; box-shadow:none">
<div><br><br><h9> Privacy Policy   |   Terms of Use & Disclaimer
|   Accessibility   |   Sitemap</h9>
<br><br><h10>Copyright © 2017 iLearners Openpage All Rights Reserved.</h10></div></div>


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
  color: #35B2E8;
  font-size: 20pt;
  font-family: Helvetica, sans-serif;
  text-align: left;
  margin-left: 15px;
  /*min-width: 28em;*/
}

h4 {
  color: #E95513;
  font-size: 20pt;
  font-family: Helvetica, sans-serif;
  text-align: left;
  margin-left: 15px;
  /*padding-top: 20px;*/

}

h5 {
  color: #C8C9CA;
  font-size: 20pt;
  font-family: Helvetica, sans-serif;
  text-align: left;
  margin-left: 15px;
  /*padding-top: 20px;*/

}


h6 {
  color: #F08B2D;
  font-size: 20pt;
  font-family: Helvetica, sans-serif;
  text-align: left;
  margin-left: 15px;
  /*padding-top: 20px;*/
  min-width: 28em;
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

#image1 {
    display: block;
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
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
     background-color: #35B2E8;
     height: 175px;
     width: 175px;
     /*cursor: pointer;*/
}

.button2{
     float: center;
     background-color: #E95513;
     height: 175px;
     width: 175px;
     /*cursor: pointer;*/
}

.button3{
     float: center;
     background-color: #EEEEEF;
     height: 175px;
     width: 175px;
     /*cursor: pointer;*/
}

.button4{
     float: center;
     background-color: #F08B2D;
     height: 175px;
     width: 175px;
     /*cursor: pointer;*/
}

.button5
{
  background-color: white;
  color: #e7e7e7;
  border: 1px solid #595757;
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
}

.button5:hover {
    background-color: #e7e7e7;
    color: white;
}

.button6
{
  background-color: white;
  color: #e7e7e7;
  border: 1px solid #595757;
  text-align: center;

}

.button6:hover {
    background-color: #B6C9D3;
    color: white;
}

.button7{
     float: right;
     font-size: 10px;
     text-align: center;
     color: #FFF;
     background-color: #35B2E8;
     height: 20px;
     width: 70px;
     margin-left: auto;
     /*cursor: pointer;*/
}

.button8{
     float: right;
     font-size: 10px;
     text-align: center;
     color: #FFF;
     background-color: #E95513;
     height: 20px;
     width: 70px;
     margin-left: auto;
     /*cursor: pointer;*/
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
     /*cursor: pointer;*/
}

.button10{
     float: right;
     font-size: 10px;
     text-align: center;
     color: #FFF;
     background-color: #F08B2D;
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

</style>
