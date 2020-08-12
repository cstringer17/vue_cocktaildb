<template>
  <div id="app">
    <Banner />
    <fullcalendar />
  </div>
</template>
<script>
import Banner from "./components/Banner.vue"
import Fullcalendar from "./components/Fullcalendar.vue"
export default {
  name: "app",
  components: {
    Banner,
    Fullcalendar,
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
</style>