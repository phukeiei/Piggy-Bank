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
              <div class="row">dasdas</div>
              <div class="row">adasdffdg</div>
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
        <q-route-tab icon="arrow_back_ios" to="/accounts" exact />
        <q-route-tab icon="home" to="/index" exact />
        <q-route-tab icon="monetization_on" to="/balance" exact />
      </q-tabs>
    </q-footer>

    <div class="q-pa-md">
      <q-avatar size="250px" class="pic row justify-center">
        <q-img src="statics/icons/piggypiggy.png" :ratio="1" />
      </q-avatar>
      <div class="row block full-width">
        <q-btn color="white" class="full-width block" label="รายจ่าย" to="/expense" exact></q-btn>
      </div>
      <div class="row block full-width">
        <q-btn color="white" class="full-width block" label="รายรับ" to="/income" exact></q-btn>
      </div>
      <div class="row block full-width">
        <q-btn
          exact
          to="/summary"
          color="white"
          class="full-width block"
          label="สรุปรายรับ-รายจ่าย"
        ></q-btn>
      </div>
      <div class="row block full-width">
        <q-btn exact to="/expenseCategory" color="white" class="full-width block" label="จัดการประเภท"></q-btn>
      </div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.block {
  display: block;
  width: 100%;
  border: none;
  padding: 8px 20px;
  font-size: 22px;
  cursor: pointer;
  text-align: center;
  text-shadow: 10px;
  font-weight: bold;
  -webkit-text-fill-color: teal;
  border-radius: 15px;
}
.pic {
  margin-left: auto;
  margin-right: auto;
  margin: auto;
}
</style>