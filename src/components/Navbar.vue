<template>
  <b-nav id="nav" class="navbar navbar-nav">
    <div class="container">
      <!-- <button
        id="hamburger"
        class="navbar-toggler"
        type="button"
        data-bs-target="#collapseTarget"
        data-bs-toggle="collapse"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <!-- <div class="collapse" id="collapseTarget"> -->
      <div>
        <RouterLink to="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</RouterLink>
        <RouterLink to="/about"
          >&nbsp;&nbsp;Lovewell Pond&nbsp;&nbsp;</RouterLink
        >
        <RouterLink to="/association"
          >&nbsp;&nbsp; The Association&nbsp;&nbsp;
        </RouterLink>
        <RouterLink to="/stewardship"
          >&nbsp;&nbsp;Lake Stewardship&nbsp;&nbsp;</RouterLink
        >
        <RouterLink to="/resources"
          >&nbsp;&nbsp;Resources&nbsp;&nbsp;</RouterLink
        >
        <RouterLink to="/lostandfound">
          &nbsp;&nbsp;Lost and Found&nbsp;&nbsp;
        </RouterLink>
      </div>
      <div>
        <a
          href="https://app.joinit.com/o/lovewell-pond-association/"
          title="Memberships for Lovewell Pond Association"
          id="memberbutton"
          target="_blank"
          >Membership Login</a
        >
      </div>
    </div>
  </b-nav>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* .navbar { */
/* background-color: #287492; */
/* color: #ffffff; */
/* margin-left: 10px; */
/* margin-right: 10px; */
/* } */
.nav-collapse {
  background-color: #287492;
}
.navbar-toggler {
  display: block;
}
.collapse {
  &:not(.show) {
    display: flex;
  }
}

.nav-link:hover {
  background-color: #ff6e07 !important;
}
#nav {
  background-color: #287492;
  color: #ffffff;
  text-align: center;
  padding: 20px 20px 20px 20px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}
#memberbutton {
  text-decoration: none;
  padding: 11px 20px;
  font-size: 15px;
  color: #fff;
  border: none;
  background-color: #00cc52;
  font-weight: 400;
  border-radius: 3px;
}

#nav a.router-link-exact-active {
  color: #ffc107;
}
@media (max-width: 992px) {
  /* .navbar {
    margin-left: 31px;
    margin-right: 31px;
  } */
  .navbar-nav {
    display: flex;
  }
  .navbar-toggler {
    display: block;
  }
  .collapse {
    &:not(.show) {
      display: none;
    }
  }
  #memberbutton {
    padding: 4px 5px;
    font-size: 12px;
  }
}
@media (max-width: 768px) {
  /* .navbar { */
  /* margin-left: 12px; */
  /* margin-right: 12px; */
  /* } */
  .navbar-nav {
    display: flex;
  }
  .navbar-toggler {
    display: block;
  }
  .collapse {
    &:not(.show) {
      display: none;
    }
  }
  #memberbutton {
    padding: 4px 5px;
    font-size: 11px;
  }
}
</style>
