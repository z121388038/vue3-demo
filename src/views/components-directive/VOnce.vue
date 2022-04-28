<template>
  <div>
    <p>
      只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
    </p>
    <p v-once>这是msg: {{ msg }}</p>
    <p>自 3.2 开始，你还可以通过 v-memo 来记住带有失效条件的部分模板。</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const msg = ref('hello');
</script>

<style scoped lang="scss"></style>
