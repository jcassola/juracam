<template>
  <div class="picture-left">
    <img class="transparent" src="~/assets/pictures/bg/transparent.svg">
    <div class="picture-list">
      <ul>
        <li v-for="(templateImg, index) in pictures" :key="`img-${index}`">
          <img
            class="cover"
            :src="templateImg.source"
            @click="setActiveImg(templateImg)"
          >
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
computed: {
    ...mapState(['pictures', 'activeImg'
    ])
  },
  methods: {
    setActiveImg (img) {
      this.$store.commit('setActiveImg', img)
    }
  }
}
</script>

<style scoped>
.picture-left{
    background: url("assets/pictures/bg/left-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 25%;
}
.transparent{
  width: 43%;
  height: 80%;
  position: absolute;
  object-fit: cover;
}
ul{
  margin-top: 3em;
  position: absolute;
  width: 15%;
  height:40%;
  overflow: hidden;
  overflow-y: scroll;
}
.cover{
  cursor: pointer;
  margin-left: 10%;
  width: 80%;
  object-fit: contain;
}
li{
  margin-bottom: 10px;
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
