<template>
  <div class="picture-center">
    <img :key="imgKey" :src="activeImg.source" width="600" height="400">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DesktopPictureCenter',
  data () {
    return {
      imgKey: 0
    }
  },
  computed: mapState([
    'activeImg'
  ]),

  watch: {
    'activeImg' () {
      this.imgKey++
    }
  },
}
</script>

<style scoped>
.picture-center{
  background: url("assets/pictures/bg/center-bg-shorter.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 75%;
  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
img{
  object-fit: contain;
}
</style>
