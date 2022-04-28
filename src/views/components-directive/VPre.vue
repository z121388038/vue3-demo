<template>
  <p>
    跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache
    标签。跳过大量没有指令的节点会加快编译。
  </p>
  <p v-pre>
    通俗点说：比如你显示{{
      xxx
    }}这样的文字，如果带上v-pre指令，编译的时候就不会去解析这个节点，你原本是什么样的就给你展示成什么样的
  </p>
  <p v-pre>{{ this will not be compiled }}</p>
</template>

<script lang="ts"></script>

<style scoped lang="scss"></style>
