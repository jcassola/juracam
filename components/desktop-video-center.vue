<template>
  <div class="video-center">
    <h1>
      {{ $t(`videoNames.${activeVideo.name}`) }}
    </h1>
    <div class="video-player">
      <i :class="{ disabled : videos[0] === activeVideo }" class="arrow left" @click="previousVideo" />
      <video :key="videoKey" autoplay controls>
        <source :src="activeVideo.source" type="video/mp4">
      </video>
      <i :class="{ disabled : videos.at(-1) === activeVideo }" class="arrow right" @click="nextVideo" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DesktopVideoCenter',
  data () {
    return {
      videoKey: 0
    }
  },
  computed: mapState([
    'videos', 'activeVideo'
  ]),
  watch: {
    'activeVideo' () {
      this.videoKey++
    }
  },
  methods: {
    nextVideo () {
      this.$store.commit('playNextVideo')
    },
    previousVideo () {
      this.$store.commit('playPreviousVideo')
    },
  }
}
</script>

<style scoped>
.video-center{
  background: url("assets/pictures/bg/center-bg-shorter.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 51%;
  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
video{
  margin: 1em auto;
  width: 80%
}
h1{
  font-family: 'Yellowtail', sans-serif;
  font-style: normal;
  font-size: 5em;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
}
.video-player{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2em;
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
