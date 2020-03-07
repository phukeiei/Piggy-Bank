<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card col-11">
        <q-card-section align="left" class="bg-primary text-white">
          <div class="q-gutter-sm">
            <q-btn color="secondary" label="+" />
          </div>
        </q-card-section>

        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card" style="width: 100%">
            <q-card-section>
              <div class="row items-center justify-between">
                <div style="margin:20px">(ตัวอย่างรูป)</div>
                <q-card-section>เงินเดือน</q-card-section>
                <div class="q-pa-md q-gutter-sm">
                  <q-btn color="secondary" label="-" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card" style="width: 100%">
            <q-card-section>
              <div class="row items-center justify-between">
                <div style="margin:20px">(ตัวอย่างรูป)</div>
                <q-card-section>โบนัส</q-card-section>
                <div class="q-pa-md q-gutter-sm">
                  <q-btn color="secondary" label="-" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
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