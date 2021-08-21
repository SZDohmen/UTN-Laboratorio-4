<template>
  <div class="Mapa mx-auto my-lg-5">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
    >
      <l-tile-layer
        :url="url"
      />
      <l-marker :lat-lng="withPopup">
          <l-icon
          icon-url="/images/Mapa.svg"
        />
        <l-popup>Musical Hendrix</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from "vue2-leaflet";

export default {
  name: "Donde",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
  },
  data() {
    return {
      zoom: 19,
      center: latLng(-32.88639, -68.83829),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      withPopup: latLng(-32.88629, -68.83849),
      showMap: true
    };
  },
};
</script>


<style>
.Mapa{
    height: 70vh; 
    width: 50vw;
}
</style>