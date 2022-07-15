<template>
  <div>
    <select v-model="$i18n.locale" name="language">
      <option value="en">
        English
      </option>
      <option value="ru">
        Russian
      </option>
    </select>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  div{
    position: absolute;
    z-index: 100;
    margin-top: 6.5%;
  }
  select, option{
    color: white;
    background-color: #201B1B;
    font-family: 'Monospac821 BT';
    font-size: 1em;
    padding: 5px;
    outline: none;
}
</style>
