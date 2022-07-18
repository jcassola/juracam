<template>
  <div class="parent">
    <div class="left" />
    <!-- <language-selector /> -->
    <div class="main">
      <div class="container">
        <mobile-top />
        <nuxt class="pages" />
        <NavBar class="my-navbar" />
      </div>
    </div>
    <div class="right" />
  </div>
</template>

<script>
// import LanguageSelector from '~/components/language-selector.vue'
import MobileTop from '~/components/mobile-top.vue'
import NavBar from '~/components/navbar.vue'

export default {
  components: {
    NavBar,
    // LanguageSelector,
    MobileTop
  }
}
</script>

<style scoped>
  .parent{
    display: flex;
    flex-direction: row;
    width: 100vw;
    overflow: scroll;
  }
  .left, .right{
    width: 10%;

    background: url("assets/pictures/bg/tapes-vertical.png"), url("assets/pictures/bg/bg-vertical.png");
    background-position: center;
    background-repeat: repeat;
    background-size: cover, contain;
  }
  .main{
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .pages{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .my-navbar{
    width: 100%;
    margin-top: auto;
  }

</style>
