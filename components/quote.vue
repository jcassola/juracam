<template>
  <div>
    <p>{{ $t('quoteFirstLine') }}</p>
    <p>{{ $t('quoteSecondLine') }}</p>
    <p>{{ $t('quoteThirdLine') }}</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div{
    display: flex;
    flex-direction: column;
    align-items: right;
    text-align: right;
    width: 100%;
    gap:.5em
  }
  p{
    font-family: 'Palace Script MT', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 4em;
    line-height: 65px;
    color: white;
  }
</style>
