<template>
  <div>reactive api</div>
  <div @click="clicks">foo: {{ list.foo }}</div>
  <div @click="clicks2">bar: {{ list.nested.bar }}</div>
  <div>{{ list }}</div>
</template>

<script lang="ts" setup>
import {
  isProxy,
  isReactive,
  isRef,
  markRaw,
  reactive,
  readonly,
  ref,
  shallowReactive,
  toRaw,
  watchEffect,
} from 'vue';

// const xx = ref(23);
// const xx = reactive({ name: 'sdf' });
// const xx = readonly(ref(23));
// const obj = reactive({ name: '张三', age: xx });
// setTimeout(() => {
//   xx.value = 252;
// }, 2000);
// console.log(isReactive(obj.xx), isRef(obj.age));
// const a = readonly({ name: 'a' });
// const b = readonly(reactive({ name: 'b' }));
// console.log('a:', isReactive(a), 'b:', isReactive(b));

// console.log('xx', isProxy(xx), xx);

// readonly
/*
const org = reactive({ count: 0 });
const copy = readonly(org);
watchEffect(() => {
  console.log(1, copy.count);
});
setTimeout(() => {
  org.count++;
}, 2000);
*/

// toRaw
/*
const foo = { name: '张三' };
const reactiveFoo = reactive(foo);
setTimeout(() => {
  // reactiveFoo.age = 23;
  // reactiveFoo.name = 'lisi';
  foo.age = 2323;
  foo.name = 'sdf';
  console.log(foo, reactiveFoo, toRaw(reactiveFoo), foo === toRaw(reactiveFoo));
}, 1000);
*/

// markRaw

// shallowReactive
const list = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});

const clicks = () => {
  list.foo++;
};

const clicks2 = () => {
  list.nested.bar++;
};
// setInterval(() => {
//   // list.page = 2;
//   // list.loading = !list.loading;
//   // list.search.key = 'sdf';
//   // console.log(111, list);
//
//   list.foo++;
//   list.nested.bar++;
// }, 1000);
</script>

<style scoped lang="scss"></style>
