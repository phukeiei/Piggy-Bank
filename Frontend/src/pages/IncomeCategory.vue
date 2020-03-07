<template>
  <q-page padding>
    <q-footer elevated style="background-color:teal">
      <q-tabs v-model="tab" inline-label class="bg-primary text-white shadow-2">
        <q-route-tab name="mails" icon="mail" label="รายจ่าย" to="/expenseCategory" exact />
        <q-route-tab name="alarms" icon="alarm" label="รายรับ" to="/incomeCategory" exact />
      </q-tabs>

      <q-tabs v-model="tab">
        <q-route-tab icon="arrow_back_ios" to="/index" exact />
        <q-route-tab icon="home" to="/index" exact />
        <q-route-tab icon="monetization_on" to="/balance" exact />
      </q-tabs>
    </q-footer>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
