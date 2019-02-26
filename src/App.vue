<template>
  <v-app>
    <div class="page">
      <WfpHeader/>
      <div class="view">
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
  private readonly mayData = require('./assets/data/month.3.json');
  private readonly junData = require('./assets/data/month.4.json');
  private readonly plantTypeData = require('./assets/data/plant.type.json');
  private readonly plantFamilyData = require('./assets/data/plant.family.json');

  constructor () {
    super();
    // set localstorage
    localStorage.setItem('may', JSON.stringify(this.mayData));
    localStorage.setItem('jun', JSON.stringify(this.junData));
    localStorage.setItem('type', JSON.stringify(this.plantTypeData));
    localStorage.setItem('family', JSON.stringify(this.plantFamilyData));
  }
}
</script>

<style lang="scss">
.page {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view {
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-image: url("./assets/photos/greenhouse-768740_1280.jpg");

}
</style>
