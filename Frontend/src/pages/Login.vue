<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: linear-gradient(#74c582, #74d882);"
      >
        <div class="column q-pa-lg">
          <div class="row">
            <q-card square class="shadow-24" style="width:300px;height:485px;">
              <q-card-section class="bg-teal">
                <h4 class="text-h5 text-white q-my-md">PIGGY BANK</h4>
                <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
                  <!-- <q-btn fab icon="add" color="teal" /> -->
                  <q-avatar fab size="100px" color="teal-3">
                    <q-img src="statics/icons/piggypiggy.png" :ratio="1" style="margin:auto"></q-img>
                  </q-avatar>
                </div>
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl">
                  <q-input square clearable v-model="username" type="text" label="Username">
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input square clearable v-model="password" type="password" label="Password">
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-lg">
                <q-btn
                  @click="loginSuccess = true"
                  unelevated
                  size="lg"
                  color="teal"
                  class="full-width text-white"
                  label="Sign In"
                />
              </q-card-actions>
              <q-dialog v-model="loginSuccess" transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6"></div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">Click/Tap on the backdrop.</q-card-section>

                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" to="/index" exact v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-card-section class="text-center q-pa-sm">
                <q-btn flat to="/register" exact>
                  <p class="text-grey-6">สมัครสมาชิก</p>
                </q-btn>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      loginSuccess: false
    };
  }
};
</script>

<style>
</style>