<template>
  <div>
    <GmapMap :center="center" :zoom="13">
      <GmapMarker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: { key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY }
});

export default {
  data() {
    return {
      center: { lat: -0.368425, lng: 116.688523 },
      markers: [{ position: { lat: -0.368425, lng: 116.688523 } }]
    };
  }
};
</script>

<style>
.vue-map-container {
  height: 450px;
}
</style>