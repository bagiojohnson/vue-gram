<template>
  <div id="app">
    <NavBar></NavBar>
  <!--  <div class="ui large header">Vuegram</div>
  <p></p>
    <img src="./assets/logo.png" height="150" width="150">-->
    <router-view style="margin-top:100px;"/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
