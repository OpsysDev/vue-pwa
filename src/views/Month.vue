<template>
  <v-app>
    <div class="month">
      <div>
        <v-tabs color="cyan" dark slider-color="yellow">
          <v-tab v-for="data in dataList" :key="data.month" ripple>{{ data.month }}月</v-tab>
          <v-tab-item v-for="data in dataList" :key="data.month">
            <v-card flat>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="data.works"
                  :loading="false"
                  class="elevation-1 table-header"
                >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.plant_family }}</td>
                    <td class="text-xs-right">{{ props.item.plant_type }}</td>
                    <td class="text-xs-right">{{ props.item.watering }}</td>
                    <td class="text-xs-right">{{ props.item.fertilizer }}</td>
                    <td class="text-xs-right">{{ props.item.location }}</td>
                    <td class="text-xs-right">
                      {{ props.item.work1}}
                      <span v-if="props.item.work2">,</span>
                      {{props.item.work2}}
                      <span v-if="props.item.work3">,</span>
                      {{props.item.work3}}
                      <span v-if="props.item.work4">,</span>
                      {{props.item.work4 }}
                    </td>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </div>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { PlantMonth, PlantType, PlantFamily } from '../model/index';

export interface PlantMonthList {
  month: number;
  works: PlantMonth;
}

@Component
export default class Month extends Vue {
  private readonly month3Data = require('../assets/data/month.3.json');
  private readonly month4Data = require('../assets/data/month.4.json');
  private readonly typeJson = require('../assets/data/plant.type.json');
  private readonly familyJson = require('../assets/data/plant.family.json');
  private dataList: PlantMonthList[] = [];

  get headers () {
    return [
      {
        text: 'グループ',
        align: 'left',
        sortable: true,
        value: 'plant_family'
      },
      { text: '属性', align: 'left', sortable: true, value: 'plant_type' },
      { text: '水やり', align: 'left', sortable: true, value: 'watering' },
      { text: '肥料', align: 'left', sortable: true, value: 'fertilizer' },
      { text: '場所', align: 'left', sortable: true, value: 'location' },
      { text: '作業', align: 'left', sortable: true, value: 'work1' }
    ];
  }

  constructor () {
    super();

    this.dataList.push({
      month: 3,
      works: this.month3Data
    });
    this.dataList.push({
      month: 4,
      works: this.month4Data
    });

  }


}
</script>

<style lang="scss">
.table-header table thead{
  background-color: greenyellow;
  th {
    font-weight: bold;
  }
}
</style>
