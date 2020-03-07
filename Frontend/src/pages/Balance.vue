<style scoped>
p {
  font-size : 30px;
}
  .circle {
  height: 300px;
  width: 300px;
  background-color: #e6e600;
  border-radius: 50%;
  border: 10px solid white;
}
.col{
  color:teal;
  margin:auto;
}
.row{
  margin-left: 9px;
  margin-bottom: 50px;
  color:white;
  font-size: 40px;
}

</style>

<template>
  <q-page padding>
    <!-- content -->
      <div class="q-pa-md row justify-center">
        <p class="text-teal-8">กระเป๋าตังค์ของฉัน</p>
        
        <q-avatar class="circle" size="300px" font-size="25px" span="2,300 บาท">
           
    <div class="column" style="height: 150px">
      <div class="col justify-center" >ยอดเงินที่ใช้ได้</div>
      <div class="row" >2,300 บาท</div>
    </div>

        </q-avatar>
      </div>
      </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
