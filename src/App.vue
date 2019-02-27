<template>
  <v-app>
    <div class="app-page">
      <WfpHeader/>
      <div class="app-view">
        <router-view/>
      </div>
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
export default class App extends Vue {
  /** Since import becomes a not find module, temporary correspondence. */
  private readonly marData = require('./assets/data/month.3.json');
  private readonly aprData = require('./assets/data/month.4.json');
  private readonly plantTypeData = require('./assets/data/plant.type.json');
  private readonly plantFamilyData = require('./assets/data/plant.family.json');

  constructor () {
    super();
    // set localstorage
    sessionStorage.setItem('mar', JSON.stringify(this.marData));
    sessionStorage.setItem('apr', JSON.stringify(this.aprData));
    sessionStorage.setItem('type', JSON.stringify(this.plantTypeData));
    sessionStorage.setItem('family', JSON.stringify(this.plantFamilyData));
  }
}
</script>

<style lang="scss">
.app-page {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-view {
  background-size: cover;
  background-position: center;
  background-image: url("./assets/photos/greenhouse-768740_1280.jpg");
}
</style>
