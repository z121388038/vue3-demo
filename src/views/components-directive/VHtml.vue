<template>
  <div v-html="vHtml"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const vHtml = ref(
  '<h2>这是v-html的h2标签啊</h2><h3 style="color: red;">这是v-html的h3标签啊,红色字体</h3>'
);
</script>

<style scoped lang="scss"></style>
