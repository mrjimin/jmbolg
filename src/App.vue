<template>
  <el-scrollbar>
    <!--  key="0"-->
    <router-view v-if="isRouterAlive"> </router-view>
  </el-scrollbar>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

import { ref, nextTick, provide } from "vue";

// 局部组件刷新 (https://blog.csdn.net/mrjimin/article/details/116533738)
const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
provide("reload", reload);
</script>

<style lang="scss">
// @import url("./assets/css/base.scss");
@import "@/assets/css/base.scss"; //这种引入才能使用别名@

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100vh;
}
body {
  font-size: 14px;
}
#waifu #live2d {
  width: 260px;
  height: 260px;
}
#waifu-tool {
  top: auto;
  bottom: 10px;
}
</style>
