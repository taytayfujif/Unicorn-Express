<template>
  <div id="root">
    <express-header> </express-header>
    <home-page> </home-page>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import expressHeader from './components/Header.vue';
export default {
  name: 'root', //use kobab case for component names for emmet-abbreviation
  components: {
    'home-page': HomePage,
    'express-header': expressHeader
  }
}
</script>

<style>
@font-face {
  font-family: woomy;
  src: url('./assets/fonts/Paintball_Beta.otf');
}


html, body, #root {
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: url('./assets/images/background/bunnies.jpg');
  background-size: 360px 360px;
  font-family: woomy;
}
</style>
