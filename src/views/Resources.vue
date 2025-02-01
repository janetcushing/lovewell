<template>
  <div class="home">
    <br />
    <div class="container blurb-container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="row">
            <h2 class="l-heading">Resources</h2>
          </div>
          <div class="row">
            <p class="l-text">
              A number of agencies and organizations have programs and
              activities which affect our Lovewell Pond Community, and which
              influence the uses and environment of the Pond.
            </p>
          </div>
          <br /><br /><br /><br />
          <div class="row">
            <h2 class="l-sub-heading">Town of Fryeburg</h2>
          </div>
          <div class="row">
            <table>
              <tr v-for="tow in town" :key="tow.id">
                <td class="l-text" v-html="tow.detail"></td>
              </tr>
            </table>
          </div>
          <br />
          <div class="row">
            <h2 class="l-sub-heading">State of Maine</h2>
          </div>
          <div class="row">
            <table>
              <tr v-for="sta in state" :key="sta.id">
                <td class="l-text" v-html="sta.detail"></td>
              </tr>
            </table>
          </div>
          <br />
          <div class="row">
            <h2 class="l-sub-heading">Lake Associations</h2>
          </div>
          <div class="row">
            <table>
              <tr v-for="water in lake" :key="water.id">
                <td class="l-text" v-html="water.detail"></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>

<script>
export default {
  name: "Resources",
  components: {},
  data() {
    return {
      town: [
        {
          id: 1,
          title: "Town of Fryeburg",
          detail:
            '<a href="https://www.fryeburgmaine.org/" target="_blank">Town of Fryeburg Website</a>',
        },
        {
          id: 1,
          title: "Fryeburg Recreation Department",
          detail:
            '<a href="https://www.fryeburgrec.com/" target="_blank">Fryeburg Recreation Department</a>',
        },
      ],
      state: [
        {
          id: 2,
          title: "State of Maine",
          sub_heading: "State of Maine",
          detail:
            '<a href="https://www.maine.gov/portal/index.html" target="_blank">State of Maine Website</a>',
        },
        {
          id: 4,
          title: "State of Maine",
          sub_heading: "Maine Department of Environmental Protection",
          detail:
            '<a href="http://www.maine.gov/dep" target="_blank">Department of Environmental Protection</a>',
        },
        {
          id: 5,
          title: "State of Maine",
          sub_heading: "Maine Department of Conservation",
          detail:
            '<a href="http://www.maine.gov/doc" target="_blank">Department of Conservation</a>',
        },
      ],
      lake: [
        {
          id: 8,
          title: "Lake Associations",
          sub_heading: "Lakes Environmental Association",
          detail:
            '<a href="http://www.mainelakes.org" target="_blank">Maine Lakes Environmental Association</a>',
        },
        {
          id: 11,
          title: "Lake Associations",
          sub_heading: "The Loon Preservation Committee",
          detail:
            '<a href="http://www.loon.org" target="_blank">The Loon Preservation Committee</a>',
        },
        {
          id: 12,
          title: "Lake Associations",
          sub_heading: "Lake Friendly Living Tips",
          detail:
            '<a href="https://www.siyachts.com/lake-friendly-living-tips" target="_blank">Lake Friendly Living Tips</a>',
        },
      ],
    };
  },
};
</script>
<style scoped></style>
