<template>
  <div>
    <h3>reactive</h3>
    <p>count: {{ count }}</p>
    <p>obj.count: {{ obj.count }}</p>
    <p>objReadonly: {{ objReadonly }}</p>
  </div>
</template>

<script lang="ts" setup>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from 'vue';

const count = ref(2);
const obj = reactive({ count, name: 'obj' });
setTimeout(() => (count.value = 4), 2000);
setTimeout(() => (obj.count = 6), 4000);

const objReadonly = readonly({
  zhangsan: { name: 'zhangsan', age: 25 },
});

const objConst = 5;
const objConst2 = obj.name;
const objConst3 = obj.count;
setTimeout(() => {
  console.log(objConst2, '22');
  console.log(objConst3, '33');
}, 8000);
console.log('count', isProxy(count), isReactive(count), isReadonly(count), isRef(count));
console.log('obj', isProxy(obj), isReactive(obj), isReadonly(obj), isRef(obj));
console.log(
  'objReadonly',
  isProxy(objReadonly),
  isReactive(objReadonly),
  isReadonly(objReadonly),
  isRef(objReadonly)
);
console.log(
  'objConst',
  isProxy(objConst),
  isReactive(objConst),
  isReadonly(objConst),
  isRef(objConst)
);
console.log(
  'objConst2',
  isProxy(objConst2),
  isReactive(objConst2),
  isReadonly(objConst2),
  isRef(objConst2)
);
console.log(
  'objConst3',
  isProxy(objConst3),
  isReactive(objConst3),
  isReadonly(objConst3),
  isRef(objConst3)
);
</script>

<style scoped lang="scss"></style>
