<template>
  <div class="q-pa-md">
    <q-avatar size="200px" class="pic row justify-center">
      <q-img src="statics/icons/piggypiggy.png" :ratio="1" style="margin:auto"></q-img>
    </q-avatar>

    <div class="row block">
      <q-btn class="bg-white account" to="/index" exact>
        <div class="row">
          <div class="col-4">
            <q-avatar size="50px">
              <img src="statics/myicons/engineer.png" />
            </q-avatar>
          </div>
          <div class="col-8">
            <div class="text-h6">MintZaa</div>
            <div class="text-subtitle2">เกี่ยวกับบัญชี</div>
          </div>
        </div>
      </q-btn>
    </div>

    <div class="row block">
      <q-btn color="white" class="full-width block" label="เพิ่มบัญชี" @click="prompt = true"></q-btn>
      <q-dialog v-model="prompt" persistent full-width>
        <q-card class="column items-center justify-around">
          <q-card-section>
            <div class="q-pa-md q-gutter-sm">
              <q-avatar square size="100px">
                <q-btn
                  size="30px"
                  round
                  icon="add_a_photo"
                  color="secondary"
                  big
                  @click="pic = true"
                ></q-btn>
              </q-avatar>
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
          <q-card-section class="q-pt-none">
            <q-input
              outlined
              v-model="moneybag"
              autofocus
              @keyup.enter="prompt = true"
              placeholder="กรุณากรอกจำนวนเงิน"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn outline color="red" label="ยกเลิก" v-close-popup @click="prompt = true" />
            <q-btn outline color="green" label="ตกลง" v-close-popup @click="prompt = true" />
          </q-card-actions>
          <q-dialog v-model="pic">
            <q-card>
              <q-card-section>
                <div class="text-h6">กรุณาเลือกรูปภาพ</div>
              </q-card-section>

              <div class="row justify-center">
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/astronaut.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/bellboy.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/captain.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/chef.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/clerk.png" />
                  </q-avatar>
                </div>
              </div>

              <div class="row justify-center">
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/cowboy.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/delivery-man.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/doctor.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/driver.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/engineer.png" />
                  </q-avatar>
                </div>
              </div>

              <div class="row justify-center">
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/farmer.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/firefighter.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/flight-attendant.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/graduated.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/judge.png" />
                  </q-avatar>
                </div>
              </div>

              <div class="row justify-center">
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/magician.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/man.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/military.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/miner.png" />
                  </q-avatar>
                </div>
                <div class="col-2">
                  <q-avatar size="50px">
                    <img src="statics/myicons/musician.png" />
                  </q-avatar>
                </div>
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
export default {
  data() {
    return {
      alert: false,
      confirm: false,
      prompt: false,
      pic: false,

      user: "",
      moneybag: ""
    };
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