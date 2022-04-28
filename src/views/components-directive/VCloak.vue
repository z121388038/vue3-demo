<template>
  <div v-cloak>{{ msg }}</div>
  <p>
    这个指令保持在元素上直到关联组件实例结束编译。和 CSS 规则如 [v-cloak] { display: none }
    一起用时，这个指令可以隐藏未编译的 Mustache 标签直到组件实例准备完毕。
  </p>
  <h4>作用：为了防止在页面加载时先出现变量名闪烁的情况，造成不好的用户体验</h4>
  <p v-html="'例如：{{ msg }} (闪一下)=> hello'"></p>
  <p>用法：</p>
  <p v-html="'html中： {{ msg }}'"></p>
  <p v-html="'css中[v-cloak] { display:none }'"></p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const msg = ref('hello');
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
</style>
