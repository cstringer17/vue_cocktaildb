<template>
  <div id="app">
    <Users />
    <Banner />
  </div>
</template>
<script>
import Users from "./components/Users.vue";
import Banner from "./components/Banner.vue"
export default {
  name: "app",
  components: {
    Users,
    Banner,
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