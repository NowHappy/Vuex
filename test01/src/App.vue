<template>
  <div id="app">
    <h1>Parent</h1>
    <bro1/>
    <bro2/>
    <bro3/>
    <bro4/>
    <bro5/>
    <bro6/>
    <bro7/>
  </div>
</template>

<script>
import Bro1 from './components/Bro1.vue'
import Bro2 from './components/Bro2.vue'
import Bro3 from './components/Bro3.vue'
import Bro4 from './components/Bro4.vue'
import Bro5 from './components/Bro5.vue'
import Bro6 from './components/Bro6.vue'
import Bro7 from './components/Bro7.vue'

export default {
  name: 'app',
  components: {
    Bro1, Bro2, Bro3, Bro4, Bro5, Bro6, Bro7
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
