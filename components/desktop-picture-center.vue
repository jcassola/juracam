<template>
  <div class="picture-center">
    <img src="~/assets/pictures/bg/fire.svg" width="500" height="600">
  </div>
</template>

<script>
export default {

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

  width: 75%;
  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
</style>
