<template>
  <el-card :header="`vue内置指令：${directiveList.length} 个`">
    <el-tag v-for="tag in directiveList" :key="tag" style="margin-bottom: 5px; margin-right: 5px">{{
      tag
    }}</el-tag>
  </el-card>

  <el-card style="margin-top: 10px">
    <div v-html="vHtml"></div>
    <p v-bind:title="directiveList[4]">v-bind</p>
    <input type="text" placeholder="v-model" v-model="directiveList[5]" />
    <p v-pre>{{ asadfasdf }}</p>
    <p>v-is: 3.1.0已弃用，请换用带有 vue: 前缀的 is attribute。</p>
    <el-button v-debounce="click">这里是防抖指令，快速点击试试:{{ debounceText }}</el-button>
    <el-button v-background="background" style="color: white" @click="changeBackground">
      这里是设置背景色指令：{{ background }}
    </el-button>
  </el-card>

  <el-card header="有哪些钩子" style="margin-top: 10px">
    <el-button @click="showHook = !showHook">自己先想想指令有哪些钩子，再点击看对不对</el-button>
    <el-input style="margin-top: 10px" v-model="myHooks" placeholder="请输入你想的钩子" />
    <ul v-if="showHook">
      <li v-for="hook in hookList" :key="hook.name">
        <el-button type="text" @click="hook.showDesc = !hook.showDesc"
          >{{ hook.name }}：{{ hook.showDesc ? hook.desc : '描述又是啥呢？' }}</el-button
        >
      </li>
    </ul>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const directiveList = ref([
  'v-if',
  'v-else',
  'v-else-if',
  'v-show',
  'v-bind',
  'v-model',
  'v-for',
  'v-slot',
  'v-on',
  'v-text',
  'v-html',
  'v-pre',
  'v-is',
  'v-once',
  'v-memo',
  'v-cloak',
] as string[]);
const vHtml = ref('<h3>这是<span style="color: red;">v-html</span></h3>');

const debounceText = ref(new Date().getTime());
const click = () => (debounceText.value = new Date().getTime());

const background = ref('#4598d2');
const changeBackground = () =>
  (background.value = `#${('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)}`);

const myHooks = ref('');
const showHook = ref(false);
const hookList = ref([
  {
    name: 'created',
    desc: '在绑定元素的 attribute 或事件监听器被应用之前调用。在指令需要附加在普通的 v-on 事件监听器调用前的事件监听器中时，这很有用。',
    showDesc: false,
  },
  {
    name: 'beforeMount',
    desc: '当指令第一次绑定到元素并且在挂载父组件之前调用。',
    showDesc: false,
  },
  { name: 'mounted', desc: '在绑定元素的父组件被挂载后调用。', showDesc: false },
  { name: 'beforeUpdate', desc: '在更新包含组件的 VNode 之前调用。', showDesc: false },
  { name: 'updated', desc: '在包含组件的 VNode 及其子组件的 VNode 更新后调用。', showDesc: false },
  { name: 'beforeUnmount', desc: '在卸载绑定元素的父组件之前调用', showDesc: false },
  {
    name: 'unmounted',
    desc: '当指令与元素解除绑定且父组件已卸载时，只调用一次。',
    showDesc: false,
  },
]);
</script>

<style scoped lang="scss"></style>
