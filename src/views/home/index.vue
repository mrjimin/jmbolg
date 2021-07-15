
<template>
  <el-row :gutter="20" class="index_box">
    <el-col :span="18" class="lt">
      <Article></Article>
      <div class="link">
        <router-link to="">
          <el-button type="info" size="medium" class="button"
            >查看更多</el-button
          >
        </router-link>
      </div>
    </el-col>
    <el-col :span="6" class="gt">
      <Right></Right>
    </el-col>
  </el-row>
</template>

<script setup>
import Article from "@comp/common/article.vue";
import { ElMessage, ElNotification } from "element-plus";

ElNotification({
  title: "提示",
  message: "忙!!!这个先这样了(￣︿￣),以后有空在搞",
  offset: 70,
  type: "info",
  customClass: "el_bgcol",
});
</script>

<style>
.el_bgcol {
  background: #ccffff;
}
</style>
<style lang="scss" scoped>
.index_box {
  .link {
    text-align: center;
  }
}
</style>