<style scoped>
p {
  font-size: 30px;
  color: darkcyan;
}
.circle {
  height: 300px;
  width: 300px;
  background-color: #ecdb3f;
  border-radius: 50%;
  border: 10px solid white;
}
.col {
  color: black;
  margin: auto;
}
.row {
  margin-left: 9px;
  margin-bottom: 50px;
  color: white;
  font-size: 40px;
}
</style>

<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md row justify-center">
      <p class="text-dark">กระเป๋าตังค์ของฉัน</p>
      <q-img src="statics/icons/piggypiggy.png" style="height: 150px; max-width: 150px"/>
      <q-avatar class="circle" size="300px" font-size="25px">
        <div class="column" style="height: 150px">
          <div class="col justify-center">ยอดเงินที่ใช้ได้</div>
          <div class="row" color="grey-1">{{total_income - total_expence}} บาท</div>
        </div>
      </q-avatar>
    </div>
  </q-page>
</template>

<script>
import facadeService from "../services/facade";
import storage from "../store/storage";
const financeService = new facadeService().getFinance();
export default {
  data() {
    return {  
      total_income: 0 ,//รายได้รวม
      total_expence: 0 //รายจ่ายรวม

    };
  },mounted(){
    this.finance = new financeService();
    this.getIncome();
    this.getExpense();

  },methods: {
    getIncome(){
      this.finance.type = 2;
      this.finance.ac_id = storage.state.ac_id;
      this.finance.getBalance().then(result => {
      this.total_income = parseInt(result.data.Total);
      console.log(this.total_income)
      });
    },
    getExpense(){
      this.finance.type = 1;
      this.finance.ac_id = storage.state.ac_id;
      this.finance.getBalance().then(result => {
        this.total_expence = parseInt(result.data.Total);
      console.log(this.total_expence)
      });
    }
  },
};
</script>
