<template>
  <div>
    <section v-if="seen" class="columns section is-centered">
      <div class="box">
        <h3 class="subtitle">Have you tried this drink?</h3>
        <div v-for="drink in drinks" v-bind:key="drink.id">
          <h2 class="title">{{ drink.strDrink }}</h2>

          <img id="thumbdrink" v-bind:src="drink.strDrinkThumb" />

          <div class="container buttons has-text-centered">
            <button v-on:click="NewDrink" class="button">Yes</button>
            <button class="button" v-on:click="notYet">Not Yet!</button>
          </div>
        </div>
      </div>
    </section>

    <section v-if="!seen">
      <div v-for="drink in drinks" v-bind:key="drink.id">
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <p class="title">{{drink.strDrink}}</p>
                  <p class="subtitle">{{drink.strCategory}}</p>
                  <figure class="image">
                    <img style="width:200px;" id="bigdrink" v-bind:src="drink.strDrinkThumb" />
                  </figure>
                  <button v-on:click="NewDrink" class="button">Try another drink</button>
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-4">
              <div class="content">
                <p class="title">Instructions</p>

                <div class="content">
                  <p>{{ drink.strInstructions }}</p>
                  <br>
                  <p>{{ drink.strInstructionsDE }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "SingleDrink",
  data() {
    return {
      drinks: null,
      seen: true,
    };
  },
  mounted() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => (this.drinks = response.data.drinks));
  },
  methods: {
    log(message) {
      console.log(message);
    },
    NewDrink: function (event) {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => (this.drinks = response.data.drinks));
      console.log(event);
      this.seen = true;
    },
    notYet: function (event) {
      this.seen = false;
      console.log(event);
      this.drinks.forEach((element) => {
        axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + element.idDrink)
          .then((response) => (this.drinks = response.data.drinks));
      });
    },
  },
};
</script>
<style scoped>

</style>