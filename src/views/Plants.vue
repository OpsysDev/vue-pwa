<template>
  <div class="plants">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-flex xs6>
        <v-text-field class="plants-input" v-model="plantName" label="植物名"></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-select class="plants-input" v-model="select" :items="items" label="属性選択" @change="onChange" single-line></v-select>
      </v-flex>
    </v-form>
    <div v-if="selected">
      <v-tabs dark color="cyan" show-arrows>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="work in plantData.works" :key="work.month">{{work.month}}</v-tab>
        <v-tab-item v-for="data in plantData.works" :key="data.month" class="plants-tab_item">{{data}}</v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PlantYear, WorkMonth } from '../model/index';
import { Const } from '../const';

@Component
export default class Plants extends Vue {
  private plantData: PlantYear = { plantName: '',plantTypeName: '',plantFamilyName: '',works: [] };
  private plantName: string = '';
  private valid: boolean = true;
  private select = null;
  private selected = '';
  private yearList: string[] = [];

  get items () {
    const selectArray: string[] = [];
    const plantFamily = sessionStorage.getItem(Const.FAMILY);
    if (plantFamily) {
      const jsonData = JSON.parse(plantFamily);
      if (jsonData) {
        Object.keys(jsonData).forEach((e) => {
          selectArray.push(jsonData[e].plant_family);
        });
      }
      return selectArray;
    }
  }

  constructor () {
    super();
    this.yearList = new Const().getYearList();
  }

  public onChange (select: string) {
    this.selected = select;
    this.plantData = this.setPlantData();
    this.plantData.plantName = this.plantName;
    this.plantData.plantFamilyName = this.selected;
  }

  private setPlantData (): PlantYear {
    let data: PlantYear;
    const worksData = this.storageToWorks(this.yearList);

    data = {
      plantName: this.plantName,
      plantTypeName: '',
      plantFamilyName: this.selected,
      works: worksData
    };
    return data;
  }

  private storageToWorks (keys: string[]): WorkMonth[] {
    const works: WorkMonth[] = [];

    keys.forEach((key: string) => {
      const storage = sessionStorage.getItem(key);

      if (storage) {
        const monthJson = JSON.parse(storage);
        let work: WorkMonth;
        Object.keys(monthJson).forEach((e) => {
          const json: any[] = monthJson[e];
          const familyData = json.filter((f) => f.plant_family === this.selected);
          work = {
            month: key, watering: familyData[0].watering,
            fertilizer: familyData[0].fertilizer, location: familyData[0].location,
            status: `${familyData[0].status1},${familyData[0].status2}`,
            work: [`${familyData[0].work1},${familyData[0].work2},${familyData[0].work3},${familyData[0].work4}`],
            other: familyData[0].other };

          works.push(work);
        });
      }
    });
    return works;
  }
}
</script>

<style lang="scss">
// wip
.plants {
  height: 100vh;
}
.plants-input {
  background-color: whitesmoke;
}
.plants-tab_item {
  background-color: greenyellow;
}
</style>
