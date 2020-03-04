<template>
  <div id="linearchart">
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

const MAX_VALUES_NUMBER_X = 60;
const REFRESH_RATE_MS = 250;

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
    secondsDiff: function (d1, d2) {
  
      let secDiff = Math.floor( ( d2 - d1) / 1000 );
      return secDiff;
    },
    startInterval: function () {
      setInterval(() => {                        
        const dataArray = this.chart.data.datasets[0].data;
        const lengthArray = dataArray.length;
  
        this.chart.data.datasets[0].data.push({
          x: this.time,
          y: this.soc
        });

        this.chart.data.datasets[1].data.push({
          x: this.time,
          y: this.speed
        });

        if (lengthArray > MAX_VALUES_NUMBER_X) {
          this.chart.data.datasets[0].data.shift();
          this.chart.data.datasets[1].data.shift();
        }

        if(lengthArray > 2) {
          const lastDate = new Date(dataArray[lengthArray - 1].x);
          const previousDate = new Date(dataArray[lengthArray - 2].x);
          const diffDatesMs = lastDate - previousDate;
    
          if (diffDatesMs < 0) {
            this.chart.data.datasets[0].data = [];
            this.chart.data.datasets[1].data = [];
          }
        }

        this.chart.update();
      }, REFRESH_RATE_MS);
    },
    createChart: function() {
      const ctx = document.getElementById("chart");
      this.chart = new Chart(ctx, {
        type: "line",
        data: {
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
          }
        }
      });
    }
  }
};
</script>

<style>
#linearchart {
  width: 70%;
}
#chart {
  background-color: white;
}
</style>
