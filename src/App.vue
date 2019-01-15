<template>
  <div id="app">
    <Register msg="Register to Book"/>
  </div>
</template>

<script>
import Register from './components/Register.vue'

export default {
  name: 'app',
  components: {
    Register
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
