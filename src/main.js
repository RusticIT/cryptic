import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import VueHead from "vue-head";
import { dollarFilter, percentFilter, rankFilter, fixedFour } from "@/filters";

Vue.use(VueHead);
Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.filter("fixed4", fixedFour);
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.filter("rank", rankFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
