<template>
  <div style="border: 1px solid #f5f5f5; padding: 10px; margin-top: 10px">
    <p>这里在父组件使用了keep-alive</p>
    <p>childData: {{ childData }}</p>
    <p>父组件传递过来的name: {{ name }}</p>
    <el-button @click="changeChildData">click childData</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Child',
  props: {
    name: String,
  },
  data() {
    return {
      childData: 'childData',
    };
  },
  beforeCreate() {
    console.log('child beforeCreate');
  },
  created() {
    console.log('child created, 这里适合请求部分api数据');
  },
  beforeMount() {
    console.log('child beforeMount');
  },
  mounted() {
    console.log('child mounted');
  },
  beforeUpdate() {
    console.log('child beforeUpdate');
  },
  updated() {
    console.log('child updated');
  },
  beforeUnmount() {
    console.log('child beforeUnmount');
  },
  unmounted() {
    console.log('child unmounted');
  },
  activated() {
    console.log('child activated');
  },
  deactivated() {
    console.log('child deactivated');
  },
  methods: {
    changeChildData() {
      this.childData = `change childData ${new Date().getTime()}`;
      console.log('click change childData');
    },
  },
});
</script>

<style scoped lang="scss"></style>
