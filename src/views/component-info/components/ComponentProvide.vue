<template>
  <p>父组件传值给深层次的子组件--{{ title }}</p>
  <ul>
    <li v-for="user in users" :key="user.name">{{ user.name }} -- {{ user.age }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ComponentProvide',
  inject: ['users', 'title'],
};
</script>

<style scoped></style>
