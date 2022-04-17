<template>
  <input type="text" />
  <!--  <div>-->
  <!--    <p>组件的props: {{ name }}</p>-->
  <!--    <p>不在props里面的attr: {{ $attrs }}</p>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "TestAttr",
  // inheritAttrs: false,
  props: {
    name: String,
  },
};
</script>

<style scoped></style>
