<template>
  <el-collapse>
    <el-collapse-item title="这是测试Props相关的组件">
      <el-card>
        <ComponentLocal
          msg="这是一个局部注册组件"
          :age="11"
          aa="这是aa属性"
          bb="这是bb属性"
          style="color: cornflowerblue"
          @change="attrClick"
        ></ComponentLocal>
      </el-card>
    </el-collapse-item>

    <el-collapse-item title="这是emit自定义事件测试的组件">
      <el-card>
        <ComponentEmit
          @my-click="emitClick"
          @click-required="emitClickRequired"
          v-model:title.capitalize="title"
          v-model:age.number="age"
        ></ComponentEmit>
        <div>v-model父组件title: {{ title }}</div>
        <div>v-model父组件age: {{ age }}</div>
      </el-card>
    </el-collapse-item>

    <el-collapse-item title="这是slot相关的">
      <el-card>
        <ComponentSlot>
          <template #slot1="parentSlotInfo1">
            <p style="color: cornflowerblue">父组件slot内容--{{ parentSlotInfo1 }}</p>
          </template>
          <p style="color: cornflowerblue">父组件slot内容2222</p>
        </ComponentSlot>
      </el-card>
    </el-collapse-item>

    <el-collapse-item title="provide和inject相关">
      <el-card>
        <ComponentProvide></ComponentProvide>
        <el-button @click="changeUsers">change users -- {{ title }}</el-button>
        <ul>
          <li v-for="user in users" :key="user.name">{{ user.name }} -- {{ user.age }}</li>
        </ul>
      </el-card>
    </el-collapse-item>

    <el-collapse-item title="异步组件和动态组件">
      <el-card>
        <el-radio-group v-model="radioValue">
          <el-radio-button :label="1">组件一</el-radio-button>
          <el-radio-button :label="2">组件二</el-radio-button>
          <el-radio-button :label="3">组件三</el-radio-button>
        </el-radio-group>
        <keep-alive>
          <component :is="currentTabComponent"></component>
        </keep-alive>
      </el-card>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { ElMessage } from 'element-plus';
// import ComponentLocal from "./components/ComponentLocal.vue";
import ComponentEmit from './components/ComponentEmit.vue';
import ComponentSlot from './components/ComponentSlot.vue';
import ComponentProvide from './components/ComponentProvide.vue';

export default {
  name: 'ComponentInfoIndex',
  components: {
    ComponentLocal: defineAsyncComponent(() => import('./components/ComponentLocal.vue')),
    ComponentEmit,
    ComponentSlot,
    ComponentProvide,
  },
  provide() {
    return {
      users: this.users,
      title: this.title,
    };
  },
  data() {
    return {
      radioValue: 2,
      title: '张三',
      age: 25,
      users: [
        { name: '张三', age: 25 },
        { name: '李四', age: 26 },
        { name: '王二', age: 277 },
        { name: '曹五', age: 2325 },
      ],
    };
  },
  computed: {
    currentTabComponent() {
      const arr = ['ComponentEmit', 'ComponentSlot', 'ComponentProvide'];
      return arr[this.radioValue - 1];
    },
  },
  methods: {
    attrClick({ target }) {
      ElMessage({
        message: `这是通过attr触发的，选中的值是：${target.value}`,
        type: 'warning',
      });
    },
    emitClick(info) {
      ElMessage({
        message: `这是子组件emit过来的：${JSON.stringify(info)}`,
        type: 'warning',
      });
    },
    emitClickRequired(info) {
      ElMessage({
        message: `这是子组件emit过来的：${JSON.stringify(info)}`,
        type: 'warning',
      });
    },
    changeUsers() {
      this.users.push({ name: 'sadf', age: 2 });
      this.title = `change title ${new Date().getTime()}`;
    },
  },
};
</script>

<style scoped></style>
