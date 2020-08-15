<template>
<Drinks v-bind:allDrinks="drinksArray" />
</template>

<script>
import Drinks from "../Alldrinks/Drinks";
import axios from "axios";
var letters = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
export default {
  name: "AllDrinks",
  data() {
      return {
      drinksArray: [],
      };
  },
  components: {
    Drinks,
  },
  mounted() {
      letters.forEach(letter => {
          axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter)
        .then(response => (
            response.data.drinks.forEach(drink => {
                drink.visible = true;
                this.drinksArray.push(drink);
            })
            ));
      });
      
    }
};
</script>

<style>
</style>