<template>
  <div id="map">
    <l-map
      id="mapLayer"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
    >
      <div id="mapShadow"></div>
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="currentCenter" :icon="icon"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng, icon } from "leaflet";
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
      icon: icon({
        iconUrl: require('@/assets/bus_icon.png'),
        iconSize: [44, 44],
        iconAnchor: [22, 44]
      }),
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
<style scoped>
#map {
  position: relative;
  width: 100%;
  flex: 1;
  min-width: 400px;
  
}
#mapLayer {
  border-radius: 15px;
  box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.5);
  height: 50%;
  min-height: 450px;
}

#mapShadow {
  position: absolute;
  width: 100%;
  height: 50%;
  border-radius: 15px;
  box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.5);
  z-index: 999;
  min-height: 450px;
}

@media only screen and (max-width: 1000px) {
  #map {
    flex: none;
  }

  #mapLayer {
    min-height: 250px;
  }

  #mapShadow {
    min-height: 250px;
  }
}
</style>
