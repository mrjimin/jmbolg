<template>
  <el-card class="a_list">
    <router-link to="list">
      <el-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </router-link>
    <div class="text">
      <el-space :size="6" wrap class="tags">
        <el-tag type="success" effect="plain" size="medium">vue</el-tag>
        <el-tag type="info" effect="plain" size="medium">html</el-tag>
        <el-tag type="warning" effect="plain" size="medium">js</el-tag>
        <el-tag type="danger" effect="plain" size="medium">php</el-tag>
        <el-tag type="danger" effect="plain" size="medium">标签四</el-tag>
        <el-tag effect="plain" size="medium">标签ss四</el-tag>
        <el-tag type="danger" effect="plain" size="medium">标签四</el-tag>
      </el-space>
      <h3 class="tle">
        <router-link to="">好吃的汉堡</router-link>
      </h3>
      <time class="time">2021-08-10</time>
      <div class="intro">
        主题可爱已经从v1.x演变为v2.x，具有刷新和微调的设计和更多的功能。按照以下说明进行安装和使用。您可以浏览此网站，体验
        v2.x 的新外观和互动。感谢您的明星和支持。
      </div>
      <div class="bottom">
        <el-button type="info" size="medium" class="button">阅读更多</el-button>
      </div>
    </div>
  </el-card>
  <el-card class="a_list">
    <el-image
      src="https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
    />
    <div class="text">
      <el-space :size="6" wrap class="tags">
        <el-tag type="success" effect="plain" size="medium">vue</el-tag>
        <el-tag type="info" effect="plain" size="medium">html</el-tag>
        <el-tag type="warning" effect="plain" size="medium">js</el-tag>
        <el-tag type="danger" effect="plain" size="medium">php</el-tag>
        <el-tag type="danger" effect="plain" size="medium">标签四</el-tag>
        <el-tag effect="plain" size="medium">标签ss四</el-tag>
        <el-tag type="danger" effect="plain" size="medium">标签四</el-tag>
      </el-space>
      <h3 class="tle">
        <router-link to="">好吃的汉堡</router-link>
      </h3>
      <time class="time">2021-08-10</time>
      <div class="intro">
        主题可爱已经从v1.x演变为v2.x，具有刷新和微调的设计和更多的功能。按照以下说明进行安装和使用。您可以浏览此网站，体验
        v2.x 的新外观和互动。感谢您的明星和支持。
      </div>
      <div class="bottom">
        <el-button type="info" size="medium" class="button">阅读更多</el-button>
      </div>
    </div>
  </el-card>
  <el-card class="a_list">
    <el-image
      src="https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
    />
    <div class="text">
      <el-space :size="6" wrap class="tags">
        <el-tag type="success" effect="plain" size="medium">vue</el-tag>
        <el-tag type="info" effect="plain" size="medium">html</el-tag>
        <el-tag type="warning" effect="plain" size="medium">js</el-tag>
        <el-tag type="danger" effect="plain" size="medium">php</el-tag>
        <el-tag type="danger" effect="plain" size="medium">标签四</el-tag>
        <el-tag effect="plain" size="medium">标签ss四</el-tag>
        <el-tag type="danger" effect="plain" size="medium">标签四</el-tag>
      </el-space>
      <h3 class="tle">
        <router-link to="">好吃的汉堡</router-link>
      </h3>
      <time class="time">2021-08-10</time>
      <div class="intro">
        主题可爱已经从v1.x演变为v2.x，具有刷新和微调的设计和更多的功能。按照以下说明进行安装和使用。您可以浏览此网站，体验
        v2.x 的新外观和互动。感谢您的明星和支持。
      </div>
      <div class="bottom">
        <el-button type="info" size="medium" class="button">阅读更多</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
.a_list.el-card {
  border: none;
  box-shadow: 0 6px 30px -10px rgb(0 0 0 / 10%);
  margin-bottom: 20px;
  .el-card__body {
    padding: 0;
  }
  .el-image {
    position: relative;
    width: 100%;
    padding-bottom: 35%;
    display: block;
    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s;
    }
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }
  .text {
    padding: 15px;
    .tle {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 12px 0 10px;
      a {
        font-family: "宋体";
        font-size: 28px;
        color: #444;
      }
    }
    .time {
      color: #777;
      font-size: 14px;
    }
    .intro {
      font-size: 16px;
      line-height: 1.5;
      color: #444;
      margin: 10px 0 12px;
    }
  }
}
</style>