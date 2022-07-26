<template>
  <div>
    <div v-if="mobile" class="contact">
      <mobile-contact />
    </div>
    <div v-else class="contact">
      <desktop-contact-left class="contact-left" />
      <desktop-contact-center class="contact-center" />
    </div>
  </div>
</template>

<script>
import desktopContactCenter from '~/components/desktop-contact-center.vue'
import desktopContactLeft from '~/components/desktop-contact-left.vue'
import MobileContact from '~/components/mobile-contact.vue'

export default {
  name: 'ContactPage',
  components: {
    desktopContactCenter,
    desktopContactLeft,
    MobileContact
    },
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
  .contact{
    display: flex;
    height: 100%;
    width: 100%;
    margin: auto;
  }
.contact-left{
    background: url("assets/pictures/bg/left-bg-2.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 49%;
}
@media only screen and (max-width: 600px) {
  .contact {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
}

</style>
