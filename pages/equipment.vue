<template>
    <div class="equipment">
    <quote-left></quote-left>
    <div class="equipment-center">
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
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
}
</script>

<style scoped>
.equipment{
  display: flex;
  width: 100%;
  height: 100%;
}
.equipment-center{
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
  font-size: 1.5em;
  line-height: 2em;
  word-spacing: .8em;

  color: #412712;
}
</style>
