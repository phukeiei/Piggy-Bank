<template>
  <q-page padding>

    <!-- main -->
    <q-card flat bordered class="my-card">
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


                </div>
              </q-card>
            </q-item>
          </div>

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