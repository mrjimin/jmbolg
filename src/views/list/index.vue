
<template>
  <el-row :gutter="20" class="index_box">
    <el-col :span="18" class="lt">
      <Article></Article>
      <Paging @pageChange="func"></Paging>
    </el-col>
    <el-col :span="6" class="gt">
      <Right></Right>
    </el-col>
  </el-row>
</template>

<script setup>
import Article from "@comp/common/article.vue";
import Paging from "@comp/others/Paging.vue";
const func = () => {
  //   console.log(1);
};
</script>


<style lang="scss" scoped>
.index_box {
  .link {
    text-align: center;
  }
}
</style>