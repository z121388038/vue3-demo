<template>
  <input type="text" v-model.trim="value" placeholder="请输入" />
  <p>value值为: {{ value }}</p>
  <h4>修饰符有以下几种：</h4>
  <ul>
    <li>.lazy：把默认的监听 input 事件改为监听 change</li>
    <li>.number：输入字符串转为有效的数字</li>
    <li>.trim：去除输入的首尾空格</li>
  </ul>
  <h4>该指令只能用于：input、textarea、select、components这几个标签</h4>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>

<style scoped lang="scss"></style>
