<template>
  <div>
    <p>这是子组件：{{ value }}</p>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentVModelSon",
  props: ["modelValue"],
  emits: ["update:modelValue"],
});
</script>

<style scoped></style>
