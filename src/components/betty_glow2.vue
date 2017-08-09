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

<div style="text-align: center;">
    <h1>Values Stack</h1>
<h2>價值觀架構</h2>
<h3>以價值學習效果層次
<br>而不用分數評鑑學習成果</h3>
<h4>文字 文字 文字 文字 文字 文字 文字 文字 文字
文字 文字 文字 文字 文字 文字 文字 文字 文字
文字 文字 文字 文字 文字 文字 文字 文字 文字</h4>


</div>




    <div style="margin-top: 5px; width:100%;">

      <div class="list item-delimiter">
        <div style="background-color:#c6add8;">
        <q-collapsible label="個人發展" style="padding-right:-100px;">
            <div class="row gutter wrap" style="background-color:#FFF; padding-top:10px;">
              <div class="auto" >
                <div class="box1">新領域：價值觀架構
                  <br><q-select type="list" v-model="select1" :options="selectOptions"></q-select>
                </div></div>
                <div class="auto" >
                  <div class="box1">價值觀和態度項目建議
                    <br><q-select type="list" v-model="select2" :options="selectOptions2"></q-select>

                  </div>
            </div>
            </div>
            <div class="row gutter sm-column">
              <div class="auto" style="text-align: center;">
                <div id="example-3"><button class="button1" @click="clickMethod()">確定</button>
              </div>
            </div>
            </div>
        </q-collapsible></div>


        <div style="background-color:#d4bce2;">
        <q-collapsible label="群性發展" style="padding-right:-100px;">
            <div class="row gutter wrap" style="background-color:#FFF; padding-top:10px;">
              <div class="auto" >
                <div class="box1">新領域：價值觀架構
                  <br><q-select type="list" v-model="select3" :options="selectOptions3"></q-select>
                </div></div>
                <div class="auto" >
                  <div class="box1">價值觀和態度項目建議
                    <br><q-select type="list" v-model="select4" :options="selectOptions4"></q-select>

                  </div>
            </div>
            </div>
            <div class="row gutter sm-column">
              <div class="auto" style="text-align: center;">
                <button class="button1" @click="clickMethod()">確定</button>
              </div>
            </div>
        </q-collapsible></div>


        <div style="background-color:#dccae4;">
        <q-collapsible label="學習發展" style="padding-right:-100px;">
            <div class="row gutter wrap" style="background-color:#FFF; padding-top:10px;">
              <div class="auto" >
                <div class="box1">新領域：價值觀架構
                  <br><q-select type="list" v-model="select5" :options="selectOptions5"></q-select>
                </div></div>
                <div class="auto" >
                  <div class="box1">價值觀和態度項目建議
                    <br><q-select type="list" v-model="select6" :options="selectOptions6"></q-select>
                  </div>
            </div>
            </div>
            <div class="row gutter sm-column">
              <div class="auto" style="text-align: center;">
                <button class="button1" @click="clickMethod()">確定</button>
              </div>
            </div>
        </q-collapsible></div>

        <div style="background-color:#f6e6ff;">
        <q-collapsible label="事業發展" style="padding-right:-100px;">
            <div class="row gutter wrap" style="background-color:#FFF; padding-top:10px;">
              <div class="auto" >
                <div class="box1">新領域：價值觀架構
                  <br><q-select type="list" v-model="select7" :options="selectOptions7"></q-select>
                </div></div>
                <div class="auto" >
                  <div class="box1">價值觀和態度項目建議
                    <br><q-select type="list" v-model="select8" :options="selectOptions8"></q-select>
                  </div>
            </div>
            </div>
            <div class="row gutter sm-column">
              <div class="auto" style="text-align: center;">
                <button class="button1" @click="clickMethod()">確定</button>
              </div>
            </div>
        </q-collapsible></div>



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


  .box1{
    position: relative;
    display: block;
    text-align: center;
    /*background-color: #f7dbaa;*/
    padding-bottom: 10px;
  }

  .button1{
       background-color: #f4f4f4;
       height: 50px;
       width: 50%;
       padding: 0%;
       font-size: 16px;

       /*cursor: pointer;*/
  }
</style>


<script>
export default {
  data () {
    return {
      select1: '',
      multipleSelect: ['goog', 'twtr'],
      selectOptions: [
        {
          label: '人與自己',
          value: 'per1'
        },
        {
          label: '人與家庭',
          value: 'per2'
        }
      ],
    select2: '',
    multipleSelect: ['goog', 'twtr'],
    selectOptions2: [
      {
        label: '健康的成長',
        value: 'sto1'
      },
      {
        label: '家庭與親情',
        value: 'sto2'
      }
    ],
    methods: {
      say: function (message) {
        alert(message)
      }
    },

    select3: '',
    multipleSelect: ['goog', 'twtr'],
    selectOptions3: [
      {
        label: '人與祖國',
        value: 'per3'
      },
      {
        label: '人與社會',
        value: 'per4'
      }
    ],
    select4: '',
    multipleSelect: ['goog', 'twtr'],
    selectOptions4: [
      {
        label: '祖國情懷',
        value: 'sto3'
      },
      {
        label: '建立美好社會',
        value: 'sto4'
      }
    ],

    select5: '',
    multipleSelect: ['goog', 'twtr'],
    selectOptions5: [
      {
        label: '人與環境',
        value: 'per5'
      },
      {
        label: '人與科學',
        value: 'per6'
      }
    ],
    select6: '',
    multipleSelect: ['goog', 'twtr'],
    selectOptions6: [
      {
        label: '共享優美環境',
        value: 'sto5'
      },
      {
        label: '科學與科技',
        value: 'sto6'
      }
    ],

    select7: '',
    multipleSelect: ['goog', 'twtr'],
    selectOptions7: [
      {
        label: '人與世界',
        value: 'per7'
      },
      {
        label: '人與資訊',
        value: 'per8'
      }
    ],
    select8: '',
    multipleSelect: ['goog', 'twtr'],
    selectOptions8: [
      {
        label: '世界一家親',
        value: 'sto7'
      },
      {
        label: '資訊與生活',
        value: 'sto8'
      }
    ],


}
}
}

</script>
