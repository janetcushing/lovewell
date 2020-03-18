<template>
    <div>
        <h1>{{blurb.title}}</h1>
        <h3>{{blurb.sub_heading}}</h3>
        <p>{{blurb.detail}}</p>   
    </div>
</template>
<script>
export default {
    name: "BlurbItem",
    props: ["blurb"] 
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
