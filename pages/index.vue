<template>
    <Mains :coming-soon="coming" :title="title1"/>
</template>

<script>
import Mains from '~/components/main.vue'
import movie from '~/assets/movie.json'
export default {
  scrollToTop: false,
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    return {
      title1: '即将上映',
      coming: movie.result
    }
  },
  components: {
    Mains,
  }
}
</script>

<style>

</style>
