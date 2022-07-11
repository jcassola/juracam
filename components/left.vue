<template>
  <div class="partners-left">
    <quote></quote>
  </div>
</template>

<script>
import quote from './quote.vue'
export default {
  components: { quote }

}
</script>

<style scoped>
  .partners-left{
    background: url("assets/pictures/left-bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    width: 25%;
    position: relative;

    display: flex;
    flex-direction: column;
  }
</style>
