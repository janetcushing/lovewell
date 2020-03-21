<template>
    <div>
        <h3>{{blurbs.sub_heading}}</h3>
        <p>{{blurb.detail}}</p>   
    </div>
</template>
<script>
export default {
    name: "BlurbItem",
    props: ["blurbs"] 
}
</script>

<style scoped>

h3 {

left: 170px;
/* width: 1420px; */
height: 62px;
text-align: left;
letter-spacing: 0;
color: #343638;
opacity: 1;
}
p {
 
left: 0px;
/* width: 324px; */
height: 24px;
text-align: left;
font: Regular 18px/30px Open Sans;
letter-spacing: 0;
color: #343638;
} 

</style>
