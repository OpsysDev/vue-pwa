<template>
  <div class="home">
    <div class="link-btn">
      <div class="link-btn_plants"></div>
      <div class="link-btn_month"></div>
    </div>
  </div>
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
  width: 100vw;
  height: auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.link-btn {
  padding-top: 200px;
  display: flex;
  justify-content: center;
  &_plants {
    height: 100px;
    width: 100px;
  }
  &_month {
    height: 100px;
    width: 100px;
  }
}
</style>
