<template>
  <div class="my-container">
    <!--    navbar-->
    <div class="navbar-container flex">
      <div class="navbar w-full"> <navbar /> </div>
    </div>

    <!--     side bar (leagues ) and main div (with necessary information)-->
    <div class="content-container pt-10 flex">
      <div class="w-1/4 "> <Leagues /> </div>
      <div class="w-1/8 h-12"></div>
    </div>

  </div>
</template>

<script>
import Leagues from '@/components/Leagues'
export default {
  components: { Leagues }
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
