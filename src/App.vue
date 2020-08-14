<template>
  <div id="app">
    <Banner title="Welcome to Cocktail Hub" />
    <div class="columns">
      <SingleDrink class="column"></SingleDrink>
      
      
    </div>

    <Footer />
  </div>
</template>
<script>
import Banner from "./components/Banner.vue";
import SingleDrink from "./components/SingleDrink";
import Footer from "./components/Footer";
import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.prototype.$log = console.log;

Vue.use(Buefy);

export default {
  name: "app",
  components: {
    Banner,
    SingleDrink,
    Footer,
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background-color: #fac8cd;
}
</style>