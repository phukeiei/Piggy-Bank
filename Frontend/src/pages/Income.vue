<template>
  <q-page padding>
    <!-- footer -->
    <q-footer elevated style="background-color:teal">
      <q-tabs v-if="tabList.length>0" inline-label class="bg-primary text-white shadow-2">
        <q-tab
          v-for="(tab, index) in tabList"
          :key="index"
          name="tab"
          :label="tab.fc_name"
          @click="selectIncome(tab.fc_name, tab.fc_img_path, tab.fc_id)"
        />
      </q-tabs>

      <q-tabs>
        <q-route-tab icon="arrow_back_ios" to="/index" exact />
        <q-route-tab icon="home" to="/index" exact />
        <q-route-tab icon="monetization_on" to="/balance" exact />
      </q-tabs>
    </q-footer>

    <q-dialog v-model="dialogAdd">
      <q-card style="min-width: 350px;">
        <q-card-section>
          <div class="row">
            <div class="col">
              <q-avatar size="100px" class="q-mt-md">
                <q-img :src="img_path" :ratio="1" />
              </q-avatar>
            </div>
            <div class="column" style="height: 100px">
              <div class="col" align="center" style="font-size: 20px">{{IncomeType}}</div>
              <div class="col">
                <q-input dense v-model="balance" autofocus @keyup.enter="prompt = false" />
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <div class="col">
            <q-btn outline color="red" label="ยกเลิก" v-close-popup />
          </div>
          <div class="col" align="right">
            <q-btn outline color="green" label="บันทึก" v-close-popup @click="insert" />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- main -->
    <div class="q-pa-md row q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-btn icon="event" color="teal" class="full-width row">
          <div class="q-pa-md">
            <q-badge color="teal" style="font-size:20px; padding:5px">{{ date }}</q-badge>
          </div>
          <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="proxyDate" mask="YYYY-MM-DD">
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn label="Cancel" color="primary" flat v-close-popup />
                <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-btn>

        <q-card-actions vertical>
          <q-list>
            <q-item>
              <q-card class="my-card card-content bg-teal-1">
                <div class="row text-center" style="box-shadow: 2px 2px 5px #008080">
                  <q-item-section>
                    <q-item-label class="fontbold" style="color:#008080">รายจ่ายรวม</q-item-label>
                  </q-item-section>
                  <q-item-section class="my-section">
                    <q-item-label class="fontbold" style="color:#008080">{{totalIncome}} บาท</q-item-label>
                  </q-item-section>
                </div>
              </q-card>
            </q-item>

            <div v-for="(item, index) in items" :key="index" class="caption">
              <q-item clickable>
                <q-card class="my-card card-content">
                  <div class="row" style="box-shadow: 2px 2px 5px #008080">
                    <q-item-section class="avartar">
                      <q-avatar>
                        <img :src="item.fc_img_path" />
                      </q-avatar>
                    </q-item-section>

                    <q-item-section class="my-section">
                      <q-item-label class="fontbold" style="color:#008080">{{item.fc_name}}</q-item-label>
                      <q-item-label caption>{{item.fn_balance}} บาท</q-item-label>
                    </q-item-section>

                    <q-btn class="my-button" style="background-color:#E8F3F5">
                      <q-icon
                        color="red"
                        name="img:statics/icons/delete.png"
                        @click="setItemID(item.fn_id)"
                      />
                    </q-btn>
                  </div>
                </q-card>
              </q-item>
            </div>

            <template v-slot:loading>
              <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
              </div>
            </template>
            <q-dialog v-model="dialog">
              <q-card style="min-width: 200px">
                <q-card-section>
                  <div class="text-h6">ต้องการลบ "รายการ"?</div>
                </q-card-section>
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <q-btn outline class="text-right" color="red" label="ยกเลิก" v-close-popup />
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
          </q-list>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.example-item
  height: 56px

.my-card
  width: 100%
  max-width: 100%
  border-color: teal
  border-style: solid
  
.card-content
  border-style: solid;
  border-width: 2px;
  border-color: teal;

.my-section
  width: 250px
  height: 100px

.my-button
  height: 35px
  width: 35px
  align-self: center
  margin-right: 15px
  

.avartar
  align-self: center
  margin-left: 10px

.fontbold
  font-weight: bold

</style>

<script>
import facadeService from "../services/facade";
const financeService = new facadeService().getFinance();
const financialCategoryService = new facadeService().getFinancialCategory();

import storage from "../store/storage";

import dateHelper from "../helper/dateHelper";

export default {
  data() {
    return {
      itemID: 0,
      finance: null,
      financialCategory: null,
      items: [],
      totalIncome: 0,
      date: "",
      proxyDate: "",
      dialog: false,
      dialogAdd: false,
      tabList: [],
      incomeType: "",
      img_path: "statics/icons/MindControl.PNG",
      fc_id: 0,
      balance: 0
    };
  },

  methods: {
    selectIncome(tab, path, fc_id) {
      this.dialogAdd = true;
      this.IncomeType = tab;
      this.img_path = path;
      this.fc_id = fc_id;
    },
    updateProxy() {
      this.proxyDate = this.date;
    },
    save() {
      this.date = this.proxyDate;

      this.getByType();
    },
    setItemID(id) {
      this.dialog = true;

      this.itemID = id;
    },
    getByType() {
      this.finance.type = 2;
      this.finance.ac_id = storage.state.ac_id;
      this.finance.create_date = this.proxyDate;
      this.finance.getByType().then(result => {
        this.items = result.data;
        this.totalIncome = 0;
        this.items.forEach(element => {
          this.totalIncome += element.fn_balance;
        });
      });
    },
    getCategory() {
      this.financialCategory.type = 2;

      this.financialCategory.getByType(storage.state.ac_id).then(result => {
        this.tabList = result.data;
      });
    },
    insert() {
      this.finance.type = 2;
      this.finance.balance = this.balance;
      this.finance.create_date = this.proxyDate;
      this.finance.fc_id = this.fc_id;
      this.finance.ac_id = storage.state.ac_id;

      this.finance.insert().then(result => {
        this.getByType();
        this.balance = 0;
      });
    },
    removeById() {
      this.finance.id = this.itemID;
      this.finance.removeById().then(result => {
        this.getByType();
      });
    }
  },
  mounted() {
    this.date = new dateHelper().getCurrentDate();
    this.proxyDate = this.date;

    this.finance = new financeService();
    this.financialCategory = new financialCategoryService();

    this.getByType();
    this.getCategory();
  }
};
</script>


