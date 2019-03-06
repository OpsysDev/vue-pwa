<template>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height class="home">
      <v-flex xs12 sm4 text-xs-center>
        <router-link to="/plants" class="link-btn">
          <v-btn large>植物登録(wip)</v-btn>
        </router-link>

        <router-link to="/month" class="link-btn">
          <v-btn large>作業一覧を見る</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
    <div class="home-weather">
        <div class="home-weather_display">
          {{ htmlData }}
        </div>
        <div class="home-weather_licenses">
          &copy;<a href="https://openweathermap.org/">OpenWeatherMap</a> contributors,
          <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja">CC-BY-SA</a>
        </div>
      </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Home extends Vue {
  private htmlData: any = 'wip';
  constructor () {
    super();
    this.htmlData = process.env.VUE_APP_WEATHER_KEY;
  }

}
</script>

<style lang="scss">
.home {
  height: 60vh;
}

.link-btn {
  text-decoration: none;
}

.home-weather {
  display: flex;
  flex-flow: column;
  height: 40vh;
  width: 100vh;
  margin: auto;
  background-color: aquamarine;

  &_display {
    height: 100%;
  }

  &_licenses {
    margin-top: auto;
  }
}
</style>
