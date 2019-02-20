<template>
  <div class="header">
    <div class="h-logo">
      <router-link to="/">
        <img alt="works for plants" src="../assets/logo.png">
      </router-link>
    </div>
    <div class="h-nav">
      <navigation/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import navigation from '@/components/Navigation.vue';

@Component({
  components: {
    navigation
  }
})
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
  background: red;
  display: flex;
  align-items: center;

  .h-logo {
    height: 64px;
    width: 64px;
  }
  .h-nav {
    height: 100%;
    width: 100%;
  }
}
</style>
