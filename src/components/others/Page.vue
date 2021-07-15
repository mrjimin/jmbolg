<template>
  <!-- 分页组件的封装 -->

  <div class="Paging">
    <el-pagination
      :hide-on-single-page="total > pageSize ? true : false"
      @size-change="sizeChange"
      @current-change="currentChange"
      :layout="layout"
      :total="total"
      :current-page="curPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :small="small"
      :background="background"
    >
    </el-pagination>
  </div>
  <h1>{{ countState.count }}</h1>
</template>
 
<script setup>
import { ref, computed, defineProps, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import clickStore from "@/stores/modules/page.js";
import { useStore } from "vuex";
const store = useStore();

const countState = clickStore.getState();

const props = defineProps({
  curPage: {
    //当前页数
    required: false, //是否必须
    default: 1, //默认值
  },
  total: {
    //总条目数
    required: false, //是否必须
    default: 0, //默认值
  },
  pageSize: {
    // 每页显示的条数 (和下面的pageSizes一起使用)
    required: false, //是否必须
    default: 10, //默认值（默认显示10条）
  },
  pageSizes: {
    // 每页显示多少条
    type: Array,
    default: [10, 20, 30, 50],
  },
  small: {
    //是否使用小型分页样式
    required: false, //是否必须
    type: Boolean, //类型
    default: false, //默认值
  },
  background: {
    //是否分页添加背景
    required: false, //是否必须
    type: Boolean, //类型
    default: true, //默认值
  },
  layout: {
    // 布局方式 default: "total, sizes, prev, pager, next, jumper"
    required: false, //是否必须
    type: String,
    default: "total, sizes, prev, pager, next, jumper",
  },
});

const route = useRoute();
const router = useRouter();

/**
update:curPage  更新页码
update:pageSize  更新每页显示的数量
curPaging   调用父组件页面改变事件
pageSizing    调用父组件页面显示的数量改变事件
*/
const emit = defineEmit([
  "update:curPage",
  "update:pageSize",
  "curPaging",
  "pageSizing",
]);

const currentChange = (val) => {
  emit("update:curPage", val);
  emit("curPaging");
  router.push({ query: { page: val } }); //地址栏追加一个差数,刷新回到当前页码
};
const sizeChange = (val) => {
  emit("update:pageSize", val);
  emit("pageSizing");
};

onMounted(() => {
  const page = route.query.page; //获取地址栏的page
  let numpage = page - 0; //转成整数
  let max = Math.ceil(props.total / props.pageSize); //最大页数
  if (numpage > 0 && numpage <= max) {
    emit("update:curPage", numpage);
    // emit("curPaging");
  } else if (numpage > max) {
    emit("update:curPage", max);
  }
  emit("curPaging");
});
</script>
 
<style lang="scss" scoped>
</style>