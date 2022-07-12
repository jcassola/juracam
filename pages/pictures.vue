<template>
  <div class="picture">
    <desktop-picture-left />
    <desktop-picture-center />
  </div>
</template>

<script>
import desktopPictureCenter from '~/components/desktop-picture-center.vue'
import DesktopPictureLeft from '~/components/desktop-picture-left.vue'
export default {
  name: 'PicturesPage',
  components: { desktopPictureCenter, DesktopPictureLeft },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
}
</script>

<style>
.picture{
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
