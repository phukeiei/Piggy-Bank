<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar style="background-color:teal" class="row">
        <q-toolbar-title class="col">
          <div class="row">
            <div style="margin: 5px">
              <q-avatar size="55px">
                <img :src="img_path" />
              </q-avatar>
            </div>
            <div style="margin-left: 10px">
              <div class="row">{{acountName}}</div>
              <div class="row">{{menu_title}}</div>
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
import storage from '../store/storage';
import facadeService from '../services/facade';
const accountService = new facadeService().getAccount();

export default {
  data() {
    return {
      menu_title: "Menu",
      account: null,

      tab: "images",
      img_path: "statics/icons/MindControl.PNG",
      acountName: ""
    };
  },
  mounted() {
    this.account = new accountService();

    this.getById();
  },
  methods: {
    getById() {
      this.account.id = storage.state.ac_id;

      this.account.getById().then(result => {
        this.acountName = result.data.ac_name;
        this.img_path = result.data.ac_img_path;
      });
    },
    getMenu() {
      return storage.state.menu_title;
    }
  }
};
</script>