<template>
  <div class="home">
    <Header />
    <br />
    <b-container class="blurb-container">
      <b-row>
        <b-col class="margins" md="1"></b-col>
        <b-col class="margins" md="10"></b-col>
          <b-row>
          <!-- <b-col md="12"> -->
            <h2 class="assoc">The Lovewell Pond Association</h2>
            <div v-for="association in Associations" :key="association.id">
              <table>
                <th class="table-heading">{{association.sub_heading}}</th>
                <tr class="table-row">{{association.detail}}</tr>
              </table>
            </div>
          <!-- </b-col> -->
        </b-row>
        <br />
        <b-row>
          <!-- <b-col md="12"> -->
            <h2 class="events">Upcoming Events</h2>
            <div v-for="event in Events" :key="event.id">
              <table>
                <th class="table-heading">{{event.sub_heading}}</th>
                <tr class="table-row">{{event.detail}}</tr>
              </table>
            </div>
          <!-- </b-col> -->
        </b-row>
        <br />
        <b-row>
          <!-- <b-col md="12"> -->
            <h2 class="news">News &amp; Announcements</h2>
            <div v-for="item in News" :key="item.id">
              <table>
                <th class="table-heading">{{item.sub_heading}}</th>
                <tr class="table-row">{{item.detail}}</tr>
              </table>
            </div>
          <!-- </b-col> -->
        </b-row>
        <b-col class="margins" md="1"></b-col>
      </b-row>
    </b-container>
    <br />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
// import Blurb from "@/components/Blurb.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    // Blurb,
    Footer
  },
  data() {
    return {
      Associations: [
        {
          id: 1,
          title: "The Lovewell Pond Association",
          sub_heading: null,
          detail:
            "The Lovewell Pond Association is a group dedicated to the care, enhancement, and preservation of Lovewell Pond located in Fryeburg, Maine. The LPA is interested in all aspects of lake preservation including: Lake Uses, Wildlife, Water Quality, Public Access, Shoreline, Maine Regulations & Other Associations"
        }
      ],
      Events: [
        {
          id: 2,
          title: "Upcoming Events",
          sub_heading: "2020 Annual meeting, Saturday, July 10",
          detail:
            "The Lovewell Pond Association (a.k.a. Property Owners of Lovewell Pond) will hold its annual meeting on Saturday, July 9th from 10:00 am until noon. Note new location! This year’s meeting has moved to the Beano Barn at the Fryeburg Fairgrounds, located near the main gate (map). Please bring your good ideas and Lake info to share - we look forward to seeing everyone!"
        },
        {
          id: 3,
          title: "Upcoming Events",
          sub_heading: "Loon Count, Saturday, July 24",
          detail:
            "Meet at the Public Boat Ramp at 7 AM, to count the loons on the lake."
        },
        {
          id: 4,
          title: "Upcoming Events",
          sub_heading: "First Annual Boat Parade, Saturday, August 8th",
          detail:
            "Meet at Raputak Harbor at 10 AM for our first annual Boat Parade!  Boats will line up and make 1 lap around the pond.  Feel Free to decorate your boat for the parade!"
        }
      ],
      News: [
        {
          id: 5,
          title: "News and Announcements",
          sub_heading: "Do NOT Feed the bears",
          detail:
            "Maine Game Wardens warn residents to take in their bird feeders during the spring.  Bird feeders attract bears, and if the bears become used to humans they will have to be killed."
        },
        {
          id: 6,
          title: "News and Announcements",
          sub_heading: "Lovewell Pond is now a Lake instead of a Pond",
          detail:
            "Maine changed Lovewell Pond from a pond to a lake.Game Wardens warn residents to take in their bird feeders during the spring."
        }
      ]
    };
  }
};
</script>
<style scoped>
.margins {
  background: #265730 0% 0% no-repeat padding-box;
}
.blurb-container {
  text-align: left;
}
.assoc {
  left: 170px;
  /* width: 770px; */
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.events {
  left: 170px;
  /* width: 770px; */
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.news {
  left: 170px;
  /* width: 770px; */
  height: 38px;
  font: Bold 32px/20px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}

.table-heading {
  left: 170px;
  /* width: 770px; */
  height: 38px;
  font: Bold 20px/20px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #287492;
  opacity: 1;
}

.table-row {
  top: 30px;
  left: 0px;
  /* width: 324px; */
  height: 24px;
  font: Regular 18px/30px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #343638;
}
</style>

