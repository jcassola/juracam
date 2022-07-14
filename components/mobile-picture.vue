<template>
  <div class="picture-center">
    <h1>{{ $t('photographs') }}</h1>
    <carousel :perPage="1" :scrollPerPage="true" class="carousel">
      <slide v-for="(image, index) in pictures" :key="`mobileImg-${index}`">
        <div class="div-pic">
          <img
            class="cover"
            :src="image.source"
          >
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import { mapState } from 'vuex'

export default {
  components: {
    Carousel,
    Slide
   },
   computed: {
    ...mapState(['pictures', 'activeImg'
    ])
  },
}
</script>

<style scoped>
  .picture-center{
    background: url("assets/pictures/bg/center-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 2em; */
    width: 100%;
    height: 40em;

    border-top: 7px solid #2F2727;
    border-bottom: 7px solid #2F2727;
  }
  h1{
    font-family: 'Yellowtail';
    font-style: normal;
    font-weight: 400;
    font-size: 4rem;
    color: #241B1B;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .carousel{
    width: 100%;
    align-items: center;
  }
  .div-pic{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .cover{
    width: 90%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
</style>
