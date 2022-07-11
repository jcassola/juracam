<template>

  <div class="certificate">
    <quote-left></quote-left>
    <div class="certificate-center">
      <div class="certificate-picture">
          <img class="certificate" src="~/assets/pictures/certificate.png" />
      </div>
    </div>
  </div>

</template>

<script>
import quoteLeft from '~/components/quote-left.vue'
export default {
  components: { quoteLeft },
  name: 'CertificatePage',
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
}
</script>

<style scoped>
.certificate{
  display: flex;
  width: 100%;
  height: 100%;
}
.certificate-center{
  background: url("assets/pictures/center-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;

  width: 75%;
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
</style>
