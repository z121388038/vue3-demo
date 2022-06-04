<template>
  <div style="width: 200px; margin-right: 20px">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <SideMenuItem
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :showIcon="true"
      ></SideMenuItem>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { routes } from '@/router/index';
import SideMenuItem from '@/layout/components/SideMenuItem.vue';
</script>

<style scoped lang="scss"></style>
