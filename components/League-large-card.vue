<template>
  <div class="my-league-large-card bg-white p-2">
    <div class="title p-1">
      <div class="img">  <img :src="lig.logo" class="pr-2" :alt="`${lig.name} logo`"></div>
      <div class="name">{{lig.name}}</div>
    </div>
    <div class="country p-1">
      <img :src="lig.flag" class="pr-2" :alt="`${lig.country} flag`">
      <div class="name">{{ lig.country }}</div>
    </div>
    <div class="lower-row">
      <div class="season p-1 ">
        <span class="holder">Season </span>: <span class="value">{{lig.year}}</span>
      </div>
      <div class="type p-1 pl-3">
        <span class="holder">Type</span>: <span class="value">{{lig.type}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'League-large-card',
  props:{
    lig:{required:true}
  }
}
</script>

<style lang="scss" scoped>
.my-league-large-card {
  max-width: 15rem;
  border-radius: 10px;

  .title {
    display: flex;
    align-content: center;
      img{
        width: 35px;
      }
  }

  .country {
    display: flex;
    align-content: center;
    img {

      width: 20px;
    }
  }

  .lower-row {
    border-top: 1px solid lighten($shadow,20);
    display: flex;
    flex-direction: row;
    font-size: .9rem;

  }
}
</style>
