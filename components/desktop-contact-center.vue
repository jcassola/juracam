<template>
  <div class="contact-center">
    <div class="name">
      <h1>Jurij Charčiuk</h1>
    </div>
    <div class="description">
      <p>
        {{ $t('description.cameraman') }}
      </p>
      <p>
        {{ $t('description.operator') }}
      </p>
    </div>
    <div class="contact-info">
      <p>{{ $t('email') }}: <span>jura@juracam.lt</span></p>
      <p>{{ $t('mobile') }}: <span>+370 612 66710</span></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.contact-center{
  background: url("assets/pictures/bg/center-bg-2.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 2rem; */
  width: 51%;

  border-left: 7px solid #2F2727;
  border-right: 7px solid #2F2727;
}
h1{ /*Only por normalize browser CSS*/
  font-weight: 400;
}
.name, .description, .contact-info{
  text-align: center;
  margin: 0;
}
.name{
  font-family: 'Yellowtail', cursive;
  font-size: 2.8em;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2.1rem;
}
.description{
  margin: 0 auto;
  max-width: 80%;
}
.description > p{
  font-family: "Bodoni", cursive;
  font-size: 2em;
  font-weight: 1000;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.contact-info{
  margin-bottom: 3rem;

}
.contact-info > p{
  font-family: 'Roboto Mono', monospace;
  font-size: 1.8em;
}
.contact-info > p > span{
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8em;
}

</style>
