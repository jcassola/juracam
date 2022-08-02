<template>
  <div class="video-left">
    <div class="video-list">
      <ul>
        <li v-for="(templateVideo, index) in videos" :key="`video-${index}`">
          <a
            :class="{ active: templateVideo.name === activeVideo.name}"
            @click="setActiveVideo(templateVideo)"
          > {{ index+1 }}.{{ $t(`videoNames.${templateVideo.name}`) }}
          </a>
        </li>
      </ul>
    </div>
    <quote class="quote" />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import quote from './quote.vue'

export default {
  components: { quote },
  computed: {
    ...mapState(['videos', 'activeVideo'
    ])
  },
  methods: {
    setActiveVideo (video) {
      this.$store.commit('setActiveVideo', video)
    }
  }
}
</script>

<style scoped>
.video-left{
  background: url("assets/pictures/bg/transparent-bg.png"), url("assets/pictures/bg/left-bg-2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 49%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.video-list{
  height: 50%;
  z-index: 500;
}
ul{
  margin-top: 15%;
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
  /* margin-bottom: 3%; */
}
</style>
