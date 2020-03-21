<template>
  <div class="header">
    <div class="header-background">
      <h1 id="title">The Lovewell Pond Association</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {}
};
</script>

<style scoped>
.header-background {
  background-image: url("../../assets/images/lovewellpondsummer.png");
  background-repeat: repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 72vh;
  display: flex;
  align-items: center;
  margin: 0px;
}
.header {
  background: #287492;
  color: #ffffff;
  text-align: center;
  padding: 10px;
}

.header a {
  color: #ffffff;
  padding-right: 5px;
}

.image {
  width: 100%;
}
#title {
  top: 219px;
  left: 320px;
  /* width: 1160px; */
  height: 50px;
  text-align: center;
  font: Bold 60px/69px Ubuntu;
  font-family: 'Ubuntu', 'Source Sans Pro', sans-serif;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
}
</style>
