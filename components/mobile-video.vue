<template>
  <div class="mobile-video">
    <div class="video-list">
      <ul>
        <li v-for="(templateVideo, index) in videos" :key="`mobileVideo-${index}`">
          <a
            :class="{ active: templateVideo.name === activeVideo.name}"
            @click="setActiveVideo(templateVideo)"
          > {{ index+1 }}.{{ templateVideo.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="video-player">
      <h1>
        {{ $t('videosHeader') }}
      </h1>
      <video :key="mobileVideoKey" autoplay controls>
        <source :src="activeVideo.source" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MobileVideo',
  data () {
    return {
      mobileVideoKey: 0,
      counter: 0
    }
  },
  computed: mapState([
    'activeVideo', 'videos'
  ]),

  watch: {
    'activeVideo' () {
      this.mobileVideoKey++
    }
  },
  methods: {
    setActiveVideo (video) {
      this.$store.commit('setActiveVideo', video)
    },
    counterPlus () {
      return this.counter++
    }
  }
}
</script>

<style scoped>
.mobile-video{
  background: url("assets/pictures/bg/center-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1em;
  padding-top: 1em;

  margin-top: -7px;
  /* margin-bottom: -7px; */
  border-top: 7px solid #2F2727;
  border-bottom: 7px solid #2F2727;
}
.video-player{
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-right: 1em;
}
.video-player > h1{
  text-align: right;
  font-family: 'Yellowtail', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3rem;
}
video{
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
.video-list{
  min-width: 35%;
  height: 20%;
}
ul{
  margin-top: 1em;
  width: 95%;
  height: 10em;
  overflow: hidden;
  overflow-y: scroll;
  list-style-type: none;
}

a{
  cursor: pointer;
  font-family: 'Monospac821 BT';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  margin-left: 5%;
}
.active{
  color: #2F2727;
}
</style>
