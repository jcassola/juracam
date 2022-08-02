<template>
  <div class="parent">
    <language-selector />
    <div class="main">
      <div class="container">
        <mobile-top />
        <nuxt class="pages" />
        <NavBar class="my-navbar" />
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSelector from '~/components/language-selector.vue'
import MobileTop from '~/components/mobile-top.vue'
import NavBar from '~/components/navbar.vue'

export default {
  components: {
    NavBar,
    LanguageSelector,
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
  .main{
    width: 100%;
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
