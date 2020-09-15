<template>
  <div class="my-league flex pb-1">
    <div class="logo w-1/4"><img src="" alt="logo"></div>
    <div class="name w-1/8 ">Premier league</div>
  </div>
</template>

<script>
export default {
  name: 'League'
}
</script>

<style lang="scss" scoped>
.my-league{
  border-bottom: 1px solid lighten($tertiary,75);
  .logo{
    display: flex;
    align-content: center;
  }
  .name{
    text-align: left;
  }
}
</style>
