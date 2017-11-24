<template>
  <section class="container">
    <button type="button" class="btn btn-default" style="margin-top:10px;" @click="back">返回</button>
    <Heads :initval="q"/>
    <Mains :comingsoon="subject" :title="q"/>
    <Pagation @childChange="parentChange" v-if="subject.length" :current="Current" :pageSize="page"/>
  </section>
</template>
<script>
  import Mains from '~/components/main.vue'
  import Heads from '~/components/head.vue'
  import Pagation from '~/components/pagation.vue'
  export default{
    data () {
      return {
        q: this.$route.query.q,
        page: [],
        subject: [],
        Current: 1,
        start: 0,
        count: 12
      }
    },
    mounted () {
      this.getMovie()
    },
    methods: {
      getMovie () {
        window.$.ajax({
          type: 'GET',
          url: 'https://api.douban.com/v2/movie/search',
          dataType: 'jsonp',
          data: {
            start: this.start,
            count: this.count,
            q: this.q
          },
          success: ({subjects: data, total: totals}) => {
            this.subject = []
            this.page = []
            this.subject = data
            let pageSize = totals % this.count ? (Math.floor(totals / this.count) + 1) : (totals / this.count)
            pageSize = pageSize > 20 ? 20 : pageSize
            for (var i = 0; i < pageSize; i++) {
              this.page.push(i + 1)
            }
          },
          error: (err) => {
            alert(err.statuCode)
          }
        })
      },
      parentChange (val) {
        this.start = (val[0] - 1) * 12
        this.getMovie()
      },
      back () {
        this.$router.replace({
          path: '/'
        })
      }
    },
    components: {
      Mains,
      Heads,
      Pagation
    }
  }
</script>
<style lang="css" scoped="scoped"></style>