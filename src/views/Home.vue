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
          <div v-if="!errorFlg" v-html="weather"></div>
          <div v-else>{{weather}}</div>
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
import { Const } from '../const';
import axios from 'axios';

@Component({
  components: {}
})
export default class Home extends Vue {
  private weather = '';
  private errorFlg: boolean = false;
  constructor () {
    super();
    this.getWeather('tokyo');
  }

  public getWeather (city: string) {
    axios
    // tslint:disable-next-line:max-line-length
    .get(`${Const.WEATHER_URL}${Const.URL_PARAM_KEY}${process.env.VUE_APP_WEATHER_KEY}&${Const.URL_PARAM_Q}${city},${Const.COUNTRY_CD}&${Const.REQUEST_MODE_HTML}`)
    .then((response) => {
      this.weather = response.data;
      if (response.status !== 200) {
        this.errorFlg = true;
        this.weather = response.statusText;
      }
    })
    .catch((error) => {
      this.weather = error.toString();
      this.errorFlg = true;
    });
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
    margin: auto;
  }

  &_licenses {
    margin-top: auto;
  }
}
</style>
