<template>
  <div class="pictures">
    <div class="fire">
      <img src="~/assets/pictures/bg/fire.svg">
    </div>
    <div class="yessir">
      <img src="~/assets/pictures/bg/yessir.svg">
    </div>
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
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pictures{
  position: relative;
  width: 100%;
}
.mobile-contact{
  background: url("assets/pictures/bg/center-bg-shorter.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  width: 100%;
  height: 30em;

  border-top: 7px solid #2F2727;
  border-bottom: 7px solid #2F2727;
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
  max-width: 50%;
}
.description > p{
  font-family: 'High Tower Text', cursive;
  font-size: 1.5em;
  font-weight: 1000;
  color: #241B1B;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.contact-info > p{
  font-size: 1.1em;
  font-weight: 700;
}
.contact-info > p > span{
  font-size: 0.9em;
  font-weight: 700;
}
.fire{
  transform: rotateY(180deg);
  margin-top: 10%;
  height: 100%;
  width: 100%;
  position: absolute;
}
.fire > img{
  object-fit: cover;
  object-position: right;
  width: 38%;
  height: 100%;
}
.yessir{
  width: 20em;
}
.yessir > img{
  object-fit: cover;
  object-position: right;
  transform: rotateY(180deg);
  width: 100%;
  height: 20em;
  position: absolute;
  bottom: 6px;
}
</style>
