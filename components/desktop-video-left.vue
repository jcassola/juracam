<template>
  <div class="video-left">
    <img class="transparent" src="~/assets/pictures/bg/transparent.svg">
    <div class="video-list">
      <ul>
        <li v-for="(templateVideo, index) in videos" :key="`video-${index}`">
          <a
            :class="{ active: templateVideo.name === activeVideo.name}"
            @click="setActiveVideo(templateVideo)"
          > {{ index+1 }}.{{ templateVideo.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="div-quote">
      <quote class="quote" />
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
      counter: 0
    }
  },
  computed: {
    ...mapState(['videos', 'activeVideo'
    ])
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
  height: 50%;
  overflow: hidden;
  overflow-y: scroll;
}
a{
  cursor: pointer;
  font-family: 'Monospac821 BT';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 36px;
  color: white;
  margin-left: 10%;
}
li{
  margin-bottom: 10px;

}
.active{
  color: #E8CF98;
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
