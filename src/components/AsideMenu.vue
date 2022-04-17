<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <template v-for="item in $router.options.routes" :key="item.path">
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            :index="child.path"
            v-for="child in item.children"
            :key="child.path"
            @click="goNext(child.path)"
          >
            <span>{{ child.name }}</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item v-else :index="item.path" @click="goNext(item.path)">
          <el-icon><setting /></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <GlobalAuthor class="author"></GlobalAuthor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface DefaultData {
  routeList: object[];
}

export default defineComponent({
  name: "AsideMenu",
  data(): DefaultData {
    return {
      routeList: [],
    };
  },
  methods: {
    goNext(path: string) {
      this.$router.push(path);
    },
  },
});
</script>

<style scoped>
.author {
  color: white;
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  width: 100%;
  opacity: 0.5;
}
</style>
