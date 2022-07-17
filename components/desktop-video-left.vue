<template>
  <div class="video-left">
    <!-- <img class="transparent" src="~/assets/pictures/bg/transparent.svg"> -->
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
    <!-- <div class="div-quote"> -->
    <quote class="quote" />
    <!-- </div> -->
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
    background: url("assets/pictures/bg/transparent-bg.png"), url("assets/pictures/bg/left-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 28%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.video-list{
  height: 50%;
}
ul{
  margin-top: 2em;
  /* position: absolute; */
  width: 90%;
  height:100%;
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

.quote{
  height: 35%;

}
</style>
