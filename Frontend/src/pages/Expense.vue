<template>
  <q-page padding>
    <!-- footer -->
    <q-footer elevated style="background-color:teal">
      <q-tabs
        v-if="tabList.length>0"
        v-model="tab"
        inline-label
        class="bg-primary text-white shadow-2"
      >
        <q-tab
          v-for="(tab, index) in tabList"
          :key="index"
          name="tab"
          :label="tab.name"
          @click="selectExpense(tab.name)"
        />
      </q-tabs>

      <q-tabs v-model="tab">
        <q-route-tab icon="arrow_back_ios" to="/index" exact />
        <q-route-tab icon="home" to="/index" exact />
        <q-route-tab icon="monetization_on" to="/balance" exact />
      </q-tabs>
    </q-footer>

    <q-dialog v-model="dialogAdd">
      <q-card style="min-width: 350px;">
        <q-card-section>
          <div class="row">
            <div class="col">
              <q-avatar size="100px" class="q-mt-md">
                <q-img src="statics/icons/salary.png" :ratio="1" />
              </q-avatar>
            </div>
            <div class="column" style="height: 100px">
              <div class="col" align="center" style="font-size: 20px">{{expenseType}}</div>
              <div class="col">
                <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <div class="col">
            <q-btn outline color="red" label="ยกเลิก" v-close-popup />
          </div>
          <div class="col" align="right">
            <q-btn outline color="green" label="บันทึก" v-close-popup />
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
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
            <q-item>
              <q-card class="my-card card-content bg-teal-1">
                <div class="row text-center" style="box-shadow: 2px 2px 5px #008080">
                  <q-item-section>
                    <q-item-label class="fontbold" style="color:#008080">รายจ่ายรวม</q-item-label>
                  </q-item-section>
                  <q-item-section class="my-section">
                    <q-item-label class="fontbold" style="color:#008080">{{totalExpense}} บาท</q-item-label>
                  </q-item-section>
                </div>
              </q-card>
            </q-item>

            <q-infinite-scroll @load="onLoad" :offset="250">
              <div v-for="(item, index) in items" :key="index" class="caption">
                <q-item clickable>
                  <q-card class="my-card card-content">
                    <div class="row" style="box-shadow: 2px 2px 5px #008080">
                      <q-item-section avatar class="avartar">
                        <q-icon color="red" :name="item.pic" size="60px" />
                      </q-item-section>

                      <q-item-section class="my-section">
                        <q-item-label class="fontbold" style="color:#008080">{{item.title}}</q-item-label>
                        <q-item-label caption>{{item.price}} บาท</q-item-label>
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
  border-color: teal
  border-style: solid
  
.card-content
  border-style: solid;
  border-width: 2px;
  border-color: teal;

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
      items: [
        {
          pic: "img:statics/icons/delete.png",
          title: "Bar A",
          price: 500
        },
        {
          pic: "img:statics/icons/pizza.jpg",
          title: "Bar B",
          price: 1000
        },
        {
          pic: "img:statics/icons/salary.png",
          title: "Bar C",
          price: 1500
        },
        {
          pic: "img:statics/icons/delete.png",
          title: "Bar D",
          price: 2000
        },
        {
          pic: "img:statics/icons/delete.png",
          title: "Bar E",
          price: 2500
        },
        {
          pic: "img:statics/icons/delete.png",
          title: "Bar F",
          price: 3000
        },
        {
          pic: "img:statics/icons/delete.png",
          title: "Bar G",
          price: 3500
        },
        {
          pic: "img:statics/icons/delete.png",
          title: "Bar H",
          price: 4000
        },
        {
          pic: "img:statics/icons/delete.png",
          title: "Bar I",
          price: 4500
        },
        {
          pic: "img:statics/icons/delete.png",
          title: "Bar J",
          price: 5000
        }
      ],
      totalExpense: 3500,
      date: "2019/03/01",
      proxyDate: "2019/03/01",
      dialog: false,
      dialogAdd: false,
      // tabList: ["ดูหนัง", "ฟังเพลง", "เติมเกม", "รองเท้า", "หวย", "เงินกู้"],
      tabList: [
        {
          pic: "img:statics/icons/delete.png",
          name: "ดูหนัง"
        },
        {
          pic: "img:statics/icons/delete.png",
          name: "ฟังเพลง"
        },
        {
          pic: "img:statics/icons/delete.png",
          name: "เติมเกม"
        },
        {
          pic: "img:statics/icons/delete.png",
          name: "รองเท้า"
        },
        {
          pic: "img:statics/icons/delete.png",
          name: "หวย"
        },
        {
          pic: "img:statics/icons/delete.png",
          name: "เงินกู้"
        }
      ],
      expenseType: ""
    };
  },

  methods: {
    selectExpense(tab) {
      this.dialogAdd = true;
      this.expenseType = tab;
    },
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


