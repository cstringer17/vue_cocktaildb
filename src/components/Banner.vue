<template>
<section class="hero is-dark">
  <div class="hero-body">
  <h3 class="title">{{ Title }}</h3>
  </div>
</section>
</template>
<script>
  export default {
    name: 'Banner',
    props: ['Title']
  }
</script>
<style>
</style>