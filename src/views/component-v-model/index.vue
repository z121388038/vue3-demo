<template>
  <div class="home">
    <p>这是父组件：{{ searchText }}</p>
    <ComponentVModelSon v-model="searchText" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentVModelSon from "./components/Son.vue";

export default defineComponent({
  name: "ComponentVModel",
  components: { ComponentVModelSon },
  data() {
    return {
      searchText: "初始值",
    };
  },
});
</script>
