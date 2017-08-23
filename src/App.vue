<template>
  <div id="app">
    <router-view></router-view>
    <h2>Links de Prueba</h2>
    <ul>
      <li>
        <router-link :to="{name: 'Hello'}">Hello</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Perrito'}">Perrito</router-link>
      </li>
      <li>
          <router-link to="/test/mundo">Test</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
