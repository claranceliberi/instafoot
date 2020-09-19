<template>
<!--  eslint-disable-->

  <div class="my-container">
    <!--    navbar-->
    <div class="navbar-container flex">
      <div class="navbar w-full"> <navbar /> </div>
    </div>

    <!--     side bar (leagues ) and main div (with necessary information)-->
    <div class="content-container pt-10 flex">
      <div class="w-1/4 "> <Leagues :champions="champions"/> </div>
      <div class="w-1/8 h-12"></div>
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
  asyncData({$axios},callback){
    $axios.get(`${$axios.defaults.baseURL}leagues`).then(d => {
      // console.log(d)
      callback(null,{champions:d.data})
    })

  },
  mounted () {
    console.log(this.champions)
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
