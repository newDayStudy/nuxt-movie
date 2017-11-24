<template>
  <section class="pagation">
    <nav aria-label="...">
      <ul class="pagination">
        <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
        <li v-for="num in pageSize"><a href="#" @click="clickPagation($event, num)">{{num}}<span class="sr-only"></span></a></li>
        <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
      </ul>
    </nav>
  </section>
</template>
<script>
  export default{
    scrollToTop: false,
    props: ['current', 'pageSize'],
    methods: {
      clickPagation (e, val) {
        window.$(e.target).parent().addClass('active').siblings().removeClass('active')
        this.$emit('childChange', [val, this.current])
      }
    }
  }
</script>
<style lang="css" scoped="scoped">
  .pagation{
    text-align: center;
  }
</style>