<template>
  <div class="home">
    <!-- <Header /> -->
    <br />
    <div class="container blurb-container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="row">
            <h2 class="l-heading">The Lovewell Pond Association</h2>
            <div v-for="association in Associations" :key="association.id">
              <table>
                <th class="l-sub-heading">{{ association.sub_heading }}</th>
                <tr class="l-text">
                  {{
                    association.detail
                  }}
                </tr>
                <tr v-if="association.link">
                  <a
                    class="btn btn-success"
                    :href="association.link"
                    role="button"
                    target="_blank"
                    >{{ association.linkLabel }}</a
                  >
                </tr>
                <tr class="l-text"></tr>
              </table>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <h2 class="l-heading">Join our Facebook Group</h2>
            <p>
              To see pics of the lake and neighborhood updates, as well as Lost
              and Found Items:
              <a
                href="https://www.facebook.com/groups/553797096434971"
                target="_blank"
                >Lovewell Pond Facebook Link</a
              >
            </p>
          </div>
          <br />
          <br />
          <div class="row">
            <h2 class="l-heading">Upcoming Events</h2>
            <div v-for="event in Events" :key="event.id">
              <table>
                <th class="l-sub-heading">{{ event.sub_heading }}</th>
                <tr v-if="event.cancel" class="l-sub-heading red-highlight">
                  {{
                    event.cancel
                  }}
                </tr>
                <tr class="l-text">
                  {{
                    event.detail
                  }}
                </tr>
                <tr v-if="event.link">
                  <a :href="event.link" target="_blank">{{ event.link }}</a>
                </tr>
                <tr class="l-text"></tr>
              </table>
            </div>
          </div>
          <br />
          <div class="row">
            <div v-if="News[0]">
              <h2 class="l-heading">News &amp; Announcements</h2>
            </div>
            <div v-for="item in News" :key="item.id">
              <table>
                <th class="l-sub-heading">{{ item.sub_heading }}</th>
                <tr class="l-text">
                  {{
                    item.detail
                  }}
                </tr>
                <tr v-if="item.link">
                  <a :href="item.link" target="_blank">{{ item.linkLabel }}</a>
                </tr>
                <tr class="l-text"></tr>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      Associations: [
        {
          id: 1,
          title: "The Lovewell Pond Association",
          sub_heading: null,
          detail:
            "The Lovewell Pond Association is a group dedicated to the care, enhancement, and preservation of Lovewell Pond located in Fryeburg, Maine. The LPA is interested in all aspects of lake preservation including: Lake Uses, Wildlife, Water Quality, Public Access, Shoreline, Maine Regulations & Other Associations.",
          link: null,
          linkLabel: null,
        },
        {
          id: 2,
          title: "The Lovewell Pond Association",
          sub_heading: "Please Help us Protect our Loons.",
          detail:
            "Did you know that Common Loons are protected by both state and federal laws prohibiting harassment of wildlife?  Last year, our loons were frightened off their nests by boats getting too close, boat wakes, and once, by young campers shaking the floating nests!  Please consider sharing this Loon Poster from the Maine Audubon Society with your friends, family, and renters, to help protect our loons.",
          link: "https://www.maine.gov/ifw/docs/livingwithloons.pdf?fbclid=IwAR1EUtdaFbGhmYBcdFhrrmghQYvEHhoV-TuIvRND6xNlb8KaZyROeMbALxc",
          linkLabel: "Living With Loons Brochure",
        },
        {
          id: 3,
          title: "The Lovewell Pond Association",
          sub_heading: "Lake Survey",
          detail: "Please take our 5 question survey on Lovewell Pond",
          link: "https://www.surveymonkey.com/r/WK6KSPW",
          linkLabel: "Lake Survey",
        },
        {
          id: 4,
          title: "The Lovewell Pond Association",
          sub_heading: "Annual Dues Form",
          detail:
            "Your membership dues and your donations are invaluable in supporting the many programs that keep the lake healthy and clean. The Invasive Plant Program is paramount in helping to fund the Courtesy Boat Inspections at the Boat Ramp. One of our inspectors found a harmful invasive plant on a boat trailer last year...also an invasive snail...Had the invasive plant launched into the lake, it could have been devastating for our lake environment. Your dues and donations are critical in continuing to fund the Courtesy Boat Inspections and other key lake initiatives..ie. plant surveys, loon and wildlife programs. The Property Owners of Lovewell Pond (aka The Lovewell Pond Association) is a registered 501©(3) tax exempt non-profit organization. ",
          link: "./Annual_Lovewell_Pond_Dues_Form.pdf",
          linkLabel: "Annual Lovewell Pond Dues Form",
        },
      ],
      Events: [
        {
          id: 1,
          title: "Upcoming Events",
          sub_heading: "2025 Annual Meeting, Saturday, June 28th, 9 AM",
          detail:
            "The Lovewell Pond Association (a.k.a. Property Owners of Lovewell Pond) will hold its Annual meeting at the Rapputak Community Lodge at 9:00 AM.  From 9 to 10, we will have coffee and donuts and a chance to socialize with your neighbors here on Lovewell.  The business portion of the meeting will begin at 10 AM and go until noon.  Please bring your good ideas to share - we look forward to seeing everyone!",
        },
        {
          id: 2,
          title: "Upcoming Events",
          sub_heading:
            "Fryeburg Pickleball Pick up Games, Tues/Thurs/Sat/Sun, 9 - 11 AM",
          detail:
            "Pick Up Pickleball Games are played at the Fryeburg Recreation Center, the cost is $3.00 per day.  You must have a change of sneakers to enter the gym. The rec center is located at 59 Recreation Drive, Fryeburg.  Sign up at the rec center website:",
          link: "https://fryeburgrec.com/adult-programs/",
        },
        {
          id: 3,
          title: "Upcoming Events",
          sub_heading: "Check Our Facebook Group for Other Upcoming Events!",
          cancel: "",
          detail:
            "Check out our Facebook page for details on the Annual Loon Count, Saco River Brewery Meetup, Annual Boat Parade, Saco River Kayak Trip, Annual Pot Luck Dinner, and other planned events.  Feel free to make suggestions on events you would like to see happening!",
          link: "https://www.facebook.com/groups/553797096434971/events",
        },
      ],
      News: [
        // {
        //   id: 31,
        //   title: "News and Announcements",
        //   sub_heading: "Fryeburg Water Quality Report",
        //   detail:
        //     "A report on the water quality of Lovewell Lake and other bodies of water in Fryeburg: ",
        //   link: "./Fryeburg_2022_Water_Quality_Report.pdf",
        //   linkLabel: "2022 Fryeburg Water Quality Report",
        // },
      ],
    };
  },
};
</script>
<style scoped></style>
