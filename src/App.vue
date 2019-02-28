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
import { Const } from './const';

@Component({
  components: {
    WfpHeader,
    WfpFooter
  }
})
export default class App extends Vue {
  /** Since import becomes a not find module, temporary correspondence. */
  private readonly janData = require('./assets/data/jan.json');
  private readonly febData = require('./assets/data/feb.json');
  private readonly marData = require('./assets/data/mar.json');
  private readonly aprData = require('./assets/data/apr.json');
  private readonly mayData = require('./assets/data/may.json');
  private readonly junData = require('./assets/data/jun.json');
  private readonly julData = require('./assets/data/jul.json');
  private readonly augData = require('./assets/data/aug.json');
  private readonly sepData = require('./assets/data/sep.json');
  private readonly octData = require('./assets/data/oct.json');
  private readonly novData = require('./assets/data/nov.json');
  private readonly decData = require('./assets/data/dec.json');
  private readonly plantTypeData = require('./assets/data/plant.type.json');
  private readonly plantFamilyData = require('./assets/data/plant.family.json');

  constructor () {
    super();
    // set localstorage
    sessionStorage.setItem(Const.JAN, JSON.stringify(this.janData));
    sessionStorage.setItem(Const.FEB, JSON.stringify(this.febData));
    sessionStorage.setItem(Const.MAR, JSON.stringify(this.marData));
    sessionStorage.setItem(Const.APR, JSON.stringify(this.aprData));
    sessionStorage.setItem(Const.MAY, JSON.stringify(this.mayData));
    sessionStorage.setItem(Const.JUN, JSON.stringify(this.junData));
    sessionStorage.setItem(Const.JUL, JSON.stringify(this.julData));
    sessionStorage.setItem(Const.AUG, JSON.stringify(this.augData));
    sessionStorage.setItem(Const.SEP, JSON.stringify(this.sepData));
    sessionStorage.setItem(Const.OCT, JSON.stringify(this.octData));
    sessionStorage.setItem(Const.NOV, JSON.stringify(this.novData));
    sessionStorage.setItem(Const.DEC, JSON.stringify(this.decData));
    sessionStorage.setItem(Const.TYPE, JSON.stringify(this.plantTypeData));
    sessionStorage.setItem(Const.FAMILY, JSON.stringify(this.plantFamilyData));
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
