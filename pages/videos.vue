<template>
  <div class="video">
    <desktop-video-left></desktop-video-left>
    <desktop-video-center></desktop-video-center>
  </div>
</template>

<script>
import desktopVideoCenter from '~/components/desktop-video-center.vue'
import desktopVideoLeft from '~/components/desktop-video-left.vue'
export default {
  components: { desktopVideoCenter, desktopVideoLeft },
  name: 'VideosPage',
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
}
</script>

<style>
  .video{
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
