<template>
  <div class="my-navbar bg-white-100 flex pt-2">
    <div class="w-full flex">
      <div class="logo-holder w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3"> <div class="logo">Insta Foot</div> </div>
      <div class="space  md:w-1/2 lg:w-1/6 xl:w-16"></div>
      <div class="links w-1/7 sm:w-2/3 md:w-1/7 lg:w-1/7 xl:w-1/9">
        <ul>
          <li>Live</li>
          <li>Scores</li>
          <li>Fixtures</li>
          <li>Tables</li>
          <li>Leagues</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'Navbar'

}
</script>

<style lang="scss" scoped>
  .my-navbar{

    .logo-holder{
      display: flex;
      align-content: center;
      .logo{
        color:$secondary;
        margin: auto;
        font-family: 'Staatliches', cursive;
      }
    }
    .links{
      display: flex;
      align-content: center;
      ul{
        list-style: none;
        margin: auto;
        display: flex;

        li{
          padding: .2rem .7rem;
          cursor: pointer;
          min-width: 5rem;
          text-align: center;
          &:hover{
            background: lighten($tertiary,75);
            border-radius: 2px;
          }
        }

      }
    }
  }
</style>
