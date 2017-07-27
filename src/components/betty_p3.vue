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


<div class="layout-view" style="overflow-x: scroll; background-color: lightgrey; width:100%;">



<div class="openpage1" >
      <img src="statics/op_bluecard_1d.png"
      style="width: 272px; height: 371px">
      <div class="form_container" style="">
      <div><h1>Subject:</h1>
      <q-select type="list" v-model="select" :options="selectOptions"></q-select></p></div>

      <div><h2>Domain:</h2>
      <q-select type="list" v-model="select" :options="selectOptions2"></q-select></p></div>

      <div><h3>Sub-domain:</h3>
      <q-select type="list" v-model="select" :options="selectOptions3"></q-select></p></div>

      <div><h4>Particular:</h4>
      <q-select type="list" v-model="select" :options="selectOptions4"></q-select></p></div>
    </div>
    </div>
</div>



</div>

<div slot="footer" class="toolbar">

  <div class="group">
      <button class="button1"><img src="statics/footer_photo_1a.png"></button>
      <button class="button2"><span>VERTICAL</span><br><img src="statics/footer_vertical_1a.png"></button>
      <button class="button3"><span>SCAN</span><br><img src="statics/footer_scan_1a.png"></button>
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


.openpage1{
  position: relative;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top:6%
}
  .openpage1 .form_container{
    position: absolute;
    padding-left: 110px;
    top: 40px;
    left: 0px;
  }

h1 {
  margin-bottom: -5px;
  margin-left:-60px;
  font-size: 10pt;
  font-family: Helvetica, sans-serif;
  color: grey;
}
h2 {
  margin-top: -10px;
  margin-bottom: -5px;
  margin-left:-60px;
  font-size: 10pt;
  font-family: Helvetica, sans-serif;
  color: grey;
}
h3 {
  margin-top: -10px;
  margin-bottom: -5px;
  margin-left:-30px;
  font-size: 10pt;
  font-family: Helvetica, sans-serif;
  color: grey;
}
h4 {
  margin-top: -10px;
  margin-bottom: -5px;
  margin-left:-40px;
  font-size: 10pt;
  font-family: Helvetica, sans-serif;
  color: grey;
}


</style>


<script>
export default {
  data () {
    return {
      select: '',
      multipleSelect: ['goog', 'twtr'],
      selectOptions: [
        {
          label: '中文',
          value: 'sb1'
        },
        {
          label: 'English',
          value: 'sb2'
        },
        {
          label: '數學',
          value: 'sb3'
        },
        {
          label: '成長課',
          value: 'sb4'
        }
      ],

    select: '',
    multipleSelect: ['goog', 'twtr'],
    selectOptions2: [
      {
        label: 'Domain',
        value: 'dm1'
      },
      {
        label: 'Domain',
        value: 'dm2'
      },
      {
        label: 'Domain',
        value: 'dm3'
      },
      {
        label: 'Domain',
        value: 'dm4'
      }
    ],

  select: '',
  multipleSelect: ['goog', 'twtr'],
  selectOptions3: [
    {
      label: 'Sub-domain',
      value: 'sdm1'
    },
    {
      label: 'Sub-domain',
      value: 'sdm2'
    },
    {
      label: 'Sub-domain',
      value: 'sdm3'
    },
    {
      label: 'Sub-domain',
      value: 'sdm4'
    }
  ],

select: '',
multipleSelect: ['goog', 'twtr'],
selectOptions4: [
  {
    label: 'Particulars',
    value: 'part1'
  },
  {
    label: 'Particulars',
    value: 'part2'
  },
  {
    label: 'Particulars',
    value: 'part3'
  },
  {
    label: 'Particulars',
    value: 'part4'
  }
]
  }
  }
}
</script>
