<template>
  <div class="common-layout">
    <el-container>
      <!--      <el-header>Header</el-header>-->
      <el-container>
        <el-aside width="200px">
          <AsideMenu></AsideMenu>
          <!--          <router-link to="/">Home</router-link> |-->
          <!--          <router-link to="/about">About</router-link>-->
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
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
  text-align: center;
  color: #2c3e50;
}
</style>
