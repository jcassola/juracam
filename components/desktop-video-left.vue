<template>
  <div class="video-left">
    <img class="transparent" src="~/assets/pictures/bg/transparent.svg" />
    <div class="video-list">
      <ul>
        <li v-for="video in videos" :key="video">
          <a @click="setActiveVideo(video)">{{ video.name }}</a>
        </li>
      </ul>
    </div>
      <div class="div-quote">
        <quote class="quote"></quote>
      </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import quote from './quote.vue'

export default {
  components: { quote },
  data () {
    return {
      video: ''
    }
  },
  computed: mapState([
    'videos', 'activeVideo'
  ]),
  methods: {
    setActiveVideo (video) {
      this.$store.commit('setActiveVideo', video)
    }
  }
}
</script>

<style scoped>
.video-left{
    background: url("assets/pictures/bg/left-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 25%;
}
img{
  height: 90%;
  position: absolute;
}
ul{
  margin-top: 3em;
  position: absolute;
  width: 15%;
  overflow-y: scroll;
}
a{
  justify-content: center;
  cursor: pointer;
  font-family: 'Monospac821 BT';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: white;
}
.div-quote{
  height: 100%;
  display: flex;
}

.quote{
  position: relative;
  margin-top: auto;
}
</style>
