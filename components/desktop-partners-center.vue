<template>
  <div class="partner-center">
    <div class="partner-pictures">
      <div class="row">
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
      </div>
      <div class="partner-div center">
        <a href="https://cine.lt/" target="_blank">
          <img class="partner-pic" src="~/assets/pictures/partners/cinevera.png">
        </a>
      </div>
      <div class="row">
        <div class="partner-div">
          <a href="http://cinetechno.art/" target="_blank">
            <img class="partner-pic" src="~/assets/pictures/partners/cinetechno.png">
          </a>
        </div>
        <div class="partner-div">
          <a href="https://www.steadicam-ops.com/" target="_blank">
            <img class="partner-pic" src="~/assets/pictures/partners/sm_logo.png">
          </a>
        </div>
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
  background: url("assets/pictures/bg/center-bg-2.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  /* flex-direction: column;
  justify-content: center;
  gap: 2em; */

  width: 51%;
  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
.partner-pictures{
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
  flex-wrap: wrap;
  column-gap: 1.5em;
  align-items: center;
  justify-content: center;
}
.row{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
}
.center{
  margin: 1em 0;
}
.partner-div{
  width: 12em;
}
.partner-pic{
  width: 100%;
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
