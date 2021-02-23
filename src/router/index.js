import Vue from "vue";
import Router from "vue-router";
import LaunchYear from "../components/LaunchYear";
import CompleteData from "../components/CompleteData";
import Launch1 from "../components/Launch1";
import Land1 from "../components/Land1";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/LaunchYear",
      name: "LaunchYear",
      component: LaunchYear
    },
    {
      path: "/CompleteData",
      name: "CompleteData",
      component: CompleteData
    },
    {
      path: "/launch1",
      name: "launch1",
      component: Launch1
    },
    {
      path: "/land1",
      name: "land1",
      component: Land1
    }
  ]
});
