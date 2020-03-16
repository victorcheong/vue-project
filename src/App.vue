<template>
  <div id="app">
    <proj-mates></proj-mates>
    <login></login>
  </div>
</template>

<script>
import ProjMates from './components/ProjMates.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    'proj-mates' : ProjMates,
    'login' : Login
  }
}
</script>

<style scoped>

</style>
