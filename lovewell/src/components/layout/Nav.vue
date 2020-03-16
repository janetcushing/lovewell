<template>
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Nav'
}
</script>

<style scoped>
#nav {
  background: #287492;
  color: #ffffff;
  text-align: center;
  padding: 10px;
}


</style>
