import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [

    { path: '/intro', component: load('Index') }, // Default
    { path: '/myname', component: load('myname') }, // myname
    { path: '/ani', component: load('ani') }, // test the svg animation
    { path: '/betty_op1', component: load('betty_op1') }, //
    { path: '/betty_p0', component: load('betty_p0') }, //
    { path: '/betty_p2', component: load('betty_p2') }, //
    { path: '/betty_p3', component: load('betty_p3') }, //
    { path: '/betty_p4', component: load('betty_p4') }, //
    { path: '/betty_p5', component: load('betty_p5') }, //
    { path: '/betty', component: load('betty') }, // testing
    { path: '/betty_p6', component: load('betty_p6') }, //
    { path: '/betty_glow1', component: load('betty_glow1') }, //
    { path: '/betty_but', component: load('betty_but') }, //
    { path: '/', component: load('layout/main-layout') }, // Main-Layout
    { path: '*', component: load('Error404') } // Not found
  ]
})
