<script setup>
import {reactive, ref, computed} from 'vue';
import UserInfo from './UserInfo.vue';
import Repository from './Repository.vue';
import Formm from './Formm.vue';

const username = ref('')

const state = reactive({
    login: '',
      name: '',
      bio: '',
      company: '',
      avatar_url: '',
      repos: [],
      searchInput: ''
})

async function fetchGithubUser(searchInput) {
  
      const res = await fetch(`https://api.github.com/users/${searchInput}`)
      const { login, name, bio, company, avatar_url } = await res.json()

      state.login = login
      state.name = name
      state.bio = bio
      state.company = company
      state.avatar_url = avatar_url

      fetchUserRepositories(login)
}
async function fetchUserRepositories(username){
      const res = await fetch(`https://api.github.com/users/${username}/repos`)
      const repos = await res.json()
      state.repos = repos
}
 const reposCountMessage = computed(() => {
  return state.repos.length > 0 
      ? `${state.name} possui ${state.repos.length} repositórios publicos` 
      : `${state.name} Digite um nome de usúario valido no formulário acima`
 })

</script>

<template v-if="state !== ''">
	<h1> <slot></slot></h1>
      <h2>github.com/{{ username }}</h2>
      <Formm @formSubmit="fetchGithubUser" v-model="username" />
  <UserInfo :login="state.login" :name="state.name" :bio="state.bio" :company="state.company" :avatar_url="state.avatar_url"  />
  <h2>{{ reposCountMessage }}  </h2>
  <section v-if="state.repos.length > 0">
      <Repository v-for="repo of state.repos" :full_name="repo.full_name" :description="repo.description" :html_url="repo.html_url" />
  </section>
   <slot name="footer">
      <footer>
      <hr>
      <h5> Desenvoldido por: Jose Ricardo - <a href="http://crescer.tech" target="_blank" rel="noopener noreferrer">Crescer.Tech</a></h5>
      </footer>
   </slot>
</template>

<style scoped >

footer{
      position: sticky;
      top: 100vh; 
}

h5{
      display: inline-block;
      margin: 1rem;
}
a{
      text-decoration: none;
}
</style>

