<template>
<div>
  <language-selector></language-selector>
  <div class="main">
    <div class="container">
      <nuxt class="pages"></nuxt>
      <NavBar class="my-navbar" />
    </div>
  </div>
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
  .main{
    background: url("assets/pictures/bg/tapes.svg");
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
  }
  .pages{
    display: flex;
    flex-direction: row;
    width: 75%;
  }
  .container{
    display: flex;
    flex-direction: row;
    height: 90%;
    width: 100%;

  }
  .my-navbar{
    width: 25%;
    margin-left: auto;
  }

</style>
