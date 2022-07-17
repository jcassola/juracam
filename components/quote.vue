<template>
  <div>
    <p class="line-one">
      {{ $t('quoteFirstLine') }}
    </p>
    <p class="line-two">
      {{ $t('quoteSecondLine') }}
    </p>
    <p class="line-three">
      {{ $t('quoteThirdLine') }}
    </p>
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
    /* align-items: center; */
    text-align: right;
    width: 100%;
    /* gap:.5em */
    padding: 1em;
  }
  p{
    font-family: 'Palace Script MT', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 4em;
    line-height: 65px;
    color: white;
  }
  .line-one{
    text-align: left;
  }
  .line-two{
    text-align: center;
  }
  .line-three{
    text-align: right;
  }
</style>
