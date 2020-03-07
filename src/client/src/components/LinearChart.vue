<template>
  <div id="linearchart">
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

const MAX_VALUES_NUMBER_X = 60;
const REFRESH_RATE_MS = 250;

const data = {
  datasets: [
    {
      label: "State of charge (%)",
      backgroundColor: "transparent",
      borderColor: "#008dd2",
      data: []
    },
    {
      label: "Speed (km/h)",
      backgroundColor: "transparent",
      borderColor: "#00d23e",
      data: []
    }
  ]
};

const options = {
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
}

export default {
  props: {
    soc: Number,
    speed: Number,
    time:  Number,
  },
  name: "LinearChart",
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.createChart();
    this.startInterval();
  },
  methods: {
    startInterval: function () {
      setInterval(() => {                        
        this.updateChart();
      }, REFRESH_RATE_MS);
    },
    updateChart() {
      const { datasets } = this.chart.data;
      const socDataArray = datasets[0].data;
      const lengthArray = socDataArray.length;

      // Push elemens to the soc data array if time prop is filled
      this.time &&
      datasets[0].data.push({
        x: this.time,
        y: this.soc
      });

      // Push elements to the speed data array if time prop is filled
      this.time &&
      datasets[1].data.push({
        x: this.time,
        y: this.speed
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
        const lastDate = new Date(socDataArray[lengthArray - 1].x);
        const previousDate = new Date(socDataArray[lengthArray - 2].x);
        const diffDatesMs = lastDate - previousDate;
  
        // If times are not consecutive, empty the arrays
        if (diffDatesMs < 0) {
          datasets[0].data = [];
          datasets[1].data = [];
        }
      }

      // Update the chart to see the changes
      this.chart.update();
    },
    createChart: function() {
      const ctx = document.getElementById("chart");
      this.chart = new Chart(ctx, {
        type: "line",
        data,
        options,
      });
    }
  }
};
</script>

<style>
#linearchart {
  margin: 50px;
  width: 80%;
  height: 500px;
}
#chart {
  background-color: white;
}
</style>
