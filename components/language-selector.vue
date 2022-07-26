<template>
  <div>
    <select v-model="$i18n.locale" name="language">
      <option value="en">
        English
      </option>
      <option value="ru">
        {{ $t('languageButton') }}
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
    background-color: transparent;
    position: absolute;
    z-index: 100;
    top: 12%;
  }
  select, option{
    background-color: transparent;
    font-family: "Yellowtail", cursive;
    font-size: 2.2em;
    padding: 5px;
    outline: none;
    border: none;
    margin-left: .5em;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px #412712;
}
option{
  font-size: 1em;
  color: black;
}
@media only screen and (max-width: 800px) {
  div {
    top: 0;
    margin-left: 10%;
  }
  select, option{
    font-size: 1.5em;
    margin-left: 0;
    text-shadow: 0px 4px 4px #412712;
  }
  option{
    font-size: 1em;
    padding: 0;
  }
}
</style>
