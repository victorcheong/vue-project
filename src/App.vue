<template>
  <div id="app">
   <!-- <proj-mates></proj-mates>  -->
    <signup></signup>
  </div>
</template>

<script>
// import ProjMates from './components/ProjMates.vue'
import Signup from './components/Signup.vue'

export default {
  name: 'App',
  components: {
    'signup' : Signup
  }
}
</script>

<style scoped>
</style>