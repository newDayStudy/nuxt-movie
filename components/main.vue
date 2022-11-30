<template>
  <section class="wrapper">
    <h3>{{title}}</h3>
    <ul class="movie">
      <li v-for="item in comingSoon">
        <a :href="item.share_url" target="_blank">
          <span class="pause"></span>
          <img :src="item.item_cover" alt="图片" class="avatar">
          <span class="wordWrap">{{item.title}}</span>
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
  export default{
    scrollToTop: false,
    props: {
      comingSoon: {
        type: Array,
        default: () => [],
        validator(value) {
          return Array.isArray(value) == true
        }
      },
      title: String
    }
  }
</script>
<style lang="scss" scoped="scoped">
  h3{
    margin:0;
    position: sticky;
    top: 0;
    z-index: 11;
    padding: 10px;
    background-color: #fff;
  }
  .movie{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0 10px;
    list-style: none;
  }
  .movie::after{
    content:"";
    display: block;
    width: 13%;
  }
  .movie li{
    position: relative;
    overflow: hidden;
    width: 13%;
    margin-bottom: 30px;
    background-color: #fafafa;
    border-radius: 4px;
    a{
      display: block;
      padding-bottom: 4px;
      .wordWrap{
        max-width: 120px;
        padding: 0 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .avatar{
        width: 100%;
        height: 180px;
        margin-bottom: 4px;
        vertical-align: middle;
      }
      .pause{
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        transform: translateY(65px);
        background-color: rgba($color: #000000, $alpha: .6);
        border-radius: 100%;
        &:before{
          content:"";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 0;
          height: 0;
          transform: translateX(-3px);
          border-right: 15px solid #fafafa;
          border-bottom: 15px solid transparent;
          border-top: 15px solid transparent;
        }
      }
    }
  }
  @media screen and(max-width:750px){
    .movie li{
      width: calc((100% - 20px) / 2);
      margin: 0 auto 20px;
    }
  }
</style>