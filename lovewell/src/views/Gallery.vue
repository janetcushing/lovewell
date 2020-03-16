<template>
  <div class="gallery">
    <Header/>
    <h1>This is the photo gallery page</h1>
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


