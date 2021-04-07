import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllSports from "../views/AllSports"
import AllTheaters from "../views/AllTheaters"
import AllConcerts from "../views/AllConcerts"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/allSports",
    name: "AllSports",
    component: AllSports,
  },
  {
    path: "/allTheaters",
    name: "AllTheaters",
    component: AllTheaters,
  },
  {
    path: "/allConcerts",
    name: "AllConcerts",
    component: AllConcerts,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
