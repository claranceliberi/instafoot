<template>
  <div class="my-leagues">
    <div class="header bg-gray-300 py-2">
      Leagues available
    </div>
    <div class="list-leagues mt-4">
      <div class="league p-1">
        <League />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import League from '@/components/League'
export default {
  name: 'Leagues',
  components: { League },
  props:{
    champions:{required:true}
  },
  data(){
    return {
      pres:'mwaa'
    }
  },
  computed:{
    usableLeagues(){
      // return JSON.parse(this.leagues)
      return this.champions
    }
  },
  mounted () {
    console.log(this.usableLeagues,'=>',this.champions)
  }
}
</script>

<style lang="scss" scoped>
.my-leagues{
  .header{
    text-align: center;
    font-size: 1.2rem;
  }
}
</style>
