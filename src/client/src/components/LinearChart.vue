<template>
  <div id="linearchart">
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    soc: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 0
    },
    time: {
      type: Number,
      default: 1511437255000
    },
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

      if (lengthArray > 30) {
        this.chart.data.datasets[0].data.shift();
        this.chart.data.datasets[1].data.shift();
      }

      this.chart.update();
      }, 500);
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
