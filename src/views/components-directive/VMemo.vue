<template>
  <p>3.2新增指令</p>
  <p>
    记住一个模板的子树，元素和组件都可使用。该指令接受一个固定长度的数组作为依赖值进行记忆比对。如果数组中的每个值和上次渲染的时候相同，则整个该子树的更新都会被跳过
  </p>
  <p>
    v-memo 仅供性能敏感场景的针对性优化，会用到的场景应该很少。渲染 v-for 长列表 (长度大于 1000)
    可能是它最有用的场景：
  </p>
  <div v-for="item in list" :key="item.id" v-memo="[item.id === selected]">
    <p>ID: {{ item.id }} - selected: {{ item.id === selected }}</p>
  </div>
  当组件的 selected 状态发生变化时，即使绝大多数 item 都没有发生任何变化，大量的 VNode
  仍将被创建。此处使用的 v-memo 本质上代表着“仅在 item
  从未选中变为选中时更新它，反之亦然”。这允许每个未受影响的 item 重用之前的
  VNode，并完全跳过差异比较。注意，我们不需要把 item.id 包含在记忆依赖数组里面，因为 Vue 可以自动从
  item 的 :key 中把它推断出来。
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const list = reactive([
  { name: '张三', id: 1 },
  { name: '李四', id: 2 },
  { name: '王二', id: 3 },
  { name: '赵五', id: 4 },
  { name: '曹六', id: 5 },
]);
const selected = ref(1);
</script>

<style scoped lang="scss"></style>
