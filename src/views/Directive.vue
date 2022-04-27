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
  <p>v-is: 3.1.0已弃用，请换用带有 vue: 前缀的 is attribute。</p>
  <el-button v-debounce="click">这里是防抖指令，快速点击试试:{{ debounceText }}</el-button>
  <el-button v-background="background" style="color: white" @click="changeBackground">
    这里是设置背景色指令：{{ background }}
  </el-button>
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

const debounceText = ref(new Date().getTime());
const click = () => (debounceText.value = new Date().getTime());

const background = ref('#4598d2');
const changeBackground = () =>
  (background.value = `#${('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)}`);
</script>

<style scoped lang="scss"></style>
