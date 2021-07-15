<template>
  <div>
    下面这些组件全部用的是vite2+vue3.0的语法,也就是&lt;script setup&gt;里面写的
  </div>
  <h3>tinymce富文本编辑器</h3>
  <Teditor value="123"></Teditor>
  <h3>自定义封装分页</h3>
  <Paging page="2" total="50"></Paging>
  <h3>图标选择器</h3>
  <div><e-icon-picker icon=""></e-icon-picker></div>
</template>

<script setup>
import Teditor from "@comp/others/Teditor.vue";
import Paging from "@comp/others/Paging.vue";
</script>

<style>
</style>