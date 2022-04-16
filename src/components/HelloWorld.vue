<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p @click="changeName" :title="name">
      {{ name }}sadfasdfsa撒旦发射点发asdfsa撒旦发射点发asdfsa撒旦发射点发
    </p>
    <ul>
      <li v-for="item in list" :key="item.name">
        {{ item.name }}--{{ item.age }}
      </li>
    </ul>
    <el-button @click="click1($event), click2($event)">
      click 多事件处理器
    </el-button>

    <form @submit.prevent="onSubmit">
      <button>asdfadf</button>
    </form>

    <div @click.capture="capture('capture1')">
      <div @click.capture="capture('capture2')">
        <div @click.self="capture('capture3')">
          <div @click.capture="capture('capture4')">capture</div>
        </div>
      </div>
    </div>

    <input @keydown.tab="submit" />
    <input @keyup.enter="submit" />
    <div @click.right.prevent="submit">禁止鼠标右键默认事件</div>
    <input @keyup.alt.enter="submit" />
    <div @click.ctrl.alt="submit">Do something</div>

    <div @click="onStop(1)">
      <div @click="onStop(2)">
        <div @click.stop="onStop(3)">.stop</div>
      </div>
    </div>

    <a href="https://www.baidu.com">百度</a>
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
  created() {
    // console.log(this.$router.getRoutes());
    console.log("props", this.$props);
    console.log("$attrs", this.$attrs);
  },
  methods: {
    click1(event: object) {
      console.log("click1", event);
    },
    click2(event: object) {
      console.log("click2", event);
    },
    onSubmit() {
      console.log("form onSubmit");
    },
    capture(text: string) {
      console.log(text || "capture");
    },
    submit() {
      console.log(1111);
    },
    onStop(text: number) {
      console.log(text);
    },
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
