<template>

<div class="box">
    <h3>Have you tried this drink?</h3>
  <div class="drinkTitle" v-for="drink in drinks" v-bind:key="drink.id">
      <h3 >{{ drink.strDrink }}</h3>
      </div>
</div>
</template>
<script>

import axios from 'axios'

export default {
  name: 'SingleDrink',
  data() {
    return {
      drinks: null,
    }
  },
  mounted () {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => (this.drinks = response.data.drinks))
  },
  methods:{
      log(message){
          console.log(message);
      }
  }
}

</script>
<style scoped>
.box{
    background-color: #D7BCC8;
    width: 30%;
    margin: auto;
    border-radius: 15px;
    
}
.h3{
    margin-top: 10%;
}
</style>