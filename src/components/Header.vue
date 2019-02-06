<template>
    <ul class="header"> <!-- Will Soon add this as a seperate component -->
        <li>{{categories[0]}}</li>
        <li>{{categories[1]}}</li>

        <li id="logo">
            <img src="../assets/images/logo/lollipop.gif" alt="OOGA BOOGA CHA">
            <p>The Unicorn Express</p>
        </li>

        <li>{{categories[2]}}</li>
        <li>{{categories[3]}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Header',
  props: {

  },

  data() {
    return {
        categories: ["Why Save","Save Now,Less Tomorrow","Home OwnerHhip","Outcomes"]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* header stuff */
.header {
  display: flex;
  margin: 0;
  height: 35%;
  justify-content: center;
  list-style: none;
  padding: 1rem 0;
  color: rgb(58, 54, 54);
}

li:not(#logo) {
  margin: auto auto 0 auto;
  font-size: 1.25rem;
  padding-bottom: 2px;
  border-bottom: 1.5px solid #82ff77;
}

/* header end */

/* logo start */
#logo {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
}
#logo > img {
  height: 82%;
  width: 41%;
  margin: 0 auto;
}
#logo > p {
  font-size: 2rem;
  margin: 0;
}
/* logo end */

</style>