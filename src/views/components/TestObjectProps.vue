<template>
  <div>{{ name }} -- {{ age }} -- {{ six }}</div>
</template>

<script>
import Persion from "@/views/Persion";

export default {
  name: "TestObjectProps",
  props: {
    name: Persion,
    age: Number,
    six: String,
  },
};
</script>

<style scoped></style>
