<template>
  <div class="picture-left">
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
    background: url("assets/pictures/bg/transparent-bg.png"), url("assets/pictures/bg/left-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 28%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.picture-list{
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
.cover{
  cursor: pointer;
  margin-left: 10%;
  width: 80%;
  object-fit: contain;
}
li{
  margin-bottom: 10px;
}
/* .div-quote{
  height: 50%;
  display: flex;
} */

.quote{
  height: 35%;
  /* display: flex; */
  /* align-items: center; */
  /* display: flex; */
}
</style>
