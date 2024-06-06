<script setup>
import { ref } from 'vue';
    const emit = defineEmits(['formSubmit'])
    const searchInput = ref('')
    function handleSubmit(ev){
        ev.preventDefault()
        emit('formSubmit', searchInput.value)
    }
</script>

<template>
    <form @submit="handleSubmit">
    <input type="text" v-model.lazy="searchInput">
    <button >Carregar Usuário</button>
  </form>
</template>

<style scoped>

</style>