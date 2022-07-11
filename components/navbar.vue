<template>
<div>
  <nav>
    <ul>
      <li><nuxt-link class="link" to="/">Contacts</nuxt-link></li>
      <li><nuxt-link class="link" to="/videos">Videos</nuxt-link></li>
      <li><nuxt-link class="link" to="/pictures">Photos</nuxt-link></li>
      <li><nuxt-link class="link" to="/partners">Partners</nuxt-link></li>
      <li><nuxt-link class="link" to="/credits">Credits</nuxt-link></li>
      <li><nuxt-link class="link" to="/certificate">Certificate</nuxt-link></li>
      <li><nuxt-link class="link" to="/equipment">Equipments List</nuxt-link></li>
    </ul>
  </nav>

</div>
</template>

<script>
export default {
}
</script>

<style scoped>
div{
  background: url("assets/pictures/navbar-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
}

ul{
  list-style-type: none;

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1em;

  }
  .link{
    font-family: 'Yellowtail', cursive;
    color: #FFFFFF;
    font-size: 40px;
    text-decoration: none;
    text-align: center;

    text-shadow: 0px 4px 4px #3A2020;
  }
  a.nuxt-link-active {
    color: #412712;
    text-decoration: underline;
  }
  li {
    cursor: pointer;
    margin: auto;
  }
</style>
