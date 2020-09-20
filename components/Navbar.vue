<template>
  <div class="my-navbar bg-white flex p-2">
    <div class="w-full flex">
      <div class="logo-holder p-4 w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3"><nuxt-link to="/"> <div class="logo">Insta Foot</div></nuxt-link> </div>
      <div class="space  md:w-1/2 lg:w-1/6 xl:w-16"></div>
      <div class="links w-1/7 sm:w-2/3 md:w-1/7 lg:w-1/7 xl:w-1/9">
        <ul>
          <li> <nuxt-link to="/live">Live</nuxt-link> </li>
          <li> <nuxt-link to="/scores">Scores</nuxt-link> </li>
          <li> <nuxt-link to="/fixtures">Fixtures</nuxt-link> </li>
          <li> <nuxt-link to="/tables">Tables</nuxt-link> </li>
          <li> <nuxt-link to="/leagues">Leagues</nuxt-link> </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'Navbar',


}
</script>

<style lang="scss" scoped>
  .my-navbar{
    box-shadow: -1px 0px 4px 0 lighten($shadow,10);

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
          padding: .5rem 1.5rem;
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
