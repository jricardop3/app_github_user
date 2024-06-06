<script setup>
defineProps(['login', 'name', 'bio', 'company', 'avatar_url' ])
</script>

<template>
  <img v-bind:src="avatar_url">
  <strong>@{{ login }}</strong>
  <h2>{{ name }}</h2>
  <h3>{{ company }}</h3>
  <span>{{ bio }}</span>
  
</template>

<style scoped>

</style>