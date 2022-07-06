import Cookie from "js-cookie";
export default {
  state: {
    isCollapse: false,
    tabList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    currentMenu: null,
    menu: [],
  },
  getters: {},
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      //判断是否是首页
      if (val.name !== "home") {
        state.currentMenu = val;
        //判断选中项存不存在
        const result = state.tabList.findIndex(
          (item) => item.name === val.name
        );
        if (result === -1) {
          state.tabList.push(val);
        } else {
          state.currentMenu = null;
        }
      }
    },
    choseTag(state, index) {
      state.tabList.splice(index, 1);
    },
    setMenu(state, val) {
      state.name = val;
      Cookie.set("menu", JSON.stringify(val));
    },
    addMenu(state, router) {
      if (!Cookie.get("menu ")) {
        return;
      }
      const menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      const menuArray = [];
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((item) => {
            item.component = () => import(`views/${item.url}`);
            return item;
          });
          menuArray.push(item);
        } else {
          item.component = () => import(`views/${item.url}`);
          menuArray.push(item);
        }
      });
      //路由的动态添加
      menuArray.forEach((item) => {
        router.addRoute("Menu", item);
      });
    },
  },
  actions: {},
};
