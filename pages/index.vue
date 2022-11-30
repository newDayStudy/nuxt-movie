<template>
  <!-- <client-only> -->
    <section class="container">
      <Mains :comingsoon="coming" :title="title1"/>
    </section>
  <!-- </client-only> -->
</template>

<script>
// import Heads from '~/components/head.vue'
import Mains from '~/components/main.vue'
// import Pagation from '~/components/pagation.vue'
import movie from '~/assets/movie.json'
export default {
  scrollToTop: false,
  data () {
    return {
      title1: '即将上映',
      title2: '正在热映',
      coming: movie.result,
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
    // Heads,
    Mains,
    // Pagation
  },
  mounted () {
    this.getComingSoon()
    // this.getTheaters()
  },
  methods: {
    getComingSoon () {
      
    },
    getTheaters () {
      
    }
  }
}
</script>

<style>

</style>
