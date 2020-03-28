<template>
<div>
   <!-- <b-container class="hdr-container"> -->
      <b-row>
        <b-col md="12">
    <div>
        <h1 id="title">The Lovewell Pond Association</h1>
    </div>
    </b-col>
      </b-row>
   <!-- </b-container> -->
</div>
</template>

<script>
export default {
  name: "Header",
  components: {}
};
</script>

<style scoped>
/* .hdr-container {
  text-align: center;
  vertical-align: middle;
  width: 100%;
} */
.header-background {

 /* border: 2px solid black;
  padding: 25px;
  background: url("../../assets/images/lovewellpondsummer.png");
  background-repeat: no-repeat;
  background-size: auto; */

  background-image: url("../../assets/images/lovewellpondsummer.png"); 
  background-color: #555555;
  background-repeat: no-repeat; 
  background-size: cover;
  /* background-attachment: fixed; */
  background-size: auto;
  height: 32vh;
  /* display: flex; */
  /* text-align: center; */
  /* align-items: center; */
  /* vertical-align: middle; */
  
  
  
  margin: 0px;
}

#title {
  background: url("../../assets/images/lovewellpondsummer.png");
  background-size: cover;
  background-color: #555555;
  height: 32vh;
  /* top: 219px; */
  /* height: 50px; */
  text-align: center;
  vertical-align: middle;
  font: Bold 60px/69px Ubuntu;
  font-family: 'Ubuntu', 'Source Sans Pro', sans-serif;
  /* margin: 20px 50px 20px 20px; */
  padding: 20px 20px 20px 20px;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
}
</style>
