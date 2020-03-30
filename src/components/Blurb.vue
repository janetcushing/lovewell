<template>
<div>
  <div  v-for="assoc in Associations"  
        :key="assoc.id">
    <div> 
     <h3>{{assoc.sub_heading}}</h3>
     <p>{{assoc.detail}}</p>
  </div>
  </div>
</template>

<script>
// import BlurbItem from '@/components/BlurbItem.vue'
export default {
  name: "Blurb",
  components: {
    // BlurbItem
  },
  props: [ "Associations"] 
}
</script>

<style scoped>

h3 {
  left: 170px;
/* width: 770px; */
height: 38px;
text-align: left;
font: Bold 20px/20px Open Sans;
font-family: 'Open Sans', sans-serif;
letter-spacing: 0;
color: #287492;
opacity: 1;
} 
p {
 top: 30px;
left: 0px;
/* width: 324px; */
height: 24px;
text-align: left;
font: Regular 18px/30px 'Open Sans';
font-family: 'Open Sans', sans-serif;
letter-spacing: 0;
color: #343638;
}

</style>
