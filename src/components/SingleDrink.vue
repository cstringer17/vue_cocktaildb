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
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                  <p class="title">Ingredients</p>
                  <p class="subtitle">Top tile</p>
                </article>
                <article class="tile is-child notification is-warning">
                  <p class="title">...tiles</p>
                  <p class="subtitle">Bottom tile</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification">
                  <p class="title">{{drink.strDrink}}</p>
                  <p class="subtitle">{{drink.strCategory}}</p>
                  <figure class="image is-4by3">
                    <img id="bigdrink" v-bind:src="drink.strDrinkThumb" />
                  </figure>
                  <button v-on:click="NewDrink" class="button">Try another drink</button>
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification">
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
      document.getElementById("left").style.width = "70%";
      document.getElementById("right").style.width = "30%";
      document.getElementById("right").style.marginLeft = "70%";
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => (this.drinks = response.data.drinks));
      console.log(event);
      this.seen = true;
    },
    notYet: function (event) {
      document.getElementById("left").style.width = "40%";
      document.getElementById("right").style.width = "60%";
      document.getElementById("right").style.marginLeft = "40%";
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
#thumbdrink {
  height: 200px !important;
}
#bigdrink {
  height: 400px !important;
}
</style>