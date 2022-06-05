<template>
  <div class="common-layout">
    <SideMenu></SideMenu>

    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideMenu from '@/layout/components/SideMenu.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
.main {
  padding: 10px 10px 10px 210px;
}
</style>
