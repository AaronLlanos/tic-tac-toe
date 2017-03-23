<template>
  <div id="app">
    <img src="./assets/logo.png">
    <gameboard></gameboard>
  </div>
</template>

<script>
import Gameboard from './components/Gameboard'

export default {
  name: 'app',
  components: {
    Gameboard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
