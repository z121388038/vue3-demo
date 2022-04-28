<template>
  <p v-text="vText"></p>
  <!--  等价于 <p>{{ vText }}</p>-->
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const vText = ref('这是v-text的文案啊');
</script>

<style scoped lang="scss"></style>
