<template>
  <div id="dashboard">
    <div class="row">
      <Map
        :latitude="data.gps.latitude"
        :longitude="data.gps.longitude"
      />
      <div class="column">
        <div class="row">
          <div class="column">
          <CircularBar
            :currentValue="data.speed"
            :maxValue="maxSpeed"
            :unit="'km/h'"
          />
          </div>
          <div class="column">
          <CircularBar
            :currentValue="data.soc"
            :maxValue="maxCharge"
            :unit="'%'"
          />
          </div>
        </div>
        <div class="row">
          <div class="column">
          <LargeLabel
            :currentValue="data.energy"
            :unit="'kW'"
          />
          </div>
          <div class="column">
            <LargeLabel
              :currentValue="data.odo"
              :unit="'km'"
            />
          </div>
        </div>
      </div>
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
import LargeLabel from "./LargeLabel";
import { MAX_SPEED, MAX_CHARGE } from "@/common/Constants";

export default {
  name: "Dashboard",
  components: {
    Map,
    CircularBar,
    LinearChart,
    LargeLabel,
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
  width: 1350px;
  background-color: white;
  margin: 30px auto;
  padding: 20px;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.column {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
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
