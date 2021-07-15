<template>
  <el-container class="is-vertical">
    <Header></Header>
    <el-container>
      <div class="container">
        <router-view></router-view>
      </div>
    </el-container>
    <Footer></Footer>
  </el-container>
  <!-- 返回顶部-->
  <el-backtop target=".el-scrollbar .el-scrollbar__wrap">
    <div class="goTop">&#10094;</div>
  </el-backtop>
  <!-- css-doodle背景 -->
  <css-doodle class="c_doodle">
    :doodle { @grid: 5 / 100vmax; } @shape: clover 5; background: hsla( calc(360
    - @i * 20), 70%, 68%, @r.8 ); transform: scale(@r(.2, 1.5))
    translate(@m2.@r(±50%));
  </css-doodle>
  <Loong></Loong>
</template>

<script setup>
import Loong from "@comp/others/loong.vue";
</script>

<style scoped>
.container {
  padding: 85px 15px 25px;
}
.c_doodle {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: #fbfbfb;
}
.goTop {
  height: 100%;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
  transform: rotate(90deg);
  border-radius: 5px;
}
</style>