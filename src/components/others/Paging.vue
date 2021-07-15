<!--
简单分页封装（vite2+vue3.0）
--> 
<template>
  <div class="pagtion" v-if="isShow">
    <ul class="page_ul">
      <li class="unmo" v-if="isTotal">
        <span class="gong">共&ensp;{{ countPages }}&ensp;页</span>
      </li>
      <li class="unmo" v-if="isStartEnd">
        <a class="pa" :class="curPage == 1 ? 'disable' : ''" @click="goPage(1)"
          >首页</a
        >
      </li>
      <li>
        <a
          class="pa"
          :class="curPage == 1 ? 'disable' : ''"
          @click="goPage(curPage - 1)"
          >上一页</a
        >
      </li>
      <li v-for="(page, index) in pages" :key="index">
        <a
          class="pa"
          :class="{ active: curPage == page }"
          @click="goPage(page)"
          >{{ page }}</a
        >
      </li>
      <li>
        <a
          class="pa"
          :class="{ disable: curPage == countPages }"
          @click="goPage(curPage + 1)"
          >下一页</a
        >
      </li>
      <li class="unmo" v-if="isStartEnd">
        <a
          class="pa"
          :class="{ disable: curPage == countPages }"
          @click="goPage(countPages)"
          >尾页</a
        >
      </li>
      <li class="unmo" v-if="isJump">
        <span class="gopa">
          前往
          <input type="text" v-model.number="inputPage" @input="inputVal" />
          页
          <button @click="jumpPage(inputPage)">Go</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  defineProps,
  computed,
  defineEmit,
  onMounted,
  onBeforeMount,
} from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  showPages: {
    //每页显示的条数
    type: Number,
    default: 10,
  },
  numPages: {
    //显示的页码数(默认显示5个数字分页按钮)
    type: Number,
    default: 5,
  },
  page: {
    //当前页
    type: Number,
    default: 1,
  },
  total: {
    //总条数
    type: Number,
    default: 1,
  },
  isStartEnd: {
    //是否显示首页和尾页
    type: Boolean,
    default: false,
  },
  isTotal: {
    //是否显示总页数
    type: Boolean,
    default: false,
  },
  isJump: {
    //是否显示跳转功能
    type: Boolean,
    default: false,
  },
  oneShow: {
    //总页数为1时，是否显示分页
    type: Boolean,
    default: false,
  },
  position: {
    //分页显示位置，左对齐、右对齐、居中
    type: String,
    default: "center",
  },
});

const curPage = ref(props.page); //当前页重新定义变量,便于数据绑定
const inputPage = ref(props.page); //input框里的值
const isShow = computed(() => {
  //总页数为1时，是否显示分页
  if (props.oneShow) {
    return true;
  } else {
    if (countPages.value == 1) {
      return false;
    } else {
      return true;
    }
  }
});
//总页数
const countPages = computed(() => {
  return Math.ceil(props.total / props.showPages);
});
// 分页显示（主要）
const pages = computed(() => {
  let left = 1,
    right = countPages.value, // 最后页
    movePoint = Math.ceil(props.numPages / 2), //高亮位置，处于中间
    pages = [];

  if (right <= props.numPages) {
    right = right;
  } else if (
    curPage.value > movePoint &&
    curPage.value < right - movePoint + 1
  ) {
    left =
      props.numPages % 2 === 0
        ? curPage.value - movePoint
        : curPage.value - movePoint + 1;
    right = curPage.value + movePoint - 1;
  } else if (curPage.value <= movePoint) {
    left = 1;
    right = props.numPages;
  } else {
    left = right - props.numPages + 1;
    right = right;
  }

  while (left <= right) {
    pages.push(left);
    left++;
  }
  return pages;
});

const route = useRoute();
const router = useRouter();
const emit = defineEmit(["update:page", "pageChange"]);

// 页面切换
const goPage = (pa) => {
  if (pa) {
    //用户随便输入页码的一些处理
    pa = isNaN(pa) ? 1 : parseInt(pa); //不是数字就返回1,是数字就取整
    if (pa > countPages.value) {
      //页码大于总页数，跳到最后一页
      curPage.value = countPages.value;
    } else if (pa < 1) {
      //页码小于1时，跳到第一页
      curPage.value = 1;
    } else if (curPage.value != pa) {
      curPage.value = pa;
    }

    //let que = Object.assign(route.query, { page: curPage.value });
    //let que = { ...route.query, page: curPage.value };

    router.push({ query: { ...route.query, page: curPage.value } }); //地址栏追加一个差数,刷新回到当前页码
    emit("update:page", curPage.value); //双向绑定,更新父组件当前页的值
    emit("pageChange", curPage.value); //调用父组件的定义事件（切换到对应的页数）
  }
  inputPage.value = curPage.value; //切换分页的同时也改变input框的值
};

// 对input框输入的值做处理
const inputVal = (e) => {
  let val = e.currentTarget.value;
  inputPage.value = val.replace(/^(0+)|[^\d]+/g, ""); //只允许输入正整数
  if (inputPage.value > countPages.value) {
    inputPage.value = countPages.value;
  }
};
// 点击跳转按钮
const jumpPage = (val) => {
  if (val != curPage.value) {
    goPage(val);
  }
};

onBeforeMount(() => {
  //判断地址栏有没有参数,同时初始化加载数据
  let pagex = route.query.page; //获取地址栏的page
  pagex = pagex ? pagex : props.page || 1; //参数为0或者是空的情况下,跳转到props.page当前页或者是第一页
  goPage(pagex);
});
</script>


<style lang="scss" scoped>
.pagtion {
  text-align: v-bind("props.position"); //上面props传过来的值
}
.page_ul {
  a {
    text-decoration: none;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  box-sizing: border-box;
  display: inline-flex;
  flex-wrap: wrap;
  font-size: 14px;
  li {
    margin: 5px;
    line-height: 32px;
  }
  .pa {
    display: inline-block;
    min-width: 32px;
    text-align: center;
    background: #f1f1f1;
    border-radius: 3px;
    cursor: pointer;
    padding: 0 5px;
    user-select: none;
    transition: all 0.3s;
    &.active {
      border-color: #409eff;
      background-color: #409eff;
      color: #fff;
      pointer-events: none;
    }
    &:not(.disable):hover,
    &:not(.disable):active {
      border-color: #409eff;
      background-color: #409eff;
      color: #fff;
    }
    &.disable {
      pointer-events: none;
    }
  }

  .gopa {
    padding-left: 5px;
    & > input {
      width: 40px;
      text-align: center;
      height: 26px;
      outline: 0;
      border: 1px solid #ccc;
      border-radius: 3px;
      &:focus {
        border-color: #409eff;
      }
    }

    & > button {
      height: 30px;
      border: 0;
      min-width: 32px;
      background: #f1f1f1;
      cursor: pointer;
      border-radius: 3px;
      &:hover {
        color: #409eff;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .page_ul li {
    .pa:not(.active):hover {
      border-color: #f1f1f1;
      background-color: #f1f1f1;
      color: inherit;
    }
    //   &.unmo {
    //     display: none;
    //   }
  }
}
</style>