<script setup>
defineProps(['full_name', 'description', 'html_url'])
</script>

<template>
      <article>
        <h3>{{ full_name }}</h3>
      <p>{{description}}</p>
      <a :href="html_url" target="_blank">Ver no Github</a>
      </article>
</template>

<style scoped>
h3{
    margin-top: 2rem;
}
a{
    padding: 1rem;
    text-decoration: none;
}
a:hover {
  color: blueviolet;
  font-size: 1.02rem;
}
</style>