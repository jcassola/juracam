<template>
  <div class="equipment">
    <quote-left v-if="!mobile" />
    <div class="equipment-center">
      <h1 v-if="mobile">
        {{ $t('equipmentHeader') }}
      </h1>
      <ul class="equipment-list">
        <li>1.Post: Cinema Technologies.</li>
        <li>2.Remote Control Focus: Cinema Technologies.</li>
        <li>3.Monitor: TVLogie SDI, Composite</li>
        <li>4.Vest: Sachtler ACT2</li>
        <li>5.Battery: VECT ET-190S 4</li>
        <li>6.Arm: GRI PRO TITAN</li>
        <li>7.Arm Post-Low Mode: Cinema Technologies.</li>
        <li>8.Arm Post-High Mode: Cinema Technologies.</li>
        <li>9.Charger: VECT POVER 4 POINC</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquipmentPage',
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
.equipment{
  display: flex;
  /* width: 100%; */
  height: 100%;
  margin: auto;
}
.equipment-center{
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
.equipment-list{
  display: flex;
  flex-direction: column;
  gap: .5em;
  list-style: none;
}
li{
  font-family: 'Monospac821 BT';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3em;
  line-height: 1.7em;
  word-spacing: .8em;

  color: #412712;
}
h1{
  font-family: 'ConforterBrush';
  font-style: normal;
  font-size: 3em;
  font-weight: 600;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media only screen and (max-width: 800px) {
  .equipment{
    width: 100%;
  }
  .equipment-center {
    background: url("assets/pictures/bg/tape-left.png") left no-repeat, url("assets/pictures/bg/tape-right.png") right no-repeat, url("assets/pictures/bg/center-bg-shorter.png") top no-repeat;
    background-size: 10%, 10%, auto;
    width: 100%;
    flex-direction: column;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    border-left: 0;
    border-right: 0;
    border-top: 7px solid #2F2727;
    border-bottom: 7px solid #2F2727;
  }
  .equipment-list{
    width: 75%;
  }
  li{
    font-size: 1rem;
    line-height: 1.2em;
  }
}
</style>
