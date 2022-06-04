<template>
  <el-sub-menu :index="item.path" v-if="isShowChildren">
    <template #title>
      <el-icon v-if="showIcon"><setting /></el-icon>
      <span>{{ item.name }}</span>
    </template>

    <SideMenuItem v-for="child in item.children" :key="child.path" :item="child"></SideMenuItem>
  </el-sub-menu>

  <el-menu-item :index="getResolvePath(item.path)" v-else>
    <el-icon v-if="showIcon"><setting /></el-icon>
    <span>{{ item.name }}</span>
  </el-menu-item>

  <!--  <el-sub-menu index="1">
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

  <el-menu-item index="4">
    <el-icon><setting /></el-icon>
    <span>Navigator Four</span>
  </el-menu-item>-->
</template>

<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = withDefaults(defineProps<{ item: RouteRecordRaw; showIcon?: boolean }>(), {
  showIcon: false,
});

// 是否渲染子级
const isShowChildren = computed(() => (props.item.children || []).length > 1);

const getResolvePath = (path: string) => router.resolve(path).href;
</script>

<style scoped lang="scss"></style>
