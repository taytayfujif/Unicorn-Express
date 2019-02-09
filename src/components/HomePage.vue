<template>
  <div class="page">
    <div id="Home-Filler">
      <h1>{{slimJim}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {

  },

  data() {
    return {
      slimJim: "Header"
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  display: table;
  width: 80%;
  height: 200%;
  border: 5px solid rgb(161, 170, 247);;
  margin: 2rem auto 0;
  border-radius: 1rem;
  text-align: center;
  background: rgb(195, 194, 255);
}
</style>