<template>
  <div id="app">
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <router-link :to="{ name: 'about' }"> About </router-link>
    <router-link :to="{ name: 'user', params: { username:'mohsen'} }"> User </router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
