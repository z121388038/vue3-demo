<template>
  <h4>
    绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。
  </h4>
  <h4>缩写为：@[event]="xxx"</h4>
  <h4>修饰符有以下几种：</h4>
  <ul>
    <li>.stop：阻止单击事件继续冒泡</li>
    <li>.prevent：阻止浏览器默认行为</li>
    <li>.capture：添加事件侦听器时使用事件捕获模式</li>
    <li>.self：只执行直接作用在该元素身上的事件，会忽略其他元素的冒泡或者捕获事件</li>
    <li>.once：事件只会触发一次</li>
    <li>.passive：告诉浏览器不用去查询，我们没用preventDefault阻止默认行为</li>
    <li>.{keyAlias}：仅当事件是从特定键触发时才触发回调。</li>
    <li>.left：只当点击鼠标左键时触发。</li>
    <li>.right：只当点击鼠标右键时触发。</li>
    <li>.middle：只当点击鼠标中键时触发。</li>
  </ul>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss"></style>
