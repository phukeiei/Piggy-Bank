<template>
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