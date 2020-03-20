<template>
  <div id="app">
   <!-- <proj-mates></proj-mates>  
    <login></login>  -->
    <signup></signup>
  </div>
</template>

<script>
// import ProjMates from './components/ProjMates.vue'
//import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

export default {
  name: 'App',
  components: {
    //'login' : Login,
    'signup': Signup
  }
}
</script>

<style scoped>

</style>
