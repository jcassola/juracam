<template>
  <div v-if="mobile" class="picture">
    <mobile-picture />
  </div>
  <div v-else class="picture">
    <desktop-picture-left />
    <desktop-picture-center />
  </div>
</template>

<script>
import desktopPictureCenter from '~/components/desktop-picture-center.vue'
import DesktopPictureLeft from '~/components/desktop-picture-left.vue'
import MobilePicture from '~/components/mobile-picture.vue'

export default {
  name: 'PicturesPage',
  components: {
    desktopPictureCenter,
    DesktopPictureLeft,
    MobilePicture,
   },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
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
.picture{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
