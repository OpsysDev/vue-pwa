<template>
  <v-container fluid>
    <v-layout align-center justify-center row fill-height class="home">
      <v-flex xs12 sm4 text-xs-center>
        <v-btn large>
          <router-link to="/plants" class="link-btn">Plants</router-link>
        </v-btn>
        <v-btn large>
          <router-link to="/month" class="link-btn">Month</router-link>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  height: 100vh;
}

.link-btn {
  text-decoration: none;
}
</style>
