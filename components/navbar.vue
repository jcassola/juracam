<template>
  <div>
    <nav>
      <ul>
        <li
          v-for="link in links"
          :key="`link-${link.url}`"
        >
          <nuxt-link
            class="link"
            :to="localePath(link.text)"
          >
            {{ $t(link.text) }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      links: [
        { text: 'contacts', url: '/contacts' },
        { text: 'videos', url: '/videos' },
        { text: 'pictures', url: '/pictures' },
        { text: 'partners', url: '/partners' },
        { text: 'credits', url: '/credits' },
        { text: 'certificate', url: '/certificate' },
        { text: 'equipment', url: '/equipment' },
      ],
    }
  },
  created () {
    console.log(this.$route.path)
  },
}
</script>

<style scoped>
div {
  background: url("assets/pictures/bg/navbar-bg.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* .active {
  color: #412712 !important;
  text-decoration: underline !important;
} */
.nuxt-link-exact-active{
  color: #412712 !important;
  text-decoration: underline !important;
}

ul {
  list-style-type: none;

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1em;
}
.link {
  font-family: "Yellowtail", cursive;
  color: #ffffff;
  font-size: 2.5rem;
  text-decoration: none;
  text-align: center;

  text-shadow: 0px 4px 4px #3a2020;
}

li {
  cursor: pointer;
  margin: auto;
}
@media only screen and (max-width: 800px) {
  div {
    background: url("assets/pictures/bg/tape-left.png") left no-repeat, url("assets/pictures/bg/tape-right.png") right no-repeat, url("assets/pictures/bg/navbar-bg.png") top no-repeat;
    background-size: 10%, 10%, auto;
  }
  nav {
    width: 90%;
    margin: auto;
  }
}
</style>
