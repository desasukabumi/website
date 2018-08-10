<template>
  <div>
    <gmap-map
      v-bind:center="center"
      v-bind:zoom="13">
      <gmap-marker
        v-for="(item, index) in markers"
        v-bind:key="index"
        v-bind:position="item.position"
        @click="center=item.position"/>
    </gmap-map>
  </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: { key: "AIzaSyDfBttwoNZvehtEUsWCcqHbwC7KcIluVHc" }
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