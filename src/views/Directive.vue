<template>
  <el-card :header="`vue内置指令：${directiveList.length} 个`">
    <el-tag v-for="tag in directiveList" :key="tag" style="margin-bottom: 5px; margin-right: 5px">{{
      tag
    }}</el-tag>
    <ul>
      <li>v-is: 已在 3.1.0 中被废弃。请换用带有 vue: 前缀的 is attribute。</li>
      <li>v-memo: 3.2新增指令</li>
    </ul>
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

  <el-card style="margin-top: 10px" header="自定义指令">
    <el-button v-debounce="click">这里是防抖指令，快速点击试试:{{ debounceText }}</el-button>
    <el-button v-background="background" style="color: white" @click="changeBackground">
      这里是设置背景色指令：{{ background }}
    </el-button>
    <el-button v-my-directive style="color: white">setup中局部注册自定义指令</el-button>
    <p>
      setup中局部注册自定义指令必须以 vNameOfDirective
      的形式来命名本地自定义指令，以使得它们可以直接在模板中使用。
    </p>
  </el-card>

  <el-card header="16个内置指令示例" style="margin-top: 10px">
    <el-collapse>
      <el-collapse-item title="v-text示例">
        <VText></VText>
      </el-collapse-item>
      <el-collapse-item title="v-html示例">
        <VHtml></VHtml>
      </el-collapse-item>
      <el-collapse-item title="v-pre示例">
        <VPre></VPre>
      </el-collapse-item>
      <el-collapse-item title="v-show示例">
        <VShow></VShow>
      </el-collapse-item>
      <el-collapse-item title="v-for示例">
        <VFor></VFor>
      </el-collapse-item>
      <el-collapse-item title="v-once示例">
        <VOnce></VOnce>
      </el-collapse-item>
      <el-collapse-item title="v-mome示例">
        <VMemo></VMemo>
      </el-collapse-item>
      <el-collapse-item title="v-model示例">
        <VModel></VModel>
      </el-collapse-item>
      <el-collapse-item title="v-on示例">
        <VOn></VOn>
      </el-collapse-item>
      <el-collapse-item title="v-bind示例">
        <VBind></VBind>
      </el-collapse-item>
      <el-collapse-item title="v-slot示例">
        <VSlot></VSlot>
      </el-collapse-item>
      <el-collapse-item title="v-cloak示例">
        <VCloak></VCloak>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, Directive } from 'vue';
import VText from '@/views/components-directive/VText.vue';
import VHtml from '@/views/components-directive/VHtml.vue';
import VPre from '@/views/components-directive/VPre.vue';
import VShow from '@/views/components-directive/VShow.vue';
import VFor from '@/views/components-directive/VFor.vue';
import VOnce from '@/views/components-directive/VOnce.vue';
import VMemo from '@/views/components-directive/VMemo.vue';
import VModel from '@/views/components-directive/VModel.vue';
import VCloak from '@/views/components-directive/VCloak.vue';
import VOn from '@/views/components-directive/VOn.vue';
import VBind from '@/views/components-directive/VBind.vue';
import VSlot from '@/views/components-directive/VSlot.vue';

const vMyDirective: Directive = {
  mounted: (el) => {
    el.style.background = 'red';
  },
};

const directiveList = ref([
  'v-text',
  'v-html',
  'v-pre',
  'v-if',
  'v-else',
  'v-else-if',
  'v-show',
  'v-for',
  'v-once',
  'v-memo',
  'v-slot',
  'v-on',
  'v-bind',
  'v-model',
  'v-cloak',
  'v-is',
] as string[]);

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
