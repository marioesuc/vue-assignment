<template>
  <div id="circularbar">
    <span id="currentValue">{{`${currentValue} ${unit}`}}</span>
    <VueSvgGauge
      :start-angle="-110"
      :end-angle="110"
      :value="currentValue"
      :separator-step="0"
      :min="0"
      :max="maxValue"
      :gauge-color="[{ offset: 0, color: '#347AB0'}, { offset: 100, color: '#8CDFAD'}]"
      :scale-interval="0.1"
      :transition-duration="0"
    />
  </div>
</template>

<script>
import { VueSvgGauge } from 'vue-svg-gauge'

export default {
  name: 'CircularBar',
  components: {
    VueSvgGauge,
  },
  props: {
    currentValue: Number,
    maxValue: Number,
    unit: String,
  },
  data() {
    return {
      currentValueCurated: 0,
    }
  },
  // data() {
  //   return {
  //     zoom: 15,
  //     center: latLng(this.latitude, this.longitude),
  //     url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  //     attribution:
  //       '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  //     withPopup: latLng(this.latitude, this.longitude),
  //     currentZoom: 11.5,
  //     currentCenter: latLng(this.latitude, this.longitude),
  //     mapOptions: {
  //       zoomSnap: 0.5
  //     },
  //   };
  // },
  // watch: {
  //   latitude() {
  //     this.center = latLng(this.latitude, this.longitude)
  //     this.withPopup = latLng(this.latitude, this.longitude)
  //     this.currentCenter = latLng(this.latitude, this.longitude)
  //   }
  // },
  // methods: {
  //   zoomUpdate(zoom) {
  //     this.currentZoom = zoom;
  //   },
  //   centerUpdate(center) {
  //     this.currentCenter = center;
  //   },
  //   showLongText() {
  //     this.showParagraph = !this.showParagraph;
  //   },
  //   innerClick() {
  //     alert('Click!');
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#circularbar {
  margin: 20px;
  width: 300px;
  height: 200px;
  text-align: center;
}
#currentValue {
  position: relative;
  top: 160px;
  color: green;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
}
</style>
