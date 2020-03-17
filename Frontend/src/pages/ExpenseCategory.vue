<template>
  <q-page padding>
    <!-- footer -->
    <q-footer elevated style="background-color:teal">
      <q-tabs v-model="tab" inline-label class="bg-primary text-white shadow-2">
        <q-route-tab label="รายจ่าย" to="/expenseCategory" exact />
        <q-route-tab label="รายรับ" to="/incomeCategory" exact />
      </q-tabs>

      <q-tabs v-model="tab">
        <q-route-tab icon="arrow_back_ios" to="/index" exact />
        <q-route-tab icon="home" to="/index" exact />
        <q-route-tab icon="monetization_on" to="/balance" exact />
      </q-tabs>
    </q-footer>
    <!-- content -->

    <div class="q-pa-md row q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section align="left" class="bg-teal text-white">
          <div class="q-gutter-sm">
            <q-btn color="teal-5" icon="add" @click="prompt = true" />
            <q-dialog v-model="prompt" persistent full-width>
              <q-card class="column items-center justify-around">
                <q-card-section>
                  <div class="text-h6">เพิ่มหมวดหมู่</div>
                </q-card-section>

                <div class="q-pa-md q-gutter-sm">
                  <q-avatar
                    size="100px"
                    font-size="52px"
                    color="teal"
                    text-color="white"
                    icon="directions"
                  />
                </div>

                <q-card-section class="q-pt-none">
                  <q-input
                    dense
                    v-model="address"
                    autofocus
                    @keyup.enter="prompt = false"
                    placeholder="กรุณากรอกชื่อหมวดหมู่"
                  />
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                  <q-btn outline color="red" label="ยกเลิก" v-close-popup />
                  <q-btn outline color="green" label="ตกลง" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-card-section>

        <div v-for="(item, index) in items" :key="index" class="caption">
          <div class="q-pa-sm row items-start q-gutter-md">
            <q-card class="card-content">
              <div class="row" style="height:100%">
                <div style="margin:10px">
                  <q-item-section avatar>
                    <!-- <q-icon color="primary" :name="item.fc_img_path" size="75px" /> -->
                    <q-avatar>
                      <img :src="item.fc_img_path" />
                    </q-avatar>
                  </q-item-section>
                </div>
                <q-item-section>
                  <q-item-label class="text-center" color="teal">{{item.fc_name}}</q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-center">
                    <q-btn class="my-button" style="background-color:#E8F3F5 ;width: 35px">
                      <q-icon color="red" name="img:statics/icons/delete.png" />
                    </q-btn>
                    <!-- <q-icon name="img:statics/icons/delete.png" @click="dialog = true" /> -->
                    <q-dialog v-model="dialog">
                      <q-card style="width: 200px">
                        <q-card-section>
                          <div class="text-h7">ต้องการลบ "รายการ"?</div>
                        </q-card-section>
                        <q-card-section>
                          <div class="row">
                            <div class="col">
                              <q-btn
                                outline
                                class="text-right"
                                color="red"
                                label="ยกเลิก"
                                v-close-popup
                              />
                            </div>
                            <div class="col" align="right">
                              <q-btn
                                outline
                                class="text-left"
                                color="green"
                                label="ตกลง"
                                v-close-popup @click="insert"
                              />
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                  </q-item-label>
                </q-item-section>
              </div>
            </q-card>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import facade from "../services/facade";
const category = new facade().getFinancialCategory();
import storage from "../store/storage";
export default {
  data() {
    return {
      alert: false,
      confirm: false,
      prompt: false,
      dialog: false,
      type: null,

      address: "",
      items: []
    };
  },
  mounted() {
    this.type = new category();
    this.getByType();
  },
  
  methods: {
    getByType() {
      this.type.type = 1;
      this.type.getByType(storage.state.ac_id).then(result => {
        this.items = result.data;
      });
    },
    insert() {
      this.finance.type = 1;
      this.finance.fc_id = this.fc_id;
      this.finance.ac_id = storage.state.ac_id;

      this.finance.insert().then(result => {
        this.getByType();
      
      });
    }
    
  }
};
</script>

<style lang="sass" scoped>
.example-item
  height: 56px

  .my-button
    height: 35px
    width: 35px
    align-self: center
    margin-right: 15px

.my-card
  width: 100%
  max-width: 100%
  border-color: teal
  border-style: solid

.card-content
  width: 100%
  height: 100%
  max-width: 100%
  border-style: solid;
  border-width: 2px;
  border-color: teal;

.text-h7
  text-align: center
  font-size: large


</style>