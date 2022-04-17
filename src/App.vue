<template>
  <div class="common-layout">
    <div class="aside-wrap">
      <AsideMenu></AsideMenu>
    </div>
    <div class="main-wrap">
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AsideMenu from "@/components/AsideMenu.vue";

export default defineComponent({
  components: { AsideMenu },
});
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
