<template>
<q-layout>
  <div slot="header" class="toolbar">
    <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
        <i>menu</i>
      </button>
    <q-toolbar-title :padding="1">
      Quasar Layout
    </q-toolbar-title>
  </div>

  <!-- Navigation Tabs  -->
  <q-tabs slot="navigation">
    <q-tab icon="home" route="/intro" exact replace>Introduction</q-tab>
    <q-tab icon="account_box" route="/user" exact replace>User</q-tab>
    <q-tab icon="assignment" route="/writes" exact replace>OpenPage Writes</q-tab>
    <q-tab icon="book" route="/pagination" exact replace>Pagination</q-tab>
    <q-tab icon="dashboard" route="/eplatform" exact replace>ePlatform</q-tab>
    <q-tab icon="build" route="/config" exact replace>System Config</q-tab>
  </q-tabs>


  <!-- Drawer  -->
  <q-drawer ref="leftDrawer">
    <div class="list no-border platform-delimiter">
      <q-toolbar-title :padding="1">
        Dynamic Title Index
      </q-toolbar-title>
      <q-toolbar-title :padding="1">
        Dynamic Title Index
      </q-toolbar-title>
      <q-toolbar-title :padding="1">
        Dynamic Title Index
      </q-toolbar-title>
    </div>
  </q-drawer>


  <router-view class="layout-view"></router-view>

  <!-- Footer  -->
  <div slot="footer" class="toolbar">
    <p>Footer information Copyright</p>
  </div>

</q-layout>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
</style>
