<template>
  <div style="text-align: center; padding: 5px 0">作者：{{ author }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const author = ref('Memory');
</script>

<style scoped></style>
