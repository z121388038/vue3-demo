<template>
  <p v-for="(value, key, index) in { name: '张三', age: 26, gender: '男' }" :key="key">
    {{ key }}：{{ value }}--{{ index }}
  </p>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
