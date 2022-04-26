<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>-------------</p>
    <input type="text" @change="click" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const click = ({ target }: Event) => {
      console.log(12211, 'click', (target as HTMLInputElement).value);
    };

    onMounted(() => {
      nextTick(() => console.log('干自己想干的事情'));
    });

    return { click };
  },
});
</script>
