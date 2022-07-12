<template>
  <div class="video-center">
    <h1>
      {{ activeVideo.name }}
    </h1>
    <video :key="videoKey" autoplay controls>
      <source :src="activeVideo.source" type="video/mp4">
    </video>
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
    'activeVideo'
  ]),

  watch: {
    'activeVideo' () {
      this.videoKey++
    }
  },
}
</script>

<style scoped>
.video-center{
  background: url("assets/pictures/bg/center-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 75%;
  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
video{
  margin: 1em auto;
  width: 80%
}
h1{
  font-family: 'Yellowtail';
  font-style: normal;
  font-size: 5em;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
}
</style>
