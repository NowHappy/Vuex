<template>
  <div id="app">
    <HelloWorld/>
    <HelloWorldBro/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorldBro from './components/HelloWorldBro.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, HelloWorldBro
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
