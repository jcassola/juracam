<template>
  <div class="pictures">
    <img class="fire" src="~/assets/pictures/fire.svg" />
    <img class="yessir" src="~/assets/pictures/yessir.svg" />
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
    height: 90%;
    position: relative;
    bottom: 0;
  }
  .yessir{
    width: 200%;
    /* height: 90%; */
    position: absolute;
    right: -88%;
    bottom: 0;
  }
</style>
