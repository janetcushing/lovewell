<template>
  <div class="gallery">
    <Header/>
    <h1>This is the photo gallery page</h1>
    
  <div class="card" style="width: 18rem;">
  <img src="../assets/images/loon2.jpg" class="card-img-top" alt="a loon">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

</div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  name: 'Gallery',
  components: {
    Header,
    Footer
  }
}
</script>


