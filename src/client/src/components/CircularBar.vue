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
