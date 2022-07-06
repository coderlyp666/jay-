<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        class="el-icon-menu"
        size="mini"
        @click="handC"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tag"
          :key="item.path + ''"
          :to="{ path: item.path }"
        >
          <span
            :class="{ active: $route.name === item.name }"
            style="color: #ffffff; font-weight: 200"
          >
            {{ item.label }}
          </span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size=" mini">
        <span class="img">
          <img :src="userImg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("assets/image/user.jpg"),
    };
  },
  methods: {
    handC() {
      this.$store.commit("collapseMenu");
    },

    logOut() {
      this.$store.commit("clearToken");
      this.$store.commit("clearMenu");
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapState({
      tag: (state) => state.tab.tabList,
    }),
    // active() {
    //   return this.path ? { color: "red" } : {};
    // },
  },
};
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.img img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.active {
  color: #409eff !important;
  font-weight: 600 !important;
}
</style>
