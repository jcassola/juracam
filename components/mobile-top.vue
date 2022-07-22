<template>
  <div class="top">
    <div class="quote">
      <p>{{ $t('quoteFirstLine') }}</p>
      <p>{{ $t('quoteSecondLine') }}</p>
      <p>{{ $t('quoteThirdLine') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: { },

}
</script>

<style scoped>
.top {
  background: url("assets/pictures/bg/tape-left.png") left no-repeat, url("assets/pictures/bg/tape-right.png") right no-repeat, url("assets/pictures/bg/navbar-bg.png") top no-repeat;
  background-size: 10%, 10%, auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20em;
}
.quote{
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 100%;
  margin-right: 11%;
}
p{
  display: block;
  font-family: 'Palace Script MT', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 4em;
  line-height: 65px;
  color: white;
}
</style>
