<template>
  <div class="plants">
    <div>plant-type-data: {{plantTypeData}}</div>
    <div>plant-family-data: {{plantFamilyData}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PlantType, PlantFamily } from '../model/index';
@Component
export default class Plants extends Vue {
  private plantTypeData: PlantType = require('../assets/data/plant.type.json');
  private plantFamilyData: PlantFamily = require('../assets/data/plant.family.json');

}
</script>

<style lang="scss">
</style>
