<template >
    <main>
        <h1>Informações do App</h1>
    <table border="2" width="300px" align="center" >
        <thead>
            <th>Informação</th>
            <th>Conteudo</th>
        </thead>
        <tbody>
            <tr>
                <td>Data </td>
                <td>06/06/2024</td>
            </tr>
            <tr>
                <td>Versão</td>
                <td>V2</td>
            </tr>
            <tr>
                <td>Repositorio</td>
                <td> <a href="https://github.com/jricardop3/app_github_user" target="_blank" rel="noopener noreferrer">Github </a> </td>
            </tr>
        </tbody>
    </table>
    </main>
    <footer>
      <hr>
      <h5> Desenvoldido por: Jose Ricardo - <a href="http://crescer.tech" target="_blank" rel="noopener noreferrer">Crescer.Tech</a></h5>
      </footer>
</template >


<style scoped>
main {
    text-align: center;
}
table{
    margin: auto;
    text-align: start;
}
a{
    text-decoration: none
}
footer{
      position: sticky;
      top: 100vh; 
}
h5{
      display: inline-block;
      margin: 1rem;
}
</style>