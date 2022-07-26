<template>
  <div class="picture-center">
    <div class="img-player">
      <i :class="{ disabled : pictures[0] === activeImg }" class="arrow left" @click="previousImg" />
      <img :key="imgKey" :src="activeImg.source" width="600" height="400">
      <i :class="{ disabled : pictures.at(-1) === activeImg }" class="arrow right" @click="nextImg" />
    </div>
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
    'pictures', 'activeImg'
  ]),

  watch: {
    'activeImg' () {
      this.imgKey++
    }
  },
    methods: {
    nextImg () {
      this.$store.commit('showNextImg')
    },
    previousImg () {
      this.$store.commit('showPreviousImg')
    },
  }
}
</script>

<style scoped>
.picture-center{
  background: url("assets/pictures/bg/center-bg-2.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 51%;
  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
.img-player{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2em;
}
img{
  width: 80%;
  object-fit: contain;
  margin: 0 1em;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: .8em;
  cursor: pointer;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.disabled{
  visibility: hidden;
}
</style>
