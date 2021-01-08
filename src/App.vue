<template>
  <div id="app">
    <Banner title="Welcome to Cocktail Hub" />
    <div id="left">
      <router-link to="/"></router-link>
      
    </div>

    <div class="columns">
      <div class="column">
        <router-view />
      </div>
      <div class="column">
        <SingleDrink></SingleDrink>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
//root compentents
import Banner from "./components/rootComponents/Banner.vue";
import Footer from "./components/rootComponents/Footer";
import SingleDrink from "./components/SingleDrink";

import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.prototype.$log = console.log;

Vue.use(Buefy);

export default {
  name: "app",
  components: {
    Banner,
    Footer,
    SingleDrink,
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
}
html {
  background-color: #fac8cd;
}
</style>
