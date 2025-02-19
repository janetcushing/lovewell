<template>
  <div class="home">
    <br />
    <div class="container blurb-container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="row">
            <h2 class="l-heading">Stewardship Practices Checklist</h2>
            <h5 class="l-heading">
              for the Protection & Resiliency of Lovewell Lake, Fryeburg, ME
            </h5>
          </div>
          <br /><br />
          <div class="row">
            <p>
              <a
                class="btn btn-success"
                href="./Stewardship_Practices_Checklist_June_27_2024.pdf"
                role="button"
                target="_blank"
                >Download Stewardship Practices Checklist</a
              >
            </p>
          </div>
          <br /><br />
          <div class="row">
            <h2 class="l-sub-heading">
              Help Prevent Exotic/Invasive Species from Entering the Lake
            </h2>
          </div>
          <div class="row">
            <li class="list-group">
              <li
                class="list-group-item"
                v-for="inv in invasives"
                :key="inv.id"
                v-html="inv.detail"
              ></li>
            </li>
          </div>
          <br />
          <div class="row">
            <h2 class="l-sub-heading">Boating and Recreation Best Practices</h2>
          </div>
          <div class="row">
            <li class="list-group">
            <li
              class="list-group-item"
              v-for="boat in boats"
              :key="boat.id"
              v-html="boat.detail"
            ></li>
            </li>
          </div>
          <br />
          <div class="row">
            <h2 class="l-sub-heading">
              Minimizing Construction Impacts(sedimentatin and erosion)
            </h2>
          </div>
          <div class="row">
            <li class="list-group">
            <li
              class="list-group-item"
              v-for="impact in construction"
              :key="impact.id"
              v-html="impact.detail"
            ></li>
            </li>
          </div>
          <br />
          <div class="row">
            <h2 class="l-sub-heading">
              Yard Care and Maintenance Best Management Practices (for Water
              Quality)
            </h2>
          </div>
          <div class="row">
            <li class="list-group">
            <li
              class="list-group-item"
              v-for="care in yard"
              :key="care.id"
              v-html="care.detail"
            ></li></li>
          </div>
          <br />
          <div class="row">
            <h2 class="l-sub-heading">Septic System Maintenance</h2>
          </div>
          <div class="row">
            <li class="list-group">
            <li
              class="list-group-item"
              v-for="maint in septic"
              :key="maint.id"
              v-html="maint.detail"
            ></li></li>
          </div>
          <br />
          <div class="row">
            <h2 class="l-sub-heading">
              Minimizing Impact Due to Floods (from heavy rains and winter thaw)
            </h2>
          </div>
          <div class="row">
            <li class="list-group">
            <li
              class="list-group-item"
              v-for="flood in floods"
              :key="flood.id"
              v-html="flood.detail"
            ></li></li>
          </div>
          <br />
          <div class="row">
            <h4 class="splash">
              THANK YOU for helping to keep Lovewell Pond beautiful!
            </h4>
          </div>
          <br /><br />
        </div>
        <div class="col-md-1"></div>
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
      invasives: [
        {
          id: 1,
          detail: "Learn how to identify and control exotic species",
        },
        {
          id: 2,
          detail:
            "Inspect and clean boats & equipment for exotics/invasives before taking them to other waters    ",
        },
        {
          id: 3,
          detail:
            "Never dump bait buckets or live fish from one water body into another",
        },
        {
          id: 4,
          detail:
            "Contact Lovewell Pond Association to learn more or be an inspector at the Boat Launch",
        },
      ],
      boats: [
        {
          id: 10,
          detail: "Be aware of Loon nesting sites and avoid disturbing them",
        },
        {
          id: 11,
          detail:
            "Use a 4-cycle boat engine (less pollution than 2-cycle) or a non-motorized boat",
        },
        {
          id: 12,
          detail:
            "Adjust boat speed to reduce wake and minimize wave damage to shore and loon nests",
        },
        {
          id: 13,
          detail:
            "Use lead-free weights and tackle (to prevent lead poisoning to aquatic animals)",
        },
        {
          id: 14,
          detail: "Don't wash dishes, laundry, or self in lake ",
        },
        {
          id: 15,
          detail: "Properly dispose of wastewater when boating and ice fishing",
        },
        {
          id: 16,
          detail:
            "Don't litter or dispose of any food or waste into the lake or along it's shores",
        },
        {
          id: 17,
          detail: "Do not remove ice ridges that form along the shoreline",
        },
        {
          id: 18,
          detail: "Avoid using fireworks along and near the pond.",
        },
      ],
      construction: [
        {
          id: 30,
          detail: "Obey Maine Shoreland Zoning Rules",
        },
        {
          id: 31,
          detail: "Implement erosion control measures ",
        },
        {
          id: 32,
          detail:
            "Reduce or minimize paved areas (e.g. use permeable road surfaces  to prevent runoff) ",
        },
      ],
      yard: [
        {
          id: 30,
          detail: "Obey Maine Shoreland Zoning Rules",
        },
        {
          id: 31,
          detail:
            "Review and understand water quality monitoring results provided by Lovewell Pond Association",
        },
        {
          id: 32,
          detail:
            "Preserve a vegetative buffer along the shore to extent feasible",
        },
        {
          id: 33,
          detail:
            "Use zero phosphorus fertilizer, unless soil test results show phosphorus is needed",
        },
        {
          id: 34,
          detail:
            "Do not use fertilizers or hazardous pesticides near the lake.  Note: Clover is a natural fertilizer that doesn’t pollute lakes",
        },
        {
          id: 35,
          detail:
            "Use native trees, shrubs, grasses, sedges, and wildflowers for erosion control",
        },
        {
          id: 36,
          detail: "Do not remove rocks, soil, plantings along shore",
        },
        {
          id: 37,
          detail: "Pick up pet waste and dispose of properly (municipal trash)",
        },
        {
          id: 38,
          detail:
            "Minimize use of salt and sand on walkways and driveways during the winter",
        },
        {
          id: 39,
          detail: "Maintain all vehicles to prevent leakage of fuel",
        },
        {
          id: 40,
          detail:
            "Store any and all chemicals indoors in a secure, dry location",
        },
        {
          id: 41,
          detail:
            "Keep trash dumpsters/receptacles secure from bears (metal covers and closed at all times)",
        },
      ],
      septic: [
        {
          id: 50,
          detail:
            "Ensure you have a legal septic tank and do not discharge directly to the lake (to prevent e Coli bacteria)",
        },
        {
          id: 51,
          detail:
            "Eliminate use of garbage disposal when using an on-site septic system",
        },
        {
          id: 52,
          detail:
            "Pump septic tank annually, through the manhole, not through inspection port",
        },
        {
          id: 53,
          detail: "Don’t use septic tank additives",
        },
      ],
      floods: [
        {
          id: 60,
          detail:
            "Be aware when flooding is possible (Saco River floods before the Lake does)",
        },
        {
          id: 61,
          detail:
            "Make sure docks and boats are secure before heavy rain is anticipated",
        },
        {
          id: 62,
          detail:
            "Remove all loose materials (furniture, wood piles, toys, equipment, etc.) and move indoors or to higher ground",
        },
        {
          id: 63,
          detail:
            "Use native trees, shrubs, grasses, sedges, and wildflowers for erosion control",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
