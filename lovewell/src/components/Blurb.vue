<template>
<div>
  <div  v-for="blurb in blurbs"  
        :key="blurb.id">
     <BlurbItem v-bind:blurb="blurb" />
  </div>
  </div>
</template>

<script>
import BlurbItem from '@/components/BlurbItem.vue'
export default {
  name: "Blurb",
  components: {
    BlurbItem
  },
  props: [ "blurbs"] 
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  color: #236750;
}
h3 {
  margin: 40px 0 0;
  color: #287492
}
p {
  margin: 40px 0 0;
  color: #343638
}

</style>
