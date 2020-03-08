<template>
  <div id="app">
    <Header title="Dashboard" :logoSrc="logoSrc" />
    <Dashboard :data="data" />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    Header
  },
  data() {
    return {
      data: {
        time: 0,
        energy: 0,
        gps: {
          latitude: 0,
          longitude: 0
        },
        odo: 0,
        speed: 0,
        soc: 0
      },
      logoSrc: require("@/assets/logo.png")
    };
  },
  mounted() {
    // Perform connection to WebSocket
    const url = "ws://localhost:3000";
    this.connectToWebsocket(url, this.onConnectToWebsocket);
  },
  methods: {
    connectToWebsocket(url, onConnectToWebsocket) {
      const connection = new WebSocket(url);

      connection.onopen = () => {
        console.log("Connection to WebSocket Succesful");
      };
      connection.onmessage = ({ data }) => {
        onConnectToWebsocket(data);
      };
      connection.onerror = error => {
        console.log(`Error on WebSocket connection: ${error}`);
      };
    },
    onConnectToWebsocket(data) {
      // Parse the data sent by the WebSocket
      const parsedData = JSON.parse(data);
      // Split the string of coordinates in an array of two elements
      const parsedCoordinates = parsedData.gps.split("|");
      // Save into variables all the data
      this.data.time = parseInt(parsedData.time);
      this.data.energy = parseFloat(parsedData.energy);
      this.data.gps.latitude = parseFloat(parsedCoordinates[0]);
      this.data.gps.longitude = parseFloat(parsedCoordinates[1]);
      this.data.odo = parseFloat(parsedData.odo);
      this.data.speed = parseInt(parsedData.speed) || 0;
      this.data.soc = parsedData.soc;
    }
  }
};
</script>

<style>
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #7ca363;
  background: linear-gradient(
    0deg,
    rgba(124, 163, 99, 1) 0%,
    rgba(160, 228, 116, 1) 100%
  );
  background-attachment: fixed;
  height: 100vh;
  margin: 0;
}
</style>
