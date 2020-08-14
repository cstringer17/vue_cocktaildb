<template>
  <div id="app">
    <Banner Title="Welcome to Cocktail Hub"/>
    <SingleDrink />
    <Footer />
  </div>
</template>
<script>


import Banner from "./components/Banner.vue"
import SingleDrink from "./components/SingleDrink"
import Footer from "./components/Footer"
import Vue from 'vue';

Vue.prototype.$log = console.log;

export default {
  name: "app",
  components: {
    Banner,
    SingleDrink,
    Footer
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
html{
background-color: #FAC8CD;
}
</style>