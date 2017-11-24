<template>
  <section class="container">
    <Heads :initval="value" />
    <Mains :comingsoon="coming" :title="title1"/>
    <Pagation @childChange="parentChange" v-if="coming.length" :current="parentCurrent" :pageSize="page1"/>
    <Mains :comingsoon="theaters" :title="title2"/>
    <Pagation @childChange="parentChange" v-if="theaters.length" :current="Current" :pageSize="page2" />
  </section>
</template>

<script>
import Heads from '~/components/head.vue'
import Mains from '~/components/main.vue'
import Pagation from '~/components/pagation.vue'
export default {
  scrollToTop: false,
  data () {
    return {
      title1: '即将上映',
      title2: '正在热映',
      coming: [],
      theaters: [],
      start: 0,
      count: 12,
      start1: 0,
      parentCurrent: 1,
      Current: 0,
      page1: [],
      page2: [],
      value: ''
    }
  },
  components: {
    Heads,
    Mains,
    Pagation
  },
  mounted () {
    this.getComingSoon()
    this.getTheaters()
  },
  methods: {
    getComingSoon () {
      window.$.ajax({
        type: 'GET',
        url: 'https://api.douban.com/v2/movie/coming_soon',
        dataType: 'jsonp',
        data: {
          start: this.start,
          count: this.count
        },
        success: ({subjects: data, total: totals}) => {
          this.coming = []
          this.page1 = []
          this.coming = data
          let pageSize = totals % this.count ? (Math.floor(totals / this.count) + 1) : (totals / this.count)
          for (var i = 0; i < pageSize; i++) {
            this.page1.push(i + 1)
          }
        },
        error: (err) => {
          alert(err.statuCode)
        }
      })
    },
    getTheaters () {
      window.$.ajax({
        type: 'GET',
        url: 'https://api.douban.com/v2/movie/in_theaters',
        dataType: 'jsonp',
        data: {
          start: this.start1,
          count: this.count
        },
        success: ({subjects: data, total: totals}) => {
          this.theaters = []
          this.page2 = []
          this.theaters = data
          let pageSize = totals % this.count ? (Math.floor(totals / this.count) + 1) : (totals / this.count)
          for (var i = 0; i < pageSize; i++) {
            this.page2.push(i + 1)
          }
        },
        error: (err) => {
          alert(err.statuCode)
        }
      })
    },
    parentChange (val) {
      console.log(val)
      if (val[1]) {
        this.start = (val[0] - 1) * 12
        this.getComingSoon()
      } else {
        this.start1 = (val[0] - 1) * 12
        this.getTheaters()
      }
    }
  }
}
</script>

<style>

</style>
