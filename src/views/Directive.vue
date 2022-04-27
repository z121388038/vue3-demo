<template>
  <el-card :header="`vue内置指令：${directiveList.length} 个`">
    <el-tag v-for="tag in directiveList" :key="tag" style="margin-bottom: 5px; margin-right: 5px">{{
      tag
    }}</el-tag>
  </el-card>
  <div v-html="vHtml"></div>
  <p v-bind:title="directiveList[4]">v-bind</p>
  <input type="text" placeholder="v-model" v-model="directiveList[5]" />
  <p v-pre>{{ asadfasdf }}</p>
  <p v-debounce="click" v-background="'#4598d2'">
    v-is: 3.1.0已弃用，请换用带有 vue: 前缀的 is attribute。
  </p>
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
const click = () => console.log(new Date().getTime());
</script>

<style scoped lang="scss"></style>
