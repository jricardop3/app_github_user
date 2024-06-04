<script>
export default {
  data() {
    return {
      login: 'johndoe',
      name: 'John Doe',
      bio: '...',
      company: 'Acme Inc.',
      avatar_url: 'https://unsplash.it/256',
      searchInput: ''
    }
  },
  methods: {
    async fetchGithubUser() {
      const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
      const { login, name, bio, company, avatar_url } = await res.json()

      this.login = login
      this.name = name
      this.bio = bio
      this.company = company
      this.avatar_url = avatar_url
    }
  }
}
</script>

<template>
	<h1>Dados públicos Github - Option Api</h1>
  <input type="text" v-model="searchInput">
  <button v-on:click="fetchGithubUser">Carregar Usuário</button>
  <img v-bind:src="avatar_url">
  <strong>@{{ login }}</strong>
  <h2>{{ name }}</h2>
  <h3>{{ company }}</h3>
  <span>{{ bio }}</span>
</template>