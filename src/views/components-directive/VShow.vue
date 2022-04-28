<template>
  <p>v-show该节点会一直存在，只是切换元素的 display</p>
  <el-button @click="isShow = !isShow">点击显示隐藏</el-button>
  <p v-show="isShow">{{ isShow }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isShow = ref(false);
</script>

<style scoped lang="scss"></style>
