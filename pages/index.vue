<template>

<div>
  <div class="contact">
    <desktop-contact-left class="contact-left"></desktop-contact-left>
    <desktop-contact-center class="contact-center"></desktop-contact-center>
  </div>
</div>

</template>

<script>
import desktopContactCenter from '~/components/desktop-contact-center.vue'
import desktopContactLeft from '~/components/desktop-contact-left.vue'

export default {
  components: { desktopContactCenter, desktopContactLeft },
  name: 'ContactPage',
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default-contact'
}
</script>

<style scoped>
  .contact{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    margin: auto;

  }

  .contact-center{
    background: url("assets/pictures/center-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    width: 100%;

    border-left: 7px solid #2F2727;
    border-right: 7px solid #2F2727;
}
.contact-left{
    background: url("assets/pictures/left-bg.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
}

</style>
