<template>
  <div id="app">
    <Header />
    <div>
          <!-- <div id="nav"> -->
            <!-- <router-link class="spacing" to="/">Home</router-link>|
            <router-link class="spacing" to="/about">About Lovewell Pond</router-link>
            <router-link class="spacing" to="/association">The Association</router-link>
            <router-link class="spacing" to="/resources">Resources</router-link>
            <router-link class="spacing" to="/gallery">Photo Gallery</router-link> -->
          </div>
     <router-view /> 
      <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  Header,
  Footer
};
</script>

<style>
body {
  background-color: #f6f8f9;
}
#app {
  font-family: "Open Sans", sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.spacing {
  margin-right: 10px;
}

</style>
