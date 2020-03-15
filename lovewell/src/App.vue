<template>
  <div id="app">
     <Header/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <Footer/>
  </div>
</template>

<script>

import Header from './components/layout/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld,
    Footer
  }
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
