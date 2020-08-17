<template>
    <div class="box">
        <h2 class="subtitle">{{ drink.strDrink }}</h2><br>
        <img id="thumbdrink" v-bind:src="drink.strDrinkThumb" />
    </div>
</template>

<script>
export default {
  props: ["drink"]
};
</script>

<style scoped>
#thumbdrink {
  height: 100px !important;
}
.box{
  margin: 0.5em;
}

</style>