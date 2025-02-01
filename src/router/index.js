import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Association from "../views/Association.vue";
import LakeStewardship from "../views/Stewardship.vue";
import Resources from "../views/Resources.vue";
import LostAndFound from "../views/LostAndFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: "/association",
      name: "association",
      component: Association,
    },
    {
      path: "/stewardship",
      name: "stewardship",
      component: LakeStewardship,
    },
    {
      path: "/resources",
      name: "resources",
      component: Resources,
    },
    {
      path: "/lostandfound",
      name: "lostandfound",
      component: LostAndFound,
      // component: () => import('../views/LostAndFound.vue')
    },
  ],
});

export default router;
