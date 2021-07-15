<template>
  <div>
    <section class="sec_list">
      <ul class="l_ul">
        <li>
          <div class="time">2021-06-22</div>
          <div class="dian"></div>
          <div class="text">
            <h3 class="tle">html5时间表 1</h3>
            <div class="intro">
              jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8
              了，但是 jQuery 1.9 会继续支持。因为旧版 IE
              浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用
              jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x
              。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery
              1.9，就感觉好像错过了什么，或者是落后了。
            </div>
          </div>
        </li>
        <li>
          <div class="time">2021-06-22</div>
          <div class="dian"></div>
          <div class="text">
            <h3 class="tle">html5时间表 1</h3>
            <div class="intro">
              jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8
              了，但是 jQuery 1.9 会继续支持。因为旧版 IE
              浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用
              jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x
              。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery
              1.9，就感觉好像错过了什么，或者是落后了。
            </div>
          </div>
        </li>
        <li>
          <div class="lt"></div>
          <div class="line">20</div>
          <div class="gt">135464561</div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.sec_list {
  .l_ul {
    li {
      display: flex;
      position: relative;
      padding: 20px 0;
      &::before {
        content: "";
        width: 5px;
        position: absolute;
        height: 100%;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        background: #eee;
      }
      .time {
        width: calc(50% - 15px);
      }
      .text {
        width: calc(50% - 15px);
        padding: 20px;
        background: #fff;
        border-radius: 6px;
      }
      .dian {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #eee;
        margin: 15px;
      }
    }
  }
}
</style>