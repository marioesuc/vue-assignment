<template>
  <div id="dashboard">
    <div class="row">
      <div class="column">
        <Map
          :latitude="data.gps.latitude"
          :longitude="data.gps.longitude"
        />
      </div>
      <div class="column">
        <div class="row">
          <div class="column">
          <CircularBar
            :title="titles.speed"
            :currentValue="data.speed"
            :maxValue="maxSpeed"
            :unit="'km/h'"
          />
          </div>
          <div class="column">
          <CircularBar
            :title="titles.soc"
            :currentValue="data.soc"
            :maxValue="maxCharge"
            :unit="'%'"
          />
          </div>
        </div>
        <div class="row">
          <div class="column">
          <LargeLabel
            :title="titles.energy"
            :currentValue="data.energy"
            :unit="'kW'"
          />
          </div>
          <div class="column">
            <LargeLabel
              :title="titles.odo"
              :currentValue="data.odo"
              :unit="'km'"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <LinearChart
        :data="linearChart.data"
        :options="linearChart.options"
        intervalEnabled
        :refreshRate="linearChart.refreshRate"
        @updateChart="updateLinearChart"
      />
    </div>
  </div>
</template>

<script>
import Map from "./Map";
import CircularBar from "./CircularBar";
import LinearChart from "./LinearChart";
import LargeLabel from "./LargeLabel";
import { MAX_SPEED, MAX_CHARGE, MAX_VALUES_NUMBER_X, REFRESH_RATE_MS } from "@/common/Constants";

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
      maxCharge: MAX_CHARGE,
      titles: {
        speed: "speed",
        soc: "state of charge",
        energy: "energy",
        odo: "odometer",
      },
      linearChart: {
        data: {
          datasets: [
            {
              label: "State of charge (%)",
              backgroundColor: "transparent",
              borderColor: "#008dd2",
              data: [],
            },
            {
              label: "Speed (km/h)",
              backgroundColor: "transparent",
              borderColor: "#00d23e",
              data: []
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  fontSize: 16,
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: 16,
                  maxTicksLimit: 10,
                },
                type: "time",
              }
            ]
          },
          tooltips: {
            enabled: false,
          }
        },
        refreshRate: REFRESH_RATE_MS,
      }
    }
  },
  methods: {
    updateLinearChart() {
      const { datasets } = this.linearChart.data;
      const { time, soc, speed } = this.data;
      const socDataArray = datasets[0].data;
      const lengthArray = socDataArray.length;

      // Push elemens to the soc data array if time prop is filled
      time &&
      datasets[0].data.push({
        x: time,
        y: soc
      });

      // Push elements to the speed data array if time prop is filled
      time &&
      datasets[1].data.push({
        x: time,
        y: speed
      });

      // If the array has been filled with the max number of elements
      // take out the first element and shift it
      if (lengthArray > MAX_VALUES_NUMBER_X) {
        datasets[0].data.shift();
        datasets[1].data.shift();
      }

      // If the array contains more than 2 elements and the times are not consecutive
      // restarts the data (so that it doesn't draw strange lines)
      if (lengthArray > 2) {
        const lastElementArray = socDataArray[lengthArray - 1];
        const secondToLastElementArray = socDataArray[lengthArray - 2];
        const lastDate = new Date(lastElementArray.x);
        const previousDate = new Date(secondToLastElementArray.x);
        const diffDatesMs = lastDate - previousDate;
  
        // If times are not consecutive, empty the arrays
        if (diffDatesMs < 0) {
          datasets[0].data = [];
          datasets[1].data = [];
        }
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dashboard {
  width: 80vw;
  background-color: white;
  margin: 30px auto;
  padding: 20px;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.75);
}

@media only screen and (max-width: 800px) {
  #dashboard {
    width: 90vw;
  }
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
</style>
