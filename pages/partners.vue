<template>
  <div v-if="mobile" class="partners">
    <mobile-partners />
  </div>
  <div v-else class="partners">
    <quote-left />
    <partners-center />
  </div>
</template>

<script>
import MobilePartners from '~/components/mobile-partners.vue'
import PartnersCenter from '~/components/partners-center.vue'
import QuoteLeft from '~/components/quote-left.vue'

export default {
  name: 'PartnersPage',
  components: {
    QuoteLeft,
    PartnersCenter,
    MobilePartners
  },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    mobile () {
      return this.windowWidth <= 800
    }
  }
}
</script>

<style scoped>
  .partners{
    display: flex;
    height: 100%;
    width: 100%;
    margin: auto;
  }
</style>
