<template>
  <div class="about">
    <TestObjectProps :="person" six="女"></TestObjectProps>
    <TestAttr
      title="这是title"
      class="sdf"
      style="color: red"
      :value="person.age"
      @change="myClick"
    ></TestAttr>
    <p>性别: {{ xxx }}</p>
    <div style="width: 400px; height: 400px">
      <div id="mui-player"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TestObjectProps from './components/TestObjectProps.vue';
import TestAttr from './components/TestAttr.vue';
import Persion from '@/views/Persion';
import 'mui-player/dist/mui-player.min.css';
import MuiPlayer from 'mui-player';

enum gen {
  未知,
  男,
  女,
}

const gens = 1;
export default defineComponent({
  components: {
    TestObjectProps,
    TestAttr,
  },
  data() {
    return {
      person: {
        name: new Persion(),
        age: 2533,
      },
      xxx: gen[gens],
    };
  },
  methods: {
    myClick(e: { target: { value: never } }) {
      console.log('fu click', e.target.value);
    },
  },
  mounted() {
    console.log(11);
    new MuiPlayer({
      container: '#mui-player',
      title: '标题',
      src: 'https://shopqn.biocare.vip/-61442792130S07211.mp4',
      poster: `https://shopqn.biocare.vip/-61442792130S07211.mp4?vframe/jpg/offset/7/w/375/h/211`,
      live: false,
      objectFit: 'cover',
      showMiniProgress: false,
    });
  },
});
</script>
