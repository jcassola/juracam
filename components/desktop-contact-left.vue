<template>
  <div class="pictures">
    <img class="fire" src="~/assets/pictures/bg/fire.svg">
    <img class="yessir" src="~/assets/pictures/bg/yessir.svg">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  div{
    position: relative;
  }
  .fire{
    width: 80%;
    height: 100%;
    position: relative;
    bottom: 0;
  }
  .yessir{
    width: 150%;
    /* height: 90%; */
    position: absolute;
    right: -60%;
    bottom: 0;
  }
</style>
