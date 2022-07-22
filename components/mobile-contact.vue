<template>
  <div class="mobile-contact">
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
.mobile-contact{
  /* background: url("assets/pictures/bg/tape-vertical.png"), url("assets/pictures/bg/tape-vertical.png"), url("assets/pictures/bg/center-bg-shorter.png"); */
  background: url("assets/pictures/bg/tape-left.png") left no-repeat, url("assets/pictures/bg/tape-right.png") right no-repeat, url("assets/pictures/bg/yessir-mobile.png") right bottom no-repeat, url("assets/pictures/bg/fire-mobile.png") right bottom no-repeat, url("assets/pictures/bg/center-bg-shorter.png") top no-repeat;
  background-size: 10%, 10%, 60%, 50%, auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  width: 100%;
  height: 30em;

  border-top: 7px solid #2F2727;
  border-bottom: 7px solid #2F2727;
}
.name, .description, .contact-info{
  margin-left: 10%;
}
.name{
  font-size: 1.3em;
  font-weight: 800;
  font-family: 'Yellowtail', cursive;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 3em;
}
.description{
  max-width: 40%;
}
.description > p{
  font-family: 'High Tower Text', cursive;
  font-size: 1.5em;
  font-weight: 1000;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.contact-info{
  width: 40%;
}
.contact-info > p{
  font-size: 1.1em;
  font-weight: 700;
}
.contact-info > p > span{
  font-size: 0.9em;
  font-weight: 700;
}
</style>
