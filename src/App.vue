<template>
  <v-app>
    <div class="page">
      <WfpHeader/>
      <router-view/>
      <WfpFooter/>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import WfpHeader from '@/components/Header.vue';
import WfpFooter from '@/components/Footer.vue';

@Component({
  components: {
    WfpHeader,
    WfpFooter
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
.page {
  background-size: cover;
  background-position: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/photos/greenhouse-768740_1280.jpg");
}
</style>
