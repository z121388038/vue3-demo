<template>
  <div class="about">
    <TestObjectProps :="person" six="女"></TestObjectProps>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestObjectProps from "./components/TestObjectProps";
import Persion from "@/views/Persion";

export default defineComponent({
  components: {
    TestObjectProps,
  },
  data() {
    return {
      person: {
        name: new Persion(),
        age: 2533,
      },
    };
  },
});
</script>
