<template>
  <div id="linearchart">
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    data: Object,
    options: Object,
    intervalEnabled: Boolean,
    refreshRate: Number
  },
  name: "LinearChart",
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.createChart();
    if (this.intervalEnabled) {
      this.startInterval();
    }
  },
  methods: {
    startInterval: function() {
      setInterval(() => {
        // Emit event to be caught at the parent to trigger a function
        this.$emit("updateChart");

        // Update the chart to see the changes
        this.chart.update();
      }, this.refreshRate);
    },
    createChart: function() {
      const ctx = document.getElementById("chart");
      this.chart = new Chart(ctx, {
        type: "line",
        data: this.data,
        options: this.options
      });
    }
  }
};
</script>

<style>
#linearchart {
  margin: 50px;
  width: 80%;
  max-height: 500px;
}
#chart {
  background-color: white;
  max-height: 500px;
}

@media only screen and (max-width: 800px) {
  #linearchart {
    margin: 0;
    width: 100%;
  }
}
</style>
