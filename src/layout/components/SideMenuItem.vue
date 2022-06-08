<template>
  <el-sub-menu :index="item.path" v-if="isShowChildren">
    <template #title>
      <!--      <el-icon v-if="showIcon"><setting /></el-icon>-->
      <span>{{ item.name }}</span>
    </template>

    <SideMenuItem v-for="child in item.children" :key="child.path" :item="child"></SideMenuItem>
  </el-sub-menu>

  <el-menu-item :index="getResolvePath(item)" v-else @click="goNext(item)">
    <!--    <el-icon v-if="showIcon"><setting /></el-icon>-->
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { RouteRecordRaw } from 'vue-router';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { isExternal } from '@/utils/validate';
const router = useRouter();

const props = withDefaults(defineProps<{ item: RouteRecordRaw; showIcon?: boolean }>(), {
  showIcon: false,
});

// 是否渲染子级
const isShowChildren = computed(() => (props.item.children || []).length > 1);

// 转换成标准的url地址
const getResolvePath = (routeItem: RouteRecordRaw) => router.resolve(routeItem).fullPath;

const goNext = (item) => {
  isExternal(item.path) ? window.open(item.path, '_blank') : router.push(getResolvePath(item));
};
</script>

<style scoped lang="scss"></style>
