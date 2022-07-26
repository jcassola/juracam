<template>
  <div class="credits-center">
    <div class="credit-info">
      <div class="headers">
        <h1>{{ $t('creditsHeader') }}</h1>
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
  background: url("assets/pictures/bg/tape-left.png") left no-repeat, url("assets/pictures/bg/tape-right.png") right no-repeat, url("assets/pictures/bg/center-bg-shorter.png") top no-repeat;
  background-size: 10%, 10%, auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding-top: 1em;
  padding-bottom: 1em;

  border-top: 7px solid #2F2727;
  border-bottom: 7px solid #2F2727;
}
.credit-info{
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
ul {
  height: 28em;
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
  font-size: 1.2em;
  line-height: 2em;
}
.headers{
  margin: auto;
}
h1{
  font-size: 3.5em;
  font-family: 'Yellowtail';
  font-weight: 600;
  margin-bottom: auto;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
