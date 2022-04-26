<template>
  <h3>生命周期</h3>
  <p>testData: {{ testData }}</p>
  <el-button @click="changeTestData">修改testData</el-button>
  <el-button @click="changeName">修改name</el-button>
  <keep-alive>
    <Child :name="name"></Child>
  </keep-alive>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Child from '@/views/life-cycle/components/Child.vue';

export default defineComponent({
  name: 'LifeCycle',
  data() {
    return {
      testData: 'test life cycle',
      name: '张三',
    };
  },
  components: {
    Child,
  },
  beforeCreate() {
    console.log('parent beforeCreate');
  },
  created() {
    console.log('parent created, 这里适合请求部分api数据');
  },
  beforeMount() {
    console.log('parent beforeMount');
  },
  mounted() {
    console.log('parent mounted');
  },
  beforeUpdate() {
    console.log('parent beforeUpdate');
  },
  updated() {
    console.log('parent updated');
  },
  beforeUnmount() {
    console.log('parent beforeUnmount');
  },
  unmounted() {
    console.log('parent unmounted');
  },
  activated() {
    console.log('parent activated');
  },
  deactivated() {
    console.log('parent deactivated');
  },
  methods: {
    changeTestData() {
      this.testData = `change TestData ${new Date().getTime()}`;
      console.log('click change TestData');
    },
    changeName() {
      this.name = `${this.name} ${new Date().getTime()}`;
      console.log('click change name');
    },
  },
});
</script>

<style scoped lang="scss"></style>
