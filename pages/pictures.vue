<template>
  <div class="picture">
    <desktop-picture-center />
  </div>
</template>

<script>
import desktopPictureCenter from '~/components/desktop-picture-center.vue'
export default {
  name: 'PicturesPage',
  components: { desktopPictureCenter },
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
