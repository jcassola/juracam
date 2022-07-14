<template>
  <div class="quote-background">
    <div class="div-quote">
      <quote class="quote-down" />
    </div>
  </div>
</template>

<script>
import quote from './quote.vue'
export default {
  components: { quote }

}
</script>

<style scoped>
.quote-background{
    background: url("assets/pictures/bg/left-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 25%;
}
.div-quote{
  height: 100%;
  display: flex;
}
.quote-down{
  margin-top: auto;
}
</style>
