<template>
  <div id="map">
    <div id="mapShadow">
    </div>
    <l-map
      id="mapLayer"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I am a popup
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
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
      withPopup: latLng(this.latitude, this.longitude),
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
      this.withPopup = latLng(this.latitude, this.longitude)
      this.currentCenter = latLng(this.latitude, this.longitude)
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert('Click!');
    }
  }
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
