<template>
  <div class="contact-center">
    <div class="name">
      <h1>Jurij Charčiuk</h1>
    </div>
    <div class="description">
      <p>
        {{ $t('description') }}
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
  background: url("assets/pictures/bg/center-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  width: 100%;

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
  font-size: 2.8em;
  font-family: 'Yellowtail', cursive;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.description{
  margin: 0 auto;
  max-width: 80%;
}
.description > p{
  font-family: 'High Tower Text', cursive;
  font-size: 2em;
  font-weight: 1000;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.contact-info > p{
  font-size: 2.2em;
  font-weight: 700;
}
.contact-info > p > span{
  font-size: 0.9em;
  font-weight: 700;
}

</style>
