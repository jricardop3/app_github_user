<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>
  <nav>
    <RouterLink to="/" class="nav-item">Home</RouterLink>
    <RouterLink to="/info" class="nav-item">Informações</RouterLink>
  </nav>
  <hr>
  <RouterView/>
</template>

<style>
nav {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.nav-item {
  margin: 0.5rem;
  text-decoration: none;
  
}

</style>