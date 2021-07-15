<template>
  <div>HelloWorld.vue</div>
  <div class="test">
    测试文字
    <div class="aa">测试文字</div>
    <img id="hero-img" src="" alt="" />
  </div>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="countadd">count is: {{ state.count }}</button>
  <button @click="shuaxin">刷新组件</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <!-- 将内容插到id="model"的标签里面，例如<div id="model"></div> -->
  <teleport to="#model">
    <ul class="list_ul">
      <li v-for="(item, index) in 10" :key="index">
        {{ item }}
      </li>
    </ul>
  </teleport>
</template>

<script setup>
import {
  defineProps,
  reactive,
  onMounted,
  inject,
  getCurrentInstance,
  computed,
  defineEmit,
  watchEffect,
  onUpdated,
} from "vue";

const props = defineProps({
  msg: String,
});
const { ctx } = getCurrentInstance();

const state = reactive({ count: 0 });
const countadd = () => {
  state.count = state.count + 1;
};
const ax = import.meta.env.VITE_APP_TITLE;

const shuaxin = inject("reload");

const emit = defineEmit(["update:msg"]);

import imgUrl from "/9xxxxxxf.gif";
import path from "path";
onMounted(() => {
  // console.log(path);
  console.log(ax);

  // document.body.append(`<div>${ax}</div>`);

  document.getElementById("hero-img").src = imgUrl;
});
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}
.test {
  color: #42b983;
  .aa {
    color: #f00;
  }
}
.list_ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 25%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 24px;
    box-sizing: border-box;
    border: 1px solid #fff;
  }
}
</style>
