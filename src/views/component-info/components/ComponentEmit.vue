<template>
  <el-card style="margin-top: 10px" header="这是emit自定义事件测试的组件">
    <el-button @click="onClick">点击</el-button>
    <el-button @click="clickRequired">带验证的点击</el-button>
    <div>
      <p>v-model子组件title：{{ title }}</p>
      <p>v-model子组件age：{{ age }}</p>
      <input
        type="text"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
      />
      <input
        type="number"
        :value="age"
        @input="$emit('update:age', $event.target.value)"
      />
    </div>
  </el-card>
</template>

<script>
export default {
  name: "ComponentEmit",
  props: {
    title: String,
    age: Number,
  },
  emits: {
    myClick: null,
    clickRequired: ({ age }) => age > 10 && age < 20,
    "update:title": null,
    "update:age": null,
  },
  methods: {
    onClick() {
      this.$emit("myClick", { info: "myclick msg" });
    },
    clickRequired() {
      this.$emit("clickRequired", { info: "clickRequired", age: 12 });
    },
  },
};
</script>

<style scoped></style>
