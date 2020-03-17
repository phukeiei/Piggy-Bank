<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md">
      <q-card flat bordered class="card-content">
        <q-card class flat bordered>
          <div class="q-pa-md">
            <q-btn-dropdown
              class="full-width text-h6"
              color="teal"
              :label="year"
              dropdown-icon="change_history"
            >
              <q-list v-for="(Year, index) in yearList" :key="index">
                <q-item clickable v-close-popup @click="setYear">
                  <q-item-section>
                    <q-item-label class="text-h6">{{Year}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <!-- ปุ่มเลือกปี -->
          <div class="q-pa-md row items-start">
            <q-card class="full-width justify-center card-content bg-teal-1">
              <q-card-section class="bg-teal">
                <div class="text-h6 text-bold text-center text-white">ยอดสุทธิ์</div>
              </q-card-section>

              <q-card-section class="text-h6">
                <div class="row">
                  <div class="text-h6 col-6">
                    <i class="material-icons text-green">attach_money</i>
                    รายได้รวม
                  </div>
                  <div class="text-h6 col-6 text-right">{{totalIncome}}</div>
                </div>
              </q-card-section>
              <q-card-section class="text-h6">
                <div class="row">
                  <div class="text-h6 col-6">
                    <i class="material-icons text-red">attach_money</i>
                    รายจ่ายรวม
                  </div>
                  <div class="text-h6 col-6 text-right">{{totalExpence}}</div>
                </div>
              </q-card-section>
              <q-card-section class="text-h6">
                <div class="row">
                  <div class="text-h6 col-6">
                    <i class="material-icons text-blue">attach_money</i>
                    คงเหลือ
                  </div>
                  <div class="text-h6 col-6 text-right">{{create_month}} {{create_year}}</div>
                </div>
              </q-card-section>
              <q-separator dark />
            </q-card>
          </div>

          <!-- ยอดสุทธิ์ -->

          <q-list v-for="(month, i) in monthList" :key="i">
            <div class="q-pa-md row items-start justify-center">
              <q-card class="full-width card-content">
                <q-card-section class="bg-secondary text-white">
                  <div class="text-h6 text-center text-bold">{{month.month}}</div>
                </q-card-section>

                <q-card-section class="text-h6">
                  <div class="row">
                    <div class="text-h6 col-6">
                      <i class="material-icons text-green">attach_money</i>
                      รายได้รวม
                    </div>
                    <div class="text-h6 col-6 text-right">{{month.totalIncomePerMonth}}</div>
                  </div>
                </q-card-section>
                <q-card-section class="text-h6">
                  <div class="row">
                    <div class="text-h6 col-6">
                      <i class="material-icons text-red">attach_money</i>
                      รายจ่ายรวม
                    </div>
                    <div class="text-h6 col-6 text-right">{{month.totalExpencePerMonth}}</div>
                  </div>
                </q-card-section>
                <q-card-section class="text-h6">
                  <div class="row">
                    <div class="text-h6 col-6">
                      <i class="material-icons text-blue">attach_money</i>
                      คงเหลือ
                    </div>
                    <div class="text-h6 col-6 text-right">{{month.balancePerMonth}}</div>
                  </div>
                </q-card-section>
                <q-separator dark />
              </q-card>
            </div>
          </q-list>
          <!-- ยอดรายเดือน -->
        </q-card>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import facadeService from "../services/facade";
const accountService = new facadeService().getAccount();
const financeService = new facadeService().getFinance();

import storage from "../store/storage";
export default {
  data() {
    return {
      totalIncome: 14400,
      totalExpence: 10800,
      balance: 3600,
      finance: null,

      yearList: Array(new Date().getFullYear() - 2010 + 1)
        .fill()
        .map((_, idx) => 2010 + idx)
        .reverse(),
      year: new Date().getFullYear(),
      create_date:null,
      create_year:null,
      create_month:null,
      monthList: [
        {
          month: "มกราคม",
          totalIncomePerMonth: 159,
          totalExpencePerMonth: 60,
          balancePerMonth: 50
        },
        {
          month: "กุมภาพันธ์",
          totalIncomePerMonth: 159,
          totalExpencePerMonth: 60,
          balancePerMonth: 50
        },
        {
          month: "มีนาคม",
          totalIncomePerMonth: 159,
          totalExpencePerMonth: 60,
          balancePerMonth: 50
        }
      ]
    };
  },
  mounted() {
    this.account = new accountService();
    this.finance = new financeService();
    this.getById();
    this.getSummary();
  },
  methods: {
    setYear(data) {
      this.year = data.srcElement.textContent;
    },
    getById() {
      this.account.id = storage.state.ac_id;

      this.account.getById().then(result => {
          //console.log(result)
          this.create_date=result.data.ac_create_date

          this.create_year = this.create_date.substring(0, 4);
          this.create_month = this.create_date.substring(5, 7);
      });
    },
    getSummary(){
      this.finance.getSummary(1,this.account.id,this.create_year).then(result => {
          console.log(result)
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.card-content
  border-style: solid
  border-width: 2px
  border-color: teal
  width: 100%
  max-width: 100%
</style>