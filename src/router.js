import Vue from "vue";
import Router from "vue-router";
import Layout from "./components/layout";
import Home from "./views/home";
import Login from "./views/login";
import Register from "./views/register";
import Ask from "./views/ask";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "", name: "home", component: Home },
        { path: "ask", name: "ask", component: Ask }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
