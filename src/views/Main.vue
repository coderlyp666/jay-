<template>
  <el-container style="width: 100%; height: 100vh; overflow: hidden">
    <el-aside style="width: auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tag />
      <el-main style="height: 100vh; overflow: auto"
        ><router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "components/CommonAside";
import CommonHeader from "components/CommonHeader";
import CommonTag from "../components/CommonTag";

export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #474444;
}
.el-main {
  padding-top: 0;
}
.el-aside {
  overflow: visible;
}
</style>
