<template>
  <div>
    <h3>readonly</h3>
    <p>
      只读代理是深层的；任何被访问的嵌套<el-button type="primary" link>property</el-button
      >也是只读的。
    </p>
    <p>如果readonly里面的某个key的值是引用的其他变量，这时候该key是会变的</p>
    <div>
      <el-button type="primary" link>obj: {{ obj }}</el-button>
    </div>
    <div>
      <el-button type="primary" link>obj2: {{ obj2 }}</el-button>
    </div>

    <h3>isReadonly</h3>
    <p>检测对象是否是由 <el-button type="primary" link>readonly</el-button> 创建的只读代理</p>
  </div>
</template>

<script lang="ts" setup>
import { isReadonly, reactive, readonly } from 'vue';
const obj3 = reactive({ x: 1, y: 2 });
const obj = readonly({ name: '张三', height: 180, xxx: obj3 });
const obj2 = reactive({ ...obj });

// obj.age = '23';
obj2.age = 23;
obj2.height = 190;
setTimeout(() => {
  obj3.x = 22222;
}, 2000);
console.log(obj);
console.log(obj2);
console.log(isReadonly(obj), isReadonly(obj2), isReadonly(obj3));
</script>

<style scoped lang="scss"></style>
