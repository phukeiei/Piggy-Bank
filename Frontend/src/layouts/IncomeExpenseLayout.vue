<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar style="background-color:teal">
        <q-toolbar-title>
          <q-avatar>
            <img src="statics/app-logo-128x128.png" />
          </q-avatar>รายรับ - รายจ่าย
        </q-toolbar-title>
        <div>
          <q-btn exact to="/accounts" class="text-teal bg-white">
            <q-avatar icon="group" to="/index" exact />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer elevated style="background-color:teal">
      <q-tabs v-model="tab" inline-label class="bg-primary text-white shadow-2">
        <q-tab name="mails" label="อาหาร" />
        <q-tab name="alarms" label="การเดินทาง" />
        <q-tab name="movies" label="เสื้อผ้า" />
        <q-tab name="photos" label="เครื่องดื่ม" />
        <q-tab name="videos" label="Videos" />
        <q-tab name="addressbook" label="Address Book" />
      </q-tabs>

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