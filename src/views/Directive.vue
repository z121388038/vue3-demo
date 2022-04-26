<template>
  <el-card :header="`vue内置指令：${directiveList.length} 个`">
    <el-tag v-for="tag in directiveList" :key="tag" style="margin-bottom: 5px; margin-right: 5px">{{
      tag
    }}</el-tag>
  </el-card>
  <div v-html="vHtml"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const directiveList = ref([
  'v-if',
  'v-else',
  'v-else-if',
  'v-show',
  'v-bind',
  'v-model',
  'v-for',
  'v-slot',
  'v-on',
  'v-text',
  'v-html',
  'v-pre',
  'v-is',
  'v-once',
  'v-memo',
  'v-cloak',
] as string[]);
const vHtml = ref('<h3>这是<span style="color: red;">v-html</span></h3>');
</script>

<style scoped lang="scss"></style>
