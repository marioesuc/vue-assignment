<template>
  <div id="app">
    <Dashboard :data="data" />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Dashboard
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
        soc: 0,
      }
    };
  },
  mounted() {
    const url = 'ws://localhost:3000';
    this.connectToWebsocket(url, this.onConnectToWebsocket);
  },
  methods: {
    connectToWebsocket (url, onConnectToWebsocket) {
      const connection = new WebSocket(url);

      connection.onopen = () => {
        console.log('Connection to WebSocket Succesful');
      };
      connection.onmessage = ({ data }) => {
        onConnectToWebsocket(data)
      };
      connection.onerror = error => {
        console.log(`Error on WebSocket connection: ${error}`);
      };
    },
    onConnectToWebsocket (data) {
      const parsedData = JSON.parse(data);
      const parsedCoordinates = parsedData.gps.split('|');
      this.data.time = parsedData.time;
      this.data.energy = parsedData.energy;
      this.data.gps.latitude = parseFloat(parsedCoordinates[0]);
      this.data.gps.longitude = parseFloat(parsedCoordinates[1]);
      this.data.odo = parsedData.odo;
      this.data.speed = parsedData.speed;
      this.data.soc = parsedData.soc;
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: gray;
  display: flex;
}
</style>
