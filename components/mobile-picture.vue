<template>
  <div class="picture-center">
    <h1>{{ $t('photographs') }}</h1>
    <carousel :paginationEnabled="false" :perPage="1" :scrollPerPage="true" class="carousel">
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
    background: url("assets/pictures/bg/tape-left.png") left no-repeat, url("assets/pictures/bg/tape-right.png") right no-repeat, url("assets/pictures/bg/center-bg-shorter.png") top no-repeat;
    background-size: 10%, 10%, auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 2em; */
    width: 100%;
    height: 100%;

    border-top: 7px solid #2F2727;
    border-bottom: 7px solid #2F2727;
  }
  h1{
    font-family: 'ConforterBrush';
    font-style: normal;
    font-weight: 400;
    font-size: 4rem;
    font-weight: 600;
    color: #241B1B;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .carousel{
    width: 100%;
    align-items: center;
    margin-bottom: 1rem;
  }
  .div-pic{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .cover{
    width: 70%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
</style>
