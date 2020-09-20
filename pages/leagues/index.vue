<template>
<div class="my-leagues bg-gray-100">

  <!--    navbar-->
  <div class="navbar-container flex">
    <div class="navbar w-full"> <navbar /> </div>
  </div>

  <!--     side bar (leagues ) and main div (with necessary information)-->
  <div class="content-container pt-10 flex">
    <div class="w-1/4 px-4"> <leagues /> </div>
    <div class="w-3/4 h-12 px-8">
      <div class="league-large" v-for="(lig,i) in leagues">
        <league-large-card :lig="lig"/>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import LeagueLargeCard from '@/components/League-large-card'
export default {
  name: "index.js",
  components: { LeagueLargeCard },
  async asyncData({$axios,store}){
    let {data} = await $axios.get(`${$axios.defaults.baseURL}leagues`)
    store.commit('leagues/storeLoadedLeagues',data.api.leagues)
  },
  computed:{
    leagues(){
      return this.$store.state.leagues.loadedLeagues
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
