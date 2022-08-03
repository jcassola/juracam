<template>
  <div class="credits-center">
    <div class="credit-info">
      <div class="headers">
        <h1>{{ $t('workExperience') }}:</h1>
      </div>
      <ul>
        <li v-for="item in $t('creditsList')" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.credits-center{
  background: url("assets/pictures/bg/center-bg-2.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 51%;

  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
.credit-info{
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
ul {
  height: 70%;
  padding: 0px;
  margin: 0px;
  text-align: left;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 2em;
}

ul >li{
  list-style-type: none;
  font-family: 'Roboto Mono', monospace;
  font-size: 1.2em;
  line-height: 2em;
}
.headers{
  margin-right: auto;
}
h1{
  font-family: 'Roboto Mono', monospace;
  margin-bottom: auto;
  font-size: 2.5em;
}
</style>
