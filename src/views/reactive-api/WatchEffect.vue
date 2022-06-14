<template>
  <p>立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。</p>
  <pre>
    watchEffect(() => console.log(count.value), { flush: 'sync' })
  </pre>
  <p>flush默认值'post'</p>
  <ul>
    <li>同步方式： flush: sync</li>
    <li>组件更新前执行： flush: pre</li>
  </ul>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';

const count = ref(1);
let loopNum = 0;
const stop = watchEffect(() => console.log(count.value), { flush: 'sync' });
const timer = setInterval(() => {
  loopNum++;
  if (loopNum > 5) {
    clearInterval(timer);
    stop();
    console.log('loop次数大于5次, 取消watchEffect、setInterval');
  } else {
    count.value = Math.random();
  }
}, 1000);
</script>

<style scoped lang="scss"></style>
