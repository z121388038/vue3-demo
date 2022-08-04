<template>
  <h3>ref</h3>
</template>

<script lang="ts" setup>
import { reactive, ref, toRef, unref } from 'vue';

// const name1 = '张三';
// const name2 = ref('李四');
//
// console.log(unref(name1), unref(name2));

const state = reactive({
  foo: 1,
  bar: 2,
});

const fooRef = toRef(state, 'foo');
fooRef.value++;
console.log(state, fooRef.value);

state.foo++;
console.log(state, fooRef.value);

console.log(state.foo === fooRef.value);
</script>

<style scoped lang="scss"></style>
