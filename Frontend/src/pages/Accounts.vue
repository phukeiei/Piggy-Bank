<template>
  <div class="q-pa-md">
    <q-avatar size="200px" class="pic row justify-center">
      <q-img src="statics/icons/piggypiggy.png" :ratio="1" style="margin:auto"></q-img>
    </q-avatar>

    <div class="row block" v-for="(account, index) in accountList" :key="index">
      <q-card class="bg-white account">
        <div class="row">
          <div class="col">
            <q-avatar size="50px">
              <img :src="account.ac_img_path" />
            </q-avatar>
          </div>
          <div class="col">
            <div class="text-h6">{{account.ac_name}}</div>
          </div>
          <div class="col text-right">
            <q-fab color="secondary" push text-color="white" icon="chevron_left" direction="left">
              <q-fab-action
                color="red"
                text-color="white"
                icon="delete"
                @click="removeById(account.ac_id)"
              />
              <q-fab-action
                color="warning"
                text-color="white"
                icon="create"
                @click="edit"
              />
              <q-fab-action
                color="primary"
                text-color="black"
                icon="play_circle_outline"
                to="/index"
                exact
                @click="setAccountId(account.ac_id)"
              />
            </q-fab>
          </div>
        </div>
      </q-card>
    </div>

    <div class="row block">
      <q-btn color="white" class="full-width block" label="เพิ่มบัญชี" @click="prompt = true"></q-btn>
      <q-dialog v-model="prompt" persistent full-width>
        <q-card class="column items-center justify-around">
          <q-card-section>
            <div class="q-pa-md q-gutter-sm">
              <q-btn size="30px" round flat color="secondary" big @click="pic = true">
                <q-avatar size="100px">
                  <img :src="img_path" />
                </q-avatar>
              </q-btn>
            </div>
            <div class="text-h6">เพิ่มบัญชีผู้ใช้</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input
              outlined
              v-model="user"
              autofocus
              @keyup.enter="prompt = true"
              placeholder="กรุณากรอกชื่อบัญชี"
            />
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn outline color="red" label="ยกเลิก" v-close-popup @click="prompt = true" />
            <q-btn outline color="green" label="ตกลง" v-close-popup @click="insert" />
          </q-card-actions>
          <q-dialog v-model="pic">
            <q-card>
              <q-card-section>
                <div class="text-h6">กรุณาเลือกรูปภาพ</div>
              </q-card-section>

              <div class="row justify-center">
                <q-btn
                  v-for="(img, index) in imgList"
                  :key="index"
                  flat
                  class="col-3"
                  v-close-popup
                  @click="setImgPath(img)"
                >
                  <q-avatar size="50px">
                    <img :src="img" />
                  </q-avatar>
                </q-btn>
              </div>
              <q-card-actions align="right">
                <q-btn flat label="ตกลง" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import facadeService from "../services/facade";
const accountService = new facadeService().getAccount();
const financialCategoryAccountService = new facadeService().getFinancialCategoryAccount();
const financialCategoryService = new facadeService().getFinancialCategory();

import storage from "../store/storage";

export default {
  data() {
    return {
      imgList: [
        "statics/myicons/astronaut.png",
        "statics/myicons/bellboy.png",
        "statics/myicons/captain.png",
        "statics/myicons/chef.png",
        "statics/myicons/clerk.png",

        "statics/myicons/cowboy.png",
        "statics/myicons/delivery-man.png",
        "statics/myicons/doctor.png",
        "statics/myicons/driver.png",
        "statics/myicons/engineer.png",

        "statics/myicons/farmer.png",
        "statics/myicons/firefighter.png",
        "statics/myicons/flight-attendant.png",
        "statics/myicons/graduated.png",
        "statics/myicons/judge.png",

        "statics/myicons/magician.png",
        "statics/myicons/man.png",
        "statics/myicons/military.png",
        "statics/myicons/miner.png",
        "statics/myicons/musician.png"
      ],
      alert: false,
      confirm: false,
      prompt: false,
      pic: false,

      accountList: [],
      img_path: "statics/myicons/astronaut.png",

      user: "",
      moneybag: "",

      account: null,

      financialCategoryAccount: null,

      financialCategory: null
    };
  },
  mounted() {
    this.account = new accountService();
    this.financialCategoryAccount = new financialCategoryAccountService();
    this.financialCategory = new financialCategoryService();

    this.getAll();
  },
  methods: {
    getAll() {
      this.account.getAll().then(result => {
        this.accountList = result.data;
      });
    },
    setAccountId(id) {
      storage.state.ac_id = id;
    },
    setImgPath(path) {
      this.img_path = path;
    },
    insert() {
      prompt = true;

      this.account.name = this.user;
      this.account.img_path = this.img_path;

      this.account.insert().then(result => {
        this.financialCategoryAccount.ac_id = result.id;

        this.financialCategory.getAllPermanent().then(res => {
          res.data.forEach(element => {
            console.log(element);
            this.financialCategoryAccount.fc_id = element.fc_id;

            this.financialCategoryAccount.insert().then(response => {});
          });
        });

        this.user = "";
        this.img_path = "statics/myicons/astronaut.png";
        this.getAll();
      });
    },
    removeById(id) {
      this.account.id = id;
      this.account.removeById().then(result => {
        this.getAll();
        console.log(result);
      });
    }
  }
};
</script>

<style scoped>
.pic {
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
.account {
  justify-content: center;
  display: block;
  width: 100%;
  padding: 8px 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-shadow: 10px;
  font-weight: bold;
  -webkit-text-fill-color: black;
  border-radius: 15px;
}
.block {
  justify-content: center;
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
</style>