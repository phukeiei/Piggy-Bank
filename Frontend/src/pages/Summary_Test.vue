<template>
  <q-page padding>
    <!-- content -->
    <q-card class flat bordered>
      <div class="q-pa-md ">
        <q-btn-dropdown
          class="full-width text-h6"
          color="teal"
          :label="year"
          dropdown-icon="change_history"
        >
          <q-list v-for="(Year, index) in yearList" :key="index">
            <q-item clickable v-close-popup @click="setYear">
              <q-item-section>
                <q-item-label class="text-h6">{{Year}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <!-- ปุ่มเลือกปี -->
      <div class="q-pa-md row items-start">
        <q-card class="full-width justify-center">
          <q-card-section class="bg-teal">
            <div class="text-h6 text-bold text-center text-white">ยอดสุทธิ์</div>
          </q-card-section>

          <q-card-section class="text-h6">
            <div class="row">
              <div class="text-h6 col-6">
                <i class="material-icons text-green">attach_money</i>
                รายได้รวม
              </div>
              <div class="text-h6 col-6 text-right">14400</div>
            </div>
          </q-card-section>
          <q-card-section class="text-h6">
            <div class="row">
              <div class="text-h6 col-6">
                <i class="material-icons text-red">attach_money</i>
                รายจ่ายรวม
              </div>
              <div class="text-h6 col-6 text-right">10800</div>
            </div>
          </q-card-section>
          <q-card-section class="text-h6">
            <div class="row">
              <div class="text-h6 col-6">
                <i class="material-icons text-blue">attach_money</i>
                คงเหลือ
              </div>
              <div class="text-h6 col-6 text-right">3600</div>
            </div>
          </q-card-section>
          <q-separator dark />
        </q-card>
      </div>

      <!-- ยอดสุทธิ์ -->

      <q-list v-for="(month, i) in monthList" :key="i">
        <div class="q-pa-md row items-start justify-center">
          <q-card class="full-width ">
            <q-card-section class="bg-secondary  text-white ">
              <div class="text-h6 text-center text-bold">{{month}}</div>
            </q-card-section>

            <q-card-section class="text-h6">
              <div class="row">
                <div class="text-h6 col-6">
                  <i class="material-icons text-green">attach_money</i>
                  รายได้รวม
                </div>
                <div class="text-h6 col-6 text-right">1200</div>
              </div>
            </q-card-section>
            <q-card-section class="text-h6">
              <div class="row">
                <div class="text-h6 col-6">
                  <i class="material-icons text-red">attach_money</i>
                  รายจ่ายรวม
                </div>
                <div class="text-h6 col-6 text-right">900</div>
              </div>
            </q-card-section>
            <q-card-section class="text-h6">
              <div class="row">
                <div class="text-h6 col-6">
                  <i class="material-icons text-blue">attach_money</i>
                  คงเหลือ
                </div>
                <div class="text-h6 col-6 text-right">300</div>
              </div>
            </q-card-section>
            <q-separator dark />
          </q-card>
        </div>
      </q-list>
      <!-- ยอดรายเดือน -->
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      yearList: Array(new Date().getFullYear() - 2010 + 1)
        .fill()
        .map((_, idx) => 2010 + idx)
        .reverse(),
      year: new Date().getFullYear(),
      monthList: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม"
      ]
    };
  },

  methods: {
    setYear(data) {
      this.year = data.srcElement.textContent;
    }
  }
};
</script>
