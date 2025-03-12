<template>
  <div class="container text-center footer">
    <div class="row align-items-end">
      <div class="col-md-1"></div>
      <div class="col-md-2">
        <a
          role="button"
          id="ppbtn"
          class="btn btn-outline-info"
          href="TheLovewellPondAssociationPrivacyPolicy.pdf"
          target="_blank"
        >
          Privacy Policy
        </a>
      </div>
      <div id="footer-text" class="col-md-6 justify-content-center">
        <p>&copy;Lovewell Pond Association - All rights reserved.</p>
        <p>Property Owners of Lovewell Pond Association</p>
        <p>P.O. Box 617, Fryeburg, ME 04037</p>
        <p>
          <a href="mailto:lovewellpondassoc@gmail.com" target="_blank"
            >Contact Us</a
          >
        </p>
        <br />
        <p>
          Website designed by
          <a href="mailto:lovewellpondassoc@gmail.com" target="_blank"
            >Dawn Sirois, Portsmouth, NH</a
          >
        </p>
      </div>
      <div class="col-md-2 justify-content-center">
        <a href="https://www.wunderground.com/?cm_ven=cgi" target="_blank"
          >Fryeburg Weather
          <img
            class="btn btn-outline-info"
            style="border-style: solid; padding: 10px 10px 10px 10px"
            src="@/assets/images/snow_winter_icon.png"
            alt="Click for Fryeburg, Maine Weather Forecast"
            height="75"
            width="120"
        /></a>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background: #287492;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  font: 14px/10px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
}
#ppbtn {
  padding: 30px 30px 30px 30px;
  color: white;
}

.footer a {
  color: #ffffff;
  padding-right: 15px;
}
@media screen and (min-width: 980px) {
  #footer-text {
    font: Bold 11px/10px Arial;
  }
  #ppbtn {
    padding: 30px 30px 30px 30px;
    color: white;
  }
}
@media screen and (max-width: 980px) {
  #footer-text {
    font: Bold 11px/10px Arial;
  }
  #ppbtn {
    padding: 2px 2px 2px 2px;
    color: white;
  }
}
@media screen and (max-width: 768px) {
  #footer-text {
    font: Bold 11px/10px Arial;
  }
  #ppbtn {
    padding: 0px 0px 0px 0px;
    color: white;
  }
}
@media screen and (max-width: 640px) {
  #footer-text {
    font: Bold 11px/10px Arial;
  }
  #ppbtn {
    padding: 0px 0px 0px 0px;
    color: white;
  }
}
</style>
