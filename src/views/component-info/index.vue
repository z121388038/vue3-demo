<template>
  <ComponentLocal
    msg="这是一个局部注册组件"
    :age="11"
    aa="这是aa属性"
    bb="这是bb属性"
    style="color: cornflowerblue"
    @change="attrClick"
  ></ComponentLocal>
</template>

<script>
import { ElMessage } from "element-plus";
import ComponentLocal from "./components/ComponentLocal.vue";

export default {
  name: "ComponentInfoIndex",
  components: {
    ComponentLocal,
  },
  methods: {
    attrClick({ target }) {
      ElMessage({
        message: `这是通过attr触发的，选中的值是：${target.value}`,
        type: "warning",
      });
    },
  },
};
</script>

<style scoped></style>
