import Vue from "vue";
import VueRouter from "vue-router";
const Main = () => import("views/Main");
const User = () => import("views/user");
const Mall = () => import("views/mall");
const pageOne = () => import("views/other/pageOne");
const pageTwo = () => import("views/other/pageTwo");
const Login = () => import("views/login/login");
Vue.use(VueRouter);

const routes = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      redirect: "/main",
    },
    {
      path: "/main",
      name: "Main",
      component: Main,
      children: [
        {
          path: "",
          redirect: "/home",
        },
        {
          path: "/home",
          name: "home",
          component: () => import("views/home"),
        },
        {
          path: "/user",
          name: "user",
          component: User,
        },
        {
          path: "/page1",
          name: "page1",
          component: pageOne,
        },
        {
          path: "/page2",
          name: "page2",
          component: pageTwo,
        },
        {
          path: "/mall",
          name: "mall",
          component: Mall,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default routes;
