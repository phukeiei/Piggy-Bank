import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var storage = new Vuex.Store({
    state: {
        ac_id: 0
    }
});

export default storage;