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
                <h4 class="text-h5 text-white q-my-md">Registration</h4>
                <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
                  <!-- <q-btn fab icon="close" color="teal" /> -->
                  <q-avatar fab size="100px" color="teal-3">
                    <q-img src="statics/icons/piggypiggy.png" :ratio="1" style="margin:auto"></q-img>
                  </q-avatar>
                </div>
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl q-pb-lg">
                  <q-input square clearable v-model="username" type="username" label="Username">
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
                  unelevated
                  size="lg"
                  color="teal"
                  class="full-width text-white"
                  label="Get Started"
                  @click="registerSuccess = true"
                />
              </q-card-actions>
              <q-dialog v-model="registerSuccess" transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                  <q-card-section>
                    <div class="text-h6"></div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">Click/Tap on the backdrop.</q-card-section>

                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" to="/login" exact v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <q-card-section class="text-center q-pa-sm">
                <q-btn flat to="/login" exact>
                  <p class="text-grey-6">กลับสู่หน้า Login</p>
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
      registerSuccess: false
    };
  }
};
</script>

<style>
</style>