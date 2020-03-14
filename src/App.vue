<template>
  <div id="app">
    <proj-mates></proj-mates>
  </div>
</template>

<script>
import ProjMates from './components/ProjMates.vue'
export default {
  name: 'App',
  components: {
    'proj-mates' : ProjMates
  }
}
</script>

<style scoped>

</style>
