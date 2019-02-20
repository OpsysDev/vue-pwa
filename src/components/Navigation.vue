<template>
  <div class="nav">
    <router-link to="/plants">Plants</router-link> |
    <router-link to="/Month">Month</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {}
</script>

<style lang="scss" scoped>
.nav{
}
</style>
