<template>
  <div v-if="mobile" class="credits">
    <mobile-credits />
  </div>
  <div v-else class="credits">
    <quote-left />
    <credits-center />
  </div>
</template>

<script>
import CreditsCenter from '~/components/credits-center.vue'
import MobileCredits from '~/components/mobile-credits.vue'
import QuoteLeft from '~/components/quote-left.vue'
export default {
  name: 'CreditsPage',
  components: { QuoteLeft, CreditsCenter, MobileCredits },
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
  .credits{
    display: flex;
    width: 100%;
    height: 100%;
    margin: auto;
  }
</style>
