<template>
  <div id="app">
          <div id="nav">
            <router-link class="spacing" to="/">Home</router-link>|
            <router-link class="spacing" to="/about">About Lovewell Pond</router-link>
            <router-link class="spacing" to="/association">The Association</router-link>
            <router-link class="spacing" to="/resources">Resources</router-link>
            <router-link class="spacing" to="/gallery">Photo Gallery</router-link>
          </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
