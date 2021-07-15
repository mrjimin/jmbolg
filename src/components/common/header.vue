<template>
  <el-header class="header">
    <div class="container">
      <div class="lt">
        <a href="" class="logo"> jimin的boke </a>
      </div>
      <div class="gt">
        <ul class="nav">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li><router-link to="/about">关于</router-link></li>
          <li><router-link to="/list">文章</router-link></li>
          <li><router-link to="times">时间轴</router-link></li>
          <li><router-link to="tool">工具箱</router-link></li>
          <li><router-link to="comp">功能组件</router-link></li>
        </ul>
      </div>
    </div>
  </el-header>
</template>

<script setup>
import { ref } from "vue";
const icon = ref("");
</script>
<style>
.container {
  width: 1200px;
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
</style>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  width: 100vw;
  padding: 0 15px;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  background: #ffffffcc;
  box-shadow: 0 0 10px #eee;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    li {
      a {
        display: block;
        min-width: 100px;
        line-height: 60px;
        text-align: center;
        &:hover {
          color: #008eff;
        }
        &.router-link-active {
          color: #008eff;
        }
      }
    }
  }
}
</style>