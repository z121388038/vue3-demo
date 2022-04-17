<template>
  <ComponentLocal
    msg="这是一个局部注册组件"
    :age="11"
    aa="这是aa属性"
    bb="这是bb属性"
    style="color: cornflowerblue"
    @change="attrClick"
  ></ComponentLocal>
  <ComponentEmit
    @my-click="emitClick"
    @click-required="emitClickRequired"
    v-model:title.capitalize="title"
    v-model:age.number="age"
  ></ComponentEmit>
  <div>v-model父组件title: {{ title }}</div>
  <div>v-model父组件age: {{ age }}</div>
</template>

<script>
import { ElMessage } from "element-plus";
import ComponentLocal from "./components/ComponentLocal.vue";
import ComponentEmit from "./components/ComponentEmit.vue";

export default {
  name: "ComponentInfoIndex",
  components: {
    ComponentLocal,
    ComponentEmit,
  },
  data() {
    return {
      title: "张三",
      age: 25,
    };
  },
  methods: {
    attrClick({ target }) {
      ElMessage({
        message: `这是通过attr触发的，选中的值是：${target.value}`,
        type: "warning",
      });
    },
    emitClick(info) {
      ElMessage({
        message: `这是子组件emit过来的：${JSON.stringify(info)}`,
        type: "warning",
      });
    },
    emitClickRequired(info) {
      ElMessage({
        message: `这是子组件emit过来的：${JSON.stringify(info)}`,
        type: "warning",
      });
    },
  },
};
</script>

<style scoped></style>
