<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <!--
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
-->

    <el-menu-item
      :index="item.path"
      v-for="item in routeList"
      :key="item.path"
      @click="goNext(item)"
    >
      <el-icon><setting /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface DefaultData {
  routeList: object[];
}

export default defineComponent({
  name: "AsideMenu",
  data(): DefaultData {
    return {
      routeList: [],
    };
  },
  methods: {
    handleOpen: (key: string, keyPath: string[]) => {
      // console.log(key, keyPath);
    },
    handleClose: (key: string, keyPath: string[]) => {
      // console.log(key, keyPath);
    },
    goNext(info: { name: string; path: string }) {
      this.$router.push(info.path);
    },
  },
  created() {
    this.routeList = this.$router
      .getRoutes()
      .map(({ name, path }) => ({ name, path }));
  },
});
</script>

<style scoped></style>
