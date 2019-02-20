<template>
  <div class="month">Month Component
    <div>
      <v-tabs v-model="active" color="cyan" dark slider-color="yellow">
        <v-tab v-for="data in dataList" :key="data.month" ripple>{{ data.month }}月</v-tab>
        <v-tab-item v-for="data in dataList" :key="data">
          <v-card flat>
            <v-card-text>{{ data.works }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { PlantMonth } from '../model/index';

export interface PlantMonthList {
  month: number;
  works: PlantMonth;
}

@Component
export default class Month extends Vue {
  private month3Data: PlantMonth = require('../assets/data/month.3.json');
  private month4Data: PlantMonth = require('../assets/data/month.4.json');
  private dataList: PlantMonthList[] = [];

  constructor () {
    super();
    this.dataList.push({
      month: 3, works: this.month3Data
    });
    this.dataList.push({
      month: 4, works: this.month4Data
    });
  }
}
</script>

<style lang="scss">
</style>
