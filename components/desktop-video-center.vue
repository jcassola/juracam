<template>
<div class="video-center">
  <h1>{{activeVideo.name}} Hola</h1>
  <!-- <video id="video-play" controls media="all" autoplay type="video/mp4"></video> -->
  <video :key="key" id="video-play" autoplay controls>
    <source id="source" :src="activeVideo.source" type="video/mp4">
  </video>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'activeVideo'
  ])
}
</script>

<style scoped>
.video-center{
  background: url("assets/pictures/center-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  width: 75%;

  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
video{
  margin: 1em auto;
  width: 80%
}
h1{
  display: block;
  margin: 0 auto;
}
</style>
