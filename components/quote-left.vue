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
    background: url("assets/pictures/bg/left-bg-2.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 49%;
}
.div-quote{
  height: 100%;
  display: flex;
}
.quote-down{
  margin-top: auto;
  margin-bottom: 15%;
}
</style>
