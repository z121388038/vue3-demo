<template>
  <div class="about">
    <TestObjectProps :="person" six="女"></TestObjectProps>
    <TestAttr
      title="这是title"
      class="sdf"
      style="color: red"
      :value="person.age"
      @change="myClick"
    ></TestAttr>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestObjectProps from "./components/TestObjectProps";
import TestAttr from "./components/TestAttr";
import Persion from "@/views/Persion";

export default defineComponent({
  components: {
    TestObjectProps,
    TestAttr,
  },
  data() {
    return {
      person: {
        name: new Persion(),
        age: 2533,
      },
    };
  },
  methods: {
    myClick(e) {
      console.log("fu click", e.target.value);
    },
  },
});
</script>
