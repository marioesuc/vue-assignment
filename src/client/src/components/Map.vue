<template>
  <div id="map">
    <div id="mapShadow">
    </div>
    <l-map
      id="mapLayer"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="currentCenter">
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    latitude: Number,
    longitude: Number,
  },
  data() {
    return {
      zoom: 15,
      center: latLng(this.latitude, this.longitude),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: latLng(this.latitude, this.longitude),
      mapOptions: {
        zoomSnap: 0.5
      },
    };
  },
  watch: {
    latitude() {
      this.center = latLng(this.latitude, this.longitude)
      this.currentCenter = latLng(this.latitude, this.longitude)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#map {
  position: relative;
  width: 800px;
  flex: 1;
  border: 3px solid white;
}
#mapLayer {
  border-radius: 15px;
  box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.5);
}
#mapShadow {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.5);
  z-index: 999;
}
</style>
