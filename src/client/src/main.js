import Vue from "vue";
import App from "./App.vue";
import { Icon } from 'leaflet';

// Workaround to fix missing marker icons
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
