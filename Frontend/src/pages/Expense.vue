<template>
  <q-page padding>
    <!-- footer -->

    <!-- main -->
    <div class="q-pa-md row q-gutter-md">
      <q-card flat bordered class="my-card">
        <q-btn icon="event" color="teal" class="full-width row">
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
        </q-btn>

        <q-card-actions vertical>
          <q-list>
            <q-infinite-scroll @load="onLoad" :offset="250">
              <div v-for="(item, index) in items" :key="index" class="caption">
                <q-item clickable>
                  <q-card class="my-card">
                    <div class="row" style="box-shadow: 2px 2px 5px #008080">
                      <q-item-section avatar class="avartar">
                        <q-icon
                          color="red"
                          name="img:statics/icons/travel.jpg"
                          size="60px"
                          @click="dialog = true"
                        />
                      </q-item-section>

                      <q-item-section class="my-section">
                        <q-item-label class="fontbold" style="color:#008080">Bar XYZ</q-item-label>
                        <q-item-label caption>Have a drink.</q-item-label>
                      </q-item-section>

                      <q-btn class="my-button" style="background-color:#E8F3F5">
                        <q-icon
                          color="red"
                          name="img:statics/icons/delete.png"
                          @click="dialog = true"
                        />
                      </q-btn>
                    </div>
                  </q-card>
                </q-item>
              </div>

              <template v-slot:loading>
                <div class="row justify-center q-my-md">
                  <q-spinner-dots color="primary" size="40px" />
                </div>
              </template>
              <q-dialog v-model="dialog">
                <q-card style="min-width: 200px">
                  <q-card-section>
                    <div class="text-h6">ต้องการลบ "รายการ"?</div>
                  </q-card-section>
                  <q-card-section>
                    <div class="row">
                      <div class="col">
                        <q-btn outline class="text-right" color="red" label="ยกเลิก" v-close-popup />
                      </div>
                      <div class="col" align="right">
                        <q-btn outline class="text-left" color="green" label="ตกลง" v-close-popup />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-dialog>
              <template></template>
            </q-infinite-scroll>
          </q-list>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.example-item
  height: 56px

.my-card
  width: 100%
  max-width: 100%
  border-color: #008080
  border-style: solid
  

  

.my-section
  width: 250px
  height: 100px

.my-button
  height: 35px
  width: 35px
  align-self: center
  margin-right: 15px
  

.avartar
  align-self: center
  margin-left: 10px

.fontbold
  font-weight: bold

</style>

<script>
export default {
  data() {
    return {
      items: [{}, {}, {}, {}, {}, {}, {}],
      date: "2019/03/01",
      proxyDate: "2019/03/01",
      dialog: false
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
    }
  }
};
</script>


