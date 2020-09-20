<template>
<!--  eslint-disable-->

  <div class="my-container bg-gray-100">
    <!--    navbar-->
    <div class="navbar-container flex">
      <div class="navbar w-full"> <navbar /> </div>
    </div>

    <!--     side bar (leagues ) and main div (with necessary information)-->
    <div class="content-container pt-10 flex">
      <div class="w-1/4 "> <Leagues /> </div>
      <div class="w-1/8 h-12"> <nuxt-child /> </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */

import Leagues from '@/components/Leagues'
import navbar from '@/components/Navbar'
export default {
  name:"Index",
  components: { Leagues,navbar },
  async asyncData({$axios,store}){
    let {data} = await $axios.get(`${$axios.defaults.baseURL}leagues`)
    store.commit('leagues/storeLoadedLeagues',data.api.leagues)
  },
  mounted () {
  }

}
</script>

<style lang="scss" scoped>
.my-container{
  .content-container{
    width: 90%;
    margin: auto;
  }
}
</style>
