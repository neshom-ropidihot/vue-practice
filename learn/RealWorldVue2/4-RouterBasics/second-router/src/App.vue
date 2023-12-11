<template>
  <div id="app">
    <router-link :to="{ name: 'event-list'}"> list</router-link>
    <router-link :to="{ name: 'event-show'}"> show </router-link>
    <router-link :to="{ name: 'event-create'}"> create</router-link>
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
