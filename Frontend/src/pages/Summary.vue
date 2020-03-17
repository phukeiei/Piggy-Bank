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
                  <div class="text-h6 col-6 text-right">{{totalIncome-totalExpence}}</div>
                </div>
              </q-card-section>
              <q-separator dark />
            </q-card>
          </div>

          <!-- ยอดสุทธิ์ -->

          <q-list v-for="(mm, index) in monthList" :key="index">
            <div class="q-pa-md row items-start justify-center">
              <q-card class="full-width card-content">
                <q-card-section class="bg-secondary text-white">
                  <div class="text-h6 text-center text-bold">{{mm.name}}</div>
                </q-card-section>

                <q-card-section class="text-h6">
                  <div class="row">
                    <div class="text-h6 col-6">
                      <i class="material-icons text-green">attach_money</i>
                      รายได้รวม
                    </div>
                    <div class="text-h6 col-6 text-right">{{mm.totalIncomePerMonth}}</div>
                  </div>
                </q-card-section>
                <q-card-section class="text-h6">
                  <div class="row">
                    <div class="text-h6 col-6">
                      <i class="material-icons text-red">attach_money</i>
                      รายจ่ายรวม
                    </div>
                    <div class="text-h6 col-6 text-right">{{mm.totalExpencePerMonth}}</div>
                  </div>
                </q-card-section>
                <q-card-section class="text-h6">
                  <div class="row">
                    <div class="text-h6 col-6">
                      <i class="material-icons text-blue">attach_money</i>
                      คงเหลือ
                    </div>
                    <div
                      class="text-h6 col-6 text-right"
                    >{{mm.totalIncomePerMonth - mm.totalExpencePerMonth}}</div>
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
      totalIncome: 0,
      totalExpence: 0,
      balance: 0,

      yearList: Array(new Date().getFullYear() - 2015 + 1)
        .fill()
        .map((_, idx) => 2015 + idx)
        .reverse(),
      year: new Date().getFullYear(),
      create_date: null,
      create_year: null,
      monthList: [
        {
          name: "มกราคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "กุมภาพันธ์",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "มีนาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "เมษายน",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "พฤษภาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "มิถุนายน",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "กรกฎาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "สิงหาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "กันยายน",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "ตุลาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "พฤศจิกายน",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "ธันวาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        }
      ]
    };
  },
  mounted() {
    this.account = new accountService();
    this.finance = new financeService();
    this.getById();
    this.getSummaryIncome();
    this.getSummaryExpense();
  },
  methods: {
    setYear(data) {
      this.year = data.srcElement.textContent;
      this.getById();
      this.getSummaryIncome();
      this.getSummaryExpense();
      this.totalIncome= 0
      this.totalExpence= 0
      this.balance= 0
      this.monthList= [
        {
          name: "มกราคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "กุมภาพันธ์",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "มีนาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "เมษายน",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "พฤษภาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "มิถุนายน",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "กรกฎาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "สิงหาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "กันยายน",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "ตุลาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "พฤศจิกายน",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        },
        {
          name: "ธันวาคม",
          totalIncomePerMonth: 0,
          totalExpencePerMonth: 0
        }
      ]
    },
    getById() {
      this.account.id = storage.state.ac_id;

      this.account.getById().then(result => {
        this.create_date = result.data.ac_create_date;

        this.create_year = this.create_date.substring(0, 4);
      });
    },
    getSummaryIncome() {
      this.finance.type = 2;
      this.finance.ac_id = this.account.id;
      this.finance.year = this.year.toString();
      this.finance.getSummary().then(result => {
        //this.monthList["income"]=result.data;
        //console.log(this.monthList)
        // result.data.forEach((element,index) => {
        //   if(parseInt(element.month) != index+1)
        //   console.log(index+1)
        // });

        // console.log(result.data)
        // for (let index = 0; index < 12; index++) {
        //    if(parseInt(result.data[index].month) == index+1){
        //       console.log(result.data[index].month)
        //    }
        // console.log(parseInt(result.data[index].Total))

        result.data.forEach(element => {
          this.monthList[parseInt(element.month) - 1].totalIncomePerMonth =
            element.Total;
          this.totalIncome += element.Total;
        });
        //console.log(this.monthList)
      });
    },
    getSummaryExpense() {
      this.finance.type = 1;
      this.finance.ac_id = this.account.id;
      this.finance.year = this.year.toString();
      this.finance.getSummary().then(result => {
        //console.log(this.monthList)
        result.data.forEach(element => {
          this.monthList[parseInt(element.month) - 1].totalExpencePerMonth =
            element.Total;
          this.totalExpence += element.Total;
        });
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