<template>
  <div class="my-league flex pb-1">
    <div class="logo w-1/4"><img :src="champion.logo" alt="logo"></div>
    <div class="name w-3/4 ">{{champion.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'League',
  props:{
  champion:{type:[Object]}
  },
  created(){
    // console.log(this.league)
  }

}
</script>

<style lang="scss" scoped>
.my-league {
  border-bottom: 1px solid lighten($tertiary, 75);

  .logo {
    display: flex;
    align-content: center;
    img{
      max-height: 35px;
      max-width: 35px;
    }
  }

  .name {
    text-align: left;
  }
}
</style>
