<template>
  <div class="partners">
    <quote-left />
    <partners-center />
  </div>
</template>

<script>
import PartnersCenter from '~/components/partners-center.vue'
import QuoteLeft from '~/components/quote-left.vue'

export default {
  name: 'PartnersPage',
  components: {
    QuoteLeft,
    PartnersCenter
  },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
}
</script>

<style scoped>
  .partners{
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
