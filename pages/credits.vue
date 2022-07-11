<template>

  <div class="credits">

    <quote-left></quote-left>
    <credits-center></credits-center>

  </div>

</template>

<script>
import CreditsCenter from '~/components/credits-center.vue'
import QuoteLeft from '~/components/quote-left.vue'
export default {
  components: { QuoteLeft, CreditsCenter },
  name: 'CreditsPage',
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
}
</script>

<style scoped>
  .credits{
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
