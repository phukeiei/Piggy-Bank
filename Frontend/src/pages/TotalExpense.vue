<template>
  <q-page padding>
    <q-footer elevated style="background-color:teal">
      <q-tabs v-model="tab" inline-label class="bg-primary text-white shadow-2">
        <q-route-tab name="mails" icon="mail" label="ภาพรวม" to="/summary" exact />
        <q-route-tab name="alarms" icon="alarm" label="รายจ่าย" to="/totalExpense" exact />
        <q-route-tab name="movies" icon="movie" label="รายรับ" to="/totalIncome" exact />
      </q-tabs>

      <q-tabs v-model="tab">
        <q-route-tab icon="arrow_back_ios" to="/index" exact />
        <q-route-tab icon="home" to="/index" exact />
        <q-route-tab icon="monetization_on" to="/balance" exact />
      </q-tabs>
    </q-footer>
    <!-- content -->

    <!-- main -->
    <q-card flat bordered class="my-card">
      <!-- <q-btn icon="event" color="teal" class="full-width row">
        <div class="q-pa-md">
          <q-badge color="teal" style="font-size:20px; padding:5px">{{ date }}</q-badge>
        </div>
        <q-popup-proxy @before-show="updateProxy" transition-show="scale" transition-hide="scale">
          <q-date v-model="proxyDate">
            <div class="row items-center justify-end q-gutter-sm">
              <q-btn label="Cancel" color="primary" flat v-close-popup />
              <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-btn>-->

      <div class="q-pa-md">
        <q-btn-dropdown color="teal" :label="year" dropdown-icon="change_history">
          <q-list v-for="(item, index) in yearList" :key="index">
            <q-item clickable v-close-popup @click="setYear">
              <q-item-section>
                <q-item-label>{{item}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>

      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section></q-item-section>
          <q-item-section>
            <q-item-label>รายจ่ายรวม</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>7,777</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>บาท</q-item-label>
          </q-item-section>
        </q-item>
      </q-card>

      <q-card-actions vertical>
        <q-list>
          <div v-for="(item, index) in items" :key="index" class="caption">
            <q-item clickable>
              <q-card class="my-card">
                <div class="row">
                  <q-item-section avatar>
                    <q-icon color="primary" name="local_bar" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>Bar XYZ</q-item-label>
                    <q-item-label caption>Have a drink.</q-item-label>
                  </q-item-section>

                  <q-btn>
                    <q-icon color="red" name="delete" @click="dialog = true" />
                  </q-btn>
                </div>
              </q-card>
            </q-item>
          </div>
          <q-dialog v-model="dialog2">
            <q-card>
              <q-card-section>
                <div class="text-h6">ลบรายการเสร็จสิ้น</div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="ตกลง" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-list>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style lang="sass" scoped>
.example-item
  height: 56px

.my-card
  width: 100%
  max-width: 100%
</style>

<script>
export default {
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}],
      yearList: Array(new Date().getFullYear() - 2010 + 1)
        .fill()
        .map((_, idx) => 2010 + idx)
        .reverse(),
      date: "2019/03/01",
      proxyDate: "2019/03/01",
      dialog: false,
      dialog2: false,

      year: new Date().getFullYear()
    };
  },

  methods: {
    onLoad(index, done) {
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {}, {}, {}, {}, {}, {});
          done();
        }
      }, 2000);
    },
    updateProxy() {
      this.proxyDate = this.date;
    },
    save() {
      this.date = this.proxyDate;
    },
    setYear(data) {
      this.year = data.srcElement.textContent
    }
  }
};
</script>