<template>
  <div>
    <language-selector class="language" />
    <div class="main">
      <div class="container">
        <nuxt class="pages" />
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
    background: url("assets/pictures/bg/tapes-vertical.svg");
    background-position: center;
    background-repeat: repeat;
    background-size: contain;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .pages{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .container{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 85%;

  }
  .my-navbar{
    width: 100%;
    margin-top: auto;
  }
  .language{
    margin-top: 0;
    margin-left: 7%;
  }

</style>
