<template>
  <div class="parent">
    <language-selector />
    <div class="top">
      <img class="tapes" src="~/assets/pictures/bg/tapes-top-2.png">
    </div>
    <div class="main">
      <div class="container">
        <nuxt class="pages" />
        <NavBar class="my-navbar" />
      </div>
    </div>
    <div class="footer">
      <img class="tapes" src="~/assets/pictures/bg/tapes-top-2.png">
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
  .parent{
    background: url("assets/pictures/bg/cover-up.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;

  }
  .top, .footer{

    position: absolute;
    height: 12%;
    width: 100%;
    z-index: 1000;
  }
  .top {
    top: 0;
  }
  .footer {
    bottom: 0;
  }
  .footer > img{
    transform: rotateX(180deg);
  }
  .tapes{
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
  .main{
    height: 90%;
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
