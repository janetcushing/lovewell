<template>
  <!-- <div> -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <h6 id="title">The Lovewell Pond Association</h6>
        </div>
      </div>
    </div>
    <!-- <div class="row"> -->
    <!-- <div class="col-md-12"> -->
    <!-- <Navbar /> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
  <!-- </div> -->
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Header",
  components: {
    // Navbar,
  },
};
</script>

<style scoped>
#title {
  background: url("@/assets/images/lovewellpondsummer.png");
  background-size: cover;
  background-color: #555555;
  height: 32vh;
  text-align: center;
  vertical-align: middle;
  font: Bold 30px/49px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 1px;
}
/* MEDIA TAGS */
@media screen and (max-width: 980px) {
  #title {
    font: Bold 40px/49px Ubuntu;
  }
}

@media screen and (max-width: 768px) {
  #title {
    font: Bold 35px/44 Ubuntu;
  }
}

@media screen and (max-width: 640px) {
  #title {
    font: Bold 30px/39px Ubuntu;
  }
}
</style>
