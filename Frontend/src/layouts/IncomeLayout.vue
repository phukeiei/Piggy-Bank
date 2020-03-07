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
        <q-tab name="salary" label="เงินเดือน" @click="dialog = true" />
        <q-tab name="bonus" label="โบนัส" @click="dialog = true"/>
        <q-tab name="Extraincome" label="รายได้เสริม" @click="dialog = true" />
        <q-tab name="other" label="อื่น ๆ" @click="dialog = true"/>
      </q-tabs>

      <q-tabs v-model="tab">
        <q-route-tab icon="arrow_back_ios" to="/index" exact />
        <q-route-tab icon="home" to="/index" exact />
        <q-route-tab icon="monetization_on" to="/balance" exact />
      </q-tabs>

       <q-dialog v-model="dialog">
                <q-card style="min-width: 350px">
                  <q-card-section>
                     
                       <div class="row">
                          <div class="col">
                          <q-avatar size="100px" class="q-mt-md">
                          <q-img src="statics/icons/salary.png" :ratio="1" />
                          </q-avatar>
                          </div>
                        <div class="column" style="height: 100px">
                            <div class="col" align="center" >เงินเดือน</div>
                             <div class="col">
                            <q-input  dense v-model="address" autofocus @keyup.enter="prompt = false" />
                         </div>
                        </div>
                      </div>
                      
                  </q-card-section>
                  
              <!-- <q-card-section class="q-pt-none" >
              <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
              </q-card-section> -->

        <q-card-actions align="right" class="text-primary">
          <div class="col" text-align:center>
          <q-btn flat color="red" label="ยกเลิก" v-close-popup />
          </div>
          <div class="col-4" text-align:center>
          <q-btn flat color="green" label="บันทึก" v-close-popup />
          </div>
        </q-card-actions>
      </q-card>
      </q-dialog>

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
      tab: "images",
      dialog: false,
      dialog2: false
    };
  }
};
</script>