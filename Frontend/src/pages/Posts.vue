<template>
  <div class="q-pa-md">
    <q-avatar size="380px" class="pic row justify-center">
      <q-img src="statics/icons/piggypiggy.png" :ratio="1" style="margin:auto"></q-img>
    </q-avatar>
    <q-skeleton class="bg-teal">
      <span class="piggy justify-center row">PIGGY BANK</span>
    </q-skeleton>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  methods: {
    loading() {
      // this.$route.router.go("/accounts");
      this.$router.push("accounts");
      // console.log("PhurkCheck");
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading();
    }, 5000);
  }
};
</script>

<style scoped>
.pic {
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
}
.piggy {
  top: 50%;
  nav-down: 50%;
  font-size: 60px;
  color: white;
}
</style>