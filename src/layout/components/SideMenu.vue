<template>
  <div class="side-wrap">
    <div class="menu">
      <el-menu
        active-text-color="#1e80ff"
        background-color="#545c64"
        :default-active="active"
        text-color="#fff"
        :unique-opened="true"
      >
        <SideMenuItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :showIcon="true"
        ></SideMenuItem>
      </el-menu>
    </div>
    <div class="author">作者：Memory</div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { routes } from '@/router/index';
import SideMenuItem from '@/layout/components/SideMenuItem.vue';
import { computed } from 'vue';
const route = useRoute();

const active = computed(() => {
  return route.fullPath;
});
</script>

<style scoped lang="scss">
.side-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background: #545c64;
  color: white;
  display: flex;
  flex-direction: column;
  .el-menu {
    border-right-color: #545c64;
  }
  .menu {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover,
    &::-webkit-scrollbar-thumb:active {
      background: rgba(255, 255, 255, 0.3);
      //border-radius: 6px;
    }
  }
  .author {
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
  }
}
</style>
