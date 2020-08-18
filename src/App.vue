<template>
  <div id="app">
    <Banner Title="Welcome to Cocktail Hub" />
    <router-link to="/">Home</router-link>
    <router-view/>

    <Footer />
  </div>
</template>
<script>
//root compentents
import Banner from "./components/rootComponents/Banner.vue";
import Footer from "./components/rootComponents/Footer";

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