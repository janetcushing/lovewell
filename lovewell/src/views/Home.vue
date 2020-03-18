<template>
  <div class="home">
    <Header />
    <Blurb v-bind:blurbs="blurbs" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layout/Header.vue'
import Blurb from '@/components/Blurb.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Blurb,
    Footer
  },
  data() {
    return {
      blurbs:[
    {
      id: 1,
      title: 'The Lovewell Pond Association' ,
      sub_heading: null,
      detail: 'The Lovewell Pond Association is a group dedicated to the care, enhancement, and preservation of Lovewell Pond located in Fryeburg, Maine. The LPA is interested in all aspects of lake preservation including: Lake Uses, Wildlife, Water Quality, Public Access, Shoreline, Maine Regulations & Other Associations'
    },
     {
      id: 2,
      title: 'Upcoming Events' ,
      sub_heading: '2020 Annual meeting, Saturday, July 10',
      detail: 'The Lovewell Pond Association (a.k.a. Property Owners of Lovewell Pond) will hold its annual meeting on Saturday, July 9th from 10:00 am until noon. Note new location! This year’s meeting has moved to the Beano Barn at the Fryeburg Fairgrounds, located near the main gate (map). Please bring your good ideas and Lake info to share - we look forward to seeing everyone!'
    },
     {
       id: 3,
      title: 'NEWS & ANNOUNCEMENTS' ,
      sub_heading: 'Lakes Environmental Association releases Spring 2009 Milfoil Update',
      detail: 'For years, the L.E.A. has been leading the fight to protect the lakes of western Maine from invasive species, particularly Eurasian milfoil. Read the latest updates in their current newsletter (PDF, 290 Kb), or in the Milfoil section of their website.'
    }
  ]
}
}
}
</script>
