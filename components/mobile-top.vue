<template>
  <div class="top">
    <div class="quote">
      <p>Movement is life</p>
      <p>If you move</p>
      <p>you live! </p>
    </div>
  </div>
</template>

<script>
export default {
  components: { },

}
</script>

<style scoped>
.top {
  background: url("assets/pictures/bg/navbar-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20em;
}
.quote{
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 80%;
}
p{
  display: block;
  font-family: 'Palace Script MT', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 4em;
  line-height: 65px;
  color: white;
}
</style>
