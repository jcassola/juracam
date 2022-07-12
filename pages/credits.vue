<template>
  <div class="credits">
    <quote-left />
    <credits-center />
  </div>
</template>

<script>
import CreditsCenter from '~/components/credits-center.vue'
import QuoteLeft from '~/components/quote-left.vue'
export default {
  name: 'CreditsPage',
  components: { QuoteLeft, CreditsCenter },
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
