import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllSports from "../views/AllSports"

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
