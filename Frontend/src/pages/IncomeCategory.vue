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
            <q-badge color="teal" style="font-size:20px;">จัดการประเภทรายรับ</q-badge>
          </div>
        </q-card-section>

        <!-- insert category-->
        <q-dialog v-model="prompt" persistent full-width>
          <q-card class="column items-center justify-around">
            <q-card-section>
              <div class="q-pa-md q-gutter-sm">
                <q-btn size="30px" round flat color="secondary" big @click="pic = true">
                  <q-avatar size="100px">
                    <img :src="img_path" />
                  </q-avatar>
                </q-btn>
              </div>
              <div class="text-h6">เพิ่มหมวดหมู่</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <q-input
                outlined
                v-model="name_category"
                autofocus
                @keyup.enter="prompt = false"
                placeholder="กรุณากรอกชื่อหมวดหมู่"
              />
            </q-card-section>
            <q-card-actions align="right" class="text-primary">
              <q-btn outline color="red" label="ยกเลิก" v-close-popup @click="prompt = true" />
              <q-btn outline color="green" label="ตกลง" v-close-popup @click="insert" />
            </q-card-actions>
            <q-dialog v-model="pic">
              <q-card>
                <q-card-section>
                  <div class="text-h6">กรุณาเลือกรูปภาพ</div>
                </q-card-section>

                <div class="row justify-center">
                  <q-btn
                    v-for="(img, index) in imgList"
                    :key="index"
                    flat
                    class="col-3"
                    v-close-popup
                    @click="setImgPath(img)"
                  >
                    <q-avatar size="50px">
                      <img :src="img" />
                    </q-avatar>
                  </q-btn>
                </div>
                <q-card-actions align="right">
                  <q-btn flat label="ตกลง" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-card>
        </q-dialog>
        <!-- insert category PID-->
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
                    <q-btn
                      v-if="item.fc_is_permanent == 'N'"
                      class="my-button"
                      style="background-color:#E8F3F5 ;width: 35px"
                    >
                      <q-icon
                        color="red"
                        name="img:statics/icons/delete.png"
                        @click="setItemID(item.fc_id)"
                      />
                    </q-btn>
                    <q-btn
                      v-else
                      disabled
                      class="my-button"
                      style="background-color:#E8F3F5 ;width: 35px"
                    >
                      <q-icon color="red" name="img:statics/icons/delete.png" />
                    </q-btn>
                    <q-dialog v-model="remove">
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
                                v-close-popup
                                @click="removeById()"
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
const financialCategoryAccount = new facade().getFinancialCategoryAccount();
const category = new facade().getFinancialCategory();
import storage from "../store/storage";
export default {
  data() {
    return {
      imgList: [
        "statics/incomeicons/bonus.png",
        "statics/incomeicons/lottery.png",
        "statics/incomeicons/market.png",
        "statics/incomeicons/money.png",
        "statics/incomeicons/salary.png",

        "statics/incomeicons/scholarship.png",
        "statics/incomeicons/reward.png",
        "statics/incomeicons/piggy.png"
      ],
      itemID: 0,
      alert: false,
      confirm: false,
      prompt: false,
      remove: false,
      type: null,
      pic: false,
      img_path: "statics/icons/piggypiggy.png",
      name_category: "",
      items: [],
      financialCategoryAccount: null
    };
  },
  mounted() {
    this.type = new category();
    this.financialCategoryAccount = new financialCategoryAccount();
    this.getByType();
  },

  methods: {
    getByType() {
      this.type.type = 2;
      this.type.getByType(storage.state.ac_id).then(result => {
        this.items = result.data;
      });
    },
    setImgPath(path) {
      this.img_path = path;
    },
    setItemID(id) {
      this.remove = true;

      this.itemID = id;
    },
    insert() {
      prompt = true;

      this.type.name = this.name_category;
      this.type.type = 2;
      this.type.img_path = this.img_path;

      this.type.insert().then(result => {
        this.financialCategoryAccount.ac_id = storage.state.ac_id;
        this.financialCategoryAccount.fc_id = result.id;
        this.financialCategoryAccount.insert().then(result => {});
        this.name_category = "";
        (this.img_path = "statics/icons/piggypiggy.png"), this.getByType();
        console.log(result);
      });
    },
    removeById() {
      this.type.id = this.itemID;
      this.type.removeById().then(result => {
        console.log(result);

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