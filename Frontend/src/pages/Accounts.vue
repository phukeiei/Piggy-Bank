<template>
  <div class="q-pa-md">
    <q-avatar size="200px" class="pic row justify-center">
      <q-img src="statics/icons/piggypiggy.png" :ratio="1" style="margin:auto"></q-img>
    </q-avatar>

    <div class="row block">
      <q-btn class="bg-white account" to="/index" exact>
        <div class="row">
          <div class="col-3">
            <q-avatar size="50px">
              <img src="statics/icons/MindControl.PNG" />
            </q-avatar>
          </div>
          <div class="col-9">
            <div class="row">MintZaa</div>
            <div class="row">เกี่ยวกับบัญชีนี้</div>
          </div>
        </div>
      </q-btn>
    </div>

    <div class="row block">
      <q-btn class="row bg-white account">
        <div class="row">
          <div class="col-3">
            <q-avatar size="50px">
              <img src="statics/icons/MindControl.PNG" />
              account_box
            </q-avatar>
          </div>
          <div class="col-9">
            <div class="row">MintZaa</div>
            <div class="row">เกี่ยวกับบัญชีนี้</div>
          </div>
        </div>
      </q-btn>
    </div>

    <div class="row block">
      <q-btn color="white" class="full-width block" label="เพิ่มบัญชี" @click="prompt = true"></q-btn>

      <q-dialog v-model="prompt" persistent full-width>
        <q-card class="column items-center justify-around">
          <q-card-section>
            <div class="text-h6">เพิ่มบัญชีผู้ใช้</div>
          </q-card-section>

          <div class="q-pa-md q-gutter-sm">
            <q-avatar
              size="100px"
              font-size="52px"
              color="teal"
              text-color="white"
              icon="directions"
            />
          </div>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model="address"
              autofocus
              @keyup.enter="prompt = false"
              placeholder="กรุณากรอกชื่อบัญชี"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn outline color="red" label="ยกเลิก" v-close-popup />
            <q-btn outline color="green" label="ตกลง" v-close-popup />
          </q-card-actions>
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

      address: ""
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