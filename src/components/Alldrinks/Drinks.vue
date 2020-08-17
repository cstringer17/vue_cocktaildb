<template>
  <div class="container">
    <br />
    <input v-model="input" class="input" id="search" />
    <br />
    <br />
    <br />
    <div class="flex-container">
      <div v-for="drink in allDrinks" v-bind:key="drink.id">
        <drink v-if="drink.visible" v-bind:drink="drink"></drink>
      </div>
    </div>
  </div>
</template>

<script>
import drink from "./Drink.vue";

export default {
  name: "Drinks",
  props: ["allDrinks"],
  components: {
    drink
  },
  data() {
    return {
      input: ""
    };
  },
  watch: {
    input: function() {
      this.allDrinks.forEach(drink => {
        if (drink.strDrink.startsWith(this.input)) {
          drink.visible = true;
        } else {
          drink.visible = false;
        }
        console.log(drink.visible);
      });
    }
  }
};
</script>

<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#search{
  width:50%;
}
</style>