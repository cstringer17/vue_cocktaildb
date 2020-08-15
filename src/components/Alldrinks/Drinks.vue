<template>
  <div class="container">
    <br>
    <input v-model="input" class="input" />
    <br>
    <br>
    <br>
    <div v-for="drink in allDrinks" v-bind:key="drink.id">
      <div v-if="drink.visible" class="is-ancestor">
        <drink v-bind:drink="drink" class="tile"></drink>
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
      input: "",
    }
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
</style>