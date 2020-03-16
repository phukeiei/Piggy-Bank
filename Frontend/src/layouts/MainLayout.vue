<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar style="background-color:teal" class="row">
        <q-toolbar-title class="col">
          <div class="row">
            <div style="margin: 5px">
              <q-avatar size="55px">
                <img src="statics/icons/MindControl.PNG" />
              </q-avatar>
            </div>
            <div style="margin-left: 10px">
              <div class="row">MINTZAA</div>
              <div class="row">Menu</div>
            </div>
          </div>
        </q-toolbar-title>
        <div class="col">
          <div class="row justify-end">
            <q-btn exact to="/accounts" class="text-teal bg-white">
              <q-avatar icon="group" to="/index" exact />
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer elevated style="background-color:teal">
      <q-tabs v-model="tab">
        <q-route-tab icon="arrow_back_ios" to="/index" exact />
        <q-route-tab icon="home" to="/index" exact />
        <q-route-tab icon="monetization_on" to="/balance" exact />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "images"
    };
  }
};
</script>