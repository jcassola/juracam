<template>
  <div class="parent">
    <div class="top" />
    <language-selector />
    <div class="main">
      <div class="container">
        <nuxt class="pages" />
        <NavBar class="my-navbar" />
      </div>
    </div>
    <div class="footer" />
  </div>
</template>

<script>
import LanguageSelector from '~/components/language-selector.vue'
import NavBar from '~/components/navbar.vue'

export default {
  components: {
    NavBar,
    LanguageSelector
  }
}
</script>

<style scoped>
  .parent{
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }
  .top, .footer{
    height: 14%;
    width: 100%;
  }
  .top {
    background: url("assets/pictures/bg/tape-top.png");
    background-position: center;
    background-repeat: repeat;
    background-size: contain;
  }
  .footer {
    background: url("assets/pictures/bg/tape-bottom.png");
    background-position: center;
    background-repeat: repeat;
    background-size: contain;
  }
  .main{
    height: 72%;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .pages{
    display: flex;
    flex-direction: row;
    width: 66.66%;
  }
  .container{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
  .my-navbar{
    width: 33.33%;
    margin-left: auto;
  }

</style>
