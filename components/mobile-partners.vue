<template>
  <div class="partner-center">
    <h1>{{ $t('partnersHeader') }}</h1>
    <div class="partner-pictures">
      <div class="partner-div">
        <a href="http://www.arkogints.com/" target="_blank">
          <img class="partner-pic" src="~/assets/pictures/partners/arkogints.png">
        </a>
      </div>
      <div class="partner-div">
        <a href="http://www.cinematech.lt/en/" target="_blank">
          <img class="partner-pic" src="~/assets/pictures/partners/cinematech.png">
        </a>
      </div>
      <div class="partner-div">
        <a href="http://cinetechno.art/" target="_blank">
          <img class="partner-pic" src="~/assets/pictures/partners/cinetechno.png">
        </a>
      </div>
      <div class="partner-div">
        <a href="https://cine.lt/" target="_blank">
          <img class="partner-pic" src="~/assets/pictures/partners/cinevera.png">
        </a>
      </div>
      <div class="partner-div">
        <a href="http://www.helmifilms.fi/" target="_blank">
          <img class="partner-pic" src="~/assets/pictures/partners/Helmi-Films.png">
        </a>
      </div>
      <div class="partner-div">
        <a href="https://www.steadicam-ops.com/" target="_blank">
          <img class="partner-pic" src="~/assets/pictures/partners/sm_logo.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.partner-center{
  background: url("assets/pictures/bg/center-bg-shorter.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;

  border-top: 7px solid #2F2727;
  border-bottom: 7px solid #2F2727;
}
.partner-pictures{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 4em;
  align-items: center;
  justify-content: center;
}
.partner-pic{
  width: 8em;
  object-fit: cover;
}
h1{
  font-family: 'Yellowtail';
  text-align: center;
  font-style: normal;
  font-size: 3em;
  font-weight: 600;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
