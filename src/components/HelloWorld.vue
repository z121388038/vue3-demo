<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p @click="changeName" :title="name">{{ name }}</p>
    <ul>
      <li v-for="item in list" :key="item.name">
        {{ item.name }}--{{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [
        { name: "张三", age: 25 },
        { name: "张三22", age: 252 },
        { name: "张三22", age: 2533 },
      ],
    };
  },
  setup() {
    let name = ref("zhangsan222");

    const changeName = () => {
      name.value = "lisi";
    };
    return { name, changeName };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
