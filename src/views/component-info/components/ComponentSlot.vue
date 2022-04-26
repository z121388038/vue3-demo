<template>
  <p style="color: red">{{ text }}</p>
  <p>子组件自己的内容</p>
  <slot name="slot1" :info="slot1Info"></slot>
  <p>子组件自己的内容222</p>
  <slot name="slot2"></slot>
  <p>子组件自己的内容333</p>
  <slot name="slot3"></slot>
  <p>子组件自己的内容444</p>
  <slot></slot>
  <p>子组件自己的内容555</p>
  <slot></slot>
</template>

<script>
export default {
  name: 'ComponentSlot',
  data() {
    return {
      text: 'v-slot 只能添加在 <template> 上 (只有一种例外情况:独占默认插槽的缩写语法)。',
      slot1Info: {
        name: 'slot1',
        text: 'slot1 text',
      },
    };
  },
};
</script>

<style scoped></style>
