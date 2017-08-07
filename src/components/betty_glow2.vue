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
           <q-drawer-link to="/showcase/layout/toolbar">
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

<div style="text-align: center;">
    <h1>Values Stack</h1>
<h2>價值觀架構</h2>
<h3>以價值學習效果層次
<br>而不用分數評鑑學習成果</h3>
<h4>文字 文字 文字 文字 文字 文字 文字 文字 文字
文字 文字 文字 文字 文字 文字 文字 文字 文字
文字 文字 文字 文字 文字 文字 文字 文字 文字
文字 文字</h4>

</div>


    <div class="card" style="margin-top: 5px;">

      <div class="list item-delimiter">
        <q-collapsible label="個人發展">
          <!-- <div>新領域：價值觀架構
            <div class="openpage1" >
                  <div class="form_container" style="">
                  <q-select type="list" v-model="select" :options="selectOptions"></q-select></p>
                  </div>
             </div>
            </div> -->
            <p></p>
            價值觀和態度項目建議

        
        </q-collapsible>

        <q-collapsible label="群性發展">
          <div>群性發展
          </div>
        </q-collapsible>
        <q-collapsible label="學習發展">
          <div>學習發展
          </div>
        </q-collapsible>
      </div>
    </div>


</div>
  </q-layout>
</template>



<style>

h1 {
  color: #f29600;
  font-size: 25pt;
  font-family: Arial Rounded MT Bold, sans-serif;

}

h2 {
  color: #f7b52c;
  font-size: 20pt;
  font-family: 蘋方-繁, Helvetica, sans-serif;
  line-height: 1%
}

h3 {
  margin-top: 10%;
  color: grey;
  font-size: 16pt;
  font-family: 蘋方-繁, Helvetica, sans-serif;

}


h4 {
  margin: 5%;
  color: black;
  font-size: 12pt;
  font-family: Helvetica, sans-serif;
  line-height: 130%


}


.openpage1{
  position: relative;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top:15%
}
  .openpage1 .form_container{
    position: absolute;

    padding-left: 110px;
    top: 40px;
    left: 0px;
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
