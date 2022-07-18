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
    text-align: right;
    width: 100%;
    padding: 1em;
  }
  p{
    font-family: 'Palace Script MT', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 4em;
    line-height: 3.8rem;
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
