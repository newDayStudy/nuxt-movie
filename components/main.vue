<template>
  <section class="wrapper">
    <h3>{{title}}</h3>
    <ul class="movie">
      <li v-for="item in comingsoon">
        <img :src="item.images.small" alt="图片" class="avatar">
        <div class="wordWrap">{{item.title}}</div>
        <div>评分<span class="score">{{item.rating.average?item.rating.average+'分':'暂无'}}</span></div>
        <div><i class="iconfont yellow">&#xe644;</i><span class="score">{{item.rating.stars == '00'?'暂无':item.rating.stars}}</span></div>
      </li>
    </ul>
  </section>
</template>
<script>
  export default{
    scrollToTop: false,
    props: ['comingsoon', 'title']
  }
</script>
<style lang="css" scoped="scoped">
  .movie{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
  .movie li{
    width: 13%;
    border: 1px solid #ddd;
    padding: 10px;
    margin-right: 30px;
    margin-bottom: 10px;
  }
  .yellow{
    color: yellow
  }
  .score{
    color: red;
    float: right;
  }
  .wordWrap{
    max-width: 120px
  }
  .avatar{
    width: 100%;
    height: 180px;
  }
</style>