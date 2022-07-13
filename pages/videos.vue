<template>
  <div v-if="mobile" class="video">
    <mobile-top />
    <mobile-video />
  </div>
  <div v-else class="video">
    <desktop-video-left />
    <desktop-video-center />
  </div>
</template>

<script>
import desktopVideoCenter from '~/components/desktop-video-center.vue'
import desktopVideoLeft from '~/components/desktop-video-left.vue'
import MobileTop from '~/components/mobile-top.vue'
import MobileVideo from '~/components/mobile-video.vue'

export default {
  name: 'VideosPage',
  components: { desktopVideoCenter, desktopVideoLeft, MobileTop, MobileVideo },
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    mobile () {
      return this.windowWidth < 800
    }
  }
}
</script>

<style>
.video {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    margin: auto;
}
</style>
