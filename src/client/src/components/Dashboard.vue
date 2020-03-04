<template>
  <div id="dashboard">
    <div class="row">
      <Map
        :latitude="data.gps.latitude"
        :longitude="data.gps.longitude"
      />
      <CircularBar
        :currentValue="data.speed"
        :maxValue="maxSpeed"
        :unit="'km/h'"
      />
      <CircularBar
        :currentValue="data.soc"
        :maxValue="maxCharge"
        :unit="'%'"
      />
    </div>
    <div class="row">
      <LinearChart
        :speed="data.speed"
        :soc="data.soc"
        :time="data.time"
      />
    </div>
  </div>
</template>

<script>
import Map from "./Map";
import CircularBar from "./CircularBar";
import LinearChart from "./LinearChart";
import { MAX_SPEED, MAX_CHARGE } from "@/common/Constants";

export default {
  name: "Dashboard",
  components: {
    Map,
    CircularBar,
    LinearChart,
  },
  props: {
    data: Object
  },
  data() {
    return {
      maxSpeed: MAX_SPEED,
      maxCharge: MAX_CHARGE
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#dashboard {
  background-color: blue;
  flex: 1;
  margin: 30px;
}
.row {
  display: flex;
  flex-direction: 'row';
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
