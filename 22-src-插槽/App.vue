<template>
  <div class="container">
    <!-- 美食分类 -->
    <Catagory title="美食">
      <template #center>
        <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="美食图片" class="full-width-image">
      </template>
      <template #footer>
        <a href="https://www.baidu.com">查看更多</a>
      </template>
    </Catagory>

    <!-- 游戏分类 -->
    <Catagory title="游戏">
      <template #center>
        <ul class="game-list">
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
      <template #footer>
        <div class="footer-links">
          <a href="https://www.baidu.com">更多</a>
          <a href="https://www.baidu.com">更多</a>
          <a href="https://www.baidu.com">更多</a>
        </div>
      </template>
    </Catagory>

    <!-- 电影分类 -->
    <Catagory title="电影">
      <template #center>
        <video controls class="movie-player" src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"></video>
      </template>
      <template #footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="https://www.baidu.com">更多</a>
            <a href="https://www.baidu.com">更多</a>
            <a href="https://www.baidu.com">更多</a>
          </div>
          <h4>欢迎来影院观看</h4>
        </div>
      </template>
    </Catagory>
  </div>
</template>

<script>
import Catagory from './components/Catagory.vue';

export default {
  name: 'App',
  components: {
    Catagory
  },
  data() {
    return {
      foods: ['鱼香肉丝', '红烧肉', '青椒肉丝'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      movies: ['肖申克的救赎', '阿甘正传', '霸王别姬']
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.game-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.game-list li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.footer-links a {
  color: #42b983;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.movie-player {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.footer-content {
  text-align: center;
}

.full-width-image {
  width: 100%;
  height: auto;
  display: block;
}
</style>