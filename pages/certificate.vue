<template>
  <div class="certificate">
    <quote-left v-if="!mobile" />
    <div class="certificate-center">
      <div class="certificate-picture">
        <img class="certificate" src="~/assets/pictures/certificate.png">
      </div>
    </div>
  </div>
</template>

<script>
import quoteLeft from '~/components/quote-left.vue'
export default {
  name: 'CertificatePage',
  components: { quoteLeft },
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  computed: {
    mobile () {
      return this.windowWidth <= 800
    }
  }
}
</script>

<style scoped>
.certificate{
  display: flex;
  height: 100%;
  margin: auto;
}
.certificate-center{
  background: url("assets/pictures/bg/center-bg-shorter.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;

  width: 51%;
  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}

.certificate-picture{
  width: 100%;
  height: 80%;
}
img{
  object-fit: contain;
}
@media only screen and (max-width: 800px) {
  .certificate{
    width: 100%;
  }
  .certificate-center {
    background: url("assets/pictures/bg/tape-left.png") left no-repeat, url("assets/pictures/bg/tape-right.png") right no-repeat, url("assets/pictures/bg/center-bg-shorter.png") top no-repeat;
    background-size: 10%, 10%, auto;
    width: 100%;
    flex-direction: row;
    padding: 4.5em;
    border-left: 0;
    border-right: 0;
    border-top: 7px solid #2F2727;
    border-bottom: 7px solid #2F2727;
  }
  .certificate-picture {
    width: 80%;
  }
}
</style>
