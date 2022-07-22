<template>
  <div class="partner-center">
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
  /* flex-direction: column;
  justify-content: center;
  gap: 2em; */

  width: 51%;
  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
.partner-pictures{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 3em;
  align-items: center;
  justify-content: center;
}
.partner-pic{
  width: 8.5em;
  object-fit: cover;
}
@media only screen and (max-width: 800px) {
  .partner-pic {
    width: 7em;
  }
  .partner-center{
    width: 100%;
  }
}

</style>
