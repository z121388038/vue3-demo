<template>
  <div class="common-layout">
    <div class="aside-wrap">
      <SideMenu></SideMenu>
      <Author></Author>
    </div>
    <div class="main-wrap">
      <div class="main" style="display: flex">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideMenu from '@/layout/components/SideMenu.vue';
import Author from '@/layout/components/Author.vue';
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
.aside-wrap {
  position: fixed;
  left: 0;
  top: 0;
  background: #545c64;
  height: 100%;
  width: 200px;
}
.main-wrap {
  padding: 10px 10px 10px 210px;
}
</style>
