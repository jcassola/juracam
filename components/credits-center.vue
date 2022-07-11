<template>
  <div class="credits-center">
    <div class="credit-info">
      <div class="headers">
        <h1>Work Experience:</h1>
        <h2>Cameraman:</h2>
      </div>
      <ul>
        <li v-for="item in credits" :key="item">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { credits } from '@/assets/content'
export default {
  data () {
    return {
      credits
    }
  }
}
</script>

<style scoped>

.credits-center{
  background: url("assets/pictures/center-bg.png");
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
.credit-info{
  height: 100%;
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
  font-family: 'Monospac821 BT';
  font-style: normal;
  font-weight: 1000;
  font-size: 1em;
  line-height: 2em;
}
.headers{
  margin-right: auto;
}
h1, h2{
  font-family: 'Monospac821 BT';
  font-weight: 1000;
  margin-bottom: auto;
}
h1{
  font-size: 2.5em;
}
h2{
  font-size: 2em;
}
</style>
