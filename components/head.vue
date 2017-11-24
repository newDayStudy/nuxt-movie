<template>
  <section class="header">
    <input type="text" class="form-control" placeholder="请输入电影名称" v-model="initval">
    <button type="button" class="btn btn-success search" @click="search">搜索</button>
  </section>
</template>

<script>
  export default{
    props: ['initval'],
    methods: {
      search () {
        this.$router.replace({
          path: '/search',
          query: {
            q: this.initval
          }
        })
      }
    }
  }
</script>
<style lang="css" scoped="scoped">
  .header{
    display: flex;
    padding: 10px 0;
  }
  .search{
    margin-left: 10px;
  }
</style>