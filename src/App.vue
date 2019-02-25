<template>
  <div id="app">
    <div id="nav">
      <WfpHeader/>
    </div>
    <div class="page">
      <router-view/>
    </div>
    <WfpFooter/>
  </div>
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
#app {
  background-size: cover;
  background-position: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: -1px;
  background-image: url("./assets/photos/greenhouse-768740_1280.jpg");

}
#nav {
  padding: 1px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
