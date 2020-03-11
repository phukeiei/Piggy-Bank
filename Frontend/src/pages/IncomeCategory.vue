<template>
  <q-page padding>
    <div class="q-pa-md row q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-card-section align="left" class="bg-teal text-white">
          <div class="q-gutter-sm">
            <q-btn color="teal-5" icon="add" />
          </div>
        </q-card-section>

        <div class="q-pa-sm row items-start q-gutter-md">
          <q-card class="card-content">
            <div class="row" style="height:100%">
              <div style="margin:10px">
                <q-item-section avatar>
                  <q-icon color="primary" name="img:statics/icons/pizza.jpg" size="75px" />
                </q-item-section>
              </div>
              <q-item-section>
                <q-item-label class="text-center" color="teal">เงินเดือน</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-center">
                  <q-btn color="secondary" icon="remove" @click="dialog = true" />
                </q-item-label>
              </q-item-section>
            </div>
          </q-card>
        </div>

        <div class="q-pa-sm row items-start q-gutter-md">
          <q-card class="card-content">
            <div class="row" style="height:100%">
              <div style="margin:10px">
                <q-item-section avatar>
                  <q-icon color="primary" name="img:statics/icons/pizza.jpg" size="75px" />
                </q-item-section>
              </div>
              <q-item-section>
                <q-item-label class="text-center" color="teal">เงินเดือน</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-center">
                  <q-btn color="secondary" icon="remove" @click="dialog = true" />
                </q-item-label>
              </q-item-section>
            </div>
          </q-card>
        </div>
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

<style lang="sass" scoped>
.example-item
  height: 56px

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