<template>
  <div class="header">
    <v-toolbar>
      <div class="h-logo">
        <router-link to="/">
          <img alt="works for plants" src="../assets/logo.png">
        </router-link>
      </div>
      <v-toolbar-title class="nav-title">Works For Plants</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/plants" class="nav-link"><v-btn flat>Plants</v-btn></router-link>
        <router-link to="/month" class="nav-link"><v-btn flat>Month</v-btn></router-link>
      </v-toolbar-items>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
.nav-title{
  font-weight: bold;
}
.nav-link{
  height: 100%;
  widows: 100%;
  text-decoration: none;
}
</style>
