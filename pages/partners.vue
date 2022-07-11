<template>
  <div class="partners">
    <quote-left></quote-left>
    <partners-center></partners-center>
  </div>
</template>

<script>
import PartnersCenter from '~/components/partners-center.vue'
import QuoteLeft from '~/components/quote-left.vue'

export default {
  name: 'PartnersPage',
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  components: {
    QuoteLeft,
    PartnersCenter
  }
}
</script>

<style scoped>
  .partners{
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
