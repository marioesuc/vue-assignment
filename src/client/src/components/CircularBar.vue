<template>
  <div id="circularbar">
    <span id="currentValue" :class="colorValue">{{
      `${currentValue} ${unit}`
    }}</span>
    <span id="title">{{ `${title}` }}</span>
    <VueSvgGauge
      :start-angle="-110"
      :end-angle="110"
      :value="currentValue"
      :separator-step="0"
      :min="0"
      :max="maxValue"
      :gauge-color="[
        { offset: 0, color: '#347AB0' },
        { offset: 100, color: '#8CDFAD' }
      ]"
      :scale-interval="0.1"
      :transition-duration="0"
    />
  </div>
</template>

<script>
import { VueSvgGauge } from "vue-svg-gauge";

export default {
  name: "CircularBar",
  components: {
    VueSvgGauge
  },
  props: {
    title: String,
    currentValue: Number,
    maxValue: Number,
    unit: String,
    threshold: Number
  },
  computed: {
    colorValue: function() {
      const isThresholdExceeded =
        this.threshold && this.currentValue > this.threshold;

      return {
        thresholdExceeded: isThresholdExceeded,
        thresholdNotExceeded: !isThresholdExceeded
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#circularbar {
  margin: 0 20px 50px;
  width: 250px;
  height: 200px;
  text-align: center;
}
#currentValue {
  position: relative;
  top: 195px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
}
.thresholdNotExceeded {
  color: #7ca363;
  transition: 0.5s;
}
.thresholdExceeded {
  color: #b84b4b;
  transition: 0.5s;
}
#title {
  display: flex;
  justify-content: center;
  color: rgba($color: #ada60f, $alpha: 0.4);
  font-size: 30px;
  font-weight: bold;
}
</style>
