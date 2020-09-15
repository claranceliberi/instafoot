<template>
  <div class="my-leagues">
    <div class="header bg-gray-300 py-2">Leagues available</div>
    <div class="list-leagues mt-4">
      <div class="ligue p-1"> <League /> </div>
    </div>
  </div>
</template>

<script>
import League from '@/components/League'
export default {
  name: 'Leagues',
  components: { League }
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
