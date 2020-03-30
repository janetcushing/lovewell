<template>
  <div class="resources">
    <Header/>
    <h1>This is the Resources page</h1>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  name: 'Resources',
  components: {
    Header,
    Footer
  }
}
</script>


