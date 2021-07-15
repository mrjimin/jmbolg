<template>
  <div class="tool_list" v-if="data.type == ''">
    <section class="sec_top">
      <div class="container">
        <div class="im">
          <i class="fa fa-eercast"></i>
        </div>
        <h3 class="tle">jimin的工具箱(◠‿◠)</h3>
        <div class="intro">记录一些有趣的东西,平时会用到的工具、以防忘记</div>
      </div>
    </section>
    <section class="sec_mid">
      <div class="container">
        <ul class="ul_list">
          <li>
            <router-link :to="{ params: { type: 'css_tool' } }" target="_blank">
              <i class="fa fa-briefcase"></i>
              <div class="tle">CSS工具</div>
              <div class="intro">CSS颜色/透明度渐变、阴影、圆角、噪音/纹理</div>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ params: { type: 'clip_path' } }"
              target="_blank"
            >
              <i class="fa fa-scissors"></i>
              <div class="tle">CSS3 剪贴路径(Clip-path)</div>
              <div class="intro">*</div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ params: { type: 'counter' } }" target="_blank">
              <i class="fa fa-calculator"></i>
              <div class="tle">计算器</div>
              <div class="intro">支持键盘输入的计算器</div>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ params: { type: 'safecolor' } }"
              target="_blank"
            >
              <i class="fa fa-dashboard"></i>
              <div class="tle">Web安全色</div>
              <div class="intro">WEB设计、开发中常用安全色</div>
            </router-link>
          </li>

          <li>
            <router-link
              :to="{ params: { type: 'jq_select' } }"
              target="_blank"
            >
              <i class="fa fa-server"></i>
              <div class="tle">JQuery、CSS选择器</div>
              <div class="intro">JQuery选择器、CSS选择器大全</div>
            </router-link>
          </li>

          <li>
            <router-link
              :to="{ params: { type: 'change_base' } }"
              target="_blank"
            >
              <i class="fa fa-exchange"></i>
              <div class="tle">文件转base64文本、文字特效</div>
              <div class="intro">文件转base64文本、文字特效</div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <Loong></Loong>
  </div>
  <div class="tool_detail" v-else>
    <iframe class="iframe" :src="data.iframe" frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Loong from "@comp/others/loong.vue";

// console.log(useRoute());
// console.log(useRoute().params.type);

const data = reactive({
  type: useRoute().params.type,
  iframe: "",
  arrHtml: [
    "css_tool",
    "clip_path",
    "counter",
    "safecolor",
    "jq_select",
    "change_base",
  ],
});
// 判断链接后面有没有参数
if (data.type) {
  if (data.arrHtml.indexOf(data.type) > -1) {
    data.iframe = `/iframe/${data.type}.html`;
  } else {
    data.type = "";
  }
}
</script>


<style lang="scss" scoped>
.tool_list {
  background: #ffffffcc;
  min-height: 100vh;
}
.iframe {
  width: 100%;
  height: 100vh;
  display: block;
}
.container {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

.sec_top {
  padding: 15px 0;

  .im {
    text-align: center;
    padding: 25px 0;

    .fa {
      font-size: 128px;
      color: #03a9f4;
    }
  }

  .tle {
    text-align: center;
    font-size: 42px;
    color: #2c3e50;
    margin: 0;
    padding: 10px 0;
  }

  .intro {
    text-align: center;
    width: 600px;
    max-width: 100%;
    margin: 15px auto;
    font-size: 24px;
    line-height: 1.3;
    color: #6a8bad;
  }
}

.ul_list {
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 15px;
    width: 25%;

    > a {
      display: block;
      position: relative;
      background: #f2f2f2;
      border-radius: 5px;
      font-size: 24px;
      text-align: center;
      padding: 10px;
      color: #000;
      transition: all 0.2s ease-in-out;
      font-weight: 200;
      border: 1px solid #ddd;
      height: 100%;

      &:hover {
        background-color: #fff;
        box-shadow: 0 18px 32px -18px #000 !important;
        transform: translateY(-3px);
      }

      .fa {
        color: #009999;
        font-size: 48px;
        padding: 20px;
      }

      .intro {
        color: #777;
        font-size: 14px;
        line-height: 1.8;
        padding: 10px 0;
      }
    }

    &:nth-child(5n + 1) {
      .fa {
        color: #33ff66;
      }
    }

    &:nth-child(5n + 2) {
      .fa {
        color: #6699ff;
      }
    }

    &:nth-child(5n + 3) {
      .fa {
        color: #ff6699;
      }
    }

    &:nth-child(5n + 4) {
      .fa {
        color: #ff6600;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .ul_list {
    li {
      width: calc(100% / 3);
    }
  }
}

@media screen and (max-width: 768px) {
  .ul_list {
    li {
      width: 50%;
    }
  }
}
</style>