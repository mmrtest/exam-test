import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Api from "./views/Api.vue";
import Function1 from "./views/Function1.vue";
import Function2 from "./views/Function2.vue";
import Function3 from "./views/Function3.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/api",
      name: "api",
      component: Api,
    },
    {
      path: "/function1",
      name: "function1",
      component: Function1,
    },
    {
      path: "/function2",
      name: "function2",
      component: Function2,
    },
    {
      path: "/function3",
      name: "function3",
      component: Function3,
    },
  ],
  mode: "history",
});
