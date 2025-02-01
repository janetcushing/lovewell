<template>
  <div class="home">
    <br />
    <br />
    <div class="container blurb-container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="row">
            <h2 class="l-heading">Association Officers</h2>
          </div>
          <div class="row">
            <table>
              <col width="175" />
              <tr v-for="person in officers" :key="person.id">
                <td class="l-small-sub-heading">
                  {{ person.title }}
                </td>
                <td class="l-small-text">{{ person.name }}</td>
              </tr>
            </table>
          </div>
          <br />
          <div class="row">
            <h3 class="splash">
              We currently have open positions on our board. Please
              <a href="mailto:lovewellpondassoc@gmail.com" target="_blank"
                >contact us</a
              >
              if you would like to volunteer!
            </h3>
          </div>
          <br />
          <div class="row">
            <h6>
              <strong
                >A Special <span class="splash">THANK YOU</span> to all of our
                board, past and present !
              </strong>
            </h6>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Association",
  components: {},
  data() {
    return {
      officers: [
        {
          id: 1,
          title: "President:",
          name: "Dori Stern",
        },
        {
          id: 2,
          title: "Vice Presidents:",
          name: "Peter Wilkens",
        },
        {
          id: 2,
          title: "",
          name: "Colleen Wilkens",
        },
        {
          id: 3,
          title: "Treasurer:",
          name: "Paul Fortin",
        },
        {
          id: 4,
          title: "Secretary:",
          name: "Barb Riley",
        },
        {
          id: 5,
          title: "Members at Large:",
          name: "Kathy Litch",
        },
        {
          id: 5,
          title: "",
          name: "Mike Cherry",
        },
        {
          id: 6,
          title: "Social Events Committee:",
          name: "Karen DelGreco",
        },
        {
          id: 6,
          title: "",
          name: "Ellen Chapman",
        },
        {
          id: 6,
          title: "",
          name: "BethAnn Cantin",
        },
        {
          id: 7,
          title: "Social Media Specialist:",
          name: "Karen DelGreco",
        },
        {
          id: 9,
          title: "Webmaster of this site:",
          name: "Janet Cushing",
        },
      ],
      // minutes: [
      //   {
      //     year: 2019,
      //     path: "2019LovewellPondAnnualMeetingMinutes.pdf",
      //   },
      //   {
      //     year: 2020,
      //     path: "2019LovewellPondAnnualMeetingMinutes.pdf",
      //   },
      // ],
    };
  },
};
</script>
<style scoped></style>
