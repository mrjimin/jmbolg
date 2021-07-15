<template>
  <div>
    <div class="a_card search">
      <input type="text" placeholder="搜索文章" />
      <i>往</i>
    </div>
    <div class="a_card userinfo">
      <el-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="cover"
      ></el-image>
      <h3 class="name">mrjimin</h3>
      <div class="intro">学习、笔记</div>
      <div class="share">分享</div>
    </div>
    <div class="a_card">
      <h3 class="tt">最新文章</h3>
      <ul class="a_ul">
        <li>
          <el-image
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt=""
          />
          <div class="text">
            <p class="tle">
              <router-link to="">hexo theme cutie v2.x tutorial</router-link>
            </p>
            <p class="time">2021-06-22</p>
          </div>
        </li>
        <li>
          <el-image
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt=""
          />
          <div class="text">
            <p class="tle">
              <router-link to="">hexo theme cutie v2.x tutorial</router-link>
            </p>
            <p class="time">2021-06-22</p>
          </div>
        </li>
        <li>
          <el-image
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt=""
          />
          <div class="text">
            <p class="tle">
              <router-link to="">hexo theme cutie v2.x tutorial</router-link>
            </p>
            <p class="time">2021-06-22</p>
          </div>
        </li>
        <li>
          <el-image
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            alt=""
          />
          <div class="text">
            <p class="tle">
              <router-link to="">hexo theme cutie v2.x tutorial</router-link>
            </p>
            <p class="time">2021-06-22</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="a_card">
      <h3 class="tt">专栏</h3>
      <ul class="b_ul">
        <li>
          <router-link to="" class="text">回复</router-link>
          <span class="num">3</span>
        </li>
      </ul>
    </div>
    <div class="a_card">
      <h3 class="tt">归档</h3>
      <ul class="b_ul">
        <li>
          <router-link to="" class="text">2021-10-10</router-link>
          <span class="num">3</span>
        </li>
      </ul>
    </div>
    <div class="a_card">
      <h3 class="tt">标签</h3>
      <el-space :size="6" wrap class="tags">
        <el-tag type="success" effect="plain" size="medium">vue</el-tag>
        <el-tag type="info" effect="plain" size="medium">html</el-tag>
        <el-tag type="warning" effect="plain" size="medium">js</el-tag>
        <el-tag type="danger" effect="plain" size="medium">php</el-tag>
        <el-tag type="danger" effect="plain" size="medium">标签四</el-tag>
        <el-tag effect="plain" size="medium">标签ss四</el-tag>
        <el-tag type="danger" effect="plain" size="medium">标签四</el-tag>
      </el-space>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.a_card {
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: 0 6px 30px -10px rgb(0 0 0 / 10%);
  border-radius: 6px;
  background: #fff;
}
.search {
  position: relative;
  display: flex;
  align-items: center;
  input {
    flex: 1;
    padding: 5px;
    outline: 0;
    border: 0;
  }
}
.userinfo {
  text-align: center;
  .el-image {
    position: relative;
    width: 180px;
    height: 180px;
    margin: 15px 0;
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(0 0 0 / 8%);
    border: 7px solid #fff;
  }
  .name {
    line-height: 1.5;
  }
  .share {
    overflow: auto;
    padding: 5px 0;
    margin-top: 12px;
    border-top: 1px solid #0000000d;
  }
}
.a_card .tt {
  margin-bottom: 10px;
  line-height: 1.5;
}
.a_ul {
  li {
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid #e2e2e2;
    &:last-of-type {
      border: none;
    }
    .el-image {
      width: 50px;
      height: 50px;
      margin-right: 5px;
      border-radius: 6px;
      img {
        object-fit: cover;
      }
    }
    .text {
      flex: 1;
      max-width: calc(100% - 55px);
      .tle {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        a {
          font-weight: bold;
          line-height: 1.5;
          color: #333;
          &:hover {
            color: #3273dc;
          }
        }
      }
      .time {
        font-size: 13px;
        margin-top: 5px;
        color: #777;
      }
    }
  }
}
.b_ul {
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .num {
      width: 40px;
      margin-left: 10px;
      background: #f5f5f5;
      text-align: center;
      padding: 5px;
      border-radius: 30px;
    }
  }
}
</style>